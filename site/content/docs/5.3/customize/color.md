---
layout: docs
title: Color
description: Boosted is supported by an extensive color system that themes our styles and components. This enables more comprehensive customization and extension for any project.
group: customize
aliases:
  - "/docs/customize/color/"
toc: true
---

## Theming

{{< callout warning >}}
This part explains how we built our large set of [dynamic usable variables](#usable-variables). They aren't the variables you should be using inside your project.
{{< /callout >}}

{{< callout warning >}}
Following parts might expose some **hexadecimal codes**. They aren't meant to be used. They are only informational. **Prefer using the associated variables.**
{{< /callout >}}

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

### Theme colors

The core colors of orange design. These colors should always dominate other colors inside a page. They are used to highlight elements, figures, texts or actions.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Core colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="{{ $color.name }}">
      <button class="btn border-0 p-0 color-copy ratio ratio-1x1" data-clipboard-text="{{ $color.variable }}" data-bs-toggle="tooltip" data-bs-title="Copy <code>{{ $color.variable }}</code>" data-bs-html="true">
        <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet" {{ if eq $color.name "White" }} style="border: 1px solid var(--bs-border-color-translucent)" {{ end }}>
          <rect fill="var({{ $color.variable }})" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
          <rect fill="var({{ $color.variable }})" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
        </svg>
        <span class="visually-hidden">Copy variable name {{ $color.variable }}</span>
      </button>
      <figcaption>
        <var class="text-nowrap user-select-all">--bs-{{- $color.class -}}</var>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 ps-2 mb-4">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{- end -}}
  <div class="double-figure d-none d-md-flex d-lg-none"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Functional colors

The functional colors of orange design. These colors are not meant to be used as backgrounds or colors. They are associated to specific established meanings (respectively success, info or discovery, warning or alert, critical or error). They should be associated with a meaningful icon.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Functional colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="{{ $color.name }}">
      <button class="btn border-0 p-0 color-copy ratio ratio-1x1" data-clipboard-text="--bs-{{ $color.level }}" data-bs-toggle="tooltip" data-bs-title="Copy <code>--bs-{{ $color.level }}</code>" data-bs-html="true">
        <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
          <rect fill="var(--bs-{{ $color.level }})" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
          <rect fill="var(--bs-{{ $color.level }})" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
        </svg>
        <span class="visually-hidden">Copy variable name --bs-{{ $color.level }}</span>
      </button>
      <figcaption>
        <var class="text-nowrap user-select-all">--bs-{{- $color.level -}}</var>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 p-2 mb-4">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{ end -}}
  <div class="double-figure d-none d-lg-flex"></div>
  <div class="double-figure d-none d-lg-flex"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Functional grays

The functional grays of orange design. These colors are used as backgrounds, colors or borders to outline some elements (hover state, disabled state, supporting texts, dividers, low highlights). They should not dominate the page.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Grays" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="{{ $color.name }}">
      <button class="btn border-0 p-0 color-copy ratio ratio-1x1" data-clipboard-text="{{ $color.variable }}" data-bs-toggle="tooltip" data-bs-title="Copy <code>{{ $color.variable }}</code>" data-bs-html="true">
        <svg viewBox="0 0 100 100" role="img" aria-label="{{ $color.name }}" preserveAspectRatio="xMidYMid meet">
          <rect fill="{{ if eq $color.name 800 }}{{ $color.hex }}{{ else }}var({{ $color.variable }}){{ end }}" x="0" y="0" width="100" height="51" data-bs-theme="light"/>
          <rect fill="{{ if eq $color.name 800 }}{{ $color.darkHex }}{{ else }}var({{ $color.variable }}){{ end }}" x="0" y="50" width="100" height="50" data-bs-theme="dark"/>
        </svg>
        <span class="visually-hidden">Copy variable name {{ $color.variable }}</span>
      </button>
      <figcaption>
        <var class="text-nowrap user-select-all">{{- $color.variable -}}</var>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 p-2 mb-4 pe-none">
      <p class="mb-0" data-bs-theme="light"><code class="pe-auto user-select-all">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="pe-auto user-select-all">{{ $color.darkHex }}</code></p>
    </div>
  </div>
  {{ end -}}
  <div class="double-figure d-none d-md-flex"></div>
</div>
{{ end -}}
{{< /palette.inline >}}

### Supporting colors

The supporting colors of orange design. These colors are meant for backgrounds, data display or illustrations. They should not be used alone or dominate the page.

{{< palette.inline >}}
{{- range where $.Site.Data.palette "category" "Supporting colors" }}
<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-2">
  {{- range $color := .colors }}
  <div class="double-figure d-flex">
    <figure class="mb-0 w-50" aria-label="Supporting {{ $color.name }}">
      <button class="btn border-0 p-0 color-copy ratio ratio-1x1" data-clipboard-text="{{ $color.variable }}" data-bs-toggle="tooltip" data-bs-title="Copy <code>{{ $color.variable }}</code>" data-bs-html="true">
        <svg viewBox="0 0 100 100" role="img" aria-label="Supporting {{ $color.name }}" preserveAspectRatio="xMidYMid meet">
          <rect fill="{{ $color.hex }}" x="0" y="0" width="100" height="100"/>
        </svg>
        <span class="visually-hidden">Copy variable name {{ $color.variable }}</span>
      </button>
      <figcaption>
        <var class="text-nowrap user-select-all">{{ $color.variable }}</var>
      </figcaption>
    </figure>
    <div class="d-flex flex-column justify-content-around w-50 p-2 mb-4">
      <p class="mb-0" data-bs-theme="light"><code class="user-select-all">{{ $color.hex }}</code></p>
      <p class="mb-0" data-bs-theme="dark"><code class="user-select-all">{{ $color.hex }}</code></p>
    </div>
  </div>
  {{ end -}}
</div>
{{ end -}}
{{< /palette.inline >}}

## Usable variables

#### Light vs Dark

Ne devrait pas être utilisé directement (normalement)

<div>
// Functional colors
--bs-primary: #f16e00; + rgb                          accent.primary
--bs-secondary: #000; + rgb                           surface.medium // accent.focus
--bs-success: #228722; + rgb                          accent.positive
--bs-info: #4170d8; + rgb                             accent.information
--bs-warning: #fc0; + rgb                             accent.warning
--bs-danger: #cd3c14; + rgb                           accent.negative
Manque #fff > #141414 --bs-body-bg                    background

// Concepts fonctionnels manquants
--bs-light: #ccc; + rgb
--bs-dark: #000; + rgb

// Functional grays (utilisés dans tous les composants) (fontion: gris ? neutre ?)
#eee      #333        --bs-secondary-bg               surface.lowest // surface.hover // surface.disabled
#ddd      #666        --bs-active-bg                  surface.highlight
#ccc      #666        --bs-disabled-color             accent.neutral // accent.disabled
#666      #999        --bs-placeholder-color          accent.secondary
#333      #333        Variable a introduire           surface.low ??? Utilisé dans Boosted ? Pourrait être --bs-light dans un premier temps?
#000      #000        Variable a introduire           inverted.background ??? Utilisé dans Boosted ? Pourrait être --bs-dark dans un premier temps?

// Supporting colors
#4bb4e6   #4bb4e6     Variable a introduire           surface.extra1 (bleu)
#50be87   #50be87     Variable a introduire           surface.extra2 (vert)
#ffb4e6   #ffb4e6     Variable a introduire           surface.extra3 (rose)
#a885d8   #a885d8     Variable a introduire           surface.extra4 (violet)
#ffd200   #ffd200     Variable a introduire           surface.extra5 (jaune)
#ff7900   #ff7900     Variable a introduire           surface.high (orange)
#f9f5f0   #f9f5f0     Variable a introduire           surface.extra6 (organic) ??? Encore des gros doutes sur celle-ci

// Cas bizarre
#000      #ff7900     --bs-hover-color                N'existe pas mais devrait être dans Figma

// Ne devrait pas apparaitre ?
#333      #eee        --bs-body-color-subtle          -------
#333      #666        --bs-gray-tweak                 N'existe pas dans Figma, lié à un filter, ne devrait pas apparaître dans la doc
#000      #141414     --bs-black-tweak                N'existe pas dans Figma, lié à un filter, ne devrait pas apparaître dans la doc

Idées:
- On ajoute des variables avec des noms différents pour ce niveau genre: `--bs-theme-{fonction}-{nombre}`, `--bs-global-*`
- Les variables qui ont des noms qu'on aime pas, on rename en fonction des tokens coté design ?
- Donner des noms très longs et très peu compréhensibles (comprendre abstraits) pour pas donner l'envie de les utiliser ?

/************************************************************/
/* ! Penser à update palette.yml avec les noms de variables */
/************************************************************/
</div>

#### Concepts de base

Tableau de Bootstrap (probablement - à vérifier)

<div>
// Briques de base réutilisables dans les composants
--bs-link-color: #000;
--bs-link-color-rgb: 0, 0, 0;
--bs-link-hover-color: #f16e00;
--bs-link-hover-color-rgb: 241, 110, 0;
--bs-code-color: #666;
--bs-highlight-color: #fff;
--bs-highlight-bg: #000;

/***** Réutilisables pour créer des composants custom <!-- TODO: Besoin d'expliquer comment ça fonctionne ? -->
// Briques de base des bordures
--bs-border-color: #000;                    Devrait etre --bs-border-primary/secondary ? ou --bs-border-high ? Coté Bs anyway
--bs-border-translucent: #ccc               Devrait etre --bs-border-secondary/tertiary ? ou --bs-border-medium/low ? Coté Bs anyway

// Briques de base du concept body
--bs-body-color + rgb
--bs-body-bg + rgb

?? Devrait etre dans la section précedente avec les secondary-x/tertiary-x ? Ou alors rename avec des --bs-body-* ?
--bs-secondary-color: #666; + rgb
--bs-tertiary-color + rgb
--bs-secondary-bg: #eee; + rgb
--bs-tertiary-bg + rgb
??

// Brique de base du focus
--bs-focus-visible-inner-color: #fff;
--bs-focus-visible-outer-color: #000;

// Briques de base des composants (+ forms ?)
composant.hover.bg
composant.active.bg
composant.pressed.bg
composant.disabled.bg
composant.hover.color
composant.active.color
composant.pressed.color
composant.disabled.color
composant.hover.border
composant.active.border
composant.pressed.border
composant.disabled.border
/**************************************************/

?? Coté Bootstrap ca devrait être dans la section liht vs dark ?, comme c'est des briques de base ?
--bs-primary-text-emphasis: #f16e00;
--bs-secondary-text-emphasis: #000;
--bs-success-text-emphasis: #228722;
--bs-info-text-emphasis: #4170d8;
--bs-warning-text-emphasis: #fc0;
--bs-danger-text-emphasis: #cd3c14;
--bs-light-text-emphasis: #ccc;
--bs-dark-text-emphasis: #000;
--bs-primary-bg-subtle: #f16e00;
--bs-secondary-bg-subtle: #000;
--bs-success-bg-subtle: #228722;
--bs-info-bg-subtle: #4170d8;
--bs-warning-bg-subtle: #fc0;
--bs-danger-bg-subtle: #cd3c14;
--bs-light-bg-subtle: #ccc;
--bs-dark-bg-subtle: #000;
--bs-primary-border-subtle: #f16e00;
--bs-secondary-border-subtle: #000;
--bs-success-border-subtle: #228722;
--bs-info-border-subtle: #4170d8;
--bs-warning-border-subtle: #fc0;
--bs-danger-border-subtle: #cd3c14;
--bs-light-border-subtle: #ccc;
--bs-dark-border-subtle: #000;
--bs-emphasis-color: #000; + rgb
??
</div>

#### Composants

Ne devrait pas être dans _root.scss. Devrait être dans _components.scss.

<div>
--bs-focus-ring-color
--bs-form-valid-color: var(--bs-success-text-emphasis);
--bs-form-valid-border-color: var(--bs-success);
--bs-form-invalid-color: var(--bs-danger-text-emphasis);
--bs-form-invalid-border-color: var(--bs-danger);
</div>



### Variables

### Sass variables

#### Orange variables
{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}
{{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}

#### Bootstrap variables

TODO: explain this is the most important part. The rest will be implicit

TODO: add grays?

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}




















<details>
<summary>Table of contents</summary>

## Colors

{{< added-in "5.3.0" >}}

We've added new variables for `secondary` and `tertiary` text and background colors, plus `{color}-bg-subtle`, `{color}-border-subtle`, and `{color}-text-emphasis` for our theme colors. These new colors are available through Sass and CSS variables (but not our color maps or utility classes) with the express goal of making it easier to customize across multiple colors modes like light and dark. These new variables are globally set on `:root` and are adapted for our new dark color mode while our original theme colors remain unchanged.

Colors ending in `-rgb` provide the `red, green, blue` values for use in `rgb()` and `rgba()` color modes. For example, `rgba(var(--bs-secondary-bg-rgb), .5)`.

{{< callout warning>}}
**Heads up!** There's some potential confusion with our new secondary and tertiary colors, and our existing secondary theme color, as well as our light and dark theme colors. Expect this to be ironed out in v6.
{{< /callout >}}

<table class="table table-swatches">
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
</details>
