/* eslint no-undef: 0 */
/* eslint no-implicit-globals: 0 */
/* eslint camelcase: 0 */
/* eslint unicorn/prefer-string-trim-start-end: 0 */

(function () {
  'use strict'

  document.addEventListener(
    'googletagmanager_added',
    () => {
      const ask = document.querySelector(
        '#googletagmanagerLine .tarteaucitronAsk'
      )
      const choiceEvent =
        'tarteaucitron.userInterface.respond(document.getElementById(\'googletagmanagerAllowed\'),document.getElementById(\'googletagmanagerAllowed\').checked);'
      const toggle = document
        .createRange()
        .createContextualFragment(
          `<div class="form-check form-switch my-2 my-lg-0"><input class="form-check-input ms-0" type="checkbox" id="googletagmanagerAllowed" aria-describedby="tacCLgoogletagmanager" onchange="${choiceEvent}"${((document.cookie.match(/^(?:.*;)?\s*cookie-consent\s*=\s*([^;]+)(?:.*)?$/) || [null])[1] === '!googletagmanager=true' ? 'checked' : '')}><label class="form-check-label visually-hidden" for="googletagmanagerAllowed">Google Tag Manager</label><input id="googletagmanagerDenied" class="d-none"></div>`
        )
      ask.innerHTML = ''
      ask.append(toggle)
    },
    { once: true }
  )
})()

if (typeof tarteaucitron !== 'undefined') {
  tarteaucitron.init({
    hashtag: '#cookie-consent',
    cookieName: 'cookie-consent',
    orientation: 'bottom',
    bodyPosition: 'top',
    cookieslist: true,
    highPrivacy: false,
    showIcon: false,
    handleBrowserDNTRequest: true,
    useExternalCss: true,
    mandatory: false
  })

  tarteaucitron.user.googletagmanagerId = 'GTM-P6H78BQ';
  (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager')
  dataLayer = [{
    site_name: 'accessibility-boosted',
    phase: 'prod',
    page_type: 'doc',
    page_title: document.title
  }]
}
