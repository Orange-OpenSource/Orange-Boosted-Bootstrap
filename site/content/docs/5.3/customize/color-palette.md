---
layout: docs
title: Color palette
description: Orange's color palette is the summary of all the existing and useable colors.
group: customize
aliases:
  - "/docs/customize/color-palette/"
toc: true
added: "5.3"
---

## Palette

This section exposes all the existing colors inside the Orange palette. These variables aren't meant to be used, it's an exposure of the available variables. Be aware that none of the variables presented depend on the theme.

Please make sure that none of the [color theme variables]({{< docsref "/customize/color-theme" >}}) fit your needs before getting one here.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "ODS colors" }}
  {{- range $subcategory := .subcategories }}
  <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 gy-3 pb-3">
    {{- range $color := .colors }}
      <figure class="mb-0" aria-label="{{ $color.name }}">
        <button class="btn border-0 p-0 color-copy ratio ratio-1x1" data-clipboard-text="{{ $color.variable }}" data-bs-toggle="tooltip" data-bs-title="Copy <code>{{ $color.variable }}</code>" data-bs-html="true">
          <svg viewBox="0 0 100 100" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet" {{ if or (or (eq $color.name "White 100") (eq $color.name "Black 900")) (eq $color.name "Gray 900") }} style="border: 1px solid var(--bs-border-color-translucent)" {{ end }}>
            <rect fill="{{ $color.hex }}" width="100" height="100"/>
          </svg>
          <span class="visually-hidden">Copy variable name {{ $color.variable }}</span>
        </button>
        <figcaption class="py-1">
          <code class="user-select-all">{{ $color.hex }}</code>
          <hr class="my-1 bg-transparent border-top {{ if eq $color.class "secondary" "primary" }}border-{{ $color.class }}"{{ else }}" style="border-color:{{ $color.hex }} !important"{{ end }}>
          <var class="user-select-all">{{- $color.variable -}}</var>
        </figcaption>
      </figure>
    {{ end -}}
  </div>
  {{ end -}}
{{ end -}}
{{< /palette.inline >}}

## Bootstrap's palette

Bootstrap defines a color palette on its own. We worked on a mapping between Orange Design System's colors and Bootstrap's ones in cases where users will use Bootstrap-based plugins or libraries so that, when used with Boosted CSS, provides an acceptable automatic rendering.

<details>
<summary>See Bootstrap's palette</summary>
<br>
<h2>All colors</h2>

{{< design-callout-alert >}}
Some of the colors below do not belong to the Orange Design System specifications.

