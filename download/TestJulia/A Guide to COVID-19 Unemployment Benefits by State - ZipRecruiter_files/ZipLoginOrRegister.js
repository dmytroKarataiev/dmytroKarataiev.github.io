/* global Promise */
/*

Handles logging in/registering to ZR with a google account

Requires `zr.GoogleAPI` and jQuery

Usage:

  // Set up our object
  var zrgoog = new zr.GoogleYolo.ZrLoginOrRegister({
    clientId:    zr.page.model.GOOGLE_SIGNIN_CLIENT_ID,
    regMethod:   zr.page.model.google_signin_reg_method,
    loginMethod: zr.page.model.google_signin_login_method
  });

  // Show our modal
  zrgoog.showModal(function() {
    // This function fires when the yolo prompt is on the page and visible to the user
  }).then(function(data) {
    // This function fires when the user has been successfully logged-in to our site
  }, function(error) {
    // This function fires when the user did not log in for whatever reason
    // Script didn't load, no google account, closed the prompt, our server returned an error state, etc.
  });

*/

(function(GoogleYolo) {
  'use strict';

  var ZrLoginOrRegister = function(params) {
    this.clientId         = params.clientId; // Maybe throw an error here if not set
    this.loginMethod      = params.loginMethod || 'google_login.unknown';
    this.autoLoginMethod  = params.autoLoginMethod || 'google_login.unknown.auto';
    this.regMethod        = params.regMethod || 'google_reg.unknown';
    this.autoLogin        = params.autoLogin || false;
    this.disableAutoLogin = params.disableAutoLogin || false;
    this.search           = params.search;
    this.location         = params.location;
    this.encrypted_id     = params.encrypted_id;
  };

  // Load google yolo and show the modal
  ZrLoginOrRegister.prototype.showModal = function(successfn) {
    var goog = new zr.GoogleYolo();
    var self = this;
    var failed = false;

    // Run the google yolo stuff
    return goog.loadScript()
      .then(function() {
        if ( self.disableAutoLogin ) {
          goog.yolo.disableAutoSignIn();
        }

        var prm;

        if ( self.autoLogin ) {
          prm = goog.getCredentials(self.clientId);
        } else {
          prm = goog.showModal(self.clientId);
        }

        if (successfn) {
          setTimeout(function() {
            if (failed) return;

            var $yoloIframe = $('iframe[src^="https://smartlock.google.com/iframe/request"]');

            if ($yoloIframe.length) {
              // This is fragile, but we know when the style attribute is updated, the prompt can be seen
              var config = { attributes: true, childList: false, subtree: false };
              var observer = new MutationObserver(function(mutationsList, observer) {
                if ( $yoloIframe.is(':visible') ) {
                  observer.disconnect();

                  successfn($yoloIframe);
                }
              });

              observer.observe($yoloIframe[0], config);
            }
          }, 0);
        }

        return prm;
      })
      .then(function(c) {
        return self.loginOrRegister(c);
      });
  };

  // Log the user in/register the user once google has given us their info
  ZrLoginOrRegister.prototype.loginOrRegister = function(c) {
    var self = this;
    var emailAddress = c.id;

    return new Promise(function(resolve, reject) {
      var params = {
        token: c.idToken,
        reg_method: self.regMethod,
        login_method: c.__auto ? self.autoLoginMethod : self.loginMethod
      };

      if (self.search) {
        params.search = self.search;
      }

      if (self.location) {
        params.location = self.location;
      }

      if (self.encrypted_id) {
        params.encrypted_id = self.encrypted_id;
      }

      // Run the zr specific login/register script
      $.ajax('/auth/api/google_login_or_reg/v1', {
        method: 'POST',
        data: params
      }).done(function(data) {
        if (data.success) {
          data.email_address = emailAddress; // eslint-disable-line no-param-reassign
          resolve(data);
        } else {
          reject(data);
        }
      }).fail(function(data) {
        clearInterval(self.iframeCheckInterval);

        try {
          if (data.responseJSON.data.error_code === 'user_already_logged_in') {
            // Most likely the user opened two tabs and is attempting to log in again, so let's just refresh the page
            document.location.reload(true);
          }
        } catch(e) {}

        reject(data);
      });
    });
  };

  // Open this up for outside use
  GoogleYolo.ZrLoginOrRegister = ZrLoginOrRegister; // eslint-disable-line no-param-reassign
}(window.zr.GoogleYolo));
