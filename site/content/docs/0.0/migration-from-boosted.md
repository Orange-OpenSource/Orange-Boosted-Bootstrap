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

This guide provides information on how to migrate from Boosted (latest release) to OUDS Web, with Bootstrap compatibility turned off.

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

From now on, OUDS Web won't embed Bootstrap elements that are not part of Orange Unified Design System. However, you can still use our Bootstrap compatibility mode by using `ouds-web-bootstrap.css` and `ouds-web-bootstrap.min.css`.

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

### Border

- <span class="badge text-bg-danger">Breaking</span> Border operative utilities have been removed: `.border-0`, `.border-top-0`, `.border-bottom-0`, `.border-start-0`, and `.border-end-0`. Please check the new [border values]({{< docsref "/utilities/borders#border" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-success">New</span> Border operative utilities: `.border-none`, `.border-top-none`, `.border-bottom-none`, `.border-start-none`, and `.border-end-none`.

- <span class="badge text-bg-danger">Breaking</span> Border width utilities have been removed: `.border-0`, `.border-1`, `.border-2`, `.border-3`, `.border-4` and `.border-5`. Please check the new [border values]({{< docsref "/utilities/borders#width" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-success">New</span> Border width utilities: `.border-none`, `.border-thin`, `.border-thick`, `.border-thicker` and `.border-thickest`.

- <span class="badge text-bg-danger">Breaking</span> Border radius utilities with many sizes have been removed. Please check the new [border values]({{< docsref "/utilities/borders#radius" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`:
  - 0: `.rounded-0`, `.rounded-top-0`, `.rounded-bottom-0`, `.rounded-start-0` and `.rounded-end-0`.
  - 1: `.rounded-1`, `.rounded-top-1`, `.rounded-bottom-1`, `.rounded-start-1` and `.rounded-end-1`.
  - 2: `.rounded-2`, `.rounded-top-2`, `.rounded-bottom-2`, `.rounded-start-2` and `.rounded-end-2`.
  - 3: `.rounded-3`, `.rounded-top-3`, `.rounded-bottom-3`, `.rounded-start-3` and `.rounded-end-3`.
  - 4: `.rounded-4`, `.rounded-top-4`, `.rounded-bottom-4`, `.rounded-start-4` and `.rounded-end-4`.
  - 5: `.rounded-5`, `.rounded-top-5`, `.rounded-bottom-5`, `.rounded-start-5` and `.rounded-end-5`.

- <span class="badge text-bg-success">New</span> Border radius utilities with all sizes:
  - None: `.rounded-none`, `.rounded-top-none`, `.rounded-bottom-none`, `.rounded-start-none` and `.rounded-end-none`.
  - Short: `.rounded-short`, `.rounded-top-short`, `.rounded-bottom-short`, `.rounded-start-short` and `.rounded-end-short`.
  - Medium: `.rounded-medium`, `.rounded-top-medium`, `.rounded-bottom-medium`, `.rounded-start-medium` and `.rounded-end-medium`.
  - Tall: `.rounded-tall`, `.rounded-top-tall`, `.rounded-bottom-tall`, `.rounded-start-tall` and `.rounded-end-tall`.

- <span class="badge text-bg-success">New</span> Border style utilities: `.border-drag`.

### Opacity

- <span class="badge text-bg-danger">Breaking</span> `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75` and `.opacity-100` have been removed from the default build. Please check the new [opacity values]({{< docsref "/utilities/opacity" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-strong` and `.opacity-opaque`.

## CSS and Sass variables

- <span class="badge text-bg-success">New</span> `$enable-bootstrap-compatibility` option set to `false` by default. This option allows you to compile the Sass files with a Bootstrap compatibility mode.
  - For instance, without the Bootstrap compatibility mode, you won't have the opacity Bootstrap utilities such as `opacity-0`, `opacity-1`, `opacity-50`, etc. You will only have the semantic OUDS Web utilities such as `opacity-transparent`, `opacity-weaker`, `opacity-weak`, etc.

- <span class="badge text-bg-success">New</span> OUDS Web fully implements the design tokens. If you were using the Sass compilation, you must import the new Sass files before the variables.

  <details class="mb-3">
  <summary>See the new import stack</summary>

  ```diff
    @import "functions";
  + @import "tokens/raw";
  + @import "tokens/semantic";
  + @import "tokens/component";
    @import "variables";
    @import "variables-dark";
    // etc
  ```
  </details>

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
      <li><code>$ouds-border-base</code></li>
      <li><code>$ouds-border-interactive-primary-focus</code></li>
      <li><code>$ouds-border-radius-0</code></li>
      <li><code>$ouds-border-radius-300</code></li>
      <li><code>$ouds-border-radius-75</code></li>
      <li><code>$ouds-border-style-dashed</code></li>
      <li><code>$ouds-border-style-default</code></li>
      <li><code>$ouds-border-style-solid</code></li>
      <li><code>$ouds-border-width-0</code></li>
      <li><code>$ouds-border-width-100</code></li>
      <li><code>$ouds-border-width-25</code></li>
      <li><code>$ouds-border-width-50</code></li>
      <li><code>$ouds-border-width-75</code></li>
      <li><code>$ouds-border-width-default</code></li>
      <li><code>$ouds-opacity-0</code></li>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-900</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$ouds-border-radiuses</code></li>
      <li><code>$ouds-border-styles</code></li>
      <li><code>$ouds-border-widths</code></li>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>
