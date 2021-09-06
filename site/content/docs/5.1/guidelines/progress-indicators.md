---
layout: guidelines
title: Progress indicators
description: Indicate the loading state of a component or page with Boosted spinners or progress bars.
group: guidelines
subgroup: Components
toc: true
---

## Spinners

[Documentation]({{< docsref "/components/spinners" >}})&nbsp;—&nbsp;{{< anchor web-prg-spn-001 >}}

<div class="row row-cols-3 row-cols-md-4 gy-3">
  <div class="col">
    <div class="spinner-border spinner-border-lg text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="col text-center text-md-start">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="col text-center text-md-start">
    <div class="spinner-border spinner-border-sm text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="w-100 d-none d-md-block"></div>
  <div class="col">
    <div class="spinner-border spinner-border-lg text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="col text-center text-md-start">
    <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="col text-center text-md-start">
    <div class="spinner-border spinner-border-sm text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</div>

## Progress bars

[Documentation]({{< docsref "/components/progress" >}})&nbsp;—&nbsp;{{< anchor web-prg-pbr-001 >}}

<div class="progress mb-3">
  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-sm mb-3">
  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress progress-xs">
  <div class="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
