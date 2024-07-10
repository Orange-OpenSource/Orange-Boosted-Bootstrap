---
layout: docs
title: Images
description: Documentation and examples for opting images into responsive behavior (so they never become wider than their parent) and add lightweight styles to them—all via classes.
group: content
aliases:
  - "/docs/content/images/"
toc: true
---

## Responsive images

Images in OUDS Web are made responsive with `.img-fluid`. This applies `max-width: 100%;` and `height: auto;` to the image so that it scales with the parent width.

{{< example >}}
{{< placeholder width="100%" height="250" class="bd-placeholder-img-lg img-fluid" text="Responsive image" color="#999" >}}
{{< /example >}}

## Image thumbnails

In addition to our [border-radius utilities]({{< docsref "/utilities/borders" >}}), you can use `.img-thumbnail` to give an image a 2px border appearance.

{{< example >}}
{{< placeholder width="200" height="200" class="img-thumbnail" title="A generic square placeholder image with a gray border around it" color="#999" >}}
{{< /example >}}

## Aligning images

Align images with the [helper float classes]({{< docsref "/utilities/float" >}}) or [text alignment classes]({{< docsref "/utilities/text#text-alignment" >}}). `block`-level images can be centered using [the `.mx-auto` margin utility class]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

{{< example >}}
{{< placeholder width="200" height="200" class="float-start" color="#999" >}}
{{< placeholder width="200" height="200" class="float-end" color="#999" >}}
{{< /example >}}


{{< example >}}
{{< placeholder width="200" height="200" class="mx-auto d-block" color="#999" >}}
{{< /example >}}

{{< example >}}
<div class="text-center">
  {{< placeholder width="200" height="200" color="#999" >}}
</div>
{{< /example >}}


## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

```html
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```

## CSS

### Sass variables

Variables are available for image thumbnails.

{{< scss-docs name="thumbnail-variables" file="scss/_variables.scss" >}}
