(function () {
  'use strict';

  var mySwiper = new Swiper('.swiper-container', {
    // enable accessibility
    a11y: true,
    keyboardControl: true,

    // If we need pagination
    pagination: '.swiper-pagination',
    paginationClickable: true,

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: false,
    freeMode: false,

    breakpoints: {
        767: {
        paginationClickable: false,
        freeMode: true, // disable for centered mode
        freeModeMomentumRatio: .5,
        centeredSlides: false, // enable for centered mode
        slideToClickedSlide: false // enable for centered mode
        }
    }
  })

  var RADIUS = 54;
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  var gaugeTemplate = '<svg aria-hidden="true" width="120" height="120" viewBox="0 0 120 120"><circle class="progress-meter" cx="60" cy="60" r="54" stroke-width="12" /><circle class="progress-value" cx="60" cy="60" r="54" stroke-width="12" /></svg><span class="gauge-label"></span><span class="gauge-value"></span>';

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

    $('.o-nav-local').prioritynav();
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
}());
