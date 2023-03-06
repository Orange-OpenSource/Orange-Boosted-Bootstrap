---
layout: docs
title: Vertical rule
description: Use the custom vertical rule helper to create vertical dividers like the `<hr>` element.
group: helpers
aliases:
  - "/docs/helpers/vertical-rule/"
toc: true
added: "5.1"
---

## How it works

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts. They're styled just like `<hr>` elements:

- They're `2px` wide
- They have `min-height` of `1em`
- Their color is set via `currentColor` and `opacity`

Customize them with additional styles as needed.

## Example

{{< example >}}
<div class="vr"></div>
{{< /example >}}

<!-- Boosted mod: change color with background utilities -->

Change their color with [background utilities]({{< docsref "/utilities/background" >}}):

{{< example >}}
<div class="vr bg-primary"></div>
{{< /example >}}

Vertical rules scale their height in flex layouts:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
</div>
{{< /example >}}

## With stacks

They can also be used in [stacks]({{< docsref "/helpers/stacks" >}}):

<!-- Boosted mod: light border -->
{{< example >}}
<div class="hstack gap-3">
  <div class="bg-body-tertiary border border-light">First item</div>
  <div class="bg-body-tertiary border border-light ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="bg-body-tertiary border border-light">Third item</div>
</div>
{{< /example >}}
