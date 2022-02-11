---
layout: docs
title: Orange Navbar
description: Documentation and examples for Boosted's exclusive Brand responsive navbars.
group: components
toc: true
---

## How it works

Orange navbar is based on the [navbar]({{<docsref "/components/navbar">}}) component. It adds some display management and introduces the supra bar component.
You may refer to its documentation in order to properly create and use navbars.

## Examples

### Supra bar

A simple navigation can be added on top of Orange navbar, it is called supra bar. Simply add the `.supra` class in your navbar declaration.

{{< callout warning >}}
This navbar is visible only on desktop view.
{{< /callout >}}

{{< example class="p-0" >}}
{{< orange-supra >}}
{{< /orange-supra >}}
{{< /example >}}

Supra bar items can be added on left and right.

{{< example class="p-0" >}}
{{< orange-supra mode="languages" >}}
{{< /orange-supra >}}
{{< /example >}}

Icons as navigation items can be used as well.

{{< example class="p-0" >}}
{{< orange-supra mode="actions" >}}
{{< /orange-supra >}}
{{< /example >}}

### Global Headers (Navbars)

Brand-compliant navbars that are easy to use and customizable.

#### Global header standard

{{< example class="p-0">}}
<header>
  {{< orange-global-headers id="global-header-1" mode="actions" demo=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

#### Global header with title

You can, if you want, add title (on one or two lines) next to the brand logo.

{{< callout warning >}}
It is not allowed to have a title into a [minimized global header]({{< ref "#global-header-minimized" >}}), because it is not compliant with the Orange Design System.
{{< /callout >}}

{{< example class="p-0">}}
<!-- On one line -->
<header>
  {{< orange-global-headers id="global-header-2" mode="actions" title="Title" demo=true >}}
  {{< /orange-global-headers >}}
</header>
<br>
<!-- On two lines -->
<header>
  {{< orange-global-headers id="global-header-3" mode="actions" title="Title Line 1" title_2="Title Line 2" labels=true demo=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

#### Global header minimized

Add the `.header-minimized` on your navbar in order to have a thinner Orange Navbar.

{{< callout warning >}}

<!-- TODO: replace /guidelines/logos#orange-logo reference -->

The minimized global header will **always** use the small [Master logo]().
{{< /callout >}}

{{< example class="p-0">}}
<header>
  {{< orange-global-headers id="global-header-4" mode="actions" minimized=true demo=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

#### With navigation under

You can have a simple additional navigation under your Global Header.

{{< callout warning >}}
Please note the navigation bar **is not** a supra bar.

Also, it is not allowed to use this bar under a [minimized global header]({{< ref "#global-header-minimized" >}}), because it is not compliant with the Orange Design System.
{{< /callout >}}


{{< example class="p-0">}}
<header>
  {{< orange-global-headers id="global-header-5" mode="actions" title="Title Line 1" title_2="Title Line 2" labels=true navigation=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

#### With search box

You can have a search input into your Global Header. This one will appear different from your regular search input.

{{< example class="p-0">}}
<header>
  {{< orange-global-headers id="global-header-6" mode="search" demo=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

#### With custom logo (OBS example)

Instead of using the Master Logo that is provided by Boosted, you can also use whatever logo you want depending on your project, entity, ...

{{< callout warning >}}
<!-- TODO: replace /guidelines/logos#responsive-svg reference -->

You should consider having a **responsive SVG logo**. In order to do so, you may set up a responsive rendering into your SVG, [as we do with the Master Logo]().

<!-- TODO: replace /guidelines/logos#using-semantic-markup reference -->

If you do not intend to use your own SVG, you should explore the [DOM solution]() and therefore do as if you had a [title on one or two lines]({{< ref "#global-header-with-title" >}}).

The latter may be the preferred way to do a custom logo, still, as it's *really* not recommended to use anything other than the Master logo.
{{< /callout >}}

{{< example class="p-0">}}
<header>
  {{< orange-global-headers id="global-header-7" mode="actions" responsive_logo=true labels_end=true demo=true >}}
  {{< /orange-global-headers >}}
</header>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-navbar-variables" file="scss/_variables.scss" >}}
