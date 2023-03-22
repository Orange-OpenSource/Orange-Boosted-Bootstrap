(() => {
  'use strict'

  // https://stackoverflow.com/questions/35430336/redirect-users-to-itunes-app-store-or-google-play-store
  if (!(/windows phone/i.test(navigator.userAgent)) && /android/i.test(navigator.userAgent)) {
    window.location.href = 'https://play.google.com/apps/testing/com.orange.ods.app/'
  } else if (/ipad|iphone|ipod/i.test(navigator.userAgent)) {
    window.location.href = 'https://boosted.orange.com'
  }
})()
