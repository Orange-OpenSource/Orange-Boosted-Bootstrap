---
layout: docs
title: Migrating to v5
description: Track and review changes to the Boosted source files, documentation, and components to help you migrate from v4 to v5.
group: migration
aliases:
  - "/migration/"
  - "/docs/migration/"
toc: true
---

## v5.2.3

<hr class="mb-4">

Boosted v5.2.3 has landed with a handful of urgent bug fixes from Bootstrap and with specific Boosted content.

If you need more details about the changes, please refer to the [v5.2.3 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.3).

### Components

- **Card**
  - <span class="badge bg-warning">Warning</span> We now apply font styles on our `.card-title` and `.card-subtitle`, so you can use any `<h*>` following your semantic structure inside a card. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <h4 class="card-title">Title</h4>
      + <h3 class="card-title">Title</h3>
      ```
    </details>

  - <span class="badge bg-warning">Warning</span> We now apply `.fw-bold` on some `.card-text` when there is an image in the card to follow the design guidelines. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <p class="card-text">Description</p>
      + <p class="card-text fw-bold">Description</p>
      ```
    </details>

- **Footer**
  - <span class="badge bg-warning">Warning</span> Each footer accordion now uses an `aria-labelledby` attribute to be consistent with our accordion component. Please reflect these modifications into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      ```diff
      - <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion">
      + <div id="collapse" class="accordion-collapse collapse" data-bs-parent="#accordion" aria-labelledby="heading">
      ```
    </details>

- **Navs & Tabs**
  - <span class="badge bg-danger">Breaking</span> Nested tabs variant changed its markup to ensure a greater accessibility and consistency over the documentation. Please reflect these modifications into your websites.
    <details class="mb-2">
      <summary>More info</summary>

      - Ensure that the root element of the tablist is a `<ul>`.
      - Ensure that the `role="tablist"` is set on `<ul>`.
      - Ensure that the `role="tablist"` has an `aria-owns` set too with all the ids it owns.
      - Ensure that the `role="presentation"` is set on each `<li>` inside a `role="tablist"`.
      - Ensure that the `role="tabpanel"` is set on each child of `.tab-content`.
      - Ensure that the `disabled` links only miss the `[href]` attribute.
    </details>

- **Orange Navbar**
  - <span class="badge bg-danger">Breaking</span> The minimizing behavior with `.header-minimized` is applied on top of the `<header>` instead of one of his child directly.

- **Stepped Process**
  - Current step has been slightly changed for accessibility purpose; the link to this step has been converted to plain text. Please reflect this modification into your websites.
  ```diff
  -        <a class="stepped-process-link" href="#" title="2. Review" aria-current="step">Review</a>
  +        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
  ```

### Contents

- **Tables**
  - <span class="badge bg-warning">Warning</span> Every table now has a caption with `.visually-hidden` on it. Please reflect this modification into your websites.

  - <span class="badge bg-success">New</span> Tables now fully support striped rows and columns.

### Forms

- <span class="badge bg-success">New</span> Form helpers icon buttons will help you to provide extra help information with the `.form-helper` utility class.

- <span class="badge bg-success">New</span> Small size form controls are now available. Small inputs are defined by their `.form-control-sm`, small selects by their `.form-select-sm`. They can be associated with `.col-form-label-sm` to correctly follow their size if needed. `.input-group-sm` can also be used depending on the context.

### Examples

- **Cards and Cards RTL**
  - <span class="badge bg-warning">Warning</span> We now use correctly `<button>` instead of `<a>`. We now apply font style on our `.card-title` so these examples have been modified to follow the right semantic header hierarchy. Furthermore, we dropped unnecessary `.card-footer` and notice that size of icons has slightly changed. Please check and reflect if necessary this modification into your websites.
    <details class="mb-2">
      <summary>Example</summary>

      ```diff
        <div class="card">
          <img src="..." alt="..."/>
          <div class="card-body">
      -     <h4 class="card-title">Title</h4>
      +     <h3 class="card-title">Title</h3>
      -     <h6 class="card-text">Caption</h6>
      +     <p class="card-text fw-bold mb-4">Caption</p>
      -   </div>
      -   <div class="card-footer pt-2">
      -     <a class="btn btn-secondary" aria-label="Button description" title="Button description">Button</a>
      +     <button class="btn btn-secondary" aria-label="Button description" title="Button description">Button</button>
          </div>
        </div>
      ```
    </details>

- **Pages**
  - <span class="badge bg-success">New</span> A new section called 'Pages' has been added where you will find complete and reusable pages that can be found in the Design Guidelines.
  - <span class="badge bg-success">New</span> A form page example is now available.

### CSS and Sass variables

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-table-accent-bg</code></li>
      <li><code>--bs-table-striped-bg</code></li>
      <li><code>--bs-table-striped-color</code></li>
      <li><code>--bs-table-striped-hover-bg</code></li>
      <li><code>--bs-table-striped-hover-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$form-helper-label-margin-bottom</code></li>
      <li><code>$form-helper-size</code></li>
      <li><code>$form-select-border-radius-sm</code></li>
      <li><code>$form-select-font-size-sm</code></li>
      <li><code>$form-select-padding-x-sm</code></li>
      <li><code>$form-select-padding-y-sm</code></li>
      <li><code>$helper-icon</code></li>
      <li><code>$input-border-radius-sm</code></li>
      <li><code>$input-font-size-sm</code></li>
      <li><code>$table-accent-bg</code></li>
      <li><code>$table-striped-bg</code></li>
      <li><code>$table-striped-bg-factor</code></li>
      <li><code>$table-striped-color</code></li>
      <li><code>$table-striped-columns-order</code></li>
      <li><code>$table-striped-hover-bg</code></li>
      <li><code>$table-striped-hover-bg-factor</code></li>
      <li><code>$table-striped-hover-color</code></li>
      <li><code>$table-striped-order</code></li>
      <li><code>$table-variant-active-bg-factor</code></li>
      <li><code>$table-variant-hover-bg-factor</code></li>
      <li><code>$table-variant-striped-hover-bg</code></li>
      <li><code>$table-variant-striped-hover-bg-factor</code></li>
    </ul>
  </details>

