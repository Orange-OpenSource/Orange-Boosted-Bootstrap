---
layout: docs
title: Get started with OUDS Web
description: OUDS Web is based on Bootstrap&#58; a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.
group: getting-started
aliases:
  - "/getting-started/"
  - "/docs/getting-started/"
  - "/docs/0.0/getting-started/"
  - "/docs/getting-started/introduction/"
toc: true
---

## About Orange Brand

As OUDS Web is based on Bootstrap, you'll find in OUDS Web **all** the Bootstrap's components and their variants, but with an Orange branded look.

Among those inherited components and variants, some exist in the Orange Design System and fully respect its design specifications and some don't. Those ones should not be used in your projects to ensure a consistent user experience throughout our Orange web services.

As for maintainability reasons we have to keep them in this documentation, we tagged them with red incompatibility design callouts. They inform you of what should not be used from an Orange design point of view. They suggest, when available, a replacement solution and/or a link to the Orange Design System website to see other possibilities.
Thanks for taking this information into account.

Design incompatibility callouts message example:

{{< design-callout-alert >}}
This checkbox variant should not be used because it does not respect the Orange Design System specifications.

From the Orange Design System point of view, checkboxes should be represented like in our OUDS Web [Checks]({{< docsref "/forms/checks-radios" >}}) component. You can also refer to the [Checkbox](https://system.design.orange.com/0c1af118d/p/88ab5b-forms/b/599459/i/48901789) guidelines on on the Orange Design System website.
{{< /design-callout-alert >}}

In the same spirit, some blue recommendation design callouts will inform you of specific Orange Design System recommendations.

Design recommendation callouts message example:

{{< design-callout-alert info >}}
To display basic tables, Orange Design System recommends using these compact tables.
{{< /design-callout-alert >}}

## Quick start

Get started by including OUDS Web's production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this [OUDS Web CodePen demo](https://codepen.io/julien-deramond/pen/WNMxywB).

<br>

1. **Create a new `index.html` file in your project root.** Include the `<meta name="viewport">` tag as well for [proper responsive behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag) in mobile devices.

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>OUDS Web demo</title>
     </head>
     <body>
       <h1>Hello, world!</h1>
     </body>
   </html>
   ```

2. **Include OUDS Web's CSS and JS.** Place the `<link>` tag in the `<head>` for our CSS, and the `<script>` tag for our JavaScript bundle (including Popper for positioning dropdowns, popovers, and tooltips) before the closing `</body>`. Learn more about our [CDN links](#cdn-links).

   ```html
   <!doctype html>
   <html lang="en">
     <head>
       <meta charset="utf-8">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>OUDS Web demo</title>
       <link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
     </head>
     <body>
       <h1>Hello, world!</h1>
       <script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
     </body>
   </html>
   ```

   You can also include [Popper](https://popper.js.org/docs/v2/) and our JS separately. If you don't plan to use dropdowns, popovers, or tooltips, save some kilobytes by not including Popper.

   ```html
   <script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
   <script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
   ```

3. **Hello, world!** Open the page in your browser of choice to see your OUDS Web page. Now you can start building with OUDS Web by creating your own [layout]({{< docsref "/layout/grid" >}}), adding dozens of [components]({{< docsref "/components/buttons" >}}), and utilizing [our official examples]({{< docsref "/examples" >}}).

## CDN links

As reference, here are our primary CDN links.

{{< bs-table >}}
| Description | URL |
| --- | --- |
| CSS | `{{< param "cdn.css" >}}` |
| JS | `{{< param "cdn.js_bundle" >}}` |
{{< /bs-table >}}

You can also use the CDN to fetch any of our [additional builds listed in the Contents page]({{< docsref "/getting-started/contents" >}}).

## Next steps

- Read a bit more about some [important global environment settings](#important-globals) that OUDS Web utilizes.
- Read about what's included in OUDS Web in our [contents section]({{< docsref "/getting-started/contents/" >}}) and the list of [components that require JavaScript](#js-components) below.
- Need a little more power? Consider building with OUDS Web by [including the source files via package manager]({{< docsref "/getting-started/download#package-managers" >}}).
- Looking to use OUDS Web as a module with `<script type="module">`? Please refer to our [using OUDS Web as a module]({{< docsref "/getting-started/javascript#using-ouds-web-as-a-module" >}}) section.

## JS components

Curious which components explicitly require our JavaScript and Popper? If you're at all unsure about the general page structure, keep reading for an example page template.

- Accordions for extending our Collapse plugin
- Alerts for dismissing and Close button tooltip
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Close button for displaying and positioning tooltip
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper](https://popper.js.org/docs/v2/))
- Footer for extending our Collapse plugin to implement responsive behavior
- Modals for displaying, positioning, scroll behavior, and Close button tooltip
- Navbar for extending our Collapse and Offcanvas plugins to implement responsive behaviors, and Close button tooltip (Offcanvas only)
- Navs with the Tab plugin for toggling content panes
- Offcanvases for displaying, positioning, scroll behavior, and Close button tooltip
- Orange navbar for minimizing the header
- Quantity selector for incrementing/decrementing number value
- Scrollspy for scroll behavior and navigation updates
- Toasts for displaying, dismissing, and Close button tooltip
- Tooltips and popovers for displaying and positioning (also requires [Popper](https://popper.js.org/docs/v2/))

{{< callout warning >}}
#### Required script

OUDS Web includes [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) to ensure an enhanced focus visibility for keyboard users while shutting down focus styles on active state.
However, if you don't need or want to use OUDS Web's JavaScript files, you'll still need to use the polyfill.
```html
<script src="{{< param "cdn.focus_visible" >}}" integrity="{{< param "cdn.focus_visible_hash" >}}" crossorigin="anonymous"></script>
```
{{< /callout >}}

## Important globals

OUDS Web employs a handful of important global styles and settings, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

OUDS Web requires the use of the HTML5 doctype. Without it, you'll see some funky and incomplete styling.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Viewport meta

OUDS Web is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>`.

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

You can see an example of this in action in the [quick start](#quick-start).

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

#### `preconnect` to CDNs

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous">
```

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## OUDS Web community

Stay up-to-date on the development of OUDS Web and reach out to the community with these helpful resources.

- Ask questions and explore [our GitHub Discussions](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions).
- Chat with the core team and fellow OUDS Web users on internal Orange communication tools.

## Bootstrap Community

Stay up-to-date on the development of Bootstrap and reach out to the community with these helpful resources.

- Read and subscribe to [The Official Bootstrap Blog]({{< param blog >}}).
- Ask and explore [our GitHub Discussions](https://github.com/twbs/bootstrap/discussions).
- Ask questions and explore [Bootstrap GitHub Discussions](https://github.com/twbs/bootstrap/discussions).
- Discuss, ask questions, and more on [the community Discord](https://discord.gg/bZUvakRU3M) or [Bootstrap subreddit](https://www.reddit.com/r/bootstrap/).
- Chat with fellow Bootstrappers in IRC. On the `irc.libera.chat` server, in the `#bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-5`](https://stackoverflow.com/questions/tagged/bootstrap-5)).
- Developers should use the keyword `bootstrap` on packages that modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/search?q=keywords:bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/{{< param twitter >}}) for the latest gossip and awesome music videos.
