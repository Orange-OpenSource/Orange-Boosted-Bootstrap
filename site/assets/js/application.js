// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

(() => {
  'use strict'

  // Scroll the active sidebar link into view
  const sidenav = document.querySelector('.bd-sidebar')
  const sidenavActiveLink = document.querySelector('.bd-links-nav .active')

  if (sidenav && sidenavActiveLink) {
    const sidenavHeight = sidenav.clientHeight
    const sidenavActiveLinkTop = sidenavActiveLink.offsetTop
    const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight
    const viewportTop = sidenavActiveLinkTop
    const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight

    if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
      sidenav.scrollTop = viewportTop - (sidenavHeight / 2) + (sidenavActiveLinkHeight / 2)
    }
  }

  // Boosted mod: Remove back-to-top component from all pages when its not needed
  ['load', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
      const removeClass = 'd-none'
      const html = document.querySelector('html')
      const btt = document.querySelector('.back-to-top')

      // 100(px) comes from:
      //   - 40px of back-to-top component
      //   - 40px of navbar-minimized
      //   - 20px of 'security'
      if (html.offsetHeight < window.innerHeight + 100) {
        btt.classList.add(removeClass)
      } else {
        btt.classList.remove(removeClass)
      }
    })
  })
  // End mod
})()
