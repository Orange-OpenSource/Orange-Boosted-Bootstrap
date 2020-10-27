/* eslint no-undef: 0 */
/* eslint camelcase: 0 */

(function ($) {
  'use strict'

  $(function () {
    $('[href="#"]').click(function (e) {
      e.preventDefault()
    })
    $(document).ready(function () {
      // init megamenu demo
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
        var sidebar = document.getElementById('docsNavbarContent')

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

        if (isElementInViewport(el)) {
          scrollTopElm.style.bottom = window.innerHeight - footerRect.top + parseInt(defaultPos, 10) + 'px'
        } else {
          scrollTopElm.style.bottom = defaultPos
        }
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

  if (typeof tarteaucitron !== 'undefined') {
    tarteaucitron.init({
      hashtag: '#cookie-consent', /* Open the panel with this hashtag */
      cookieName: 'cookie-consent', /* Cookie name */
      showAlertSmall: false,
      orientation: 'bottom', /* Banner position (top - bottom) */
      cookieslist: true, /* Show the cookie list */
      highPrivacy: false, /* Disable auto consent */
      handleBrowserDNTRequest: true, /* If Do Not Track == 1, disallow all */
      useExternalCss: true, /* If false, the tarteaucitron.css file will be loaded */
      readmoreLink: '/docs/{{ site.docs_version }}/about/cookies/' /* Change the default readmore link */
    })
    tarteaucitron.user.googletagmanagerId = 'GTM-P6H78BQ';
    (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager')
    dataLayer = [{
      site_name: 'accessibility-boosted',
      phase: 'prod', // dev, qa, prod
      page_type: 'doc', // type de page, optionnel
      page_title: document.title // obligatoire pour pages dynamiques
    }]
  }
})()
