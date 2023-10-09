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
    <div style="width: 200px">--bs-link-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-link-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-link-color)" data-bs-theme="dark"></div>
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
Additional variables for dark-mode (temporary)
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-hover-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-hover-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-hover-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-active-bg</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-active-bg)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-active-bg)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-disabled-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-disabled-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-disabled-color)" data-bs-theme="dark"></div>
  </div>
</div>

## Components

### Accordions

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <div class="accordion" id="accordionExample1">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1"
                aria-expanded="true" aria-controls="collapseOne1">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
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
      <div id="collapseTwo1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
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

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="accordion" id="accordionExample2">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2"
                aria-expanded="true" aria-controls="collapseOne2">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
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
      <div id="collapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
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

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="accordion" id="accordionExample3">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3"
                aria-expanded="true" aria-controls="collapseOne3">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne3" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
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
      <div id="collapseTwo3" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
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

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55">
  <div class="accordion" id="accordionExample6" data-bs-theme="dark">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6"
                aria-expanded="true" aria-controls="collapseOne6">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne6" class="accordion-collapse collapse show" data-bs-parent="#accordionExample6">
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
      <div id="collapseTwo6" class="accordion-collapse collapse" data-bs-parent="#accordionExample6">
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

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="accordion" id="accordionExample7" data-bs-theme="light">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7"
                aria-expanded="true" aria-controls="collapseOne7">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne7" class="accordion-collapse collapse show" data-bs-parent="#accordionExample7">
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
      <div id="collapseTwo7" class="accordion-collapse collapse" data-bs-parent="#accordionExample7">
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

### Alerts

<h4 class="mt-3">No theme</h4>

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

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
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

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
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

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55">
  <div class="alert alert-success" role="alert" data-bs-theme="dark">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert" data-bs-theme="dark">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert" data-bs-theme="dark">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert" data-bs-theme="dark">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="alert alert-success" role="alert" data-bs-theme="light">
    <span class="alert-icon"><span class="visually-hidden">Success</span></span>
    <p>Success notification text goes here.</p>
  </div>
  <div class="alert alert-info" role="alert" data-bs-theme="light">
    <span class="alert-icon"><span class="visually-hidden">Info</span></span>
    <p>Information notification text goes here.</p>
  </div>
  <div class="alert alert-warning" role="alert" data-bs-theme="light">
    <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
    <p>Warning notification text goes here.</p>
  </div>
  <div class="alert alert-danger" role="alert" data-bs-theme="light">
    <span class="alert-icon"><span class="visually-hidden">Error</span></span>
    <p>Error notification text goes here.</p>
  </div>
</div>

### Stepped process

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <nav class="stepped-process" aria-label="Checkout process">
    <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
    <ol>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
      </li>
      <li class="stepped-process-item active">
        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
      </li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <nav class="stepped-process" aria-label="Checkout process">
    <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
    <ol>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
      </li>
      <li class="stepped-process-item active">
        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
      </li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <nav class="stepped-process" aria-label="Checkout process">
    <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
    <ol>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
      </li>
      <li class="stepped-process-item active">
        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
      </li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <nav class="stepped-process" aria-label="Checkout process" data-bs-theme="dark" style="--bs-stepped-process-bg: #282d55;">
    <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
    <ol>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
      </li>
      <li class="stepped-process-item active">
        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
      </li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <nav class="stepped-process" aria-label="Checkout process" data-bs-theme="light" style="--bs-stepped-process-bg: #b5e8f7;">
    <p class="float-start mt-2 me-2 fw-bold d-sm-none">Step</p>
    <ol>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="1. Sign in">Sign in</a>
      </li>
      <li class="stepped-process-item active">
        <a class="stepped-process-link" title="2. Review" aria-current="step">Review</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="3. Delivery">Delivery</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="4. Payment">Payment</a>
      </li>
      <li class="stepped-process-item">
        <a class="stepped-process-link" href="#" title="5. Place order">Place order</a>
      </li>
    </ol>
  </nav>
</div>

