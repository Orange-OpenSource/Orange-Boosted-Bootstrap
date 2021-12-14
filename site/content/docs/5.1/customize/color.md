---
layout: docs
title: Color
description: Boosted is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.
group: customize
toc: true
---

## Theme colors

We use a subset of all colors to create a smaller color palette for generating color schemes, also available as Sass variables and a Sass map in Boosted's `scss/_variables.scss` file.

<div class="row">
  {{< theme-colors.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col-md-4">
      <div class="p-3 mb-3 fw-bold bg-{{ .name }}">{{ .name | title }}</div>
    </div>
  {{ end -}}
  {{< /theme-colors.inline >}}
</div>

All these colors are available as a Sass map, `$theme-colors`.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

Check out [our Sass maps and loops docs]({{< docsref "/customize/sass#maps-and-loops" >}}) for how to modify these colors.

## All colors

All Boosted colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, we don't create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a [theme palette](#theme-colors).

Be sure to monitor contrast ratios as you customize colors. As shown below, we've added three contrast ratios to each of the main colors—one for the swatch's current colors, one for against white, and one for against black.

<div class="row font-monospace">
  {{< theme-colors.inline >}}
  {{- range $color := $.Site.Data.colors }}
    {{- if (and (not (eq $color.name "white")) (not (eq $color.name "gray")) (not (eq $color.name "gray-dark")) (not (eq $color.name "indigo"))) }}
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
      #adb5bd
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
      #fc0
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
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top {{ if eq $color.class "secondary" "primary" }}border-{{ $color.class }}"{{ else }}" style="border-color:{{ $color.hex }} !important"{{ end }}/>
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
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
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
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
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
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
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
        <br/>
        <code>{{ $color.hex }}</code>
        <hr class="my-2 bg-transparent border-top" style="border-color:{{ $color.hex }} !important"/>
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

<small class="d-inline-flex px-2 py-1 font-monospace text-muted border rounded-3">Added in v5.1.0</small>

Boosted doesn't include `color` and `background-color` utilities for every color variable, but you can generate these yourself with our [utility API]({{< docsref "/utilities/api" >}}) and our extended Sass maps added in v5.1.0.

1. To start, make sure you've imported our functions, variables, mixins, and utilities.
2. Use our `map-merge-multiple()` function to quickly merge multiple Sass maps together in a new map.
3. Merge this new combined map to extend any utility with a `{color}-{level}` class name.

Here's an example that generates text color utilities (e.g., `.text-purple-500`) using the above steps.

```scss
@import "boosted/scss/functions";
@import "boosted/scss/variables";
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