## v5.2.2

<hr class="mb-4">

Boosted v5.2.2 has landed with new bug fixes and documentation updates including a new RTL section in our examples.

If you need more details about the changes, please refer to the [v5.2.2 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.2).

### Components

- **Modals**
  - <span class="badge bg-warning">Warning</span> Modals markups have changed to show that a modal dialog represents its own separate document/context, so most of the `.modal-title`s are now `<h1>`s associated with a `.h*`. Please reflect this modification into your websites by choosing the right header level.

- **Orange navbar**
  - Languages selection's `aria-label`s have been slightly changed in some supra bars examples for accessibility purpose; visible name must be included in the accessible name. It might be a useful modification to propagate into your websites if you have this same kind of languages selection.
  ```diff
  -        <li class="nav-item"><a class="nav-link active" href="#" aria-label="English version">EN</a></li>
  +        <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version">EN</a></li>
  ```

### Forms

- <span class="badge bg-warning">Warning</span> All forms examples have been modified to add a `.mt-2` to all submit buttons in order to always have 30px between the last form control and the button. Please reflect this modification into your websites.

### Contents

- **Tables**
  - <span class="badge bg-warning">Warning</span> Reintroduction of `.has-checkbox` from v4 to correct spacing of first column when having row selection.

### Examples

- <span class="badge bg-success">New</span> There is a new RTL section in the examples.

- **RTL**
  - <span class="badge bg-success">New</span> Cards RTL example is now available.

### CSS and Sass variables

- `@mixin button-size()` has a new interface including a new optional parameter for button letter spacing.

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-btn-letter-spacing</code></li>
      <li><code>--bs-primary-text-rgb</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$btn-letter-spacing</code></li>
      <li><code>$btn-letter-spacing-lg</code></li>
      <li><code>$btn-letter-spacing-sm</code></li>
      <li><code>$form-feedback-line-height</code></li>
    </ul>
  </details>

## v5.2.1

<hr class="mb-4">

Boosted v5.2.1 is here with fixes from our latest minor release, v5.2. These changes include bug fixes, documentation updates, and some dependency updates, but also a new Tags component and a lot of new dark variants for our components.

If you need more details about the changes, please refer to the [v5.2.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v5.2.1).

### Components

- **Back to top**
  - <span class="badge bg-danger">Breaking</span> Back to top 'Label inside' variant was removed because not compliant with Orange Design System. Even if the rendering could still work, it is recommended to only use the versions presented in the documentation.

- **Breadcrumb**
  - <span class="badge bg-success">New</span> Breadcrumb now has a dark variant.

- **Footers**
  - <span class="badge bg-warning">Warning</span> All Footers examples have been modified to use the "Terms and conditions" wording instead of "Terms & Conditions". Please reflect this modification into your websites.

- **List group**
  - <span class="badge bg-success">New</span> List group now has a dark variant.

- **Pagination**
  - <span class="badge bg-success">New</span> Pagination now has a dark variant.

- **Scrollspy**
  - <span class="badge bg-success">New</span> Scrollspy has a new `data-bs-threshold` data attribute.

- **Stepped process**
  - <span class="badge bg-success">New</span> Stepped process now has a dark variant.

- **Tags**
  - <span class="badge bg-success">New</span> Tags are now a component.

- **Toasts**
  - <span class="badge bg-warning">Warning</span> Changed the markup for Toasts with a custom content (toast message and close button). Please reflect this modification into your websites.
    <details class="mt-2">
      <summary>More info</summary>
      {{< markdown >}}
```diff
<div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
-   <div class="toast-body">
+   <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
-   <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
+   <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast"><span class="visually-hidden">Close</span></button>
  </div>
</div>
```
      {{< /markdown >}}
    </details>

### Contents

- <span class="badge bg-warning">Warning</span> Changed the rendering of `<mark>` (and so `.mark`). Depending on your usage it may worth checking the impact in your websites.

- <span class="badge bg-warning">Warning</span> Tooltips examples applied on SVGs have been updated to use `focusable="false"` and `aria-hidden="true"` because SVGs do not carry any specific information so they should not be readable by screen readers. Please reflect this modification in your websites. By the way please check all the SVGs in your websites in order to apply this same modification if needed.
  <details class="mb-3">
    <summary>More info</summary>
    {{< markdown >}}
```diff
<a href="#" class="d-inline-block" data-bs-toggle="tooltip" data-bs-title="Default tooltip" aria-label="Default tooltip">
- <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
+ <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" focusable="false" aria-hidden="true">
    <rect width="100%" height="100%" fill="#563d7c"/>
    <circle cx="50" cy="50" r="30" fill="#007bff"/>
  </svg>
</a>
```
    {{< /markdown >}}
  </details>

- The close icon SVG rendering has changed in modals, offcanvases and close buttons. Although is has no direct impact, you might want apply this same modification within your websites.

### Helpers and utilities

- <span class="badge bg-success">New</span> `.img-thumbnail` is now officially supported.

### CSS and Sass variables

- <span class="badge bg-danger">Breaking</span> `--bs-pagination-margin-start` and `--bs-pagination-focus-outline` are now deprecated.

