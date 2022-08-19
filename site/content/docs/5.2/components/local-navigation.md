---
layout: docs
title: Local navigation
description: Use Boosted's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
---

## Example

{{< example >}}
<nav class="dropdown nav-local">
  <div class="container-xxl px-lg-0">
    <button type="button" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-10,0">
      Label
    </button>
    <div class="dropdown-menu">
      <div class="navbar navbar-expand-lg">
        <div class="container-xxl">
          <ul class="navbar-nav">
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
<nav class="dropdown nav-local nav-local-dark bg-dark">
  <div class="container-xxl px-lg-0">
    <button type="button" class="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="-10,0">
      Label
    </button>
    <div class="dropdown-menu bg-dark">
      <div class="navbar navbar-dark navbar-expand-lg">
        <div class="container-xxl">
          <ul class="navbar-nav">
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
