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
    <div style="width: 200px">--bs-tertiary-bg</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-tertiary-bg)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-tertiary-bg)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-border-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-border-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-border-color)" data-bs-theme="dark"></div>
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
</div>

### Additional CSS variables for dark-mode

<div class="d-flex flex-column gap-2">
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
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-placeholder-color</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-placeholder-color)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-placeholder-color)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-gray-tweak</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-gray-tweak)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-gray-tweak)" data-bs-theme="dark"></div>
  </div>
  <div class="d-flex flex-row gap-2 align-items-center">
    <div style="width: 200px">--bs-black-tweak</div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-black-tweak)" data-bs-theme="light"></div>
    <div style="width: 50px; height: 50px; background-color:var(--bs-black-tweak)" data-bs-theme="dark"></div>
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

### Back to top

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3">
  <nav aria-label="Standard back to top example" class="back-to-top position-static ps-5 ms-5">
    <a href="#" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
  <nav aria-label="Icon only back to top example" class="back-to-top position-static">
    <a href="#" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <nav aria-label="Standard back to top example2" class="back-to-top position-static ps-5 ms-5">
    <a href="#" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
  <nav aria-label="Icon only back to top example2" class="back-to-top position-static">
    <a href="#" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="light">
  <nav aria-label="Standard back to top example3" class="back-to-top position-static ps-5 ms-5">
    <a href="#" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
  <nav aria-label="Icon only back to top example3" class="back-to-top position-static">
    <a href="#" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #282d55;">
  <nav aria-label="Standard back to top example4" class="back-to-top position-static ps-5 ms-5" data-bs-theme="dark">
    <a href="#" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
  <nav aria-label="Icon only back to top example4" class="back-to-top position-static" data-bs-theme="dark">
    <a href="#" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #b5e8f7">
  <nav aria-label="Standard back to top example5" class="back-to-top position-static ps-5 ms-5" data-bs-theme="light">
    <a href="#" class="back-to-top-link btn btn-icon btn-outline-secondary position-relative top-0" data-bs-label="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
  <nav aria-label="Icon only back to top example5" class="back-to-top position-static" data-bs-theme="light">
    <a href="#" class="back-to-top-link position-static btn btn-icon btn-outline-secondary" title="Back to top">
      <span class="visually-hidden">Back to top</span>
    </a>
  </nav>
</div>

### Breadcrumb

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <nav aria-label="breadcrumb1">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <nav aria-label="breadcrumb2">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <nav aria-label="breadcrumb3">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <nav aria-label="breadcrumb4">
    <ol class="breadcrumb mb-0" data-bs-theme="dark">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';" data-bs-theme="dark">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <nav aria-label="breadcrumb5">
    <ol class="breadcrumb mb-0" data-bs-theme="light">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    <ol class="breadcrumb" style="--bs-breadcrumb-divider: '>';" data-bs-theme="light">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
    </ol>
  </nav>
</div>

