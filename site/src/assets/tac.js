/* eslint no-undef: 0 */
/* eslint no-implicit-globals: 0 */
/* eslint camelcase: 0 */
/* eslint unicorn/prefer-string-trim-start-end: 0 */
/* eslint strict: 0 */

(function () {
  'use strict'

  window.addEventListener('tac.root_available', () => {
    const tac = document.getElementById('tarteaucitron')

    tac.querySelectorAll('.tarteaucitronAllow').forEach(button => {
      button.classList.add('btn', 'btn-strong')
      button.innerHTML = tarteaucitron.lang.allowAll
    })

    tac.querySelectorAll('.tarteaucitronDeny').forEach(button => {
      button.classList.add('btn', 'btn-negative', 'mt-2xs', 'mt-md-none', 'ms-md-lg')
      button.innerHTML = tarteaucitron.lang.denyAll
    })

    document.getElementById('tarteaucitron').classList.add('p-lg')

    document.getElementById('tarteaucitronClosePanel').classList.add('d-flex', 'align-content-end', 'position-relative', 'btn-close')
    document.getElementById('tarteaucitronClosePanel').innerHTML =
      `<span class="visually-hidden">${document.getElementById('tarteaucitronClosePanel').innerHTML}</span>`
  }, { once: true })

  window.addEventListener('tac.open_alert', () => {
    const alert = document.getElementById('tarteaucitronAlertBig')

    alert.setAttribute('data-bs-theme', 'dark')

    document.getElementById('tarteaucitronCloseAlert').classList.add('btn', 'btn-default', 'ms-lg-sm')
    alert.querySelector('.tarteaucitronAllow').classList.add('btn', 'btn-strong', 'mx-sm-sm', 'ms-lg-auto', 'my-sm', 'my-lg-none')
    alert.querySelector('.tarteaucitronAllow').innerHTML = tarteaucitron.lang.acceptAll
    alert.querySelector('.tarteaucitronDeny').classList.add('btn', 'btn-negative', 'mx-sm-sm', 'my-sm', 'my-lg-none')
    alert.querySelector('.tarteaucitronDeny').innerHTML = tarteaucitron.lang.denyAll
  }, { once: true })

  window.addEventListener('tac.open_panel',
    () => {
      document.getElementById('tarteaucitronSaveButton').classList.add('btn', 'btn-default', 'd-flex', 'mt-lg', 'mx-auto')

      document.querySelectorAll('#tarteaucitronServices_api button').forEach(button => {
        button.classList.add('btn', 'ms-sm')
      })
      const allowConsentButton = document.querySelector('#tarteaucitronAllAllowed')
      const denyConsentButton = document.querySelector('#tarteaucitronAllDenied')
      const checkboxes = document.querySelectorAll('.form-check-input')

      allowConsentButton.addEventListener('click', () => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (!checkboxes.checked) {
            checkboxes[i].checked = true
          }
        }
      })

      denyConsentButton.addEventListener('click', () => {
        for (let i = 0; i < checkboxes.length; i++) {
          if (checkboxes.checked !== true) {
            checkboxes[i].checked = false
          }
        }
      })
    },
    { once: true }
  )

  document.addEventListener(
    'googletagmanager_added',
    () => {
      const askContainer = document.getElementById('googletagmanagerLine')
      askContainer.className = `${askContainer.className} d-flex`
      const askName = document.querySelector(
        '#googletagmanagerLine .tarteaucitronName'
      )
      askName.className = `${askName.className} flex-grow-1`
      const ask = document.querySelector(
        '#googletagmanagerLine .tarteaucitronAsk'
      )
      ask.className = `${ask.className} flex-shrink-0`
      const choiceEvent =
        'tarteaucitron.userInterface.respond(document.getElementById(\'googletagmanagerAllowed\'),document.getElementById(\'googletagmanagerAllowed\').checked);'
      const toggle = document
        .createRange()
        .createContextualFragment(
          `<label class="switch-standalone">
            <input class="control-item-indicator" type="checkbox" role="switch" value="" id="googletagmanagerAllowed" aria-labelledby="googletagmanagerLine" onchange="${choiceEvent}"${((document.cookie.match(/^(?:.*;)?\s*cookie-consent\s*=\s*([^;]+)(?:.*)?$/) || [null])[1].match('!googletagmanager=true') ? 'checked' : '')} />
            <span class="visually-hidden">Google Tag Manager</span>
            <input id="googletagmanagerDenied" class="d-none" />
          </label>`
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
    mandatory: false,
    googleConsentMode: false,
    partnersList: true
  })

  tarteaucitron.user.googletagmanagerId = 'GTM-P6H78BQ';
  (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager')
  window.dataLayer = [{
    site_name: 'accessibility-boosted',
    phase: 'prod',
    page_type: 'doc',
    page_title: document.title
  }]
}
