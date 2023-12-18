---
layout: docs
title: Local navigation
description: Use local navigation to add a navigation that will nicely wrap on small viewports.
group: components
aliases:
  - "/docs/components/local-navigation/"
toc: true
added: "5.3"
---

## Example

Resize your browser to see the behavior of this component.

{{< callout info >}}
Since the component is supposed to be rendered on a full-size page, there are some slight rendering issues in the mobile viewport in the context of this documentation page.
{{< /callout >}}

{{< example >}}
<nav class="local-nav" aria-label="Basic local navigation">
  <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav" aria-expanded="false" aria-controls="collapseLocalNav">
    <span class="container-xxl">Shop</span>
  </button>
  <div id="collapseLocalNav" class="container-xxl local-nav-collapse d-lg-block collapse">
      <div class="navbar navbar-expand-lg">
        <ul class="navbar-nav w-100">
          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
          <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
        </ul>
      </div>
  </div>
</nav>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.3" >}}

{{< callout-deprecated-dark-variants "local-nav" >}}

## CSS

### Variables

Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="local-nav-css-vars" file="scss/_local-navigation.scss" >}}

### Sass variables

{{< scss-docs name="local-nav-variables" file="scss/_variables.scss" >}}
