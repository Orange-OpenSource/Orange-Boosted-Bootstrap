---
layout: docs
title: Background
description: Convey meaning through `background-color`.
group: utilities
aliases:
  - "/docs/utilities/background/"
toc: true
---

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

## Background color

Background utilities like `.bg-*` are generated from our original `$theme-colors` Sass map and respond to color modes.

Similar to the contextual text color classes, set the background of an element to any contextual class. Background utilities **do not set `color`**, so depending on the cases you'll want to use:
* `.text-*` [color utilities]({{< docsref "/utilities/colors" >}}) when the background color remains the same in light and dark mode
* `.text-bg-*` [color & background helper]({{< docsref "/helpers/color-background" >}}) from our [theme colors]({{< docsref "/customize/color-theme#theming" >}})
* `[data-bs-theme]` [color mode attribute]({{< docsref "/customize/color-modes#example" >}}) when the element using a background utility contains complex sub-elements such as components that need to respond to color modes

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 fw-bold bg-{{ .name }}"><span class="text-bg-{{ .name }}">.bg-{{ .name }}</span></div>
{{- end -}}
{{< /colors.inline >}}
<div class="p-3 mb-2 fw-bold bg-body-secondary">.bg-body-secondary</div>
<div class="p-3 mb-2 fw-bold bg-body">.bg-body</div>
<div class="p-3 mb-2 fw-bold bg-black text-white">.bg-black</div>
<div class="p-3 mb-2 fw-bold bg-white text-black">.bg-white</div>
<div class="p-3 mb-2 fw-bold bg-transparent">.bg-transparent</div>
{{< /example >}}

Supporting background utilities are generated from our [supporting colors]({{< docsref "/customize/color-theme#supporting" >}}). Please note that their color value stays the same between light and dark mode.

{{< example >}}
<div class="p-3 mb-2 fw-bold bg-supporting-green text-black">.bg-supporting-green</div>
<div class="p-3 mb-2 fw-bold bg-supporting-purple text-black">.bg-supporting-purple</div>
<div class="p-3 mb-2 fw-bold bg-supporting-yellow text-black">.bg-supporting-yellow</div>
<div class="p-3 mb-2 fw-bold bg-supporting-blue text-black">.bg-supporting-blue</div>
<div class="p-3 mb-2 fw-bold bg-supporting-pink text-black">.bg-supporting-pink</div>
<div class="p-3 mb-2 fw-bold bg-supporting-orange text-black">.bg-supporting-orange</div>
{{< /example >}}

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Bootstrap-specific background color utilities should not be used because they are not part of the [Orange Design System]({{< param ods.web >}}) as they are inherited from Bootstrap.
{{< /design-callout-alert >}}

Another background utility is `.bg-body-tertiary` but doesn't have any matching color in our [grays colors]({{< docsref "/customize/color-theme#grays" >}}) so shouldn't be used for now.

{{< example >}}
<p class="p-3 mb-2 fw-bold bg-body-tertiary">.bg-body-tertiary</p>
{{< /example >}}

In Bootstrap, for each `.bg-*` there is a matching `.bg-*-subtle` utility responding to color modes. In Boosted, subtle colors don't exist so these background utilities have exactly the same value and shouldn't be used. Prefer the regular `.bg-*` utilities instead.

{{< example >}}
{{< colors.inline >}}
{{- range (index $.Site.Data "theme-colors") }}
<div class="p-3 mb-2 fw-bold bg-{{ .name }}-subtle"><span class="text-bg-{{ .name }}">.bg-{{ .name }}-subtle</span></div>
{{- end -}}
{{< /colors.inline >}}
{{< /example >}}
</details>

<!-- Boosted mod: no background gradient -->

## Opacity

{{< added-in "5.1.0" >}}

As of v5.1.0, `background-color` utilities are generated with Sass using CSS variables. This allows for real-time color changes without compilation and dynamic alpha transparency changes.

### How it works

Consider our default `.bg-success` utility.

```css
.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}
```

