---
layout: docs
title: Links
description: Use OUDS Web's customer link styles for links as a key navigational element, enabling users to move between pages, sections, or external resources.
group: components
aliases:
  - "/docs/components/links/"
toc: true
---

## Base class

OUDS Web has a base `.link` class that sets up basic styles such as padding and content alignment. By default, `.link` controls have a transparent border and background color, but still defines basic focus, hover and active styles. Add `.link-sm` for small size.

Visited links don't have a specific style by default. The `:visited` status can be styled with the additional `.visited-links` utility class that can be applied to a parent element to style all the child links.

{{< example >}}
<div><a class="link" href="#">This is an example of a base link</a></div>
<div><a class="link link-sm" href="#">This is an example of a small base link</a></div>
<div class="visited-links">
  <a class="link" href=".">This is an example of a visited link</a>
</div>
{{< /example >}}

The `.link` class is intended to be used in conjunction with our link variants used to display chevron or icon, or to serve as a basis for your own custom styles.

## Link chevron

Add `.link-chevron` to enhance your link with a chevron on the right side. Use the additional `.back` class to display the chevron on the left side.

{{< example >}}
<div><a class="link link-chevron" href="#">This is an example of a link with chevron</a></div>
<div><a class="link link-chevron back" href="#">This is an example of a link with chevron</a></div>
{{< /example >}}

## Icon link

The icon link helper component modifies our default link styles to enhance their appearance and quickly align any pairing of icon and text. Alignment is set via inline flexbox styling and a default `gap` value. We stylize the underline with a custom offset and color. Icons are automatically sized to `1em` to best match their associated text's `font-size`.

Icon links assume [Bootstrap Icons](https://icons.getbootstrap.com) are being used, but you should use [Solaris icons]({{< docsref "/extend/icons" >}}) in an Orange project.

{{< callout >}}
When icons are purely decorative, they should be hidden from assistive technologies using `aria-hidden="true"`, as we've done in our examples. For icons that convey meaning, provide an appropriate text alternative by adding `role="img"` and an appropriate `aria-label="..."` to the SVGs.
{{< /callout >}}

Take a regular `<a>` element, add `.icon-link`, and insert an icon on either the left or right of your link text. The icon is automatically sized, placed, and colored.

{{< example >}}
<a class="link icon-link" href="#">
  <svg class="bi" aria-hidden="true">
    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/ouds-web-sprite.svg#heart-recommend"/>
  </svg>
  This is an example of a link with an icon
</a>
{{< /example >}}

### Style on hover

{{< bootstrap-compatibility >}}
Add `.icon-link-hover` to move the icon to the right on hover.

{{< example >}}
<a class="icon-link icon-link-hover" href="#">
  Icon link
  <svg class="bi" aria-hidden="true"><use xlink:href="#arrow-right"></use></svg>
</a>
{{< /example >}}
{{< /bootstrap-compatibility >}}

### Component tokens

{{< scss-docs name="ouds-component-link" file="scss/tokens/_component.scss" >}}
