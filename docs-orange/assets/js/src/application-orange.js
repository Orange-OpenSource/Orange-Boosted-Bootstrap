!function ($) {
  'use strict';

  $(function () {

    $('[href=#]').click(function (e) {
      e.preventDefault()
    });

    $(document).ready(function () {

      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scroll-top').fadeIn();
        } else {
          $('.scroll-top').fadeOut();
        }

      });

      $('.scroll-top').click(function () {

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

  function onSidebarVisibilityChange(el) {
    if (el) {
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
  }

  function onFooterVisibilityChange(el, scrollTopElm, defaultPos) {
    if (el) {
      return function () {

        var footerRect = el.getBoundingClientRect();

        if (isElementInViewport(el)) {
          scrollTopElm.style.bottom = (window.innerHeight - footerRect.top + parseInt(defaultPos)) + 'px';
        } else {
          scrollTopElm.style.bottom = defaultPos;
        }
      };
    }
  }

  window.onload = function () {
    var pageHeader = document.getElementById('page_header');
    var pageWatcher = onSidebarVisibilityChange(pageHeader);
    var findScrollTopElm = document.getElementsByClassName('scroll-top');
    var scrollTopElm = findScrollTopElm.item(0);
    var scrollTopStyles;
    var scrollTopDefaultBottom;
    var findFooter = document.getElementsByTagName('footer');
    var footerELm = findFooter.item(findFooter.length - 1);
    var footerWatcher;

    if (scrollTopElm) {
      scrollTopStyles = window.getComputedStyle(scrollTopElm, null);
      scrollTopDefaultBottom = scrollTopStyles.bottom;
      footerWatcher = onFooterVisibilityChange(footerELm, scrollTopElm, scrollTopDefaultBottom);
    }

    if (window.addEventListener) {
      addEventListener('scroll', pageWatcher, false);
      if (footerWatcher) {addEventListener('scroll', footerWatcher, false);}
    } else if (window.attachEvent)  {
      attachEvent('onscroll', pageWatcher);
      if (footerWatcher) {attachEvent('scroll', footerWatcher);}
    }
  };
})();
