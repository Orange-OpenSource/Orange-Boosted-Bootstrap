---
layout: docs
title: Dividers
description: Use the horizontal or vertical rule helpers to create dividers. A divider can be used to visually structure an interface by clearly separating content sections.
group: helpers
aliases:
  - "/docs/helpers/dividers/"
  - "/docs/helpers/vertical-rule/"
toc: true
---

## Horizontal rules

Horizontal rules should use the `<hr>` tag, when the separator has semantic meaning (i.e., when it represents a topic change or a significant transition in the content). If the divider is purely decorative, prefer using a border CSS property on a `<div>` or our [border utilities]({{< docsref "/utilities/borders" >}}), or even ensure to hide it from assistive technologies (e.g., `aria-hidden="true"`).

{{< example >}}
<hr>
<hr class="border-brand-primary">
<div class="border-top border-default my-medium"></div>
<div class="border-top border-emphasized border-thick my-medium"></div>
{{< /example >}}

The `<hr>` color is automatically adjusted according to the color modes or on colored backgrounds.

{{< example class="p-none">}}
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light">
    <hr class="border-thick">
  </div>
</div>
<div class="bg-status-negative-emphasized p-tall">
  <div data-bs-theme="root-inverted">
    <hr class="border-thicker">
  </div>
</div>
{{< /example >}}


{{< bootstrap-compatibility >}}
The `<hr>` color can be set using [colors utilities]({{< docsref "/utilities/colors" >}})
{{< example >}}
<hr class="text-brand-primary">
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Vertical rules

Vertical rules are inspired by the `<hr>` element, allowing you to create vertical dividers in common layouts. They're styled just like `<hr>` elements. They have `min-height` of `1em`.

{{< example >}}
<div class="vr"></div>

{{< /example >}}

Vertical rules scale their height in flex layouts:

{{< example >}}
<div class="d-flex" style="height: 200px;">
  <div class="vr"></div>
  <div class="vr border-brand-primary"></div>
  <div class="vr border-thicker"></div>
</div>
{{< /example >}}

The `.vr` color is automatically adjusted according to the color modes or on colored backgrounds.

{{< example class="p-none">}}
<div class="bg-brand-primary p-tall">
  <div data-bs-theme="light">
    <div class="vr border-thick"></div>
  </div>
</div>
<div class="bg-status-negative-emphasized p-tall">
  <div data-bs-theme="root-inverted">
    <div class="vr border-thicker"></div>
  </div>
</div>
{{< /example >}}

{{< bootstrap-compatibility >}}
The `.vr` color can be set using [colors utilities]({{< docsref "/utilities/colors" >}})
{{< example >}}
  <div class="vr text-brand-primary"></div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

