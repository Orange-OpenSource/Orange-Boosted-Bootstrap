---
layout: docs
title: Introduction
description: Get started with Boosted, based on Bootstrap, via CDN and a template starter page.
group: getting-started
aliases:
  - "/docs/5.1/getting-started/"
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

Many of our components require the use of JavaScript to function. Specifically, they require our own JavaScript plugins and [Popper](https://popper.js.org/). Place **one of the following `<script>`s** near the end of your pages, right before the closing `</body>` tag, to enable them.

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

<details class="mb-3 border-top border-bottom border-1 border-light">
<summary class="h3 p-2 mb-0">Show components requiring JavaScript</summary>
{{< markdown >}}
- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/))
- Footer for extending our Collapse plugin to implement responsive behavior
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Offcanvases for displaying, positioning, and scroll behavior
- Orange navbar for minimizing the header
- Quantity selector for incrementing/decrementing number value
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying and dismissing
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/))
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
      If you are not authorized to used it, don't include the orangeHelvetica.css
      See NOTICE.txt for more information.
    -->
    <!-- Option 1: Use a CDN -->
    <link href="{{< param "cdn.HelvNeue55_W1G" >}}" rel="preload" as="font" type="font/woff2" integrity="{{< param "cdn.HelvNeue55_W1G_hash" >}}" crossorigin="anonymous">
    <link href="{{< param "cdn.HelvNeue75_W1G" >}}" rel="preload" as="font" type="font/woff2" integrity="{{< param "cdn.HelvNeue75_W1G_hash" >}}" crossorigin="anonymous">
    <link href="{{< param "cdn.helvetica" >}}" rel="stylesheet" integrity="{{< param "cdn.helvetica_hash" >}}" crossorigin="anonymous">

    <!-- Option 2: Embed the fonts
    <link href="dist/fonts/HelvNeue55_W1G.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous">
    <link href="dist/fonts/HelvNeue75_W1G.woff2" rel="preload" as="font" type="font/woff2" crossorigin="anonymous">
    <link href="dist/css/orange-helvetica.min.css" rel="stylesheet" crossorigin="anonymous">
    -->

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

For next steps, visit the [Layout docs]({{< docsref "/layout/grid" >}}) or [our official examples]({{< docsref "/examples" >}}) to start laying out your site's content and components.

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

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
  box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).


### Resource Hints

[Resource hints](https://www.w3.org/TR/resource-hints/) are meant to optimize browser loading strategy, by either preloading assets, prefetching DNS or preconnecting to domains — but please use them carefully and **only to hint resources you'll really be using soon**.
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

## Bootstrap Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

- Read and subscribe to [The Official Bootstrap Blog]({{< param blog >}}).
- Join [the official Slack room]({{< param slack >}}).
- Chat with fellow Bootstrappers in IRC. On the `irc.libera.chat` server, in the `#bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Developers should use the keyword `bootstrap` on packages that modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/{{< param twitter >}}) for the latest gossip and awesome music videos.
