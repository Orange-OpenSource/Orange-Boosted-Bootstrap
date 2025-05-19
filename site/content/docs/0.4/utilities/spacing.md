---
layout: docs
title: Spacing
description: OUDS Web includes a wide range of shorthand responsive margin, padding, and gap utility classes to modify an element's appearance.
group: utilities
aliases:
  - "/docs/utilities/spacing/"
toc: true
---

## Margin and padding

Assign responsive-friendly `margin` or `padding` values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from `none` to `jumbo`. Classes include fixed values on zoom (using `px`).

{{< callout >}}
**Using the CSS Grid layout module?** Consider using [the gap utility](#gap) instead.
{{< /callout >}}

### Notation for fixed values

Spacing utilities that apply to all breakpoints, from `2xs` to `3xl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `2xs` and `{property}{sides}-{breakpoint}-{size}` for `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, and `3xl`.

Where *property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where *sides* is one of:

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `s` - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
- `e` - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

- `none` - for classes that eliminate the `margin` or `padding` by setting it to `$ouds-dimension-0`, which is `0`
- `smash` - for classes that set the `margin` or `padding` to `$ouds-dimension-25`, which is `2px`
- `shortest` - for classes that set the `margin` or `padding` to `$ouds-dimension-50`, which is `4px`
- `shorter` - for classes that set the `margin` or `padding` to `$ouds-dimension-100`, which is `8px`
- `short` - for classes that set the `margin` or `padding` to `$ouds-dimension-150`, which is `12px`
- `medium` - for classes that set the `margin` or `padding` to `$ouds-dimension-200`, which is `16px`
- `tall` - for classes that set the `margin` or `padding` to `$ouds-dimension-300`, which is `24px`
- `taller` - for classes that set the `margin` or `padding` to `$ouds-dimension-400`, which is `32px`
- `tallest` - for classes that set the `margin` or `padding` to `$ouds-dimension-500`, which is `40px`
- `spacious` - for classes that set the `margin` or `padding` to `$ouds-dimension-600`, which is `48px`
- `huge` - for classes that set the `margin` or `padding` to `$ouds-dimension-700`, which is `56px`
- `jumbo` - for classes that set the `margin` or `padding` to `$ouds-dimension-800`, which is `64px`
- `auto` - for classes that set the `margin` to auto

(You can but shouldn't add more sizes by adding entries to the `$ouds-dimension-space-fixed` Sass map variable.)

{{< bootstrap-compatibility >}}

Spacing utilities that apply to all breakpoints, from `xs` to `xxl`, have no breakpoint abbreviation in them. This is because those classes are applied from `min-width: 0` and up, and thus are not bound by a media query. The remaining breakpoints, however, do include a breakpoint abbreviation.

The classes are named using the format `{property}{sides}-{size}` for `xs` and `{property}{sides}-{breakpoint}-{size}` for `sm`, `md`, `lg`, `xl`, and `xxl`.

Where *property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where *sides* is one of:

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `s` - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
- `e` - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

- `0` - for classes that eliminate the `margin` or `padding` by setting it to `0`
- `1` - (by default) for classes that set the `margin` or `padding` to `$spacer * .25`
- `2` - (by default) for classes that set the `margin` or `padding` to `$spacer * .75`
- `3` - (by default) for classes that set the `margin` or `padding` to `$spacer * 1.5`
- `4` - (by default) for classes that set the `margin` or `padding` to `$spacer * 2.5`
- `5` - (by default) for classes that set the `margin` or `padding` to `$spacer * 3.5`
- `auto` - for classes that set the `margin` to auto

(You can add more sizes by adding entries to the `$spacers` Sass map variable.)

{{< /bootstrap-compatibility >}}

### Notation for scaled values

Spacing utilities that evolve across all breakpoints, from `2xs` to `3xl`, have no breakpoint abbreviation in them since they are auto-sufficient from a responsive point of view.

The classes are named using the format `{property}{sides}-scaled-{size}`.

Where *property* is one of:

- `m` - for classes that set `margin`
- `p` - for classes that set `padding`

Where *sides* is one of:

- `t` - for classes that set `margin-top` or `padding-top`
- `b` - for classes that set `margin-bottom` or `padding-bottom`
- `s` - (start) for classes that set `margin-left` or `padding-left` in LTR, `margin-right` or `padding-right` in RTL
- `e` - (end) for classes that set `margin-right` or `padding-right` in LTR, `margin-left` or `padding-left` in RTL
- `x` - for classes that set both `*-left` and `*-right`
- `y` - for classes that set both `*-top` and `*-bottom`
- blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

{{< bs-table "table" >}}
| Size name | Size for mobile (`2xs` to `md`) | Size for tablet (`md` to `xl`) | Size for desktop (`xl` to `3xl` and above) |
| --- | --- | --- | --- |
| `none` | `0` | `0` | `0` |
| `smash` | `2px` | `4px` | `4px` |
| `shortest` | `4px` | `8px` | `8px` |
| `shorter` | `8px` | `12px` | `16px` |
| `short` | `12px` | `16px` | `24px` |
| `medium` | `16px` | `24px` | `32px` |
| `tall` | `24px` | `32px` | `40px` |
| `taller` | `32px` | `40px` | `48px` |
| `tallest` | `40px` | `48px` | `56px` |
| `spacious` | `48px` | `56px` | `64px` |
{{< /bs-table >}}

(You can but shouldn't add more sizes by adding entries to the `$ouds-dimension-space-scaled` Sass map variable.)

### Examples

Here are some representative examples of these classes:

```scss
.mt-none {
  margin-top: $ouds-space-fixed-none !important;
}

.ms-scaled-tall {
  margin-left: var(--bs-space-scaled-tall) !important;
}

.px-scaled-2xs {
  padding-right: var(--bs-space-scaled-2xs) !important;
  padding-left: var(--bs-space-scaled-2xs) !important;
}

.p-tallest {
  padding: $ouds-space-fixed-tall !important;
}
```

{{< bootstrap-compatibility >}}

```scss
.mt-0 {
  margin-top: 0 !important;
}

.ms-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
```

{{< /bootstrap-compatibility >}}

The first two examples show the scaled and fixed margin classes in action. The last one shows how to recreate an equivalent of `.mx-scaled-tall` by combining other responsive margin classes.

Please note that if you mix the scaled and fixed classes, the fixed classes will override the scaled ones.

{{< example class="bd-example-spacings" >}}
<div class="mx-scaled-tall">Tall scaled x margin</div>
<div class="mx-tall">Tall x margin (fixed)</div>
<div class="mx-tall mx-md-taller mx-xl-tallest">Tall scaled x margin (manually)</div>
{{< /example >}}

### Horizontal centering

Additionally, OUDS Web also includes an `.mx-auto` class for horizontally centering fixed-width block level content—that is, content that has `display: block` and a `width` set—by setting the horizontal margins to `auto`.

<div class="bd-example">
  <div class="mx-auto p-sm" style="width: 200px; background-color: rgba(var(--bd-primary-light-rgb),.15); border: rgba(var(--bd-primary-light-rgb),.3) solid 1px;">
    Centered element
  </div>
</div>

```html
<div class="mx-auto p-sm" style="width: 200px;">
  Centered element
</div>
```

## Negative margin

In CSS, `margin` properties can utilize negative values (`padding` cannot). These negative margins are **disabled by default**, but can be enabled in Sass by setting `$enable-negative-margins: true`.

The syntax is nearly the same as the default, positive margin utilities, but with the addition of `n` before the requested size. Here are some example classes that are the opposite of `.mt-sm` and `.ms-scaled-tall`:

```scss
.mt-nshort {
  margin-top: -$ouds-space-fixed-sm !important;
}

.ms-scaled-ntall {
  margin-top: calc(-1 * var(--bs-space-scaled-tall)) !important;
}
```

{{< bootstrap-compatibility >}}

Here's an example class that's the opposite of `.mt-1`:

```scss
.mt-n1 {
  margin-top: -0.25rem !important;
}
```

{{< /bootstrap-compatibility >}}

## Gap

When using `display: grid` or `display: flex`, you can make use of `gap` utilities on the parent element. This can save on having to add margin utilities to individual children of a grid or flex container. Gap utilities are responsive by default, and are generated via our utilities API, based on the `$ouds-dimension-space-fixed` Sass map.

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-tall">
  <div class="p-sm">Grid item 1</div>
  <div class="p-sm">Grid item 2</div>
  <div class="p-sm">Grid item 3</div>
  <div class="p-sm">Grid item 4</div>
</div>
{{< /example >}}

Support includes responsive options for all of OUDS Web's grid breakpoints, as well as sizes from the `$ouds-dimension-space-fixed` map (`none`–`jumbo`). There is no `.gap-auto` utility class as it's effectively the same as `.gap-none`.

{{< bootstrap-compatibility >}}

Gap utilities are responsive by default, and are generated via our utilities API, based on the `$spacers` Sass map.

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>
{{< /example >}}

Support includes responsive options for all of OUDS Web's grid breakpoints, as well as six sizes from the `$spacers` map (`0`–`5`). There is no `.gap-auto` utility class as it's effectively the same as `.gap-0`.

{{< /bootstrap-compatibility >}}

### row-gap

`row-gap` sets the vertical space between children items in the specified container.

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid row-gap-tall">
  <div class="p-sm">Grid item 1</div>
  <div class="p-sm">Grid item 2</div>
  <div class="p-sm">Grid item 3</div>
  <div class="p-sm">Grid item 4</div>
</div>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid row-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>
{{< /example >}}

{{< /bootstrap-compatibility >}}

### column-gap

`column-gap` sets the horizontal space between children items in the specified container.

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid column-gap-tall">
  <div class="p-sm">Grid item 1</div>
  <div class="p-sm">Grid item 2</div>
  <div class="p-sm">Grid item 3</div>
  <div class="p-sm">Grid item 4</div>
</div>
{{< /example >}}

{{< bootstrap-compatibility >}}

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid column-gap-3">
  <div class="p-2">Grid item 1</div>
  <div class="p-2">Grid item 2</div>
  <div class="p-2">Grid item 3</div>
  <div class="p-2">Grid item 4</div>
</div>
{{< /example >}}

{{< /bootstrap-compatibility >}}

### Scaled gap

We also provide scaled versions of the gap (including `row-gap` and `column-gap`). These are generated via our Utilities API, based on the `$ouds-dimension-space-scaled` Sass map.

{{< example class="bd-example-cssgrid" >}}
<div style="grid-template-columns: 1fr 1fr;" class="d-grid gap-scaled-medium">
  <div class="p-sm">Grid item 1</div>
  <div class="p-sm">Grid item 2</div>
  <div class="p-sm">Grid item 3</div>
  <div class="p-sm">Grid item 4</div>
</div>
{{< /example >}}

## CSS

### Variables

CSS variables that are used to build our scaled utilities.

{{< scss-docs name="root-space-scaled-var-ouds" file="scss/_root.scss" >}}

### Sass tokens

#### Raw tokens

Dimension raw tokens as Sass variables. **Not to be used as-is**.

{{< scss-docs name="ouds-raw-dimension" file="scss/tokens/_raw.scss" >}}

#### Semantic tokens

Spacing semantic tokens are defined as Sass variables.

{{< scss-docs name="ouds-semantic-space" file="scss/tokens/_semantic.scss" >}}

### Sass variables

{{< scss-docs name="spacer-variables-maps" file="scss/_variables.scss" >}}

### Sass maps

Spacing utilities are declared via Sass map and then generated with our utilities API.

{{< scss-docs name="ouds-maps-dimension" file="scss/_maps.scss" >}}

### Sass utilities API

Spacing utilities are declared in our utilities API in `scss/_utilities.scss`. [Learn how to use the utilities API.]({{< docsref "/utilities/api#using-the-api" >}})

{{< scss-docs name="utils-spacing-ouds" file="scss/_utilities.scss" >}}

{{< bootstrap-compatibility false >}}

{{< scss-docs name="utils-spacing" file="scss/_utilities.scss" >}}

{{< /bootstrap-compatibility >}}
