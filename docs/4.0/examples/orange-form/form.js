$(document).ready(function (){
    $('#mainNav').navbar({sticky: true});


    var $inputElms = $('#myForm input[required]');

    $inputElms.each(function() {
        $(this).on('focus', function(event) {
            var $el =  $(event.target);

            $el.on('input', function(event) {
                $el.parent().removeClass('has-warning has-danger has-success');

                if (event.target.validity.valid) {
                    $el.parent().addClass('has-success');
                }
            });

            $el.on('blur', function(event) {
                validateInput(event);
            });
        });
    });
});

function validateInput(event) {
    var $el =  $(event.target);

    if (!event.target.validity.valid) {
        if (event.target.validity.valueMissing) {
            $el.parent().removeClass('has-success has-danger').addClass('has-warning');
        } else {
            $el.parent().removeClass('has-success has-warning').addClass('has-danger');
        }
    }
}
