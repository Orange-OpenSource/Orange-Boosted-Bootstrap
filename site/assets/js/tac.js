/* eslint no-undef: 0 */
/* eslint no-implicit-globals: 0 */
/* eslint camelcase: 0 */
/* eslint unicorn/prefer-string-trim-start-end: 0 */

(function () {
  'use strict'

  window.addEventListener('tac.root_available', () => {
    const tac = document.getElementById('tarteaucitron')

    tac.querySelectorAll('.tarteaucitronAllow').forEach(button => {
      button.classList.add('btn', 'btn-sm', 'btn-success', 'my-2', 'my-lg-0')
      button.innerHTML = tarteaucitron.lang.allowAll
    })

    tac.querySelectorAll('.tarteaucitronDeny').forEach(button => {
      button.classList.add('btn', 'btn-sm', 'btn-danger', 'my-2', 'my-lg-0', 'ms-lg-2')
      button.innerHTML = tarteaucitron.lang.denyAll
    })

    document.getElementById('tarteaucitron').classList.add('p-3')

    document.getElementById('tarteaucitronClosePanel').classList.add('d-flex', 'align-content-end', 'position-relative', 'btn-close')
    document.getElementById('tarteaucitronClosePanel').innerHTML =
      `<span class="visually-hidden">${document.getElementById('tarteaucitronClosePanel').innerHTML}</span>`
  }, { once: true })

  window.addEventListener('tac.open_alert', () => {
    const alert = document.getElementById('tarteaucitronAlertBig')

    document.getElementById('tarteaucitronCloseAlert').classList.add('btn', 'btn-sm', 'btn-info', 'btn-inverse', 'ms-lg-2')
    alert.querySelector('.tarteaucitronAllow').classList.add('btn', 'btn-sm', 'btn-success', 'btn-inverse', 'mx-sm-2', 'ms-lg-auto', 'my-2', 'my-lg-0')
    alert.querySelector('.tarteaucitronAllow').innerHTML = tarteaucitron.lang.acceptAll
    alert.querySelector('.tarteaucitronDeny').classList.add('btn', 'btn-sm', 'btn-danger', 'btn-inverse', 'mx-sm-2', 'my-2', 'my-lg-0')
    alert.querySelector('.tarteaucitronDeny').innerHTML = tarteaucitron.lang.denyAll
  }, { once: true })

  window.addEventListener('tac.open_panel',
    () => {
      document.querySelectorAll('#tarteaucitronServices_api button').forEach(button => {
        button.classList.add('btn', 'btn-sm', 'ms-2')
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
      const ask = document.querySelector(
        '#googletagmanagerLine .tarteaucitronAsk'
      )
      const choiceEvent =
        'tarteaucitron.userInterface.respond(document.getElementById(\'googletagmanagerAllowed\'),document.getElementById(\'googletagmanagerAllowed\').checked);'
      const toggle = document
        .createRange()
        .createContextualFragment(
          `<div class="form-check form-switch my-2 my-lg-0"><input class="form-check-input ms-0" type="checkbox" id="googletagmanagerAllowed" aria-describedby="tacCLgoogletagmanager" onchange="${choiceEvent}"${((document.cookie.match(/^(?:.*;)?\s*cookie-consent\s*=\s*([^;]+)(?:.*)?$/) || [null])[1].match('!googletagmanager=true') ? 'checked' : '')}><label class="form-check-label visually-hidden" for="googletagmanagerAllowed">Google Tag Manager</label><input id="googletagmanagerDenied" class="d-none"></div>`
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
