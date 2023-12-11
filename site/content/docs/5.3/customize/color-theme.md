---
layout: docs
title: Color theme
description: Boosted is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.
group: customize
aliases:
  - "/docs/customize/color/"
  - "/docs/5.3/customize/color/"
  - "/docs/customize/color-theme/"
toc: true
---

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
The following color sections represent the only colors you should have inside an Orange interface either in contextual light or dark theme. The following bicolor representation shows the rendering of the same usage on light or dark theme.

The corresponding values displayed in these sections are used within the framework to create our components and utilities. But they are rarely used and to be used directly in a project. We recommend using the [usable variables](#usable-variables) instead that are more specific.
{{< /callout >}}

### Core

The Boosted core colors should always dominate other colors inside a page. They are used to highlight elements, figures, texts or actions.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure-svg d-flex">
    <svg class="ratio ratio-1x1 w-50" viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet" {{ if eq $color.name "White" }} style="border: 1px solid var(--bs-border-color-subtle)" {{ end }}>
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

The Boosted functional colors are associated to specific established meanings (respectively success, info or discovery, warning or alert, critical or error) and should be used in combination with a meaningful icon.

Please note that the functional colors are not meant to be used as backgrounds or colors.

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

The Boosted grays are used as backgrounds, colors or borders to highlight some elements or actions (hover state, disabled state, supporting texts, dividers, low highlights). They should not dominate the page.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Grays" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure-svg d-flex">
    <svg class="ratio ratio-1x1 w-50" viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
      <rect fill="var({{ $color.variable }})" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
      <rect fill="var({{ $color.variable }})" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
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

The Boosted supporting colors are meant for backgrounds, data display or illustrations. As you may have noticed, they don't change their color depending on the theme. They should not dominate the page.

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

{{< added-in "5.3.0" >}}

Colors ending in `-rgb` provide the `red, green, blue` values for use in `rgb()` and `rgba()` color modes. For example, `rgba(var(--bs-secondary-rgb), .5)`.

#### Theming

The following CSS variables are the custom properties built from [our theming Sass map](#theming) and are used to create our [usable variables](#usable-variables).

Please note that only the functional colors are meant to be used directly in a project.

<div class="table-responsive mb-4">
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
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Copy to clipboard"><code>--bs-{{.name}}</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-rgb" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Copy to clipboard"><code>--bs-{{.name}}-rgb</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-bg-subtle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Copy to clipboard"><code>--bs-{{.name}}-bg-subtle</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-border-subtle" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Copy to clipboard"><code>--bs-{{.name}}-border-subtle</code></button>
            <button class="color-copy" data-clipboard-text="--bs-{{.name}}-text-emphasis" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Copy to clipboard"><code>--bs-{{.name}}-text-emphasis</code></button>
          </div>
        </td>
      </tr>
      {{ end -}}
      {{< /themeColors.inline >}}
    </tbody>
  </table>
</div>

#### Usable variables

Some more contextual CSS variables are provided to create high-level semantic variables for your project that are linked to reusable basic concepts such as disabled, hover, focus, active, etc.

**They are meant to be used directly in a project** and will ease its maintenance, especially after a Boosted update.

<div class="table-responsive mb-4">
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
          {{< markdown >}}**Body** - Default background and foreground colors, including components. {{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-body-bg" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-body-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-body-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-body-bg-rgb</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-body-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-body-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-body-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-body-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Body secondary** - Use the `color` option for less accentuated text (placeholder, helper text, code). Use the `bg` option to low emphasis a content or display a specific component state (hover, form disabled).{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-secondary-bg" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-secondary-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-secondary-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-secondary-bg-rgb</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-secondary-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-secondary-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-secondary-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-secondary-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Body tertiary** - Use the tertiary `color` and `bg` options to have a body secondary less-emphasized rendering.{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-tertiary-bg" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-tertiary-bg</code></button>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-bg-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-tertiary-bg-rgb</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-tertiary-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-tertiary-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-tertiary-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-tertiary-color-rgb</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-emphasis-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-emphasis-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-emphasis-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-emphasis-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{< markdown >}}**Disabled** - For disabled state.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-disabled-color);" data-bs-theme="light" title="#ccc"><p class="visually-hidden">#ccc</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-disabled-color);" data-bs-theme="dark" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-disabled-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-disabled-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Border** - Use the default border for clickable component borders and the subtle variant for everything else.{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-border-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-border-color</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          {{< markdown >}}Subtle.{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color-subtle);" data-bs-theme="light" title="#ccc"><p class="visually-hidden">#ccc</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-border-color-subtle);" data-bs-theme="dark" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-border-color-subtle" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-border-color-subtle</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Highlight** - <span class="text-bg-warning">For `<mark>` text. Also used to highlight some components to get both foreground and background.</span>{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-highlight-bg" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-highlight-bg</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-highlight-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-highlight-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Focus** - <span class="text-bg-warning">Use the `outer` version for the focus outline. Use the `inner` option for the focus box-shadow.</span>{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-focus-visible-outer-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-focus-visible-outer-color</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-focus-visible-inner-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-focus-visible-inner-color</code></button>
          </div>
        </td>
      </tr>
      <tr class="border-bottom-0">
        <td rowspan="2">
          {{< markdown >}}**Link** - <span class="text-bg-warning">Use these variables to set the color to a link or something that should look like a link.</span>{{< /markdown >}}
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
            <button class="color-copy" data-clipboard-text="--bs-link-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-link-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-link-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-link-color-rgb</code></button>
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
            <button class="color-copy" data-clipboard-text="--bs-link-hover-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-link-hover-color</code></button>
            <button class="color-copy" data-clipboard-text="--bs-link-hover-color-rgb" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-link-hover-color-rgb</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          {{< markdown >}}**Code** - <span class="text-bg-warning">Use this variable to set the color to a code text.</span>{{< /markdown >}}
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-code-color);" data-bs-theme="light" title="#666"><p class="visually-hidden">#666</p></div>
          </div>
        </td>
        <td>
          <div class="border-color">
            <div class="w-100 h-100" style="background-color: var(--bs-code-color);" data-bs-theme="dark" title="#999"><p class="visually-hidden">#999</p></div>
          </div>
        </td>
        <td>
          <div>
            <button class="color-copy" data-clipboard-text="--bs-code-color" data-bs-toggle="tooltip" data-bs-title="Copy to clipboard" data-bs-placement="left"><code>--bs-code-color</code></button>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="5">
          <div class="alert alert-warning mb-0" role="alert">
            <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
            <p>TODO: active-bg, decide what to do with the remaining variables remove ?</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Sass variables

#### Orange variables

We define our meaningful variables for light and dark themes first.

<div class="row">
  <div class="col-md-6 col-lg-12 col-xl-6">
{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}
  </div>
  <div class="col-md-6 col-lg-12 col-xl-6">
{{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}
  </div>
</div>

#### Bootstrap variables

<div class="alert alert-warning" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>TODO: explain that this is only the most important part, and that the rest exists somewhere else but is not documented here. TODO: add grays?</p>
</div>

We assign our meaningful variables to Bootstrap's tokens.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

We then define theme colors for light (resp. dark). These are the variables used for our CSS variables.

<div class="row">
  <div class="col-md-6 col-lg-12 col-xl-6">
{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}
  </div>
  <div class="col-md-6 col-lg-12 col-xl-6">
{{< scss-docs name="theme-color-dark-variables" file="scss/_variables-dark.scss" >}}
  </div>
</div>
