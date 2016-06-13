$(function() {
    $("#main-slick-carousel").slick({
    arrows: true,
    dots: true,
    infinite: false,
    accessibility: true
  });

});

$(document).ready(function(){
  $('.slick-slider.slick-dotted .slick-dots').attr('aria-hidden', true);
  $('.slick-slider .slick-prev').attr('aria-label', 'Previous slide');
  $('.slick-slider .slick-next').attr('aria-label', 'Next slide');
});