Please refer to our Boosted [color palette](#palette) section and to the [Color](https://system.design.orange.com/0c1af118d/p/7059a5-colour/b/17b829) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< callout warning >}}
All Boosted colors are available as Sass variables and a Sass map in `scss/_variables.scss` file. To avoid increased file sizes, we don't create text or background color classes for each of these variables. Instead, we choose a subset of these colors for a [theme palette](#palette).

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

<h3>Notes on Sass</h3>

Sass cannot programmatically generate variables, so we manually created variables for every tint and shade ourselves. For `$indigo`, `$purple`, `$pink`, `$teal`, and `$cyan`, we specify first 6 colors (`*-100` to `*-600`) from the Orange palette (design tokens) and build the last ones programmatically to darken our `*-600`. For the grays, the first 2 (`$gray-100` and `$gray-200`) are the values from Bootstrap and only the last 8 (`*-300` to `*-950`) are extracted from the Orange palette. For the remaining, only the `*-500` are correct since we specify the midpoint value and use custom color functions to tint (lighten) or shade (darken) our colors vis Sass's `mix()` color function.

The built colors depend only on the light color mode colors.

Using `mix()` is not the same as `lighten()` and `darken()`—the former blends the specified color with white or black, while the latter only adjusts the lightness value of each color. The result is a much more complete suite of colors, as [shown in this CodePen demo](https://codepen.io/emdeoh/pen/zYOQOPB).

Our `tint-color()` and `shade-color()` functions use `mix()` alongside our `$theme-color-interval` variable, which specifies a stepped percentage value for each mixed color we produce. See the `scss/_functions.scss` and `scss/_variables.scss` files for the full source code.

<h3>Example</h3>

Here's how you can use these in your Sass:

```scss
.alpha { color: $purple; }
.beta {
  color: $ods-yellow-100;
  background-color: $indigo-900;
}
```

[Color]({{< docsref "/utilities/colors" >}}) and [background]({{< docsref "/utilities/background" >}}) utility classes are also available for setting `color` and `background-color` using the `500` or `300` for some color values.
</details>

## CSS

Boosted sets an additional layer to use Orange Brand's color tokens names—defined first and mapped to Bootstrap core variables.
Boosted core uses Bootstrap's naming for maintenance ease, but **you're encouraged to use Orange color tokens when it comes to custom code**.

### Variables

These variables aren't meant to be changed

#### Orange

```css
--bs-black-rgb:     0, 0, 0;
--bs-white-rgb:     255, 255, 255;
--bs-gray-950:      #141414;
```

#### Bootstrap

<!-- TODO: the following could appear, but it is possible to do it automatically? -> I don't think so, we could probably make a short code to get it inside `boosted.css` but heavier not minimized css bundle and not insured results. -->

```css
--bs-blue:          #4170d8;
--bs-indigo:        #a885d8;
--bs-purple:        #a885d8;
--bs-pink:          #ffb4e6;
--bs-red:           #cd3c14;
--bs-orange:        #f16e00;
--bs-yellow:        #fc0;
--bs-green:         #228722;
--bs-teal:          #50be87;
--bs-cyan:          #4bb4e6;
--bs-black:         #000;
--bs-white:         #fff;
--bs-gray:          #999;
--bs-gray-dark:     #595959;
--bs-gray-100:      #fafafa;
--bs-gray-200:      #f6f6f6;
--bs-gray-300:      #eee;
--bs-gray-400:      #ddd;
--bs-gray-500:      #ccc;
--bs-gray-600:      #999;
--bs-gray-700:      #666;
--bs-gray-800:      #595959;
--bs-gray-900:      #333;
```


### Sass variables

#### Orange variables

{{< scss-docs name="palette" file="scss/_color-palette.scss" >}}

#### Bootstrap variables

This code shows the mapping of the Orange design tokens and the Bootstrap's native variables.

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

### Sass maps

Boosted's source Sass files include 17 maps to help you quickly and easily loop over a list of colors and their hex values.

- `$colors` lists all our available Orange base (`500` or `300`) colors
- `$theme-colors` lists all semantically named theme colors for light theme (shown in our [color theme]({{< docsref "/customize/color-theme" >}}))
- `$theme-colors-dark` lists all semantically named theme colors for dark theme (shown in our [color theme]({{< docsref "/customize/color-theme" >}}))
- `$utilities-text` overrides `$theme-colors` specifically for usage in `.text-*` utilities
- `$utilities-bg` overrides `$theme-colors` specifically for usage in `.bg-*` utilities
- `$utilities-border` overrides `$theme-colors` specifically for usage in `.border-*` utilities
- `$grays`, `$blues`, `$indigos`, `$purples`, `$pinks`, `$reds`, `$oranges`, `$yellows`, `$greens`, `$teals`, and `$cyans` list all tints and shades of our colors

Within `scss/_variables.scss` or `scss/_maps.scss`, you'll find Boosted's color variables and Sass maps. Here's an example of the `$colors` Sass map:

{{< scss-docs name="colors-map" file="scss/_variables.scss" >}}

Add, remove, or modify values within the map to update how they're used in many other components. Unfortunately at this time, not _every_ component utilizes this Sass map. Future updates will strive to improve upon this. Until then, plan on making use of the `${color}` variables and this Sass map.
