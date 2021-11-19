---
layout: docs
title: Orange footer
description: Documentation and examples for Boosted's powerful, responsive footer. Includes support for branding, navigation and more.
group: components
aliases: "/docs/5.1/components/orange-footer/"
toc: true
---

## Orange footer

Orange footer is not a component yet. The feature will be delivered with [#892]({{< param repo >}}/issues/892).

{{< callout info >}}
As a substitute, you can see some examples at the [**footers examples section**]({{< docsref "/examples/footers" >}}). These footers don't need more css than boosted but they aren't branded yet for the "Mailing list" bar and the "Follow us" bar (See [complements]({{< docsref "/components/orange-footer#orange-footer-examples-complement" >}}) below). Furthermore, the padding applied here is not that responsive.

These footers need Boosted's js for accordions in mobile views.
{{< /callout >}}

## Orange footer examples complement

The examples use homemade dark versions of several components as they will be implemented with [#917]({{< param repo >}}/issues/917).

However, here are some clues to get over it, by adding some css to your project. You can have a live preview on this [CodePen](https://codepen.io/louismaximepiton/pen/jOLYgxW?editors=1100).

### Mailing list

In order to be branded on this sub-component, adding `.custom-form` on the `form` tag and removing `border-white` from the `button` tag will do it.

```scss
.custom-form {
  input {
    border-color: $gray-700;
  }

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
