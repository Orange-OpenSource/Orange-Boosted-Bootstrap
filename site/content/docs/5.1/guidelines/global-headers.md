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

## Global Headers (Navbars)

### Global header standard

{{< anchor web-glh-stn-001 >}}

{{< example show_markup="true" class="p-0">}}
<nav class="navbar navbar-dark bg-dark navbar-expand-md">
  <div class="container-lg">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
    </a>
    <div class="d-flex">    
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon position-relative">
            <span class="position-relative">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                1
                <span class="visually-hidden">shopping basket items</span>
              </span>
            </span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-standard" aria-controls="global-header-standard" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>      
    </div>
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
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white  mt-1">
              1
              <span class="visually-hidden">shopping basket items</span>
            </span>
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link nav-icon pt-1 pb-2">
          <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

### Global header minimised

{{< anchor web-glh-min-001>}}

{{< example show_markup="true" class="p-0">}}
<nav class="navbar navbar-dark bg-dark navbar-expand-md header-minimised pt-2 pb-0">
  <div class="container-lg">
    <a class="navbar-brand pt-1" href="#">
      <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
    </a>
    <div class="d-flex">    
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon position-relative">
            <span class="position-relative">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
              </svg>
              <span class="visually-hidden">Basket</span>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                1
                <span class="visually-hidden">shopping basket items</span>
              </span>
            </span>            
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-minified" aria-controls="global-header-minified" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
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
        <a href="#" class="nav-link nav-icon pt-1 pb-2">
          <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
        <span class="visually-hidden">My account</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

### Global header with title

{{< anchor web-glh-tni-001 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="30" height="50" role="img" alt="Boosted" loading="lazy">
        <span id="title" class="h2">Title</span>
      </a>
      <div class="d-flex">    
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>              
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title" aria-controls="global-header-title" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
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
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
{{< /example >}}

### Global header with title on two lines

{{< anchor web-glh-tni-002 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <h2 class="h4" id="two-line-title">
          <span class="align-self-end">Title Line 1<br>Title Line 2</span>
        </h2>
      </a>
      <div class="d-flex">    
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>                
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-two-line" aria-controls="global-header-two-line" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse" id="global-header-two-line">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-md-flex pb-1">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
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
</header>
{{< /example >}}

### Global header with title and navigation bar

{{< anchor web-glh-tni-003 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <span id="title-2" class="h2">Title</span>
      </a>
      <div class="d-flex">    
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>                
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title-nav" aria-controls="global-header-title-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <ul class="navbar-nav ml-auto d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
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
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
    <div class="container-lg border-bottom">
      <div class="navbar-collapse collapse pb-1" id="global-header-title-nav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Global header with title on two lines and navigation bar

{{< anchor web-glh-tni-004 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <h2 class="h4" id="two-line-title-2">
          <span class="align-self-end">Title Line 1<br>Title Line 2</span>
        </h2>
      </a>
      <div class="d-flex">    
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon position-relative">
              <span class="position-relative">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                  <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#buy"/>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-white">
                  1
                  <span class="visually-hidden">shopping basket items</span>
                </span>
              </span>                
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-title-nav-2" aria-controls="global-header-title-nav-2" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <ul class="navbar-nav ml-auto d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
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
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>    
  <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
    <div class="container-lg border-bottom">
      <div class="navbar-collapse collapse pb-1" id="global-header-title-nav-2">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
{{< /example >}}

### Global header standard with search box

{{< anchor web-glh-nsc-001 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
          <span class="visually-hidden">Search bar</span>
          </button>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-search" aria-controls="global-header-search" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse justify-content-between collapse" id="global-header-search">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-md-flex pb-1">
        <li class="nav-item">
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
          <span class="visually-hidden">Search bar</span>
          </button>
        </li>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
      </ul>
    </div>
  </nav>
  <div class="collapse bg-dark" id="search-9">
    <form class="container-lg d-flex py-3" role="search">
      <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
      <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
    </form>
  </div>
</header>
{{< /example >}}

## OBS Headers

### OBS global header standard

{{< anchor web-glh-obs-001 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap flex-md-nowrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <h2 class="h4" id="obs-1">
          <span>Business</span><br>Services
        </h2>
      </a>
      <div class="d-flex">
        <ul class="navbar-nav ml-auto d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#obs-global-header" aria-controls="obs-global-header" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse justify-content-end collapse" id="obs-global-header">
        <ul class="navbar-nav ml-auto">
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
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</header>
{{< /example >}}

### OBS Global header standard with navigation bar

{{< anchor web-glh-obs-002 >}}

{{< example show_markup="true" class="p-0">}}
<header>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md">
    <div class="container-lg flex-sm-wrap">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.1/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
        <h2 class="h4" id="obs-2">
          <span>Business</span><br>Services
        </h2>
      </a>
      <div class="d-flex">
        <ul class="navbar-nav ml-auto d-md-none flex-row ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
                <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
              </svg>
              <span class="visually-hidden">Search</span>
            </a>
          </li> 
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon">
              <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#obs-header-nav" aria-controls="obs-header-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible">
              <use xlink:href="/docs/5.1/assets/img/boosted-sprite.svg#search"/>
            </svg>
            <span class="visually-hidden">Search</span>
          </a>
        </li> 
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon pt-1 pb-2">
            <img src="/docs/5.1/assets/img/navbar-contact.png" width="25" height="25" role="img" alt="User" loading="lazy">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>    
  <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
    <div class="container-lg border-bottom">
      <div class="navbar-collapse collapse pb-1" id="obs-header-nav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        </ul>
      </div>
    </div>
  </div>
</header>
{{< /example >}}
