---
layout: docs
title: Dark mode helper
description: Dark mode page helping to debug dark mode
aliases: "/dark-mode/"
toc: true
robots: noindex,follow
sitemap_exclude: true
---

## CSS variables

<div class="d-flex flex-column gap-2">
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-body-bg</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-body-bg)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-body-bg)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-body-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-body-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-body-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-highlight-bg</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-highlight-bg)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-highlight-bg)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-highlight-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-highlight-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-highlight-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-secondary-bg</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-secondary-bg)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-secondary-bg)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-border-color-translucent</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-border-color-translucent)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-border-color-translucent)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-secondary-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-secondary-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-secondary-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-link-hover-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-link-hover-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-link-hover-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-primary</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-primary)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-primary)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-success</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-success)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-success)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-info</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-info)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-info)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-warning</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-warning)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-warning)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-danger</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-danger)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-danger)" data-bs-theme="dark"></div>
  </div>
</div>

## Accordions

### No theme

<div class="border border-tertiary p-3">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1"
                aria-expanded="true" aria-controls="collapseOne1">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Local dark theme

<div class="border border-tertiary p-3" data-bs-theme="dark">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2"
                aria-expanded="true" aria-controls="collapseOne2">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Local light theme

<div class="border border-tertiary p-3" data-bs-theme="light">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3"
                aria-expanded="true" aria-controls="collapseOne3">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne3" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Dark background

Using bg-dark

<div class="border border-tertiary p-3 bg-dark">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4"
                aria-expanded="true" aria-controls="collapseOne4">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne4" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>


### Light background

Using bg-white

<div class="border border-tertiary p-3 bg-white">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5"
                aria-expanded="true" aria-controls="collapseOne5">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne5" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo5" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Custom dark background

Using dark theme

<div class="border border-tertiary p-3" style="background-color: #492191" data-bs-theme="dark">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6"
                aria-expanded="true" aria-controls="collapseOne6">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne6" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo6" aria-expanded="false" aria-controls="collapseTwo6">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo6" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Custom light background

Using light theme

<div class="border border-tertiary p-3" style="background-color: #FFF6B6" data-bs-theme="light">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7"
                aria-expanded="true" aria-controls="collapseOne7">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne7" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseTwo7" aria-expanded="false" aria-controls="collapseTwo7">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo7" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

## Alerts

### No theme

<div class="border border-tertiary p-3">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Local dark theme

<div class="border border-tertiary p-3" data-bs-theme="dark">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Local light theme

<div class="border border-tertiary p-3" data-bs-theme="light">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Dark background

Using bg-dark

<div class="border border-tertiary p-3 bg-dark">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Light background

Using bg-white

<div class="border border-tertiary p-3 bg-white">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Custom dark background

Using dark theme

<div class="border border-tertiary p-3" style="background-color: #492191" data-bs-theme="dark">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Custom light background

Using light theme

<div class="border border-tertiary p-3" style="background-color: #FFF6B6" data-bs-theme="light">
  <div class="alert alert-success" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>


