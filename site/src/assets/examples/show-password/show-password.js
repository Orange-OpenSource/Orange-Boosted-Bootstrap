// js-docs-start show-password
// Manage show password button
(() => {
  'use strict'
  // Toggle password visibility
  const togglePasswordButton = document.querySelector('#togglePassword')
  if (togglePasswordButton) {
    const passwordInput = document.querySelector('#inputPassword')
    const iconUse = togglePasswordButton.querySelector('use')
    const visuallyHiddenText = togglePasswordButton.querySelector('.visually-hidden')

    togglePasswordButton.addEventListener('click', event => {
      event.preventDefault()

      // Toggle the type attribute to make the password visible or hidden
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
      passwordInput.setAttribute('type', type)

      // Toggle the icon, the visually-hidden text for accessibility reasons
      if (type === 'text') {
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('accessibility-vision', 'hide'))
        visuallyHiddenText.textContent = 'Hide password'
      } else {
        iconUse.setAttribute('xlink:href', iconUse.getAttribute('xlink:href').replace('hide', 'accessibility-vision'))
        visuallyHiddenText.textContent = 'Show password'
      }
    })
  }
})()
// js-docs-end show-password
