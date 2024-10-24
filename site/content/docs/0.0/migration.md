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

## v0.0.4

### Layout

- <span class="badge text-bg-success">New</span> Responsive flexbox grid system is now available with eight default responsive tiers defined at breakpoints `2xs`, `xs`, `sm`, `md`, `xl`, `2xl`, and `3xl`.
  - Container class: `.container-fluid`
  - Limiting class: `.container-max-width`
  - Row system with `.row`
  - Column system with classes: `.col-{number}`, `.col-{breakpoint}-{number}`,  and `.offset-{breakpoint}-{number}`
  - Row columns classes: `.row-cols-{number}`

<span class="badge text-bg-success">New</span> Responsive CSS grid classes: `.g-col-{breakpoint}-{number}`.

### Helpers

#### Position

- <span class="badge text-bg-success">New</span> Responsive sticky helpers: `.sticky-{breakpoint}-top` and `.sticky-{breakpoint}-bottom` where `breakpoint` is in `|xs|sm|md|lg|xl|2xl|3xl`.

### Utilities

#### API

- <span class="badge text-bg-success">New</span> The `responsive` option is now available in the API to indicate if responsive classes should be generated.

#### Border

- <span class="badge text-bg-success">New</span> Border operative utilities: `.border`, `.border-none`, `.border-top`, `.border-top-none`, `.border-bottom`, `.border-bottom-none`, `.border-start`, `.border-start-none`, `.border-end` and `.border-end-none`.

- <span class="badge text-bg-success">New</span> Border width utilities: `.border-none`, `.border-thin`, `.border-medium`, `.border-thick`, and `.border-thicker`.

- <span class="badge text-bg-success">New</span> Border radius utilities with all sizes:
  - Default: `.rounded`, `.rounded-top`, `.rounded-bottom`, `.rounded-start` and `.rounded-end`.
  - None: `.rounded-none`, `.rounded-top-none`, `.rounded-bottom-none`, `.rounded-start-none` and `.rounded-end-none`.
  - Short: `.rounded-short`, `.rounded-top-short`, `.rounded-bottom-short`, `.rounded-start-short` and `.rounded-end-short`.
  - Medium: `.rounded-medium`, `.rounded-top-medium`, `.rounded-bottom-medium`, `.rounded-start-medium` and `.rounded-end-medium`.
  - Tall: `.rounded-tall`, `.rounded-top-tall`, `.rounded-bottom-tall`, `.rounded-start-tall` and `.rounded-end-tall`.
  - Circle: `.rounded-circle`, `.rounded-top-circle`, `.rounded-bottom-circle`, `.rounded-start-circle` and `.rounded-end-circle`.
  - Pill: `.rounded-pill`, `.rounded-top-pill`, `.rounded-bottom-pill`, `.rounded-start-pill` and `.rounded-end-pill`.

- <span class="badge text-bg-success">New</span> Border style utilities: `.border-drag`.

#### Display

- <span class="badge text-bg-success">New</span> Responsive display utilities: `.d-{breakpoint}-{value}` where `breakpoint` is in `|xs|sm|md|lg|xl|2xl|3xl`.

#### Flex

- <span class="badge text-bg-success">New</span> Responsive flex utilities where `breakpoint` is in `|xs|sm|md|lg|xl|2xl|3xl`:
  `.d-{breakpoint}-flex`, `.d-{breakpoint}-inline-flex`, `.flex-{breakpoint}-{row|column}`, `.flex-{breakpoint}-{row|column}-reverse`, `.justify-content-{breakpoint}-{start|end|center|between|around|evenly}`, `.align-items-{breakpoint}-{start|end|center|baseline|stretch}`, `.align-self-{breakpoint}-{start|end|center|baseline|stretch}`, `.flex-{breakpoint}-fill`, `flex-{breakpoint}-{grow|shrink}-{0|1}`, `.flex-{breakpoint}-{nowrap|wrap|wrap-reverse}`, `.order-{breakpoint}-{number}`, `.order-{breakpoint}-{first|last}` and `.align-content-{breakpoint}-{start|end|center|between|around|stretch}`.

