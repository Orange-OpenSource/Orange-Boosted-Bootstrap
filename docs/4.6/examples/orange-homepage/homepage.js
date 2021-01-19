// eslint-disable-next-line no-undef,no-implicit-globals,no-unused-vars
var swiper2 = new Swiper('#discovery-carousel', {
  a11y: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
