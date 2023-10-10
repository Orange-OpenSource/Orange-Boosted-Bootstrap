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

### Buttons

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="dark">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3 bg-body" data-bs-theme="light">
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-primary" disabled>Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled>Secondary</button>
  <button type="button" class="btn btn-outline-secondary">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled>Outline secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-success" disabled>Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-danger" disabled>Danger</button>
  <button type="button" class="btn btn-link">Link</button>
  <button type="button" class="btn btn-link" disabled>Link</button>
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #282d55;">
  <button type="button" class="btn btn-primary" data-bs-theme="dark">Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="dark">Primary</button>
  <button type="button" class="btn btn-secondary" data-bs-theme="dark">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled data-bs-theme="dark">Secondary</button>
  <button type="button" class="btn btn-outline-secondary" data-bs-theme="dark">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled data-bs-theme="dark">Outline secondary</button>
  <button type="button" class="btn btn-success" data-bs-theme="dark">Success</button>
  <button type="button" class="btn btn-success" disabled data-bs-theme="dark">Success</button>
  <button type="button" class="btn btn-danger" data-bs-theme="dark">Danger</button>
  <button type="button" class="btn btn-danger" disabled data-bs-theme="dark">Danger</button>
  <button type="button" class="btn btn-link" data-bs-theme="dark">Link</button>
  <button type="button" class="btn btn-link" disabled data-bs-theme="dark">Link</button>
  <button type="button" class="btn btn-primary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-secondary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-secondary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" disabled data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border border-tertiary p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn btn-primary" data-bs-theme="light">Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="light">Primary</button>
  <button type="button" class="btn btn-secondary" data-bs-theme="light">Secondary</button>
  <button type="button" class="btn btn-secondary" disabled data-bs-theme="light">Secondary</button>
  <button type="button" class="btn btn-outline-secondary" data-bs-theme="light">Outline secondary</button>
  <button type="button" class="btn btn-outline-secondary" disabled data-bs-theme="light">Outline secondary</button>
  <button type="button" class="btn btn-success" data-bs-theme="light">Success</button>
  <button type="button" class="btn btn-success" disabled data-bs-theme="light">Success</button>
  <button type="button" class="btn btn-danger" data-bs-theme="light">Danger</button>
  <button type="button" class="btn btn-danger" disabled data-bs-theme="light">Danger</button>
  <button type="button" class="btn btn-link" data-bs-theme="light">Link</button>
  <button type="button" class="btn btn-link" disabled data-bs-theme="light">Link</button>
  <button type="button" class="btn btn-primary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-secondary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-secondary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="overflow-visible"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#success"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary dropdown-toggle" type="button" disabled data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" data-bs-theme="light">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-secondary" type="button" disabled data-bs-theme="light">Large split button</button><button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
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
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
    <button type="button" class="btn btn-secondary" data-bs-theme="dark">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">
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
    <button type="button" class="btn btn-secondary" data-bs-theme="light">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="light">
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
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-secondary btn-inverse dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-secondary btn-inverse">Action</button>
    <button type="button" class="btn btn-secondary btn-inverse dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
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
