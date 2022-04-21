// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Copyright 2011-2022 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global boosted: false */

(() => {
  'use strict'

  // Scroll the active sidebar link into view
  /* const sidenav = document.querySelector('.bd-sidebar')
  if (sidenav) {
    const sidenavHeight = sidenav.clientHeight
    const sidenavActiveLink = document.querySelector('.bd-links-nav .active')
    const sidenavActiveLinkTop = sidenavActiveLink.offsetTop
    const sidenavActiveLinkHeight = sidenavActiveLink.clientHeight
    const viewportTop = sidenavActiveLinkTop
    const viewportBottom = viewportTop - sidenavHeight + sidenavActiveLinkHeight

    if (sidenav.scrollTop > viewportTop || sidenav.scrollTop < viewportBottom) {
      sidenav.scrollTop = viewportTop - (sidenavHeight / 2) + (sidenavActiveLinkHeight / 2)
    }
  } */

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })

  const toastPlacement = document.getElementById('toastPlacement')
  if (toastPlacement) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!toastPlacement.dataset.originalClass) {
        toastPlacement.dataset.originalClass = toastPlacement.className
      }

      toastPlacement.className = `${toastPlacement.dataset.originalClass} ${this.value}`
    })
  }

  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new boosted.Toast(toastLiveExample)

      toast.show()
    })
  }

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  const alertTrigger = document.getElementById('liveAlertBtn')

  // Boosted mod: adapted innerHTML to have the icon and so added a parameter within alert()

  function alert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert"><span class="alert-icon"><span class="visually-hidden">${typeVisuallyHidden}</span></span><p>${message}</p><button type="button" class="btn-close" data-bs-dismiss="alert"><span class="visually-hidden">Close</span></button></div>`

    alertPlaceholder.append(wrapper)
  }

  if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
      alert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }

  // Demos within modals
  document.querySelectorAll('.tooltip-test')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })

  document.querySelectorAll('.popover-test')
    .forEach(popover => {
      new boosted.Popover(popover)
    })

  // Indeterminate checkbox example
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // Modal relatedTarget demo
  const exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')

      // Update the modal's content.
      const modalTitle = exampleModal.querySelector('.modal-title')
      const modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }
})()
