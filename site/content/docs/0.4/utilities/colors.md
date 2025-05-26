---
layout: docs
title: Colors
description: Convey meaning through `color` with a handful of color utility classes.
group: utilities
aliases:
  - "/docs/utilities/colors/"
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Colors

Colorize text with color utilities. To colorize icons, please refer to our [icon color section](#on-icons).

OUDS Web provides many `.text-*` and `.bg-*` utilities, but they should be used with care to meet our design specifications and [WCAG 2.2 accessibility standards for color contrast](https://www.w3.org/TR/WCAG/#distinguishable).
To be sure to respect the specifications, it is necessary to define `color`, `background-color` and `font-size` altogether.

Thus, the `.text-brand-primary` color on light background (`#f15e00`) should only be used in a font size greater than 24px (using for example `.fs-ds` utility), or 19px bold (using for example `.fs-hm` and `.fw-bold` utilities).
The `.text-brand-primary` color on dark background (`#ff7900`) can be used in any size.

{{< callout info >}}
Know that apart `.text-brand-primary`, `.text-default` and `.text-muted`, most of these utilities should be avoided since they are very contextual and you should rather use our [color modes]({{< docsref "/customize/color-modes" >}}) directly as explained in our [background utilities]({{< docsref "/utilities/background" >}}) to set nested components in the right mode directly as well.
{{< /callout >}}

Here are some compliant combinations examples for texts:

{{< example >}}
<p class="text-brand-primary p-sm">Text brand-primary</p>
<p class="text-default p-sm">Text default</p>
<p class="text-muted p-sm">Text muted</p>
<p class="text-disabled p-sm">Text disabled</p>
<p class="text-always-black p-sm">Text always-black</p>
<p class="text-always-white p-sm">Text always-white</p>
<p class="text-on-brand-primary bg-brand-primary p-sm">Text on-brand-primary</p>
<p class="text-on-status-accent-emphasized bg-status-accent-emphasized p-sm">Text on-status-accent-emphasized</p>
<p class="text-on-status-accent-muted bg-status-accent-muted p-sm">Text on-status-accent-muted</p>
<p class="text-on-status-info-emphasized bg-status-info-emphasized p-sm">Text on-status-info-emphasized</p>
<p class="text-on-status-info-muted bg-status-info-muted p-sm">Text on-status-info-muted</p>
<p class="text-on-status-negative-emphasized bg-status-negative-emphasized p-sm">Text on-status-negative-emphasized</p>
<p class="text-on-status-negative-muted bg-status-negative-muted p-sm">Text on-status-negative-muted</p>
<p class="text-on-status-neutral-emphasized bg-status-neutral-emphasized p-sm">Text on-status-neutral-emphasized</p>
<p class="text-on-status-neutral-muted bg-status-neutral-muted p-sm">Text on-status-neutral-muted</p>
<p class="text-on-status-positive-emphasized bg-status-positive-emphasized p-sm">Text on-status-positive-emphasized</p>
<p class="text-on-status-positive-muted bg-status-positive-muted p-sm">Text on-status-positive-muted</p>
<p class="text-on-status-warning-emphasized bg-status-warning-emphasized p-sm">Text on-status-warning-emphasized</p>
<p class="text-on-status-warning-muted bg-status-warning-muted p-sm">Text on-status-warning-muted</p>
<p class="text-always-on-black bg-always-black p-sm">Text always-on-black</p>
<p class="text-always-on-white bg-always-white p-sm">Text always-on-white</p>
{{< /example >}}

{{< callout info >}}
If you don't see the couple you need in the following table, please mind using one of the table or check that the contrast between the text and the background is at least 4.5 for normal text and 3 for large text.

These text categories are some [accessibility text categories](https://www.w3.org/TR/WCAG22/#dfn-large-scale) commonly used. They divide the texts into two categories:
- **Large texts** are texts that are at least 24px or 19px bold. This corresponds to at least [`.fs-hl` and above or `.fs-hm` bold and above]({{< docsref "/utilities/text#font-size" >}}) in OUDS Web.
- **Normal texts** are the remaining texts references.
{{< /callout >}}

In the following table we assume that the context is switching between light and dark mode and the use of `data-bs-theme` is correctly used.

{{< bs-table >}}
| Color utility | Allowed `.bg-*` utility for normal and large texts | Allowed `.bg-*` utility for large text only |
| --- | --- | --- |
| `.text-brand-primary` | `.bg-emphasized`, `.bg-always-black` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-always-white` |
| `.text-default` | All `.bg-*` are allowed. | — |
| `.text-muted` | All `.bg-*` are allowed. | — |
| `.text-disabled` must be used carefully in a **disabled context only**. | All `.bg-*` are allowed. | — |
| `.text-always-black` | `.bg-brand-primary`, `.bg-status-accent-emphasized`, `.bg-status-positive-emphasized`, `.bg-status-warning-emphasized`, `.bg-status-info-emphasized`, `.bg-always-white` | — |
| `.text-always-white` | `.bg-emphasized`, `.bg-always-black` | — |
| `.text-on-brand-primary` | `.bg-brand-primary` | — |
| `.text-on-status-accent-emphasized` | `.bg-status-accent-emphasized` | — |
| `.text-on-status-accent-muted` | `.bg-status-accent-muted` | — |
| `.text-on-status-info-emphasized` | `.bg-status-info-emphasized` | — |
| `.text-on-status-info-muted` | `.bg-status-info-muted` | — |
| `.text-on-status-negative-emphasized` | `.bg-status-negative-emphasized` | — |
| `.text-on-status-negative-muted` | `.bg-status-negative-muted` | — |
| `.text-on-status-neutral-emphasized` | `.bg-status-neutral-emphasized` | — |
| `.text-on-status-neutral-muted` | `.bg-status-neutral-muted` | — |
| `.text-on-status-positive-emphasized` | `.bg-status-positive-emphasized` | — |
| `.text-on-status-positive-muted` | `.bg-status-positive-muted` | — |
| `.text-on-status-warning-emphasized` | `.bg-status-warning-emphasized` | — |
| `.text-on-status-warning-muted` | `.bg-status-warning-muted` | — |
| `.text-always-on-black` | `.bg-emphasized`, `.bg-always-black` | — |
| `.text-always-on-white` | `.bg-brand-primary`, `.bg-status-accent-emphasized`, `.bg-status-positive-emphasized`, `.bg-status-warning-emphasized`, `.bg-status-info-emphasized`, `.bg-always-white` | — |
{{< /bs-table >}}

{{< bootstrap-compatibility >}}
{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p class="text-{{ .name }}{{ with .contrast_color }} bg-{{ . }}{{ end }}">.text-{{ .name }}</p>
<p class="text-{{ .name }}-emphasis{{ with .contrast_color }} bg-{{ . }}{{ end }}">.text-{{ .name }}-emphasis</p>
{{- end -}}
{{< /colors.inline >}}

<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>
<p class="text-body-tertiary">.text-body-tertiary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-black">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50">.text-white-50</p>
{{< /example >}}

{{< callout warning >}}
`.text-black-50` and `.text-white-50` are deprecated as of Bootstrap v5.1.0. They'll be removed in Bootstrap v6.0.0.
{{< /callout >}}
{{< /bootstrap-compatibility >}}

### On icons

See [icons documentation]({{< docsref "/extend/icons/#icons-color" >}}) to learn how to use color utilities on icons.

<!-- ## Opacity -->

## Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` or more semantic element with the desired class.

## CSS

### Sass tokens

#### Raw tokens

Colors raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-color" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Color semantic tokens as Sass variables. **Should not be used as-is**. Prefer use our [CSS semantic tokens](#css-semantic-tokens).

{{< scss-docs name="ouds-semantic-color" file="scss/tokens/_semantic.scss" >}}

### CSS semantic tokens

Color semantic tokens as CSS variables.

{{< scss-docs name="ouds-semantic-css-color" file="scss/tokens/_semantic-colors-custom-props.scss" >}}

The same happens for the dark mode by replacing `-light` by `-dark`.

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass variables

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Most `color` utilities are generated by our theme colors, reassigned from our generic color palette variables.
{{< /markdown >}}

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-dark-variables" file="scss/_variables-dark.scss" >}}

{{< markdown >}}
Grayscale colors are also available, but only a subset are used to generate any utilities.
{{< /markdown >}}

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-text-map" file="scss/_maps.scss" >}}

{{< markdown >}}
Variables for setting colors in `.text-*-emphasis` utilities in light and dark mode:
{{< /markdown >}}

{{< scss-docs name="theme-text-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-text-dark-variables" file="scss/_variables-dark.scss" >}}
{{< /bootstrap-compatibility >}}

### Sass maps

Our text utilities are generated from our `$ouds-text-colors`:

{{< scss-docs name="ouds-maps-text-colors" file="scss/_maps.scss" >}}

{{< bootstrap-compatibility false >}}
{{< markdown >}}
Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.
{{< /markdown >}}

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-colors-dark-map" file="scss/_variables-dark.scss" >}}

{{< markdown >}}
Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**
{{< /markdown >}}

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

{{< markdown >}}
RGB colors are generated from a separate Sass map:
{{< /markdown >}}

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-colors-rgb-dark" file="scss/_maps.scss" >}}

{{< markdown >}}
Color build on that with their own map that's consumed by the utilities API:
{{< /markdown >}}

{{< scss-docs name="utilities-text-colors" file="scss/_maps.scss" >}}

{{< markdown >}}
Color mode adaptive text colors are also available as a Sass map:
{{< /markdown >}}

{{< scss-docs name="theme-text-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-text-dark-map" file="scss/_maps.scss" >}}
{{< /bootstrap-compatibility >}}

### Sass utilities API

Color utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}
{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
{{< /bootstrap-compatibility >}}
