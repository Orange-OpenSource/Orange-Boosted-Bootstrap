/* global boosted: false */

(() => {
  'use strict'

  // For a proper redirection on the different stores, please copy paste the code below and adapt the links.
  // Please visit https://developer.android.com/distribute/marketing-tools/linking-to-google-play?hl=fr#UriSummary for more Android information.
  // Please visit https://stackoverflow.com/a/2337601 for more iOS information.

  // if (!(/windows phone/i.test(navigator.userAgent)) && /android/i.test(navigator.userAgent)) {
  //   window.location.href = 'https://play.google.com/apps/testing/com.orange.ods.app/'
  // }

  if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
    window.location.href = 'itms-apps://apps.apple.com/fr/app/id6446178285'
  }

  // End of copy paste
  // We use `itms-apps` instead of `https` for phones. (https://stackoverflow.com/a/2337601)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  })

  observer.observe(document.querySelector('.showcase-images.row'))
  observer.observe(document.querySelector('.ticks-list'))
  observer.observe(document.querySelector('.mobile-steps#ios-steps'))
  observer.observe(document.querySelector('.mobile-steps#android-steps'))

  // Instantiate the carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
})()
