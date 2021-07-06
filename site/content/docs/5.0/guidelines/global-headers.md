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
<nav class="navbar supra navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container fs-7">
    <div class="navbar-nav d-flex flex-row">
      <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
      <a class="nav-link pb-1" href="#">Business</a>
    </div>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
            <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
          </svg>
          <span class="visually-hidden">Search</span>
        </a>
      </li> 
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
            <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
          </svg>
          <span class="visually-hidden">Basket</span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-0">
          <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}
  <div class="container">
    <h2 id="navbar" class="mt-5">Headers (Navbar)</h2>
    <h3 class="mt-5 h5">Global header standard — <a id="web-glh-stn-001" class="ui-kit-id">web-glh-stn-001</a></h3>
  </div>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
    <div class="container-lg">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-standard" aria-controls="global-header-standard" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="global-header-standard" style="height: auto;">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <h3 class="mt-5 h5">Global header minimised — <a id="web-glh-min-001" class="ui-kit-id">web-glh-min-001</a></h3>
  </div>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md pt-0">
    <div class="container-lg">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <ul class="navbar-nav d-md-none flex-row">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-minified" aria-controls="global-header-minified" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="mega-menu navbar-collapse collapse bg-dark" id="global-header-minified" style="height: auto;">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container">
    <h3 class="mt-5 h5">
      Global header with title — <a id="web-glh-tni-001" class="ui-kit-id">web-glh-tni-001</a>
    </h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="30" height="50" role="img" alt="Boosted" loading="lazy">
          <span id="title" class="h2">Title</span>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title" aria-controls="global-header-title" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-between collapse" id="global-header-title">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
        <ul class="navbar-nav d-none d-md-flex">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div class="container">
    <h3 class="mt-5 h5">Global header with title on two lines — <a id="web-glh-tni-002" class="ui-kit-id">web-glh-tni-002</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="two-line-title">
            <span class="align-self-end">Title Line 1<br>Title Line 2</span>
          </h2>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-0">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
    <h2 id="suprabar">Supra bar</h2>
    <p>
      <strong>Supra bars are hidden on tablet and mobile devices.</strong>
      Based on viewport size, supra bar is hidden under <var>768px</var>.
    </p>
  </div>
  <div class="container">
    <h2 id="navbar" class="mt-5">Headers (Navbar)</h2>
  </div>
  <div class="container">
    <h3 class="mt-5 h5">Global header with title and navigation bar — <a id="web-glh-tni-003" class="ui-kit-id">web-glh-tni-003</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <span id="title-2" class="h2">Title</span>
        </a>
        <ul class="navbar-nav ml-auto d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title-nav" aria-controls="global-header-title-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ml-auto d-none d-md-flex">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-0">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-0">
              <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-two-line" aria-controls="global-header-two-line" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="global-header-two-line">
        </ul>
      </div>
    </nav>
    <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
      <hr class="w-100 m-0 d-none d-md-block border-700">
      <div class="container-lg border-bottom">
        <div class="navbar-collapse collapse" id="global-header-title-nav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
        <ul class="navbar-nav d-none d-md-flex">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-2">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-0">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.0/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon pt-1 pb-0">
              <img src="/docs/5.0/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  </header>
