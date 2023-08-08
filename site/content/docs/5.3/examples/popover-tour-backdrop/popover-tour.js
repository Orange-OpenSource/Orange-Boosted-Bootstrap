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

  // Handling backdrop
  const backdrop = document.createElement('div')
  backdrop.classList.add('modal-backdrop', 'fade', 'show')
  document.body.append(backdrop)
  // backdrop.addEventListener('click', () => {
  //   document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
  //     boosted.Popover.getOrCreateInstance(popover).hide()
  //     popover.parentElement.remove()
  //   })
  //   backdrop.remove()
  // })

  // Show tooltips and hide popover on close button click
  document.addEventListener('shown.bs.popover', event => {
    const element = event.target
    element.parentElement.querySelectorAll('.btn-close').forEach(closeBtn => {
      boosted.Tooltip.getOrCreateInstance(closeBtn)
      closeBtn.addEventListener('click', () => {
        boosted.Popover.getOrCreateInstance(element).hide()
        backdrop.remove()
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach(popover => {
          boosted.Popover.getOrCreateInstance(popover).hide()
          popover.parentElement.remove()
        })
      })
    })
    element.parentElement.querySelectorAll('[href]').forEach(link => {
      if (link.getAttribute('href').startsWith('#')) {
        link.addEventListener('click', () => {
          document.querySelector(`${link.getAttribute('href')} [data-bs-toggle="popover"]`).click()
          boosted.Popover.getOrCreateInstance(element).hide()
        })
      }
    })
  })

  // Show first popover
  boosted.Popover.getOrCreateInstance(document.querySelector('[data-bs-toggle="popover"]')).show()
})()