### Buttons

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-warning" disabled>Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-info" disabled>Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-light" disabled>Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-dark" disabled>Dark</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-outline-primary">Outline primary</button>
  <button type="button" class="btn btn-outline-primary" disabled>Outline primary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-outline-success">Outline success</button>
  <button type="button" class="btn btn-outline-success" disabled>Outline success</button>
  <button type="button" class="btn btn-outline-danger">Outline danger</button>
  <button type="button" class="btn btn-outline-danger" disabled>Outline danger</button>
  <button type="button" class="btn btn-outline-warning">Outline warning</button>
  <button type="button" class="btn btn-outline-warning" disabled>Outline warning</button>
  <button type="button" class="btn btn-outline-info">Outline info</button>
  <button type="button" class="btn btn-outline-info" disabled>Outline info</button>
  <button type="button" class="btn btn-outline-light">Outline light</button>
  <button type="button" class="btn btn-outline-light" disabled>Outline light</button>
  <button type="button" class="btn btn-outline-dark">Outline dark</button>
  <button type="button" class="btn btn-outline-dark" disabled>Outline dark</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-warning" disabled>Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-info" disabled>Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-light" disabled>Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-dark" disabled>Dark</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-outline-primary">Outline primary</button>
  <button type="button" class="btn btn-outline-primary" disabled>Outline primary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-outline-success">Outline success</button>
  <button type="button" class="btn btn-outline-success" disabled>Outline success</button>
  <button type="button" class="btn btn-outline-danger">Outline danger</button>
  <button type="button" class="btn btn-outline-danger" disabled>Outline danger</button>
  <button type="button" class="btn btn-outline-warning">Outline warning</button>
  <button type="button" class="btn btn-outline-warning" disabled>Outline warning</button>
  <button type="button" class="btn btn-outline-info">Outline info</button>
  <button type="button" class="btn btn-outline-info" disabled>Outline info</button>
  <button type="button" class="btn btn-outline-light">Outline light</button>
  <button type="button" class="btn btn-outline-light" disabled>Outline light</button>
  <button type="button" class="btn btn-outline-dark">Outline dark</button>
  <button type="button" class="btn btn-outline-dark" disabled>Outline dark</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-warning" disabled>Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-info" disabled>Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-light" disabled>Light</button>
  <button type="button" class="btn btn-dark">Dark</button>
  <button type="button" class="btn btn-dark" disabled>Dark</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-outline-primary">Outline primary</button>
  <button type="button" class="btn btn-outline-primary" disabled>Outline primary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-outline-success">Outline success</button>
  <button type="button" class="btn btn-outline-success" disabled>Outline success</button>
  <button type="button" class="btn btn-outline-danger">Outline danger</button>
  <button type="button" class="btn btn-outline-danger" disabled>Outline danger</button>
  <button type="button" class="btn btn-outline-warning">Outline warning</button>
  <button type="button" class="btn btn-outline-warning" disabled>Outline warning</button>
  <button type="button" class="btn btn-outline-info">Outline info</button>
  <button type="button" class="btn btn-outline-info" disabled>Outline info</button>
  <button type="button" class="btn btn-outline-light">Outline light</button>
  <button type="button" class="btn btn-outline-light" disabled>Outline light</button>
  <button type="button" class="btn btn-outline-dark">Outline dark</button>
  <button type="button" class="btn btn-outline-dark" disabled>Outline dark</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #282d55;">
  <button type="button" class="btn btn-primary" data-bs-theme="dark">Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="dark">Primary</button>
  <button type="button" class="btn btn-secondary" data-bs-theme="dark">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled data-bs-theme="dark">Secondary</button>
  <button type="button" class="btn btn-success" data-bs-theme="dark">Success</button>
  <button type="button" class="btn btn-success" disabled data-bs-theme="dark">Success</button>
  <button type="button" class="btn btn-danger" data-bs-theme="dark">Danger</button>
  <button type="button" class="btn btn-danger" disabled data-bs-theme="dark">Danger</button>
  <button type="button" class="btn btn-warning" data-bs-theme="dark">Warning</button>
  <button type="button" class="btn btn-warning" disabled data-bs-theme="dark">Warning</button>
  <button type="button" class="btn btn-info" data-bs-theme="dark">Info</button>
  <button type="button" class="btn btn-info" disabled data-bs-theme="dark">Info</button>
  <button type="button" class="btn btn-light" data-bs-theme="dark">Light</button>
  <button type="button" class="btn btn-light" disabled data-bs-theme="dark">Light</button>
  <button type="button" class="btn btn-dark" data-bs-theme="dark">Dark</button>
  <button type="button" class="btn btn-dark" disabled data-bs-theme="dark">Dark</button>
  <button type="button" class="btn btn-link" data-bs-theme="dark">Link</button>
  <button type="button" class="btn btn-link" disabled data-bs-theme="dark">Link</button>
  <button type="button" class="btn btn-outline-primary" data-bs-theme="dark">Outline primary</button>
  <button type="button" class="btn btn-outline-primary" disabled data-bs-theme="dark">Outline primary</button>
  <button type="button" class="btn btn-outline-secondary" data-bs-theme="dark">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled data-bs-theme="dark">Outline secondary</button>
  <button type="button" class="btn btn-outline-success" data-bs-theme="dark">Outline success</button>
  <button type="button" class="btn btn-outline-success" disabled data-bs-theme="dark">Outline success</button>
  <button type="button" class="btn btn-outline-danger" data-bs-theme="dark">Outline danger</button>
  <button type="button" class="btn btn-outline-danger" disabled data-bs-theme="dark">Outline danger</button>
  <button type="button" class="btn btn-outline-warning" data-bs-theme="dark">Outline warning</button>
  <button type="button" class="btn btn-outline-warning" disabled data-bs-theme="dark">Outline warning</button>
  <button type="button" class="btn btn-outline-info" data-bs-theme="dark">Outline info</button>
  <button type="button" class="btn btn-outline-info" disabled data-bs-theme="dark">Outline info</button>
  <button type="button" class="btn btn-outline-light" data-bs-theme="dark">Outline light</button>
  <button type="button" class="btn btn-outline-light" disabled data-bs-theme="dark">Outline light</button>
  <button type="button" class="btn btn-outline-dark" data-bs-theme="dark">Outline dark</button>
  <button type="button" class="btn btn-outline-dark" disabled data-bs-theme="dark">Outline dark</button>
  <button type="button" class="btn btn-primary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn btn-primary" data-bs-theme="light">Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="light">Primary</button>
  <button type="button" class="btn btn-secondary" data-bs-theme="light">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled data-bs-theme="light">Secondary</button>
  <button type="button" class="btn btn-success" data-bs-theme="light">Success</button>
  <button type="button" class="btn btn-success" disabled data-bs-theme="light">Success</button>
  <button type="button" class="btn btn-danger" data-bs-theme="light">Danger</button>
  <button type="button" class="btn btn-danger" disabled data-bs-theme="light">Danger</button>
  <button type="button" class="btn btn-warning" data-bs-theme="light">Warning</button>
  <button type="button" class="btn btn-warning" disabled data-bs-theme="light">Warning</button>
  <button type="button" class="btn btn-info" data-bs-theme="light">Info</button>
  <button type="button" class="btn btn-info" disabled data-bs-theme="light">Info</button>
  <button type="button" class="btn btn-light" data-bs-theme="light">Light</button>
  <button type="button" class="btn btn-light" disabled data-bs-theme="light">Light</button>
  <button type="button" class="btn btn-dark" data-bs-theme="light">Dark</button>
  <button type="button" class="btn btn-dark" disabled data-bs-theme="light">Dark</button>
  <button type="button" class="btn btn-link" data-bs-theme="light">Link</button>
  <button type="button" class="btn btn-link" disabled data-bs-theme="light">Link</button>
  <button type="button" class="btn btn-outline-primary" data-bs-theme="light">Outline primary</button>
  <button type="button" class="btn btn-outline-primary" disabled data-bs-theme="light">Outline primary</button>
  <button type="button" class="btn btn-outline-secondary" data-bs-theme="light">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled data-bs-theme="light">Outline secondary</button>
  <button type="button" class="btn btn-outline-success" data-bs-theme="light">Outline success</button>
  <button type="button" class="btn btn-outline-success" disabled data-bs-theme="light">Outline success</button>
  <button type="button" class="btn btn-outline-danger" data-bs-theme="light">Outline danger</button>
  <button type="button" class="btn btn-outline-danger" disabled data-bs-theme="light">Outline danger</button>
  <button type="button" class="btn btn-outline-warning" data-bs-theme="light">Outline warning</button>
  <button type="button" class="btn btn-outline-warning" disabled data-bs-theme="light">Outline warning</button>
  <button type="button" class="btn btn-outline-info" data-bs-theme="light">Outline info</button>
  <button type="button" class="btn btn-outline-info" disabled data-bs-theme="light">Outline info</button>
  <button type="button" class="btn btn-outline-light" data-bs-theme="light">Outline light</button>
  <button type="button" class="btn btn-outline-light" disabled data-bs-theme="light">Outline light</button>
  <button type="button" class="btn btn-outline-dark" data-bs-theme="light">Outline dark</button>
  <button type="button" class="btn btn-outline-dark" disabled data-bs-theme="light">Outline dark</button>
  <button type="button" class="btn btn-primary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" data-bs-theme="light">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled data-bs-theme="light">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

### Card

<h4 class="mt-3">No theme</h4>

