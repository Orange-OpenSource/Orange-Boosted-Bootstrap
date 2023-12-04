---
layout: docs
title: Color theme
description: Boosted is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.
group: customize
aliases:
  - "/docs/customize/color/"
  - "/docs/5.3/about/customize/color/"
  - "/docs/customize/color-theme/"
toc: true
---

<!--
TODO: add an introduction paragraph talking about the color palette + a link to the color palette page.
-->

## Theming

We use a subset of [the full color palette]({{< docsref "/customize/color-palette" >}}) to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Boosted's `scss/_variables.scss` file.

This smaller color palette is used to generate our components variants and our color-related utilities and helpers.

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 fw-bold text-bg-{{ .name }}">{{ .name | title }}</div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

All these colors are available as a Sass map, `$theme-colors`.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to modify these colors.

However, other colors are needed to create an interface. The following sections explain which colors are used for which purpose in a light and dark mode context.

{{< callout info >}}
The corresponding CSS variables displayed in these sections are used within the framework to create our components and utilities. But they are rarely used and to be used directly in a project. We recommend using the [usable variables](#usable-variables) instead that are more specific.
{{< /callout >}}

### Core

The core colors of orange design. These colors should always dominate other colors inside a page. They are used to highlight elements, figures, texts or actions.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure-svg d-flex">
    <svg class="ratio ratio-1x1 w-50" viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet" {{ if eq $color.name "White" }} style="border: 1px solid var(--bs-border-color-translucent)" {{ end }}>
      <rect fill="var({{ $color.variable }})" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
      <rect fill="var({{ $color.variable }})" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
    </svg>
    <div class="d-flex flex-column justify-content-around w-50 ps-2">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all text-body">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all text-body">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{- end -}}
  <div class="double-figure-svg d-none d-md-flex d-lg-none"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Functional

The functional colors of orange design. These colors are not meant to be used as backgrounds or colors. They are associated to specific established meanings (respectively success, info or discovery, warning or alert, critical or error). They should be associated with a meaningful icon.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Functional colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="var(--bs-{{ $color.level }})" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
        <rect fill="var(--bs-{{ $color.level }})" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
      </svg>
      <figcaption>
        <b>{{- $color.level | title -}}</b>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 p-2 mb-4">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all text-body">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all text-body">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{ end -}}
  <div class="double-figure d-none d-lg-flex"></div>
  <div class="double-figure d-none d-lg-flex"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Grays

The functional grays of orange design. These colors are used as backgrounds, colors or borders to outline some elements (hover state, disabled state, supporting texts, dividers, low highlights). They should not dominate the page.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Grays" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure-svg d-flex">
    <svg class="ratio ratio-1x1 w-50" viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
      <rect fill="{{ if eq $color.name 800 }}{{ $color.hex }}{{ else }}var({{ $color.variable }}){{ end }}" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
      <rect fill="{{ if eq $color.name 800 }}{{ $color.darkHex }}{{ else }}var({{ $color.variable }}){{ end }}" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
    </svg>
    <div class="d-flex flex-column justify-content-around w-50 p-2 pe-none">
      <p class="mb-0" data-bs-theme="light"><code class="pe-auto user-select-all text-body">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="pe-auto user-select-all text-body">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{ end -}}
  <div class="double-figure-svg d-none d-md-flex"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Supporting

The supporting colors of orange design. These colors are meant for backgrounds, data display or illustrations. They should not be used alone or dominate the page.

