---
layout: docs
title: Orange Navbar
description: Documentation and examples for Boosted's exclusive Brand responsive navbars.
group: components
toc: true
---

## How it works

Orange navbar is based on the [navbar]({{<docsref "/components/navbar">}}) component. It adds some display management and introduces the supra bar component.
You may refer to its documentation in order to properly create and use navbars.

## Example

### Supra bar

A simple navigation can be added on top of Orange navbar, it is called supra bar. Simply add the `.supra` class in your navbar declaration.

{{< callout warning >}}
This navbar is visible only on desktop view. 
{{< /callout >}}

{{< example >}}
{{< orange-supra >}}
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link active" href="#" aria-label="English version">EN</a></li>
      <li class="nav-item"><a class="nav-link" href="#" aria-label="Version française" lang="fr" hreflang="fr">FR</a></li>
      <li class="nav-item"><a class="nav-link" href="#" aria-label="Version en español" lang="es" hreflang="es">ES</a></li>
    </ul>
{{< /orange-supra >}}
{{< /example >}}

You can also use icons as navigation items as followed:

{{< example >}}
{{< orange-supra >}}
<ul class="navbar-nav ml-auto">
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
        <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
      </svg>
      <span class="visually-hidden">Search</span>
    </a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
        <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      <span class="visually-hidden">Basket</span>
      <span class="position-relative">
        <span class="badge">
          1
          <span class="visually-hidden">shopping basket items</span>
        </span>
      </span>
    </a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <img src="/docs/5.1/assets/img/navbar-contact.png" role="img" alt="User" loading="lazy" aria-hidden="true">
      <span class="visually-hidden">My account</span>
    </a>
  </li>
</ul>
{{< /orange-supra >}}
{{< /example >}}

You can have a complete overview of how to use supra bars in the dedicated [Design Guidelines page]({{<docsref "/guidelines/global-headers">}})

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-navbar-variables" file="scss/_variables.scss" >}}