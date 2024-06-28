---
layout: docs
title: Carousel
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
aliases:
  - "/docs/components/carousel/"
toc: true
---

## How it works

- The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images, text, or custom markup. It also includes support for previous/next controls and indicators.

- For performance reasons, **carousels must be manually initialized** using the [carousel constructor method](#methods). Without initialization, some of the event listeners (specifically, the events needed touch/swipe support) will not be registered until a user has explicitly activated a control or indicator.

  The only exception are [autoplaying carousels](#autoplaying-carousels) with the `data-bs-ride="carousel"` attribute as these are initialized automatically on page load. If you're using autoplaying carousels with the data attribute, **don't explicitly initialize the same carousels with the constructor method.**

- Nested carousels are not supported. You should also be aware that carousels in general can often cause usability and accessibility challenges.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Basic examples

Here is a basic example of a carousel with three slides. Note the previous/next controls. We recommend using `<button>` elements, but you can also use `<a>` elements with `role="button"`.

{{< example >}}
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

Carousels don't automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they're not explicitly required. Add and customize as you see fit.

**You must add the `.active` class to one of the slides**, otherwise the carousel will not be visible. Also be sure to set a unique `id` on the `.carousel` for optional controls, especially if you're using multiple carousels on a single page. Control and indicator elements must have a `data-bs-target` attribute (or `href` for links) that matches the `id` of the `.carousel` element.

### Indicators

You can add indicators to the carousel, alongside the previous/next controls. The indicators let users jump directly to a particular slide.

<!-- Boosted mod -->

Indicators are animated to show the active slide progress, based on its interval. It adapts to [any interval you set](#individual-carousel-item-interval) thanks to the `--bs-carousel-interval` CSS custom property.
Carousel progress indicator is paused under multiple conditions:

* when the `prefers-reduced-motion` media query equals `reduce` [to improve accessibility]({{< docsref "/getting-started/accessibility#reduced-motion" >}}).
* when the carousel is paused—on hover by default, but can be changed using [the `data-bs-pause` attribute](#options): a `.is-paused` class is added to the carousel.
* when the carousel [doesn't cycle](#prevent-cycling) and is stopped at one end: a `.is-done` class is added to the carousel.
* when the carousel is [static](#static-carousel), ie. when it has `.is-static` class.

<!-- End mod -->

{{< example >}}
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

<!-- Boosted mod -->
### With pause/play button

Adding a pause and play button is recommended to setup an accessible carousel.
When using this button, do not forget to turn off the pause on hover by adding `data-bs-pause="false"` to your carousel.

The `button` must have the custom `data-bs-control="play-button"` attribute and must be included inside a `.carousel-action-bar` alongside the `.carousel-indicators`. In addition, it must also have a `data-bs-target` attribute that matches the `id` of the `.carousel` element.

'Play' and 'Pause' texts can be changed by modifying `data-bs-play-text` and `data-bs-pause-text` custom attributes.

{{< callout warning >}}
For Orange users we recommend using the pause/play button for better accessibility.
Pausing the carousel by hovering one slide should not be used.
{{< /callout >}}

{{< example >}}
<div id="carouselExamplePause" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
  <div class="carousel-action-bar">
    <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExamplePause" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
      <span class="visually-hidden">Pause Carousel</span>
    </button>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExamplePause" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExamplePause" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}
<!-- End mod -->

### Captions

You can add captions to your slides with the `.carousel-caption` element within any `.carousel-item`. They can be easily hidden on smaller viewports, as shown below, with optional [display utilities]({{< docsref "/utilities/display" >}}). We hide them initially with `.d-none` and bring them back on medium-sized devices with `.d-md-block`.

{{< design-callout-alert >}}
**Captions** should not be used because they do not respect the Orange Design System specifications.

Please refer to the [Carousel navigation](https://system.design.orange.com/0c1af118d/p/7773e1-carousel-navigation/b/99a7b7) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">First slide label</h5>
        <p class="mb-0">Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Second slide label</h5>
        <p class="mb-0">Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
      <div class="carousel-caption d-none d-md-block">
        <h5 class="mb-0">Third slide label</h5>
        <p class="mb-0">Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### Crossfade

Add `.carousel-fade` to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content (e.g., text only slides), you may want to add `.bg-body` or some custom CSS to the `.carousel-item`s for proper crossfading.

{{< example >}}
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

## Autoplaying carousels

You can make your carousels autoplay on page load by setting the `ride` option to `carousel`. Autoplaying carousels automatically pause while hovered with the mouse. This behavior can be controlled with the `pause` option. In browsers that support the [Page Visibility API](https://www.w3.org/TR/page-visibility/), the carousel will stop cycling when the webpage is not visible to the user (such as when the browser tab is inactive, or when the browser window is minimized).

{{< callout info >}}
For accessibility reasons, we recommend avoiding the use of autoplaying carousels. If your page does include an autoplaying carousel, we recommend providing an additional button or control to explicitly pause/stop the carousel.

See [WCAG 2.1 Success Criterion 2.2.2 Pause, Stop, Hide](https://www.w3.org/TR/WCAG21/#pause-stop-hide).
{{< /callout >}}

{{< example >}}
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

When the `ride` option is set to `true`, rather than `carousel`, the carousel won't automatically start to cycle on page load. Instead, it will only start after the first user interaction.

{{< example >}}
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

### Individual `.carousel-item` interval

Add `data-bs-interval=""` to a `.carousel-item` to change the amount of time to delay between automatically cycling to the next item.

{{< example >}}
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <!-- Boosted mod -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <!-- End mod -->
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

<!-- Boosted mod: no carousels without controls -->

### Disable touch swiping

Carousels support swiping left/right on touchscreen devices to move between slides. This can be disabled by setting the `touch` option to `false`.

{{< example >}}
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#555" background="#777" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#444" background="#666" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#333" background="#555" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}

<!-- Boosted mod: needed to check carousel indicator's progress when no cycle -->
### Prevent cycling

Use `data-bs-wrap="false"` to prevent carousel from cycling continuously.

{{< example >}}
<div id="carouselExampleNoWrap" class="carousel slide" data-bs-wrap="false" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoWrap" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}
<!-- End mod -->

<!-- Boosted mod: needed to check carousel indicators without autoplay -->
### Static carousel

To prevent the carousel from autoplaying, use the following attributes combo:
1. do not use `data-bs-ride="carousel"` attribute, to prevent instant initialization,
2. add `.is-static` class to your carousel, to cancel progress indicators animation.

{{< example >}}
<div id="carouselExampleNoRide" class="carousel slide is-static">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#4bb4e6" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#50be87" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="400" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#a885d8" text="Third slide" >}}
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleNoRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{{< /example >}}
<!-- End mod -->

<!-- Boosted mod: no dark variant -->

## Custom transition

The transition duration of `.carousel-item` can be changed with the `$carousel-transition-duration` Sass variable before compiling or custom styles if you're using the compiled CSS. If multiple transitions are applied, make sure the transform transition is defined first (e.g. `transition: transform 2s ease, opacity .5s ease-out`).

## CSS

### Sass variables

{{< scss-docs name="carousel-variables" file="scss/_variables.scss" >}}

## Usage

### Via data attributes

Use data attributes to easily control the position of the carousel. `data-bs-slide` accepts the keywords `prev` or `next`, which alters the slide position relative to its current position. Alternatively, use `data-bs-slide-to` to pass a raw slide index to the carousel `data-bs-slide-to="2"`, which shifts the slide position to a particular index beginning with `0`.

### Via JavaScript

Call carousel manually with:

```js
const carousel = new boosted.Carousel('#myCarousel')
```

### Options

{{< markdown >}}
{{< partial "js-data-attributes.md" >}}
{{< /markdown >}}

{{< bs-table >}}
| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `interval` | number | `5000` | The amount of time to delay between automatically cycling an item. |
| `keyboard` | boolean | `true` | Whether the carousel should react to keyboard events. |
| `pause` | string, boolean | `"hover"` | If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it. On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. This is in addition to the mouse behavior. |
| `pause-text` | string | `"Pause Carousel"` | Text needed for accessibility attributes of the pause button. If empty or missing, the default text will be `"Pause Carousel"`. |
| `play-text` | string | `"Play Carousel"` | Text needed for accessibility attributes of the play button. If empty or missing, the default text will be `"Play Carousel"`. |
| `ride` | string, boolean | `false` | If set to `true`, autoplays the carousel after the user manually cycles the first item. If set to `"carousel"`, autoplays the carousel on load. |
| `touch` | boolean | `true` | Whether the carousel should support left/right swipe interactions on touchscreen devices. |
| `wrap` | boolean | `true` | Whether the carousel should cycle continuously or have hard stops. |
{{< /bs-table >}}

### Methods

{{< callout danger >}}
{{< partial "callouts/danger-async-methods.md" >}}
{{< /callout >}}

You can create a carousel instance with the carousel constructor, and pass on any additional options. For example, to manually initialize an autoplaying carousel (assuming you're not using the `data-bs-ride="carousel"` attribute in the markup itself) with a specific interval and with touch support disabled, you can use:

```js
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new boosted.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
```

{{< bs-table >}}
| Method | Description |
| --- | --- |
| `cycle` | Starts cycling through the carousel items from left to right. |
| `dispose` | Destroys an element's carousel. (Removes stored data on the DOM element) |
| `getInstance` | Static method which allows you to get the carousel instance associated to a DOM element. You can use it like this: `boosted.Carousel.getInstance(element)`. |
| `getOrCreateInstance` | Static method which returns a carousel instance associated to a DOM element, or creates a new one in case it wasn't initialized. You can use it like this: `boosted.Carousel.getOrCreateInstance(element)`. |
| `next` | Cycles to the next item. **Returns to the caller before the next item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
| `nextWhenVisible` | Don't cycle carousel to next when the page, the carousel, or the carousel's parent aren't visible. **Returns to the caller before the target item has been shown**. |
| `pause` | Stops the carousel from cycling through items. |
| `prev` | Cycles to the previous item. **Returns to the caller before the previous item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
| `to` | Cycles the carousel to a particular frame (0 based, similar to an array). **Returns to the caller before the target item has been shown** (e.g., before the `slid.bs.carousel` event occurs). |
{{< /bs-table >}}

### Events

Boosted's carousel class exposes two events for hooking into carousel functionality. Both events have the following additional properties:

- `direction`: The direction in which the carousel is sliding (either `"left"` or `"right"`).
- `relatedTarget`: The DOM element that is being slid into place as the active item.
- `from`: The index of the current item
- `to`: The index of the next item

All carousel events are fired at the carousel itself (i.e. at the `<div class="carousel">`).

{{< bs-table >}}
| Event type | Description |
| --- | --- |
| `slid.bs.carousel` | Fired when the carousel has completed its slide transition. |
| `slide.bs.carousel` | Fires immediately when the `slide` instance method is invoked. |
{{< /bs-table >}}

```js
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  // do something...
})
```
