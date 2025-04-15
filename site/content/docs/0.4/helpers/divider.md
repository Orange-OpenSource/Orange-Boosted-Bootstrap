---
layout: docs
title: Divider
description: Use the horizontal or vertical rule helpers to create dividers. A divider can be used to visually structure an interface by clearly separating content sections.
group: helpers
aliases:
  - "/docs/helpers/divider/"
  - "/docs/helpers/vertical-rule/"
toc: true
---

## Horizontal rules

Horizontal rules should use the `<hr>` tag, when the separator has semantic meaning (i.e., when it represents a topic change or a significant transition in the content). If the divider is purely decorative, prefer using a border CSS property on a `<div>` or our [border utilities]({{< docsref "/utilities/borders" >}}), or even ensure to hide it from assistive technologies (e.g., `aria-hidden="true"`).

{{< example >}}
<hr>
<div class="border-top border-default my-medium"></div>
{{< /example >}}

## Vertical rules

Vertical rules are inspired by the `<hr>` element. The `vr` class allows you to create vertical dividers in common layouts. They're styled just like `<hr>` elements. They have `min-height` of `1em`.

{{< example >}}
<div class="vr"></div>
{{< /example >}}

Vertical rules scale their height in flex layouts:

{{< example class="d-flex" >}}
<div class="d-flex" style="height: 50px;">
  <div class="vr"></div>
</div>
<div class="d-flex" style="height: 80px;">
  <div class="vr"></div>
</div>
<div class="d-flex" style="height: 100px;">
  <div class="vr"></div>
</div>
{{< /example >}}

## Color

Change the divider color using the [border color utilities]({{< docsref "/utilities/borders/#color" >}}).

{{< example class="d-flex flex-column gap-1" >}}
<div><hr class="border-muted"></div>
<div><hr class="border-emphasized"></div>
<div><hr class="border-brand-primary"></div>
<div data-bs-theme="light" class="bg-brand-primary py-shortest"><hr class="border-on-brand-primary"></div>
<div data-bs-theme="light" class="bg-always-white py-shortest"><hr class="border-always-black"></div>
<div data-bs-theme="dark" class="bg-always-black py-shortest"><hr class="border-always-white"></div>
<div data-bs-theme="dark" class="bg-always-black py-shortest"><hr class="border-always-on-black"></div>
<div data-bs-theme="light" class="bg-always-white py-shortest"><hr class="border-always-on-white"></div>
{{< /example >}}

{{< bootstrap-compatibility >}}
The `<hr>` and `vr` color can be set using [colors utilities]({{< docsref "/utilities/colors" >}})
{{< example >}}
<hr class="text-brand-emphasized">
<div class="vr text-brand-primary"></div>
{{< /example >}}
{{< /bootstrap-compatibility >}}

## Size

Change the divider thickness using the [border width utilities]({{< docsref "/utilities/borders/#width" >}}).

{{< example>}}
<div class="d-flex" style="height: 50px;">
  <div class="vr border-thin"></div>
  <div class="vr border-medium"></div>
  <div class="vr border-thick"></div>
  <div class="vr border-thicker"></div>
</div>
{{< /example >}}

