// js-docs-start live-loading-buttons
// Manage loading buttons looks and statuses
(() => {
  'use strict'
  const loadingButtons = document.querySelectorAll('[id^="loading-btn-"]')
  loadingButtons.forEach(loadingButton => {
    loadingButton.addEventListener('click', () => {
      // Extract the number from the button's ID
      const num = loadingButton.getAttribute('id').charAt(loadingButton.getAttribute('id').length - 1)

      // Get the loading time from the CSS variable --bs-btn-loading-time, if specified. Otherwise, it means the loading time is undetermined
      const loadingTime = getComputedStyle(loadingButton).getPropertyValue('--bs-btn-loading-time')

      // Select the corresponding status message and loading animation elements
      const statusMessage = document.querySelector(`#loading-msg-${num}`)
      const loadingAnimation = document.querySelector(`#loading-btn-${num} svg.loader`)
      // Set the interval for updating the status message: it must be adapted to your use case.
      // It can be 1000 if loading time is indeterminate, and can be something more adapted if loading time is known
      const interval = 1000
      let counter = 0

      // Change the button's appearance by adding a loading class and disabling it
      loadingButton.classList.add(loadingTime ? 'loading-determinate' : 'loading-indeterminate')
      loadingAnimation.classList.remove('d-none')
      loadingButton.setAttribute('disabled', '')

      // Show the status message and update it every 'interval' seconds
      statusMessage.classList.remove('d-none')
      statusMessage.innerHTML = loadingTime ? `Downloading file ${num} in ${loadingTime}` : `Downloading file ${num}`
      const updateStatusMessageCall = setInterval(() => {
        if (loadingTime) {
          counter++
          // Calculate the percentage of time that has elapsed to update status message
          const percentTime = Math.round(counter * interval / (loadingTime.slice(0, -1) * 10))
          statusMessage.innerHTML = `Downloading file ${num} in ${loadingTime}: ${percentTime}%`
        } else {
          statusMessage.innerHTML = `${statusMessage.innerHTML}.`
        }
      }, interval)

      // Stop loading after the loading time or after 5 seconds the undetermined loading time of this demo
      setTimeout(() => {
        clearInterval(updateStatusMessageCall)
        statusMessage.innerHTML = `Downloading file ${num} is complete`
        loadingButton.classList.remove(loadingTime ? 'loading-determinate' : 'loading-indeterminate')
        loadingAnimation.classList.add('d-none')
        loadingButton.removeAttribute('disabled')
        loadingButton.focus() // Set focus back to the button for accessibility reasons
      }, loadingTime ? (loadingTime.slice(0, -1) * 1000) : 5000)
    })
  })
})()
// js-docs-end live-loading-buttons