### Local navigation

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <nav class="local-nav" aria-label="Basic local navigation">
    <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav1" aria-expanded="false" aria-controls="collapseLocalNav1">
      <span class="container-xxl">Shop</span>
    </button>
    <div id="collapseLocalNav1" class="container-xxl local-nav-collapse d-lg-block collapse">
        <div class="navbar navbar-expand-lg">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
            <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
          </ul>
        </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <nav class="local-nav" aria-label="Basic local navigation" data-bs-theme="dark">
    <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav2" aria-expanded="false" aria-controls="collapseLocalNav2">
      <span class="container-xxl">Shop</span>
    </button>
    <div id="collapseLocalNav2" class="container-xxl local-nav-collapse d-lg-block collapse">
        <div class="navbar navbar-expand-lg">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
            <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
          </ul>
        </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <nav class="local-nav" aria-label="Basic local navigation">
    <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav3" aria-expanded="false" aria-controls="collapseLocalNav3">
      <span class="container-xxl">Shop</span>
    </button>
    <div id="collapseLocalNav3" class="container-xxl local-nav-collapse d-lg-block collapse">
        <div class="navbar navbar-expand-lg">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
            <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
          </ul>
        </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55">
  <nav class="local-nav" aria-label="Basic local navigation" data-bs-theme="dark">
    <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav4" aria-expanded="false" aria-controls="collapseLocalNav4">
      <span class="container-xxl">Shop</span>
    </button>
    <div id="collapseLocalNav4" class="container-xxl local-nav-collapse d-lg-block collapse">
        <div class="navbar navbar-expand-lg">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
            <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
          </ul>
        </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <nav class="local-nav" aria-label="Basic local navigation" data-bs-theme="light">
    <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNav5" aria-expanded="false" aria-controls="collapseLocalNav5">
      <span class="container-xxl">Shop</span>
    </button>
    <div id="collapseLocalNav5" class="container-xxl local-nav-collapse d-lg-block collapse">
        <div class="navbar navbar-expand-lg">
          <ul class="navbar-nav w-100">
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>
            <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>
            <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>
            <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>
          </ul>
        </div>
    </div>
  </nav>
</div>

## Forms

### Color

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="light">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="light" disabled>
</div>

### Controls

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <input type="text" class="form-control" placeholder="Input placeholder" data-bs-theme="dark">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder" data-bs-theme="dark"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" data-bs-theme="dark" disabled>
  <textarea class="form-control" rows="2" data-bs-theme="dark" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" data-bs-theme="dark" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" data-bs-theme="dark" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" data-bs-theme="dark" readonly>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <input type="text" class="form-control" placeholder="Input placeholder" data-bs-theme="light">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder" data-bs-theme="light"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" data-bs-theme="light" disabled>
  <textarea class="form-control" rows="2" data-bs-theme="light" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" data-bs-theme="light" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" data-bs-theme="light" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" data-bs-theme="light" readonly>
</div>

### Labels, required fields & text

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column border border-tertiary p-3">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column border border-tertiary p-3 bg-body" data-bs-theme="light">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column border border-tertiary p-3" style="background-color: #282d55;">
  <label class="form-label" data-bs-theme="dark">Form label</label>
  <label class="form-label is-required" data-bs-theme="dark">Form label</label>
  <label class="form-label is-disabled" data-bs-theme="dark">Form label</label>
  <label class="form-label is-required is-disabled" data-bs-theme="dark">Form label</label>
  <div class="form-text" data-bs-theme="dark">Form text helper</div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column border border-tertiary p-3" style="background-color: #b5e8f7">
  <label class="form-label" data-bs-theme="light">Form label</label>
  <label class="form-label is-required" data-bs-theme="light">Form label</label>
  <label class="form-label is-disabled" data-bs-theme="light">Form label</label>
  <label class="form-label is-required is-disabled" data-bs-theme="light">Form label</label>
  <div class="form-text" data-bs-theme="light">Form text helper</div>
</div>

### Range

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <input type="range" class="form-range" data-bs-theme="dark">
  <input type="range" class="form-range" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <input type="range" class="form-range" data-bs-theme="light">
  <input type="range" class="form-range" data-bs-theme="light" disabled>
</div>

