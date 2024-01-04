---
layout: docs
title: Close button
description: A generic close button for dismissing content like modals and alerts.
group: components
aliases:
  - "/docs/components/close-button/"
toc: true
---

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `mask-image`. **Be sure to include text for screen readers**, as we've done with `<span class="visually-hidden">`.

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Disabled state

Disabled close buttons change their `color`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn-close" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Dark variant

{{< deprecated-in "5.3.3" >}}

{{< callout-deprecated-dark-variants "btn-close" >}}

## Eco-design variant

{{< callout info >}}
For eco-design reasons, close buttons can also be created without `.btn-close` to reduce the size of your CSS bundle. It means that you don't have to import `_close.scss` in your Sass file if you are an advanced Boosted user using **custom Sass imports**.

If you choose this option, please be aware that if the design of close buttons change in the future, this section might disappear and you would have to use `.btn-close` to your close buttons or change the combinations of classes.
{{< /callout >}}

{{< example stackblitz_add_js="true" >}}
<button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>

<button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>

<button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>

<button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>
{{< /example >}}

{{% enable-btn-close-tooltip 2 %}}

## CSS

### Variables

{{< added-in "5.2.1" >}}

As part of Boosted’s evolving CSS variables approach, close button now use local CSS variables on `.btn-close` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="close-css-vars" file="scss/_close.scss" >}}

### Sass variables

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}
