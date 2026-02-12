// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for OUDS Web's docs (https://web.unified-design-system.orange.com/)
 * Copyright 2015-2025 The OUDS Web Authors
 * Copyright 2015-2025 Orange
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

// OUDS mod: Add tabindex to <pre> elements with a class to ensure a proper focus
export default () => {
  document.querySelectorAll('.add-user-agent').forEach(element => {
    element.href += `&user-agent=${window.navigator.userAgent}`
  })
}
// End mod
