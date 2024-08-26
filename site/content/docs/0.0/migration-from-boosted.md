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

### Opacity

- <span class="badge text-bg-danger">Breaking</span> `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75` and `.opacity-100` have been removed from the default build. Please check the new [opacity values]({{< docsref "/utilities/opacity" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.
- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-emphasis` and `.opacity-opaque`.

### Shadows

- <span class="badge text-bg-danger">Breaking</span> Shadow operative utilities have been removed: `.shadow`, `.shadow-sm` and `.shadow-lg`. Please check the new [shadow values]({{< docsref "/utilities/shadows" >}}) directly in the documentation and adapt your websites to them. You can still have them using `$enable-bootstrap-compatibility`.

- <span class="badge text-bg-success">New</span> Shadow utilities: `.shadow-raised` and `.shadow-drag`.

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
      <li><code>$ouds-box-shadow-blur-0</code></li>
      <li><code>$ouds-box-shadow-blur-200</code></li>
      <li><code>$ouds-box-shadow-blur-300</code></li>
      <li><code>$ouds-box-shadow-blur-400</code></li>
      <li><code>$ouds-box-shadow-blur-500</code></li>
      <li><code>$ouds-box-shadow-blur-600</code></li>
      <li><code>$ouds-box-shadow-blur-700</code></li>
      <li><code>$ouds-box-shadow-blur-drag</code></li>
      <li><code>$ouds-box-shadow-blur-focus</code></li>
      <li><code>$ouds-box-shadow-blur-none</code></li>
      <li><code>$ouds-box-shadow-blur-overlay-default</code></li>
      <li><code>$ouds-box-shadow-blur-overlay-emphasis</code></li>
      <li><code>$ouds-box-shadow-blur-raised</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-default</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-emphasis</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-bottom-0</code></li>
      <li><code>$ouds-box-shadow-bottom-1-100</code></li>
      <li><code>$ouds-box-shadow-bottom-1-200</code></li>
      <li><code>$ouds-box-shadow-bottom-1-300</code></li>
      <li><code>$ouds-box-shadow-bottom-1-400</code></li>
      <li><code>$ouds-box-shadow-bottom-1-500</code></li>
      <li><code>$ouds-box-shadow-bottom-1-600</code></li>
      <li><code>$ouds-box-shadow-bottom-2-100</code></li>
      <li><code>$ouds-box-shadow-bottom-2-200</code></li>
      <li><code>$ouds-box-shadow-bottom-2-300</code></li>
      <li><code>$ouds-box-shadow-bottom-2-400</code></li>
      <li><code>$ouds-box-shadow-bottom-2-500</code></li>
      <li><code>$ouds-box-shadow-bottom-2-600</code></li>
      <li><code>$ouds-box-shadow-bottom-3-100</code></li>
      <li><code>$ouds-box-shadow-bottom-3-200</code></li>
      <li><code>$ouds-box-shadow-bottom-3-300</code></li>
      <li><code>$ouds-box-shadow-bottom-3-400</code></li>
      <li><code>$ouds-box-shadow-bottom-3-500</code></li>
      <li><code>$ouds-box-shadow-bottom-3-600</code></li>
      <li><code>$ouds-box-shadow-bottom-4-100</code></li>
      <li><code>$ouds-box-shadow-bottom-4-200</code></li>
      <li><code>$ouds-box-shadow-bottom-4-300</code></li>
      <li><code>$ouds-box-shadow-bottom-4-400</code></li>
      <li><code>$ouds-box-shadow-bottom-4-500</code></li>
      <li><code>$ouds-box-shadow-bottom-4-600</code></li>
      <li><code>$ouds-box-shadow-bottom-5-100</code></li>
      <li><code>$ouds-box-shadow-bottom-5-200</code></li>
      <li><code>$ouds-box-shadow-bottom-5-300</code></li>
      <li><code>$ouds-box-shadow-bottom-5-400</code></li>
      <li><code>$ouds-box-shadow-bottom-5-500</code></li>
      <li><code>$ouds-box-shadow-bottom-5-600</code></li>
      <li><code>$ouds-box-shadow-bottom-6-100</code></li>
      <li><code>$ouds-box-shadow-bottom-6-200</code></li>
      <li><code>$ouds-box-shadow-bottom-6-300</code></li>
      <li><code>$ouds-box-shadow-bottom-6-400</code></li>
      <li><code>$ouds-box-shadow-bottom-6-500</code></li>
      <li><code>$ouds-box-shadow-bottom-6-600</code></li>
      <li><code>$ouds-box-shadow-drag</code></li>
      <li><code>$ouds-box-shadow-focus</code></li>
      <li><code>$ouds-box-shadow-none</code></li>
      <li><code>$ouds-box-shadow-overlay-default</code></li>
      <li><code>$ouds-box-shadow-overlay-emphasis</code></li>
      <li><code>$ouds-box-shadow-raised</code></li>
      <li><code>$ouds-box-shadow-spread-0</code></li>
      <li><code>$ouds-box-shadow-spread-300</code></li>
      <li><code>$ouds-box-shadow-spread-drag</code></li>
      <li><code>$ouds-box-shadow-spread-focus</code></li>
      <li><code>$ouds-box-shadow-spread-n100</code></li>
      <li><code>$ouds-box-shadow-spread-n200</code></li>
      <li><code>$ouds-box-shadow-spread-n300</code></li>
      <li><code>$ouds-box-shadow-spread-n400</code></li>
      <li><code>$ouds-box-shadow-spread-none</code></li>
      <li><code>$ouds-box-shadow-spread-overlay-default</code></li>
      <li><code>$ouds-box-shadow-spread-overlay-emphasis</code></li>
      <li><code>$ouds-box-shadow-spread-raised</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-default</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-emphasis</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-sticky-default</code></li>
      <li><code>$ouds-box-shadow-sticky-emphasis</code></li>
      <li><code>$ouds-box-shadow-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-x-0</code></li>
      <li><code>$ouds-box-shadow-x-drag</code></li>
      <li><code>$ouds-box-shadow-x-focus</code></li>
      <li><code>$ouds-box-shadow-x-none</code></li>
      <li><code>$ouds-box-shadow-x-overlay-default</code></li>
      <li><code>$ouds-box-shadow-x-overlay-emphasis</code></li>
      <li><code>$ouds-box-shadow-x-raised</code></li>
      <li><code>$ouds-box-shadow-x-sticky-default</code></li>
      <li><code>$ouds-box-shadow-x-sticky-emphasis</code></li>
      <li><code>$ouds-box-shadow-x-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-y-0</code></li>
      <li><code>$ouds-box-shadow-y-100</code></li>
      <li><code>$ouds-box-shadow-y-200</code></li>
      <li><code>$ouds-box-shadow-y-300</code></li>
      <li><code>$ouds-box-shadow-y-400</code></li>
      <li><code>$ouds-box-shadow-y-500</code></li>
      <li><code>$ouds-box-shadow-y-600</code></li>
      <li><code>$ouds-box-shadow-y-drag</code></li>
      <li><code>$ouds-box-shadow-y-focus</code></li>
      <li><code>$ouds-box-shadow-y-none</code></li>
      <li><code>$ouds-box-shadow-y-overlay-default</code></li>
      <li><code>$ouds-box-shadow-y-overlay-emphasis</code></li>
      <li><code>$ouds-box-shadow-y-raised</code></li>
      <li><code>$ouds-box-shadow-y-sticky-default</code></li>
      <li><code>$ouds-box-shadow-y-sticky-emphasis</code></li>
      <li><code>$ouds-box-shadow-y-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-opacity-0</code></li>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-900</code></li>
      <li><code>$ouds-zindex-0</code></li>
      <li><code>$ouds-zindex-1000</code></li>
      <li><code>$ouds-zindex-1020</code></li>
      <li><code>$ouds-zindex-1030</code></li>
      <li><code>$ouds-zindex-1035</code></li>
      <li><code>$ouds-zindex-1038</code></li>
      <li><code>$ouds-zindex-1040</code></li>
      <li><code>$ouds-zindex-1045</code></li>
      <li><code>$ouds-zindex-1050</code></li>
      <li><code>$ouds-zindex-1060</code></li>
      <li><code>$ouds-zindex-1070</code></li>
      <li><code>$ouds-zindex-1080</code></li>
      <li><code>$ouds-zindex-1090</code></li>
      <li><code>$ouds-zindex-deep</code></li>
      <li><code>$ouds-zindex-back-to-top</code></li>
      <li><code>$ouds-zindex-default</code></li>
      <li><code>$ouds-zindex-dropdown</code></li>
      <li><code>$ouds-zindex-fixed</code></li>
      <li><code>$ouds-zindex-modal</code></li>
      <li><code>$ouds-zindex-modal-backdrop</code></li>
      <li><code>$ouds-zindex-n9999</code></li>
      <li><code>$ouds-zindex-offcanvas</code></li>
      <li><code>$ouds-zindex-offcanvas-backdrop</code></li>
      <li><code>$ouds-zindex-popover</code></li>
      <li><code>$ouds-zindex-spinner</code></li>
      <li><code>$ouds-zindex-sticky</code></li>
      <li><code>$ouds-zindex-toast</code></li>
      <li><code>$ouds-zindex-tooltip</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$ouds-box-shadows</code></li>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>