<div class="row row-cols-1 row-cols-xl-3 border border-tertiary p-3">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text fw-bold mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
              <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
            </svg>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text fw-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        Featured
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="row row-cols-1 row-cols-xl-3 border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text fw-bold mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
              <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
            </svg>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text fw-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        Featured
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="row row-cols-1 row-cols-xl-3 border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text fw-bold mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
              <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
            </svg>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text fw-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        Featured
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="row row-cols-1 row-cols-xl-3 border border-tertiary p-3" style="background-color: #282d55;">
  <div class="col">
    <div class="card" data-bs-theme="dark">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text fw-bold mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-bs-theme="dark">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
              <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
            </svg>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-bs-theme="dark">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text fw-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        Featured
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="row row-cols-1 row-cols-xl-3 border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="col">
    <div class="card" data-bs-theme="light">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text fw-bold mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-bs-theme="light">
      <div class="row g-0">
        <div class="col-md-4">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
              <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
            </svg>
          </svg>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card" data-bs-theme="light">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle">Card subtitle</h6>
        <p class="card-text fw-bold">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-footer">
        Featured
      </div>
    </div>
  </div>
</div>

### Carousel

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="false">
    <div class="carousel-action-bar">
      <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExample" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
        <span class="visually-hidden">Pause Carousel</span>
      </button>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Third slide label</h5>
          <p class="mb-0">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div id="carouselExample2" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="false">
    <div class="carousel-action-bar">
      <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExample2" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
        <span class="visually-hidden">Pause Carousel</span>
      </button>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample2" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Third slide label</h5>
          <p class="mb-0">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div id="carouselExample3" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="false">
    <div class="carousel-action-bar">
      <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExample3" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
        <span class="visually-hidden">Pause Carousel</span>
      </button>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample3" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Third slide label</h5>
          <p class="mb-0">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample3" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample3" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <div id="carouselExample4" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="false" data-bs-theme="dark">
    <div class="carousel-action-bar">
      <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExample4" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
        <span class="visually-hidden">Pause Carousel</span>
      </button>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample4" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Third slide label</h5>
          <p class="mb-0">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample4" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample4" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div id="carouselExample5" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" data-bs-wrap="false" data-bs-theme="light">
    <div class="carousel-action-bar">
      <button type="button" class="btn btn-icon carousel-control-play-pause pause" data-bs-target="#carouselExample5" data-bs-play-text="Play Carousel" data-bs-pause-text="Pause Carousel" title="Pause Carousel">
        <span class="visually-hidden">Pause Carousel</span>
      </button>
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample5" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Third slide label</h5>
          <p class="mb-0">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample5" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample5" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

### Close button

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.3/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

### Dropdowns

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">
        Dropdown button
      </button>
      <ul class="dropdown-menu" data-bs-theme="dark">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary" data-bs-theme="dark">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" data-bs-theme="dark">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
        Dropdown button
      </button>
      <ul class="dropdown-menu" data-bs-theme="light">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary" data-bs-theme="light">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" data-bs-theme="light">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

<h4 class="mt-3">Dark dropdown variant for retro-compatibility</h4>

<div class="border border-tertiary p-3 bg-dark">
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item active" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item active" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
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
  <nav class="local-nav" aria-label="Basic local navigation">
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

### Modal

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample1">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample1" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
            <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
          </svg>
        </svg>
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample2">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
            <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
          </svg>
        </svg>
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample3">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample3" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
            <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
          </svg>
        </svg>
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample4" data-bs-theme="dark">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample4" tabindex="-1" aria-hidden="true" data-bs-theme="dark">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
            <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
          </svg>
        </svg>
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample5" data-bs-theme="light">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample5" tabindex="-1" aria-hidden="true" data-bs-theme="light">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-translucent)">
            <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
          </svg>
        </svg>
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

