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

{% capture example %}
<div class="swiper-container" style="width: 37.5rem;">
    <div class="swiper-wrapper">
        <div class="swiper-slide" id="slide1">
            <div class="card">
                <div class="card-img">
                    <img alt="first slide" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/green.png">
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
                    <img alt="first slide" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/blue.png">
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
                    <img alt="first slide" src="{{ site.baseurl }}/docs/{{ site.docs_version }}/assets/img/pink.png">
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
{% endcapture %}
{% include example.html content=example %}

## Usage

Make sure to add the vendor <abbr title="Cascading Stylesheet">CSS</abbr> and <abbr title="Javascript">JS</abbr> files to your page to get the plugin working.

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

Here is the recommended setup for an accessible carousel:

```javascript
var mySwiper = new Swiper('.swiper-container', {
  // enable accessibility
  a11y: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
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
      // If we need pagination
      pagination: {
        clickable: false
      },
      freeMode: true, // disable for centered mode
      freeModeMomentumRatio: .5,
      centeredSlides: false, // enable for centered mode
      slideToClickedSlide: false // enable for centered mode
    }
  }
})
```

