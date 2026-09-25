// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for OUDS Web's docs (https://web.unified-design-system.orange.com/)
 * Copyright 2015-2026 The OUDS Web Authors
 * Copyright 2015-2026 Orange
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/LICENSE)
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global oudsWeb: false */

import ClipboardJS from 'clipboard'
import { snippetButtonTooltip } from '@assets/snippetButtonTooltip'

const clipboardTooltip = 'Copy to clipboard'
snippetButtonTooltip('.btn-clipboard', clipboardTooltip)
snippetButtonTooltip('.btn-code-clipboard', clipboardTooltip)

const clipboard = new ClipboardJS('.btn-clipboard', {
  text: trigger => trigger.getAttribute('data-clipboard-text')
})

const codeClipboard = new ClipboardJS('.btn-code-clipboard', {
  target: (trigger) => trigger.closest('.bd-code-snippet')?.querySelector('.highlight'),
  text: (trigger) => {
    // Trim text to workaround a Firefox issue where the structure of the DOM (uncontrolled) is relevant for the
    // copied text.
    // https://github.com/zenorocha/clipboard.js/issues/439#issuecomment-312344621
    return trigger.closest('.bd-code-snippet')?.querySelector('.highlight')?.textContent?.trim()
  }
})

clipboard.on('success', (event) => _onSuccess(event))
codeClipboard.on('success', (event) => _onSuccess(event))

clipboard.on('error', (event) => _onError(event))
codeClipboard.on('error', (event) => _onError(event))

function _onSuccess(event) {
  const iconFirstChild = event.trigger.querySelector('svg')?.firstElementChild
  const tooltipBtn = oudsWeb.Tooltip.getInstance(event.trigger)
  const namespace = 'http://www.w3.org/1999/xlink'
  const originalXhref = iconFirstChild?.getAttributeNS(namespace, 'href')
  const isCheckIconVisible = originalXhref?.includes('#check2')

  if (isCheckIconVisible) {
    return
  }

  tooltipBtn?.setContent({ '.tooltip-inner': 'Copied!' })

  event.trigger.addEventListener(
    'hidden.bs.tooltip',
    () => {
      tooltipBtn?.setContent({ '.tooltip-inner': clipboardTooltip })
    },
    { once: true }
  )

  event.clearSelection()

  if (originalXhref) {
    iconFirstChild?.setAttributeNS(namespace, 'href', originalXhref.replace('copy', 'check2'))
  }

  setTimeout(() => {
    if (originalXhref) {
      iconFirstChild?.setAttributeNS(namespace, 'href', originalXhref)
    }
    tooltipBtn?.hide()
  }, 2000)
}

function _onError(event) {
  console.log(event)
  const modifierKey = /mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
  const fallbackMsg = `Press ${modifierKey}C to copy`
  const tooltipBtn = oudsWeb.Tooltip.getInstance(event.trigger)

  tooltipBtn?.setContent({ '.tooltip-inner': fallbackMsg })

  event.trigger.addEventListener(
    'hidden.bs.tooltip',
    () => {
      tooltipBtn?.setContent({ '.tooltip-inner': clipboardTooltip })
    },
    { once: true }
  )
}