### Star rating

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <form><fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible1" name="rating" value="1" class="visually-hidden">
    <label for="terrible1" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad1" name="rating" value="2" class="visually-hidden">
    <label for="bad1" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed1" name="rating" value="3" class="visually-hidden">
    <label for="mixed1" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good1" name="rating" value="4" class="visually-hidden" checked>
    <label for="good1" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent1" name="rating" value="5" class="visually-hidden">
    <label for="excellent1" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
  <div class="d-flex star-rating">
    <p class="visually-hidden">Star rating: rated 3 out of 5</p>
    <div aria-hidden="true">
      <span></span>
      <span></span>
      <span class="checked"></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <form><fieldset class="star-rating" disabled>
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible11" name="rating" value="1" class="visually-hidden">
    <label for="terrible11" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad11" name="rating" value="2" class="visually-hidden">
    <label for="bad11" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed11" name="rating" value="3" class="visually-hidden">
    <label for="mixed11" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good11" name="rating" value="4" class="visually-hidden" checked>
    <label for="good11" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent11" name="rating" value="5" class="visually-hidden">
    <label for="excellent11" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <form><fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible2" name="rating" value="1" class="visually-hidden">
    <label for="terrible2" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad2" name="rating" value="2" class="visually-hidden">
    <label for="bad2" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed2" name="rating" value="3" class="visually-hidden">
    <label for="mixed2" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good2" name="rating" value="4" class="visually-hidden" checked>
    <label for="good2" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent2" name="rating" value="5" class="visually-hidden">
    <label for="excellent2" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
  <div class="d-flex star-rating">
    <p class="visually-hidden">Star rating: rated 3 out of 5</p>
    <div aria-hidden="true">
      <span></span>
      <span></span>
      <span class="checked"></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <form><fieldset class="star-rating" disabled>
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible21" name="rating" value="1" class="visually-hidden">
    <label for="terrible21" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad21" name="rating" value="2" class="visually-hidden">
    <label for="bad21" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed21" name="rating" value="3" class="visually-hidden">
    <label for="mixed21" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good21" name="rating" value="4" class="visually-hidden" checked>
    <label for="good21" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent21" name="rating" value="5" class="visually-hidden">
    <label for="excellent21" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <form><fieldset class="star-rating">
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible3" name="rating" value="1" class="visually-hidden">
    <label for="terrible3" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad3" name="rating" value="2" class="visually-hidden">
    <label for="bad3" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed3" name="rating" value="3" class="visually-hidden">
    <label for="mixed3" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good3" name="rating" value="4" class="visually-hidden" checked>
    <label for="good3" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent3" name="rating" value="5" class="visually-hidden">
    <label for="excellent3" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
  <div class="d-flex star-rating">
    <p class="visually-hidden">Star rating: rated 3 out of 5</p>
    <div aria-hidden="true">
      <span></span>
      <span></span>
      <span class="checked"></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <form><fieldset class="star-rating" disabled>
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible31" name="rating" value="1" class="visually-hidden">
    <label for="terrible31" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad31" name="rating" value="2" class="visually-hidden">
    <label for="bad31" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed31" name="rating" value="3" class="visually-hidden">
    <label for="mixed31" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good31" name="rating" value="4" class="visually-hidden" checked>
    <label for="good31" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent31" name="rating" value="5" class="visually-hidden">
    <label for="excellent31" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <form><fieldset class="star-rating" data-bs-theme="dark">
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible4" name="rating" value="1" class="visually-hidden">
    <label for="terrible4" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad4" name="rating" value="2" class="visually-hidden">
    <label for="bad4" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed4" name="rating" value="3" class="visually-hidden">
    <label for="mixed4" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good4" name="rating" value="4" class="visually-hidden" checked>
    <label for="good4" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent4" name="rating" value="5" class="visually-hidden">
    <label for="excellent4" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
  <div class="d-flex star-rating" data-bs-theme="dark">
    <p class="visually-hidden">Star rating: rated 3 out of 5</p>
    <div aria-hidden="true">
      <span></span>
      <span></span>
      <span class="checked"></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <form><fieldset class="star-rating" data-bs-theme="dark" disabled>
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible41" name="rating" value="1" class="visually-hidden">
    <label for="terrible41" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad41" name="rating" value="2" class="visually-hidden">
    <label for="bad41" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed41" name="rating" value="3" class="visually-hidden">
    <label for="mixed41" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good41" name="rating" value="4" class="visually-hidden" checked>
    <label for="good41" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent41" name="rating" value="5" class="visually-hidden">
    <label for="excellent41" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <form><fieldset class="star-rating" data-bs-theme="light">
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible5" name="rating" value="1" class="visually-hidden">
    <label for="terrible5" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad5" name="rating" value="2" class="visually-hidden">
    <label for="bad5" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed5" name="rating" value="3" class="visually-hidden">
    <label for="mixed5" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good5" name="rating" value="4" class="visually-hidden" checked>
    <label for="good5" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent5" name="rating" value="5" class="visually-hidden">
    <label for="excellent5" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
  <div class="d-flex star-rating" data-bs-theme="light">
    <p class="visually-hidden">Star rating: rated 3 out of 5</p>
    <div aria-hidden="true">
      <span></span>
      <span></span>
      <span class="checked"></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <form><fieldset class="star-rating" data-bs-theme="light" disabled>
    <legend class="visually-hidden">Results relevance</legend>
    <input type="radio" id="terrible51" name="rating" value="1" class="visually-hidden">
    <label for="terrible51" title="Terrible"><span class="visually-hidden">Terrible</span></label>
    <input type="radio" id="bad51" name="rating" value="2" class="visually-hidden">
    <label for="bad51" title="Bad"><span class="visually-hidden">Bad</span></label>
    <input type="radio" id="mixed51" name="rating" value="3" class="visually-hidden">
    <label for="mixed51" title="Mixed"><span class="visually-hidden">Mixed</span></label>
    <input type="radio" id="good51" name="rating" value="4" class="visually-hidden" checked>
    <label for="good51" title="Good"><span class="visually-hidden">Good</span></label>
    <input type="radio" id="excellent51" name="rating" value="5" class="visually-hidden">
    <label for="excellent51" title="Excellent"><span class="visually-hidden">Excellent</span></label>
  </fieldset></form>
</div>
