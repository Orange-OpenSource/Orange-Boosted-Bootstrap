// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2026 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

export function snippetButtonTooltip(selector, tooltipLabel) {
  document.querySelectorAll(selector).forEach((btn) => {
    oudsWeb.Tooltip.getOrCreateInstance(btn, { title: tooltipLabel })
  })
}
