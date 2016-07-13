$(function() {
    $("#main-slick-carousel").slick({
    arrows: true,
    dots: true,
    infinite: false,
    accessibility: true
  });

});

// $(document).ready(function(){
  $("#main-slick-carousel").on('init', function(){
    // adding accessibility
    // $('.slick-slider.slick-dotted .slick-dots').attr('aria-hidden', true);
    $('.slick-slider.slick-dotted .slick-dots li button').text(function(index, text) {
      return "slide " + text;
    });
    $('.slick-slider .slick-prev').attr('aria-label', 'Previous slide');
    $('.slick-slider .slick-next').attr('aria-label', 'Next slide');

    // setTimeout(function(){
    //   $('.slick-slider').attr('role', 'region').attr('aria-label', 'accessible carousel');
    // }, 500);
  });
// });