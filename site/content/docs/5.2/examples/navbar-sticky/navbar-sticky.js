(function () {
  'use strict'

  function switchHeader() {
    const element = document.getElementsByTagName('header')[0]
    const switchEl = document.getElementById('stickySwitch')
    element.classList = switchEl.checked ? 'fixed-top' : 'sticky-top'
  }

  switchHeader()
  const switchEl = document.getElementById('stickySwitch')
  switchEl.addEventListener('change', switchHeader)
  window.addEventListener('resize', switchHeader)
})()