- <span class="badge bg-warning">Warning</span> `$accordion-color` was announced a deprecated in v5.2.0 but is finally not removed.

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> CSS variables:</summary>
    <ul>
      <li><code>--bs-alert-btn-close-offset</code></li>
      <li><code>--bs-alert-dismissible-padding-right</code></li>
      <li><code>--bs-alert-heading-font-weight</code></li>
      <li><code>--bs-alert-icon-margin-y</code></li>
      <li><code>--bs-alert-icon-size</code></li>
      <li><code>--bs-alert-line-height</code></li>
      <li><code>--bs-alert-link-font-weight</code></li>
      <li><code>--bs-alert-logo-size</code></li>
      <li><code>--bs-breadcrumb-color</code></li>
      <li><code>--bs-btn-close-active-border-color</code></li>
      <li><code>--bs-btn-close-active-color</code></li>
      <li><code>--bs-btn-close-bg</code></li>
      <li><code>--bs-btn-close-border-color</code></li>
      <li><code>--bs-btn-close-border-width</code></li>
      <li><code>--bs-btn-close-color</code></li>
      <li><code>--bs-btn-close-disabled-color</code></li>
      <li><code>--bs-btn-close-hover-color</code></li>
      <li><code>--bs-btn-close-padding</code></li>
      <li><code>--bs-btn-hover-border-color</code></li>
      <li><code>--bs-dropdown-zindex</code></li>
      <li><code>--bs-highlight-color</code></li>
      <li><code>--bs-pagination-active-item-color</code></li>
      <li><code>--bs-pagination-padding-end</code></li>
      <li><code>--bs-tab-content-border-width</code></li>
      <li><code>--bs-tab-content-padding-x</code></li>
      <li><code>--bs-tab-content-padding-y</code></li>
      <li><code>--bs-nav-tabs-link-border-width</code></li>
      <li><code>--bs-nav-tabs-link-hover-bg</code></li>
      <li><code>--bs-nav-tabs-link-hover-color</code></li>
      <li><code>--bs-nav-tabs-link-padding-x</code></li>
      <li><code>--bs-navbar-font-weight</code></li>
      <li><code>--bs-navbar-toggler-icon-filter</code></li>
      <li><code>--bs-stepped-process-link-next-color</code></li>
      <li><code>--bs-toast-zindex</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$alert-heading-font-weight</code></li>
      <li><code>$alert-icon-size-sm</code></li>
      <li><code>$breadcrumb-color</code></li>
      <li><code>$breadcrumb-dark-active-color</code></li>
      <li><code>$breadcrumb-dark-bg</code></li>
      <li><code>$breadcrumb-dark-color</code></li>
      <li><code>$breadcrumb-dark-divider-color</code></li>
      <li><code>$btn-close-active-border-color</code></li>
      <li><code>$btn-close-active-color</code></li>
      <li><code>$btn-close-border-color</code></li>
      <li><code>$btn-close-border-width</code></li>
      <li><code>$btn-close-disabled-color</code></li>
      <li><code>$btn-close-hover-color</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$list-group-dark-action-active-bg</code></li>
      <li><code>$list-group-dark-action-active-color</code></li>
      <li><code>$list-group-dark-action-color</code></li>
      <li><code>$list-group-dark-action-hover-color</code></li>
      <li><code>$list-group-dark-active-bg</code></li>
      <li><code>$list-group-dark-active-border-color</code></li>
      <li><code>$list-group-dark-active-color</code></li>
      <li><code>$list-group-dark-bg</code></li>
      <li><code>$list-group-dark-border-color</code></li>
      <li><code>$list-group-dark-color</code></li>
      <li><code>$list-group-dark-disabled-bg</code></li>
      <li><code>$list-group-dark-disabled-color</code></li>
      <li><code>$mark-bg-dark</code></li>
      <li><code>$mark-color</code></li>
      <li><code>$mark-color-dark</code></li>
      <li><code>$navbar-dark-border-color</code></li>
      <li><code>$navbar-font-weight</code></li>
      <li><code>$pagination-active-item-color</code></li>
      <li><code>$pagination-dark-active-bg</code></li>
      <li><code>$pagination-dark-active-border-color</code></li>
      <li><code>$pagination-dark-active-color</code></li>
      <li><code>$pagination-dark-active-item-bg</code></li>
      <li><code>$pagination-dark-active-item-border-color</code></li>
      <li><code>$pagination-dark-active-item-color</code></li>
      <li><code>$pagination-dark-bg</code></li>
      <li><code>$pagination-dark-border-color</code></li>
      <li><code>$pagination-dark-color</code></li>
      <li><code>$pagination-dark-disabled-bg</code></li>
      <li><code>$pagination-dark-disabled-border-color</code></li>
      <li><code>$pagination-dark-disabled-color</code></li>
      <li><code>$pagination-dark-focus-bg</code></li>
      <li><code>$pagination-dark-focus-color</code></li>
      <li><code>$pagination-dark-hover-bg</code></li>
      <li><code>$pagination-dark-hover-border-color</code></li>
      <li><code>$pagination-dark-hover-color</code></li>
      <li><code>$step-item-dark-active-bg</code></li>
      <li><code>$step-item-dark-bg</code></li>
      <li><code>$step-item-dark-drop-shadow</code></li>
      <li><code>$step-item-dark-next-bg</code></li>
      <li><code>$step-link-dark-active-color</code></li>
      <li><code>$step-link-dark-color</code></li>
      <li><code>$step-link-dark-next-color</code></li>
      <li><code>$step-link-next-color</code></li>
    </ul>
  </details>

- Dark text variants handling is now explained in [Customize > CSS variables > Dark text rule]({{< docsref "/customize/css-variables#dark-text-rule" >}}).

## v5.2.0

<hr class="mb-4">

### Refreshed design

Boosted v5.2.0 features a subtle design update for a handful of components and properties across the project, **most notably through refined `border-radius` values on buttons and form controls**. Our documentation also has been updated with a new homepage and a simpler docs layout that no longer collapses sections of the sidebar.

### More CSS variables

**We've updated all our components to use CSS variables.** While Sass still underpins everything, each component has been updated to include CSS variables on the component base classes (e.g., `.btn`), allowing for more real-time customization of Bootstrap. In subsequent releases, we'll continue to expand our use of CSS variables into our layout, forms, helpers, and utilities. Read more about CSS variables in each component on their respective documentation pages.

