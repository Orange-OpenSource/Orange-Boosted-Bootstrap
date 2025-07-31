// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Boosted's docs (https://boosted.orange.com/)
 * Copyright 2015-2025 The Boosted Authors
 * Copyright 2015-2025 Orange
 * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/main/LICENSE)
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

// Boosted mod: Remove back-to-top component from all pages when its not needed
export default () => {
  document.querySelectorAll('pre[class]').forEach(element => {
    element.tabIndex = 0
  })
}
// End mod
