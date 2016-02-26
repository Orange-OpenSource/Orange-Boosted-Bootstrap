// forms validation fall back for old navigators
$(document).ready(() => {
  'use strict'

  if (typeof validate === 'function') {
    $('form').validate({
      errorPlacement(error, element) {
        error.appendTo('label[for="${0}"]'($(element).attr('id')))
      },
      errorElement: 'em'
    })
    // Duplicate Validation Message for Firefox
    $('#sign-up input:not([type=submit]):not([type=file])[title]').each(function () {
      let validationMessage = $(this).attr('title')
      $(this).attr('x-moz-errormessage', validationMessage)
    })
    $('form').removeAttr('novalidate')
  }
})
