---
layout: docs
title: Custom carousel
description: Carousel with swipe effect for mobile support
group: components
---

This carousel is based on the [swiper](http://idangero.us/swiper/) plugin. It provides touch support, extended setup and works great on mobile devices.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Demo

{% example html %}
<div class="swiper-container" style="width: 37.5rem;">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><img alt="Random first slide" src="https://dummyimage.com/600x400/cccccc/000000&text=slide+1"></div>
        <div class="swiper-slide"><img alt="Random first slide" src="https://dummyimage.com/600x400/cccccc/000000&text=slide+2"></div>
        <div class="swiper-slide"><img alt="Random first slide" src="https://dummyimage.com/600x400/cccccc/000000&text=slide+3"></div>
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
var mySwiper = new Swiper ('#main-carousel', {
// enable accessibility
a11y: true,
keyboardControl: true,

// pagination dots
pagination: '.swiper-pagination',

// navigation arrows
nextButton: '.swiper-button-next',
prevButton: '.swiper-button-prev',

// adapt height to each slide
autoHeight: true
})
```

