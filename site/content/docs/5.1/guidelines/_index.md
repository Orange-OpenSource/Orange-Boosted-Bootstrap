---
layout: guidelines
title: Orange Design System for web
description: Streamline your workflow and improve experience consistency with this cross-platform, scalable and inspiring design system. Designers, developers, marketers and partners, start your digital creations from the ready-to-use resources here!
aliases: "/guidelines/"
---

<style>
  .card-hover::before {
    height: 4px;
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
    content: "";
    background-color: transparent;
  }

  .card-hover:hover::before {
    background-color: #f16e00;
  }
</style>

<div style="background-color: var(--bs-gray-300);" class="p-4">
  <div class="container">
    <h2 class="h1">Other platforms in the Orange Design System</h2>
    <div class="row pt-3">
      <div class="col-2">
        <div class="card border-1">
          <img class="card-img-top" src="/docs/{{< param docs_version >}}/assets/img/platforms/android.png" alt="illustration">
          <div class="card-body ps-2 pt-2">
            <a href="{{< param ods.android >}}" class="stretched-link text-decoration-none h4 text-body card-hover">Android</a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card border-1">
          <img class="card-img-top" src="/docs/{{< param docs_version >}}/assets/img/platforms/iOS.png" alt="illustration">
          <div class="card-body ps-2 pt-2">
            <a href="{{< param ods.iOS >}}" class="stretched-link text-decoration-none h4 text-body card-hover">iOS</a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card border-1">
          <img class="card-img-top" src="/docs/{{< param docs_version >}}/assets/img/platforms/extended-reality.png" alt="illustration">
          <div class="card-body ps-2 pt-2">
            <a href="{{< param ods.extended_reality >}}" class="stretched-link text-decoration-none h4 text-body card-hover">Extended reality</a>
          </div>
        </div>
      </div>
      <div class="col-2">
        <div class="card border-1">
          <img class="card-img-top" src="/docs/{{< param docs_version >}}/assets/img/platforms/conversational.png" alt="illustration">
          <div class="card-body ps-2 pt-2">
            <a href="{{< param ods.conversational >}}" class="stretched-link text-decoration-none h4 text-body card-hover">Conversational</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
