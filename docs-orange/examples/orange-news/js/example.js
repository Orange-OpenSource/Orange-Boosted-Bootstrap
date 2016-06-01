(function($) {
    $('#collapseExample a').on('click', function() {
        $('a[href="#collapseExample"]').text($(this).text());
        $('#collapseExample').collapse('hide');
    });

    $('#collapseExample').on('shown.bs.collapse', function(){
        $(this).find('.nav-link').first().focus();
    });

    $('#collapseExample').on('hidden.bs.collapse', function(){
        $('a[href="#collapseExample"]').focus();
    });

    $(document).ready(function(){
        $('a[href="#collapseExample"]').text($('#collapseExample li:first-child a').text());
    });

    $(document).on('click', function(){
        $('.collapse.in').collapse('hide');
    });
})(jQuery);