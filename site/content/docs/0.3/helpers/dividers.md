---
layout: docs
title: Dividers
description: Use the horizontal or vertical rule helpers to create dividers. A divider can be used to visually structure an interface by clearly separating content sections.
group: helpers
aliases:
  - "/docs/helpers/dividers/"
toc: true
---

## Horizontal rules

Horizontal rules should use the `<hr>` tag, when the separator has semantic meaning (i.e., when it represents a topic change or a significant transition in the content). If the divider is purely decorative, use a `<div>` styled with a `hr` class ensuring it is hidden from assistive technologies (e.g., `aria-hidden="true"`).

{{< example >}}
<hr>
<hr class="text-brand-primary">
<div class="border-top border-default my-medium"></div>
<div class="border-top border-emphasized border-thick my-medium"></div>
{{< /example >}}


## Vertical rules

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts. They're styled just like `<hr>` elements. They have `min-height` of `1em`.

{{< example >}}
<div class="vr"></div>

{{< /example >}}

Vertical rules scale their height in flex layouts:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
  <div class="vr text-brand-primary"></div>
  <div class="vr border-thicker"></div>
</div>
{{< /example >}}

### With stacks

They can also be used in [stacks]({{< docsref "/helpers/stacks" >}}):

{{< example class="bd-example-flex" >}}
<div class="hstack gap-3">
  <div class="p-2">First item</div>
  <div class="p-2 ms-auto">Second item</div>
  <div class="vr"></div>
  <div class="p-2">Third item</div>
</div>
{{< /example >}}
