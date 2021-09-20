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
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container">
      <div class="navbar-nav">
        <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
        <a href="#" class="nav-link pb-1">Business</a>
      </div>
  </div>
</nav>
{{< /example >}}

### Supra bar with language options

{{< anchor web-glh-sub-002 >}}

{{< example show_markup="true" class="p-0">}}
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container">
    <div class="navbar-nav d-flex flex-row">
      <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
      <a class="nav-link pb-1" href="#">Business</a>
    </div>
    <div class="navbar-nav d-flex flex-row">
        <a class="nav-link active pb-1" href="#" aria-label="English version">EN</a>
        <a class="nav-link ml-1 pb-1" href="#" aria-label="Version française" lang="fr" hreflang="fr">FR</a>
        <a class="nav-link ml-1 pb-1" href="#" aria-label="Version en español" lang="es" hreflang="es">ES</a>
    </div>
  </div>
</nav>
{{< /example >}}

### Supra bar with actions

{{< anchor web-glh-sub-003 >}}

{{< example show_markup="true" class="p-0">}}
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container">
    <div class="navbar-nav d-flex flex-row">
      <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
      <a class="nav-link pb-1" href="#">Business</a>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
            <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
          </svg>
          <span class="visually-hidden">Search</span>
        </a>
      </li> 
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0 position-relative">
          <span class="position-relative">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white mt-1">
              1
              <span class="visually-hidden">shopping basket items</span>
            </span>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}