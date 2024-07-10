---
layout: docs
title: Footer
description: Documentation and examples for a powerful and responsive OUDS Web's footer. It includes support for branding, navigation and more.
group: components
aliases:
  - "/docs/components/footer/"
toc: true
---

## How it works

Our footer is basically a `<footer>` tag with `.footer` and `.navbar` classes. It comes with 5 ready-to-use fully responsive bars which should be arranged vertically in the following order:
- Title with content bar
- Follow us bar
- Navigation bar
- Service bar
- Terms and conditions **mandatory** bar

You can choose to display each part or not, except the last one which is mandatory. No matter how many parts you use, they should follow the order listed above.

If these available parts don't meet your specific needs, feel free to develop your own custom part accordingly to the Orange Design System.

{{< callout warning >}}
This footer component is based on the [navbar component]({{< docsref "/components/navbar" >}}). Don't forget to import the corresponding SCSS file if you're using [Lean Sass imports]({{< docsref "/customize/optimize#lean-sass-imports" >}}).
{{< /callout >}}

## Example

{{< example class="p-0" show_markup=false >}}
{{< orange-footer title_content=true follow=true nav=true service=true mandatory=true id="1" >}}
{{< /orange-footer >}}
{{< /example >}}

## Footer bars

{{< callout info >}}
The `<h2></h2>` and `<h3></h3>` tags used in the following sections are informative, you **need** to adapt those to your website's title hierarchy.
{{< /callout >}}

The footer bars are independent from each other. Just add a separator between each bar of the final footer.

```html
<div class="border-bottom border-1 border-dark"></div>
```

### Title with content bar

This footer bar is a container with a `.footer-title-content` class. This container includes a title and a `.row` container in which to add your content. See below an example with a mail form content.

{{< example class="p-0" >}}
{{< orange-footer title_content=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Follow us bar

This footer bar is a container with `.footer-social` class into which a list of social media icons can be added.

{{< callout info >}}
Other social media are available. See the full list of our [Social buttons]({{< docsref "/components/buttons#social-buttons" >}}).
{{< /callout >}}

{{< example class="p-0" >}}
{{< orange-footer follow=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Navigation bar

This footer bar is a container with a `.footer-nav` class meant to contain navigation links organized in columns. You can add several categories in one footer-column by adding either accordion items or their content directly inside the columns. You can also adjust every column size depending on the breakpoint. Try to have equal sized columns height and it will wrap nicely.

{{< callout warning >}}
This container needs our Collapse JavaScript plugin to work properly.
{{< /callout >}}

{{< callout warning >}}
Depending on the screen size and for accessibility concerns, you need to write each category title in 2 different ways:

```html
<h3 class="accordion-header footer-heading" id="headingOne2">

  <!-- For small screens -->
  <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
    Category
  </button>

   <!-- For large screens -->
  <span class="d-none d-md-flex">Category</span>
</h3>
```
{{< /callout >}}

{{< example class="p-0" >}}
{{< orange-footer nav=true id="2" >}}
{{< /orange-footer >}}
{{< /example >}}

### Service bar

The footer is a container with a `.footer-service` class. Its purpose is to display customer services links.

{{< example class="p-0" >}}
{{< orange-footer service=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Mandatory terms and conditions bar

The footer is a container with a `.footer-terms` class. This footer bar is **mandatory** in every footer and should come as the last bar of the footer.

{{< example class="p-0" >}}
{{< orange-footer mandatory=true >}}
{{< /orange-footer >}}
{{< /example >}}

### Accessibility

Add the `.active` class on `.nav-link` to indicate the current page.

Please note that you should also add the `aria-current` attribute on the active `.nav-link`.

{{< example class="p-0" >}}
{{< orange-footer service=true show_active_link=true >}}
{{< /orange-footer >}}
{{< /example >}}

{{< example class="p-0" >}}
{{< orange-footer mandatory=true show_active_link=true >}}
{{< /orange-footer >}}
{{< /example >}}

## CSS

### Variables

As part of OUDS Web's evolving CSS variables approach, footers use local CSS variables on every footer part for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="footer-css-vars" file="scss/_footer.scss" >}}

Each bar redefines its own CSS variables.

Some additional CSS variables are also present on `.footer-title-content`:

{{< scss-docs name="footer-title-css-vars" file="scss/_footer.scss" >}}

and from the medium breakpoint:

{{< scss-docs name="footer-title-md-css-vars" file="scss/_footer.scss" >}}

Some additional CSS variables are also present on `.footer-social`:

{{< scss-docs name="footer-social-css-vars" file="scss/_footer.scss" >}}

and from the medium breakpoint:

{{< scss-docs name="footer-social-md-css-vars" file="scss/_footer.scss" >}}

Some additional CSS variables are also present on `.footer-nav`:

{{< scss-docs name="footer-nav-css-vars" file="scss/_footer.scss" >}}

from the medium breakpoint:

{{< scss-docs name="footer-nav-md-css-vars" file="scss/_footer.scss" >}}

and from the large breakpoint:

{{< scss-docs name="footer-nav-lg-css-vars" file="scss/_footer.scss" >}}

Some additional CSS variables are also present on `.footer-service`:

{{< scss-docs name="footer-service-css-vars" file="scss/_footer.scss" >}}

and from the medium breakpoint:

{{< scss-docs name="footer-service-md-css-vars" file="scss/_footer.scss" >}}

Some additional CSS variables are also present on `.footer-terms`:

{{< scss-docs name="footer-terms-css-vars" file="scss/_footer.scss" >}}

and from the medium breakpoint:

{{< scss-docs name="footer-terms-md-css-vars" file="scss/_footer.scss" >}}


### Sass Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="footer" file="scss/_variables.scss" >}}
