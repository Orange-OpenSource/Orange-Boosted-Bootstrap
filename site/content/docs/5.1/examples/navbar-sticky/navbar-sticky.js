(function () {
  'use strict'

  function switchHeader() {
    var element = document.getElementsByTagName('header')[0]
    var switchEl = document.getElementById('stickySwitch')
    if (switchEl.checked && window.innerWidth > 1023) {
      element.classList = 'fixed-top'
      switchEl.parentElement.style.marginTop = '140px'
    } else if (switchEl.checked && window.innerWidth > 767) {
      element.classList = 'fixed-top'
      switchEl.parentElement.style.marginTop = '100px'
    } else if (switchEl.checked) {
      element.classList = 'fixed-top'
      switchEl.parentElement.style.marginTop = '50px'
    } else {
      element.classList = 'sticky-top'
      switchEl.parentElement.style.marginTop = '0'
    }
  }

  switchHeader()
  var switchEl = document.getElementById('stickySwitch')
  switchEl.addEventListener('change', switchHeader)
  window.addEventListener('resize', switchHeader)
})()
