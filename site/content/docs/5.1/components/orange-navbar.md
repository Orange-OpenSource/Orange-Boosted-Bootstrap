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

## Example

### Supra bar

A simple navigation can be added on top of Orange navbar, it is called supra bar. Simply add the `.supra` class in your navbar declaration.

{{< callout warning >}}
This navbar is visible only on desktop view. 
{{< /callout >}}

{{< example >}}
{{< orange-supra >}}
{{< /orange-supra >}}
{{< /example >}}

Supra bar items can be added on left and right.

{{< example >}}
{{< orange-supra mode="languages" >}}
{{< /orange-supra >}}
{{< /example >}}

Icons as navigation items can be used as well.

{{< example >}}
{{< orange-supra mode="actions" >}}
{{< /orange-supra >}}
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-navbar-variables" file="scss/_variables.scss" >}}