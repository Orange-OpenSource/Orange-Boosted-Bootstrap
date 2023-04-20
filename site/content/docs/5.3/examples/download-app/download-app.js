(() => {
  'use strict'

  // For a proper redirection on the different stores, please copy paste the code below and adapt the links.

  // if (!(/windows phone/i.test(navigator.userAgent)) && /android/i.test(navigator.userAgent)) {
  //   window.location.href = 'https://play.google.com/apps/testing/com.orange.ods.app/'
  // }

  if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
    window.location.href = 'https://itunes.apple.com/fr/app/id6446178285'
  }

  // End of copy paste

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  })

  observer.observe(document.querySelector('.images'))
  observer.observe(document.querySelector('.ticks'))
  observer.observe(document.querySelector('.steps#ios-steps'))
  observer.observe(document.querySelector('.steps#android-steps'))
})()
