(function($, zr) {
  'use strict';

  var zrgoog = new zr.GoogleYolo.ZrLoginOrRegister({
    clientId:         zr.page.model.GOOGLE_SIGNIN_CLIENT_ID,
    regMethod:        zr.page.model.google_signin_reg_method,
    loginMethod:      zr.page.model.google_signin_login_method,
    autoLoginMethod:  zr.page.model.google_signin_auto_login_method,
    autoLogin:        zr.page.model.google_signin_auto_login,
    disableAutoLogin: zr.page.model.google_signin_disable_auto_login,
    search:           zr.page.model.google_signin_search,
    location:         zr.page.model.google_signin_location,
    encrypted_id:     zr.page.model.google_signin_encrypted_id
  });
  var $fauxHeader = $('[data-type="google-yolo-faux-header"]');

  var failed = false;

  // Load the script, show the modal, and wait for user input
  zrgoog.showModal(function($yoloIframe) {
    $fauxHeader.show();
    $fauxHeader.insertBefore($yoloIframe);

    // So we're not guessing with UA, let's see where the iframe is on the page
    var iframePosition = 'desktop';

    if (parseInt($yoloIframe.css('bottom')) === 0) {
      iframePosition = 'mobile';
    }

    $(document.body).addClass('yolo_pos_' + iframePosition);

    setTimeout(function() {
      $fauxHeader
        .addClass('showing')
        .css({
          'margin-bottom': $yoloIframe.height()
        });
    }, 0);
  }).then(function(data) {
    $fauxHeader.hide();

    if (data && data.success) {
      // This is for the Phil job page
      if (zr.page.model.google_signin_refresh_and_apply) {
        var store = zr.store({
          json: false,
          session: false
        });

        window.location.reload(true);
      // If frontend tells us to just refresh
      } else if (zr.page.model.google_signin_refresh) {
        window.location.reload(true);
      // If frontend provided us a forwarding url
      } else if (zr.page.model.google_signin_next_url) {
        window.location = zr.page.model.google_signin_next_url;
      // Otherwise follow the next_url
      } else if (data.data && data.data.next_url) {
        window.location.href = data.data.next_url;
      // Default to /
      } else {
        // TODO: Can this happen?
        window.location.href = '/';
      }
    } else {
      // TODO: Can this happen?
    }
  }, function(error) {
    $fauxHeader.hide();

    if (!error || !error.type) {
      // the script failed to load, or there is no google account
      return;
    }

    // The user closed the modal
    // TODO: Messages
    switch (error.type) {
      case "userCanceled":
        // The user closed the hint selector. Depending on the desired UX,
        // request manual sign up or do nothing.

        if (zr.page.model.google_signin_close_cookie) {
          // Set a cookie so we do not show this again for 7 days
          var date = new Date();
          date.setTime(date.getTime() + 7*24*60*60*1000);
          document.cookie = zr.page.model.google_signin_close_cookie + '=1; expires=' + date.toUTCString() + '; path=/';
        }

        break;
      case "noCredentialsAvailable":
        // No hint available for the session. Depending on the desired UX,
        // request manual sign up or do nothing.
        break;
      case "requestFailed":
        // The request failed, most likely because of a timeout.
        // You can retry another time if necessary.
        break;
      case "operationCanceled":
        // The operation was programmatically canceled, do nothing.
        break;
      case "illegalConcurrentRequest":
        // Another operation is pending, this one was aborted.
        break;
      case "initializationError":
        // Failed to initialize. Refer to error.message for debugging.
        break;
      case "configurationError":
        // Configuration error. Refer to error.message for debugging.
        break;
      default:
        // Unknown error, do nothing.
    }
  });
}(window.jQuery, window.zr));
