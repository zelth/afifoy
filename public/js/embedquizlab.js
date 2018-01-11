/* eslint-disable */
(function (w, d) {
  var container = d.getElementById('quizlab-wjs');
  var parentUrl = (window.location != window.parent.location) ? document.referrer : parent.document.URL;
  var quizId = container.getAttribute('data-quiz-id');
  var lp = container.getAttribute('data-lp');
  var quizFooter = container.getAttribute('data-quiz-footer') || 0;
  var quizStartPage = container.getAttribute('data-quiz-start-page') || 1;
  var domain = container.getAttribute('data-domain');
  var script = document.createElement('script');
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", '//'+domain+"/js/iframeResizer.js");
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        scriptLoadHandler();
      }
    };
  } else {
    script.onload = scriptLoadHandler;
  }
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);

  function scriptLoadHandler () {
    var iframe = d.createElement('iframe');
    container.style.margin = 0;
    iframe.setAttribute('src', '//'+domain+'/q/'+quizId+'?url='+parentUrl+'&footer='+quizFooter+'&startPage='+quizStartPage+(lp?"&lp=1":""));
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.style.width = '100%';
    container.appendChild(iframe);
    var isOldIE = (navigator.userAgent.indexOf("MSIE") !== -1);
    iFrameResize({
      log: false,
      checkOrigin: false,
      heightCalculationMethod: isOldIE ? 'max' : 'lowestElement'
    }, iframe);
  }
})(window, document);
