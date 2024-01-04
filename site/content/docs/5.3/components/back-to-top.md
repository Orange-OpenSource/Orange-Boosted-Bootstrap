---
layout: docs
title: Back to top
description: Sticky back-to-top link appearing after scrolling down one viewport height.
group: components
aliases:
  - "/docs/components/back-to-top/"
toc: true
---

## Overview

Boosted "back to top" provides a way to get back to the top of the page using a simple link. It's built only with HTML and CSS, meaning you don't need any JavaScript. It only requires a `.back-to-top` wrapper and a `.back-to-top-link`, at the end of your `body`— just before your scripts.

For accessibility purposes, back-to-top link contains a `.visually-hidden` text content and a `data-bs-label` attribute— whose **value should match hidden text content** to make sure it's usable with speech recognition software. The `data-bs-label` attribute content is displayed in a `::before` pseudo-element thanks to the `attr()` CSS function.

We also recommend using a `nav` wrapper —alongside an accurate `aria-label`— to ease discoverability through landmarks.

Make sure you leave enough space between the back-to-top link and the bottom of the viewport to:
- prevent the component being overlapped by bottom navigation bar on mobile and notification tooltips for Windows users,
- avoid proximity with system interactive areas, which could lead to accidentally activating an adjacent target.


{{< callout >}}
### Smooth scroll

Smooth scrolling does not depend on this component. It's turned on only when the user has **not** explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`) through the `scroll-behavior` property. [Read more about `prefers-reduced-motion` in our accessibility page]({{< docsref "/getting-started/accessibility#reduced-motion" >}}).
{{< /callout >}}

## Example

<div class="bd-example d-flex">
  <nav aria-label="Standard back to top example" class="back-to-top position-static ps-5 ms-5">
    <a href="#top" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>
{{< example show_preview="false" >}}
<nav aria-label="Back to top" class="back-to-top">
  <a href="#top" class="back-to-top-link btn btn-icon btn-outline-secondary" data-bs-label="Back to top">
    <span class="visually-hidden">Back to top</span>
  </a>
</nav>
{{< /example >}}

{{< callout warning >}}
### Define a target

Since we're using a link, **you need a valid target**. We recommend adding an anchor link at the beginning of your markup, like so: `<a id="top"></a>`.
You may use another `id`, but if you're using a fixed header you'll need to override our `$back-to-top-target-id` variable to ensure it won't overlap content after scrolling up.
{{< /callout >}}

### Always visible

Add `.position-fixed` utility to your `.back-to-top-link` to make your back-to-top link persistent.

{{< example show_preview="false" >}}
<nav aria-label="Fixed back to top example" class="back-to-top">
  <a href="#top" class="back-to-top-link position-fixed btn btn-icon btn-outline-secondary" data-bs-label="Back to top">
    <span class="visually-hidden">Back to top</span>
  </a>
</nav>
{{< /example >}}

### Icon only

Use a `title` attribute instead of `data-bs-label` to ensure a visible label is still provided on demand for sighted users.

<div class="bd-example">
  <nav aria-label="Icon only back to top example" class="back-to-top position-static">
    <a href="#top" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>
{{< example show_preview="false" >}}
<nav aria-label="Back to top" class="back-to-top">
  <a href="#top" class="back-to-top-link btn btn-icon btn-outline-secondary" title="Back to top">
    <span class="visually-hidden">Back to top</span>
  </a>
</nav>
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, Back to tops now use local CSS variables on `.back-to-top` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="back-to-top-css-vars" file="scss/_back-to-top.scss" >}}

As it is a responsive component, here is the overridden variables in `xl` breakpoint:

{{< scss-docs name="back-to-top-xl-css-vars" file="scss/_back-to-top.scss" >}}

### Sass options

Back to top link can be customized in a few ways: either making it appear after more or less vertical scrolling, modify its offset from the bottom right corner, etc.

<table class="table">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>$back-to-top-display-threshold</code></td>
      <td>
        Defines the vertical threshold at which "back to top" link appears.
      </td>
      <td><code>100vh</code></td>
    </tr>
    <tr>
      <td><code>$back-to-top-target-id</code></td>
      <td>
        Target's <code>id</code>, used to apply <code>scroll-margin-top</code> when anchor is active.
      </td>
      <td><code>"top"</code></td>
    </tr>
    <tr>
      <td><code>$back-to-top-offset</code></td>
      <td>
        Base offset, used to place "back to top" link in the bottom right corner of the page.
      </td>
      <td><code>$spacer * 1.5</code></td>
    </tr>
  </tbody>
</table>

### Sass variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="back-to-top" file="scss/_variables.scss" >}}
