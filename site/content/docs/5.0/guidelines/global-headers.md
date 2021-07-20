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
<style>
  .navbar .nav-link {
    font-size: .875rem;
  }
</style>
<nav class="navbar navbar-dark bg-dark navbar-expand-md pt-0 d-none d-sm-block d-sm-none d-md-block lh-1">
  <div class="container">
      <div class="navbar-nav">
        <a href="#" class="nav-link active pb-1" aria-current="page">Personal</a>
        <a href="#" class="nav-link pb-1">Business</a>
      </div>
  </div>
</nav>
{{< /example >}}