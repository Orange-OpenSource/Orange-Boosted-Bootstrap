---
layout: guidelines
title: Global headers
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Modules
toc: true
---

## Supra bars
{{< callout info >}}
<strong>Supra bars are hidden on tablet and mobile devices.</strong><br>
Based on viewport size, supra bar is hidden under <var>768px</var>.
{{< /callout >}}

### Supra bar standard

{{< anchor web-glh-sub-001 >}}

{{< example show_markup="true" class="p-0">}}
{{< orange-supra >}}
{{< /orange-supra >}}
{{< /example >}}

### Supra bar with language options

{{< anchor web-glh-sub-002 >}}

{{< example show_markup="true" class="p-0">}}
{{< orange-supra >}}
<ul class="navbar-nav ml-auto">
  <li class="nav-item"><a class="nav-link active" href="#" aria-label="English version">EN</a></li>
  <li class="nav-item"><a class="nav-link" href="#" aria-label="Version française" lang="fr" hreflang="fr">FR</a></li>
  <li class="nav-item"><a class="nav-link" href="#" aria-label="Version en español" lang="es" hreflang="es">ES</a></li>
</ul>
{{< /orange-supra >}}
{{< /example >}}

### Supra bar with actions

{{< anchor web-glh-sub-003 >}}

{{< example show_markup="true" class="p-0">}}
{{< orange-supra >}}
<ul class="navbar-nav ml-auto">
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
        <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
      </svg>
      <span class="visually-hidden">Search</span>
    </a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <svg fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
        <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      <span class="visually-hidden">Basket</span>
      <span class="position-relative">
        <span class="badge">
          1
          <span class="visually-hidden">shopping basket items</span>
        </span>
      </span>
    </a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link nav-icon">
      <img src="/docs/5.1/assets/img/navbar-contact.png" role="img" alt="User" loading="lazy" aria-hidden="true">
      <span class="visually-hidden">My account</span>
    </a>
  </li>
</ul>
{{< /orange-supra >}}
{{< /example >}}