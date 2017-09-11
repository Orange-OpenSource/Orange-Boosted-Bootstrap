'use strict';

(function() {

    var RADIUS = 54;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    $('.gauge').each(function() {
        var value = $(this).find('input').attr('value');
        var progress = value / 100;
        var dashoffset = CIRCUMFERENCE * (1 - progress);
        var $controlLabel = $(this).find('.progress-label');
        var $progressValue = $(this).find('.progress-value');

        $controlLabel[0].textContent = value + '%';
        $progressValue[0].style.strokeDashoffset = dashoffset;
    });

    $(document).ready(function() {

        $('a').on('click', function(e){
            e.preventDefault();
        });

        // init aria
        $('.o-tab-heading:not([aria-expanded=true])').attr('aria-expanded', false);

        // count tabs
        var tabCount = $('.o-tab-heading').length;

        if (tabCount <= 2) {
            $('.o-tab-container').addClass('tab-layout');
        }

        $('#toggle-layout').on('click', function(){
            $('.o-tab-container').toggleClass('tab-layout');
        });

        $('#tab1').on('click', function() {
            $('.o-tab-content').removeClass('show');
            $('#tab-1-content').addClass('show');
            $('.o-tab-heading').attr('aria-expanded', false);
            $(this).attr('aria-expanded', true);
        });

        $('#tab2').on('click', function() {
            $('.o-tab-content').removeClass('show');
            $('#tab-2-content').addClass('show');
            $('.o-tab-heading').attr('aria-expanded', false);
            $(this).attr('aria-expanded', true);
        });

        $('#tab3').on('click', function() {
            $('.o-tab-content').removeClass('show');
            $('#tab-3-content').addClass('show');
            $('.o-tab-heading').attr('aria-expanded', false);
            $(this).attr('aria-expanded', true);
        });

    });
})();
