---
layout: docs
title: Color
description: Boosted is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.
group: customize
aliases:
  - "/docs/customize/color/"
toc: true
---

<!-- Boosted mod -->
## Orange's colors

Color palette is used throughout Boosted in multiple ways, either in components or as utilities for both [`background-color`]({{< docsref "/utilities/background" >}}) and [`color`]({{< docsref "/utilities/colors" >}}).

### Core colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 my-3">
  {{- range $color := .colors }}
    <figure class="col" aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top {{ if eq $color.class "secondary" "primary" }}border-{{ $color.class }}"{{ else }}" style="border-color:{{ $color.hex }} !important"{{ end }}>
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

### Supporting colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Supporting colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important">
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

### Functional colors

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Functional colors" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important">
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

### Grays

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Grays" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important">
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

### OBS Gray

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "OBS Gray" }}
<div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 my-3">
  {{- range $color := .colors }}
    <figure aria-label="{{ $color.name }}">
      <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
        <rect fill="{{ $color.hex }}" width="100" height="100"/>
      </svg>
      <figcaption class="py-1">
        <strong>{{ $color.name }}</strong>
        <br>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important">
        <var>{{- $color.variable -}}</var>
      </figcaption>
    </figure>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

### Usage

Boosted sets an additional layer to use Orange Brand's color tokens names—defined first and mapped to Bootstrap core variables.
Boosted core uses Bootstrap's naming for maintenance ease, but **you're encouraged to use Orange color tokens when it comes to custom code**.

<div class="row row-cols-1 row-cols-lg-2 mt-4">
    <div class="col">
        <h4>Orange color tokens</h4>
{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}
    </div>
    <div class="col">
        <h4>Bootstrap core variables</h4>
{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}
    </div>
</div>
<!-- End mod -->

## Colors

{{< added-in "5.3.0" >}}

We've added new variables for `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on `:root` and are adapted for our new dark color mode while our original theme colors remain unchanged.

Colors ending in `-rgb` provide the `red, green, blue` values for use in `rgb()` and `rgba()` color modes. For example, `rgba(var(--bs-secondary-bg-rgb), .5)`.

{{< callout warning>}}
**Heads up!** There's some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6.
{{< /callout >}}

