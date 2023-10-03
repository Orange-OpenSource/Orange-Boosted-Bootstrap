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

#### No theme

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

#### Dark theme on container

Using bg-body

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

#### Light theme on container

Using bg-body

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

#### Dark theme on component

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

#### Light theme on component

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

#### No theme

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

#### Dark theme on container

Using bg-body

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

#### Light theme on container

Using bg-body

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

#### Dark theme on component

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

#### Light theme on component

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

#### No theme

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

#### Dark theme on container

Using bg-body

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

#### Light theme on container

Using bg-body

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

#### Dark theme on component

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

#### Light theme on component

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

#### No theme

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

#### Dark theme on container

Using bg-body

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

#### Light theme on container

Using bg-body

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

#### Dark theme on component

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

#### Light theme on component

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

### Star rating

#### No theme

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
</div>

#### Dark theme on container

Using bg-body

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
</div>

#### Light theme on container

Using bg-body

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
</div>

#### Dark theme on component

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
</div>

#### Light theme on component

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
</div>