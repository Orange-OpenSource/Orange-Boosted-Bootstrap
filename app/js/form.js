// forms validation fall back for old navigators
$(document).ready(function () {
  'use strict';
  if(typeof validate == 'function')
  {
      $('form').validate({
          errorPlacement: function (error, element) {
              error.appendTo('label[for=' + $(element).attr('id') + ']');
          },
          errorElement: 'em'
      });
      // Duplicate Validation Message for Firefox
      $('#sign-up input:not([type=submit]):not([type=file])[title]').each(function () {
          var validationMessage = $(this).attr('title');
          $(this).attr('x-moz-errormessage', validationMessage);
      });
      $('form').removeAttr('novalidate');
  }

  // first init, set all class checked to checkboxes checked
  $('.toggle .checkbox:checked').each(function(){
    $(this).toggleClass('checked',true);
  });

  // make toggle focusable
  // $('.checkbox-label').attr('tabindex','0');

  // Allow user to activate the checkbox-label with the space bar
  /*$('.checkbox-label').on('keypress', function(e){
    // check the keycode for space?
    if (e.keyCode == 0 || e.keyCode == 32) {
      // if keycode is space => trigger a click to the input
      $(this).parent().find('input').trigger('click');
      e.preventDefault()
      e.stopPropagation()
    }
  });
  */
  // attach event onto all checkbox to update the display onclick
  $('.toggle .checkbox').on('click', function() {
    $(this).toggleClass('checked',$(this).prop('checked'));
    // force IE8 repaint!
    $(this).parent().toggleClass('forceiepaint');
  });
  // add an event for IE8 active checkbox when clicking onto the label
  $('.toggle .checkbox').parent().find('label').on('click', function(e) {
    $('#'+$(this).attr('for')).trigger('click');
    e.preventDefault()
    e.stopPropagation()
  });
    
});
