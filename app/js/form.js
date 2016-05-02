// forms validation fall back for old navigators
'use strict';
$(document).ready(function () {
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
});