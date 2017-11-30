---
layout: docs
title: Custom carousel
description: Carousel with swipe effect for mobile support
group: components
toc: true
---

## How it works

This carousel is based on the [swiper](http://idangero.us/swiper/) plugin. It provides touch support, extended setup and works great on mobile devices.

## Demo

{% example html %}
<div class="swiper-container" style="width: 37.5rem;">
    <div class="swiper-wrapper">
        <div class="swiper-slide" id="slide1">
            <div class="card">
                <div class="card-img">
                    <img alt="first slide" src="/assets/img/green.png">
                </div>
                <div class="card-body">
                    <div class="card-title">Slide 1</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide" id="slide2">
            <div class="card">
                <div class="card-img">
                    <img alt="first slide" src="/assets/img/blue.png">
                </div>
                <div class="card-body">
                    <div class="card-title">Slide 2</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
        <div class="swiper-slide" id="slide3">
            <div class="card">
                <div class="card-img">
                    <img alt="first slide" src="/assets/img/pink.png">
                </div>
                <div class="card-body">
                    <div class="card-title">Slide 3</div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
{% endexample %}

## Usage

Make sure to add vendor css and js files to your page to get the plugin working.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    ...
    <link rel="stylesheet" href="path/to/swiper.min.css">
</head>
<body>
    ...
    <script src="path/to/swiper.min.js"></script>
</body>
</html>
```

## Configuration

Here is the recommended setup for accessible carousel.

```javascript
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
```

