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
        <a href="#" class="nav-link active pb-1 fs-7" aria-current="page">Personal</a>
        <a href="#" class="nav-link pb-1 fs-7">Business</a>
      </div>
  </div>
</nav>
{{< /example >}}

### Supra bar with language options

{{< anchor web-glh-sub-002 >}}

{{< example show_markup="true" class="p-0">}}
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container fs-7">
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
<nav class="navbar navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container fs-7">
    <div class="navbar-nav d-flex flex-row">
      <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
      <a class="nav-link pb-1" href="#">Business</a>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon svg-mail pb-1">
      <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
          <span class="visually-hidden">Search</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon svg-buy pb-1">
        <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
        <span class="visually-hidden">Basket</span>
        </a>
      </li>
      <li class="nav-item">
        <svg width="2em" height="2em" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.0/assets/img/boosted-search.svg"/></svg>
        <a href="#" class="nav-link nav-icon svg-avatar pb-1">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}
