'use strict';

(function() {

    var RADIUS = 54;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    var gaugeTemplate = `
        <svg aria-hidden="true" class="progress" width="120" height="120" viewBox="0 0 120 120">
            <circle class="progress-meter" cx="60" cy="60" r="54" stroke-width="12" />
            <circle class="progress-value" cx="60" cy="60" r="54" stroke-width="12" />
        </svg>
        <span class="gauge-label"></span>
        <span class="gauge-value"></span>
    `;

    $('.gauge').each(function() {
        $(this).html(gaugeTemplate);
        $(this).find('.gauge-label').text($(this).attr('data-label'));

        var value = $(this).attr('data-value');
        var progress = value / 100;
        var dashoffset = CIRCUMFERENCE * (1 - progress);
        var $controlValue = $(this).find('.gauge-value');
        var $progressValue = $(this).find('.progress-value');

        $controlValue[0].textContent = value + '%';
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
