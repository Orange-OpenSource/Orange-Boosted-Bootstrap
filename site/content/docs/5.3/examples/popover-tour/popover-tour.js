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
})()
