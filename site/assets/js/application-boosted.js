/* eslint no-undef: 0 */
/* eslint camelcase: 0 */

(function ($) {
  'use strict'

  $(function () {
    $('#docs-navbar').navbar({ sticky: true })
    $('[href="#"]').click(function (e) {
      e.preventDefault()
    })
    $(document).ready(function () {
      $('.mega-menu.panel').megamenu()
    })
  })
})(jQuery);

(function () {
  'use strict'

  function isElementInViewport(el, topOffset) {
    var rect = el.getBoundingClientRect()

    if (!topOffset) {
      topOffset = 0
    }

    return rect.bottom > topOffset &&
      rect.right > 0 &&
      rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
  }

  function onSidebarVisibilityChange(el) {
    if (el) {
      return function () {
        var sidebar = document.getElementById('docs-navbar-content')

        if (isElementInViewport(el)) {
          sidebar.style.position = 'static'
          sidebar.style.top = 'auto'
        } else {
          sidebar.style.position = 'fixed'
          sidebar.style.top = '0'
        }
      }
    }

    return function () {
      return true
    }
  }

  function onFooterVisibilityChange(el, scrollTopElm, defaultPos) {
    if (el && window.innerWidth > 768) {
      return function () {
        var footerRect = el.getBoundingClientRect()
        scrollTopElm.style.bottom = isElementInViewport(el) ? window.innerHeight - footerRect.top + parseInt(defaultPos, 10) + 'px' : defaultPos
      }
    }

    return function () {
      return true
    }
  }

  window.addEventListener('load', function () {
    var pageHeader = document.getElementById('page_header')
    var pageWatcher = onSidebarVisibilityChange(pageHeader)
    var findScrollTopElm = document.getElementsByClassName('scroll-top')
    var scrollTopElm = findScrollTopElm.item(0)
    var scrollTopStyles
    var scrollTopDefaultBottom
    var findFooter = document.getElementsByTagName('footer')
    var footerELm = findFooter.item(findFooter.length - 1)
    var footerWatcher

    if (scrollTopElm) {
      scrollTopStyles = window.getComputedStyle(scrollTopElm, null)
      scrollTopDefaultBottom = scrollTopStyles.bottom
      footerWatcher = onFooterVisibilityChange(footerELm, scrollTopElm, scrollTopDefaultBottom)
    }

    if (window.addEventListener) {
      if (window.innerWidth > 768) {
        window.addEventListener('scroll', pageWatcher, false)
      }

      if (footerWatcher) {
        window.addEventListener('scroll', footerWatcher, false)
      }
    } else if (window.attachEvent) {
      window.attachEvent('onscroll', pageWatcher)
      if (footerWatcher) {
        window.attachEvent('scroll', footerWatcher)
      }
    }
  })
})()
