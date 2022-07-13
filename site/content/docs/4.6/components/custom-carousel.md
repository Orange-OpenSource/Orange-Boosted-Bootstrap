---
layout: docs
title: Custom carousel
description: Carousel with swipe effect for mobile support
group: components
toc: true
---

## How it works

This carousel is based on [Swiper](https://swiperjs.com/) which provides touch support, extended setup and works great on mobile devices.

## Demo

{{< example >}}
<div class="swiper swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide" id="slide1">
      <div class="card">
        <div class="card-img">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="1096" height="380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
          <rect width="100%" height="100%" fill="#3ebd87"/>
          <text x="50%" y="50%" fill="#0003" dy=".3em" dominant-baseline="middle" text-anchor="middle" class="font-weight-bold">First slide</text>
          </svg>
        </div>
        <div class="card-body">
          <h3 class="card-title h5">Slide 1</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide" id="slide2">
      <div class="card">
        <div class="card-img">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="1096" height="380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
          <rect width="100%" height="100%" fill="#4bb4e6"/>
          <text x="50%" y="50%" fill="#0003" dy=".3em" dominant-baseline="middle" text-anchor="middle" class="font-weight-bold">Second slide</text>
          </svg>
        </div>
        <div class="card-body">
          <h3 class="card-title h5">Slide 2</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
    <div class="swiper-slide" id="slide3">
      <div class="card">
        <div class="card-img">
          <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="1096" height="380" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#ffb4e6"/>
            <text x="50%" y="50%" fill="#0003" dy=".3em" dominant-baseline="middle" text-anchor="middle" class="font-weight-bold">Third slide</text>
          </svg>
        </div>
        <div class="card-body">
          <h3 class="card-title h5">Slide 3</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev" title="Previous"></div>
  <div class="swiper-button-next" title="Next"></div>
</div>
<button id="swiperPlayButton" type="button" class="btn btn-info btn-icon btn-xs mt-0" aria-label="Pause Carousel" title="Pause Carousel">
  <span class="icon-Pause" aria-hidden="true"></span>
</button>
{{< /example >}}

## Usage

Make sure to add the vendor <abbr title="Cascading Stylesheet">CSS</abbr> and <abbr title="Javascript">JS</abbr> files to your page to get the plugin working.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="{{< param "cdn.css_swiper" >}}" integrity="{{< param "cdn.css_swiper_hash" >}}" crossorigin="anonymous">
</head>
<body>
    <script src="{{< param "cdn.js_swiper" >}}" integrity="{{< param "cdn.js_swiper_hash" >}}" crossorigin="anonymous"></script>
</body>
</html>
```

## Configuration

Here is the recommended setup for an accessible carousel:

```javascript
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
    delay: 3500,
  },
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
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 10,
  slidesPerView: 'auto',
  centeredSlides: false,
  freeMode: false,
  breakpoints: {
    767: {
      pagination: {
        clickable: false
      },
      freeMode: true,
      freeModeMomentumRatio: .5,
      centeredSlides: false,
      slideToClickedSlide: false
    }
  }
})
```
Be aware that having a play/pause button implies having autoplay set to true in the configuration.
Find below an example for our custom button

```javascript
  $("#swiperPlayButton").click(function () {
    var MySwiper = document.querySelector('.swiper-container').swiper;
    if ($("span",this).hasClass("icon-Pause")) {
      MySwiper.autoplay.stop();
      $(this).attr("aria-label", "Play Carousel");
      $(this).attr("title", "Play Carousel");
      $("span",this).toggleClass("icon-Pause icon-Play");
    } else {
      MySwiper.autoplay.start();
      $(this).attr("aria-label", "Pause Carousel");
      $(this).attr("title", "Pause Carousel");
      $("span",this).toggleClass("icon-Play icon-Pause");
    }
  });
```
