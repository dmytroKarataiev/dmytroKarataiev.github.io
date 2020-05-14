/*

For non-catalyst pages to show banners

*/

(function($) {
  'use strict';

  // Set up zr for pages that don't have it
  window.zr = window.zr || {
    page: {
      model: {}
    }
  };

  window.zr.page = window.zr.page || {model: {}};

  // Special case for testing truste cookie banner inside the US
  var extra = ( document.location.href.indexOf('show_truste_banner=1') !== -1 ) ? '?show_truste_banner=1' : '';

  // if starterview isn't running, this endpoint would always return 502, in which case we want to limit our retries
  var requestLimit = 10;

  // Check privacy policy endpoint
  var get_auto_banners = function() {
    $.ajax((zr.page.model.url_prefix ? zr.page.model.url_prefix : '') + '/get-auto-banners' + extra, {

    })
    .done(function(data) {
      if ( data && data.html ) {
        var html = $.trim(data.html);

        if ( !html ) { return; }

        $(document.body).append(html);

        var $el = $('.get-auto-banners');

        $el.find('link[rel="x-javascript"]').each(function() {
          var $this = $(this);

          // Make sure jQuery doesn't add query params to our script
          $.ajaxSetup({ cache: true });

          $('<script/>')
            .attr('src', $this.attr('href'))
            .insertAfter($this);
          $this.remove();
        });
      }
    })
    .fail(function() {
      if(--requestLimit) {
        setTimeout(get_auto_banners, 1000);
      }
    });
  };

  setTimeout(get_auto_banners, 2000);
})(window.jQuery);