#### Float

- <span class="badge text-bg-success">New</span> Responsive float utilities: `.float-{breakpoint}-{start|end|none}` where `breakpoint` is in `|xs|sm|md|lg|xl|2xl|3xl`.

#### Object fit

- <span class="badge text-bg-success">New</span> Responsive object fit utilities: `.object-fit-{breakpoint}-{contain|cover|fill|scale|none}` where `breakpoint` is in `|xs|sm|md|lg|xl|2xl|3xl`.

#### Opacity

- <span class="badge text-bg-danger">Breaking</span> Opacity utilities: `.opacity-emphasis` has been renamed to `.opacity-strong`.

#### Shadow

- <span class="badge text-bg-success">New</span> Shadows utilities:
  `shadow-none`, `shadow-raised`, `shadow-drag`, `shadow-overlay-default`, `shadow-overlay-emphasized`, `shadow-sticky-default`, `shadow-sticky-emphasized` and `shadow-sticky-navigation-scrolled`.

### Examples

- <span class="badge text-bg-success">New</span> New [Grid example]({{< docsref "/examples/grid" >}}).

- <span class="badge text-bg-success">New</span> New [Grid system example]({{< docsref "/examples/grid-system" >}}).

### CSS and Sass variables

- <span class="badge text-bg-success">New</span> A new file containing maps of token for utilities has been added. If you were using the Sass compilation, you must import this new Sass file before the variables.

  <details class="mb-3">
    <summary>See the new import stack</summary>

    ```diff
      @import "tokens/component";
    + @import "ouds-maps";
      @import "variables";
    ```
  </details>

- <span class="badge text-bg-success">New</span> `$enable-container-classes` to enable or disable the generation of CSS classes for the grid system (e.g. `.row`, `.col-md-1`, etc.).

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass variables:</summary>
    <ul>
      <li><code>$enable-container-classes</code></li>
      <li><code>$grid-columns</code></li>
      <li><code>$grid-gutter-width</code></li>
      <li><code>$grid-row-columns</code></li>
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
      <li><code>$ouds-elevation-blur-none</code></li>
      <li><code>$ouds-elevation-blur-overlay-default</code></li>
      <li><code>$ouds-elevation-blur-overlay-emphasized</code></li>
      <li><code>$ouds-elevation-blur-raised</code></li>
      <li><code>$ouds-elevation-blur-sticky-default</code></li>
      <li><code>$ouds-elevation-blur-sticky-emphasized</code></li>
      <li><code>$ouds-elevation-blur-sticky-navigation-scrolled</code></li>
      <li><code>$ouds-elevation-color-drag</code></li>
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
      <li><code>$ouds-grid-3xl-min-width</code></li>
      <li><code>$ouds-grid-column-gap-100</code></li>
      <li><code>$ouds-grid-column-gap-200</code></li>
      <li><code>$ouds-grid-column-gap-400</code></li>
      <li><code>$ouds-grid-column-gap-600</code></li>
      <li><code>$ouds-grid-column-gap-800</code></li>
      <li><code>$ouds-grid-lg-column-gap</code></li>
      <li><code>$ouds-grid-lg-margin</code></li>
      <li><code>$ouds-grid-lg-min-width</code></li>
      <li><code>$ouds-grid-margin-100</code></li>
      <li><code>$ouds-grid-margin-1100</code></li>
      <li><code>$ouds-grid-margin-1700</code></li>
      <li><code>$ouds-grid-margin-2500</code></li>
      <li><code>$ouds-grid-margin-300</code></li>
      <li><code>$ouds-grid-margin-400</code></li>
      <li><code>$ouds-grid-margin-500</code></li>
      <li><code>$ouds-grid-margin-700</code></li>
      <li><code>$ouds-size-max-width-grid-grid</code></li>
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
      <li><code>$ouds-grid-sm-column-gap</code></li>
      <li><code>$ouds-grid-sm-margin</code></li>
      <li><code>$ouds-grid-sm-min-width</code></li>
      <li><code>$ouds-grid-xl-column-gap</code></li>
      <li><code>$ouds-grid-xl-margin</code></li>
      <li><code>$ouds-grid-xl-min-width</code></li>
      <li><code>$ouds-grid-xs-column-gap</code></li>
      <li><code>$ouds-grid-xs-margin</code></li>
      <li><code>$ouds-grid-xs-min-width</code></li>
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
      <li><code>$container-fluid-margin</code></li>
      <li><code>$container-max-widths</code></li>
      <li><code>$grid-breakpoints</code></li>
      <li><code>$grid-gutter-widths</code></li>
      <li><code>$gutters</code></li>
      <li><code>$ouds-border-radiuses</code></li>
      <li><code>$ouds-border-styles</code></li>
      <li><code>$ouds-border-widths</code></li>
      <li><code>$ouds-elevations</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> Sass mixins:</summary>
    <ul>
      <li><code>breakpoint-infix()</code></li>
      <li><code>breakpoint-min()</code></li>
      <li><code>breakpoint-max()</code></li>
      <li><code>breakpoint-next()</code></li>
      <li><code>get-breakpoint-from-width()</code></li>
      <li><code>make-container()</code></li>
      <li><code>make-col()</code></li>
      <li><code>make-col-offset()</code></li>
      <li><code>make-col-ready()</code></li>
      <li><code>make-row()</code></li>
      <li><code>media-breakpoint-between()</code></li>
      <li><code>media-breakpoint-down()</code></li>
      <li><code>media-breakpoint-only()</code></li>
      <li><code>media-breakpoint-up()</code></li>
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
      <li><code>rounded</code></li>
      <li><code>rounded-bottom</code></li>
      <li><code>rounded-end</code></li>
      <li><code>rounded-start</code></li>
      <li><code>rounded-top</code></li>
      <li><code>shadow</code></li>
    </ul>
  </details>

