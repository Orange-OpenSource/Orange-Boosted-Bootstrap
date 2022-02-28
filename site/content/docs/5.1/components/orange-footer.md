---
layout: docs
title: Orange footer
description: Documentation and examples for Boosted's powerful, responsive footer. Includes support for branding, navigation and more.
group: components
aliases: "/docs/5.1/components/orange-footer/"
toc: true
---

## How it works

Orange footer is basically a `<footer>` tag with a `.bg-dark` class. It comes with several already built parts:
- Title with content bar
- Social media bar
- Navigation bar
- Service bar
- **Mandatory** bar

Feel free to develop your own part.

## Example

{{< orange-footer mailing=true follow=true nav=true service=true mandatory=true id="1" >}}
{{< /orange-footer >}}

## Parts

{{< callout info >}}
The `<h2></h2>` and `<h3></h3>` tags used here are informative, you **need** to adapt those to your website's title hierarchy.
{{< /callout >}}

Orange footer parts are independent from each other. Add a dark separator between each part of the final footer.

```html
<div class="border-bottom border-1 border-dark"></div>
```

### Title with content bar

Orange footer comes with a title with content sub-component: `.footer-title-content`. Add your content in the `.row` container. Here is an example for mailing list.

{{< example class="p-0" >}}
{{< orange-footer mailing=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Social media bar

Orange footer comes with a social media sub-component: `.footer-social`.

{{< example class="p-0" >}}
{{< orange-footer follow=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Navigation bar

Orange footer comes with a navigation sub-component: `.footer-nav`. You can add several categories in one footer-column by adding accordion items or its content directly inside columns. You can also change every column size depending on the breakpoint. Try to have equal sized columns length and it will wrap nicely.

{{< callout warning >}}
This sub-component needs our Collapse JavaScript plugin to work well.

You need to write 2 times the category for accessibility concerns.
{{< /callout >}}

{{< example class="p-0" >}}
{{< orange-footer nav=true id="2" >}}
{{< /orange-footer >}}
{{< /example >}}

### Service bar

Orange footer comes with a service links sub-component: `.footer-service`.

{{< example class="p-0" >}}
{{< orange-footer service=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Mandatory bar

Orange footer comes with a terms & conditions sub-component: `.footer-terms`. This sub-component is **mandatory** in every Orange footer.

{{< example class="p-0" >}}
{{< orange-footer mandatory=true >}}
{{< /orange-footer >}}
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-footer" file="scss/_variables.scss" >}}
