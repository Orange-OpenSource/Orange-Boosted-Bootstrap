---
layout: docs
title: Introduction
description: Get started with Boosted, the world's most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.
group: getting-started
aliases:
  - "/docs/5.0/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
toc: true
---

## Quick start

Looking to quickly add Boosted to your project? Use jsDelivr, a free open source CDN. Using a package manager or need to download the source files? [Head to the downloads page]({{< docsref "/getting-started/download" >}}).

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

Boosted also provides Helvetica Neue fonts, **limited to Orange brand usage**: [see `NOTICE.txt` for more information about Helvetica Neue license]({{< param repo >}}/blob/v{{< param current_version >}}/NOTICE.txt).

```html
<!-- Copyright © 2014 Monotype Imaging Inc. All rights reserved -->
<link href="{{< param "cdn.helvetica" >}}" rel="stylesheet" integrity="{{< param "cdn.helvetica_hash" >}}" crossorigin="anonymous">
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
```

### JS

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

#### Bundle

Include every Boosted JavaScript plugin and dependency with one of our two bundles. Both `boosted.bundle.js` and `boosted.bundle.min.js` include [Popper](https://popper.js.org/) for our tooltips and popovers. For more information about what's included in Boosted, please see our [contents]({{< docsref "/getting-started/contents#precompiled-boosted" >}}) section.

```html
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

#### Separate

If you decide to go with the separate scripts solution, Popper must come first (if you're using tooltips or popovers), and then our JavaScript plugins.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

#### Modules

If you use `<script type="module">`, please refer to our [using Boosted as a module]({{< docsref "/getting-started/javascript#using-boosted-as-a-module" >}}) section.

#### Components

Curious which components explicitly require our JavaScript and Popper? Click the show components link below. If you're at all unsure about the general page structure, keep reading for an example page template.

<details>
<summary class="text-primary mb-3">Show components requiring JavaScript</summary>
{{< markdown >}}
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Scrollspy for scroll behavior and navigation updates
{{< /markdown >}}
</details>

{{< callout warning >}}
#### Required script

Boosted includes [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.
However, if you don't need or want to use Boosted's JavaScript files, you'll still need to use the polyfill.
```html
<script src="{{< param "cdn.focus_visible" >}}" integrity="{{< param "cdn.focus_visible_hash" >}}" crossorigin="anonymous"></script>
```
{{< /callout >}}

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Preconnect to CDN: remove if not needed -->
    <link href="https://cdn.jsdelivr.net" rel="preconnect" crossorigin="anonymous">

    <!--
      Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
      Patent and Trademark Office and may be registered in certain other jurisdictions.
      Copyright © 2014 Monotype Imaging Inc. All rights reserved.
      Orange has purchased the right to use Helvetica in its websites and mobile applications.
      If you are not autorized to used it, don't include the orangeHelvetica.css
      See NOTICE.txt for more informations.
    -->
    <link href="dist/fonts/HelvNeue55_W1G.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous">
    <link href="dist/fonts/HelvNeue75_W1G.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous">
    <!-- Copyright © 2014 Monotype Imaging Inc. All rights reserved -->
    <link href="{{< param "cdn.helvetica" >}}" rel="stylesheet" integrity="{{< param "cdn.helvetica_hash" >}}" crossorigin="anonymous">

    <!-- Boosted CSS -->
    <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Boosted Bundle with Popper -->
    <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Boosted JS
    <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
    <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

That's all you need for overall page requirements. Visit the [Layout docs]({{< docsref "/layout/grid" >}}) or [our official examples]({{< docsref "/examples" >}}) to start laying out your site's content and components.

## Important globals

Boosted employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Boosted requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive meta tag

Boosted is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).


### Ressource Hints

[Ressource hints](https://www.w3.org/TR/resource-hints/) are meant to optimize browser loading strategy, by either preloading assets, prefetching DNS or preconnecting to domains — but please use them carefully and **only to hint resources you'll really be using soon**.
It should be used for critical resources only.

#### `preload` fonts

```html
<link rel="preload" href="dist/fonts/HelvNeue75_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="dist/fonts/HelvNeue55_W1G.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

#### `preconnect` to CDNs

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous">
```

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
