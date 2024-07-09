---
layout: docs
title: Progress
description: Documentation and examples for using OUDS Web custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
aliases:
  - "/docs/components/progress/"
toc: true
---

{{< callout info >}}
**New markup in v5.3.0 —** We've deprecated the previous HTML structure for progress bars and replaced it with a more accessible one. The previous structure will continue to work until v6.
{{< /callout >}}

## How it works

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- The `.progress` wrapper also requires a `role="progressbar"` and `aria` attributes to make it accessible, including an accessible name (using `aria-label`, `aria-labelledby`, or similar).
- We use the inner `.progress-bar` purely for the visual bar and label.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set its width.
- We provide a special `.progress-stacked` class to create multiple/stacked progress bars.- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible, including an accessible name (using `aria-label`, `aria-labelledby`, or similar).

Put that all together, and you have the following examples.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 0%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 100%"></div>
</div>
{{< /example >}}

## Bar sizing

### Width

OUDS Web provides a handful of [utilities for setting width]({{< docsref "/utilities/sizing" >}}). Depending on your needs, these may help with quickly configuring progress.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar w-75"></div>
</div>
{{< /example >}}

### Height

You only set a `height` value on the `.progress` container, so if you change that value, the inner `.progress-bar` will automatically resize accordingly.

{{< design-callout-alert >}}
The **1px height** variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Progress bar](https://system.design.orange.com/0c1af118d/p/080a7d-progress-bar/b/898b87) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example 1px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 1px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
  <div class="progress-bar" style="width: 25%"></div>
</div>
{{< /example >}}

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-dark" style="width: 25%">25%</div>
</div>
{{< /example >}}

Note that by default, the content inside the `.progress-bar` is controlled with `overflow: hidden`, so it doesn't bleed out of the bar. If your progress bar is shorter than its label, the content will be capped and may become unreadable. To change this behavior, you can use `.overflow-visible` from the [overflow utilities]({{< docsref "/utilities/overflow" >}}), but make sure to also define an explicit [text color]({{< docsref "/utilities/colors#colors" >}}) so the text remains readable. Be aware though that currently this approach does not take into account [color modes]({{< docsref "/customize/color-modes" >}}).

{{< example >}}
<div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
</div>
{{< /example >}}

<!-- OUDS mod -->
### Sizes

OUDS Web also provides size variants for progress bar: simply add `.progress-xs` or `.progress-sm`.

{{< example >}}
<div class="progress progress-xs" role="progressbar" aria-label="Extra small example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
<div class="progress progress-sm" role="progressbar" aria-label="Small example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar" style="width: 25%"></div>
</div>
{{< /example >}}
<!-- End mod -->

## Backgrounds

Use background utility classes to change the appearance of individual progress bars.

{{< design-callout-alert >}}
These backgrounds color variants should not be used because they do not respect the Orange Design System specifications. The only background color to use is the primary color.

Please refer to the [Progress bar](https://system.design.orange.com/0c1af118d/p/080a7d-progress-bar/b/898b87) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%"></div>
</div>
{{< /example >}}

{{< callout info >}}
{{< partial "callouts/warning-color-assistive-technologies.md" >}}
{{< /callout >}}

If you're adding labels to progress bars with a custom background color, make sure to also set an appropriate [text color]({{< docsref "/utilities/colors#colors" >}}), so the labels remain readable and have sufficient contrast.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-success" style="width: 25%">25%</div>
</div>
<div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-info" style="width: 50%">50%</div>
</div>
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-danger" style="width: 100%">100%</div>
</div>
{{< /example >}}

Alternatively, you can use the new combined [color and background]({{< docsref "/helpers/color-background" >}}) helper classes.

{{< example >}}
<div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
</div>
{{< /example >}}

## Multiple bars

You can include multiple progress components inside a container with `.progress-stacked` to create a single stacked progress bar. Note that in this case, the styling to set the visual width of the progress bar *must* be applied to the `.progress` elements, rather than the `.progress-bar`s.

{{< example >}}
<div class="progress-stacked">
  <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
    <div class="progress-bar"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
    <div class="progress-bar bg-success"></div>
  </div>
  <div class="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
    <div class="progress-bar bg-info"></div>
  </div>
</div>
{{< /example >}}

## Striped

Add `.progress-bar-striped` to any `.progress-bar` to apply a stripe via CSS gradient over the progress bar's background color.

{{< design-callout-alert >}}
These variants should not be used because they do not respect the Orange Design System specifications.

Please refer to the [Progress bar](https://system.design.orange.com/0c1af118d/p/080a7d-progress-bar/b/898b87) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Success striped example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-success" style="width: 25%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Info striped example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-info" style="width: 50%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-warning" style="width: 75%"></div>
</div>
<div class="progress" role="progressbar" aria-label="Danger striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%"></div>
</div>
{{< /example >}}

## Animated stripes

The striped gradient can also be animated. Add `.progress-bar-animated` to `.progress-bar` to animate the stripes right to left via CSS3 animations.

{{< design-callout-alert >}}
This variant should not be used because it does not respect the Orange Design System specifications.

Please refer to the [Progress bar](https://system.design.orange.com/0c1af118d/p/080a7d-progress-bar/b/898b87) guidelines on the Orange Design System website.
{{< /design-callout-alert >}}

{{< example >}}
<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%"></div>
</div>
{{< /example >}}

## CSS

### Variables

As part of OUDS Web's evolving CSS variables approach, progress bars now use local CSS variables on `.progress` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="progress-css-vars" file="scss/_progress.scss" >}}

Small and extra small progress bar modifier classes are used to update the values of these CSS variables as needed. For example, the `.progress-xs` class does the following:

{{< scss-docs name="progress-border-xs-css-vars" file="scss/_progress.scss" >}}

And the `.progress-sm`:

{{< scss-docs name="progress-border-sm-css-vars" file="scss/_progress.scss" >}}

### Sass variables

{{< scss-docs name="progress-variables" file="scss/_variables.scss" >}}

### Keyframes

Used for creating the CSS animations for `.progress-bar-animated`. Included in `scss/_progress-bar.scss`.

{{< scss-docs name="progress-keyframes" file="scss/_progress.scss" >}}