### Navs & tabs

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>

  <ul class="nav nav-underline mt-2">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
  </ul>

  <ul class="nav nav-tabs mt-2">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
  </ul>

  <ul role="tablist" aria-owns="nav-tab1 nav-tab2 nav-tab3 nav-tab4" class="nav nav-tabs mt-2" id="nav-tab-with-nested-tabs">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" aria-current="page" id="nav-tab1" href="#tab1-content" data-bs-toggle="tab" data-bs-target="#tab1-content" role="tab" aria-controls="tab1-content" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab2" data-bs-toggle="tab" href="#tab2-content" data-bs-target="#tab2-content" role="tab" aria-controls="tab2-content" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab3" data-bs-toggle="tab" href="#tab3-content" data-bs-target="#tab3-content" role="tab" aria-controls="tab3-content" aria-selected="false">Tab 3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link disabled" id="nav-tab4" data-bs-toggle="tab" data-bs-target="#tab4-content" role="tab" aria-controls="tab4-content" aria-selected="false" aria-disabled="true">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content" id="nav-tabs-content">
    <div class="tab-pane-with-nested-tab fade show active" id="tab1-content" role="tabpanel" aria-labelledby="nav-tab1">
      <ul role="tablist" aria-owns="nav-linkA nav-linkB nav-linkC nav-linkD" class="nav nav-underline mt-0">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="nav-linkA" href="#linkA" data-bs-toggle="tab" data-bs-target="#linkA" role="tab" aria-current="page">Link A</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkB" href="#linkB" data-bs-toggle="tab" data-bs-target="#linkB" role="tab">Link B</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkC" href="#linkC" data-bs-toggle="tab" data-bs-target="#linkC" role="tab">Link C</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link disabled" id="nav-linkD" data-bs-toggle="tab" data-bs-target="#linkD" role="tab" aria-disabled="true">Link D</a>
        </li>
      </ul>
      <div class="tab-content border-0">
        <div class="tab-pane fade show active" id="linkA" role="tabpanel" aria-labelledby="nav-linkA">Content of Link A</div>
        <div class="tab-pane" id="linkB" role="tabpanel" aria-labelledby="nav-linkB">Content of Link B</div>
        <div class="tab-pane" id="linkC" role="tabpanel" aria-labelledby="nav-linkC">Content of Link C</div>
        <div class="tab-pane" id="linkD" role="tabpanel" aria-labelledby="nav-linkD">Content of Link D</div>
      </div>
    </div>
    <div class="tab-pane" id="tab2-content" role="tabpanel" aria-labelledby="nav-tab2">Content of Tab 2</div>
    <div class="tab-pane" id="tab3-content" role="tabpanel" aria-labelledby="nav-tab3">Content of Tab 3</div>
    <div class="tab-pane" id="tab4-content" role="tabpanel" aria-labelledby="nav-tab4">Content of Tab 4</div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <ul class="nav nav-underline">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
  </ul>


  <ul role="tablist" aria-owns="nav-tab1 nav-tab2 nav-tab3 nav-tab4" class="nav nav-tabs mt-2" id="nav-tab-with-nested-tabs-2">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" aria-current="page" id="nav-tab1-2" href="#" data-bs-toggle="tab" data-bs-target="#tab1-content-2" role="tab" aria-controls="tab1-content-2" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab2-2" data-bs-toggle="tab" href="#" data-bs-target="#tab2-content-2" role="tab" aria-controls="tab2-content-2" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab3-2" data-bs-toggle="tab" href="#" data-bs-target="#tab3-content-2" role="tab" aria-controls="tab3-content-2" aria-selected="false">Tab 3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link disabled" id="nav-tab4-2" data-bs-toggle="tab" data-bs-target="#tab4-content-2" role="tab" aria-controls="tab4-content-2" aria-selected="false" aria-disabled="true">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content" id="nav-tabs-content-2">
    <div class="tab-pane-with-nested-tab fade show active" id="tab1-content-2" role="tabpanel" aria-labelledby="nav-tab1">
      <ul role="tablist" aria-owns="nav-linkA nav-linkB nav-linkC nav-linkD" class="nav nav-underline mt-0">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="nav-linkA-2" href="#" data-bs-toggle="tab" data-bs-target="#linkA-2" role="tab" aria-current="page">Link A</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkB-2" href="#" data-bs-toggle="tab" data-bs-target="#linkB-2" role="tab">Link B</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkC-2" href="#" data-bs-toggle="tab" data-bs-target="#linkC-2" role="tab">Link C</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link disabled" id="nav-linkD-2" data-bs-toggle="tab" data-bs-target="#linkD-2" role="tab" aria-disabled="true">Link D</a>
        </li>
      </ul>
      <div class="tab-content border-0">
        <div class="tab-pane fade show active" id="linkA-2" role="tabpanel" aria-labelledby="nav-linkA">Content of Link A</div>
        <div class="tab-pane" id="linkB-2" role="tabpanel" aria-labelledby="nav-linkB-2">Content of Link B</div>
        <div class="tab-pane" id="linkC-2" role="tabpanel" aria-labelledby="nav-linkC-2">Content of Link C</div>
        <div class="tab-pane" id="linkD-2" role="tabpanel" aria-labelledby="nav-linkD-2">Content of Link D</div>
      </div>
    </div>
    <div class="tab-pane" id="tab2-content-2" role="tabpanel" aria-labelledby="nav-tab2">Content of Tab 2</div>
    <div class="tab-pane" id="tab3-content-2" role="tabpanel" aria-labelledby="nav-tab3">Content of Tab 3</div>
    <div class="tab-pane" id="tab4-content-2" role="tabpanel" aria-labelledby="nav-tab4">Content of Tab 4</div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <ul class="nav nav-underline">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
  </ul>


  <ul role="tablist" aria-owns="nav-tab1 nav-tab2 nav-tab3 nav-tab4" class="nav nav-tabs mt-2" id="nav-tab-with-nested-tabs-3">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" aria-current="page" id="nav-tab1-3" href="#" data-bs-toggle="tab" data-bs-target="#tab1-content-3" role="tab" aria-controls="tab1-content-3" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab2-3" data-bs-toggle="tab" href="#" data-bs-target="#tab2-content-3" role="tab" aria-controls="tab2-content-3" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab3-3" data-bs-toggle="tab" href="#" data-bs-target="#tab3-content-3" role="tab" aria-controls="tab3-content-3" aria-selected="false">Tab 3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link disabled" id="nav-tab4-3" data-bs-toggle="tab" data-bs-target="#tab4-content-3" role="tab" aria-controls="tab4-content-3" aria-selected="false" aria-disabled="true">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content" id="nav-tabs-content-3">
    <div class="tab-pane-with-nested-tab fade show active" id="tab1-content-3" role="tabpanel" aria-labelledby="nav-tab1">
      <ul role="tablist" aria-owns="nav-linkA nav-linkB nav-linkC nav-linkD" class="nav nav-underline mt-0">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="nav-linkA-3" href="#" data-bs-toggle="tab" data-bs-target="#linkA-3" role="tab" aria-current="page">Link A</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkB-3" href="#" data-bs-toggle="tab" data-bs-target="#linkB-3" role="tab">Link B</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkC-3" href="#" data-bs-toggle="tab" data-bs-target="#linkC-3" role="tab">Link C</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link disabled" id="nav-linkD-3" data-bs-toggle="tab" data-bs-target="#linkD-3" role="tab" aria-disabled="true">Link D</a>
        </li>
      </ul>
      <div class="tab-content border-0">
        <div class="tab-pane fade show active" id="linkA-3" role="tabpanel" aria-labelledby="nav-linkA">Content of Link A</div>
        <div class="tab-pane" id="linkB-3" role="tabpanel" aria-labelledby="nav-linkB">Content of Link B</div>
        <div class="tab-pane" id="linkC-3" role="tabpanel" aria-labelledby="nav-linkC">Content of Link C</div>
        <div class="tab-pane" id="linkD-3" role="tabpanel" aria-labelledby="nav-linkD">Content of Link D</div>
      </div>
    </div>
    <div class="tab-pane" id="tab2-content-3" role="tabpanel" aria-labelledby="nav-tab2">Content of Tab 2</div>
    <div class="tab-pane" id="tab3-content-3" role="tabpanel" aria-labelledby="nav-tab3">Content of Tab 3</div>
    <div class="tab-pane" id="tab4-content-3" role="tabpanel" aria-labelledby="nav-tab4">Content of Tab 4</div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <ul class="nav nav-underline" data-bs-theme="dark">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
  </ul>


  <ul role="tablist" aria-owns="nav-tab1 nav-tab2 nav-tab3 nav-tab4" class="nav nav-tabs mt-2" id="nav-tab-with-nested-tabs-4" data-bs-theme="dark" style="--bs-nav-tabs-link-active-bg: #282d55;">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" aria-current="page" id="nav-tab1-4" href="#" data-bs-toggle="tab" data-bs-target="#tab1-content-4" role="tab" aria-controls="tab1-content-4" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab2-4" data-bs-toggle="tab" href="#" data-bs-target="#tab2-content-4" role="tab" aria-controls="tab2-content-4" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab3-4" data-bs-toggle="tab" href="#" data-bs-target="#tab3-content-4" role="tab" aria-controls="tab3-content-4" aria-selected="false">Tab 3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link disabled" id="nav-tab4-4" data-bs-toggle="tab" data-bs-target="#tab4-content-4" role="tab" aria-controls="tab4-content-4" aria-selected="false" aria-disabled="true">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content" id="nav-tabs-content-4" data-bs-theme="dark">
    <div class="tab-pane-with-nested-tab fade show active" id="tab1-content-4" role="tabpanel" aria-labelledby="nav-tab1">
      <ul role="tablist" aria-owns="nav-linkA nav-linkB nav-linkC nav-linkD" class="nav nav-underline mt-0">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="nav-linkA-4" href="#" data-bs-toggle="tab" data-bs-target="#linkA-4" role="tab" aria-current="page">Link A</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkB-4" href="#" data-bs-toggle="tab" data-bs-target="#linkB-4" role="tab">Link B</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkC-4" href="#" data-bs-toggle="tab" data-bs-target="#linkC-4" role="tab">Link C</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link disabled" id="nav-linkD-4" data-bs-toggle="tab" data-bs-target="#linkD-4" role="tab" aria-disabled="true">Link D</a>
        </li>
      </ul>
      <div class="tab-content border-0">
        <div class="tab-pane fade show active" id="linkA-4" role="tabpanel" aria-labelledby="nav-linkA">Content of Link A</div>
        <div class="tab-pane" id="linkB-4" role="tabpanel" aria-labelledby="nav-linkB">Content of Link B</div>
        <div class="tab-pane" id="linkC-4" role="tabpanel" aria-labelledby="nav-linkC">Content of Link C</div>
        <div class="tab-pane" id="linkD-4" role="tabpanel" aria-labelledby="nav-linkD">Content of Link D</div>
      </div>
    </div>
    <div class="tab-pane" id="tab2-content-4" role="tabpanel" aria-labelledby="nav-tab2">Content of Tab 2</div>
    <div class="tab-pane" id="tab3-content-4" role="tabpanel" aria-labelledby="nav-tab3">Content of Tab 3</div>
    <div class="tab-pane" id="tab4-content-4" role="tabpanel" aria-labelledby="nav-tab4">Content of Tab 4</div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <ul class="nav nav-underline" data-bs-theme="light">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </li>
  </ul>


  <ul role="tablist" aria-owns="nav-tab1 nav-tab2 nav-tab3 nav-tab4" class="nav nav-tabs mt-2" id="nav-tab-with-nested-tabs-5" data-bs-theme="light" style="--bs-nav-tabs-link-active-bg: #b5e8f7;">
    <li class="nav-item" role="presentation">
      <a class="nav-link active" aria-current="page" id="nav-tab1-5" href="#" data-bs-toggle="tab" data-bs-target="#tab1-content-5" role="tab" aria-controls="tab1-content-5" aria-selected="true">Tab 1</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab2-5" data-bs-toggle="tab" href="#" data-bs-target="#tab2-content-5" role="tab" aria-controls="tab2-content-5" aria-selected="false">Tab 2</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link" id="nav-tab3-5" data-bs-toggle="tab" href="#" data-bs-target="#tab3-content-5" role="tab" aria-controls="tab3-content-5" aria-selected="false">Tab 3</a>
    </li>
    <li class="nav-item" role="presentation">
      <a class="nav-link disabled" id="nav-tab4-5" data-bs-toggle="tab" data-bs-target="#tab4-content-5" role="tab" aria-controls="tab4-content-5" aria-selected="false" aria-disabled="true">Tab 4</a>
    </li>
  </ul>

  <div class="tab-content" id="nav-tabs-content-5" data-bs-theme="light">
    <div class="tab-pane-with-nested-tab fade show active" id="tab1-content-5" role="tabpanel" aria-labelledby="nav-tab1">
      <ul role="tablist" aria-owns="nav-linkA nav-linkB nav-linkC nav-linkD" class="nav nav-underline mt-0">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="nav-linkA-5" href="#" data-bs-toggle="tab" data-bs-target="#linkA-5" role="tab" aria-current="page">Link A</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkB-5" href="#" data-bs-toggle="tab" data-bs-target="#linkB-5" role="tab">Link B</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="nav-linkC-5" href="#" data-bs-toggle="tab" data-bs-target="#linkC-5" role="tab">Link C</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link disabled" id="nav-linkD-5" data-bs-toggle="tab" data-bs-target="#linkD-5" role="tab" aria-disabled="true">Link D</a>
        </li>
      </ul>
      <div class="tab-content border-0">
        <div class="tab-pane fade show active" id="linkA-5" role="tabpanel" aria-labelledby="nav-linkA">Content of Link A</div>
        <div class="tab-pane" id="linkB-5" role="tabpanel" aria-labelledby="nav-linkB">Content of Link B</div>
        <div class="tab-pane" id="linkC-5" role="tabpanel" aria-labelledby="nav-linkC">Content of Link C</div>
        <div class="tab-pane" id="linkD-5" role="tabpanel" aria-labelledby="nav-linkD">Content of Link D</div>
      </div>
    </div>
    <div class="tab-pane" id="tab2-content-5" role="tabpanel" aria-labelledby="nav-tab2">Content of Tab 2</div>
    <div class="tab-pane" id="tab3-content-5" role="tabpanel" aria-labelledby="nav-tab3">Content of Tab 3</div>
    <div class="tab-pane" id="tab4-content-5" role="tabpanel" aria-labelledby="nav-tab4">Content of Tab 4</div>
  </div>
