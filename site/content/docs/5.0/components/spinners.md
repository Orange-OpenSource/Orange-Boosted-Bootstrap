---
layout: docs
title: Spinners
description: Indicate the loading state of a component or page with Boosted spinners, built entirely with HTML, CSS, and no JavaScript.
group: components
toc: true
---

## About

Boosted "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="visually-hidden">Loading...</span>`.

## Example

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

<!-- Boosted: no Growing spinner -->

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
  <strong>Loading...</strong>
  <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
</div>
{{< /example >}}

#### Floats

{{< example >}}
<div class="clearfix">
  <div class="spinner-border float-right" role="status">
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


{{< example >}}
<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border spinner-border-lg" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
{{< /example >}}
<!-- End mod -->

## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

{{< example >}}
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
{{< /example >}}

<!-- Boosted: no Growing spinner -->

[color]:   {{< docsref "/utilities/colors" >}}
[display]: {{< docsref "/utilities/display" >}}
[flex]:    {{< docsref "/utilities/flex" >}}
[float]:   {{< docsref "/utilities/float" >}}
[margin]:  {{< docsref "/utilities/spacing" >}}
[sizing]:  {{< docsref "/utilities/sizing" >}}
[text]:    {{< docsref "/content/typography" >}}
