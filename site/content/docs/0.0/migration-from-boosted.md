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

This guide provides information on how to migrate from Boosted (latest release) to OUDS Web, with Bootstrap compatibility turned off. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

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

## Layout

- <span class="badge text-bg-danger">Breaking</span> Responsive breakpoints have changed:
  - `xxl` has been renamed `2xl`.
  - `2xs` and `3xl` have been added.
  - The breakpoints values have changed. Please refer to the [breakpoints' documentation]({{< docsref "/layout/breakpoints/" >}}).
  - `.col-{breakpoint}-{number}`, `.g-col-{}
  - The default container to use is now `.container-fluid` associated to `.container-max-width` instead of `.container-xxl`. Please refer to the [fluid containers' documentation]({{< docsref "/layout/containers/#fluid-containers" >}}).
  - Default gutter inside grid have been changed to have a fully responsive behavior. It should be a transparent change for you.
  - All gutter utilities have been changed. `.g{-breakpoint}-{value}`, `.gx{-breakpoint}-{value}` and `.gy{-breakpoint}-{value}` which value is inside `0|1|2|3|4|5`. Gutter utilities values now use `none|smash|shortest|shorter|short|medium|tall|taller|tallest|spacious|huge|jumbo`. Proportional equivalence between `0` → `none`, `1` → `shortest`, `2` → `shorter`, `3` → `medium`, `4` → `tall`, `5` → `spacious`.

  All responsive classes, helpers and utilities have been changed accordingly to the new breakpoints.

- <span class="badge text-bg-info">Info</span> `xxl` breakpoint and thus all related classes (like `.container-xxl`) can still be available when <code>$enable-bootstrap-compatibility</code> is on.

## Helpers

### Position

- <span class="badge text-bg-danger">Breaking</span> Responsive sticky helpers `.sticky-xxl-{top|bottom}` have been removed and replaced by their equivalent `.sticky-2xl-{top|bottom}`.
- <span class="badge text-bg-success">New</span> Responsive sticky helpers: `.sticky-xs-{top|bottom}`, `.sticky-2xl-{top|bottom}` and `.sticky-3xl-{top|bottom}`.

## Utilities

### Border

- <span class="badge text-bg-danger">Breaking</span> Border operative utilities have been removed: `.border-0`, `.border-top-0`, `.border-bottom-0`, `.border-start-0`, and `.border-end-0`. Please check the new [border values]({{< docsref "/utilities/borders#border" >}}) directly in the documentation and adapt your websites to them.

- <span class="badge text-bg-success">New</span> Border operative utilities: `.border-none`, `.border-top-none`, `.border-bottom-none`, `.border-start-none`, and `.border-end-none`.

- <span class="badge text-bg-danger">Breaking</span> Border width utilities have been removed: `.border-0`, `.border-1`, `.border-2`, `.border-3`, `.border-4` and `.border-5`. Please check the new [border values]({{< docsref "/utilities/borders#width" >}}) directly in the documentation and adapt your websites to them.

- <span class="badge text-bg-success">New</span> Border width utilities: `.border-none`, `.border-thin`, `.border-medium`, `.border-thick`, and `.border-thicker`.

- <span class="badge text-bg-danger">Breaking</span> Border radius utilities with many sizes have been removed. Please check the new [border values]({{< docsref "/utilities/borders#radius" >}}) directly in the documentation and adapt your websites to them. Removed utilities are:
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

- <span class="badge text-bg-info">Info</span> `.border-{|top|bottom|start|end}-0`, `.border-{0|1|2|3|4|5}` and `.rounded-{|top|bottom|start|end}-{0|1|2|3|4|5}` utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

#### Display

- <span class="badge text-bg-danger">Breaking</span> `.d-xxl-{value}` responsive display utilities have been replaced by `.d-2xl-{value}` utilities. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-success">New</span> `.d-xs-{value}` and `.d-3xl-{value}` responsive display utilities have been added. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-info">Info</span> `.d-xxl-{value}` responsive display utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

#### Flex

- <span class="badge text-bg-danger">Breaking</span> `xxl` responsive flex utilities have been replaced by `2xl` utilities: `.d-xxl-flex`, `.d-xxl-inline-flex`, `.flex-xxl-{row|column}`, `.flex-xxl-{row|column}-reverse`, `.justify-content-xxl-{start|end|center|between|around|evenly}`, `.align-items-xxl-{start|end|center|baseline|stretch}`, `.align-self-xxl-{start|end|center|baseline|stretch}`, `.flex-xxl-fill`, `flex-xxl-{grow|shrink}-{0|1}`, `.flex-xxl-{nowrap|wrap|wrap-reverse}`, `.order-xxl-{number}`, `.order-xxl-{first|last}` and `.align-content-xxl-{start|end|center|between|around|stretch}` utilities have been replaced by `.d-2xl-flex`, `.d-2xl-inline-flex`, `.flex-2xl-{row|column}`, `.flex-2xl-{row|column}-reverse`, `.justify-content-2xl-{start|end|center|between|around|evenly}`, `.align-items-2xl-{start|end|center|baseline|stretch}`, `.align-self-2xl-{start|end|center|baseline|stretch}`, `.flex-2xl-fill`, `flex-2xl-{grow|shrink}-{0|1}`, `.flex-2xl-{nowrap|wrap|wrap-reverse}`, `.order-2xl-{number}`, `.order-2xl-{first|last}` and `.align-content-2xl-{start|end|center|between|around|stretch}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-success">New</span> `xs` and `3xl` responsive flex utilities have been added: `.d-xs-flex`, `.d-xs-inline-flex`, `.flex-xs-{row|column}`, `.flex-xs-{row|column}-reverse`, `.justify-content-xs-{start|end|center|between|around|evenly}`, `.align-items-xs-{start|end|center|baseline|stretch}`, `.align-self-xs-{start|end|center|baseline|stretch}`, `.flex-xs-fill`, `flex-xs-{grow|shrink}-{0|1}`, `.flex-xs-{nowrap|wrap|wrap-reverse}`, `.order-xs-{number}`, `.order-xs-{first|last}`, `.align-content-xs-{start|end|center|between|around|stretch}`, `.d-3xl-flex`, `.d-3xl-inline-flex`, `.flex-3xl-{row|column}`, `.flex-3xl-{row|column}-reverse`, `.justify-content-3xl-{start|end|center|between|around|evenly}`, `.align-items-3xl-{start|end|center|baseline|stretch}`, `.align-self-3xl-{start|end|center|baseline|stretch}`, `.flex-3xl-fill`, `flex-3xl-{grow|shrink}-{0|1}`, `.flex-3xl-{nowrap|wrap|wrap-reverse}`, `.order-3xl-{number}`, `.order-3xl-{first|last}` and `.align-content-3xl-{start|end|center|between|around|stretch}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-info">Info</span> `xxl` responsive flex utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

#### Float

- <span class="badge text-bg-danger">Breaking</span> `xxl` responsive float utilities have been replaced by `2xl` utilities: `.float-xxl-{start|end|none}` utilities have been replaced by `.float-2xl-{start|end|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-success">New</span> `xs` and `3xl` responsive float utilities have been added:  `.float-xs-{start|end|none}` and  `.float-3xl-{start|end|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-info">Info</span> `xxl` responsive float utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

#### Object fit

- <span class="badge text-bg-danger">Breaking</span> `xxl` responsive object fit utilities have been replaced by `2xl` utilities: `.object-fit-xxl-{contain|cover|fill|scale|none}` utilities have been replaced by ``.object-fit-2xl-{contain|cover|fill|scale|none}``. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-success">New</span> `xs` and `3xl` responsive object fit utilities have been added:  `.object-fit-xs-{contain|cover|fill|scale|none}` and  `.object-fit-3xl-{contain|cover|fill|scale|none}`. Please refer to the [new breakpoints' names]({{< docsref "/layout/breakpoints/#available-breakpoints" >}}).
- <span class="badge text-bg-info">Info</span> `xxl` responsive object fit utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

### Opacity

- <span class="badge text-bg-danger">Breaking</span> `.opacity-0`, `.opacity-25`, `.opacity-50`, `.opacity-75` and `.opacity-100` have been removed from the default build. Please check the new [opacity values]({{< docsref "/utilities/opacity" >}}) directly in the documentation and adapt your websites to them.
- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-strong` and `.opacity-opaque`.
- <span class="badge text-bg-info">Info</span> `.opacity-{0|25|50|75|100}` utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

### Shadow

- <span class="badge text-bg-danger">Breaking</span> `.shadow`, `.shadow-sm` and `.shadow-lg` have been removed from the default build. Please check the new [shadows values]({{< docsref "/utilities/shadows" >}}) directly in the documentation and adapt your websites to them.
- <span class="badge text-bg-success">New</span> Shadows utilities:
`shadow-none`, `shadow-raised`, `shadow-drag`, `shadow-overlay-default`, `shadow-overlay-emphasized`, `shadow-sticky-default`, `shadow-sticky-emphasized`, `shadow-sticky-navigation-scrolled` and `shadow-focus`.
- <span class="badge text-bg-info">Info</span> `.shadow-{|sm|lg}` utilities can still be available when <code>$enable-bootstrap-compatibility</code> is on.

## Examples

- <span class="badge text-bg-success">New</span> New OUDS Web [example for the usable grids]({{< docsref "/examples/grid-system" >}}).

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
  + @import "ouds-maps";
    @import "variables";
    @import "variables-dark";
    // etc
  ```
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$ouds-border-base</code></li>
      <li><code>$ouds-border-radius-0</code></li>
      <li><code>$ouds-border-radius-75</code></li>
      <li><code>$ouds-border-radius-150</code></li>
      <li><code>$ouds-border-radius-300</code></li>
      <li><code>$ouds-border-radius-9999</code></li>
      <li><code>$ouds-border-radius-default</code></li>
      <li><code>$ouds-border-radius-medium</code></li>
      <li><code>$ouds-border-radius-none</code></li>
      <li><code>$ouds-border-radius-pill</code></li>
      <li><code>$ouds-border-radius-short</code></li>
      <li><code>$ouds-border-radius-tall</code></li>
      <li><code>$ouds-border-style-dashed</code></li>
      <li><code>$ouds-border-style-default</code></li>
      <li><code>$ouds-border-style-drag</code></li>
      <li><code>$ouds-border-style-solid</code></li>
      <li><code>$ouds-border-width-0</code></li>
      <li><code>$ouds-border-width-25</code></li>
      <li><code>$ouds-border-width-50</code></li>
      <li><code>$ouds-border-width-75</code></li>
      <li><code>$ouds-border-width-100</code></li>
      <li><code>$ouds-border-width-default</code></li>
      <li><code>$ouds-border-width-medium</code></li>
      <li><code>$ouds-border-width-none</code></li>
      <li><code>$ouds-border-width-thick</code></li>
      <li><code>$ouds-border-width-thicker</code></li>
      <li><code>$ouds-border-width-thin</code></li>
      <li><code>$ouds-elevation-blur-0</code></li>
      <li><code>$ouds-elevation-blur-200</code></li>
      <li><code>$ouds-elevation-blur-300</code></li>
      <li><code>$ouds-elevation-blur-400</code></li>
      <li><code>$ouds-elevation-blur-600</code></li>
      <li><code>$ouds-elevation-blur-drag</code></li>
      <li><code>$ouds-elevation-blur-focus</code></li>
      <li><code>$ouds-elevation-blur-none</code></li>
      <li><code>$ouds-elevation-blur-overlay-default</code></li>
      <li><code>$ouds-elevation-blur-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-blur-raised</code></li>
      <li><code>$ouds-elevation-blur-sticky-default</code></li>
      <li><code>$ouds-elevation-blur-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-blur-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-color-drag</code></li>
      <li><code>$ouds-elevation-color-focus</code></li>
      <li><code>$ouds-elevation-color-none</code></li>
      <li><code>$ouds-elevation-color-overlay-default</code></li>
      <li><code>$ouds-elevation-color-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-color-raised</code></li>
      <li><code>$ouds-elevation-color-sticky-default</code></li>
      <li><code>$ouds-elevation-color-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-color-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-spread-0</code></li>
      <li><code>$ouds-elevation-spread-300</code></li>
      <li><code>$ouds-elevation-spread-drag</code></li>
      <li><code>$ouds-elevation-spread-focus</code></li>
      <li><code>$ouds-elevation-spread-n100</code></li>
      <li><code>$ouds-elevation-spread-n300</code></li>
      <li><code>$ouds-elevation-spread-none</code></li>
      <li><code>$ouds-elevation-spread-overlay-default</code></li>
      <li><code>$ouds-elevation-spread-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-spread-raised</code></li>
      <li><code>$ouds-elevation-spread-sticky-default</code></li>
      <li><code>$ouds-elevation-spread-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-spread-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-x-0</code></li>
      <li><code>$ouds-elevation-x-drag</code></li>
      <li><code>$ouds-elevation-x-focus</code></li>
      <li><code>$ouds-elevation-x-none</code></li>
      <li><code>$ouds-elevation-x-overlay-default</code></li>
      <li><code>$ouds-elevation-x-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-x-raised</code></li>
      <li><code>$ouds-elevation-x-sticky-default</code></li>
      <li><code>$ouds-elevation-x-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-x-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-y-0</code></li>
      <li><code>$ouds-elevation-y-100</code></li>
      <li><code>$ouds-elevation-y-200</code></li>
      <li><code>$ouds-elevation-y-300</code></li>
      <li><code>$ouds-elevation-y-500</code></li>
      <li><code>$ouds-elevation-y-drag</code></li>
      <li><code>$ouds-elevation-y-focus</code></li>
      <li><code>$ouds-elevation-y-none</code></li>
      <li><code>$ouds-elevation-y-overlay-default</code></li>
      <li><code>$ouds-elevation-y-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-y-raised</code></li>
      <li><code>$ouds-elevation-y-sticky-default</code></li>
      <li><code>$ouds-elevation-y-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-y-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-grid-2xl-column-gap</code></li>
      <li><code>$ouds-grid-2xl-margin</code></li>
      <li><code>$ouds-grid-2xl-min-width</code></li>
      <li><code>$ouds-grid-2xs-column-gap</code></li>
      <li><code>$ouds-grid-2xs-margin</code></li>
      <li><code>$ouds-grid-3xl-column-gap</code></li>
      <li><code>$ouds-grid-3xl-margin</code></li>
      <li><code>$ouds-grid-3xl-max-width</code></li>
      <li><code>$ouds-grid-3xl-min-width</code></li>
      <li><code>$ouds-grid-column-gap-100</code></li>
      <li><code>$ouds-grid-column-gap-200</code></li>
      <li><code>$ouds-grid-column-gap-400</code></li>
      <li><code>$ouds-grid-column-gap-600</code></li>
      <li><code>$ouds-grid-column-gap-800</code></li>
      <li><code>$ouds-grid-margin-100</code></li>
      <li><code>$ouds-grid-margin-1100</code></li>
      <li><code>$ouds-grid-margin-1700</code></li>
      <li><code>$ouds-grid-margin-2500</code></li>
      <li><code>$ouds-grid-margin-300</code></li>
      <li><code>$ouds-grid-margin-400</code></li>
      <li><code>$ouds-grid-margin-500</code></li>
      <li><code>$ouds-grid-margin-700</code></li>
      <li><code>$ouds-grid-max-width-650</code></li>
      <li><code>$ouds-grid-max-width-800</code></li>
      <li><code>$ouds-grid-md-column-gap</code></li>
      <li><code>$ouds-grid-md-margin</code></li>
      <li><code>$ouds-grid-md-min-width</code></li>
      <li><code>$ouds-grid-min-width-200</code></li>
      <li><code>$ouds-grid-min-width-300</code></li>
      <li><code>$ouds-grid-min-width-400</code></li>
      <li><code>$ouds-grid-min-width-500</code></li>
      <li><code>$ouds-grid-min-width-600</code></li>
      <li><code>$ouds-grid-min-width-700</code></li>
      <li><code>$ouds-grid-min-width-800</code></li>
      <li><code>$ouds-grid-lg-column-gap</code></li>
      <li><code>$ouds-grid-lg-margin</code></li>
      <li><code>$ouds-grid-lg-min-width</code></li>
      <li><code>$ouds-grid-sm-column-gap</code></li>
      <li><code>$ouds-grid-sm-margin</code></li>
      <li><code>$ouds-grid-sm-min-width</code></li>
      <li><code>$ouds-grid-xl-column-gap</code></li>
      <li><code>$ouds-grid-xl-margin</code></li>
      <li><code>$ouds-grid-xl-min-width</code></li>
      <li><code>$ouds-grid-xs-column-gap</code></li>
      <li><code>$ouds-grid-xs-margin</code></li>
      <li><code>$ouds-grid-xs-min-width</code></li>
      <li><code>$ouds-grid-container-max-width</code></li>
      <li><code>$ouds-opacity-0</code></li>
      <li><code>$ouds-opacity-100</code></li>
      <li><code>$ouds-opacity-300</code></li>
      <li><code>$ouds-opacity-500</code></li>
      <li><code>$ouds-opacity-700</code></li>
      <li><code>$ouds-opacity-900</code></li>
      <li><code>$ouds-opacity-medium</code></li>
      <li><code>$ouds-opacity-opaque</code></li>
      <li><code>$ouds-opacity-strong</code></li>
      <li><code>$ouds-opacity-transparent</code></li>
      <li><code>$ouds-opacity-weak</code></li>
      <li><code>$ouds-opacity-weaker</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass maps:</summary>
    <ul>
      <li><code>$grid-gutter-widths</code></li>
      <li><code>$gutters</code></li>
      <li><code>$ouds-border-radiuses</code></li>
      <li><code>$ouds-border-styles</code></li>
      <li><code>$ouds-border-widths</code></li>
      <li><code>$ouds-elevations</code></li>
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>border-bottom-ouds</code></li>
      <li><code>border-end-ouds</code></li>
      <li><code>border-ouds</code></li>
      <li><code>border-start-ouds</code></li>
      <li><code>border-style-ouds</code></li>
      <li><code>border-top-ouds</code></li>
      <li><code>border-width-ouds</code></li>
      <li><code>opacity-ouds</code></li>
      <li><code>rounded-bottom-ouds</code></li>
      <li><code>rounded-end-ouds</code></li>
      <li><code>rounded-ouds</code></li>
      <li><code>rounded-start-ouds</code></li>
      <li><code>rounded-top-ouds</code></li>
      <li><code>shadow-ouds</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> CSS variable:</summary>
    <ul>
      <li><code>--bs-container-margin-x</code></li>
    </ul>
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
      <li><code>$grid-gutter-breakpoint</code></li>
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
    <summary><span class="badge text-bg-danger">Breaking</span> CSS variables only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>--bs-border-radius</code></li>
      <li><code>--bs-border-radius-2xl</code></li>
      <li><code>--bs-border-radius-lg</code></li>
      <li><code>--bs-border-radius-pill</code></li>
      <li><code>--bs-border-radius-sm</code></li>
      <li><code>--bs-border-radius-xl</code></li>
      <li><code>--bs-border-radius-xxl</code></li>
      <li><code>--bs-box-shadow</code></li>
      <li><code>--bs-box-shadow-inset</code></li>
      <li><code>--bs-box-shadow-lg</code></li>
      <li><code>--bs-box-shadow-sm</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> keys in <code>$utilities</code> map only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>border</code></li>
      <li><code>border-bottom</code></li>
      <li><code>border-end</code></li>
      <li><code>border-opacity</code></li>
      <li><code>border-start</code></li>
      <li><code>border-top</code></li>
      <li><code>border-width</code></li>
      <li><code>opacity</code></li>
      <li><code>rounded</code></li>
      <li><code>rounded-bottom</code></li>
      <li><code>rounded-end</code></li>
      <li><code>rounded-start</code></li>
      <li><code>rounded-top</code></li>
      <li><code>shadow</code></li>
    </ul>
  </details>

- <span class="badge text-bg-warning">Warning</span> OUDS Web changes the signature of `make-row($gutter, $gutter-sm)` to have `make-row($gutter)`.