We use an RGB version of our `--bs-success` (with the value of `25, 135, 84`) CSS variable and attached a second CSS variable, `--bs-bg-opacity`, for the alpha transparency (with a default value `1` thanks to a local CSS variable). That means anytime you use `.bg-success` now, your computed `color` value is `rgba(25, 135, 84, 1)`. The local CSS variable inside each `.bg-*` class avoids inheritance issues so nested instances of the utilities don't automatically have a modified alpha transparency.

### Example

To change that opacity, override `--bs-bg-opacity` via custom styles or inline styles.

{{< example >}}
<div class="bg-success p-2 text-bg-success">This is default success background</div>
{{< /example >}}

<details>
<summary>See Bootstrap example(s) that are incompatible with Orange Design System.</summary>
<br>
{{< design-callout-alert >}}
Some of the colors combinations below do not belong to the Orange Design System specifications, and do not meet accessibility standards.
{{< /design-callout-alert >}}

{{< example >}}
<div class="bg-success p-2 text-dark">This is default success background</div>
<div class="bg-success p-2" style="--bs-bg-opacity: .5;">This is 50% opacity success background</div>
{{< /example >}}

Or, choose from any of the `.bg-opacity` utilities:

{{< example >}}
<div class="bg-success p-2 text-dark">This is default success background</div>
<div class="bg-success p-2 text-dark bg-opacity-75">This is 75% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-50">This is 50% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-25">This is 25% opacity success background</div>
<div class="bg-success p-2 text-dark bg-opacity-10">This is 10% opacity success background</div>
{{< /example >}}
</details>

## CSS

In addition to the following Sass functionality, consider reading about our included [CSS custom properties]({{< docsref "/customize/css-variables" >}}) (aka CSS variables) for colors and more.

### Sass variables

Most `background-color` utilities are generated by our theme colors, reassigned from our generic color palette variables.

<!-- Boosted mod -->
Boosted supersedes Bootstrap color variables with Orange brand color.

{{< scss-docs name="brand-colors" file="scss/_variables.scss" >}}

{{< scss-docs name="brand-colors-dark" file="scss/_variables-dark.scss" >}}

{{< scss-docs name="color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-color-dark-variables" file="scss/_variables-dark.scss" >}}

<!-- Boosted mod: no background gradient -->

Grayscale colors are also available, but only a subset are used to generate any utilities.

{{< scss-docs name="gray-color-variables" file="scss/_variables.scss" >}}

Variables for setting `background-color` in `.bg-*-subtle` utilities in light and dark mode:

{{< scss-docs name="theme-bg-subtle-variables" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-variables" file="scss/_variables-dark.scss" >}}

### Sass maps

Theme colors are then put into a Sass map so we can loop over them to generate our utilities, component modifiers, and more.

{{< scss-docs name="theme-colors-map" file="scss/_variables.scss" >}}

{{< scss-docs name="theme-colors-dark-map" file="scss/_variables-dark.scss" >}}

Grayscale colors are also available as a Sass map. **This map is not used to generate any utilities.**

{{< scss-docs name="gray-colors-map" file="scss/_variables.scss" >}}

RGB colors are generated from a separate Sass map:

{{< scss-docs name="theme-colors-rgb" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-colors-rgb-dark" file="scss/_maps.scss" >}}

Background color opacities build on that with their own map that's consumed by the utilities API:

{{< scss-docs name="utilities-bg-colors" file="scss/_maps.scss" >}}

Color mode background colors are also available as a Sass map:

{{< scss-docs name="theme-bg-subtle-map" file="scss/_maps.scss" >}}

{{< scss-docs name="theme-bg-subtle-dark-map" file="scss/_maps.scss" >}}

### Sass mixins

**No mixins are used to generate our background utilities**, but we do have some additional mixins for other situations where you'd like to create your own gradients.

{{< scss-docs name="gradient-bg-mixin" file="scss/mixins/_gradients.scss" >}}

<!-- Boosted mod: no background gradient -->

### Sass utilities API

Background utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-bg-color" file="scss/_utilities.scss" >}}
