---
layout: guidelines
title: Buttons
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Components
toc: true
---

## Sizes

<div class="row row-cols-lg-3 align-items-center">
  <div class="col">
    <h3 class="h6">Small</h3>
    <button type="button" class="btn btn-secondary btn-sm">Button</button>
  </div>
  <div class="col">
    <h3 class="h6">Medium</h3>
    <button type="button" class="btn btn-secondary">Button</button>
  </div>
  <div class="col">
    <h3 class="h6">Large</h3>
    <button type="button" class="btn btn-secondary btn-lg">Button</button>
  </div>
</div>


## Styles

<div class="row row-cols-3 row-cols-lg-6 gy-3 mt-4">
  <div class="col-12 col-lg-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary" id="web-btn-sol-001">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info" id="web-btn-sfl-001">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary" id="web-btn-imp-001">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success" id="web-btn-pos-001">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger" id="web-btn-neg-001">Button</button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Pressed</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger active">Button</button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-secondary">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-info">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-primary">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-success">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-danger">Button</button>
  </div>
</div>

## Icon buttons

{{< callout info >}}
This feature will be delivered with [#182]({{< param repo >}}/issues/182).
{{< /callout >}}

## Toggle Buttons

<div class="row gy-3 mt-4">
  <div class="col-12 col-lg-2">
    <h3 class="h6">Selected</h3>
  </div>
  <div class="col-12 col-lg-4">
    <div class="btn-group" id="web-btn-tog-001">
      <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
      <label class="btn" for="option1">Day</label>
      <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
      <label class="btn" for="option2">Week</label>
      <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
      <label class="btn" for="option3">Month</label>
    </div>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons</h4>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons, borderless</h4>
  </div>
  <div class="col-12 col-lg-6 offset-lg-6 my-0">
    <div class="bd-callout bd-callout-info my-0">

  This feature will be delivered with [#182]({{< param repo >}}/issues/182).

  </div>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col-12 col-lg-4">
    <div class="btn-group">
      <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" disabled>
      <label class="btn" for="option4">Day</label>
      <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" disabled>
      <label class="btn" for="option5">Week</label>
      <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" disabled>
      <label class="btn" for="option6">Month</label>
    </div>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons</h4>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons, borderless</h4>
  </div>
  <div class="col-12 col-lg-6 offset-lg-6 my-0">
    <div class="bd-callout bd-callout-info my-0">

  This feature will be delivered with [#182]({{< param repo >}}/issues/182).

  </div>
  </div>
</div>

## Split buttons

<div class="row gy-3 mt-4">
  <div class="col-3">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-9">
    <div class="btn-group" id="web-btn-spt-001">
      <button type="button" class="btn btn-secondary">Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
  <div class="col-3">
    <h3 class="h6">Active</h3>
  </div>
  <div class="col-9">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary active">Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
  <div class="col-3">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col-9">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary" disabled>Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false" disabled>
        <span class="sr-only">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>

## Pagination

<div class="row row-cols-1 row-cols-lg-2">
  <div class="col">

  ### With labels

  <nav aria-label="Page navigation example" id="web-btn-pag-001">
    <ul class="pagination">
      <li class="page-item"><a class="page-link has-label" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link has-label" href="#">Next</a></li>
    </ul>
  </nav>
  </div>
  <div class="col">

  ### With icons

  <nav aria-label="Page navigation example with icons" id="web-btn-pag-002">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
    </ul>
  </nav>
  </div>
</div>

## Back top top

{{< callout info >}}
This feature will be delivered with [#290]({{< param repo >}}/issues/290).
{{< /callout >}}

## Social buttons

{{< callout info >}}
This feature will be delivered with [#290]({{< param repo >}}/issues/290).
{{< /callout >}}
