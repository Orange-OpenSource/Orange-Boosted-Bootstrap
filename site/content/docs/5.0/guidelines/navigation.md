---
layout: guidelines
title: Navigation
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Components
toc: true
---

## Links

<div class="row gy-3 mt-4">
  <div class="col-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-4">
    <a href="#links" class="font-weight-bold" id="web-nav-lnk-003">Text link</a>
  </div>
  <div class="col-6">
    <h4 class="h6 m-0" id="web-nav-lnk-005">With chevrons</h4>

  {{< callout info >}}
  This feature will be delivered with [#182]({{< param repo >}}/issues/182).
  {{< /callout >}}
  </div>
</div>

## Tabs

<div class="mb-5">
  <ul class="nav nav-tabs" id="web-nav-tab-001">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#tabs">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#tabs" tabindex="-1" aria-disabled="true">Label</a>
    </li>
  </ul>
</div>

## Tabs light

<div class="mb-5">
  <ul class="nav nav-tabs nav-tabs-light" id="web-nav-tab-002">
    <li class="nav-item">
      <a class="nav-link active" href="#tabs-light" aria-current="page">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs-light">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs-light">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#tabs-light" tabindex="-1" aria-disabled="true">Label</a>
    </li>
  </ul>
</div>

## Pagination

<nav aria-label="Page navigation example" id="web-nav-pag-001">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#pagination" tabindex="-1" aria-disabled="true" aria-label="Previous"></a></li>
    <li class="page-item"><a class="page-link" href="#pagination">1</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">2</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">3</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">4</a></li>
    <li class="page-item active"><a class="page-link" href="#pagination" aria-current="page">5</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">6</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">7</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">8</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">9</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">10</a></li>
    <li class="page-item"><a class="page-link" href="#pagination" aria-label="Next"></a></li>
  </ul>
</nav>

## Accordion

<div class="row gy-3 row-cols-1 row-cols-lg-3">
  <div class="col" id="web-nav-acc-001">
    <h3 class="h6">Small</h3>
    <div class="accordion" id="accordionExample-3">
      <div class="card">
        <div class="card-header" id="headingOne-3">
          <h2 class="mb-0">
            <button class="btn btn-link btn-sm collapsed" type="button" data-toggle="collapse" data-target="#collapseOne-3" aria-expanded="false" aria-controls="collapseOne-3">Title</button>
          </h2>
        </div>
        <div id="collapseOne-3" class="collapse" aria-labelledby="headingOne-3" data-parent="#accordionExample-3">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo-3">
          <h2 class="mb-0">
            <button class="btn btn-link btn-sm collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo-3" aria-expanded="false" aria-controls="collapseTwo-3">Title</button>
          </h2>
        </div>
        <div id="collapseTwo-3" class="collapse" aria-labelledby="headingTwo-3" data-parent="#accordionExample-3">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree-3">
          <h2 class="mb-0">
            <button class="btn btn-link btn-sm" type="button" data-toggle="collapse" data-target="#collapseThree-3" aria-expanded="true" aria-controls="collapseThree-3">Title</button>
          </h2>
        </div>
        <div id="collapseThree-3" class="collapse show" aria-labelledby="headingThree-3" data-parent="#accordionExample-3">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col" id="web-nav-acc-002">
    <h3 class="h6">Medium</h3>
    <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Title</button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Title</button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">Title</button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="col" id="web-nav-acc-003">
    <h3 class="h6">Large</h3>
    <div class="accordion" id="accordionExample-4">
      <div class="card">
        <div class="card-header" id="headingOne-4">
        <h2 class="mb-0">
          <button class="btn btn-link btn-lg collapsed" type="button" data-toggle="collapse" data-target="#collapseOne-4" aria-expanded="false" aria-controls="collapseOne-4">Title</button>
        </h2>
      </div>
      <div id="collapseOne-4" class="collapse" aria-labelledby="headingOne-4" data-parent="#accordionExample-4">
        <p class="card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </p>
      </div>
    </div>
      <div class="card">
        <div class="card-header" id="headingTwo-4">
          <h2 class="mb-0">
            <button class="btn btn-link btn-lg collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo-4" aria-expanded="false" aria-controls="collapseTwo-4">Title</button>
          </h2>
        </div>
        <div id="collapseTwo-4" class="collapse" aria-labelledby="headingTwo-4" data-parent="#accordionExample-4">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree-4">
          <h2 class="mb-0">
            <button class="btn btn-link btn-lg" type="button" data-toggle="collapse" data-target="#collapseThree-4" aria-expanded="true" aria-controls="collapseThree-4">Title</button>
          </h2>
        </div>
        <div id="collapseThree-4" class="collapse show" aria-labelledby="headingThree-4" data-parent="#accordionExample-4">
          <p class="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

## Stepped process

{{< callout info >}}
This feature will be delivered with [#182]({{< param repo >}}/issues/182).
{{< /callout >}}
