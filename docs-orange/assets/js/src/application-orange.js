!function ($) {
  'use strict';

  $(function () {

    $('[href=#]').click(function (e) {
      e.preventDefault()
    });

    $(document).ready(function () {

      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      });

      $('.scrollup').click(function () {

        $('html, body').animate({
          scrollTop: 0
        }, 600);

        return false;
      });
    });
  })
}(jQuery);

(function () {
  'use strict';

  function isElementInViewport(el, topOffset) {
    var rect = el.getBoundingClientRect();

    if (!topOffset){ topOffset = 0; }

    return rect.bottom > topOffset &&
           rect.right > 0 &&
           rect.left < (window.innerWidth || document. documentElement.clientWidth) &&
           rect.top < (window.innerHeight || document. documentElement.clientHeight);
  }

  function onVisibilityChange(el) {
    return function () {
      var sidebar = document.getElementById('docsNavbarContent');

      if (isElementInViewport(el)) {
        sidebar.style.position = 'static';
        sidebar.style.top = 'auto';
      } else {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
      }
    };
  }

  window.onload = function () {
    var pageHeader = document.getElementById('page_header');
    var pageWatcher = onVisibilityChange(pageHeader);

    if (window.addEventListener) {
      addEventListener('scroll', pageWatcher, false);
    } else if (window.attachEvent)  {
      attachEvent('onscroll', pageWatcher);
    }
  };
})();
