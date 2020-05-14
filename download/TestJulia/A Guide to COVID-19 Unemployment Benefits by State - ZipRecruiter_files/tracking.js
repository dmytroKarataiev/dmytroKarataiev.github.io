!function(g,m){window.zr=window.zr||{},window.zr.event=window.zr.event||{},window.zr.event.allFired=window.zr.event.allFired||"";var u=window.zr.debug,v=window.zr.debugger?window.zr.debugger.logStyles:{};u&&console.log("%c zr%c.tracking %c Type %cwindow.zr.event.allFired%c to see all events fired this pageview",v.zr,v.name,v.reset,v.cmd,v.reset);window.zr.event.numFired=0,g.log_event=function(o,e,a){if(window.zr.event.numFired=window.zr.event.numFired+1,100<=window.zr.event.numFired)100===window.zr.event.numFired&&console.warn("Max events per page exceeded. No longer recording.");else{var r,i=2===arguments.length&&g.isFunction(e)?e:(r=e,a);if(o){var n={};if(r)for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);var s=g.extend({},window.zr.event.frontendSuperProperties,{referrer:document.referrer.substring(0,300),screen_height:screen.height||0,screen_width:screen.width||0,window_height:g(window).height()||0,window_width:g(window).width()||0,origin_type:"zr",fired_from:"frontend"});for(var t in s)s.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=s[t]);var c=window.zr.event.backendProperties;if(c!=m)for(var t in c)c.hasOwnProperty(t)&&(n[t]=c[t]);var d,w=function(){var e,a=window.location,r=a.hash;window.zr.event.pageviewBackendProperties!=m&&(e=window.zr.event.pageviewBackendProperties.internal_link);var n,t=/\bintsrc=([^&=]+)\&?/;return window.zr.event.intsrc!=m||(n=r.match(t))&&("#"===(r=r.replace(t,""))&&(r=""),history.replaceState(null,null,a.pathname+a.search+r),e&&(window.zr.event.intsrc=n[1].substring(0,64))),window.zr.event.intsrc}();w!=m&&(n.intsrc=w),d=window.JSON?JSON.stringify(n):'{"error":"JSON.stringify does not exist in browser"}';var l=Date.now(),p=window.zr.event.log_url||"/events/log",b={event_type:o,properties:d,path:window.zr.event.request_path||window.location.pathname,time:l};navigator&&navigator.sendBeacon?function(){u&&console.log("%c zr%c.tracking %c sendBeacon log_event: %c"+o,v.zr,v.name,v.cmd,v.reset,n);var e=new FormData;e.append("event_type",b.event_type),e.append("properties",b.properties),e.append("path",b.path),e.append("time",b.time),navigator.sendBeacon(p,e)}():(u&&console.log("%c zr%c.tracking %c log_event: %c"+o,v.zr,v.name,v.cmd,v.reset,n),g.ajax({url:p,dataType:"json",method:"POST",data:b})),function(e,a){var r,n,t;i!==m&&i.apply(this,arguments),"success"===a?(r="event-log",n=o,window.zr&&window.zr.event&&(t=n+" ("+r+" front-end)",window.zr.event.allFired+=window.zr.event.allFired?", "+t:t)):console.warn("Failed to log "+o+" event")}({},"success")}}},window.mixpanel={track:function(e,a){g.log_event&&g.log_event(e,a)}},window.zr.event.logPageView=function(){var e,a,r=(r=window.location.pathname).replace(/\/(\?.*)?$/,""),n=window.location.pathname+window.location.search,t=window.zr.event.backendProperties.page_type,o=window.zr.event.pageviewBackendProperties;document.referrer;switch(r){case"":case"/post-job":e="Homepage";break;case"/login":e="Login";break;case"/login/reset-password":e="Reset Password";break;case"/login/forgot-password":e="Forgot Password";break;case"/jobs/resume":e="Resume Landing";break;case"/mobile":e="Mobile Landing";break;case"/candidate/about":e="Candidate - About";break;case"/candidate/alerts":e="Candidate - Alerts";break;case"/candidate/my-jobs":e="Candidate - My Jobs";break;case"/candidate/resume":e="Candidate - My Resume";break;case"/candidate/references":e="Candidate - References";break;case"/candidate/notifications":e="Candidate - Notifications";break;case"/candidate/password":e="Candidate - Password";break;case"/candidate/unsubscribe":e="Candidate - Unsubscribe";break;case"/candidate/saved-jobs":e="Candidate - Saved Jobs";break;case"/candidate/suggested-jobs":e="Candidate - Suggested Jobs";break;case"/candidate/verify-identity":e="Candidate - Verify Identity";break;case"/candidate/gothired":e="Candidate - Got Hired";break;case"/candidate/replace-mobile-resume":e="Candidate - Replace Mobile Resume";break;case"/this-is-your-year":e="New Year 2017 Landing";break;case"/employer":e="Employer - Landing";break;case"/user/purchase-plan-simple":e="Employer - Paywall";break;case"/quiz/create":e="Employer - Quiz Create";break;case"/user/create":e="Employer - Reg Page";break;case"/user/account":e="Employer - User Account";break;case"/post-a-job":e="Employer - Post Job Landing";break;case"/jobs/search":e="Employer - Job Search Home";break;case"/employer/import-jobs":e="Employer - Import Jobs";break;case"/employer/not-my-job":e="Employer - Not My Job";break;case"/employer/reactivate":e="Employer - Reactivate";break;case"/user/purchase-upgrade":e="Employer - Upgrade Plan";break;case"/user/set-plan":e="Employer - Select Plan";break;case"/user/change-card":e="Employer - Change CC";break;case"/candidate/testimonials":case"/job-sites":case"/pricing":case"/enterprise":case"/features":case"/employer-reviews":case"/guarantee":case"/faq":case"/sales":case"/about":case"/scale":e="Marketing";break;case"/find-a-job":e="Vanity URL - SEM Simple"}if("Marketing"!=e){switch(t){case"Vanity URL":e="Vanity URL";break;case"Job Search Home":e="Job Search Home";break;case"Jobs Directory Page":e="Jobs DIRP";break;case"Enhanced Directory Page":e="Enhanced DIRP";break;case"Salary Page":e="Salary Page";break;case"Jobs SERP":e="Jobs SERP";break;case"Organic Job":e="Organic Job";break;case"Job Browse Home":e="Browse Jobs";break;case"Single Page Reg-to-SERP":e="Single Page Reg-to-SERP";break;case"Top Results Page":e="Top Results Page";break;case"Salary Data Widget":e="Salary Data Widget";break;case"Individual Job Page":e=window.zr.event.hasApplyUrl?"External Apply Job":"Zip Apply Job"}switch(n){case"/my-jobs?show=draft":e="Employer - Draft Jobs"}}"/blog"===r?e="Blog Home":r.match(/^\/blog\//)?e="Blog Page":r.match(/^\/contact\/survey\//)?e="Contact Survey Landing":r.match(/^\/candidate\/zipresume\/verify\//)?e="Edit Resume":r.match(/^\/candidate\/unsubscribe\//)?e="Candidate - Job Alert Unsubscribe":r.match(/^\/submit-reference\//)?e="Reference Submit Form":r.match(/^\/reference-giver\/create-alert\//)?e="Reference Giver - Create Alert":r.match(/^\/user\/details\/\?unsub/)||r.match(/^\/user\/unsubscribe/)?e="Employer - Unsubscribe":r.match(/^\/candidates/)&&(e="Employer - My Candidates"),e!==m||"undefined"!=(a=o.saw_registered_pixels)&&0==a&&(e="Employer - Payment Complete Page"),o.non_interaction=1,e&&(o.mixpanel_page_type=e),zr.page.model.is_zremployerapp&&(o.mobile_webview=1),g.log_event("page_view",o)}}(window.Zepto||window.jQuery||window.$);

  
    var dataLayer = dataLayer || [];
  

  
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-K48XH2');

    dataLayer.push({
      'event': 'page',
      'branding': '',
      'page_type': '',
      'page_path': '',
      'url_pattern': '',
      'audience_type': '',
      'platform': 'm',
      'source': '',
      'mid': '',
      'vmid': '',
      'vutm_source': '',
      'vutm_campaign': '',
      'vutm_medium': '',
      });

    dataLayer.push({
        'event': 'contact',
        'contact': {
          'contact_id': 'a7f8d73b',
          'source': '',
          'human_type' : 'candidate',
          'md5_email_address': '0f21d23bf55c306b923d97d7df0e2ee1',
          'is_responder': 0,
          'is_mau': 0,
          },
      });

      (function($) {
      var gtmWatchChange = {};
      $('.gtm_onchange').each(function() {
        var id = $(this).attr('id');
        gtmWatchChange[ id ]=0;

        $(this).keypress(function() {
          var id = $(this).attr('id');
          if (!gtmWatchChange[ id ]) {
            gtmWatchChange[ id ] = 1;
            dataLayer.push({
              'event': 'onChange',
              'field_name': $(this).attr('name'),
            });
          }
        });

        $(this).change(function() {
          var id = $(this).attr('id');
          if (!gtmWatchChange[ id ]) {
            gtmWatchChange[ id ] = 1;
            dataLayer.push({
              'event': 'onChange',
              'field_name': $(this).attr('name'),
            });
          }
        });
      });
    })(jQuery);

  

