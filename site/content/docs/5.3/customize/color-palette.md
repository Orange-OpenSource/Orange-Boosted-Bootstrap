---
layout: docs
title: Color palette
description: TODO
group: customize
aliases:
  - "/docs/customize/color-palette/"
toc: true
---

## Palette

The variables above should fulfil all your needs, but in case you still need some other colors, here are the design color tokens we use to build the usable colors above.
None of the following variables are dynamic.

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

## CSS

Boosted sets an additional layer to use Orange Brand's color tokens names—defined first and mapped to Bootstrap core variables.
Boosted core uses Bootstrap's naming for maintenance ease, but **you're encouraged to use Orange color tokens when it comes to custom code**.

### Variables

#### Orange

Yapas

#### Bootstrap

```
--bs-blue: #4170d8;
--bs-indigo: #a885d8;
--bs-purple: #a885d8;
--bs-pink: #ffb4e6;
--bs-red: #cd3c14;
--bs-orange: #f16e00;
--bs-yellow: #fc0;
--bs-green: #228722;
--bs-teal: #50be87;
--bs-cyan: #4bb4e6;
--bs-black: #000; + rgb
--bs-white: #fff; + rgb
--bs-gray: #999;
--bs-gray-dark: #595959;
--bs-gray-100: #fafafa;
--bs-gray-200: #f6f6f6;
--bs-gray-300: #eee;
--bs-gray-400: #ddd;
--bs-gray-500: #ccc;
--bs-gray-600: #999;
--bs-gray-700: #666;
--bs-gray-800: #595959;
--bs-gray-900: #333;
--bs-gray-950: #141414;
```

### Sass variables

#### Orange variables
{{< scss-docs name="palette" file="scss/_color-palette.scss" >}}
    
#### Bootstrap variables

TODO: explain this is the most important part. The rest will be implicit

TODO: add grays?

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}
