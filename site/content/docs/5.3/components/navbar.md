---
layout: docs
title: Navbar
description: Documentation and examples for Boosted's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: components
aliases:
  - "/docs/components/navbar/"
toc: true
---

{{< design-callout-alert >}}
This component explains the basic behavior, structure and concepts of navbars from a Bootstrap point of view. Some discrepancies exist with Boosted due to a different HTML structure. Moreover, Orange navbars have the same rendering in light and dark mode.

In order to build an Orange navbar please refer to the [Orange navbar component]({{< docsref "/components/orange-navbar" >}}).
{{< /design-callout-alert >}}

## How it works

Here's what you need to know before getting started with the navbar:

- Navbars require a wrapping `.navbar` with `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` for responsive collapsing and [color scheme](#color-schemes) classes.
- Navbars and their contents are fluid by default. Change the [container](#containers) to limit their horizontal width in different ways.
- Use our [spacing]({{< docsref "/utilities/spacing" >}}) and [flex]({{< docsref "/utilities/flex" >}}) utility classes for controlling spacing and alignment within navbars.
- Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
- Ensure accessibility by using a `<nav>` element or, if using a more generic element such as a `<div>`, add a `role="navigation"` to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
- Indicate the current item by using `aria-current="page"` for the current page or `aria-current="true"` for the current item in a set.
- **New in v5.2.0:** Navbars can be themed with CSS variables that are scoped to the `.navbar` base class. `.navbar-light` has been deprecated and `.navbar-dark` has been rewritten to override CSS variables instead of adding additional styles.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Supported content

Navbars come with built-in support for a handful of sub-components. Choose from the following as needed:

- `.navbar-brand` for [Orange logo]({{< docsref "/about/brand" >}}#orange-logo), and your product or project name.
- `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
- `.navbar-toggler` for use with our collapse plugin and other [navigation toggling](#responsive-behaviors) behaviors.
- Flex and spacing utilities for any form controls and actions.
- `.navbar-text` for adding vertically centered strings of text.
- `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.
- Add an optional `.navbar-nav-scroll` to set a `max-height` and [scroll expanded navbar content](#scrolling).

Here's an example of all the sub-components included in a responsive dark-themed navbar that automatically collapses at the `lg` (large) breakpoint.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-end" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex navbar-item ms-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

This example uses [background]({{< docsref "/utilities/background" >}}) (`bg-dark`) and [spacing]({{< docsref "/utilities/spacing" >}}) (`me-auto`, `me-2`, `ms-3`) utility classes.

### Brand

The `.navbar-brand` can be used to contain most elements, but an anchor works best, as some elements might require utility classes or custom styles.

<!-- Boosted mod: .navbar-brand must contain Orange logo -->
{{< example >}}
<!-- As a link -->
<header>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Navbar</h1>
      </div>
    </div>
  </nav>
</header>

<!-- As a heading -->
<header class="mt-3">
  <nav class="navbar">
    <div class="container-fluid">
      <div class="navbar-brand">
        <span class="stretched-link">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </span>
        <h1 class="title">Navbar</h1>
      </div>
    </div>
  </nav>
</header>
{{< /example >}}
<!-- End mod -->

### Nav

Navbar navigation links build on our `.nav` options with their own modifier class and require the use of [toggler classes](#toggler) for proper responsive styling. **Navigation in navbars will also grow to occupy as much horizontal space as possible** to keep your navbar contents securely aligned.

Add the `.active` class on `.nav-link` to indicate the current page.

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

And because we use classes for our navs, you can avoid the list-based approach entirely if you like.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

You can also use dropdowns in your navbar. Dropdown menus require a wrapping element for positioning, so be sure to use separate and nested elements for `.nav-item` and `.nav-link` as shown below.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
{{< /example >}}

### Forms

Place various form controls and components within a navbar:

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

Immediate child elements of `.navbar` use flex layout<!-- Boosted mod: no justify-content -->. Use additional [flex utilities]({{< docsref "/utilities/flex" >}}) as needed to adjust this behavior.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <div class="navbar-brand me-auto">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <form class="d-flex navbar-item" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
{{< /example >}}

Input groups work, too. If your navbar is an entire form, or mostly a form, you can use the `<form>` element as the container and save some HTML. Applies to the option above and below this copy.

{{< example >}}
<nav class="navbar">
  <form class="container-fluid">
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>
  </form>
</nav>
{{< /example >}}

Various buttons are supported as part of these navbar forms, too. This is also a great reminder that vertical alignment utilities can be used to align different sized elements.

{{< example >}}
<nav class="navbar">
  <form class="container-fluid justify-content-start align-items-center">
    <button class="btn btn-primary me-2" type="button">Main button</button>
    <button class="btn btn-sm btn-primary" type="button">Smaller button</button>
  </form>
</nav>
{{< /example >}}

### Text

Navbars may contain bits of text with the help of `.navbar-text`. This class adjusts vertical alignment and horizontal spacing for strings of text.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
{{< /example >}}

Mix and match with other components and utilities as needed.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-end" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span class="navbar-text ms-3">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
{{< /example >}}

## Color schemes

{{< callout warning >}}
**New dark navbars in v5.3.3 —** We've deprecated `.navbar-dark` in favor of the new `data-bs-theme="dark"`. Add `data-bs-theme="dark"` to the `.navbar` to enable a component-specific color mode. [Learn more about our color modes.]({{< docsref "/customize/color-modes" >}})

---

**New in v5.2.0  —** Navbar theming is now powered by CSS variables and `.navbar-light` has been deprecated. CSS variables are applied to `.navbar`, defaulting to the "light" appearance, and can be overridden with `.navbar-dark`.
{{< /callout >}}

Navbar themes are easier than ever thanks to Bootstrap's combination of Sass and CSS variables. The default is our "light navbar" for use with light background colors, but you can also apply `data-bs-theme="dark"` to the `.navbar` parent for dark background colors. Then, customize with `.bg-*` and additional utilities.

<div class="bd-example">
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/5.3/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end" id="navbarColor01">
        <ul class="navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-3 mt-md-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-body-secondary">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/5.3/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end" id="navbarColor02">
        <ul class="navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-3 mt-md-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/5.3/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end" id="navbarColor03">
        <ul class="navbar-nav navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-3 mt-md-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-expand-lg bg-body-secondary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;" data-bs-theme="light">
  <!-- Navbar content -->
</nav>
```

## Containers

Although it's not required, you can wrap a navbar in a `.container` to center it on a page–though note that an inner container is still required. Or you can add a container inside the `.navbar` to only center the contents of a [fixed or static top navbar](#placement).

{{< example >}}
<div class="container">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
      </div>
    </div>
  </nav>
</div>
{{< /example >}}

Use any of the responsive containers to change how wide the content in your navbar is presented.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-md">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
    </div>
  </div>
</nav>
{{< /example >}}

## Placement

Use our [position utilities]({{< docsref "/utilities/position" >}}) to place navbars in non-static positions. Choose from fixed to the top, fixed to the bottom, stickied to the top (scrolls with the page until it reaches the top, then stays there), or stickied to the bottom (scrolls with the page until it reaches the bottom, then stays there).

Fixed navbars use `position: fixed`, meaning they're pulled from the normal flow of the DOM and may require custom CSS (e.g., `padding-top` on the `<body>`) to prevent overlap with other elements.

{{< example >}}
<nav class="navbar">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Default</h1>
    </div>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-top">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Fixed top</h1>
    </div>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar fixed-bottom">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Fixed bottom</h1>
    </div>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-top">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Sticky top</h1>
    </div>
  </div>
</nav>
{{< /example >}}

{{< example >}}
<nav class="navbar sticky-bottom">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Sticky bottom</h1>
    </div>
  </div>
</nav>
{{< /example >}}

## Scrolling

Add `.navbar-nav-scroll` to a `.navbar-nav` (or other navbar sub-component) to enable vertical scrolling within the toggleable contents of a collapsed navbar. By default, scrolling kicks in at `75vh` (or 75% of the viewport height), but you can override that with the local CSS custom property `--bs-navbar-height` or custom styles. At larger viewports when the navbar is expanded, content will appear as it does in a default navbar.

Please note that this behavior comes with a potential drawback of `overflow`—when setting `overflow-y: auto` (required to scroll the content here), `overflow-x` is the equivalent of `auto`, which will crop some horizontal content.

Here's an example navbar using `.navbar-nav-scroll` with `style="--bs-scroll-height: 100px;"`, with some extra margin utilities for optimum spacing.

{{< example >}}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="navbar-brand">
      <a class="stretched-link" href="#">
        <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
      </a>
      <h1 class="title">Scroll</h1>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse align-items-end" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll align-items-end" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex navbar-item ms-3 mt-md-4" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
{{< /example >}}

## Responsive behaviors

Navbars can use `.navbar-toggler`, `.navbar-collapse`, and `.navbar-expand{-sm|-md|-lg|-xl|-xxl}` classes to determine when their content collapses behind a button. In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the `.navbar-expand` class on the navbar. For navbars that always collapse, don't add any `.navbar-expand` class.

<!-- Boosted mod: toggler always on the right -->

### External content

Sometimes you want to use the collapse plugin to trigger a container element for content that structurally sits outside of the `.navbar` . Because our plugin works on the `id` and `data-bs-target` matching, that's easily done!

{{< example >}}
<div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
  <div class="bg-dark p-4">
    <h5 class="text-body-emphasis h4">Collapsed content</h5>
    <span class="text-body-secondary">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar" data-bs-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
{{< /example >}}

When you do this, we recommend including additional JavaScript to move the focus programmatically to the container when it is opened. Otherwise, keyboard users and users of assistive technologies will likely have a hard time finding the newly revealed content - particularly if the container that was opened comes *before* the toggler in the document's structure. We also recommend making sure that the toggler has the `aria-controls` attribute, pointing to the `id` of the content container. In theory, this allows assistive technology users to jump directly from the toggler to the container it controls–but support for this is currently quite patchy.

### Offcanvas

Transform your expanding and collapsing navbar into an offcanvas drawer with the [offcanvas component]({{< docsref "/components/offcanvas" >}}). We extend both the offcanvas default styles and use our `.navbar-expand-*` classes to create a dynamic and flexible navigation sidebar.

In the example below, to create an offcanvas navbar that is always collapsed across all breakpoints, omit the `.navbar-expand-*` class entirely.

{{< example stackblitz_add_js="true" >}}
<nav class="navbar fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

To create an offcanvas navbar that expands into a normal navbar at a specific breakpoint like `lg`, use `.navbar-expand-lg`.

```html
<nav class="navbar navbar-expand-lg fixed-top">
  <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    ...
  </div>
</nav>
```

When using offcanvas in a dark navbar, be aware that you may need to have a dark background on the offcanvas content to avoid the text becoming illegible. In the example below, we add `[data-bs-theme="dark"]` to the `.navbar` for proper styling with a dark offcanvas.

{{< example stackblitz_add_js="true" >}}
<nav class="navbar fixed-top" data-bs-theme="dark">
  <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

{{% enable-btn-close-tooltip 4 "offcanvases navbars" %}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part Boosted's evolving CSS variables approach, navbars now use local CSS variables on `.navbar` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="navbar-css-vars" file="scss/_navbar.scss" >}}

Some additional CSS variables are also present on `.navbar-nav`:

{{< scss-docs name="navbar-nav-css-vars" file="scss/_navbar.scss" >}}

### Sass variables

{{< scss-docs name="navbar-variables" file="scss/_variables.scss" >}}

### Sass loops

[Responsive navbar expand/collapse classes](#responsive-behaviors) (e.g., `.navbar-expand-lg`) are combined with the `$breakpoints` map and generated through a loop in `scss/_navbar.scss`.

{{< scss-docs name="navbar-expand-loop" file="scss/_navbar.scss" >}}
