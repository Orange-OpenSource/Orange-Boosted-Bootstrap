---
layout: docs
title: Migrating to recent versions
description: Track and review changes to the OUDS Web source files, documentation, and components to help you migrate from previous versions.
group: migration
aliases:
  - "/migration/"
  - "/docs/migration/"
toc: true
---

## v0.0.3

### Pre-compiled versions

From now on, OUDS Web won't embed Bootstrap elements that are not part of Orange Unified Design System. However, you can still use our Bootstrap compatibility mode by using `ouds-web-bootstrap.css` and `ouds-web-bootstrap.min.css`.

### Utilities

#### Opacity

- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-emphasis` and `.opacity-opaque`.

#### Shadows

- <span class="badge text-bg-success">New</span> Shadow utilities: `.shadow-none`, `.shadow-raised` and `.shadow-drag`.

### CSS and Sass variables

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
      <li><code>$ouds-box-shadow-blur-overlay-emphasized</code></li>
      <li><code>$ouds-box-shadow-blur-raised</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-default</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-emphasized</code></li>
      <li><code>$ouds-box-shadow-blur-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-color-drag</code></li>
      <li><code>$ouds-box-shadow-color-focus</code></li>
      <li><code>$ouds-box-shadow-color-none</code></li>
      <li><code>$ouds-box-shadow-color-overlay-default</code></li>
      <li><code>$ouds-box-shadow-color-overlay-emphasized</code></li>
      <li><code>$ouds-box-shadow-color-raised</code></li>
      <li><code>$ouds-box-shadow-color-sticky-default</code></li>
      <li><code>$ouds-box-shadow-color-sticky-emphasized</code></li>
      <li><code>$ouds-box-shadow-color-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-drag</code></li>
      <li><code>$ouds-box-shadow-focus</code></li>
      <li><code>$ouds-box-shadow-none</code></li>
      <li><code>$ouds-box-shadow-overlay-default</code></li>
      <li><code>$ouds-box-shadow-overlay-emphasized</code></li>
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
      <li><code>$ouds-box-shadow-spread-overlay-emphasized</code></li>
      <li><code>$ouds-box-shadow-spread-raised</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-default</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-emphasized</code></li>
      <li><code>$ouds-box-shadow-spread-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-sticky-default</code></li>
      <li><code>$ouds-box-shadow-sticky-emphasized</code></li>
      <li><code>$ouds-box-shadow-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-box-shadow-x-0</code></li>
      <li><code>$ouds-box-shadow-x-drag</code></li>
      <li><code>$ouds-box-shadow-x-focus</code></li>
      <li><code>$ouds-box-shadow-x-none</code></li>
      <li><code>$ouds-box-shadow-x-overlay-default</code></li>
      <li><code>$ouds-box-shadow-x-overlay-emphasized</code></li>
      <li><code>$ouds-box-shadow-x-raised</code></li>
      <li><code>$ouds-box-shadow-x-sticky-default</code></li>
      <li><code>$ouds-box-shadow-x-sticky-emphasized</code></li>
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
      <li><code>$ouds-box-shadow-y-overlay-emphasized</code></li>
      <li><code>$ouds-box-shadow-y-raised</code></li>
      <li><code>$ouds-box-shadow-y-sticky-default</code></li>
      <li><code>$ouds-box-shadow-y-sticky-emphasized</code></li>
      <li><code>$ouds-box-shadow-y-sticky-navigation-scrolled</code></li>
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
      <li><code>$ouds-box-shadows</code></li>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>

## v0.0.1

<hr class="mb-4">

OUDS Web v0.0.1 has landed, and is based and compatible with Bootstrap v5.3.3.

If you need more details about the changes, please refer to the [v0.0.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v0.0.1-ouds-web).

## v0.0.0

<hr class="mb-4">

OUDS Web v0.0.0 has landed, and is based and compatible with Bootstrap v5.3.3.
