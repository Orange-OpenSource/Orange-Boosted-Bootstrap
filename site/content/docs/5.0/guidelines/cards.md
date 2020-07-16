---
layout: guidelines
title: Cards
description: Cards provide a flexible and extensible content container with multiple variants and options.
group: guidelines
subgroup: Modules
toc: true
---

## Sizes

[Documentation]({{< docsref "/components/card" >}}#sizing)

<div class="row gy-3">
  <div class="col-lg-6">
    <div class="card">
      {{< placeholder width="100%" height="180" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer">
        <p class="card-text text-muted">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      {{< placeholder width="100%" height="140" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer">
        <p class="card-text text-muted">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col-lg-2">
    <div class="card small">
      {{< placeholder width="100%" height="90" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer">
        <p class="card-text text-muted">Meta data</p>
      </div>
    </div>
  </div>
</div>

{{< callout info >}}
Card sizes only rely on `width` for now, as explained in [cards documentation]({{< docsref "/components/card" >}}#sizing). Future release might introduce sizes variants…
{{< /callout >}}

## Filed black

[Documentation]({{< docsref "/components/card" >}}#card-styles)

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 gy-md-5">
  <div class="col">
    <p class="mb-1">{{< anchor web-crd-edt-001 >}}</p>
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <p class="mb-1">{{< anchor web-crd-edt-002 >}}</p>
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer bg-dark text-light">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
    <p class="mb-1">{{< anchor web-crd-edt-003 >}}</p>
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
    </div>
  </div>
  <div class="col">
    <p class="mb-1">{{< anchor web-crd-edt-004 >}}</p>
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer bg-dark text-light">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
{{< callout info >}}
The feature will be delivered with [#290]({{< param repo >}}/issues/290).
{{< /callout >}}
  </div>
  <div class="col">
    <p class="mb-1">{{< anchor web-crd-edt-006 >}}</p>
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body bg-dark text-white">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer bg-dark text-white pt-2">
        <a class="btn btn-dark border-white">Button</a>
      </div>
    </div>
  </div>
</div>

## Outlined on white

[Documentation]({{< docsref "/components/card" >}})

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 gy-md-5">
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
{{< callout info >}}
The feature will be delivered with [#290]({{< param repo >}}/issues/290).
{{< /callout >}}
  </div>
  <div class="col">
    <div class="card">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer pt-2">
        <a class="btn btn-secondary">Button</a>
      </div>
    </div>
  </div>
</div>

## Open on white

[Documentation]({{< docsref "/components/card" >}}#border)

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-3 gy-md-5">
  <div class="col">
    <div class="card border-0 p-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body">
        <h5 class="card-title">Title</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body px-0">
        <h5 class="card-title">Title</h5>
      </div>
      <div class="card-footer px-0">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body px-0">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body px-0">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer px-0">
        <p class="card-text">Meta data</p>
      </div>
    </div>
  </div>
  <div class="col">
{{< callout info >}}
The feature will be delivered with [#290]({{< param repo >}}/issues/290).
{{< /callout >}}
  </div>
  <div class="col">
    <div class="card border-0">
      {{< placeholder width="100%" height="150" class="card-img-top" text="Image cap" >}}
      <div class="card-body px-0">
        <h5 class="card-title">Title</h5>
        <p class="card-text font-weight-bold">Caption</p>
      </div>
      <div class="card-footer px-0 pt-2">
        <a class="btn btn-secondary">Button</a>
      </div>
    </div>
  </div>
</div>