<!-- TODO: create new CSS variables for all these use cases -->

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Supporting colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="Supporting {{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="Supporting {{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" x="0" y="0" width="100" height="100"/>
      </svg>
      <figcaption>
        <b>Supporting {{ $color.name | title -}}</b>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 p-2 mb-4">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all text-body">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all text-body">{{ $color.hex }}</code></p>
    </div>
  </div>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## CSS

### Variables

#### Theming

{{< added-in "5.3.0" >}}

The following CSS variables are used to create our [usable variables](#usable-variables). They are not meant to be used directly in a project.

Colors ending in `-rgb` provide the `red, green, blue` values for use in `rgb()` and `rgba()` color modes. For example, `rgba(var(--bs-secondary-bg-rgb), .5)`.

<div class="table-responsive">
  <table class="table table-swatches">
    <thead>
      <tr>
        <th>Description</th>
        <th style="width: 60px;">Light value</th>
        <th style="width: 60px;">Dark value</th>
        <th>Variables</th>
      </tr>
    </thead>
    <tbody>
      {{< themeColors.inline >}}
      {{- range index $.Site.Data "theme-colors" }}
      <tr>
        <td>
          {{.description}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-{{.name}});" data-bs-theme="light" title="{{.hex}}"><p class="visually-hidden">{{.hex}}</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-{{.name}});" data-bs-theme="dark" title="{{.dark_hex}}"><p class="visually-hidden">{{.dark_hex}}</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{.name}}</code>" data-bs-html="true"><code>--bs-{{.name}}</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{.name}}-rgb</code>" data-bs-html="true"><code>--bs-{{.name}}-rgb</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-bg-subtle" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{.name}}-bg-subtle</code>" data-bs-html="true"><code>--bs-{{.name}}-bg-subtle</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-border-subtle" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{.name}}-border-subtle</code>" data-bs-html="true"><code>--bs-{{.name}}-border-subtle</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-text-emphasis" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{.name}}-text-emphasis</code>" data-bs-html="true"><code>--bs-{{.name}}-text-emphasis</code></button>
          </div>
        </td>
      </tr>
      {{ end -}}
      {{< /themeColors.inline >}}
    </tbody>
  </table>
</div>

<!--
#### Save

{{< callout warning >}}
This part explains how we built our large set of [dynamic usable variables](#usable-variables). They aren't the variables you should be using inside your project.
{{< /callout >}}

{{< callout warning >}}
Following parts might expose some **hexadecimal codes**. They aren't meant to be used. They are only informational. **Prefer using the associated variables.**
{{< /callout >}}

#### Light vs Dark
-->

<!-- TODO: Should we place them inside :root, [data-bs-theme="light"] and [data-bs-theme="dark"] ? -->
<!--TODO: the following shouldn't be used directly (or rarely):

// Functional grays (used in all components) (function: gray, neutral)
#eee      #333        -bs-secondary-bg               surface.lowest // surface.hover // surface.disabled

#ddd      #666        -bs-active-bg                  surface.highlight
#ccc      #666        -bs-disabled-color             accent.neutral // accent.disabled
#666      #999        -bs-placeholder-color          accent.secondary
#333      #333        Variable to introduce?          surface.low ??? Used in Boosted? Could be -bs-light for now?
#000      #000        Variable to introduce?          inverted.background ??? Used in Boosted? Could be -bs-dark for now?

// Weird use case
#000      #ff7900     -bs-hover-color                 Doesn't exist but should be in Figma

// Shouldn't appear?
#333      #eee        -bs-body-color-subtle           <>
#333      #666        -bs-gray-tweak                  Does not exist in Figma, linked to a filter, shouldn't be displayed in the documentation
#000      #141414     -bs-black-tweak                 Does not exist in Figma, linked to a filter, shouldn't be displayed in the documentation
-->

<!--
Ideas:
- We add variables with different names for this level like: `-bs-theme-{function}-{number}`, `-bs-global-*`
- The variables with names we don't like, renaming based on the design tokens on design side?
- Giving very long and not understandable names (abstract) to not give the desire to use them?
-->

<!--
TODO: think to update palette.yml with variable names!!
-->

<!--#### Concepts de base-->

<!-- TODO: Set up inside :root, [data-bs-theme] ? -->
<!-- TODO: Do we need to explain to people how to build components from all this ? -->
<!-- TODO: Bootstrap array (probably - to check) -->

<!--
// Reusable to create custom components. Need to explain how it works?
// Border base bricks
-bs-border-color: #000;                    Should be -bs-border-primary/secondary ? or -bs-border-high ? Bootstrap side anyway
-bs-border-translucent: #ccc               Should be -bs-border-secondary/tertiary ? or -bs-border-medium/low ? Bootstrap side anyway
-->

#### Test

<div class="table-responsive">
  <table class="table table-swatches">
    <thead>
      <tr>
        <th>Description</th>
        <th></th>
        <th style="width: 60px;">Light value</th>
        <th style="width: 60px;">Dark value</th>
        <th>Variables</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Body** - Default background and foreground (color), including components. {{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Background.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-body-bg);" data-bs-theme="light" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-body-bg);" data-bs-theme="dark" title="#141414"><p class="visually-hidden">#141414</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-body-bg" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-body-bg</code>" data-bs-html="true"><code>--bs-body-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-body-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-body-bg-rgb</code>" data-bs-html="true"><code>--bs-body-bg-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Foreground.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-body-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-body-color);" data-bs-theme="dark" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-body-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-body-color</code>" data-bs-html="true"><code>--bs-body-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-body-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-body-color-rgb</code>" data-bs-html="true"><code>--bs-body-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Secondary** - <span class="text-bg-warning">Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.</span>{{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Background.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-secondary-bg);" data-bs-theme="light" title="#eee"><p class="visually-hidden">#eee</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-secondary-bg);" data-bs-theme="dark" title="#333"><p class="visually-hidden">#333</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-secondary-bg" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-secondary-bg</code>" data-bs-html="true"><code>--bs-secondary-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-secondary-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-secondary-bg-rgb</code>" data-bs-html="true"><code>--bs-secondary-bg-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Foreground.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-secondary-color);" data-bs-theme="light" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-secondary-color);" data-bs-theme="dark" title="#999"><p class="visually-hidden">#999</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-secondary-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-secondary-color</code>" data-bs-html="true"><code>--bs-secondary-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-secondary-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-secondary-color-rgb</code>" data-bs-html="true"><code>--bs-secondary-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Tertiary** - <span class="text-bg-warning">Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.</span>{{< /markdown >}}
          <div class="alert alert-warning mt-2" role="alert">
            <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
            <p>Change foreground light color!</p>
          </div>
        </td>
        <td>
          {{< markdown >}}Background.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-tertiary-bg);" data-bs-theme="light" title="#fafafa"><p class="visually-hidden">#fafafa</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-tertiary-bg);" data-bs-theme="dark" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-bg" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-tertiary-bg</code>" data-bs-html="true"><code>--bs-tertiary-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-tertiary-bg-rgb</code>" data-bs-html="true"><code>--bs-tertiary-bg-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Foreground.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-tertiary-color);" data-bs-theme="light" title="#7f7f7f"><p class="visually-hidden">#7f7f7f</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-tertiary-color);" data-bs-theme="dark" title="#999"><p class="visually-hidden">#999</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-tertiary-color</code>" data-bs-html="true"><code>--bs-tertiary-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-tertiary-color-rgb</code>" data-bs-html="true"><code>--bs-tertiary-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{< markdown >}}**Emphasis** - For higher contrast text. Not applicable for backgrounds.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-emphasis-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-emphasis-color);" data-bs-theme="dark" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-emphasis-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-emphasis-color</code>" data-bs-html="true"><code>--bs-emphasis-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-emphasis-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-emphasis-color-rgb</code>" data-bs-html="true"><code>--bs-emphasis-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Border** - <span class="text-bg-warning">For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an rgba() value.</span>{{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Default.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color);" data-bs-theme="dark" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-border-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-border-color</code>" data-bs-html="true"><code>--bs-border-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-border-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-border-color-rgb</code>" data-bs-html="true"><code>--bs-border-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Translucent.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color-translucent);" data-bs-theme="light" title="#ccc"><p class="visually-hidden">#ccc</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color-translucent);" data-bs-theme="dark" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-border-color-translucent" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-border-color-translucent</code>" data-bs-html="true"><code>--bs-border-color-translucent</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="alert alert-warning" role="alert">
            <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
            <p>Can't we get rid of --bs-hover-color?<br>Only used for local navigation links and nav tabs.</p>
          </div>
          {{< markdown >}}**Hover** - <span class="text-bg-warning">TODO</span>{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-hover-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-hover-color);" data-bs-theme="dark" title="#ff7900"><p class="visually-hidden">#ff7900</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-hover-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-hover-color</code>" data-bs-html="true"><code>--bs-hover-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Highlight** - <span class="text-bg-warning">TODO</span>{{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Background.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-highlight-bg);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-highlight-bg);" data-bs-theme="dark" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-highlight-bg" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-highlight-bg</code>" data-bs-html="true"><code>--bs-highlight-bg</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Foreground.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-highlight-color);" data-bs-theme="light" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-highlight-color);" data-bs-theme="dark" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-highlight-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-highlight-color</code>" data-bs-html="true"><code>--bs-highlight-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Focus** - <span class="text-bg-warning">TODO</span>{{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Outer.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-focus-visible-outer-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-focus-visible-outer-color);" data-bs-theme="dark" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-focus-visible-outer-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-focus-visible-outer-color</code>" data-bs-html="true"><code>--bs-focus-visible-outer-color</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Inner.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-focus-visible-inner-color);" data-bs-theme="light" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-focus-visible-inner-color);" data-bs-theme="dark" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-focus-visible-inner-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-focus-visible-inner-color</code>" data-bs-html="true"><code>--bs-focus-visible-inner-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Link** - <span class="text-bg-warning">TODO</span>{{< /markdown >}}
        </td>
        <td>
          {{< markdown >}}Default.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-link-color);" data-bs-theme="light" title="#000"><p class="visually-hidden">#000</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-link-color);" data-bs-theme="dark" title="#fff"><p class="visually-hidden">#fff</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-link-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-link-color</code>" data-bs-html="true"><code>--bs-link-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-link-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-link-color-rgb</code>" data-bs-html="true"><code>--bs-link-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Hover.{{< /markdown >}}
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-link-hover-color);" data-bs-theme="light" title="#f16e00"><p class="visually-hidden">#f16e00</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-link-hover-color);" data-bs-theme="dark" title="#ff7900"><p class="visually-hidden">#ff7900</p></div>
          </div>
        </td>
        <td class="border-top-1">
          <div>
            <button class="color-copy" data-clipboard-text="--bs-link-hover-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-link-hover-color</code>" data-bs-html="true"><code>--bs-link-hover-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-link-hover-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-link-hover-color-rgb</code>" data-bs-html="true"><code>--bs-link-hover-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td colspan="2">
          {{< markdown >}}**Code** - <span class="text-bg-warning">TODO</span>{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-code-color);" data-bs-theme="light" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-code-color);" data-bs-theme="dark" title="#a3a3a3"><p class="visually-hidden">#a3a3a3</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-code-color" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-code-color</code>" data-bs-html="true"><code>--bs-code-color</code></button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<!--
TODO: IMO this section shouldn't appear here because it's rather related to components. These CSS variables shouldn't be in __root.scss_ but in specific files like it's suggested in https://github.com/twbs/bootstrap/pull/39295.
-->

### Sass variables

#### Orange variables

{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}

{{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}

#### Bootstrap variables

<!--
TODO: explain that this is only the most important part, and that the rest exists somewhere else but is not documented here
TODO: add grays?
-->

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

## Generating utilities

{{< added-in "5.1.0" >}}

Boosted doesn't include `color` and `background-color` utilities for every color variable, but you can generate these yourself with our [utility API]({{< docsref "/utilities/api" >}}) and our extended Sass maps added in v5.1.0.

1. To start, make sure you've imported our functions, variables, mixins, and utilities.
2. Use our `map-merge-multiple()` function to quickly merge multiple Sass maps together in a new map.
3. Merge this new combined map to extend any utility with a `{color}-{level}` class name.

Here's an example that generates text color utilities (e.g., `.text-purple-500`) using the above steps.

```scss
@import "boosted/scss/functions";
@import "boosted/scss/variables";
@import "boosted/scss/variables-dark";
@import "boosted/scss/maps";
@import "boosted/scss/mixins";
@import "boosted/scss/utilities";

$all-colors: map-merge-multiple($blues, $indigos, $purples, $pinks, $reds, $oranges, $yellows, $greens, $teals, $cyans);

$utilities: map-merge(
  $utilities,
  (
    "color": map-merge(
      map-get($utilities, "color"),
      (
        values: map-merge(
          map-get(map-get($utilities, "color"), "values"),
          (
            $all-colors
          ),
        ),
      ),
    ),
  )
);

@import "boosted/scss/utilities/api";
```

This will generate new `.text-{color}-{level}` utilities for every color and level. You can do the same for any other utility and property as well.
