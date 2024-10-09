---
layout: docs
title: Gutters
description: Gutters are the padding between your columns, used to responsively space and align content in the OUDS Web grid system.
group: layout
aliases:
  - "/docs/layout/gutters/"
toc: true
---

{{< callout-soon "page" >}}

<!-- ## How they work


- **Gutters are the gaps between column content, created by horizontal `padding`.** We set `padding-right` and `padding-left` on each column, and use negative `margin` to offset that at the start and end of each row to align content.


- **Gutters start at `2px` until `64px` wide.** This allows us to match our grid to the [padding and margin spacers]({{< docsref "/utilities/spacing" >}}) scale.


- **Gutters can be responsively adjusted.** Use breakpoint-specific gutter classes, from xs to 3xl, to modify horizontal gutters, vertical gutters, and all gutters.


## Horizontal & vertical gutters


Use `.g-*` classes (`*` being among `none`, `smash`, `shortest`, `shorter`, `short`, `medium`, `tall`, `taller`, `tallest`, `spacious`, `huge`, and `jumbo`) to control the horizontal and vertical grid gutters.


{{< example class="bd-example-cols" >}}

<div class="container text-center">

  <div class="row g-short">

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

  </div>

</div>

{{< /example >}}


## Horizontal gutters


`.gx-*` classes can be used to control the horizontal gutter widths. The `.container` or `.container-fluid` parent may need to be adjusted if larger gutters are used too to avoid unwanted overflow, using a matching padding utility. For example, in the following example we've increased the padding with `.px-4`. Note that in the previous example, we use a `short` gutter width, so there isn't a need for the `.overflow-hidden` wrapper class.


{{< example class="bd-example-cols" >}}

<div class="container px-4 text-center">

  <div class="row gx-jumbo">

    <div class="col">

     <div class="p-3">Custom column padding</div>

    </div>

    <div class="col">

      <div class="p-3">Custom column padding</div>

    </div>

  </div>

</div>

{{< /example >}}


An alternative solution is to add a wrapper around the `.row` with the `.overflow-hidden` class:


{{< example class="bd-example-cols" >}}

<div class="container overflow-hidden text-center">

  <div class="row gx-jumbo">

    <div class="col">

     <div class="p-3">Custom column padding</div>

    </div>

    <div class="col">

      <div class="p-3">Custom column padding</div>

    </div>

  </div>

</div>

{{< /example >}}


## Vertical gutters


`.gy-*` classes can be used to control the vertical gutter widths within a row when columns wrap to new lines. Like the horizontal gutters, the vertical gutters can cause some overflow below the `.row` at the end of a page. If this occurs, you add a wrapper around `.row` with the `.overflow-hidden` class:


{{< example class="bd-example-cols" >}}

<div class="container overflow-hidden text-center">

  <div class="row gy-jumbo">

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

    <div class="col-6">

      <div class="p-3">Custom column padding</div>

    </div>

  </div>

</div>

{{< /example >}}


## Row columns gutters


Gutter classes can also be added to [row columns]({{< docsref "/layout/grid#row-columns" >}}). In the following example, we use responsive row columns and responsive gutter classes.


{{< example class="bd-example-cols" >}}

<div class="container text-center">

  <div class="row row-cols-2 row-cols-lg-5 g-short g-lg-tallest">

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

    <div class="col">

      <div class="p-3">Row column</div>

    </div>

  </div>

</div>

{{< /example >}}


## No gutters


The gutters between columns in our predefined grid classes can be removed with `.g-none`. This removes the negative `margin`s from `.row` and the horizontal `padding` from all immediate children columns.


**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid` and add `.mx-0` to the `.row` to prevent overflow.


In practice, here's how it looks. Note that you can continue to use this with all other predefined grid classes (including column widths, responsive tiers, reorders, and more).


{{< example class="bd-example-row" >}}

<div class="row g-none text-center">

  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>

  <div class="col-6 col-md-4">.col-6 .col-md-4</div>

</div>

{{< /example >}}


## Change the gutters


Classes are built from the `$gutters-utilities` Sass map.


{{< scss-docs name="gutters-utilities" file="scss/_maps.scss" >}} -->
