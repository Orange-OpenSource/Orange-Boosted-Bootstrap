// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Boosted's docs (https://boosted.orange.com/)
 * Copyright 2015-2024 The Boosted Authors
 * Copyright 2015-2024 Orange
 * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/main/LICENSE)
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

// Boosted mod: Remove back-to-top component from all pages when its not needed
export default () => {
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
}
// End mod
