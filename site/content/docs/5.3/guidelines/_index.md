---
layout: single
title: Orange Design System for web
description: Streamline your workflow and improve experience consistency with this cross-platform, scalable and inspiring design system. Designers, developers, marketers and partners, start your digital creations from the ready-to-use resources here!
aliases:
  - "/guidelines/"
  - "/docs/guidelines/"
---

<div class="ods-guidelines py-4 mt-md-2">
  <div class="container-xxl">
    <h2 class="h1">Other platforms in Orange Design System</h2>
    <ul class="row pt-3 list-unstyled">
      {{< design-guidelines-cards.inline >}}
      {{ range (index $.Site.Data "design-guidelines") -}}
      <li class="col-6 col-md-4 col-lg-3 col-xxl-2">
        <div class="card border-1 mb-2 mb-md-3 mb-lg-0">
          <img class="card-img-top" src="/docs/{{ $.Site.Params.docs_version }}/{{.image}}" alt="">
          <div class="card-body ps-2 pt-2">
            <a href="{{.link}}" class="stretched-link text-decoration-none h4" aria-label="{{.description}}" title="{{.description}}" target="_blank" rel="noopener">{{.name}}</a>
          </div>
        </div>
      </li>
      {{ end -}}
      {{< /design-guidelines-cards.inline >}}
    </ul>
  </div>
</div>
