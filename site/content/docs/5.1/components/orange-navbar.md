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

## Examples

### Supra bar

A simple navigation can be added on top of Orange navbar, it is called supra bar. Simply add the `.supra` class in your navbar declaration.

{{< callout warning >}}
This navbar is visible only on desktop view.
{{< /callout >}}

{{< example >}}
{{< orange-supra >}}
{{< /orange-supra >}}
{{< /example >}}

Supra bar items can be added on left and right.

{{< example >}}
{{< orange-supra mode="languages" >}}
{{< /orange-supra >}}
{{< /example >}}

Icons as navigation items can be used as well.

{{< example >}}
{{< orange-supra mode="actions" >}}
{{< /orange-supra >}}
{{< /example >}}

### Global Headers (Navbars)

Brand-compliant navbars that are easy to use and customizable.

#### Global header standard

{{< example class="p-0">}}
<nav class="navbar navbar-dark bg-dark navbar-expand-md">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
    </a>
    <div class="d-flex order-md-1 align-self-end">
      <ul class="navbar-nav flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon position-relative">
            <span class="position-relative">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                1
                <span class="visually-hidden">shopping basket items</span>
              </span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header" aria-controls="global-header" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse" id="global-header" style="height: auto;">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
        <li class="nav-item"><a class="nav-link" href="#">News</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

#### Global header with title

You can, if you want, add title (on one or two lines) next to the brand logo.

{{< callout warning >}}
It is not allowed to have a title into a [minimized global header]({{< ref "#global-header-minimized" >}}), because it is not compliant with the Orange Design System.
{{< /callout >}}

{{< example class="p-0">}}
<!-- On one line -->
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="30" height="50" role="img" alt="Boosted" loading="lazy">
        <span id="title" class="title h1">Title</span>
      </a>
      <div class="d-flex order-md-1 align-self-end">
        <ul class="navbar-nav flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title" aria-controls="global-header-title" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse justify-content-between collapse" id="global-header-title">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<br>
<!-- On two lines -->
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <span class="two-lined h1" id="two-line-title">
          <span class="align-self-end">Title Line 1</span><br>
          <span class="align-self-end">Title Line 2</span>
        </span>
      </a>
      <div class="d-flex order-md-1 align-self-end">
        <ul class="navbar-nav flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-two-line" aria-controls="global-header-two-line" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="global-header-two-line">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
{{< /example >}}

#### Global header minimized

Add the `.header-minimized` on your navbar in order to have a thinner Orange Navbar.

{{< callout warning >}}

<!-- TODO: replace /guidelines/logos#orange-logo reference -->

The minimized global header will **always** use the small [Master logo]().
{{< /callout >}}

{{< example class="p-0">}}
<nav class="navbar navbar-dark bg-dark navbar-expand-md header-minimized pt-md-2 pb-md-0">
  <div class="container">
    <a class="navbar-brand pt-1" href="#">
      <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
    </a>
    <div class="d-flex order-md-1 align-self-end">
      <ul class="navbar-nav flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li>
        <li class="nav-item d-none d-sm-block">
          <a href="#" class="nav-link nav-icon position-relative">
            <span class="position-relative">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                1
                <span class="visually-hidden">shopping basket items</span>
              </span>
            </span>
          </a>
        </li>
        <li class="nav-item d-none d-sm-block">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-minified" aria-controls="global-header-minified" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse bg-dark" id="global-header-minified" style="height: auto;">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
        <li class="nav-item"><a class="nav-link" href="#">News</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

#### With navigation under

You can have a simple additional navigation under your Global Header.

{{< callout warning >}}
Please note the navigation bar **is not** a supra bar.

Also, it is not allowed to use this bar under a [minimized global header]({{< ref "#global-header-minimized" >}}), because it is not compliant with the Orange Design System.
{{< /callout >}}


{{< example class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container flex-sm-wrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <span class="two-lined h2" id="two-line-title-2">
          <span class="align-self-end">Title Line 1</span><br>
          <span class="align-self-end">Title Line 2</span>
        </span>
      </a>
      <div class="d-flex order-md-1 align-self-end">
        <ul class="navbar-nav flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>
            </a>
          </li>
          <li class="nav-item d-none d-sm-block">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title-nav-2" aria-controls="global-header-title-nav-2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="navbar navbar-dark bg-dark navbar-expand-md flex-sm-wrap p-0">
    <div class="container">
      <div class="navbar-collapse collapse" id="global-header-title-nav-2">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

#### With search box

You can have a search input into your Global Header. This one will appear different from your regular search input.

{{< example class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <div class="d-flex">
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-search" aria-controls="global-header-search" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse justify-content-between collapse" id="global-header-search">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
        </ul>
      </div>
      <form class="d-flex d-none d-md-flex pt-1 ps-2" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </nav>
</header>
{{< /example >}}

#### With custom logo (OBS example)

Instead of using the Master Logo that is provided by Boosted, you can also use whatever logo you want depending on your project, entity, ...

{{< callout warning >}}
<!-- TODO: replace /guidelines/logos#responsive-svg reference -->

You should consider having a **responsive SVG logo**. In order to do so, you may set up a responsive rendering into your SVG, [as we do with the Master Logo]().

<!-- TODO: replace /guidelines/logos#using-semantic-markup reference -->

If you do not intend to use your own SVG, you should explore the [DOM solution]() and therefore do as if you had a [title on one or two lines]({{< ref "#global-header-with-title" >}}).

The latter may be the preferred way to do a custom logo, still, as it's *really* not recommended to use anything other than the Master logo.
{{< /callout >}}

{{< example class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <div class="figure-img m-auto d-inline-flex align-items-baseline">
          <div class="d-inline-flex align-items-baseline">
            <img class="obs-logo" src="/docs/5.1/assets/brand/OBS-logo.svg" alt="" aria-hidden="true" loading="lazy" style="width: 100%;">
          </div>
        </div>
      </a>
      <div class="d-flex order-md-1 align-self-end">
        <ul class="navbar-nav flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#obs-global-header" aria-controls="obs-global-header" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse justify-content-end collapse" id="obs-global-header">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-navbar-variables" file="scss/_variables.scss" >}}
