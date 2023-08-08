/* global boosted: false */

(() => {
  'use strict'

  document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new boosted.Popover(popover)
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
    element.parentElement.parentElement.style.zIndex = '2000'
    focusTrap(element.parentElement.parentElement)

    element.parentElement.querySelectorAll('.btn-close').forEach(closeBtn => {
      boosted.Tooltip.getOrCreateInstance(closeBtn)

      closeBtn.addEventListener('click', () => {
        element.parentElement.parentElement.style.zIndex = null
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
          boosted.Popover.getOrCreateInstance(document.querySelector(`${link.getAttribute('href')} [data-bs-toggle="popover"]`)).show()
          boosted.Popover.getOrCreateInstance(element).hide()
          element.parentElement.parentElement.style.zIndex = null
        })
      }
    })
  })

  const focusTrap = element => {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled])')
    const firstFocusableEl = focusableEls[0]
    const lastFocusableEl = focusableEls[focusableEls.length - 1]
    firstFocusableEl.focus()

    const keydownHandler = e => {
      const isTabPressed = (e.key === 'Tab')

      if (!isTabPressed) {
        return
      }

      if (element.contains(document.activeElement)) {
        if (e.shiftKey) /* shift + tab */ {
          if (document.activeElement === firstFocusableEl) {
            lastFocusableEl.focus()
            e.preventDefault()
          }
        } else if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus()
          e.preventDefault()
        }
      } else {
        document.removeEventListener('keydown', keydownHandler)
      }
    }

    document.addEventListener('keydown', keydownHandler)

    document.addEventListener('click', e => {
      if (!element.contains(e.target)) {
        firstFocusableEl.focus()
      }
    })
  }

  // Show first popover
  boosted.Popover.getOrCreateInstance(document.querySelector('[data-bs-toggle="popover"]')).show()
  document.querySelector('[data-bs-toggle="popover"]').parentElement.parentElement.style.zIndex = '2000'
  focusTrap(document.querySelector('[data-bs-toggle="popover"]').parentElement.parentElement)
})()