</div>

### Offcanvas

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample1" aria-controls="offcanvasExample1">
    Button with data-bs-target
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample1">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample2" aria-controls="offcanvasExample2">
    Button with data-bs-target
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample2">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample3" aria-controls="offcanvasExample3">
    Button with data-bs-target
  </button>
  <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample3">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <button class="btn btn-primary" data-bs-theme="dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample4" aria-controls="offcanvasExample4">
    Button with data-bs-target
  </button>
  <div class="offcanvas offcanvas-start" data-bs-theme="dark" tabindex="-1" id="offcanvasExample4">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <button class="btn btn-primary" data-bs-theme="light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample5" aria-controls="offcanvasExample5">
    Button with data-bs-target
  </button>
  <div class="offcanvas offcanvas-start" data-bs-theme="light" tabindex="-1" id="offcanvasExample5">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Offcanvas</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body">
      <div>
        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
      </div>
      <div class="dropdown mt-3">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

### Pagination

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3">
  <nav aria-label="Page navigation example">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example icons">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true"></a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example complete">
    <ul class="pagination mb-0">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link disabled">3</a></li>
      <li class="page-item disabled"><a class="page-link">4</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"></a>
      </li>
    </ul>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <nav aria-label="Page navigation example2">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example icons2">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true"></a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example complete2">
    <ul class="pagination mb-0">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link disabled">3</a></li>
      <li class="page-item disabled"><a class="page-link">4</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"></a>
      </li>
    </ul>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3 bg-body" data-bs-theme="light">
  <nav aria-label="Page navigation example3">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example icons3">
    <ul class="pagination mb-0">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true"></a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example complete3">
    <ul class="pagination mb-0">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link disabled">3</a></li>
      <li class="page-item disabled"><a class="page-link">4</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"></a>
      </li>
    </ul>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3" style="background-color: #282d55;">
  <nav aria-label="Page navigation example4">
    <ul class="pagination mb-0" data-bs-theme="dark">
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example icons4">
    <ul class="pagination mb-0" data-bs-theme="dark">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true"></a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example complete4">
    <ul class="pagination mb-0" data-bs-theme="dark">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link disabled">3</a></li>
      <li class="page-item disabled"><a class="page-link">4</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"></a>
      </li>
    </ul>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3" style="background-color: #b5e8f7">
  <nav aria-label="Page navigation example5">
    <ul class="pagination mb-0" data-bs-theme="light">
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example icons5">
    <ul class="pagination mb-0" data-bs-theme="light">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link disabled" aria-label="Next" aria-disabled="true"></a></li>
    </ul>
  </nav>
  <nav aria-label="Page navigation example complete5">
    <ul class="pagination mb-0" data-bs-theme="light">
      <li class="page-item disabled">
        <a class="page-link">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link disabled">3</a></li>
      <li class="page-item disabled"><a class="page-link">4</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next"></a>
      </li>
    </ul>
  </nav>
