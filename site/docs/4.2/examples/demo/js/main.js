// eslint-disabled
(function () {
  'use strict'

  var RADIUS = 52
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS
  var gaugeTemplate = `
    <svg aria-hidden="true" width="120" height="120" viewBox="0 0 120 120">
        <circle class="progress-meter" cx="60" cy="60" r="52" stroke-width="16" />
        <circle class="progress-value" cx="60" cy="60" r="52" stroke-width="16" />
    </svg>
    <span class="gauge-value"></span>`

  $('.gauge').not('.multi').each(function () {
    $(this).html(gaugeTemplate)
    $(this).find('.gauge-label').text($(this).attr('data-label'))

    var value = $(this).attr('data-value')
    var progress = value / 100
    var dashoffset = CIRCUMFERENCE * (1 - progress)
    var $controlValue = $(this).find('.gauge-value')
    var $progressValue = $(this).find('.progress-value')

    $controlValue[0].textContent = value * 2 / 100 + 'GB'
    $progressValue[0].style.strokeDashoffset = dashoffset
  });

  $(document).ready(function () {
    $('a').on('click', function (e) {
      e.preventDefault()
    })

    $('#oneAtaTime details').on('click', function () {
      $('#oneAtaTime details').not($(this)).removeAttr('open')
    })
  })
}())
// eslint-enabled
