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
<nav class="navbar navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container">
      <div class="navbar-nav">
        <a href="#" class="nav-link active pb-1 fs-7" aria-current="page">Personal</a>
        <a href="#" class="nav-link pb-1 fs-7">Business</a>
      </div>
  </div>
</nav>
{{< /example >}}
<main>
  <div class="container">
    <h2 id="suprabar">Supra bar</h2>
    <p>
      <strong>Supra bars are hidden on tablet and mobile devices.</strong>
      Based on viewport size, supra bar is hidden under <var>768px</var>.
    </p>
  </div>
  <div class="container">
    <h3 class="mt-5 h5">Supra bar with language options — <a id="web-glh-sub-002" class="ui-kit-id">web-glh-sub-002</a></h3>
  </div>
  <nav role="navigation" class="navbar navbar-dark bg-dark navbar-expand-md pt-0">
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
</main>
