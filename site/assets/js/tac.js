/* eslint no-undef: 0 */
/* eslint no-implicit-globals: 0 */
/* eslint camelcase: 0 */
/* eslint unicorn/prefer-trim-start-end: 0 */

(function () {
  'use strict'

  function dropEmoji(id) {
    var button = document.getElementById(id)
    var buttonText = typeof String.prototype.trimStart === 'function' ? button.textContent.trimStart() : button.textContent.trimLeft()
    button.textContent = buttonText.slice(2)
  }

  window.addEventListener('tac.root_available', function () {
    var tac = document.getElementById('tarteaucitron')

    tac.querySelectorAll('.tarteaucitronAllow').forEach(function (button) {
      button.classList.add('btn', 'btn-sm', 'btn-success', 'my-2', 'my-lg-0')
    })

    tac.querySelectorAll('.tarteaucitronDeny').forEach(function (button) {
      button.classList.add('btn', 'btn-sm', 'btn-danger', 'my-2', 'my-lg-0', 'ml-lg-2')
    })

    document.getElementById('tarteaucitronClosePanel').classList.add('btn-close')

    dropEmoji('tarteaucitronAllAllowed')
    dropEmoji('tarteaucitronAllDenied')
  }, { once: true })

  window.addEventListener('tac.open_alert', function () {
    var alert = document.getElementById('tarteaucitronAlertBig')

    document.getElementById('tarteaucitronCloseAlert').classList.add('btn', 'btn-sm', 'ml-lg-2')
    alert.querySelector('.tarteaucitronAllow').classList.add('btn', 'btn-sm', 'btn-success', 'mx-sm-2', 'ml-lg-auto', 'my-2', 'my-lg-0')
    alert.querySelector('.tarteaucitronDeny').classList.add('btn', 'btn-sm', 'btn-danger', 'mx-sm-2', 'my-2', 'my-lg-0')
    alert.querySelector('.tarteaucitronDeny').classList.add('btn', 'btn-sm', 'btn-danger', 'mx-sm-2', 'my-2', 'my-lg-0')
    dropEmoji('tarteaucitronPersonalize2')
    dropEmoji('tarteaucitronAllDenied2')
  }, { once: true })

  window.addEventListener('tac.open_panel', function () {
    document.querySelectorAll('#tarteaucitronServices_api button').forEach(function (button) {
      button.classList.add('btn', 'btn-sm', 'ml-2')
    })
  }, { once: true })

  document.addEventListener('googletagmanager_added', function () {
    var ask = document.querySelector('#googletagmanagerLine .tarteaucitronAsk')
    var choiceEvent = 'tarteaucitron.userInterface.respond(document.getElementById(\'googletagmanagerAllowed\'),document.getElementById(\'googletagmanagerAllowed\').checked);'
    var toggle = document.createRange().createContextualFragment('<div class="form-check form-switch my-2 my-lg-0"><input class="form-check-input ml-0" type="checkbox" id="googletagmanagerAllowed" aria-describedby="tacCLgoogletagmanager" onchange="' + choiceEvent + '"><label class="form-check-label visually-hidden" for="googletagmanagerAllowed">Google Tag Manager</label></div>')
    ask.innerHTML = ''
    ask.append(toggle)
  }, { once: true })
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
    readmoreLink: '/docs/5.0/about/cookies/',
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