## v0.0.3

### Pre-compiled versions

From now on, by default, OUDS Web won't embed Bootstrap elements (like helpers, utilities, variables, components variants, etc.) that do not comply with Orange Unified Design System. However, you can still use our Bootstrap compatibility mode by using `ouds-web-bootstrap.css` and `ouds-web-bootstrap.min.css`. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

### Utilities

#### Opacity

- <span class="badge text-bg-success">New</span> Opacity utilities: `.opacity-transparent`, `.opacity-weaker`, `.opacity-weak`, `.opacity-medium`, `.opacity-emphasis` and `.opacity-opaque`.

### CSS and Sass variables

- <span class="badge text-bg-success">New</span> `$enable-bootstrap-compatibility` option set to `false` by default. This option allows you to compile the Sass files with a Bootstrap compatibility mode.
  - For instance, without the Bootstrap compatibility mode, you won't have the opacity Bootstrap utilities such as `opacity-0`, `opacity-1`, `opacity-50`, etc. You will only have the OUDS Web utilities such as `opacity-transparent`, `opacity-weaker`, `opacity-weak`, etc. [Learn more about Bootstrap compatibility]({{< docsref "/extend/approach/#bootstrap-compatibility" >}}).

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
      <li><code>$ouds-opacities</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-success">New</span> keys in <code>$utilities</code> map:</summary>
    <ul>
      <li><code>opacity-ouds</code></li>
    </ul>
  </details>

- <details class="mb-2">
    <summary><span class="badge text-bg-danger">Breaking</span> keys in <code>$utilities</code> map only available when <code>$enable-bootstrap-compatibility</code> is on:</summary>
    <ul>
      <li><code>opacity</code></li>
    </ul>
  </details>

## v0.0.1

<hr class="mb-4">

OUDS Web v0.0.1 has landed, and is based and compatible with Bootstrap v5.3.3.

If you need more details about the changes, please refer to the [v0.0.1 release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/v0.0.1-ouds-web).

## v0.0.0

<hr class="mb-4">

OUDS Web v0.0.0 has landed, and is based and compatible with Bootstrap v5.3.3.