Our CSS variable usage will be somewhat incomplete until Boosted 6. While we'd love to fully implement these across the board, they do run the risk of causing breaking changes. For example, setting `$alert-border-width: var(--bs-border-width)` in our source code breaks potential Sass in your own code if you were doing `$alert-border-width * 2` for some reason.

As such, wherever possible, we will continue to push towards more CSS variables, but please recognize our implementation may be slightly limited in v5.

### New `_maps.scss`

**Boosted v5.2.0 introduced a new Sass file with `_maps.scss`.** It pulls out several Sass maps from `_variables.scss` to fix an issue where updates to an original map were not applied to secondary maps that extend them. For example, updates to `$theme-colors` were not being applied to other theme maps that relied on `$theme-colors`, breaking key customization workflows. In short, Sass has a limitation where once a default variable or map has been _used_, it cannot be updated. _There's a similar shortcoming with CSS variables when they're used to compose other CSS variables._

This is why variable customizations in Boosted have to come after `@import "functions"`, but before `@import "variables"` and the rest of our import stack. The same applies to Sass maps—you must override the defaults before they get used. The following maps have been moved to the new `_maps.scss`:

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

Your custom Boosted CSS builds should now look something like this with a separate maps import.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### New utilities

- Expanded [`font-weight` utilities]({{< docsref "/utilities/text#font-weight-and-italics" >}}) to include `.fw-semibold` for semibold fonts.
- Expanded [`border-radius` utilities]({{< docsref "/utilities/borders#sizes" >}}) to include two new sizes, `.rounded-4` and `.rounded-5`, for more options.

### Additional changes

- **Introduced new `$enable-container-classes` option. —** Now when opting into the experimental CSS Grid layout, `.container-*` classes will still be compiled, unless this option is set to `false`. Containers also now keep their gutter values.

- **Offcanvas component now has [responsive variations]({{< docsref "/components/offcanvas#responsive" >}}).** The original `.offcanvas` class remains unchanged—it hides content across all viewports. To make it responsive, change that `.offcanvas` class to any `.offcanvas-{sm|md|lg|xl|xxl}` class.

- **Thicker table dividers are now opt-in. —** We've removed the thicker and more difficult to override border between table groups and moved it to an optional class you can apply, `.table-group-divider`. [See the table docs for an example.]({{< docsref "/content/tables#table-group-dividers" >}})

