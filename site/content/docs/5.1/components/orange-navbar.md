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
    <ul class="navbar-nav ml-auto">
      <li class="nav-item"><a class="nav-link active" href="#" aria-label="English version">EN</a></li>
      <li class="nav-item"><a class="nav-link" href="#" aria-label="Version française" lang="fr" hreflang="fr">FR</a></li>
      <li class="nav-item"><a class="nav-link" href="#" aria-label="Version en español" lang="es" hreflang="es">ES</a></li>
    </ul>
{{< /orange-supra >}}
{{< /example >}}

You can have a complete overview of how to use supra bars in the dedicated [Design Guidelines page]({{<docsref "/guidelines/global-headers">}})