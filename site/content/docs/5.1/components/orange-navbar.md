---
layout: docs
title: Orange Navbar
description: Documentation and examples for Boosted's exclusive Brand responsive navbars. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: components
toc: true
---

## How it works

Orange navbar is based on the [navbar]({{<docsref "/components/navbar">}}) component. It adds some display management and introduces the supra bar component.
You may refer to its documentation in order to properly create and use navbars.

### Supra Bar

A simple navigation that can be added on top of orange navbar, it is called supra bar. Simply add the `.supra` class in your navbar declaration.

{{< callout warning >}}
Supra bars are visible only in desktop view.
{{< /callout >}}

{{< example >}}
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md">
  <div class="container">
    <div class="navbar-nav d-flex flex-row">
      <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
      <a class="nav-link pb-1" href="#">Business</a>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
            <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
          </svg>
          <span class="visually-hidden">Search</span>
        </a>
      </li> 
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0 position-relative">
          <span class="position-relative">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white mt-1">
              1
              <span class="visually-hidden">shopping basket items</span>
            </span>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

You can have a complete overview of how to use supra bars in the dedicated [Design Guidelines page]({{<docsref "/guidelines/global-headers">}})