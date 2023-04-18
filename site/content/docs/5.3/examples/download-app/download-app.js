(() => {
  'use strict'

  // The following code is used to redirect user directly on the download page of their store whether they have an Android or an iOS device.
  // https://stackoverflow.com/questions/35430336/redirect-users-to-itunes-app-store-or-google-play-store
  // if (!(/windows phone/i.test(navigator.userAgent)) && /android/i.test(navigator.userAgent)) {
  //   window.location.href = 'https://play.google.com/apps/testing/com.orange.ods.app/'
  if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
    window.location.href = 'https://boosted.orange.com'
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  })

  observer.observe(document.querySelector('.images'))
})()
