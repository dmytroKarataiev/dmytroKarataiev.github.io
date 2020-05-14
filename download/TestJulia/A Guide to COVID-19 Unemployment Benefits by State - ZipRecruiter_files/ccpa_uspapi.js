(function() {
  'use strict';

  var USP_VERSION = 1;
  var PRIVACY_STRING_COOKIE_NAME = 'usprivacy';

  // https://stackoverflow.com/questions/10730362/get-cookie-by-name#answer-25346429
  var getCookie = function(name) {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
  };

  // Return the cookie in a properly formatted object
  var getUSPData = function(callback) {
    var userSignalCookie = getCookie(PRIVACY_STRING_COOKIE_NAME) || '';

    callback({
      version: USP_VERSION,
      uspString: userSignalCookie
    }, true);
  };

  ////////////////////////////////
  // On-page cookie reading api
  ////////////////////////////////

  // NOTE: The CCPA spec doesn't give guidence on error handling
  window.__uspapi = function(commandName, version, callback) {
    version = parseInt(version);
    callback = callback || function() {
      console.dir(arguments);
    };

    if (USP_VERSION !== version) {
      callback('Error: Invalid version number', false);
    }

    if (commandName === 'getUSPData') {
      getUSPData(callback);
    } else {
      callback('Error: Invalid command', false);
    }
  };

  ////////////////////////////////
  // Child iframe support
  ////////////////////////////////

  /*
    Per the CCPA spec, we must support nested iframes, however
    they don't mention _how_ we should support them. For now
    we'll do what I saw some guy say on some github page. It
    is theoretically similar to how GDPR works.
  */

  // Handle iframe message
  var receiveMessage = function(event) {
    var data = event.data;
    var uspCall;

    if (typeof data === 'string') {
      // This could be from something intentionally sending
      // a string for some other non-uspapi purpose
      try {
        data = JSON.parse(data);
      } catch(err) {
        data = {};
      }
    }

    uspCall = data.__uspCall;

    // This message is probably for some other purpose
    if (!uspCall) {
      // Do nothing
      return;
    }

    var command = uspCall.command;
    var version = uspCall.version;
    var callId = uspCall.callId
    var response;

    if (command === 'getUSPData') {
      getUSPData(function(uspData, success) {
        sendMessage(event, {
          callId: callId,
          returnValue: uspData,
          success: success
        });
      });
    } else {
      sendMessage(event, {
        callId: callId,
        returnValue: 'Error: Invalid command',
        success: false
      });
    }
  };

  // Send messages back to the iframe
  var sendMessage = function(event, message) {
    if (!event || !event.source) return; // Not sure how, but this can sometimes be undefined

    event.source.postMessage({__uspReturn: message}, '*');
  };

  // Attach a postMessage listener for any iframes that may be dropped on our pages
  window.addEventListener('message', receiveMessage, false);
})();