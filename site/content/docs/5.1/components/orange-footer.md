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

The "Mailing list" and "Follow us" bars require some extra CSS. (See [complements]({{< docsref "/components/orange-footer#orange-footer-examples-complement" >}}) below).

Furthermore, the padding applied here is not that responsive.
{{< /callout >}}

## Orange footer examples complement

The examples use homemade dark versions of several components as they will be implemented with [#917]({{< param repo >}}/issues/917).

However, here are some clues to get over it, by adding some css to your project. You can have a live preview on this [CodePen](https://codepen.io/louismaximepiton/pen/jOLYgxW?editors=1100).

### Mailing list

In order to be branded on this sub-component, adding `.custom-form` on the `form` tag and removing `border-white` from the `button` tag will do it.

```scss
.custom-form {
  button {
    border-color: $white;

    &:hover,
    &:focus,
    &:focus-visible {
      border-color: $white;
    }

    &:active {
      border-color: $brand-orange;
    }
  }
}
```

### Follow us

In order to be branded on this sub-component, adding `.custom-social` on the `ul` tag and removing `text-white` from the social `button`s tag will do it.

```scss
.custom-social {
  a {
    color: $white;
    background-color: $black;
    border-color: $white;

    &:active {
      color: $black;
      background-color: $white;
      border-color: $white;
    }
  }
}
```
