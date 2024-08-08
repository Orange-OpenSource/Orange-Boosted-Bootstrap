---
layout: docs
title: Migrating from Boosted
description: Track and review changes to the OUDS Web source files, documentation, and components to help you migrate from Boosted to OUDS Web.
group: migration
aliases:
  - "/migration-from-boosted/"
  - "/docs/migration-from-boosted/"
toc: true
---

This guide provides information on how to migrate from Boosted (latest release) to OUDS Web.

Let's start with the most obvious change you'll notice: the name. **Boosted is now OUDS Web.**

- The NPM package is now `@ouds/web`.
- The CSS and JS files have been renamed:
  - `boosted-grid.css` → `ouds-web-grid.css`
  - `boosted-grid.min.css` → `ouds-web-grid.min.css`
  - `boosted-reboot.css` → `ouds-web-reboot.css`
  - `boosted-reboot.min.css` → `ouds-web-reboot.min.css`
  - `boosted-utilities.css` → `ouds-web-utilities.css`
  - `boosted-utilities.min.css` → `ouds-web-utilities.min.css`
  - `boosted.css` → `ouds-web.css`
  - `boosted.min.css` → `ouds-web.min.css`
  - `boosted.bundle.js` → `ouds-web.bundle.js`
  - `boosted.bundle.min.js` → `ouds-web.bundle.min.js`
  - `boosted.esm.js` → `ouds-web.esm.js`
  - `boosted.esm.min.js` → `ouds-web.esm.min.js`
  - `boosted.js` → `ouds-web.js`
  - `boosted.min.js` → `ouds-web.min.js`

## Fonts

OUDS Web doesn't use the Helvetica Neue font. Instead, it uses the system font stack. This means that the font will be different depending on the operating system and browser being used.

Technically, it means that you can get rid of the following things:
- Helvetica Neue woff2 files: `fonts/HelvNeue55_W1G.woff2`, `fonts/HelvNeue75_W1G.woff2`, `fonts/HelveticaNeueW20-55Roman.woff2`, and `fonts/HelveticaNeueW20-75Bold.woff2`.
- `orange-helvetica.*.css` file (default, RTL, or minified version).
- If you were customizing your Sass compilation, you can remove the `@import "orange-helvetica";` line from your Sass files if it was there.

## Components

### Close button

- <span class="badge text-bg-warning">Warning</span> `.btn-close-white` class has been removed as it was deprecated in Boosted v5.3.3.

## Forms

### Checks & radios

- <span class="badge text-bg-warning">Warning</span> `form-star-rating()` mixin has been removed as it was deprecated in Boosted v5.3.2.

## Utilities

### Opacity

- <span class="badge text-bg-danger">Breaking</span> `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75` and `.opacity-100` have been removed from the default build. Please check the new [opacity values]({{< docsref "/utilities/opacity" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-emphasis` and `.opacity-opaque`.

## CSS and Sass variables

- <span class="badge text-bg-success">New</span> `$enable-bootstrap-compatibility` option set to `false` by default. It allows you to have the Bootstrap utilities (using `*-0, *-1, *-50, ...` in addition to the semantic names like `transparent, weak, weaker, ...`).

- <details class="mb-2">
    <summary><span class="badge text-bg-warning">Warning</span> Dropped deprecated Sass variables:</summary>
    <ul>
      <li><code>$boosted-prefix</code></li>
      <li><code>$boosted-variable-prefix</code></li>
      <li><code>$btn-close-white-active-border-color</code></li>
      <li><code>$btn-close-white-active-color</code></li>
      <li><code>$btn-close-white-bg</code></li>
      <li><code>$btn-close-white-border-color</code></li>
      <li><code>$btn-close-white-color</code></li>
      <li><code>$btn-close-white-disabled-color</code></li>
      <li><code>$btn-close-white-hover-color</code></li>
      <li><code>$footer-nav-link-font-weight</code></li>
      <li><code>$form-star-focus-box-shadow</code></li>
      <li><code>$form-star-focus-color</code></li>
      <li><code>$form-star-focus-color-dark</code></li>
      <li><code>$form-star-focus-outline</code></li>
      <li><code>$form-star-focus-outline-dark</code></li>
      <li><code>$orange-filter</code></li>
      <li><code>$outline-offset</code></li>
      <li><code>$outline-width</code></li>
      <li><code>$step-item-padding-end</code></li>
      <li><code>$title-bar-border-color-dark</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-warning">Warning</span> Dropped deprecated CSS variables:</summary>
    <ul>
      <li><code>--bs-btn-close-active-border-color</code></li>
      <li><code>--bs-btn-close-active-color</code></li>
      <li><code>--bs-btn-close-bg</code></li>
      <li><code>--bs-btn-close-border-color</code></li>
      <li><code>--bs-btn-close-color</code></li>
      <li><code>--bs-btn-close-disabled-color</code></li>
      <li><code>--bs-btn-close-hover-color</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$ouds-opacity-0</code></li>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-200</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-400</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-600</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-800</code></li>
      <li><code>$ouds-opacity-900</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>
