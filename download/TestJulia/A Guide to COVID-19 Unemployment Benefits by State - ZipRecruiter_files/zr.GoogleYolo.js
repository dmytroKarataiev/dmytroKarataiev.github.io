/*

Usage:

  var goog = new zr.GoogleYolo();

  goog
    .showModal(zr.page.model.GOOGLE_SIGNIN_CLIENT_ID).then(function (c) {
      // After login, use c.idToken to verify login
    }, function(error) {
      // TODO: Messages
      switch (error.type) {
        case "userCanceled":
          // The user closed the hint selector. Depending on the desired UX,
          // request manual sign up or do nothing.
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

*/

(function(zr, $, Promise, undefined) {
  'use strict';

  var GoogleYolo = function() {
    this.src = 'https://smartlock.google.com/client';
    this.scriptTimeout = 500; //ms
    this.yolo = null;
  };

  // loads google's api script onto the page, returns a Promise
  GoogleYolo.prototype.loadScript = function() {
    var self = this;

    return new Promise(function(resolve, reject) {
      var el = document.createElement('script');
      el.setAttribute('type', 'text/javascript');
      el.setAttribute('src', self.src);

      window.onGoogleYoloLoad = function(googleyolo) {
        self.yolo = googleyolo;
        if ( resolve ) resolve(googleyolo);
      };

      el.onerror = function(e) {
        if ( reject ) reject(e);
      };

      document.getElementsByTagName('head')[0].appendChild(el);
    });
  };

  // Attempt to log the user in automatically, failing that show the modal
  GoogleYolo.prototype.getCredentials = function(client_id) {
    var self = this;

    return new Promise(function(resolve, reject) {
      // Get login credentials
      var ret = self.yolo.retrieve({
        supportedAuthMethods: [
          'https://accounts.google.com',
          'googleyolo://id-and-password'
        ],
        supportedIdTokenProviders: [
          {
            uri: 'https://accounts.google.com',
            clientId: client_id
          }
        ]
      }).then(function(c) {
        c.__auto = true;
        if ( resolve ) resolve(c);
      }, function(error) {
        // Don't reject the whole chain if we simply cannot log the user in
        if ( reject ) reject(error);
      });
    });
  };

  // Show the google log in prompt
  GoogleYolo.prototype.showModal = function(client_id) {
    var self = this;

    return new Promise(function(resolve, reject) {
      // Show the modal
      self.yolo.hint({
        supportedAuthMethods: ['https://accounts.google.com'],
        supportedIdTokenProviders: [{ uri: 'https://accounts.google.com', clientId: client_id }]
      }).then(function(c) {
        if ( resolve ) resolve(c);
      }, function(error) {
        if ( reject ) reject(error);
      });
    });
  };

  // Expose class to zr
  zr.GoogleYolo = GoogleYolo;
}(window.zr = window.zr || {}, window.jQuery, window.Promise));
