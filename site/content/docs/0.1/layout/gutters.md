---
layout: docs
title: Gutters
description: Gutters are the padding between your columns, used to responsively space and align content in the OUDS Web grid system.
group: layout
aliases:
  - "/docs/layout/gutters/"
toc: true
---

## How they work

- **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content. The default gutter width is described in [our grid options]({{< docsref "/layout/grid#grid-options" >}}).

- **Gutter utilities start at `2px` and go up to `64px` wide.** This allows us to match our grid to the [padding and margin spacers]({{< docsref "/utilities/spacing" >}}) scale.

- **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes, from xs to 3xl, to modify horizontal gutters, vertical gutters, and all gutters.

## Horizontal gutters

`.gx-*` classes can be used to control the horizontal gutter widths. The container element may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we've increased the padding with `.px-tallest`.

{{< example class="bd-example-cols" >}}
<div class="container-fluid px-tallest text-center">
  <div class="row gx-jumbo">
    <div class="col">
     <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-tall">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:

{{< example class="bd-example-cols" >}}
<div class="container-fluid overflow-hidden text-center">
  <div class="row gx-jumbo">
    <div class="col">
     <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-tall">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Vertical gutters

`.gy-*` classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:

{{< example class="bd-example-cols" >}}
<div class="container-fluid overflow-hidden text-center">
  <div class="row gy-jumbo">
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Horizontal & vertical gutters

Use `.g-*` classes (`*` being among `none`, `smash`, `shortest`, `shorter`, `short`, `medium`, `tall`, `taller`, `tallest`, `spacious`, `huge`, and `jumbo`) to control the horizontal and vertical grid gutters. In the example below, we use a smaller gutter width, so there isn’t a need for the `.overflow-hidden` wrapper class.

{{< example class="bd-example-cols" >}}
<div class="container-fluid text-center">
  <div class="row g-short">
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-tall">Custom column padding</div>
    </div>
  </div>
</div>
{{< /example >}}

## Row columns gutters

Gutter classes can also be added to [row columns]({{< docsref "/layout/grid#row-columns" >}}). In the following example, we use responsive row columns and responsive gutter classes.

{{< example class="bd-example-cols" >}}
<div class="container-fluid text-center">
  <div class="row row-cols-2 row-cols-lg-5 g-short g-lg-tallest">
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
    <div class="col">
      <div class="p-tall">Row column</div>
    </div>
  </div>
</div>
{{< /example >}}

## No gutters

The gutters between columns in our predefined grid classes can be removed with `.g-none`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.

**Need an edge-to-edge design?** Drop the parent `.container-fluid` and add `.mx-none` to the `.row` to prevent overflow.

In practice, here's how it looks. Note that you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).

{{< example class="bd-example-row" >}}
<div class="row g-none text-center">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{{< /example >}}

## Nesting

Nested `.row`s will reset their own gutters to follow the main grid gutters. Here is an example with a `.gx-none` on the upper `.row`.

{{< example class="bd-example-cols" >}}
<div class="row gx-none text-center">
  <div class="col-12 col-md-8">
    <div>
      <p>.col-12 .col-md-8</p>
      <div class="row">
        <div class="col-3"><div>.col-3</div></div>
        <div class="col-3"><div>.col-3</div></div>
        <div class="col-3"><div>.col-3</div></div>
        <div class="col-3"><div>.col-3</div></div>
      </div>
    </div>
  </div>
  <div class="col-6 col-md-4">
    <div>.col-6 .col-md-4</div>
  </div>
</div>
{{< /example >}}

## Change the gutters

Classes are built from the `$gutters` Sass map which is inherited from the `$ouds-dimension-space-fixed` Sass map.

{{< scss-docs name="gutters" file="scss/_maps.scss" >}}

{{< scss-docs name="ouds-maps-dimension-fixed" file="scss/_maps.scss" >}}

{{< scss-docs name="ouds-semantic-space" file="scss/tokens/_semantic.scss" >}}

{{< scss-docs name="ouds-raw-dimension" file="scss/tokens/_raw.scss" >}}
