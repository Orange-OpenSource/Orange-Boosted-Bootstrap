// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2026 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global oudsWeb: false */

export default () => {
  // OUDS mod: Try not using `const` at the first layer in this file, otherwise Storybook will fail to render some examples.

  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new oudsWeb.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new oudsWeb.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = `${document.getElementById('toastPlacement').dataset.originalClass} ${this.value}`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new oudsWeb.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      oudsWeb.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // OUDS mod: adapted innerHTML to have the icon and so added a parameter within `appendAlert()` and a tooltip on `.btn-close`
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-message alert-${type}" ${type === 'negative' ? 'role="alert"' : ''}>`,
      '  <div class="alert-icon">',
      `    <p class="visually-hidden">${typeVisuallyHidden} alert</p>`,
      '  </div>',
      '  <div class="alert-container">',
      '    <div class= "alert-text-container">',
      `      <h5 class="alert-label">${message}</h5>`,
      '      <p>This is a small paragraph.</p>',
      '    </div>',
      '  </div>',
      '  <div class="alert-action-container">',
      '    <div class="alert-close-container">',
      '      <button class="btn-close" data-bs-dismiss="alert">',
      `        <span class="visually-hidden">Close ${type} alert</span>`,
      '      </button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper.firstChild)
  }

  if (document.getElementById('liveAlertBtn')) {
    const functionalArray = ['positive', 'negative', 'info', 'warning']
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      const type = functionalArray[Math.floor(Math.random() * functionalArray.length)]
      appendAlert(`Nice, you triggered this ${type} alert message!`, type, type)
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      oudsWeb.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // storybook-start modal
  // js-docs-start varying-modal-content
  if (document.getElementById('exampleModal')) {
    document.getElementById('exampleModal').addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = document.getElementById('exampleModal').querySelector('.modal-title')
      const modalBodyInput = document.getElementById('exampleModal').querySelector('.modal-body input')

      modalTitle.textContent = `New message to ${recipient}`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content
  // storybook-end modal

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  // storybook-start offcanvas
  document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    .forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  // storybook-end offcanvas

  // -------------------------------
  // Skeletons
  // -------------------------------
  // First example
  if (document.querySelector('.bd-skeleton-replace')) {
  // js-docs-start skeleton-first-example
    const skeletonToReplace = document.querySelector('.bd-skeleton-replace')
    const originalContent = skeletonToReplace.innerHTML

    // eslint-disable-next-line no-inner-declarations
    function replaceSkeleton() {
      setTimeout(() => {
        skeletonToReplace.innerHTML = `<div class="d-flex gap-medium mb-medium">
          <img class="flex-shrink-0 w-50 ratio-1x1 object-fit-cover" src="https://placecats.com/500/500" alt="" />
          <div class="flex-grow-1 d-flex flex-column">
            <h4 class="h1">Placeholder title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec risus et risus consectetur dignissim volutpat ut lorem. Aenean posuere elementum massa, ac elementum magna auctor quis. Aliquam erat volutpat. Ut quam turpis, interdum non ex at, imperdiet ornare mi.</p>
          </div>
        </div>
        <button class="btn btn-default" onclick="window.relaunchAnim()">Relaunch animation</button>
        <p class="visually-hidden" role="alert">Content loaded.</p>`
      }, 8000)
    }

    document.addEventListener('DOMContentLoaded', () => {
      replaceSkeleton()
    })

    window.relaunchAnim = () => {
      skeletonToReplace.innerHTML = originalContent
      replaceSkeleton()
    }
    // js-docs-end skeleton-first-example

    // Second example
    // js-docs-start skeleton-second-example
    const skeletonToReplace2 = document.querySelector('.bd-skeleton-replace2')

    // eslint-disable-next-line no-inner-declarations
    function removeSkeletons() {
      setTimeout(() => {
        skeletonToReplace2.firstElementChild.removeAttribute('inert')
        skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'false')
        skeletonToReplace2.lastElementChild.textContent = 'Form loaded.'
      }, 8000)
    }

    document.addEventListener('DOMContentLoaded', () => {
      removeSkeletons()
    })

    window.relaunchAnim2 = () => {
      skeletonToReplace2.firstElementChild.setAttribute('inert', '')
      skeletonToReplace2.firstElementChild.setAttribute('aria-busy', 'true')
      skeletonToReplace2.lastElementChild.textContent = 'Loading form ...'
      removeSkeletons()
    }
    // js-docs-end skeleton-second-example
  }

  // -------------------------------
  // Show password live example
  // -------------------------------
  // Used by 'password input' live example in docs or StackBlitz
  // storybook-start password-input
  // js-docs-start live-show-password
  // Toggle password visibility
  const togglePasswordButton = document.querySelector('#liveShowPasswordExample #togglePassword[data-bs-toggle="button"]')
  if (togglePasswordButton) {
    const passwordInput = document.querySelector('#liveShowPasswordExample #liveInputPassword')
    const iconUse = togglePasswordButton.querySelector('use')

    togglePasswordButton.addEventListener('click', event => {
      event.preventDefault()

      // Toggle the type attribute to make the password visible or hidden
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
      passwordInput.setAttribute('type', type)

      // Toggle the aria-pressed attribute and the icon to reflect the change in state
      if (type === 'text') {
        // togglePasswordButton.setAttribute('aria-pressed', 'false')
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('accessibility-vision', 'hide'))
      } else {
        // togglePasswordButton.setAttribute('aria-pressed', 'true')
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('hide', 'accessibility-vision'))
      }
    })
  }
  // js-docs-end live-show-password
  // storybook-end password-input
}
