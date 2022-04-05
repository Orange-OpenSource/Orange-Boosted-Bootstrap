(function () {
  'use strict'

  function switchHeader() {
    var element = document.getElementsByTagName('header')[0]
    var switchEl = document.getElementById('stickySwitch')
    element.classList = switchEl.checked ? 'fixed-top' : 'sticky-top'
  }

  switchHeader()
  var switchEl = document.getElementById('stickySwitch')
  switchEl.addEventListener('change', switchHeader)
  window.addEventListener('resize', switchHeader)
})()
