// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, boosted: false */

(() => {
  'use strict'

  const copyVariable = new ClipboardJS('.color-copy', {
    text: trigger => trigger.getAttribute('data-clipboard-text')
  })

  copyVariable.on('success', event => {
    const tooltipBtn = boosted.Tooltip.getInstance(event.trigger)
    const originalTitle = event.trigger.getAttribute('data-bs-title')

    tooltipBtn.setContent({ '.tooltip-inner': 'Copied!' })
    event.trigger.addEventListener('hidden.bs.tooltip', () => {
      tooltipBtn.setContent({ '.tooltip-inner': originalTitle })
      event.trigger.title = originalTitle
    }, { once: true })
    event.trigger.addEventListener('mouseleave', () => {
      tooltipBtn.hide()
    }, { once: true })
    event.clearSelection()
  })
})()