</div>

### Popovers

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3" style="background-color: #282d55;">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="dark"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-theme="dark">Click to toggle popover</button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="light"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-theme="light">Click to toggle popover</button>
</div>

### Progress

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3">
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 30%">30%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-primary" style="width: 30%">30% (.bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger text-white" style="width: 100%">100%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-primary" style="width: 30%">30% (.text-bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-success" style="width: 25%">25% (.text-bg-success)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-info" style="width: 50%">50% (.text-bg-info)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-warning" style="width: 75%">75% (.text-bg-warning)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-danger" style="width: 100%">100% (.text-bg-danger)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 40%"></div>
  </div>
  <div class="progress progress-xs" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 70%">70%</div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 30%">30%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-primary" style="width: 30%">30% (.bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger text-white" style="width: 100%">100%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-primary" style="width: 30%">30% (.text-bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-success" style="width: 25%">25% (.text-bg-success)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-info" style="width: 50%">50% (.text-bg-info)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-warning" style="width: 75%">75% (.text-bg-warning)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-danger" style="width: 100%">100% (.text-bg-danger)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 40%"></div>
  </div>
  <div class="progress progress-xs" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 70%">70%</div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar" style="width: 30%">30%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-primary" style="width: 30%">30% (.bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger text-white" style="width: 100%">100%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-primary" style="width: 30%">30% (.text-bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-success" style="width: 25%">25% (.text-bg-success)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-info" style="width: 50%">50% (.text-bg-info)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-warning" style="width: 75%">75% (.text-bg-warning)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar text-bg-danger" style="width: 100%">100% (.text-bg-danger)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-warning overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-danger overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-success" style="width: 40%"></div>
  </div>
  <div class="progress progress-xs" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 70%">70%</div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3" style="background-color: #282d55;">
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar" style="width: 30%">30%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-primary" style="width: 30%">30% (.bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-danger text-white" style="width: 100%">100%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar text-bg-primary" style="width: 30%">30% (.text-bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar text-bg-success" style="width: 25%">25% (.text-bg-success)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar text-bg-info" style="width: 50%">50% (.text-bg-info)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar text-bg-warning" style="width: 75%">75% (.text-bg-warning)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar text-bg-danger" style="width: 100%">100% (.text-bg-danger)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-success overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-info overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-warning overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-danger overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-success" style="width: 40%"></div>
  </div>
  <div class="progress progress-xs" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" data-bs-theme="dark">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 70%">70%</div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column gap-2 border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar" style="width: 30%">30%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-primary" style="width: 30%">30% (.bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-success" style="width: 25%">25%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-warning text-dark" style="width: 75%">75%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-danger text-white" style="width: 100%">100%</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar text-bg-primary" style="width: 30%">30% (.text-bg-primary)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar text-bg-success" style="width: 25%">25% (.text-bg-success)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar text-bg-info" style="width: 50%">50% (.text-bg-info)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar text-bg-warning" style="width: 75%">75% (.text-bg-warning)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar text-bg-danger" style="width: 100%">100% (.text-bg-danger)</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Primary example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Success example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-success overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Info example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-info overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-warning overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-danger overflow-visible text-dark" style="width: 10%">Long label text for the progress bar, set to a dark color</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Success example" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-success" style="width: 40%"></div>
  </div>
  <div class="progress progress-xs" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar bg-info" style="width: 50%">50%</div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Warning example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar progress-bar-striped bg-warning" style="width: 60%"></div>
  </div>
  <div class="progress progress-sm" role="progressbar" aria-label="Danger example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" data-bs-theme="light">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style="width: 70%">70%</div>
  </div>
</div>

### Spinners

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-body" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <div class="spinner-border" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-body" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-body" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="spinner-border" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-body" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-body" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
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

### Stickers

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3 d-flex">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body d-flex" data-bs-theme="dark">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body d-flex" data-bs-theme="light">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3 d-flex" style="background-color: #282d55;">
  <div class="sticker sticker-sm" data-bs-theme="dark">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm" data-bs-theme="dark">
    <svg width="35" height="35" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3 d-flex" style="background-color: #b5e8f7">
  <div class="sticker sticker-sm" data-bs-theme="light">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm" data-bs-theme="light">
    <svg width="35" height="35" aria-hidden="true" focusable="false">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

### Tags

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile1" autocomplete="off">
      <label class="tag" for="btncheck-mobile1"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv1" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv1">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
        </svg>
        <span class="visually-hidden">Filter by</span>TV
      </label>
    </li>
    <li><a class="tag" href="#">1. Introduction</a></li>
    <li>
      <span class="tag" id="labelTag11">
        Dismissible tag
        <button class="close" aria-labelledby="labelTag11"><span class="visually-hidden">Close</span></button>
      </span>
    </li>
    <li><span class="tag tag-sm" id="labelTag21">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag21"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag51" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag51" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
  </ul>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile2" autocomplete="off">
      <label class="tag" for="btncheck-mobile2"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv2" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv2">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
        </svg>
        <span class="visually-hidden">Filter by</span>TV
      </label>
    </li>
    <li><a class="tag" href="#">1. Introduction</a></li>
    <li>
      <span class="tag" id="labelTag12">
        Dismissible tag
        <button class="close" aria-labelledby="labelTag12"><span class="visually-hidden">Close</span></button>
      </span>
    </li>
    <li><span class="tag tag-sm" id="labelTag22">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag22"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag52" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag52" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
  </ul>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile3" autocomplete="off">
      <label class="tag" for="btncheck-mobile3"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv3" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv3">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
        </svg>
        <span class="visually-hidden">Filter by</span>TV
      </label>
    </li>
    <li><a class="tag" href="#">1. Introduction</a></li>
    <li>
      <span class="tag" id="labelTag13">
        Dismissible tag
        <button class="close" aria-labelledby="labelTag13"><span class="visually-hidden">Close</span></button>
      </span>
    </li>
    <li><span class="tag tag-sm" id="labelTag23">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag23"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag53" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag53" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
  </ul>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile4" autocomplete="off">
      <label class="tag" for="btncheck-mobile4" data-bs-theme="dark"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv4" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv4" data-bs-theme="dark">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
        </svg>
        <span class="visually-hidden">Filter by</span>TV
      </label>
    </li>
    <li><a class="tag" href="#" data-bs-theme="dark">1. Introduction</a></li>
    <li>
      <span class="tag" id="labelTag14" data-bs-theme="dark">
        Dismissible tag
        <button class="close" aria-labelledby="labelTag14"><span class="visually-hidden">Close</span></button>
      </span>
    </li>
    <li><span class="tag tag-sm" id="labelTag24" data-bs-theme="dark">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag24"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag54" aria-disabled="true" data-bs-theme="dark">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag54" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
  </ul>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile5" autocomplete="off">
      <label class="tag" for="btncheck-mobile5" data-bs-theme="light"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv5" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv5" data-bs-theme="light">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>
        </svg>
        <span class="visually-hidden">Filter by</span>TV
      </label>
    </li>
    <li><a class="tag" href="#" data-bs-theme="light">1. Introduction</a></li>
    <li>
      <span class="tag" id="labelTag15" data-bs-theme="light">
        Dismissible tag
        <button class="close" aria-labelledby="labelTag15"><span class="visually-hidden">Close</span></button>
      </span>
    </li>
    <li><span class="tag tag-sm" id="labelTag25" data-bs-theme="light">
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true" focusable="false">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag25"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag55" aria-disabled="true" data-bs-theme="light">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag55" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
  </ul>
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

### Checkboxes & Radios

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3 bd-example-indeterminate">
  <input class="form-check-input" type="checkbox" value="">
  <input class="form-check-input" type="checkbox" value="" checked>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <input class="form-check-input" type="checkbox" value="" checked disabled>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate0" disabled>
  <input class="form-check-input" type="radio">
  <input class="form-check-input" type="radio" checked>
  <input class="form-check-input" type="radio" disabled>
  <input class="form-check-input" type="radio" checked disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body bd-example-indeterminate" data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="">
  <input class="form-check-input" type="checkbox" value="" checked>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate1">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <input class="form-check-input" type="checkbox" value="" checked disabled>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate2" disabled>
  <input class="form-check-input" type="radio">
  <input class="form-check-input" type="radio" checked>
  <input class="form-check-input" type="radio" disabled>
  <input class="form-check-input" type="radio" checked disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body bd-example-indeterminate" data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="">
  <input class="form-check-input" type="checkbox" value="" checked>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate3">
  <input class="form-check-input" type="checkbox" value="" disabled>
  <input class="form-check-input" type="checkbox" value="" checked disabled>
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate4" disabled>
  <input class="form-check-input" type="radio">
  <input class="form-check-input" type="radio" checked>
  <input class="form-check-input" type="radio" disabled>
  <input class="form-check-input" type="radio" checked disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3 bd-example-indeterminate" style="background-color: #282d55;">
  <input class="form-check-input" type="checkbox" value="" data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="" checked data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate5" data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="" disabled data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="" checked disabled data-bs-theme="dark">
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate6" disabled data-bs-theme="dark">
  <input class="form-check-input" type="radio" data-bs-theme="dark">
  <input class="form-check-input" type="radio" checked data-bs-theme="dark">
  <input class="form-check-input" type="radio" disabled data-bs-theme="dark">
  <input class="form-check-input" type="radio" checked disabled data-bs-theme="dark">
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3 bd-example-indeterminate" style="background-color: #b5e8f7">
  <input class="form-check-input" type="checkbox" value="" data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="" checked data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate7" data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="" disabled data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="" checked disabled data-bs-theme="light">
  <input class="form-check-input" type="checkbox" value="" id="Indeterminate8" disabled data-bs-theme="light">
  <input class="form-check-input" type="radio" data-bs-theme="light">
  <input class="form-check-input" type="radio" checked data-bs-theme="light">
  <input class="form-check-input" type="radio" disabled data-bs-theme="light">
  <input class="form-check-input" type="radio" checked disabled data-bs-theme="light">
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

### File input

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <input class="form-control" type="file" data-bs-theme="dark">
  <input class="form-control" type="file" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <input class="form-control" type="file" data-bs-theme="light">
  <input class="form-control" type="file" data-bs-theme="light" disabled>
</div>

### Helper

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input" data-bs-theme="dark"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required" data-bs-theme="dark">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input" data-bs-theme="dark"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input" data-bs-theme="light"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required" data-bs-theme="light">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input" data-bs-theme="light"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

### Input group

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-secondary" type="button" disabled>Button</button>
    <select class="form-select" disabled>
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <span class="input-group-text">Options</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-secondary" type="button" disabled>Button</button>
    <select class="form-select" disabled>
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <span class="input-group-text">Options</span>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-secondary" type="button" disabled>Button</button>
    <select class="form-select" disabled>
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <span class="input-group-text">Options</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <div class="mb-3">
    <div class="input-group" data-bs-theme="dark">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group" data-bs-theme="dark">
    <button class="btn btn-secondary" type="button" disabled>Button</button>
    <select class="form-select" disabled>
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <span class="input-group-text">Options</span>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="mb-3">
    <div class="input-group" data-bs-theme="light">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group" data-bs-theme="light">
    <button class="btn btn-secondary" type="button" disabled>Button</button>
    <select class="form-select" disabled>
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <span class="input-group-text">Options</span>
  </div>
</div>

### Labels, fields & text

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

### Quantity selector

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 border border-tertiary p-3">
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelectorDisabled" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled" data-bs-step="down" disabled>
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled" data-bs-step="up" disabled>
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelectorDisabled1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled1" data-bs-step="down" disabled>
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled1" data-bs-step="up" disabled>
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelector2" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector2" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector2" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="input-group quantity-selector">
    <input type="number" id="inputQuantitySelectorDisabled2" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled2" data-bs-step="down" disabled>
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled2" data-bs-step="up" disabled>
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 border border-tertiary p-3" style="background-color: #282d55;">
  <div class="input-group quantity-selector" data-bs-theme="dark">
    <input type="number" id="inputQuantitySelector3" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="input-group quantity-selector" data-bs-theme="dark">
    <input type="number" id="inputQuantitySelectorDisabled3" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled3" data-bs-step="down" disabled>
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled3" data-bs-step="up" disabled>
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="input-group quantity-selector" data-bs-theme="light">
    <input type="number" id="inputQuantitySelector4" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector4" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector4" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="input-group quantity-selector" data-bs-theme="light">
    <input type="number" id="inputQuantitySelectorDisabled4" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector" disabled>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled4" data-bs-step="down" disabled>
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelectorDisabled4" data-bs-step="up" disabled>
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
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

### Select

<h4 class="mt-3">No theme</h4>

<div class="border border-tertiary p-3">
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="form-select" aria-label="Default select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="form-select" aria-label="Default select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border border-tertiary p-3 bg-body" data-bs-theme="light">
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="form-select" aria-label="Default select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #282d55;">
  <select class="form-select" aria-label="Default select example" data-bs-theme="dark">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="form-select" aria-label="Default select example" data-bs-theme="dark" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border border-tertiary p-3" style="background-color: #b5e8f7">
  <select class="form-select" aria-label="Default select example" data-bs-theme="light">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <select class="form-select" aria-label="Default select example" data-bs-theme="light" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
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

### Switches

<h4 class="mt-3">No theme</h4>

<div class="d-flex border border-tertiary p-3">
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch">
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" disabled>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked disabled>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch">
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" disabled>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked disabled>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch">
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" disabled>
  </div>
  <div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" checked disabled>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex border border-tertiary p-3" style="background-color: #282d55;">
  <div class="form-check form-switch" data-bs-theme="dark">
    <input class="form-check-input" type="checkbox" role="switch">
  </div>
  <div class="form-check form-switch" data-bs-theme="dark">
    <input class="form-check-input" type="checkbox" role="switch" checked>
  </div>
  <div class="form-check form-switch" data-bs-theme="dark">
    <input class="form-check-input" type="checkbox" role="switch" disabled>
  </div>
  <div class="form-check form-switch" data-bs-theme="dark">
    <input class="form-check-input" type="checkbox" role="switch" checked disabled>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="form-check form-switch" data-bs-theme="light">
    <input class="form-check-input" type="checkbox" role="switch">
  </div>
  <div class="form-check form-switch" data-bs-theme="light">
    <input class="form-check-input" type="checkbox" role="switch" checked>
  </div>
  <div class="form-check form-switch" data-bs-theme="light">
    <input class="form-check-input" type="checkbox" role="switch" disabled>
  </div>
  <div class="form-check form-switch" data-bs-theme="light">
    <input class="form-check-input" type="checkbox" role="switch" checked disabled>
  </div>
</div>

### Validation

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-column border border-tertiary p-3">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="input-group quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="input-group quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-column border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="input-group quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="input-group quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-column border border-tertiary p-3 bg-body" data-bs-theme="light">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="input-group quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="input-group quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-column border border-tertiary p-3" style="background-color: #282d55;">
  <input type="text" class="form-control is-valid" value="Mark" data-bs-theme="dark">
  <select class="form-select is-valid" data-bs-theme="dark"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color" data-bs-theme="dark">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="dark"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="dark" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="dark"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="dark" checked></div>
  <div class="input-group quantity-selector" data-bs-theme="dark"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><select class="form-select is-invalid" data-bs-theme="dark"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="input-group quantity-selector w-100" data-bs-theme="dark"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-column border border-tertiary p-3" style="background-color: #b5e8f7">
  <input type="text" class="form-control is-valid" value="Mark" data-bs-theme="light">
  <select class="form-select is-valid" data-bs-theme="light"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid" data-bs-theme="light">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color" data-bs-theme="light">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="light"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""  data-bs-theme="light" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="light"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="light" checked></div>
  <div class="input-group quantity-selector" data-bs-theme="light"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><select class="form-select is-invalid" data-bs-theme="light"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="input-group quantity-selector w-100" data-bs-theme="light"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
</div>

### Tooltips

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3 bg-body" data-bs-theme="light">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3" style="background-color: #282d55;">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="dark">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title" data-bs-theme="dark">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border border-tertiary p-3" style="background-color: #b5e8f7">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="light">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title" data-bs-theme="light">Click to toggle tooltip</button>
</div>
