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

{{< design-callout-alert >}}
Some of the colors combinations below do not belong to the Orange Design System specifications, and do not meet accessibility standards.

Please refer to our [Orange's colors]({{< docsref "/utilities/colors#oranges-colors" >}}) section underneath and to the [Color](https://system.design.orange.com/0c1af118d/p/7059a5-colour/b/17b829) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

Colorize text with color utilities. If you want to colorize links, you can use the [`.link-*` helper classes]({{< docsref "/helpers/colored-links" >}}) which have `:hover` and `:focus` states.

{{< callout info >}}
Color utilities like `.text-*` that generated from our original `$theme-colors` Sass map don't yet respond to color modes, however, any `.text-*-emphasis` utility will. This will be resolved in v6.
{{< /callout >}}

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

{{< callout warning >}}
**Deprecation:** With the addition of the expanded theme colors and variables, the `.text-muted` utility has been deprecated as of v5.3.0. Its default value has also been reassigned to the new `--bs-secondary-color` CSS variable to better support color modes. It will be removed in v6.0.0.
{{< /callout >}}

<!-- Boosted mod -->
## Orange's colors

Bootstrap provides many `.text-*` and `.bg-*` utilities, but they should be used with care to meet our design specifications and [WCAG 2.0 accessibility standards for color contrast](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).
To be sure to respect the specifications, it is necessary to define `color`, `background-color` and `font-size` altogether.

Thus, the `.text-primary` color on white background (`#f16e00`) can only be used in a font size greater than 24px (using for example `.fs-3` utility), or 19px bold (using for example `.fs-4` and `.fw-bold` utilities).
The `.text-primary` color on dark background (`#ff7900`) can be used in any size, and it shouldn't be used on light grey backgrounds at all.

{{< callout warning >}}
When the interface allows to switch between light and dark backgrounds, the light mode stricter restrictions must be applied!
{{< /callout >}}

Here are some compliant combinations examples for texts:

{{< example >}}
<div class="p-1" data-bs-theme="light">
  <p>regular text</p>
  <p class="text-primary fs-3">regular primary text with minimum font-size for contrast with .fs-3 (restrictive because of the light mode)</p>
  <p class="text-body-secondary">regular secondary text</p>

  <p class="fw-bold">bold text</p>
  <p class="text-primary fs-4 fw-bold">bold primary text with minimum font-size for contrast with .fs-4 (restrictive because of the light mode)</p>
  <p class="text-body-secondary fw-bold">bold secondary text</p>
</div>

<div class="p-1" data-bs-theme="dark">
  <p class="text-white">regular white text</p>
  <p class="text-primary">regular primary text</p>
  <p class="text-body-secondary">regular secondary text</p>

  <p class="text-white fw-bold">bold white text</p>
  <p class="text-primary fw-bold">bold primary text</p>
  <p class="text-body-secondary fw-bold">bold secondary text</p>
</div>
{{< /example >}}

Here are some compliant combinations examples for non-texts elements, such as SVG icons:

{{< example >}}
<p class="p-2">
  <svg width="1.875em" height="1.875em" class="text-primary" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
  </svg>
  <svg width="1.875em" height="1.875em" class="text-success" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
  </svg>
  <svg width="1.875em" height="1.875em" class="text-danger" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#danger"/>
  </svg>
  <svg width="1.875em" height="1.875em" class="text-info" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#info"/>
  </svg>
  <svg width="1.875em" height="1.875em" class="text-warning" aria-hidden="true" focusable="false">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#warning"/>
  </svg>
</p>
{{< /example >}}

<!-- End mod -->

## Opacity

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

## Specificity

Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` or more semantic element with the desired class.

## CSS

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass variables

Most `color` utilities are generated by our theme colors, reassigned from our generic color palette variables.

<!-- Boosted mod -->
Boosted supersedes Bootstrap color variables with Orange brand color.

{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}

{{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}

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