<table class="table table-swatches exclude-from-pa11y-analysis">
  <thead>
    <tr>
      <th style="width: 340px;">Description</th>
      <th style="width: 200px;" class="ps-0">Swatch</th>
      <th>Variables</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        {{< markdown >}}**Body —** Default foreground (color) and background, including components.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-body-color);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-body-color`<br>`--bs-body-color-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3 border" style="background-color: var(--bs-body-bg);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-body-bg`<br>`--bs-body-bg-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        {{< markdown >}}**Secondary —** Use the `color` option for lighter text. Use the `bg` option for dividers and to indicate disabled component states.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-secondary-color);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-secondary-color`<br>`--bs-secondary-color-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3 border" style="background-color: var(--bs-secondary-bg);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-secondary-bg`<br>`--bs-secondary-bg-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="2">
        {{< markdown >}}**Tertiary —** Use the `color` option for even lighter text. Use the `bg` option to style backgrounds for hover states, accents, and wells.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-tertiary-color);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-tertiary-color`<br>`--bs-tertiary-color-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3 border" style="background-color: var(--bs-tertiary-bg);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-tertiary-bg`<br>`--bs-tertiary-bg-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}**Emphasis —** For higher contrast text. Not applicable for backgrounds.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-emphasis-color);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-emphasis-color`<br>`--bs-emphasis-color-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}**Border —** For component borders, dividers, and rules. Use `--bs-border-color-translucent` to blend with backgrounds with an `rgba()` value.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-border-color);">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-border-color`<br>`--bs-border-color-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Primary —** Main theme color, used for hyperlinks, focus styles, and component and form active states.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-primary">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-primary`<br>`--bs-primary-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-primary-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-primary-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-primary-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-primary-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-primary-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-primary-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Success —** Theme color used for positive or successful actions and information.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-success">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-success`<br>`--bs-success-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-success-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-success-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-success-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-success-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-success-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-success-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Danger —** Theme color used for errors and dangerous actions.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-danger">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-danger`<br>`--bs-danger-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-danger-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-danger-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-danger-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-danger-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-danger-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-danger-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Warning —** Theme color used for non-destructive warning messages.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-warning">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-warning`<br>`--bs-warning-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-warning-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-warning-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-warning-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-warning-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-warning-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-warning-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Info —** Theme color used for neutral and informative content.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-info">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-info`<br>`--bs-info-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-info-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-info-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-info-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-info-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-info-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-info-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Light —** Additional theme option for less contrasting colors.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-light">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-light`<br>`--bs-light-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-light-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-light-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-light-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-light-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-light-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-light-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td rowspan="4">
        {{< markdown >}}**Dark —** Additional theme option for higher contrasting colors.{{< /markdown >}}
      </td>
      <td class="ps-0">
        <div class="p-3 bg-dark">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-dark`<br>`--bs-dark-rgb`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="background-color: var(--bs-dark-bg-subtle)">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-dark-bg-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="p-3" style="border: 5px var(--bs-dark-border-subtle) solid">&nbsp;</div>
      </td>
      <td>
        {{< markdown >}}`--bs-dark-border-subtle`{{< /markdown >}}
      </td>
    </tr>
    <tr>
      <td class="ps-0">
        <div class="py-3 fw-bold h5" style="color: var(--bs-dark-text-emphasis)">Text</div>
      </td>
      <td>
        {{< markdown >}}`--bs-dark-text-emphasis`{{< /markdown >}}
      </td>
    </tr>
  </tbody>
</table>

<!--Boosted mod: no "Using the new colors" section because `.bg-primary-subtle` stays orange without opacity in Boosted so the text can't be visible-->

### Theme colors

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Boosted's `scss/_variables.scss` file.

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

### All colors

{{< design-callout-alert >}}
Some of the colors below, especially the **variants suffixed by** `-100` **to** `-900`, do not belong to the Orange Design System specifications.

Please refer to our Boosted [Orange's colors]({{< docsref "/customize/color#oranges-colors" >}}) section and to the [Color](https://system.design.orange.com/0c1af118d/p/7059a5-colour/b/17b829) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< callout warning >}}
All Boosted colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, we don't create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a [theme palette](#theme-colors).

Please note that in the Boosted colors, the indigo colors are the same as the purple ones.
{{< /callout >}}

Be sure to monitor contrast ratios as you customize colors. As shown below, we've added three contrast ratios to each of the main colors—one for the swatch's current colors, one for against white, and one for against black.

<div class="row font-monospace">
  {{< theme-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark"))) }}
    <div class="col-md-4 mb-3">
      <div class="p-3 mb-2 position-relative swatch-{{ $color.name }}">
        <strong class="d-block">${{ $color.name }}</strong>
        {{ $color.hex }}
      </div>
      {{ range (seq 100 100 900) }}
      <div class="p-3 bd-{{ $color.name }}-{{ . }}">${{ $color.name }}-{{ . }}</div>
      {{ end }}
    </div>
    {{ end -}}
  {{ end -}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 position-relative swatch-gray-500">
      <strong class="d-block">$gray-500</strong>
      #ccc
    </div>
  {{- range $.Site.Data.grays }}
    <div class="p-3 bd-gray-{{ .name }}">$gray-{{ .name }}</div>
  {{ end -}}
  </div>
  {{< /theme-colors.inline >}}

  <div class="col-md-4 mb-3">
    <div class="p-3 mb-2 bd-accessible-orange">
      <strong class="d-block">$accessible-orange</strong>
      #f16e00
    </div>
    <div class="p-3 mb-2 bd-supporting-yellow">
      <strong class="d-block">$supporting-yellow</strong>
      #ffd200
    </div>
    <div class="p-3 mb-2 bd-black text-white">
      <strong class="d-block">$black</strong>
      #000
    </div>
    <div class="p-3 mb-2 bd-white border">
      <strong class="d-block">$white</strong>
      #fff
    </div>
  </div>
</div>

### Notes on Sass

Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. We specify the midpoint value (e.g., `$blue-500`) and use custom color functions to tint (lighten) or shade (darken) our colors via Sass's `mix()` color function.

Using `mix()` is not the same as `lighten()` and `darken()`—the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as [shown in this CodePen demo](https://codepen.io/emdeoh/pen/zYOQOPB).

Our `tint-color()` and `shade-color()` functions use `mix()` alongside our `$theme-color-interval` variable, which specifies a stepped percentage value for each mixed color we produce. See the `scss/_functions.scss` and `scss/_variables.scss` files for the full source code.

## Color Sass maps

Boosted's source Sass files include three maps to help you quickly and easily loop over a list of colors and their hex values.

- `$colors` lists all our available base (`500`) colors
- `$theme-colors` lists all semantically named theme colors (shown below)
- `$background-colors` overrides `$theme-colors` specifically for usage in `.bg-*` utilities
- `$grays` lists all tints and shades of gray

Within `scss/_variables.scss`, you'll find Boosted's color variables and Sass map. Here's an example of the `$colors` Sass map:

{{< scss-docs name="colors-map" file="scss/_variables.scss" >}}

Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map.

### Example

Here's how you can use these in your Sass:

```scss
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
```

[Color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utility classes are also available for setting `color` and `background-color` using the `500` color values.

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
