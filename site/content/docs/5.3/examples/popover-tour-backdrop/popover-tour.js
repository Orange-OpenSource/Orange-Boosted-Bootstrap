/* global boosted: false */

(() => {
  'use strict'

  document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new boosted.Popover(popover)
  })

  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })

  document.addEventListener('shown.bs.popover', event => {
    const element = event.target
    element.parentElement.querySelectorAll('.btn-close').forEach(closeBtn => {
      boosted.Tooltip.getOrCreateInstance(closeBtn)
      closeBtn.addEventListener('click', () => {
        boosted.Popover.getOrCreateInstance(element).hide()
      })
    })
  })

  boosted.Modal.getOrCreateInstance('body')._initializeBackDrop().show()
})()
