---
layout: docs
title: Orange footer
description: Documentation and examples for Boosted's powerful, responsive footer. Includes support for branding, navigation and more.
group: components
aliases: "/docs/5.1/components/orange-footer/"
toc: true
---

## Overview

{{< callout warning >}}
### Orange footer is not a component yet

The feature will be delivered with [#892]({{< param repo >}}/issues/892).

In the meantime, some examples have been developed in the [footers examples section]({{< docsref "/examples/footers" >}}) by using mostly Boosted utilities and our Collapse JavaScript plugin.

Design guidelines are not perfectly respected but it can help you while waiting for the component's delivery.
{{< /callout >}}

{{< callout info >}}
### Active colors

In order to have correct active colors in "Mailing list" and "Follow us" bars, some extra classes and CSS are required:

```css
.example-footer-custom-form .btn:active {
  border-color: var(--bs-orange) !important;
}

.example-footer-custom-social .btn:active {
  color: var(--bs-dark) !important;
  background-color: var(--bs-white) !important;
  border-color: var(--bs-white) !important;
}
{{< /callout >}}
