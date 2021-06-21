---
layout: guidelines
title: Global headers
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Modules
toc: true
---

<main>
  <div class="container">
    <h2 id="suprabar">Supra bar</h2>
    <p>
      <strong>Supra bars are hidden on tablet and mobile devices.</strong>
      Based on viewport size, supra bar is hidden under <var>768px</var>.
    </p>
    <h3 class="mt-5 h5">Supra bar standard — <a id="web-glh-sub-001" class="ui-kit-id">web-glh-sub-001</a></h3>
  </div>
  <nav role="navigation" class="navbar navbar-dark bg-dark navbar-expand-md pt-0">
    <div class="container">
        <div class="navbar-nav">
          <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
          <a class="nav-link pb-1" href="#">Business</a>
        </div>
    </div>
  </nav>
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
  <div class="container">
    <h3 class="mt-5 h5" id="web-glh-sub-003">Supra bar with actions — <a id="web-glh-sub-003" class="ui-kit-id">web-glh-sub-003</a></h3>
  </div>
  <!-- WIP -->
  <nav role="navigation" class="navbar navbar-dark bg-dark navbar-expand-md pt-0">
    <div class="container">
      <div class="navbar-nav d-flex flex-row">
        <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
        <a class="nav-link pb-1" href="#">Business</a>
      </div>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-mail pb-1">
          <span class="sr-only">Mail</span>
          <sup class="badge badge-lg badge-info rounded-pill">25</sup>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy pb-1">
          <span class="sr-only">Basket</span>
          <sup class="badge badge-lg badge-info rounded-pill">3</sup>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar pb-1">
          <span class="sr-only">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
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
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-1" aria-expanded="false" aria-controls="search-1">
          <span class="sr-only">Search bar</span>
          </button>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-mail">
          <span class="sr-only">Email</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy">
          <span class="sr-only">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="sr-only">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar3" aria-controls="collapsing-navbar3" aria-expanded="false" aria-label="Toggle navigation">
      <span aria-hidden="true" class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="collapsing-navbar3" style="height: auto;">
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
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-1" aria-expanded="false" aria-controls="search-1">
          <span class="sr-only">Search bar</span>
          </button>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy">
          <span class="sr-only">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="sr-only">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="bg-dark collapse" id="search-1" style="">
    <form class="container-lg d-flex py-3" role="search">
      <input type="search" class="form-control form-control-lg" placeholder="Search" aria-label="Search">
      <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
    </form>
  </div>
  <div class="container">
    <h3 class="mt-5 h5">Global header minimised — <a id="web-glh-min-001" class="ui-kit-id">web-glh-min-001</a></h3>
  </div>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
    <div class="container-lg">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-2" aria-expanded="false" aria-controls="search-2">
          <span class="sr-only">Search bar</span>
          </button>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy">
          <span class="sr-only">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="sr-only">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar13" aria-controls="collapsing-navbar13" aria-expanded="false" aria-label="Toggle navigation">
      <span aria-hidden="true" class="navbar-toggler-icon"></span>
      <span aria-hidden="true" class="font-weight-bold pl-1">Menu</span>
      </button>
      <div class="mega-menu navbar-collapse collapse bg-dark" id="collapsing-navbar13" style="height: auto;">
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
          <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-2" aria-expanded="false" aria-controls="search-2">
          <span class="sr-only">Search bar</span>
          </button>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-buy">
          <span class="sr-only">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="sr-only">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="collapse bg-dark" id="search-2">
    <form class="container-lg d-flex py-3" role="search">
      <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
      <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
    </form>
  </div>
  <div class="container">
    <h3 class="mt-5 h5">
      Global header with title — <a id="web-glh-tni-001" class="ui-kit-id">web-glh-tni-001</a>
    </h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <span id="title" class="h2">Title</span>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-6" aria-expanded="false" aria-controls="search-6">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar6" aria-controls="collapsing-navbar6" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-between collapse" id="collapsing-navbar6">
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
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-6" aria-expanded="false" aria-controls="search-6">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="collapse bg-dark" id="search-6">
      <form class="container-lg d-flex py-3" role="search">
        <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
        <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
      </form>
    </div>
  </header>
  <div class="container">
    <h3 class="mt-5 h5">Global header with title on two lines — <a id="web-glh-tni-002" class="ui-kit-id">web-glh-tni-002</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <span class="align-self-end" id="two-line-title">Title Line 1<br>Title Line 2</span>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-8" aria-expanded="false" aria-controls="search-8">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar8" aria-controls="collapsing-navbar8" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsing-navbar8">
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
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-8" aria-expanded="false" aria-controls="search-8">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="collapse bg-dark" id="search-8">
      <form class="container-lg d-flex py-3" role="search">
        <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
        <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
      </form>
    </div>
  </header>
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
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-7" aria-expanded="false" aria-controls="search-7">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler d-block d-md-none mb-md-0 mt-md-auto ml-2 ml-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar5" aria-controls="collapsing-navbar5" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ml-auto d-none d-md-flex">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-7" aria-expanded="false" aria-controls="search-7">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
      <hr class="w-100 m-0 d-none d-md-block border-700">
      <div class="container-lg border-bottom">
        <div class="navbar-collapse collapse" id="collapsing-navbar5">
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
    <div class="collapse bg-dark" id="search-7">
      <form class="container-lg d-flex py-3" role="search">
        <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
        <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
      </form>
    </div>
  </header>
  <div class="container">
    <h3 class="mt-5 h5">Global header with title on two lines and navigation bar — <a id="web-glh-tni-004" class="ui-kit-id">web-glh-tni-004</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap justify-content-start">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <span class="align-self-end" id="two-line-title-2">Title Line 1<br>Title Line 2</span>
        </a>
        <button class="navbar-toggler d-sm-block d-md-none mb-md-0 mt-md-auto ml-auto ml-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar12" aria-controls="collapsing-navbar12" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav d-none d-md-flex ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-search">
            <span class="sr-only">Search bar</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="sr-only">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
      <hr class="w-100 m-0 d-none d-md-block border-700">
      <div class="container-lg border-bottom">
        <div class="navbar-collapse collapse" id="collapsing-navbar12">
          <ul class="navbar-nav">
            <li class="nav-item d-md-none">
              <a href="#" class="nav-link nav-icon svg-search">
              <span class="sr-only">Search bar</span>
              </a>
            </li>
            <li class="nav-item d-md-none">
              <a href="#" class="nav-link nav-icon svg-buy">
              <span class="sr-only">Basket</span>
              </a>
            </li>
            <li class="nav-item d-md-none">
              <a href="#" class="nav-link nav-icon svg-avatar">
              <span class="sr-only">My account</span>
              </a>
            </li>
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
  <div class="container">
    <h3 class="mt-5 h5">OBS global header standard — <a id="web-glh-obs-001" class="ui-kit-id">web-glh-obs-001</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="obs-1">
            <span class="sr-only">Business</span><br>Services
          </h2>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar9" aria-controls="collapsing-navbar9" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-between collapse" id="collapsing-navbar9">
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
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
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
  <div class="container">
    <h3 class="mt-5 h5">OBS Global header standard with navigation bar — <a id="web-glh-obs-002" class="ui-kit-id">web-glh-obs-002</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap justify-content-start">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="obs-2">
            <span class="sr-only">Business</span><br>Services
          </h2>
        </a>
        <button class="navbar-toggler d-sm-block d-md-none mb-md-0 mt-md-auto ml-auto ml-md-3 collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar11" aria-controls="collapsing-navbar11" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav d-none d-md-flex ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-search">
            <span class="sr-only">Search bar</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="sr-only">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="navbar navbar-dark bg-dark navbar-expand-md bg-dark flex-sm-wrap p-0">
      <hr class="w-100 m-0 d-none d-md-block border-700">
      <div class="container-lg border-bottom">
        <div class="navbar-collapse collapse" id="collapsing-navbar11">
          <ul class="navbar-nav">
            <li class="nav-item d-md-none">
              <a href="#" class="nav-link nav-icon svg-search">
              <span class="sr-only">Search bar</span>
              </a>
            </li>
            <li class="nav-item d-md-none">
              <a href="#" class="nav-link nav-icon svg-avatar">
              <span class="sr-only">My account</span>
              </a>
            </li>
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
  <div class="container">
    <h3 class="mt-5 h5">Global header standard with search box — <a id="web-glh-obs-002" class="ui-kit-id">web-glh-nsc-001</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="obs-3">
            <span class="sr-only">Business</span><br>Services
          </h2>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
        </ul>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar9" aria-controls="collapsing-navbar9" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-between collapse" id="collapsing-navbar9">
          <ul class="navbar-nav ml-auto">
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
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-9" aria-expanded="false" aria-controls="search-9">
            <span class="sr-only">Search bar</span>
            </button>
          </li>
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
</main>