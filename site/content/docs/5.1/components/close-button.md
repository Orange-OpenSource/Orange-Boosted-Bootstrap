---
layout: docs
title: Close button
description: A generic close button for dismissing content like modals and alerts.
group: components
toc: true
---

## Example

Provide an option to dismiss or close a component with `.btn-close`. Default styling is limited, but highly customizable. Modify the Sass variables to replace the default `mask-image`. **Be sure to include text for screen readers**, as we've done with `<span class="visually-hidden">`.

{{< example >}}
<button type="button" class="btn-close"><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Disabled state

Disabled close buttons change their `color`. We've also applied `pointer-events: none` and `user-select: none` to preventing hover and active states from triggering.

{{< example >}}
<button type="button" class="btn-close" disabled><span class="visually-hidden">Close</span></button>
{{< /example >}}

## White variant

Change the default `.btn-close` to be white with the `.btn-close-white` class.

{{< example class="bg-dark" >}}
<button type="button" class="btn-close btn-close-white"><span class="visually-hidden">Close</span></button>
<button type="button" class="btn-close btn-close-white" disabled><span class="visually-hidden">Close</span></button>
{{< /example >}}

## Without specific class

Close buttons can also be created without `.btn-close`.

{{< example >}}
<button type="button" class="btn btn-icon btn-no-outline">
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>

<button type="button" class="btn btn-icon btn-no-outline" disabled>
  <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
  <span class="visually-hidden">Close</span>
</button>
{{< /example >}}

## Sass

### Variables

{{< scss-docs name="close-variables" file="scss/_variables.scss" >}}
