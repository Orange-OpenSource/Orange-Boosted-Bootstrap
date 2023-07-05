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

{{< example >}}
<nav class="local-nav" aria-label="Basic local navigation">
  <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav" aria-expanded="false" aria-controls="collapseLocalNav">
    <span class="container-xxl">Shop</span>
  </button>
  <div id="collapseLocalNav" class="container-xxl local-nav-collapse d-lg-block collapse">
      <div class="navbar navbar-expand-lg">
        <ul class="navbar-nav w-100">
          <li class="nav-item"><a class="nav-link" href="#"><div class="container-xxl">Discover</div></a></li>
          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><div class="container-xxl">Shop</div></a></li>
          <li class="nav-item"><a class="nav-link" href="#"><div class="container-xxl">Services</div></a></li>
        </ul>
      </div>
  </div>
</nav>
{{< /example >}}

## Dark variant

Add `.local-nav-dark` to the `.local-nav` for a dark variant. Don't forget to add `.navbar-dark` to the navbar.

{{< example class="bg-dark" >}}
<nav class="local-nav local-nav-dark" aria-label="Local navigation on dark">
  <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNavDark" aria-expanded="false" aria-controls="collapseLocalNavDark">
    <span class="container-xxl">Shop</span>
  </button>
  <div id="collapseLocalNavDark" class="container-xxl local-nav-collapse d-lg-block collapse">
      <div class="navbar navbar-dark navbar-expand-lg">
        <ul class="navbar-nav w-100">
          <li class="nav-item"><a class="nav-link" href="#"><div class="container-xxl">Discover</div></a></li>
          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><div class="container-xxl">Shop</div></a></li>
          <li class="nav-item"><a class="nav-link" href="#"><div class="container-xxl">Services</div></a></li>
        </ul>
      </div>
  </div>
</nav>
{{< /example >}}

## CSS

### Variables

Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="local-nav-css-vars" file="scss/_local-navigation.scss" >}}

Customization through CSS variables can be seen on the `.local-nav-dark` class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="local-nav-dark-css-vars" file="scss/_local-navigation.scss" >}}

### Sass variables

Variables for all local navigation:

{{< scss-docs name="local-nav-variables" file="scss/_variables.scss" >}}

Variables for the [dark local navigation](#dark-variant):

{{< scss-docs name="local-nav-dark-variables" file="scss/_variables.scss" >}}
