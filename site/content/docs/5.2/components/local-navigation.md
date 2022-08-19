---
layout: docs
title: Local navigation
description: Use Boosted's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
---

## Example

{{< example >}}
<nav class="accordion nav-local">
  <div class="accordion-item">
    <div class="accordion-header d-lg-none container-xxl border-0" id="headingLocalNav">
      <button class="accordion-button collapsed fs-6 lh-base" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav" aria-expanded="false" aria-controls="collapseLocalNav">
        Label
      </button>
    </div>
    <div id="collapseLocalNav" class="accordion-collapse collapse" aria-labelledby="headingLocalNav">
      <div class="navbar navbar-expand-lg">
        <div class="container-xxl">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

## Dark variant

{{< example class="bg-dark" >}}
<nav class="accordion nav-local nav-local-dark">
  <div class="accordion-item">
    <div class="accordion-header d-lg-none container-xxl border-0" id="headingLocalNavDark">
      <button class="accordion-button collapsed fs-6 lh-base" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNavDark" aria-expanded="false" aria-controls="collapseLocalNavDark">
        Label
      </button>
    </div>
    <div id="collapseLocalNavDark" class="accordion-collapse collapse" aria-labelledby="headingLocalNavDark">
      <div class="navbar navbar-expand-lg">
        <div class="container-xxl">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
{{< /example >}}

## CSS

### Variables

### Sass variables
