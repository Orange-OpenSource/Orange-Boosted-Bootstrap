---
layout: docs
title: Colors
description: Convey meaning through `color` with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
aliases:
  - "/docs/utilities/colors/"
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Colors

Colorize text with color utilities. If you want to colorize links, you can use the [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}}) which have `:hover` and `:focus` states.
<!-- To colorize icons, please refer to our [icon color documentation]({{< docsref "extend/icons#modify-icons-color" >}}). -->

OUDS Web provides many `.text-*` and `.bg-*` utilities, but they should be used with care to meet our design specifications and [WCAG 2.2 accessibility standards for color contrast](https://www.w3.org/TR/WCAG/#distinguishable).
To be sure to respect the specifications, it is necessary to define `color`, `background-color` and `font-size` altogether.

Thus, the `.text-brand-primary` color on light background (`#f15e00`) should only be used in a font size greater than 24px (using for example `.fs-3` utility), or 19px bold (using for example `.fs-4` and `.fw-bold` utilities).
The `.text-primary` color on dark background (`#ff7900`) can be used in any size, and it shouldn't be used on light grey backgrounds at all.

Here are some compliant combinations examples for texts:

{{< example >}}
<p class="text-brand-primary p-short">Text brand-primary</p>
<p class="text-default p-short">Text default</p>
<p class="text-disabled p-short">Text disabled</p>
<p class="text-muted p-short">Text muted</p>
<p class="text-status-info p-short">Text status-info</p>
<p class="text-status-negative p-short">Text status-negative</p>
<p class="text-status-positive p-short">Text status-positive</p>
<p class="text-status-warning p-short">Text status-warning</p>
<p class="text-always-black p-short">Text always-black</p>
<p class="text-always-white p-short">Text always-white</p>
<p class="text-on-brand-primary bg-brand-primary p-short">Text on-brand-primary</p>
<p class="text-on-status-emphasized bg-status-info-emphasized p-short">Text on-status-emphasized</p> <!-- TODO LM: We probably don't need them since handled by color-mode ? -->
<p class="text-on-status-emphasized-alt bg-status-neutral-emphasized p-short">Text on-status-emphasized-alt</p>
<p class="text-on-status-muted bg-status-info-muted p-short">Text on-status-muted</p>
<p class="text-always-on-black bg-always-black p-short">Text always-on-black</p>
<p class="text-always-on-white bg-always-white p-short">Text always-on-white</p>
{{< /example >}}

{{< callout info >}}
If you don't see the couple you need in the following table, please mind using one of the table or check that the contrast between the text and the background is at least 3 for normal text and 4.5 for large text. Knowing that a normal text is a text with a font size of 16px and a large text is a text with a font size of 24px or 19px bold one.
{{< /callout >}}

In this table we assume that the background is used in a color mode switching context and that the associated theme is good, so we have to consider the light and dark mode for the text color.

{{< bs-table >}}
| Color utility | Allowed `.bg-*` utility for normal text | Allowed `.bg-*` utility for large text |
| --- | --- | --- |
| `.text-brand-primary` | `.bg-emphasized`, `.bg-always-black` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-always-black`, `.bg-always-white` |
| `.text-default` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white` | <!-- TODO LM: All background listed or a text mentioning that all are working ? -->
| `.text-disabled` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white` | <!-- TODO LM: All background listed or a text mentioning that all are working depending on the context ? -->
| `.text-muted` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-status-info` | Never | Never |
| `.text-status-negative` | Never | Never |
| `.text-status-positive` | Never | Never |
| `.text-status-warning` | Never | Never |
| `.text-always-black` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-always-white` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-on-brand-primary` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-on-status-emphasized` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-on-status-emphasized-alt` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-on-status-muted` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-always-on-black` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
| `.text-always-on-white` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` | `.bg-primary`, `.bg-secondary`, `.bg-tertiary`, `.bg-emphasized`, `.bg-brand-primary`, `.bg-status-neutral-emphasized`, `.bg-status-neutral-muted`, `.bg-status-accent-emphasized`, `.bg-status-accent-muted`, `.bg-status-positive-emphasized`, `.bg-status-positive-muted`, `.bg-status-negative-emphasized`, `.bg-status-negative-muted`, `.bg-status-warning-emphasized`, `.bg-status-warning-muted`, `.bg-status-info-emphasized`, `.bg-status-info-muted`, `.bg-always-black`, `.bg-always-white`, `.bg-transparent` |
{{< /bs-table >}}

{{< callout warning >}}
When the interface allows to switch between light and dark backgrounds, the light mode stricter restrictions must be applied!
{{< /callout >}}

<!-- The following colors are meant to be used with icons.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<p class="text-{{ .name }}{{ with .contrast_color }} bg-{{ . }}{{ end }}">.text-{{ .name }}</p>
{{- end -}}
{{< /colors.inline >}}

<p class="text-body">.text-body</p>
<p class="text-body-emphasis">.text-body-emphasis</p>
<p class="text-body-secondary">.text-body-secondary</p>

<p class="text-black bg-white">.text-black</p>
<p class="text-white bg-black">.text-white</p>
{{< /example >}} -->

<!-- <details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Some of the colors combinations below do not belong to the Orange Design System specifications, and do not meet accessibility standards.

Please refer to our [Orange's colors section]({{< docsref "/utilities/colors#colors" >}}) above and to the [Color guidelines](https://system.design.orange.com/0c1af118d/p/7059a5-colour/b/17b829) on the Orange Design System website.
{{< /design-callout-alert >}}

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
<p class="text-black-50 bg-white">.text-black-50</p>
<p class="text-white-50 bg-black">.text-white-50</p>
{{< /example >}}

{{< callout warning >}}
**Deprecation:** With the addition of `.text-opacity-*` utilities and CSS variables for text utilities, `.text-black-50` and `.text-white-50` are deprecated as of v5.1.0. They'll be removed in v6.0.0.
{{< /callout >}}
</details> -->

<!-- ## Opacity

{{< added-in "5.1.0" >}}

As of v5.1.0, text color utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.text-primary` utility.

```css
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
```

We use an RGB version of our `--bs-primary` (with the value of `241, 110, 0` in light mode) CSS variable and attached a second CSS variable, `--bs-text-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.text-primary` now, your computed `color` value is `rgba(241, 110, 0, 1)` in light mode. The local CSS variable inside each `.text-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

When used in dark mode, `--bs-primary-rgb` will use the value of (with the value of `255, 121, 0`).

### Example

To change that opacity, override `--bs-text-opacity` via custom styles or inline styles.

<details>
<summary>See Bootstrap examples that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Some of the colors combinations below do not belong to the Orange Design System specifications, and do not meet accessibility standards.

Please refer to our [Orange's colors section]({{< docsref "/utilities/colors#colors" >}}) above.
{{< /design-callout-alert >}}

{{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary" style="--bs-text-opacity: .5;">This is 50% opacity primary text</div>
{{< /example >}}

Or, choose from any of the `.text-opacity` utilities:

{{< example >}}
<div class="text-primary">This is default primary text</div>
<div class="text-primary text-opacity-75">This is 75% opacity primary text</div>
<div class="text-primary text-opacity-50">This is 50% opacity primary text</div>
<div class="text-primary text-opacity-25">This is 25% opacity primary text</div>
{{< /example >}}
</details> -->

## Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` or more semantic element with the desired class.

## CSS

<!-- TODO LM: The rest of it -->

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass variables

Most `color` utilities are generated by our theme colors, reassigned from our generic color palette variables.

<!-- Boosted mod -->
Boosted supersedes Bootstrap color variables with Orange brand color.

{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}

{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-dark-variables" file="scss/_variables-dark.scss" >}}

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-text-map" file="scss/_maps.scss" >}}

Variables for setting colors in `.text-*-emphasis` utilities in light and dark mode:

{{< scss-docs name="theme-text-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-text-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass maps

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-colors-dark-map" file="scss/_variables-dark.scss" >}}

Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB colors are generated from a separate Sass map:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-colors-rgb-dark" file="scss/_maps.scss" >}}

Color opacities build on that with their own map that's consumed by the utilities API:

{{< scss-docs name="utilities-text-colors" file="scss/_maps.scss" >}}

Color mode adaptive text colors are also available as a Sass map:

{{< scss-docs name="theme-text-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-text-dark-map" file="scss/_maps.scss" >}}

### Sass utilities API

Color utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-color" file="scss/_utilities.scss" >}}
