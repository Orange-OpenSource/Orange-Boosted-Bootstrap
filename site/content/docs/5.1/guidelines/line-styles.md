---
layout: guidelines
title: Line styles
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Core elements
toc: true
---

Lines styles are used in some components, and through [`border` utilities]({{< docsref "/utilities/borders" >}}).

## Outline

<div class="row gy-3 row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-center my-3">
  <div class="col bg-dark p-1">
    <svg class="border border-white img-fluid" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect fill="#000" width="100" height="100"/>
    </svg>
  </div>
  {{< border.inline >}}
  {{- range (index $.Site.Data "theme-colors") }}
    <div class="col p-1">
      <svg class="border border-{{ .name }} img-fluid" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <rect fill="#fff" width="100" height="100"/>
      </svg>
    </div>
  {{- end -}}
  {{< /border.inline >}}
</div>

## Dividers

<div class="bg-dark p-1 my-3">
  <div class="border-top border-white"></div>
</div>
<div class="border-top border-dark my-3"></div>
<div class="border-top border-light my-3"></div>
<div class="border-top border-light border-1 my-3"></div>
<div class="border-top border-dark my-3"></div>
<div class="border-top border-dark border-1 mt-3 mb-4"></div>


{{< callout >}}
### Using `<hr>`

Please note that if you want to achieve dividers by using the `<hr>` element, you'll need to add `.bg-transparent` utility to unset its `background`.
{{< /callout >}}