- **[Scrollspy has been rewritten](https://github.com/twbs/bootstrap/pull/33421) to use the Intersection Observer API**, which means you no longer need relative parent wrappers, deprecates `offset` config, and more. Look for your Scrollspy implementations to be more accurate and consistent in their nav highlighting.

- **Popovers and tooltips now use CSS variables.** Some CSS variables have been updated from their Sass counterparts to reduce the number of variables. As a result, three variables have been deprecated in this release: `$popover-arrow-color`, `$popover-arrow-outer-color`, and `$tooltip-arrow-color`.

- **Added new `.text-bg-{color}` helpers.** Instead of setting individual `.text-*` and `.bg-*` utilities, you can now use [the `.text-bg-*` helpers]({{< docsref "helpers/color-background" >}}) to set a `background-color` with contrasting foreground `color`.

- Added `.form-check-reverse` modifier to flip the order of labels and associated checkboxes/radios.

- Added [striped columns]({{< docsref "/content/tables#striped-columns" >}}) support to tables via the new `.table-striped-columns` class.

- <span class="badge bg-danger">Breaking</span> Changed `data-o-label` to `data-bs-label` in Back to top component.

- <span class="badge bg-danger">Breaking</span> Re-introduced footer component by tweaking a bit the classes: replaced `.o-footer-*` by `.footer-*`.

For a complete list of changes, [see the v5.2.0 project on GitHub](https://github.com/twbs/bootstrap/projects/32).

## v5.1.0

<hr class="mb-4">

- <span class="badge bg-danger">Breaking</span> Changed the behavior of `.bg-success`, `.bg-danger`, `.bg-warning` and `.bg-info`. You may prefer to use `.bg-supporting-green`, `.bg-supporting-pink`, `.bg-supporting-yellow` and `.bg-supporting-blue` instead (apart from badges). `$supporting-colors` is replaced by `$background-colors`.

- **Added experimental support for [CSS Grid layout]({{< docsref "/layout/css-grid" >}}). —** This is a work in progress, and is not yet ready for production use, but you can opt into the new feature via Sass. To enable it, disable the default grid, by setting `$enable-grid-classes: false` and enable the CSS Grid by setting `$enable-cssgrid: true`.

- **Updated navbars to support offcanvas. —** Add [offcanvas drawers in any navbar]({{< docsref "/components/navbar#offcanvas" >}}) with the responsive `.navbar-expand-*` classes and some offcanvas markup.

- **Added new [placeholder component]({{< docsref "/components/placeholders/" >}}). —** Our newest component, a way to provide temporary blocks in lieu of real content to help indicate that something is still loading in your site or app.

- **Collapse plugin now supports [horizontal collapsing]({{< docsref "/components/collapse#horizontal" >}}). —** Add `.collapse-horizontal` to your `.collapse` to collapse the `width` instead of the `height`. Avoid browser repainting by setting a `min-height` or `height`.

- **Added new stack and vertical rule helpers. —** Quickly apply multiple flexbox properties to quickly create custom layouts with [stacks]({{< docsref "/helpers/stacks/" >}}). Choose from horizontal (`.hstack`) and vertical (`.vstack`) stacks. Add vertical dividers similar to `<hr>` elements with the [new `.vr` helpers]({{< docsref "/helpers/vertical-rule/" >}}).

- **Added new global `:root` CSS variables. —** Added several new CSS variables to the `:root` level for controlling `<body>` styles. More are in the works, including across our utilities and components, but for now read up [CSS variables in the Customize section]({{< docsref "/customize/css-variables/" >}}).

- **Overhauled color and background utilities to use CSS variables, and added new [text opacity]({{< docsref "/utilities/text#opacity" >}}) and [background opacity]({{< docsref "/utilities/background#opacity" >}}) utilities. —** `.text-*` and `.bg-*` utilities are now built with CSS variables and `rgba()` color values, allowing you to easily customize any utility with new opacity utilities.

- **Added new snippet examples based to show how to customize our components. —** Pull ready to use customized components and other common design patterns with our new [Snippets examples]({{< docsref "/examples#snippets" >}}).

- **Removed unused positioning styles from popovers and tooltips** as these are handled solely by Popper. `$tooltip-margin` has been deprecated and set to `null` in the process.

Want more information? [Read the v5.1.0 blog post.](https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/)

<hr class="my-5">

{{< callout info >}}
**Hey there!** Changes to our first major release of Boosted 5, v5.0.0, are documented below. They don't reflect the additional changes shown above.
{{< /callout >}}

## Dependencies

- Dropped jQuery.
- Upgraded from Popper v1.x to Popper v2.x.
- Replaced Libsass with Dart Sass as our Sass compiler given Libsass was deprecated.
- Migrated from Jekyll to Hugo for building our documentation

## Browser support

- Dropped Internet Explorer 10 and 11
- Dropped Microsoft Edge < 16 (Legacy Edge)
- Dropped Firefox < 60
- Dropped Safari < 12
- Dropped iOS Safari < 12
- Dropped Chrome < 60

<hr class="my-5">

## Documentation changes

- Redesigned homepage, docs layout, and footer.
- Added [new Parcel guide](/docs/{{< param docs_version >}}/getting-started/parcel/).
- Added [new Customize section](/docs/{{< param docs_version >}}/customize/overview/), replacing [v4's Theming page](https://boosted.orange.com/docs/4.6/getting-started/theming/), with new details on Sass, global configuration options, color schemes, CSS variables, and more.
- Reorganized all form documentation into [new Forms section](/docs/{{< param docs_version >}}/forms/overview/), breaking apart the content into more focused pages.
- Similarly, updated [the Layout section](/docs/{{< param docs_version >}}/layout/breakpoints/), to flesh out grid content more clearly.
- Renamed "Navs" component page to "Navs & Tabs".
- Renamed "Checks" page to "Checks & radios".
- Redesigned the navbar and added a new subnav to make it easier to get around our sites and docs versions.
- Added new keyboard shortcut for the search field: <kbd>Ctrl + /</kbd>.

## Sass

- We've ditched the default Sass map merges to make it easier to remove redundant values. Keep in mind you now have to define all values in the Sass maps like `$theme-colors`. Check out how to deal with [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `$orange-2` to `$accessible-orange`.

- <span class="badge bg-danger">Breaking</span> Removed `$container-fluid-margin-widths`. Please use `$container-fluid-margin` instead.

- <span class="badge bg-danger">Breaking</span> Renamed `color-yiq()` function and related variables to `color-contrast()` as it's no longer related to YIQ color space. [See #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold` is renamed to `$min-contrast-ratio`.
  - `$yiq-text-dark` and `$yiq-text-light` are respectively renamed to `$color-contrast-dark` and `$color-contrast-light`.

- <span class="badge bg-danger">Breaking</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge bg-danger">Breaking</span> Removed print styles and `$enable-print-styles` variable. Print display classes are still around. [See #28339](https://github.com/twbs/bootstrap/pull/28339).


- <span class="badge bg-danger">Breaking</span> Dropped `color()`, `theme-color()`, and `gray()` functions in favor of variables. [See #29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge bg-danger">Breaking</span> Renamed `theme-color-level()` function to `color-level()` and now accepts any color you want instead of only `$theme-color` colors. [See #29083](https://github.com/twbs/bootstrap/pull/29083) **Watch out:** `color-level()` was later on dropped in `v5.0.0-alpha3`.

- <span class="badge bg-danger">Breaking</span> Renamed `$enable-prefers-reduced-motion-media-query` and `$enable-pointer-cursor-for-buttons` to `$enable-reduced-motion` and `$enable-button-pointers` for brevity.


- <span class="badge bg-danger">Breaking</span> Removed the `bg-gradient-variant()` mixin. Use the `.bg-gradient` class to add gradients to elements instead of the generated `.bg-gradient-*` classes.

- <span class="badge bg-danger">Breaking</span> **Removed previously deprecated mixins:**
  - `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (also dropped the associated utility class, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge bg-danger">Breaking</span> Renamed `scale-color()` function to `shift-color()` to avoid collision with Sass's own color scaling function.

- `box-shadow` mixins now allow `null` values and drop `none` from multiple arguments. [See #30394](https://github.com/twbs/bootstrap/pull/30394).

- The `border-radius()` mixin now has a default value.

## Color system

- The color system which worked with `color-level()` and `$theme-color-interval` was removed in favor of a new color system. All `lighten()` and `darken()` functions in our codebase are replaced by `tint-color()` and `shade-color()`. These functions will mix the color with either white or black instead of changing its lightness by a fixed amount. The `shift-color()` will either tint or shade a color depending on whether its weight parameter is positive or negative. [See #30622](https://github.com/twbs/bootstrap/pull/30622) for more details.

- Added new tints and shades for every color, providing nine separate colors for each base color, as new Sass variables.

- Improved color contrast. Bumped color contrast ratio from 3:1 to 4.5:1 and updated blue, green, cyan, and pink colors to ensure WCAG 2.1 AA contrast. Also changed our color contrast color from `$gray-900` to `$black`.

- To support our color system, we've added new custom `tint-color()` and `shade-color()` functions to mix our colors appropriately.

## Grid updates

- **New breakpoint!** Added new `xxl` breakpoint for `1400px` and up. No changes to all other breakpoints.

- **Improved gutters.** Gutters are now set in rems, and are narrower than v4 (`1.5rem`, or about `24px`, down from `30px`). This aligns our grid system's gutters with our spacing utilities.
  - Added new [gutter class](/docs/{{< param docs_version >}}/layout/gutters/) (`.g-*`, `.gx-*`, and `.gy-*`) to control horizontal/vertical gutters, horizontal gutters, and vertical gutters.
  - <span class="badge bg-danger">Breaking</span> Renamed `.no-gutters` to `.g-0` to match new gutter utilities.

- Columns no longer have `position: relative` applied, so you may have to add `.position-relative` to some elements to restore that behavior.

- <span class="badge bg-danger">Breaking</span> Dropped several `.order-*` classes that often went unused. We now only provide `.order-1` to `.order-5` out of the box.

- <span class="badge bg-danger">Breaking</span> Dropped the `.media` component as it can be easily replicated with utilities. [See #28265](https://github.com/twbs/bootstrap/pull/28265) and the [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}}).

- <span class="badge bg-danger">Breaking</span> `boosted-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way, our grid styles can be used in more places without interference.

- `$enable-grid-classes` no longer disables the generation of container classes anymore. [See #29146.](https://github.com/twbs/bootstrap/pull/29146)

- Updated the `make-col` mixin to default to equal columns without a specified size.

## Content, Reboot, etc

- <span class="badge bg-danger">Breaking</span> Orange Helvetica CSS file names changed from `orangeHelvetica.*.css` to `orange-helvetica.*.css`.

- **[RFS]({{< docsref "/getting-started/rfs" >}}) is now enabled by default.** Headings using the `font-size()` mixin will automatically adjust their `font-size` to scale with the viewport. _This feature was previously opt-in with v4._

- <span class="badge bg-danger">Breaking</span> Overhauled our display typography to replace our `$display-*` variables and with a `$display-font-sizes` Sass map. Also removed the individual `$display-*-weight` variables for a single `$display-font-weight` and adjusted `font-size`s.

- Added two new `.display-*` heading sizes, `.display-5` and `.display-6`.

- **Links are underlined by default** (not just on hover), unless they're part of specific components.

- <span class="badge bg-danger">Breaking</span> `.o-link-arrow` is renamed to `.link-chevron`. `.o-link-arrow.back` has been dropped.

- **Redesigned tables** to refresh their styles and rebuild them with CSS variables for more control over styling.

- <span class="badge bg-danger">Breaking</span> Nested tables do not inherit styles anymore.

- <span class="badge bg-danger">Breaking</span> `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).

- <span class="badge bg-danger">Breaking</span> The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (color name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.

- Split table cell padding variables into `-y` and `-x`.

- <span class="badge bg-danger">Breaking</span> Dropped `.pre-scrollable` class. [See #29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge bg-danger">Breaking</span> `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead. [See #29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge bg-danger">Breaking</span> Dropped `.text-justify` class. [See #29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge bg-danger">Breaking</span> ~~`<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).~~

- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.

- Added `$enable-smooth-scroll`, which applies `scroll-behavior: smooth` globally—except for users asking for reduced motion through `prefers-reduced-motion` media query. [See #31877](https://github.com/twbs/bootstrap/pull/31877)

## RTL

- Horizontal direction specific variables, utilities, and mixins have all been renamed to use logical properties like those found in flexbox layouts—e.g., `start` and `end` in lieu of `left` and `right`.

## Forms

<!-- Boosted mod: no floating labels -->

- <span class="badge bg-danger">Breaking</span> **Consolidated native and custom form elements.** Checkboxes, radios, selects, and other inputs that had native and custom classes in v4 have been consolidated. Now nearly all our form elements are entirely custom, most without the need for custom HTML.
  - `.custom-control.custom-checkbox` is now `.form-check`.
  - `.custom-control.custom-custom-radio` is now `.form-check`.
  - `.custom-control.custom-switch` is now `.form-check.form-switch`.
  - `.custom-select` is now `.form-select`.
  - `.custom-file` and `.form-file` have been replaced by custom styles on top of `.form-control`.
  - `.custom-range` is now `.form-range`.
  - Dropped native `.form-control-file` and `.form-control-range`.

- <span class="badge bg-danger">Breaking</span> Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

- The longstanding [Missing border radius on input group with validation feedback bug](https://github.com/twbs/bootstrap/issues/25110) is finally fixed by adding an additional `.has-validation` class to input groups with validation.

- <span class="badge bg-danger">Breaking</span> **Dropped form-specific layout classes for our grid system.** Use our grid and utilities instead of `.form-group`, `.form-row`, or `.form-inline`.

- <span class="badge bg-danger">Breaking</span> Form labels now require `.form-label`.

- <span class="badge bg-danger">Breaking</span> `.form-text` no longer sets `display`, allowing you to create inline or block help text as you wish just by changing the HTML element.

- Form controls no longer used fixed `height` when possible, instead deferring to `min-height` to improve customization and compatibility with other components.

- Validation icons are no longer applied to `<select>`s with `multiple`.

- Rearranged source Sass files under `scss/forms/`, including input group styles.

<hr class="my-5">

## Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable. [See #30564](https://github.com/twbs/bootstrap/pull/30564).

### Accordion

- Added [new accordion component]({{< docsref "/components/accordion" >}}).

### Alerts

- Alerts now have [examples with icons]({{< docsref "/components/alerts#icons" >}}).

- Removed custom styles for `<hr>`s in each alert since they already use `currentColor`.

### Back to top

- <span class="badge bg-danger">Breaking</span> Dropped `.o-scroll-up`, use the `.back-to-top` class instead. Please check our [Back to top page]({{< docsref "/components/back-to-top" >}}) to use it properly. Back to top component doesn't use JavaScript anymore.

### Badges

- <span class="badge bg-danger">Breaking</span> Dropped all `.badge-*` color classes for background utilities (e.g., use `.bg-primary` instead of `.badge-primary`).

- <span class="badge bg-danger">Breaking</span> Dropped `.badge-pill`—use the `.rounded-pill` utility instead.

- <span class="badge bg-danger">Breaking</span> Removed hover and focus styles for `<a>` and `<button>` elements.

- Increased default padding for badges from `.25em`/`.5em` to `.35em`/`.65em`.

### Breadcrumbs

- Simplified the default appearance of breadcrumbs by removing `padding`, `background-color`, and `border-radius`.

- Added new CSS custom property `--bs-breadcrumb-divider` for easy customization without needing to recompile CSS.

### Buttons

- <span class="badge bg-danger">Breaking</span> **[Toggle buttons](/docs/{{< param docs_version >}}/forms/checks-radios/#toggle-buttons), with checkboxes or radios, no longer require JavaScript and have new markup.** We no longer require a wrapping element, add `.btn-check` to the `<input>`, and pair it with any `.btn` classes on the `<label>`. [See #30650](https://github.com/twbs/bootstrap/pull/30650). _The docs for this has moved from our Buttons page to the new Forms section._

- <span class="badge bg-danger">Breaking</span> **Dropped `.btn-block` for utilities.** Instead of using `.btn-block` on the `.btn`, wrap your buttons with `.d-grid` and a `.gap-*` utility to space them as needed. Switch to responsive classes for even more control over them. [Read the docs for some examples.](/docs/{{< param docs_version >}}/components/buttons/#block-buttons)

- <span class="badge bg-danger">Breaking</span> Social buttons now need an extra `.btn-icon`.

- Updated our `button-variant()` and `button-outline-variant()` mixins to support additional parameters.

- Updated buttons to ensure increased contrast on hover and active states.

- Disabled buttons now have `pointer-events: none;`.

### Card

- <span class="badge bg-danger">Breaking</span> Dropped `.card-deck` in favor of our grid. Wrap your cards in column classes and add a parent `.row-cols-*` container to recreate card decks (but with more control over responsive alignment).

- [#31035](https://github.com/twbs/bootstrap/pull/31035): Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

- <span class="badge bg-danger">Breaking</span> Replaced the `.card` based accordion with a [new Accordion component]({{< docsref "/components/accordion" >}}).

### Carousel

- Added new [`.carousel-dark` variant]({{< docsref "/components/carousel#dark-variant" >}}) for dark text, controls, and indicators (great for lighter backgrounds).

- Replaced chevron icons for carousel controls with new SVGs from [Solaris]({{< docsref "/extend/icons" >}}).

### Close button

- <span class="badge bg-danger">Breaking</span> Renamed `.close` to `.btn-close` for a less generic name.

- Close buttons now use a `background-image` (embedded SVG) instead of a `&times;` in the HTML, allowing for easier customization without the need to touch your markup.

- Added new `.btn-close-white` variant that uses `filter: invert(1)` to enable higher contrast dismiss icons against darker backgrounds.

### Collapse

- Removed scroll anchoring for accordions.

### Dropdowns

- Added new `.dropdown-menu-dark` variant and associated variables for on-demand dark dropdowns.

- Added new variable for `$dropdown-padding-x`.

- Darkened the dropdown divider for improved contrast.

- <span class="badge bg-danger">Breaking</span> All the events for the dropdown are now triggered on the dropdown toggle button and then bubbled up to the parent element.

- Dropdown menus now have a `data-bs-popper="static"` attribute set when the positioning of the dropdown is static, or dropdown is in the navbar. This is added by our JavaScript and helps us use custom position styles without interfering with Popper's positioning.

- <span class="badge bg-danger">Breaking</span> Dropped `flip` option for dropdown plugin in favor of native Popper configuration. You can now disable the flipping behavior by passing an empty array for [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) option in [flip](https://popper.js.org/docs/v2/modifiers/flip/) modifier.

- Dropdown menus can now be clickable with a new `autoClose` option to handle the [auto close behavior]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). You can use this option to accept the click inside or outside the dropdown menu to make it interactive.

- Dropdowns now support `.dropdown-item`s wrapped in `<li>`s.

### Footer

- <span class="badge bg-danger">Breaking</span> Footers' HTML structure changed a lot as it works now with sub-components. They don't require `.o-footer-*` classes anymore, they need [`.footer-*` classes]({{< docsref "/components/footer" >}}).

### Jumbotron

- <span class="badge bg-danger">Breaking</span> Dropped the jumbotron component as it can be replicated with utilities.

### List group

- Added new [`.list-group-numbered` modifier]({{< docsref "/components/list-group#numbered" >}}) to list groups.

### Navs and tabs

- Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

### Navbars

- <span class="badge bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).
- <span class="badge bg-danger">Breaking</span> The `.active` class can no longer be applied to `.nav-item`s, it must be applied directly on `.nav-link`s.

### Offcanvas

- Added the new [offcanvas component]({{< docsref "/components/offcanvas" >}}).

### Orange navbar

- <span class="badge bg-danger">Breaking</span> Supra bars now require a `.bg-dark` class.

- Removed the `.global` class for the instantiation of global headers. You just need to declare your navbar with default `.navbar-*` classes.

- Changed the handling of the minimizing on scroll behavior. Initialize it on your `<header>` element by adding the `.sticky-top` class.

- Classes to handle titles in the bars have been added: use `.title` for a title on a single line, or `.two-lined` for, as its name suggests, a title on two lines.

### Pagination

- <span class="badge bg-danger">Breaking</span> Dropped `.has-label` support.

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

- Added `transition`s to pagination links.

### Popovers

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.popover-arrow` in our default popover template.

- Renamed `whiteList` option to `allowList`.

### Spinners

- Spinners now honor `prefers-reduced-motion: reduce` by slowing down animations. [See #31882](https://github.com/twbs/bootstrap/pull/31882).

- Improved spinner vertical alignment.

### Stepped process

- <span class="badge bg-danger">Breaking</span> Dropped `.o-stepbar`, use `.stepped-process` instead. All other classes using `.stepbar-*` should be replaced by `.stepped-process-*`.

- <span class="badge bg-danger">Breaking</span> Renamed respectively `$o-stepbar-margin-r`and `$o-stepbar-arrow-width` to `$step-item-margin-end` and `$step-item-arrow-width`.

- <span class="badge bg-danger">Breaking</span> Dropped `$o-stepbar-height` and lots of new variables were added.

### Toasts

- Toasts can now be [positioned]({{< docsref "/components/toasts#placement" >}}) in a `.toast-container` with the help of [positioning utilities]({{< docsref "/utilities/position" >}}).

- Changed default toast duration to 5 seconds.

- Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.

### Tooltips

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.tooltip-arrow` in our default tooltip template.

- <span class="badge bg-danger">Breaking</span> The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of popper elements.

- <span class="badge bg-danger">Breaking</span> Renamed `whiteList` option to `allowList`.

## Utilities

- <span class="badge bg-danger">Breaking</span> Renamed several utilities to use logical property names instead of directional names with the addition of RTL support:
  - Renamed `.left-*` and `.right-*` to `.start-*` and `.end-*`.
  - Renamed `.float-left` and `.float-right` to `.float-start` and `.float-end`.
  - Renamed `.border-left` and `.border-right` to `.border-start` and `.border-end`.
  - Renamed `.rounded-left` and `.rounded-right` to `.rounded-start` and `.rounded-end`.
  - Renamed `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`.
  - Renamed `.pl-*` and `.pr-*` to `.ps-*` and `.pe-*`.
  - Renamed `.text-left` and `.text-right` to `.text-start` and `.text-end`.

- <span class="badge bg-danger">Breaking</span> Disabled negative margins by default.

- Added new `.bg-body` class for quickly setting the `<body>`'s background to additional elements.

- Added new [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) for `top`, `right`, `bottom`, and `left`. Values include `0`, `50%`, and `100%` for each property.

- Added new `.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

- Added new [`border-width` utilities]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `.text-monospace` to `.font-monospace`.

- <span class="badge bg-danger">Breaking</span> Dropped `.rounded`, `.rounded-top`, `.rounded-right`, `.rounded-bottom`, `.rounded-left`, `.rounded-0`, `.rounded-sm` and `.rounded-lg` to reduce bundle size since we shouldn't use those classes in Boosted.

- <span class="badge bg-danger">Breaking</span> Removed `.text-hide` as it's an antiquated method for hiding text that shouldn't be used anymore.

- Added `.fs-*` utilities for `font-size` utilities (with RFS enabled). These use the same scale as HTML's default headings (1-6, large to small), and can be modified via Sass map.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-weight-*` utilities as `.fw-*` for brevity and consistency.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-style-*` utilities as `.fst-*` for brevity and consistency.

- Added `.d-grid` to display utilities and new `gap` utilities (`.gap`) for CSS Grid and flexbox layouts.

- <span class="badge bg-danger">Breaking</span> Removed `.rounded-sm` and `rounded-lg`, and introduced a new scale of classes, `.rounded-0` to `.rounded-3`. [See #31687](https://github.com/twbs/bootstrap/pull/31687).

- Added new `line-height` utilities: `.lh-1`, `.lh-sm`, `.lh-base` and `.lh-lg`. See [here]({{< docsref "/utilities/text#line-height" >}}).

- Moved the `.d-none` utility in our CSS to give it more weight over other display utilities.

- Extended the `.visually-hidden-focusable` helper to also work on containers, using `:focus-within`.

## Helpers

- <span class="badge bg-danger">Breaking</span> **Responsive embed helpers have been renamed to [ratio helpers]({{< docsref "/helpers/ratio" >}})** with new class names and improved behaviors, as well as a helpful CSS variable.
  - Classes have been renamed to change `by` to `x` in the aspect ratio. For example, `.ratio-16by9` is now `.ratio-16x9`.
  - We've dropped the `.embed-responsive-item` and element group selector in favor of a simpler `.ratio > *` selector. No more class is needed, and the ratio helper now works with any HTML element.
  - The `$embed-responsive-aspect-ratios` Sass map has been renamed to `$aspect-ratios` and its values have been simplified to include the class name and the percentage as the `key: value` pair.
  - CSS variables are now generated and included for each value in the Sass map. Modify the `--bs-aspect-ratio` variable on the `.ratio` to create any [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge bg-danger">Breaking</span> **"Screen reader" classes are now ["visually hidden" classes]({{< docsref "/helpers/visually-hidden" >}}).**
  - Changed the Sass file from `scss/helpers/_screenreaders.scss` to `scss/helpers/_visually-hidden.scss`
  - Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`
  - Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

- `boosted-utilities.css` now also includes our helpers. Helpers don't need to be imported in custom builds anymore.

## JavaScript

- **Dropped jQuery dependency** and rewrote plugins to be in regular JavaScript.

- <span class="badge bg-danger">Breaking</span> Data attributes for all JavaScript plugins are now namespaced to help distinguish Boosted functionality from third parties and your own code. For example, we use `data-bs-toggle` instead of `data-toggle`.

- **All plugins can now accept a CSS selector as the first argument.** You can either pass a DOM element or any valid CSS selector to create a new instance of the plugin:

  ```js
  const modal = new boosted.Modal('#myModal')
  const dropdown = new boosted.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig` can be passed as a function that accepts the Boosted's default Popper config as an argument, so that you can merge this default configuration in your way. **Applies to dropdowns, popovers, and tooltips.**


- The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of Popper elements. **Applies to dropdowns, popovers, and tooltips.**

- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.
