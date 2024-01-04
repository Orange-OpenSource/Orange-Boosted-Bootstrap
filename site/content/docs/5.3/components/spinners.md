---
layout: docs
title: Spinners
description: Indicate the loading state of a component or page with Boosted spinners, built entirely with HTML, CSS, and no JavaScript.
group: components
aliases:
  - "/docs/components/spinners/"
toc: true
---

## About

Boosted "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

{{< callout info >}}
{{< partial "callouts/info-prefersreducedmotion.md" >}}
{{< /callout >}}

## Border spinner

Use the border spinners for a lightweight loading indicator.

{{< example >}}
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities][color]. You can use any of our text color utilities on the standard spinner.

<!-- Boosted mod -->
{{< example >}}
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}
<!-- End mod -->

{{< callout info >}}
**Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.
{{< /callout >}}

## Growing spinner

{{< added-in "5.2.0" >}}

{{< design-callout-alert >}}
These variants should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}).

Instead, consider using our Boosted [Border spinner]({{< docsref "/components/spinners#border-spinner" >}}) component. You can also refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

{{< example >}}
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

Once again, this spinner is built with `currentColor`, so you can easily change its appearance with [text color utilities][color].

<!-- Boosted mod -->
{{< example >}}
<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}
<!-- End mod -->

## Alignment

Spinners in Boosted are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities][margin] like `.m-5` for easy spacing.

{{< example >}}
<div class="spinner-border m-5" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}

### Placement

Use [flexbox utilities][flex], [float utilities][float], or [text alignment][text] utilities to place spinners exactly where you need them in any situation.

#### Flex

{{< example >}}
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

{{< example >}}
<div class="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div class="spinner-border ms-auto" aria-hidden="true"></div>
</div>
{{< /example >}}

#### Floats

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

#### Text align

{{< example >}}
<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
{{< /example >}}

## Size

<!-- Boosted mod: -sm & -lg -->
Add `.spinner-border-sm` or `.spinner-border-lg` to make a smaller spinner that can quickly be used within other components.

{{< design-callout-alert >}}
These **small** and **large growing spinner** variants should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}).

Instead, consider using our Boosted [Border spinner]({{< docsref "/components/spinners#border-spinner" >}}) component. You can also refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border spinner-border-lg" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-lg" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}
<!-- End mod -->

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

{{< design-callout-alert >}}
These **border spinner** and **growing spinner within buttons** variants should not be used because they do not respect the [Orange Design System]({{< param ods.web >}}).

Please refer to the [Progress indicators](https://system.design.orange.com/0c1af118d/p/45093c-progress-indicators/b/2875f1) and to the [buttons](https://system.design.orange.com/0c1af118d/p/278ebc-buttons-standard/b/247486) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
{{< /example >}}

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
  <span class="visually-hidden" role="status">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm me-2" aria-hidden="true"></span>
  <span role="status">Loading...</span>
</button>
{{< /example >}}

## CSS

### Variables

{{< added-in "5.2.0" >}}

As part of Boosted's evolving CSS variables approach, spinners now use local CSS variables on `.spinner-border` and `.spinner-grow` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

Border spinner variables:

{{< scss-docs name="spinner-border-css-vars" file="scss/_spinners.scss" >}}

Growing spinner variables:

{{< scss-docs name="spinner-grow-css-vars" file="scss/_spinners.scss" >}}

For both spinners, small and large spinner modifier classes are used to update the values of these CSS variables as needed. For example, the `.spinner-border-sm` class does the following:

{{< scss-docs name="spinner-border-sm-css-vars" file="scss/_spinners.scss" >}}

And the `.spinner-border-lg`:

{{< scss-docs name="spinner-border-lg-css-vars" file="scss/_spinners.scss" >}}

### Sass variables

{{< scss-docs name="spinner-variables" file="scss/_variables.scss" >}}

### Keyframes

Used for creating the CSS animations for our spinners. Included in `scss/_spinners.scss`.

{{< scss-docs name="spinner-border-keyframes" file="scss/_spinners.scss" >}}

{{< scss-docs name="spinner-grow-keyframes" file="scss/_spinners.scss" >}}

[color]:   {{< docsref "/utilities/colors" >}}
[flex]:    {{< docsref "/utilities/flex" >}}
[float]:   {{< docsref "/utilities/float" >}}
[margin]:  {{< docsref "/utilities/spacing" >}}
[text]:    {{< docsref "/utilities/text" >}}
