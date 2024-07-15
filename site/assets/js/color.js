// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for OUDS Web's docs (https://web.unified-design-system.orange.com/)
 * Copyright 2015-2024 The OUDS Web Authors
 * Copyright 2015-2024 Orange
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global oudsWeb: false */

import ClipboardJS from 'clipboard'

(() => {
  const copyVariable = new ClipboardJS('.color-copy', {
    text: trigger => trigger.getAttribute('data-clipboard-text')
  })

  copyVariable.on('success', event => {
    const tooltipBtn = oudsWeb.Tooltip.getInstance(event.trigger)
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
