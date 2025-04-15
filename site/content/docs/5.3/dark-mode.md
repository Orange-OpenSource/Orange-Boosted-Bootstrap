---
layout: docs
title: Dark mode helper
description: Dark mode page helping to debug dark mode
aliases: "/dark-mode/"
toc: true
robots: noindex,follow
sitemap:
  disable: true
---

## Components

### Accordions

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <div class="accordion" id="accordionExample1">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseOne1"
                aria-expanded="true" aria-controls="accordionCollapseOne1">
          Accordion Item #1
        </button>
      </h2>
      <div id="accordionCollapseOne1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
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
                data-bs-target="#accordionCollapseTwo1" aria-expanded="false" aria-controls="accordionCollapseTwo1">
          Accordion Item #2
        </button>
      </h2>
      <div id="accordionCollapseTwo1" class="accordion-collapse collapse" data-bs-parent="#accordionExample1">
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

<div class="border p-3" data-bs-theme="dark">
  <div class="accordion" id="accordionExample2">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseOne2"
                aria-expanded="true" aria-controls="accordionCollapseOne2">
          Accordion Item #1
        </button>
      </h2>
      <div id="accordionCollapseOne2" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
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
                data-bs-target="#accordionCollapseTwo2" aria-expanded="false" aria-controls="accordionCollapseTwo2">
          Accordion Item #2
        </button>
      </h2>
      <div id="accordionCollapseTwo2" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
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

<div class="border p-3" data-bs-theme="light">
  <div class="accordion" id="accordionExample3">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordionCollapseOne3"
                aria-expanded="true" aria-controls="accordionCollapseOne3">
          Accordion Item #1
        </button>
      </h2>
      <div id="accordionCollapseOne3" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
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
                data-bs-target="#accordionCollapseTwo3" aria-expanded="false" aria-controls="accordionCollapseTwo3">
          Accordion Item #2
        </button>
      </h2>
      <div id="accordionCollapseTwo3" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
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

<div class="border p-3" style="background-color: #282d55">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="d-flex gap-2 flex-wrap border p-3">
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

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
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

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
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

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
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

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
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

### Badge

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <button type="button" class="btn btn-primary">
    Notifications <span class="badge text-bg-dark">4</span>
  </button>
  <div>
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <button type="button" class="btn btn-primary">
    Notifications <span class="badge text-bg-dark">4</span>
  </button>
  <div>
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <button type="button" class="btn btn-primary">
    Notifications <span class="badge text-bg-dark">4</span>
  </button>
  <div>
    <span class="badge text-bg-primary">Primary</span>
    <span class="badge text-bg-secondary">Secondary</span>
    <span class="badge text-bg-success">Success</span>
    <span class="badge text-bg-danger">Danger</span>
    <span class="badge text-bg-warning">Warning</span>
    <span class="badge text-bg-info">Info</span>
    <span class="badge text-bg-light">Light</span>
    <span class="badge text-bg-dark">Dark</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <button type="button" class="btn btn-primary" data-bs-theme="dark">
    Notifications <span class="badge text-bg-dark">4</span>
  </button>
  <div>
    <span class="badge text-bg-primary" data-bs-theme="dark">Primary</span>
    <span class="badge text-bg-secondary" data-bs-theme="dark">Secondary</span>
    <span class="badge text-bg-success" data-bs-theme="dark">Success</span>
    <span class="badge text-bg-danger" data-bs-theme="dark">Danger</span>
    <span class="badge text-bg-warning" data-bs-theme="dark">Warning</span>
    <span class="badge text-bg-info" data-bs-theme="dark">Info</span>
    <span class="badge text-bg-light" data-bs-theme="dark">Light</span>
    <span class="badge text-bg-dark" data-bs-theme="dark">Dark</span>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn btn-primary" data-bs-theme="light">
    Notifications <span class="badge text-bg-dark">4</span>
  </button>
  <div>
    <span class="badge text-bg-primary" data-bs-theme="light">Primary</span>
    <span class="badge text-bg-secondary" data-bs-theme="light">Secondary</span>
    <span class="badge text-bg-success" data-bs-theme="light">Success</span>
    <span class="badge text-bg-danger" data-bs-theme="light">Danger</span>
    <span class="badge text-bg-warning" data-bs-theme="light">Warning</span>
    <span class="badge text-bg-info" data-bs-theme="light">Info</span>
    <span class="badge text-bg-light" data-bs-theme="light">Light</span>
    <span class="badge text-bg-dark" data-bs-theme="light">Dark</span>
  </div>
</div>

### Breadcrumb

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="d-flex gap-2 flex-wrap border p-3">
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
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
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
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
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
  <button type="button" class="btn btn-primary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button">Large button</button></div>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" disabled>Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled>Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
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
  <button type="button" class="btn btn-primary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="dark"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="dark"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" disabled data-bs-theme="dark">Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled data-bs-theme="dark">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="dark"><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
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
  <button type="button" class="btn btn-primary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-primary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" class="me-1"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg>Primary</button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-theme="light"><svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/></svg></button>
  <a href="#" class="btn btn-icon btn-social btn-youtube" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <a class="btn btn-icon btn-social btn-youtube disabled" data-bs-theme="light"><span class="visually-hidden">YouTube</span></a>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-dropdown dropdown-toggle" type="button" disabled data-bs-theme="light">Large button</button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" data-bs-theme="light">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
  <div class="btn-group"><button class="btn btn-outline-secondary" type="button" disabled data-bs-theme="light">Large split button</button><button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" disabled data-bs-theme="light"><span class="visually-hidden">Toggle Dropdown</span></button></div>
</div>

### Card

<h4 class="mt-3">No theme</h4>

<div class="row row-cols-1 row-cols-xl-3 border p-3">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="row row-cols-1 row-cols-xl-3 border p-3" data-bs-theme="dark">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="row row-cols-1 row-cols-xl-3 border p-3" data-bs-theme="light">
  <div class="col">
    <div class="card">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="row row-cols-1 row-cols-xl-3 border p-3" style="background-color: #282d55;">
  <div class="col">
    <div class="card" data-bs-theme="dark">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="row row-cols-1 row-cols-xl-3 border p-3" style="background-color: #b5e8f7">
  <div class="col">
    <div class="card" data-bs-theme="light">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
        <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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
          <svg class="bd-placeholder-img card-img-top" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
            <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="border p-3">
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
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
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

<div class="border p-3" data-bs-theme="dark">
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
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
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

<div class="border p-3" data-bs-theme="light">
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
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
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

<div class="border p-3" style="background-color: #282d55;">
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
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
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

<div class="border p-3" style="background-color: #b5e8f7">
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
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-bg)"></rect><text x="50%" y="50%" fill="var(--bs-body-color)" dy=".3em">First slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">First slide label</h5>
          <p class="mb-0">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-body-color)"></rect><text x="50%" y="50%" fill="var(--bs-body-bg)" dy=".3em">Second slide</text></svg>
        <div class="carousel-caption d-none d-md-block">
          <h5 class="mb-0">Second slide label</h5>
          <p class="mb-0">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="#4bb4e6"></rect><text x="50%" y="50%" fill="#000" dy=".3em">Third slide</text></svg>
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

<div class="border p-3">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="dark">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light"><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn-close" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light" disabled><span class="visually-hidden">Close</span></button>
  <button type="button" class="btn btn-icon btn-no-outline" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-no-outline" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
  <button type="button" class="btn btn-icon btn-outline-secondary" disabled data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-theme="light">
    <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"></use></svg>
    <span class="visually-hidden">Close</span>
  </button>
</div>

### Dropdowns

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item active" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
    <button type="button" class="btn btn-outline-secondary">Action</button>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item active" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
    <button type="button" class="btn btn-outline-secondary">Action</button>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item active" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary">Action</button>
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
    <button type="button" class="btn btn-outline-secondary">Action</button>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Action</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55">
  <div class="btn-group">
    <div class="dropdown">
      <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Dropdown button</button>
      <ul class="dropdown-menu" data-bs-theme="dark">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item active" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-secondary">Action</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu" data-bs-theme="dark">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu" data-bs-theme="dark">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-secondary">Action</button>
  </div>

  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme="dark">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-secondary">Action</button>
    <button data-bs-theme="dark" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div>
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-primary">Primary</button>
    <button data-bs-theme="dark" type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-success">Success</button>
    <button data-bs-theme="dark" type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-info">Info</button>
    <button data-bs-theme="dark" type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-warning">Warning</button>
    <button data-bs-theme="dark" type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-danger">Danger</button>
    <button data-bs-theme="dark" type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-primary">Primary</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-success">Success</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-info">Info</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-warning">Warning</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="dark" type="button" class="btn btn-outline-danger">Danger</button>
    <button data-bs-theme="dark" type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div class="btn-group">
    <div class="dropdown">
      <button data-bs-theme="light" class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown button</button>
      <ul class="dropdown-menu" data-bs-theme="light">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item active" href="#">Another action</a></li>
        <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-secondary">Action</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu" data-bs-theme="light">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
  </div>
  <div class="btn-group dropstart">
    <button data-bs-theme="light" type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
    <ul class="dropdown-menu" data-bs-theme="light">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
    </ul>
    <button data-bs-theme="light" type="button" class="btn btn-outline-secondary">Action</button>
  </div>

  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Primary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Secondary</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Success</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Info</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Warning</button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Danger</button>
  </div><!-- /btn-group -->

  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-secondary">Action</button>
    <button data-bs-theme="light" type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div>
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-primary">Primary</button>
    <button data-bs-theme="light" type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-success">Success</button>
    <button data-bs-theme="light" type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-info">Info</button>
    <button data-bs-theme="light" type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-warning">Warning</button>
    <button data-bs-theme="light" type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-danger">Danger</button>
    <button data-bs-theme="light" type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-primary">Primary</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-success">Success</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-info">Info</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-warning">Warning</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
  <div class="btn-group">
    <button data-bs-theme="light" type="button" class="btn btn-outline-danger">Danger</button>
    <button data-bs-theme="light" type="button" class="btn btn-outline-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle Dropdown</span></button>
  </div><!-- /btn-group -->
</div>

<h4 class="mt-3">Dark dropdown variant for retro-compatibility</h4>

<div class="d-flex gap-2 flex-wrap border p-3 bg-black">
  <div class="dropdown">
    <button class="btn btn-dropdown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown button
    </button>
    <ul class="dropdown-menu dropdown-menu-dark">
      <li><a class="dropdown-item active" href="#">Action</a></li>
      <li><a class="dropdown-item active" href="#">Another action</a></li>
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
      <li><a class="dropdown-item active" href="#">Another action</a></li>
      <li><a class="dropdown-item disabled" aria-disabled="true">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </div>
</div>

### Footer

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <footer class="footer navbar">
    <h2 class="visually-hidden">Sitemap &amp; information</h2>
    <div class="container-xxl footer-title-content">
      <h3 class="footer-heading">Sign up to our mailing list</h3>
      <div class="row">
        <form class="d-flex col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 gap-2 gap-md-3">
          <label for="inputEmail1" class="visually-hidden">Email</label>
          <input type="email" class="form-control" id="inputEmail1" placeholder="Enter your email">
          <button type="submit" class="btn btn-outline-secondary text-nowrap">Sign up</button>
        </form>
      </div>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-social">
      <h3 class="footer-heading me-md-3">Follow us</h3>
      <ul class="navbar-nav gap-2 flex-row align-self-start">
        <li><a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">WhatsApp</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-nav">
      <nav class="accordion" id="accordion1" aria-label="Sitemap footer 1">
        <div class="row">
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingOne1">
              <button class="accordion-button container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseOne1" class="container-xxl accordion-collapse collapse show" data-bs-parent="#accordion1" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne1">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingTwo1">
              <button class="accordion-button container-xxl px-1 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseTwo1" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion1" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo1">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingThree1">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree1" aria-expanded="false" aria-controls="collapseThree1">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseThree1" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion1">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree1">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingFour1">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour1" aria-expanded="false" aria-controls="collapseFour1">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseFour1" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion1">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour1">Subcategory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-service">
      <ul class="navbar-nav gap-3 gap-md-4">
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#location-pin-compass"></use></svg><span>Store locator</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#mobile-network-coverage"></use></svg><span>Coverage checker</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#live-chat"></use></svg><span>Contact us</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#child-protection"></use></svg><span>Child protection</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-terms">
      <ul class="navbar-nav gap-md-3">
        <li class="fw-bold">© Orange {{ now.Format "2006" }}</li>
        <li><a class="nav-link" href="#">Terms and conditions</a></li>
        <li><a class="nav-link" href="#">Privacy</a></li>
        <li><a class="nav-link" href="#">Accessibility statement</a></li>
        <li><a class="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <footer class="footer navbar">
    <h2 class="visually-hidden">Sitemap &amp; information</h2>
    <div class="container-xxl footer-title-content">
      <h3 class="footer-heading">Sign up to our mailing list</h3>
      <div class="row">
        <form class="d-flex col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 gap-2 gap-md-3">
          <label for="inputEmail2" class="visually-hidden">Email</label>
          <input type="email" class="form-control" id="inputEmail2" placeholder="Enter your email">
          <button type="submit" class="btn btn-outline-secondary text-nowrap">Sign up</button>
        </form>
      </div>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-social">
      <h3 class="footer-heading me-md-3">Follow us</h3>
      <ul class="navbar-nav gap-2 flex-row align-self-start">
        <li><a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">WhatsApp</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-nav">
      <nav class="accordion" id="accordion2" aria-label="Sitemap footer 2">
        <div class="row">
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingOne2">
              <button class="accordion-button container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseOne2" class="container-xxl accordion-collapse collapse show" data-bs-parent="#accordion2" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne2">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingTwo2">
              <button class="accordion-button container-xxl px-1 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseTwo2" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion2" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo2">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingThree2">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseThree2" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion2">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree2">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingFour2">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseFour2" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion2">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour2">Subcategory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-service">
      <ul class="navbar-nav gap-3 gap-md-4">
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#location-pin-compass"></use></svg><span>Store locator</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#mobile-network-coverage"></use></svg><span>Coverage checker</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#live-chat"></use></svg><span>Contact us</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#child-protection"></use></svg><span>Child protection</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-terms">
      <ul class="navbar-nav gap-md-3">
        <li class="fw-bold">© Orange {{ now.Format "2006" }}</li>
        <li><a class="nav-link" href="#">Terms and conditions</a></li>
        <li><a class="nav-link" href="#">Privacy</a></li>
        <li><a class="nav-link" href="#">Accessibility statement</a></li>
        <li><a class="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <footer class="footer navbar">
    <h2 class="visually-hidden">Sitemap &amp; information</h2>
    <div class="container-xxl footer-title-content">
      <h3 class="footer-heading">Sign up to our mailing list</h3>
      <div class="row">
        <form class="d-flex col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 gap-2 gap-md-3">
          <label for="inputEmail3" class="visually-hidden">Email</label>
          <input type="email" class="form-control" id="inputEmail3" placeholder="Enter your email">
          <button type="submit" class="btn btn-outline-secondary text-nowrap">Sign up</button>
        </form>
      </div>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-social">
      <h3 class="footer-heading me-md-3">Follow us</h3>
      <ul class="navbar-nav gap-2 flex-row align-self-start">
        <li><a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">WhatsApp</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-nav">
      <nav class="accordion" id="accordion3" aria-label="Sitemap footer 3">
        <div class="row">
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingOne3">
              <button class="accordion-button container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseOne3" class="container-xxl accordion-collapse collapse show" data-bs-parent="#accordion3" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne3">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingTwo3">
              <button class="accordion-button container-xxl px-1 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseTwo3" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion3" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo3">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingThree3">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseThree3" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion3">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree3">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingFour3">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour3" aria-expanded="false" aria-controls="collapseFour3">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseFour3" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion3">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour3">Subcategory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-service">
      <ul class="navbar-nav gap-3 gap-md-4">
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#location-pin-compass"></use></svg><span>Store locator</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#mobile-network-coverage"></use></svg><span>Coverage checker</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#live-chat"></use></svg><span>Contact us</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#child-protection"></use></svg><span>Child protection</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-terms">
      <ul class="navbar-nav gap-md-3">
        <li class="fw-bold">© Orange {{ now.Format "2006" }}</li>
        <li><a class="nav-link" href="#">Terms and conditions</a></li>
        <li><a class="nav-link" href="#">Privacy</a></li>
        <li><a class="nav-link" href="#">Accessibility statement</a></li>
        <li><a class="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <footer class="footer navbar" data-bs-theme="dark">
    <h2 class="visually-hidden">Sitemap &amp; information</h2>
    <div class="container-xxl footer-title-content">
      <h3 class="footer-heading">Sign up to our mailing list</h3>
      <div class="row">
        <form class="d-flex col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 gap-2 gap-md-3">
          <label for="inputEmail4" class="visually-hidden">Email</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Enter your email">
          <button type="submit" class="btn btn-outline-secondary text-nowrap">Sign up</button>
        </form>
      </div>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-social">
      <h3 class="footer-heading me-md-3">Follow us</h3>
      <ul class="navbar-nav gap-2 flex-row align-self-start">
        <li><a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">WhatsApp</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-nav">
      <nav class="accordion" id="accordion4" aria-label="Sitemap footer 4">
        <div class="row">
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingOne4">
              <button class="accordion-button container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseOne4" class="container-xxl accordion-collapse collapse show" data-bs-parent="#accordion4" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne4">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingTwo4">
              <button class="accordion-button container-xxl px-1 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseTwo4" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion4" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo4">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingThree4">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseThree4" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion4">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree4">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingFour4">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseFour4" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion4">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour4">Subcategory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-service">
      <ul class="navbar-nav gap-3 gap-md-4">
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#location-pin-compass"></use></svg><span>Store locator</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#mobile-network-coverage"></use></svg><span>Coverage checker</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#live-chat"></use></svg><span>Contact us</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#child-protection"></use></svg><span>Child protection</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-terms">
      <ul class="navbar-nav gap-md-3">
        <li class="fw-bold">© Orange {{ now.Format "2006" }}</li>
        <li><a class="nav-link" href="#">Terms and conditions</a></li>
        <li><a class="nav-link" href="#">Privacy</a></li>
        <li><a class="nav-link" href="#">Accessibility statement</a></li>
        <li><a class="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <footer class="footer navbar" data-bs-theme="light">
    <h2 class="visually-hidden">Sitemap &amp; information</h2>
    <div class="container-xxl footer-title-content">
      <h3 class="footer-heading">Sign up to our mailing list</h3>
      <div class="row">
        <form class="d-flex col-12 col-md-9 col-lg-7 col-xl-6 col-xxl-5 gap-2 gap-md-3">
          <label for="inputEmail5" class="visually-hidden">Email</label>
          <input type="email" class="form-control" id="inputEmail5" placeholder="Enter your email">
          <button type="submit" class="btn btn-outline-secondary text-nowrap">Sign up</button>
        </form>
      </div>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-social">
      <h3 class="footer-heading me-md-3">Follow us</h3>
      <ul class="navbar-nav gap-2 flex-row align-self-start">
        <li><a href="#" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">WhatsApp</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-tiktok"><span class="visually-hidden">TikTok</span></a></li>
        <li><a href="#" class="btn btn-icon btn-social btn-x"><span class="visually-hidden">X</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-nav">
      <nav class="accordion" id="accordion5" aria-label="Sitemap footer 5">
        <div class="row">
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingOne5">
              <button class="accordion-button container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseOne5" class="container-xxl accordion-collapse collapse show" data-bs-parent="#accordion5" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingOne5">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingTwo5">
              <button class="accordion-button container-xxl px-1 d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseTwo5" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion5" style="">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingTwo5">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingThree5">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false" aria-controls="collapseThree5">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseThree5" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion5">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingThree5">Subcategory</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-column col-md-3">
            <h3 class="accordion-header footer-heading" id="headingFour5">
              <button class="accordion-button collapsed container-xxl px-1 d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour5" aria-expanded="false" aria-controls="collapseFour5">
                Category
              </button>
              <span class="d-none d-md-flex">Category</span>
            </h3>
            <div id="collapseFour5" class="container-xxl accordion-collapse collapse" data-bs-parent="#accordion5">
              <ul class="navbar-nav">
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
                <li><a class="nav-link" href="#" aria-describedby="headingFour5">Subcategory</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-service">
      <ul class="navbar-nav gap-3 gap-md-4">
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#location-pin-compass"></use></svg><span>Store locator</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#mobile-network-coverage"></use></svg><span>Coverage checker</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#live-chat"></use></svg><span>Contact us</span></a></li>
        <li><a class="nav-link gap-1" href="#"><svg width="1.875rem" height="1.875rem" aria-hidden="true"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#child-protection"></use></svg><span>Child protection</span></a></li>
      </ul>
    </div>
    <div class="border-bottom border-1 border-dark"></div>
    <div class="container-xxl footer-terms">
      <ul class="navbar-nav gap-md-3">
        <li class="fw-bold">© Orange {{ now.Format "2006" }}</li>
        <li><a class="nav-link" href="#">Terms and conditions</a></li>
        <li><a class="nav-link" href="#">Privacy</a></li>
        <li><a class="nav-link" href="#">Accessibility statement</a></li>
        <li><a class="nav-link" href="#">Cookie policy</a></li>
      </ul>
    </div>
  </footer>
</div>

### List group

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3">
  <ol class="list-group list-group-numbered">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-info disabled" aria-disabled="true">A simple disabled info list group item</li>
  </ol>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-success">A simple success list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info">A simple info list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-warning">A simple warning list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-danger">A simple danger list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info" disabled>A simple disabled info list group item</button>
  </div>
  <ul class="list-group list-group-horizontal-xxl">
    <li class="list-group-item">An item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
  </ul>
  <div class="list-group list-group-horizontal-xxl">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" data-bs-theme="dark">
  <ol class="list-group list-group-numbered">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-info disabled" aria-disabled="true">A simple disabled info list group item</li>
  </ol>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-success">A simple success list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info">A simple info list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-warning">A simple warning list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-danger">A simple danger list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info" disabled>A simple disabled info list group item</button>
  </div>
  <ul class="list-group list-group-horizontal-xxl">
    <li class="list-group-item">An item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
  </ul>
  <div class="list-group list-group-horizontal-xxl">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" data-bs-theme="light">
  <ol class="list-group list-group-numbered">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-info disabled" aria-disabled="true">A simple disabled info list group item</li>
  </ol>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-success">A simple success list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info">A simple info list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-warning">A simple warning list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-danger">A simple danger list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info" disabled>A simple disabled info list group item</button>
  </div>
  <ul class="list-group list-group-horizontal-xxl">
    <li class="list-group-item">An item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
  </ul>
  <div class="list-group list-group-horizontal-xxl">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" style="background-color: #282d55;">
  <ol class="list-group list-group-numbered" data-bs-theme="dark">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-info disabled" aria-disabled="true">A simple disabled info list group item</li>
  </ol>
  <div class="list-group" data-bs-theme="dark">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-success">A simple success list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info">A simple info list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-warning">A simple warning list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-danger">A simple danger list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info" disabled>A simple disabled info list group item</button>
  </div>
  <ul class="list-group list-group-horizontal-xxl" data-bs-theme="dark">
    <li class="list-group-item">An item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
  </ul>
  <div class="list-group list-group-horizontal-xxl" data-bs-theme="dark">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" style="background-color: #b5e8f7">
  <ol class="list-group list-group-numbered" data-bs-theme="light">
    <li class="list-group-item">A list item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
    <li class="list-group-item list-group-item-success">A simple success list group item</li>
    <li class="list-group-item list-group-item-info">A simple info list group item</li>
    <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
    <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
    <li class="list-group-item list-group-item-info disabled" aria-disabled="true">A simple disabled info list group item</li>
  </ol>
  <div class="list-group" data-bs-theme="light">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-success">A simple success list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info">A simple info list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-warning">A simple warning list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-danger">A simple danger list group item</button>
    <button type="button" class="list-group-item list-group-item-action text-no-wrap list-group-item-info" disabled>A simple disabled info list group item</button>
  </div>
  <ul class="list-group list-group-horizontal-xxl" data-bs-theme="light">
    <li class="list-group-item">An item</li>
    <li class="list-group-item active" aria-current="true">A list item</li>
    <li class="list-group-item disabled" aria-disabled="true">A list item</li>
  </ul>
  <div class="list-group list-group-horizontal-xxl" data-bs-theme="light">
    <button type="button" class="list-group-item list-group-item-action text-nowrap">A second button item</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap active" aria-current="true">The current button</button>
    <button type="button" class="list-group-item list-group-item-action text-nowrap" disabled>A disabled button item</button>
  </div>
</div>

### Local navigation

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample1">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample1" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="border p-3" data-bs-theme="dark">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample2">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample2" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="border p-3" data-bs-theme="light">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample3">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample3" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="border p-3" style="background-color: #282d55;">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample4" data-bs-theme="dark">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample4" tabindex="-1" aria-hidden="true" data-bs-theme="dark">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

<div class="border p-3" style="background-color: #b5e8f7">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalExample5" data-bs-theme="light">
    Launch modal
  </button>

  <div class="modal fade" id="modalExample5" tabindex="-1" aria-hidden="true" data-bs-theme="light">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <svg class="modal-img" width="100%" height="260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" ><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/>
          <svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill="var(--bs-border-color-subtle)" aria-hidden="true">
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

### Navbar

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Ii</h1>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end flex-grow-1" id="navbarExample">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-auto mt-lg-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Ii</h1>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample2" aria-controls="navbarExample2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end flex-grow-1" id="navbarExample2">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-auto mt-lg-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Ii</h1>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample3" aria-controls="navbarExample3" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end flex-grow-1" id="navbarExample3">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-auto mt-lg-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Ii</h1>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample4" aria-controls="navbarExample4" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end flex-grow-1" id="navbarExample4">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-auto mt-lg-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <nav class="navbar navbar-expand-lg" data-bs-theme="light">
    <div class="container-fluid">
      <div class="navbar-brand">
        <a class="stretched-link" href="#">
          <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" width="50" height="50" alt="Boosted - Back to Home" loading="lazy">
        </a>
        <h1 class="title">Ii</h1>
      </div>
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarExample5" aria-controls="navbarExample5" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse align-items-end flex-grow-1" id="navbarExample5">
        <ul class="navbar-nav me-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex navbar-item ms-lg-auto mt-lg-4" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

### Navs & tabs

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

### Orange navbar

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <header>
    <nav class="navbar navbar-expand-lg supra" aria-label="Supra navigation1">
      <div class="container-xxl">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation1">
      <div class="container-xxl">
        <div class="navbar-brand me-auto">
          <a class="stretched-link" href="#">
            <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" alt="Boosted - Back to Home" loading="lazy" width="50" height="50">
          </a>
          <h1 class="title">Test</h1>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header1" aria-controls="global-header.11 global-header.21" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-header.21" class="navbar-collapse collapse d-sm-flex global-header1">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#search"></use>
                </svg>
                <span class="visually-hidden">Search</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"></use>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-relative align-self-start">
                  <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                    1
                    <span class="visually-hidden">shopping basket items</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <img src="/docs/{{< param docs_version >}}/assets/img/navbar-contact.png" alt="" loading="lazy" width="25" height="25">
                <span class="visually-hidden">My account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Standard example with nav-under.2">
      <div class="container-xxl">
        <div id="global-header.11" class="navbar-collapse collapse m-0 global-header1">
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <header>
    <nav class="navbar navbar-expand-lg supra" aria-label="Supra navigation2">
      <div class="container-xxl">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation2">
      <div class="container-xxl">
        <div class="navbar-brand me-auto">
          <a class="stretched-link" href="#">
            <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" alt="Boosted - Back to Home" loading="lazy" width="50" height="50">
          </a>
          <h1 class="title">Test</h1>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header2" aria-controls="global-header.12 global-header.22" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-header.22" class="navbar-collapse collapse d-sm-flex global-header2">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#search"></use>
                </svg>
                <span class="visually-hidden">Search</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"></use>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-relative align-self-start">
                  <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                    1
                    <span class="visually-hidden">shopping basket items</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <img src="/docs/{{< param docs_version >}}/assets/img/navbar-contact.png" alt="" loading="lazy" width="25" height="25">
                <span class="visually-hidden">My account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Standard example with nav-under.2">
      <div class="container-xxl">
        <div id="global-header.12" class="navbar-collapse collapse m-0 global-header2">
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <header>
    <nav class="navbar navbar-expand-lg supra" aria-label="Supra navigation3">
      <div class="container-xxl">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation3">
      <div class="container-xxl">
        <div class="navbar-brand me-auto">
          <a class="stretched-link" href="#">
            <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" alt="Boosted - Back to Home" loading="lazy" width="50" height="50">
          </a>
          <h1 class="title">Test</h1>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header3" aria-controls="global-header.13 global-header.23" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-header.23" class="navbar-collapse collapse d-sm-flex global-header3">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#search"></use>
                </svg>
                <span class="visually-hidden">Search</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"></use>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-relative align-self-start">
                  <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                    1
                    <span class="visually-hidden">shopping basket items</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <img src="/docs/{{< param docs_version >}}/assets/img/navbar-contact.png" alt="" loading="lazy" width="25" height="25">
                <span class="visually-hidden">My account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" aria-label="Global navigation - Standard example with nav-under.2">
      <div class="container-xxl">
        <div id="global-header.13" class="navbar-collapse collapse m-0 global-header3">
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <header>
    <nav class="navbar navbar-expand-lg supra" data-bs-theme="dark" aria-label="Supra navigation4">
      <div class="container-xxl">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark" aria-label="Global navigation4">
      <div class="container-xxl">
        <div class="navbar-brand me-auto">
          <a class="stretched-link" href="#">
            <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" alt="Boosted - Back to Home" loading="lazy" width="50" height="50">
          </a>
          <h1 class="title">Test</h1>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header4" aria-controls="global-header.14 global-header.24" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-header.24" class="navbar-collapse collapse d-sm-flex global-header4">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#search"></use>
                </svg>
                <span class="visually-hidden">Search</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"></use>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-relative align-self-start">
                  <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                    1
                    <span class="visually-hidden">shopping basket items</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <img src="/docs/{{< param docs_version >}}/assets/img/navbar-contact.png" alt="" loading="lazy" width="25" height="25">
                <span class="visually-hidden">My account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" data-bs-theme="dark" aria-label="Global navigation - Standard example with nav-under.2">
      <div class="container-xxl">
        <div id="global-header.14" class="navbar-collapse collapse m-0 global-header4">
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <header>
    <nav class="navbar navbar-expand-lg supra" data-bs-theme="light" aria-label="Supra navigation5">
      <div class="container-xxl">
        <ul class="navbar-nav me-auto">
          <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
          <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" data-bs-theme="light" aria-label="Global navigation5">
      <div class="container-xxl">
        <div class="navbar-brand me-auto">
          <a class="stretched-link" href="#">
            <img src="/docs/{{< param docs_version >}}/assets/brand/orange-logo.svg" alt="Boosted - Back to Home" loading="lazy" width="50" height="50">
          </a>
          <h1 class="title">Test</h1>
        </div>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target=".global-header5" aria-controls="global-header.15 global-header.25" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="global-header.25" class="navbar-collapse collapse d-sm-flex global-header5">
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#search"></use>
                </svg>
                <span class="visually-hidden">Search</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"></use>
                </svg>
                <span class="visually-hidden">Basket</span>
                <span class="position-relative align-self-start">
                  <span class="badge text-bg-info rounded-pill position-absolute top-0 fs-6 translate-middle">
                    1
                    <span class="visually-hidden">shopping basket items</span>
                  </span>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link nav-icon">
                <img src="/docs/{{< param docs_version >}}/assets/img/navbar-contact.png" alt="" loading="lazy" width="25" height="25">
                <span class="visually-hidden">My account</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg" data-bs-theme="light" aria-label="Global navigation - Standard example with nav-under.2">
      <div class="container-xxl">
        <div id="global-header.15" class="navbar-collapse collapse m-0 global-header5">
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Personal</a></li>
            <li class="nav-item"><a href="#" class="nav-link">Business</a></li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
          <ul class="navbar-nav border-top border-1 border-dark d-flex flex-row d-lg-none supra">
            <li class="nav-item"><a class="nav-link active" href="#" aria-label="EN English version" aria-current="true">EN</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="FR Version française" hreflang="fr" lang="fr">FR</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-label="ES Versión en español" hreflang="es" lang="es">ES</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</div>

### Pagination

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 border p-3">
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

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="dark">
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

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="light">
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

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #282d55;">
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

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #b5e8f7">
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

### Placeholders

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 border p-3">
  <span class="placeholder col-12 bg-primary placeholder-wave"></span>
  <span class="placeholder col-12 bg-primary placeholder-glow"></span>
  <span class="placeholder col-12 bg-secondary placeholder-wave"></span>
  <span class="placeholder col-12 bg-secondary placeholder-glow"></span>
  <span class="placeholder col-12 bg-dark placeholder-wave"></span>
  <span class="placeholder col-12 bg-dark placeholder-glow"></span>
  <span class="placeholder col-12 bg-success placeholder-wave"></span>
  <span class="placeholder col-12 bg-success placeholder-glow"></span>
  <span class="placeholder col-12 bg-info placeholder-wave"></span>
  <span class="placeholder col-12 bg-info placeholder-glow"></span>
  <span class="placeholder col-12 bg-warning placeholder-wave"></span>
  <span class="placeholder col-12 bg-warning placeholder-glow"></span>
  <span class="placeholder col-12 bg-danger placeholder-wave"></span>
  <span class="placeholder col-12 bg-danger placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-glow"></span>
  <span class="placeholder col-12 bg-light placeholder-wave"></span>
  <span class="placeholder col-12 bg-light placeholder-glow"></span>
  <span class="placeholder col-12 bg-white placeholder-wave"></span>
  <span class="placeholder col-12 bg-white placeholder-glow"></span>
  <span class="placeholder col-12 bg-body placeholder-wave"></span>
  <span class="placeholder col-12 bg-body placeholder-glow"></span>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="dark">
  <span class="placeholder col-12 bg-primary placeholder-wave"></span>
  <span class="placeholder col-12 bg-primary placeholder-glow"></span>
  <span class="placeholder col-12 bg-secondary placeholder-wave"></span>
  <span class="placeholder col-12 bg-secondary placeholder-glow"></span>
  <span class="placeholder col-12 bg-dark placeholder-wave"></span>
  <span class="placeholder col-12 bg-dark placeholder-glow"></span>
  <span class="placeholder col-12 bg-success placeholder-wave"></span>
  <span class="placeholder col-12 bg-success placeholder-glow"></span>
  <span class="placeholder col-12 bg-info placeholder-wave"></span>
  <span class="placeholder col-12 bg-info placeholder-glow"></span>
  <span class="placeholder col-12 bg-warning placeholder-wave"></span>
  <span class="placeholder col-12 bg-warning placeholder-glow"></span>
  <span class="placeholder col-12 bg-danger placeholder-wave"></span>
  <span class="placeholder col-12 bg-danger placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-glow"></span>
  <span class="placeholder col-12 bg-light placeholder-wave"></span>
  <span class="placeholder col-12 bg-light placeholder-glow"></span>
  <span class="placeholder col-12 bg-white placeholder-wave"></span>
  <span class="placeholder col-12 bg-white placeholder-glow"></span>
  <span class="placeholder col-12 bg-body placeholder-wave"></span>
  <span class="placeholder col-12 bg-body placeholder-glow"></span>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="light">
  <span class="placeholder col-12 bg-primary placeholder-wave"></span>
  <span class="placeholder col-12 bg-primary placeholder-glow"></span>
  <span class="placeholder col-12 bg-secondary placeholder-wave"></span>
  <span class="placeholder col-12 bg-secondary placeholder-glow"></span>
  <span class="placeholder col-12 bg-dark placeholder-wave"></span>
  <span class="placeholder col-12 bg-dark placeholder-glow"></span>
  <span class="placeholder col-12 bg-success placeholder-wave"></span>
  <span class="placeholder col-12 bg-success placeholder-glow"></span>
  <span class="placeholder col-12 bg-info placeholder-wave"></span>
  <span class="placeholder col-12 bg-info placeholder-glow"></span>
  <span class="placeholder col-12 bg-warning placeholder-wave"></span>
  <span class="placeholder col-12 bg-warning placeholder-glow"></span>
  <span class="placeholder col-12 bg-danger placeholder-wave"></span>
  <span class="placeholder col-12 bg-danger placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-green placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-purple placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-yellow placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-blue placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-pink placeholder-glow"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-wave"></span>
  <span class="placeholder col-12 bg-supporting-orange placeholder-glow"></span>
  <span class="placeholder col-12 bg-light placeholder-wave"></span>
  <span class="placeholder col-12 bg-light placeholder-glow"></span>
  <span class="placeholder col-12 bg-white placeholder-wave"></span>
  <span class="placeholder col-12 bg-white placeholder-glow"></span>
  <span class="placeholder col-12 bg-body placeholder-wave"></span>
  <span class="placeholder col-12 bg-body placeholder-glow"></span>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #282d55;">
  <span data-bs-theme="dark" class="placeholder col-12 bg-primary placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-primary placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-secondary placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-secondary placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-dark placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-dark placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-success placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-success placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-info placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-info placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-warning placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-warning placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-danger placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-danger placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-green placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-green placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-purple placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-purple placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-yellow placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-yellow placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-blue placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-blue placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-pink placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-pink placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-orange placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-supporting-orange placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-light placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-light placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-white placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-white placeholder-glow"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-body placeholder-wave"></span>
  <span data-bs-theme="dark" class="placeholder col-12 bg-body placeholder-glow"></span>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #b5e8f7">
  <span data-bs-theme="light" class="placeholder col-12 bg-primary placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-primary placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-secondary placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-secondary placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-dark placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-dark placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-success placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-success placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-info placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-info placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-warning placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-warning placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-danger placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-danger placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-green placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-green placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-purple placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-purple placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-yellow placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-yellow placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-blue placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-blue placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-pink placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-pink placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-orange placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-supporting-orange placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-light placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-light placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-white placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-white placeholder-glow"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-body placeholder-wave"></span>
  <span data-bs-theme="light" class="placeholder col-12 bg-body placeholder-glow"></span>
</div>

### Popovers

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" data-bs-theme="dark">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" data-bs-theme="light">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" style="background-color: #282d55;">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="dark"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-theme="dark">Click to toggle popover</button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" style="background-color: #b5e8f7">
  <div class="popover bs-popover-auto fade show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="light"><div class="popover-arrow" style="position: absolute; top: 0px; transform: translate(0px, 49px);"></div><h3 class="popover-header">Popover title</h3><div class="popover-body">And here's some amazing content. It's very engaging. Right?</div></div>
  <button type="button" class="btn btn-primary" data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-theme="light">Click to toggle popover</button>
</div>

### Progress

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 border p-3">
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
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
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

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="dark">
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
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
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

<div class="d-flex flex-column gap-2 border p-3" data-bs-theme="light">
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
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
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

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #282d55;">
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
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
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

<div class="d-flex flex-column gap-2 border p-3" style="background-color: #b5e8f7">
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
    <div class="progress-bar bg-danger" style="width: 100%">100%</div>
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

<div class="border p-3">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <div class="spinner-border" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="dark">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <div class="spinner-border" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border text-primary" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-border" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow text-primary" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow" role="status" data-bs-theme="light">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

### Stepped process

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3 d-flex">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3 d-flex" data-bs-theme="dark">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3 d-flex" data-bs-theme="light">
  <div class="sticker sticker-sm">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm">
    <svg width="35" height="35" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3 d-flex" style="background-color: #282d55;">
  <div class="sticker sticker-sm" data-bs-theme="dark">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm" data-bs-theme="dark">
    <svg width="35" height="35" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3 d-flex" style="background-color: #b5e8f7">
  <div class="sticker sticker-sm" data-bs-theme="light">
    <p class="mb-0">
      <span class="sticker-fs-s mb-0 d-block text-decoration-line-through" aria-hidden="true">69.99 €</span>
      <span class="sticker-fs-xl mb-0 d-block" aria-hidden="true">39.99 €</span>
      <span aria-hidden="true">Per month</span>
      <span class="visually-hidden">39.99 € per month instead of 69.99 €</span>
    </p>
  </div>
  <div class="sticker sticker-sm" data-bs-theme="light">
    <svg width="35" height="35" aria-hidden="true">
      <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick-confirmation"/>
    </svg>
    <p class="mb-2">
      <span class="sticker-fs-m">Free delivery</span>
    </p>
  </div>
</div>

### Tags

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile1" autocomplete="off">
      <label class="tag" for="btncheck-mobile1"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv1" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv1">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag21"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag51" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag51" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile-disabled1" autocomplete="off" disabled>
      <label class="tag" for="btncheck-mobile-disabled1"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
  </ul>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile2" autocomplete="off">
      <label class="tag" for="btncheck-mobile2"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv2" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv2">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag22"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag52" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag52" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile-disabled2" autocomplete="off" disabled>
      <label class="tag" for="btncheck-mobile-disabled2"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
  </ul>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile3" autocomplete="off">
      <label class="tag" for="btncheck-mobile3"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv3" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv3">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag23"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag53" aria-disabled="true">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag53" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile-disabled3" autocomplete="off" disabled>
      <label class="tag" for="btncheck-mobile-disabled3"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
  </ul>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile4" autocomplete="off">
      <label class="tag" for="btncheck-mobile4" data-bs-theme="dark"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv4" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv4" data-bs-theme="dark">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag24"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag54" aria-disabled="true" data-bs-theme="dark">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag54" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile-disabled4" autocomplete="off" disabled>
      <label class="tag" for="btncheck-mobile-disabled4" data-bs-theme="dark"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
  </ul>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <ul class="list-unstyled d-flex gap-2 flex-wrap m-0">
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile5" autocomplete="off">
      <label class="tag" for="btncheck-mobile5" data-bs-theme="light"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-tv5" autocomplete="off" checked>
      <label class="tag" for="btncheck-tv5" data-bs-theme="light">
        <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true">
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
      <svg width="1rem" height="1rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Dismissible tag
      <button class="close" aria-labelledby="labelTag25"><span class="visually-hidden">Close</span></button>
    </span></li>
    <li>
      <p><span class="tag disabled" id="labelTag55" aria-disabled="true" data-bs-theme="light">
        <svg fill="currentColor" width="1.5rem" height="1.5rem" aria-hidden="true">
          <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
        </svg>
        Input
        <button class="close" aria-labelledby="labelTag55" disabled><span class="visually-hidden">Close</span></button>
      </span></p>
    </li>
    <li>
      <input type="checkbox" class="btn-check" id="btncheck-mobile-disabled5" autocomplete="off" disabled>
      <label class="tag" for="btncheck-mobile-disabled5" data-bs-theme="light"><span class="visually-hidden">Filter by</span>Mobile</label>
    </li>
  </ul>
</div>

### Title bars

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <div class="title-bar">
    <div class="container-xxl">
      <h1 class="display-1">Title</h1>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <div class="title-bar">
    <div class="container-xxl">
      <h1 class="display-1">Title</h1>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <div class="title-bar">
    <div class="container-xxl">
      <h1 class="display-1">Title</h1>
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <div class="title-bar" data-bs-theme="dark">
    <div class="container-xxl">
      <h1 class="display-1">Title</h1>
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <div class="title-bar" data-bs-theme="light">
    <div class="container-xxl">
      <h1 class="display-1">Title</h1>
    </div>
  </div>
</div>

### Toasts

<h4 class="mt-3">No theme</h4>

<div class="bd-example border p-3">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"/>
      </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="bd-example border p-3 bg-body" data-bs-theme="dark">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"/>
      </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="bd-example border p-3 bg-body" data-bs-theme="light">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"/>
      </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="bd-example border p-3" style="background-color: #282d55;">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-theme="dark">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"/>
      </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="bd-example border p-3" style="background-color: #b5e8f7">
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-theme="light">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"/>
      </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

### Tooltips

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" data-bs-theme="dark">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" data-bs-theme="light">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" style="background-color: #282d55;">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="dark">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title" data-bs-theme="dark">Click to toggle tooltip</button>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap align-items-center border p-3" style="background-color: #b5e8f7">
  <div class="tooltip bs-tooltip-auto show position-relative" role="tooltip" data-popper-placement="right" data-bs-theme="light">
    <div class="tooltip-arrow position-absolute " style="transform: translate(0px, 14px);"></div>
    <div class="tooltip-inner">Tooltip</div>
  </div>
  <button type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-title="Tooltip title" data-bs-theme="light">Click to toggle tooltip</button>
</div>

## Contents

### Basic text elements

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column align-items-start border p-3">
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>H4</h4>
  <p>Paragraph</p>
  <a href="#">Link</a>
  <hr class="w-100">
  <ul>
    <li>First layer
      <ul>
        <li>Second layer
          <ul>
            <li>Third layer</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ol>
    <li>First layer
      <ol>
        <li>Second layer
          <ol>
            <li>Third layer</li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <dl>
    <dt>Description lists</dt>
    <dd>First description</dd>
    <dt>Second title</dt>
    <dd>Second description</dd>
  </dl>
  <code>Code example</code>
  <pre>Preformatted text</pre>
  <var>Variable text</var>
  <kbd>Keyboard input</kbd>
  <samp>Sample output</samp>
  <address>
    <strong>Address</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>
  <blockquote>
    Blockquote
  </blockquote>
  <figure>
    <blockquote class="blockquote">
      <p>Styles Blockquote</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Figcaption <cite title="Source Title">Source</cite>
    </figcaption>
  </figure>
  <abbr title="Abbreviation">Abbr</abbr>
  <details>
    <summary>Summary</summary>
    <p>Details</p>
  </details>
  <p><mark>highlight</mark></p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined.</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as bold text too.</em></p>
  <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a gray border around it: 200x200" preserveAspectRatio="xMidYMid slice" ><title>A generic square placeholder image with a gray border around it</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="#999" dy=".3em">200x200</text></svg>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column align-items-start border p-3" data-bs-theme="dark">
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>H4</h4>
  <p>Paragraph</p>
  <a href="#">Link</a>
  <hr class="w-100">
  <ul>
    <li>First layer
      <ul>
        <li>Second layer
          <ul>
            <li>Third layer</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ol>
    <li>First layer
      <ol>
        <li>Second layer
          <ol>
            <li>Third layer</li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <dl>
    <dt>Description lists</dt>
    <dd>First description</dd>
    <dt>Second title</dt>
    <dd>Second description</dd>
  </dl>
  <code>Code example</code>
  <pre>Preformatted text</pre>
  <var>Variable text</var>
  <kbd>Keyboard input</kbd>
  <samp>Sample output</samp>
  <address>
    <strong>Address</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>
  <blockquote>
    Blockquote
  </blockquote>
  <figure>
    <blockquote class="blockquote">
      <p>Styles Blockquote</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Figcaption <cite title="Source Title">Source</cite>
    </figcaption>
  </figure>
  <abbr title="Abbreviation">Abbr</abbr>
  <details>
    <summary>Summary</summary>
    <p>Details</p>
  </details>
  <p><mark>highlight</mark></p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined.</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as bold text too.</em></p>
  <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a gray border around it: 200x200" preserveAspectRatio="xMidYMid slice" ><title>A generic square placeholder image with a gray border around it</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="#999" dy=".3em">200x200</text></svg>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column align-items-start border p-3" data-bs-theme="light">
  <h1>H1</h1>
  <h2>H2</h2>
  <h3>H3</h3>
  <h4>H4</h4>
  <p>Paragraph</p>
  <a href="#">Link</a>
  <hr class="w-100">
  <ul>
    <li>First layer
      <ul>
        <li>Second layer
          <ul>
            <li>Third layer</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ol>
    <li>First layer
      <ol>
        <li>Second layer
          <ol>
            <li>Third layer</li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <dl>
    <dt>Description lists</dt>
    <dd>First description</dd>
    <dt>Second title</dt>
    <dd>Second description</dd>
  </dl>
  <code>Code example</code>
  <pre>Preformatted text</pre>
  <var>Variable text</var>
  <kbd>Keyboard input</kbd>
  <samp>Sample output</samp>
  <address>
    <strong>Address</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>
  <blockquote>
    Blockquote
  </blockquote>
  <figure>
    <blockquote class="blockquote">
      <p>Styles Blockquote</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Figcaption <cite title="Source Title">Source</cite>
    </figcaption>
  </figure>
  <abbr title="Abbreviation">Abbr</abbr>
  <details>
    <summary>Summary</summary>
    <p>Details</p>
  </details>
  <p><mark>highlight</mark></p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined.</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as bold text too.</em></p>
  <svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a gray border around it: 200x200" preserveAspectRatio="xMidYMid slice" ><title>A generic square placeholder image with a gray border around it</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="#999" dy=".3em">200x200</text></svg>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column align-items-start border p-3" style="background-color: #282d55;">
  <h1 data-bs-theme="dark">H1</h1>
  <h2 data-bs-theme="dark">H2</h2>
  <h3 data-bs-theme="dark">H3</h3>
  <h4 data-bs-theme="dark">H4</h4>
  <p data-bs-theme="dark">Paragraph</p>
  <a data-bs-theme="dark" href="#">Link</a>
  <hr class="w-100" data-bs-theme="dark">
  <ul data-bs-theme="dark">
    <li>First layer
      <ul>
        <li>Second layer
          <ul>
            <li>Third layer</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ol data-bs-theme="dark">
    <li>First layer
      <ol>
        <li>Second layer
          <ol>
            <li>Third layer</li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <dl data-bs-theme="dark">
    <dt>Description lists</dt>
    <dd>First description</dd>
    <dt>Second title</dt>
    <dd>Second description</dd>
  </dl>
  <code data-bs-theme="dark">Code example</code>
  <pre data-bs-theme="dark">Preformatted text</pre>
  <var data-bs-theme="dark">Variable text</var>
  <kbd data-bs-theme="dark">Keyboard input</kbd>
  <samp data-bs-theme="dark">Sample output</samp>
  <address data-bs-theme="dark">
    <strong>Address</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>
  <blockquote data-bs-theme="dark">
    Blockquote
  </blockquote>
  <figure data-bs-theme="dark">
    <blockquote class="blockquote">
      <p>Styles Blockquote</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Figcaption <cite title="Source Title">Source</cite>
    </figcaption>
  </figure>
  <abbr data-bs-theme="dark" title="Abbreviation">Abbr</abbr>
  <details data-bs-theme="dark">
    <summary>Summary</summary>
    <p>Details</p>
  </details>
  <p><mark data-bs-theme="dark">highlight</mark></p>
  <p><del data-bs-theme="dark">This line of text is meant to be treated as deleted text.</del></p>
  <p><s data-bs-theme="dark">This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins data-bs-theme="dark">This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u data-bs-theme="dark">This line of text will render as underlined.</u></p>
  <p><small data-bs-theme="dark">This line of text is meant to be treated as fine print.</small></p>
  <p><strong data-bs-theme="dark">This line rendered as bold text.</strong></p>
  <p><em data-bs-theme="dark">This line rendered as bold text too.</em></p>
  <svg data-bs-theme="dark" class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a gray border around it: 200x200" preserveAspectRatio="xMidYMid slice" ><title>A generic square placeholder image with a gray border around it</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="#999" dy=".3em">200x200</text></svg>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column align-items-start border p-3" style="background-color: #b5e8f7">
  <h1 data-bs-theme="light">H1</h1>
  <h2 data-bs-theme="light">H2</h2>
  <h3 data-bs-theme="light">H3</h3>
  <h4 data-bs-theme="light">H4</h4>
  <p data-bs-theme="light">Paragraph</p>
  <a data-bs-theme="light" href="#">Link</a>
  <hr class="w-100" data-bs-theme="light">
  <ul data-bs-theme="light">
    <li>First layer
      <ul>
        <li>Second layer
          <ul>
            <li>Third layer</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <ol data-bs-theme="light">
    <li>First layer
      <ol>
        <li>Second layer
          <ol>
            <li>Third layer</li>
          </ol>
        </li>
      </ol>
    </li>
  </ol>
  <dl data-bs-theme="light">
    <dt>Description lists</dt>
    <dd>First description</dd>
    <dt>Second title</dt>
    <dd>Second description</dd>
  </dl>
  <code data-bs-theme="light">Code example</code>
  <pre data-bs-theme="light">Preformatted text</pre>
  <var data-bs-theme="light">Variable text</var>
  <kbd data-bs-theme="light">Keyboard input</kbd>
  <samp data-bs-theme="light">Sample output</samp>
  <address data-bs-theme="light">
    <strong>Address</strong><br>
    1123 Fictional St,<br>
    San Francisco, CA 94103<br>
    <abbr title="Phone">P:</abbr> (123) 456-7890
  </address>
  <blockquote data-bs-theme="light">
    Blockquote
  </blockquote>
  <figure data-bs-theme="light">
    <blockquote class="blockquote">
      <p>Styles Blockquote</p>
    </blockquote>
    <figcaption class="blockquote-footer">
      Figcaption <cite title="Source Title">Source</cite>
    </figcaption>
  </figure>
  <abbr data-bs-theme="light" title="Abbreviation">Abbr</abbr>
  <details data-bs-theme="light">
    <summary>Summary</summary>
    <p>Details</p>
  </details>
  <p><mark data-bs-theme="light">highlight</mark></p>
  <p><del data-bs-theme="light">This line of text is meant to be treated as deleted text.</del></p>
  <p><s data-bs-theme="light">This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins data-bs-theme="light">This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u data-bs-theme="light">This line of text will render as underlined.</u></p>
  <p><small data-bs-theme="light">This line of text is meant to be treated as fine print.</small></p>
  <p><strong data-bs-theme="light">This line rendered as bold text.</strong></p>
  <p><em data-bs-theme="light">This line rendered as bold text too.</em></p>
  <svg data-bs-theme="light" class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a gray border around it: 200x200" preserveAspectRatio="xMidYMid slice" ><title>A generic square placeholder image with a gray border around it</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"/><text x="50%" y="50%" fill="#999" dy=".3em">200x200</text></svg>
</div>

### Basic form elements

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column border p-3">
  <fieldset>
    <legend>Example legend</legend>
    <p>
      <label for="input1">Example input</label>
      <input type="text" id="input1" placeholder="Example input">
    </p>
    <p>
      <label for="email1">Example email</label>
      <input type="email" id="email1" placeholder="test@example.com" class="">
    </p>
    <p>
      <label for="tel1">Example telephone</label>
      <input type="tel" id="tel1">
    </p>
    <p>
      <label for="url1">Example url</label>
      <input type="url" id="url1" class="">
    </p>
    <p>
      <label for="number1">Example number</label>
      <input type="number" id="number1">
    </p>
    <p>
      <label for="search1">Example search</label>
      <input type="search" id="search1">
    </p>
    <p>
      <label for="range1">Example range</label>
      <input type="range" id="range1" min="0" max="10">
    </p>
    <p>
      <label for="file1">Example file input</label>
      <input type="file" id="file1">
    </p>
    <p>
      <label for="select1">Example select</label>
      <select id="select1">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios1" id="optionsRadios11" value="option1" checked="">
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios1" id="optionsRadios21" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios1" id="optionsRadios31" value="option3" disabled="">
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea1">Example textarea</label>
      <textarea id="textarea1" rows="3"></textarea>
    </p>
    <p>
      <label for="date1">Example date</label>
      <input type="date" id="date1">
    </p>
    <p>
      <label for="time1">Example time</label>
      <input type="time" id="time1">
    </p>
    <p>
      <label for="password1">Example password</label>
      <input type="password" id="password1">
    </p>
    <p>
      <label for="datetime-local1">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local1">
    </p>
    <p>
      <label for="week1">Example week</label>
      <input type="week" id="week1">
    </p>
    <p>
      <label for="month1">Example month</label>
      <input type="month" id="month1">
    </p>
    <p>
      <label for="color1">Example color</label>
      <input type="color" id="color1">
    </p>
    <p>
      <label for="output1">Example output</label>
      <output name="result1" id="output1">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled="">Button submit</button>
      <input type="submit" value="Input submit button" disabled="">
      <input type="reset" value="Input reset button" disabled="">
      <input type="button" value="Input button" disabled="">
    </p>
  </fieldset>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <fieldset>
    <legend>Example legend</legend>
    <p>
      <label for="input2">Example input</label>
      <input type="text" id="input2" placeholder="Example input">
    </p>
    <p>
      <label for="email2">Example email</label>
      <input type="email" id="email2" placeholder="test@example.com" class="">
    </p>
    <p>
      <label for="tel2">Example telephone</label>
      <input type="tel" id="tel2">
    </p>
    <p>
      <label for="url2">Example url</label>
      <input type="url" id="url2" class="">
    </p>
    <p>
      <label for="number2">Example number</label>
      <input type="number" id="number2">
    </p>
    <p>
      <label for="search2">Example search</label>
      <input type="search" id="search2">
    </p>
    <p>
      <label for="range2">Example range</label>
      <input type="range" id="range2" min="0" max="10">
    </p>
    <p>
      <label for="file2">Example file input</label>
      <input type="file" id="file2">
    </p>
    <p>
      <label for="select2">Example select</label>
      <select id="select2">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios2" id="optionsRadios12" value="option1" checked="">
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios2" id="optionsRadios22" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios2" id="optionsRadios32" value="option3" disabled="">
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea2">Example textarea</label>
      <textarea id="textarea2" rows="3"></textarea>
    </p>
    <p>
      <label for="date2">Example date</label>
      <input type="date" id="date2">
    </p>
    <p>
      <label for="time2">Example time</label>
      <input type="time" id="time2">
    </p>
    <p>
      <label for="password2">Example password</label>
      <input type="password" id="password2">
    </p>
    <p>
      <label for="datetime-local2">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local2">
    </p>
    <p>
      <label for="week2">Example week</label>
      <input type="week" id="week2">
    </p>
    <p>
      <label for="month2">Example month</label>
      <input type="month" id="month2">
    </p>
    <p>
      <label for="color2">Example color</label>
      <input type="color" id="color2">
    </p>
    <p>
      <label for="output2">Example output</label>
      <output name="result2" id="output2">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled="">Button submit</button>
      <input type="submit" value="Input submit button" disabled="">
      <input type="reset" value="Input reset button" disabled="">
      <input type="button" value="Input button" disabled="">
    </p>
  </fieldset>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <fieldset>
    <legend>Example legend</legend>
    <p>
      <label for="input3">Example input</label>
      <input type="text" id="input3" placeholder="Example input">
    </p>
    <p>
      <label for="email3">Example email</label>
      <input type="email" id="email3" placeholder="test@example.com" class="">
    </p>
    <p>
      <label for="tel3">Example telephone</label>
      <input type="tel" id="tel3">
    </p>
    <p>
      <label for="url3">Example url</label>
      <input type="url" id="url3" class="">
    </p>
    <p>
      <label for="number3">Example number</label>
      <input type="number" id="number3">
    </p>
    <p>
      <label for="search3">Example search</label>
      <input type="search" id="search3">
    </p>
    <p>
      <label for="range3">Example range</label>
      <input type="range" id="range3" min="0" max="10">
    </p>
    <p>
      <label for="file3">Example file input</label>
      <input type="file" id="file3">
    </p>
    <p>
      <label for="select3">Example select</label>
      <select id="select3">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label>
        <input type="radio" name="optionsRadios3" id="optionsRadios13" value="option1" checked="">
        Option one is this and that
      </label>
      <label>
        <input type="radio" name="optionsRadios3" id="optionsRadios23" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label>
        <input type="radio" name="optionsRadios3" id="optionsRadios33" value="option3" disabled="">
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea3">Example textarea</label>
      <textarea id="textarea3" rows="3"></textarea>
    </p>
    <p>
      <label for="date3">Example date</label>
      <input type="date" id="date3">
    </p>
    <p>
      <label for="time3">Example time</label>
      <input type="time" id="time3">
    </p>
    <p>
      <label for="password3">Example password</label>
      <input type="password" id="password3">
    </p>
    <p>
      <label for="datetime-local3">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local3">
    </p>
    <p>
      <label for="week3">Example week</label>
      <input type="week" id="week3">
    </p>
    <p>
      <label for="month3">Example month</label>
      <input type="month" id="month3">
    </p>
    <p>
      <label for="color3">Example color</label>
      <input type="color" id="color3">
    </p>
    <p>
      <label for="output3">Example output</label>
      <output name="result3" id="output3">100</output>
    </p>
    <p>
      <button type="submit">Button submit</button>
      <input type="submit" value="Input submit button">
      <input type="reset" value="Input reset button">
      <input type="button" value="Input button">
    </p>
    <p>
      <button type="submit" disabled="">Button submit</button>
      <input type="submit" value="Input submit button" disabled="">
      <input type="reset" value="Input reset button" disabled="">
      <input type="button" value="Input button" disabled="">
    </p>
  </fieldset>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <fieldset>
    <legend data-bs-theme="dark">Example legend</legend>
    <p>
      <label for="input4" data-bs-theme="dark">Example input</label>
      <input type="text" id="input4" data-bs-theme="dark" placeholder="Example input">
    </p>
    <p>
      <label for="email4" data-bs-theme="dark">Example email</label>
      <input type="email" id="email4" data-bs-theme="dark" placeholder="test@example.com" class="">
    </p>
    <p>
      <label for="tel4" data-bs-theme="dark">Example telephone</label>
      <input type="tel" id="tel4" data-bs-theme="dark">
    </p>
    <p>
      <label for="url4" data-bs-theme="dark">Example url</label>
      <input type="url" id="url4" data-bs-theme="dark" class="">
    </p>
    <p>
      <label for="number4" data-bs-theme="dark">Example number</label>
      <input type="number" id="number4" data-bs-theme="dark">
    </p>
    <p>
      <label for="search4" data-bs-theme="dark">Example search</label>
      <input type="search" id="search4" data-bs-theme="dark">
    </p>
    <p>
      <label for="range4" data-bs-theme="dark">Example range</label>
      <input type="range" id="range4" data-bs-theme="dark" min="0" max="10">
    </p>
    <p>
      <label for="file4" data-bs-theme="dark">Example file input</label>
      <input type="file" id="file4" data-bs-theme="dark">
    </p>
    <p>
      <label for="select4" data-bs-theme="dark">Example select</label>
      <select id="select4" data-bs-theme="dark">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label data-bs-theme="dark">
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label data-bs-theme="dark">
        <input type="radio" name="optionsRadios4" id="optionsRadios14" value="option1" checked="">
        Option one is this and that
      </label>
      <label data-bs-theme="dark">
        <input type="radio" name="optionsRadios4" id="optionsRadios24" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label data-bs-theme="dark">
        <input type="radio" name="optionsRadios4" id="optionsRadios34" value="option3" disabled="">
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea4" data-bs-theme="dark">Example textarea</label>
      <textarea id="textarea4" data-bs-theme="dark" rows="3"></textarea>
    </p>
    <p>
      <label for="date4" data-bs-theme="dark">Example date</label>
      <input type="date" id="date4" data-bs-theme="dark">
    </p>
    <p>
      <label for="time4" data-bs-theme="dark">Example time</label>
      <input type="time" id="time4" data-bs-theme="dark">
    </p>
    <p>
      <label for="password4" data-bs-theme="dark">Example password</label>
      <input type="password" id="password4" data-bs-theme="dark">
    </p>
    <p>
      <label for="datetime-local4" data-bs-theme="dark">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local4" data-bs-theme="dark">
    </p>
    <p>
      <label for="week4" data-bs-theme="dark">Example week</label>
      <input type="week" id="week4" data-bs-theme="dark">
    </p>
    <p>
      <label for="month4" data-bs-theme="dark">Example month</label>
      <input type="month" id="month4" data-bs-theme="dark">
    </p>
    <p>
      <label for="color4" data-bs-theme="dark">Example color</label>
      <input type="color" id="color4" data-bs-theme="dark">
    </p>
    <p>
      <label for="output4" data-bs-theme="dark">Example output</label>
      <output name="result4" id="output4" data-bs-theme="dark">100</output>
    </p>
    <p>
      <button type="submit" data-bs-theme="dark">Button submit</button>
      <input type="submit" data-bs-theme="dark" value="Input submit button">
      <input type="reset" data-bs-theme="dark" value="Input reset button">
      <input type="button" data-bs-theme="dark" value="Input button">
    </p>
    <p>
      <button type="submit" data-bs-theme="dark" disabled="">Button submit</button>
      <input type="submit" data-bs-theme="dark" value="Input submit button" disabled="">
      <input type="reset" data-bs-theme="dark" value="Input reset button" disabled="">
      <input type="button" data-bs-theme="dark" value="Input button" disabled="">
    </p>
  </fieldset>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <fieldset>
    <legend data-bs-theme="light">Example legend</legend>
    <p>
      <label for="input5" data-bs-theme="light">Example input</label>
      <input type="text" id="input5" data-bs-theme="light" placeholder="Example input">
    </p>
    <p>
      <label for="email5" data-bs-theme="light">Example email</label>
      <input type="email" id="email5" data-bs-theme="light" placeholder="test@example.com" class="">
    </p>
    <p>
      <label for="tel5" data-bs-theme="light">Example telephone</label>
      <input type="tel" id="tel5" data-bs-theme="light">
    </p>
    <p>
      <label for="url5" data-bs-theme="light">Example url</label>
      <input type="url" id="url5" data-bs-theme="light" class="">
    </p>
    <p>
      <label for="number5" data-bs-theme="light">Example number</label>
      <input type="number" id="number5" data-bs-theme="light">
    </p>
    <p>
      <label for="search5" data-bs-theme="light">Example search</label>
      <input type="search" id="search5" data-bs-theme="light">
    </p>
    <p>
      <label for="range5" data-bs-theme="light">Example range</label>
      <input type="range" id="range5" data-bs-theme="light" min="0" max="10">
    </p>
    <p>
      <label for="file5" data-bs-theme="light">Example file input</label>
      <input type="file" id="file5" data-bs-theme="light">
    </p>
    <p>
      <label for="select5" data-bs-theme="light">Example select</label>
      <select id="select5" data-bs-theme="light">
        <option value="">Choose...</option>
        <optgroup label="Option group 1">
          <option value="">Option 1</option>
          <option value="">Option 2</option>
          <option value="">Option 3</option>
        </optgroup>
        <optgroup label="Option group 2">
          <option value="">Option 4</option>
          <option value="">Option 5</option>
          <option value="">Option 6</option>
        </optgroup>
      </select>
    </p>
    <p>
      <label data-bs-theme="light">
        <input type="checkbox" value="">
        Check this checkbox
      </label>
    </p>
    <p>
      <label data-bs-theme="light">
        <input type="radio" name="optionsRadios5" id="optionsRadios15" value="option1" checked="">
        Option one is this and that
      </label>
      <label data-bs-theme="light">
        <input type="radio" name="optionsRadios5" id="optionsRadios25" value="option2">
        Option two is something else that's also super long to demonstrate the wrapping of these fancy form controls.
      </label>
      <label data-bs-theme="light">
        <input type="radio" name="optionsRadios5" id="optionsRadios35" value="option3" disabled="">
        Option three is disabled
      </label>
    </p>
    <p>
      <label for="textarea5" data-bs-theme="light">Example textarea</label>
      <textarea id="textarea5" data-bs-theme="light" rows="3"></textarea>
    </p>
    <p>
      <label for="date5" data-bs-theme="light">Example date</label>
      <input type="date" id="date5" data-bs-theme="light">
    </p>
    <p>
      <label for="time5" data-bs-theme="light">Example time</label>
      <input type="time" id="time5" data-bs-theme="light">
    </p>
    <p>
      <label for="password5" data-bs-theme="light">Example password</label>
      <input type="password" id="password5" data-bs-theme="light">
    </p>
    <p>
      <label for="datetime-local5" data-bs-theme="light">Example datetime-local</label>
      <input type="datetime-local" id="datetime-local5" data-bs-theme="light">
    </p>
    <p>
      <label for="week5" data-bs-theme="light">Example week</label>
      <input type="week" id="week5" data-bs-theme="light">
    </p>
    <p>
      <label for="month5" data-bs-theme="light">Example month</label>
      <input type="month" id="month5" data-bs-theme="light">
    </p>
    <p>
      <label for="color5" data-bs-theme="light">Example color</label>
      <input type="color" id="color5" data-bs-theme="light">
    </p>
    <p>
      <label for="output5" data-bs-theme="light">Example output</label>
      <output name="result5" id="output5" data-bs-theme="light">100</output>
    </p>
    <p>
      <button type="submit" data-bs-theme="light">Button submit</button>
      <input type="submit" data-bs-theme="light" value="Input submit button">
      <input type="reset" data-bs-theme="light" value="Input reset button">
      <input type="button" data-bs-theme="light" value="Input button">
    </p>
    <p>
      <button type="submit" data-bs-theme="light" disabled="">Button submit</button>
      <input type="submit" data-bs-theme="light" value="Input submit button" disabled="">
      <input type="reset" data-bs-theme="light" value="Input reset button" disabled="">
      <input type="button" data-bs-theme="light" value="Input button" disabled="">
    </p>
  </fieldset>
</div>

### Tables

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <table class="table table-hover mb-5">
    <caption>Boosted tables basic and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover caption-bottom mb-5">
    <caption>Boosted tables striped and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover">
    <caption>Boosted tables when nested</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in active row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <table class="table table-hover mb-5">
    <caption>Boosted tables basic and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover caption-bottom mb-5">
    <caption>Boosted tables striped and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover">
    <caption>Boosted tables when nested</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in active row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <table class="table table-hover mb-5">
    <caption>Boosted tables basic and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover caption-bottom mb-5">
    <caption>Boosted tables striped and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover">
    <caption>Boosted tables when nested</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in active row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <table class="table table-hover mb-5" data-bs-theme="dark">
    <caption>Boosted tables basic and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover caption-bottom mb-5" data-bs-theme="dark">
    <caption>Boosted tables striped and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover" data-bs-theme="dark">
    <caption>Boosted tables when nested</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in active row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
    </tbody>
  </table>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <table class="table table-hover mb-5" data-bs-theme="light">
    <caption>Boosted tables basic and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover caption-bottom mb-5" data-bs-theme="light">
    <caption>Boosted tables striped and hover look</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
      <tr><th scope="row">2</th><td>Active</td><td class="table-active">Cell</td><td>@activeCell</td></tr>
      <tr><th scope="row">3</th><td colspan="2">Random</td><td>@random</td></tr>
      <tr><th scope="row">4</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
      <tr><th scope="row">5</th><td>Ring of</td><td>Kerry</td><td>@ireland</td></tr>
    </tbody>
  </table>
  <table class="table table-striped table-hover" data-bs-theme="light">
    <caption>Boosted tables when nested</caption>
    <thead>
      <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
    </thead>
    <tbody>
      <tr class="table-active"><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in active row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
      <tr><td colspan="4">
        <table class="table table-hover mb-0">
          <caption>Boosted nested table in striped row</caption>
          <thead>
            <tr><th scope="col">#</th><th scope="col">First</th><th scope="col">Last</th><th scope="col">Handle</th></tr>
          </thead>
          <tbody>
            <tr class="table-active"><th scope="row">1</th><td>Active</td><td>Row</td><td>@activeRow</td></tr>
            <tr><th scope="row">2</th><td>Skye</td><td>Island</td><td>@scotland</td></tr>
          </tbody>
        </table>
      </td></tr>
    </tbody>
  </table>
</div>

## Forms

### Color

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="light">
  <input type="color" class="form-control form-control-color" value="#a885d8" title="Choose your color" data-bs-theme="light" disabled>
</div>

### Checkboxes & Radios

<h4 class="mt-3">No theme</h4>

<div class="border p-3 bd-example-indeterminate">
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

<div class="border p-3 bd-example-indeterminate" data-bs-theme="dark">
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

<div class="border p-3 bd-example-indeterminate" data-bs-theme="light">
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

<div class="border p-3 bd-example-indeterminate" style="background-color: #282d55;">
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

<div class="border p-3 bd-example-indeterminate" style="background-color: #b5e8f7">
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

<div class="border p-3">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <input type="text" class="form-control" placeholder="Input placeholder">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" disabled>
  <textarea class="form-control" rows="2" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" readonly>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <input type="text" class="form-control" placeholder="Input placeholder" data-bs-theme="dark">
  <textarea class="form-control" rows="2" placeholder="Textarea placeholder" data-bs-theme="dark"></textarea>
  <input type="text" class="form-control" placeholder="Disabled input placeholder" data-bs-theme="dark" disabled>
  <textarea class="form-control" rows="2" data-bs-theme="dark" disabled>Disabled textarea placeholder</textarea>
  <input type="text" class="form-control" value="Readonly input value" data-bs-theme="dark" readonly>
  <textarea class="form-control" rows="2" placeholder="Readonly textarea placeholder" data-bs-theme="dark" readonly></textarea>
  <input type="text" class="form-control-plaintext" value="Readonly plaintext input" data-bs-theme="dark" readonly>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <input class="form-control" type="file">
  <input class="form-control" type="file" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <input class="form-control" type="file" data-bs-theme="dark">
  <input class="form-control" type="file" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <input class="form-control" type="file" data-bs-theme="light">
  <input class="form-control" type="file" data-bs-theme="light" disabled>
</div>

### Helper

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input" data-bs-theme="dark"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required" data-bs-theme="dark">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input" data-bs-theme="dark"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for input" data-bs-theme="light"><span class="visually-hidden">Helper for input</span></button>
  <div>
    <label class="form-label is-required" data-bs-theme="light">Input label</label>
    <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input" data-bs-theme="light"><span class="visually-hidden">Helper for input</span></button>
  </div>
</div>

### Input group

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button" disabled>Button</button>
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

<div class="border p-3" data-bs-theme="dark">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button" disabled>Button</button>
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

<div class="border p-3" data-bs-theme="light">
  <div class="mb-3">
    <div class="input-group">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group">
    <button class="btn btn-outline-secondary" type="button" disabled>Button</button>
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

<div class="border p-3" style="background-color: #282d55;">
  <div class="mb-3">
    <div class="input-group" data-bs-theme="dark">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group" data-bs-theme="dark">
    <button class="btn btn-outline-secondary" type="button" disabled>Button</button>
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

<div class="border p-3" style="background-color: #b5e8f7">
  <div class="mb-3">
    <div class="input-group" data-bs-theme="light">
      <span class="input-group-text">Input group text</span>
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="input-group" data-bs-theme="light">
    <button class="btn btn-outline-secondary" type="button" disabled>Button</button>
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

<div class="d-flex flex-column border p-3">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column border p-3" data-bs-theme="dark">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column border p-3" data-bs-theme="light">
  <label class="form-label">Form label</label>
  <label class="form-label is-required">Form label</label>
  <label class="form-label is-disabled">Form label</label>
  <label class="form-label is-required is-disabled">Form label</label>
  <div class="form-text">Form text helper</div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column border p-3" style="background-color: #282d55;">
  <label class="form-label" data-bs-theme="dark">Form label</label>
  <label class="form-label is-required" data-bs-theme="dark">Form label</label>
  <label class="form-label is-disabled" data-bs-theme="dark">Form label</label>
  <label class="form-label is-required is-disabled" data-bs-theme="dark">Form label</label>
  <div class="form-text" data-bs-theme="dark">Form text helper</div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column border p-3" style="background-color: #b5e8f7">
  <label class="form-label" data-bs-theme="light">Form label</label>
  <label class="form-label is-required" data-bs-theme="light">Form label</label>
  <label class="form-label is-disabled" data-bs-theme="light">Form label</label>
  <label class="form-label is-required is-disabled" data-bs-theme="light">Form label</label>
  <div class="form-text" data-bs-theme="light">Form text helper</div>
</div>

### Quantity selector

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 border p-3">
  <div class="quantity-selector">
    <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="quantity-selector">
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

<div class="d-flex gap-2 border p-3" data-bs-theme="dark">
  <div class="quantity-selector">
    <input type="number" id="inputQuantitySelector1" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector1" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="quantity-selector">
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

<div class="d-flex gap-2 border p-3" data-bs-theme="light">
  <div class="quantity-selector">
    <input type="number" id="inputQuantitySelector2" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector2" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector2" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="quantity-selector">
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

<div class="d-flex gap-2 border p-3" style="background-color: #282d55;">
  <div class="quantity-selector" data-bs-theme="dark">
    <input type="number" id="inputQuantitySelector3" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector3" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="quantity-selector" data-bs-theme="dark">
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

<div class="d-flex gap-2 border p-3" style="background-color: #b5e8f7">
  <div class="quantity-selector" data-bs-theme="light">
    <input type="number" id="inputQuantitySelector4" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="5" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector4" data-bs-step="down">
      <span class="visually-hidden">Step down</span>
    </button>
    <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector4" data-bs-step="up">
      <span class="visually-hidden">Step up</span>
    </button>
  </div>
  <div class="quantity-selector" data-bs-theme="light">
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

<div class="border p-3">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="border p-3" data-bs-theme="dark">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="border p-3" data-bs-theme="light">
  <input type="range" class="form-range">
  <input type="range" class="form-range" disabled>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="border p-3" style="background-color: #282d55;">
  <input type="range" class="form-range" data-bs-theme="dark">
  <input type="range" class="form-range" data-bs-theme="dark" disabled>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="border p-3" style="background-color: #b5e8f7">
  <input type="range" class="form-range" data-bs-theme="light">
  <input type="range" class="form-range" data-bs-theme="light" disabled>
</div>

### Select

<h4 class="mt-3">No theme</h4>

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="border p-3">
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

<div class="border p-3" data-bs-theme="dark">
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

<div class="border p-3" data-bs-theme="light">
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

<div class="border p-3" style="background-color: #282d55;">
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

<div class="border p-3" style="background-color: #b5e8f7">
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

<div class="d-flex border p-3">
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

<div class="d-flex border p-3" data-bs-theme="dark">
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

<div class="d-flex border p-3" data-bs-theme="light">
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

<div class="d-flex border p-3" style="background-color: #282d55;">
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

<div class="d-flex border p-3" style="background-color: #b5e8f7">
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

### Toggle buttons

<h4 class="mt-3">No theme</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3">
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check1" autocomplete="off">
    <label class="btn btn-toggle" for="btn-check1">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check2" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btn-check2">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check3" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btn-check3">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-primary1" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-primary1">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary2" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btn-check-primary2">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary3" autocomplete="off" disabled>
    <label class="btn btn-outline-primary" for="btn-check-primary3">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-secondary1" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-secondary1">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary2" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btn-check-secondary2">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary3" autocomplete="off" disabled>
    <label class="btn btn-outline-secondary" for="btn-check-secondary3">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-success1" autocomplete="off">
    <label class="btn btn-outline-success" for="btn-check-success1">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success2" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="btn-check-success2">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success3" autocomplete="off" disabled>
    <label class="btn btn-outline-success" for="btn-check-success3">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-danger1" autocomplete="off">
    <label class="btn btn-outline-danger" for="btn-check-danger1">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger2" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="btn-check-danger2">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger3" autocomplete="off" disabled>
    <label class="btn btn-outline-danger" for="btn-check-danger3">Single toggle</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btncheck1">Checked</label>
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
    <label class="btn btn-toggle" for="btncheck2">Checkbox</label>
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btncheck3">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
    <label class="btn btn-toggle" for="option1">Checked</label>
    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
    <label class="btn btn-toggle" for="option2">Radio</label>
    <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="option3">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="icons" id="option5" autocomplete="off" checked>
    <label class="btn btn-icon btn-toggle" for="option5">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="icons" id="option6" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option6">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option7">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="iconsNoOutline" id="option8" autocomplete="off" checked>
    <label class="btn btn-icon btn-no-outline" for="option8">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline" id="option9" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option9">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline" id="option10" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option10">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" data-bs-theme="dark">
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check11" autocomplete="off">
    <label class="btn btn-toggle" for="btn-check11">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check21" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btn-check21">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check31" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btn-check31">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-primary11" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-primary11">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary21" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btn-check-primary21">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary31" autocomplete="off" disabled>
    <label class="btn btn-outline-primary" for="btn-check-primary31">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-secondary11" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-secondary11">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary21" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btn-check-secondary21">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary31" autocomplete="off" disabled>
    <label class="btn btn-outline-secondary" for="btn-check-secondary31">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-success11" autocomplete="off">
    <label class="btn btn-outline-success" for="btn-check-success11">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success21" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="btn-check-success21">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success31" autocomplete="off" disabled>
    <label class="btn btn-outline-success" for="btn-check-success31">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-danger11" autocomplete="off">
    <label class="btn btn-outline-danger" for="btn-check-danger11">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger21" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="btn-check-danger21">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger31" autocomplete="off" disabled>
    <label class="btn btn-outline-danger" for="btn-check-danger31">Single toggle</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck11" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btncheck11">Checked</label>
    <input type="checkbox" class="btn-check" id="btncheck21" autocomplete="off">
    <label class="btn btn-toggle" for="btncheck21">Checkbox</label>
    <input type="checkbox" class="btn-check" id="btncheck31" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btncheck31">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="options1" id="option11" autocomplete="off" checked>
    <label class="btn btn-toggle" for="option11">Checked</label>
    <input type="radio" class="btn-check" name="options1" id="option21" autocomplete="off">
    <label class="btn btn-toggle" for="option21">Radio</label>
    <input type="radio" class="btn-check" name="options1" id="option31" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="option31">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="icons1" id="option51" autocomplete="off" checked>
    <label class="btn btn-icon btn-toggle" for="option51">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="icons1" id="option61" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option61">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="icons1" id="option71" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option71">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="iconsNoOutline1" id="option81" autocomplete="off" checked>
    <label class="btn btn-icon btn-no-outline" for="option81">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline1" id="option91" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option91">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline1" id="option01" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option01">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" data-bs-theme="light">
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check12" autocomplete="off">
    <label class="btn btn-toggle" for="btn-check12">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check22" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btn-check22">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check32" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btn-check32">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-primary12" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-primary12">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary22" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btn-check-primary22">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary32" autocomplete="off" disabled>
    <label class="btn btn-outline-primary" for="btn-check-primary32">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-secondary12" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-secondary12">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary22" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btn-check-secondary22">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary32" autocomplete="off" disabled>
    <label class="btn btn-outline-secondary" for="btn-check-secondary32">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-success12" autocomplete="off">
    <label class="btn btn-outline-success" for="btn-check-success12">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success22" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="btn-check-success22">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success32" autocomplete="off" disabled>
    <label class="btn btn-outline-success" for="btn-check-success32">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-danger12" autocomplete="off">
    <label class="btn btn-outline-danger" for="btn-check-danger12">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger22" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="btn-check-danger22">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger32" autocomplete="off" disabled>
    <label class="btn btn-outline-danger" for="btn-check-danger32">Single toggle</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck12" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btncheck12">Checked</label>
    <input type="checkbox" class="btn-check" id="btncheck22" autocomplete="off">
    <label class="btn btn-toggle" for="btncheck22">Checkbox</label>
    <input type="checkbox" class="btn-check" id="btncheck32" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btncheck32">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="options2" id="option12" autocomplete="off" checked>
    <label class="btn btn-toggle" for="option12">Checked</label>
    <input type="radio" class="btn-check" name="options2" id="option22" autocomplete="off">
    <label class="btn btn-toggle" for="option22">Radio</label>
    <input type="radio" class="btn-check" name="options2" id="option32" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="option32">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="icons2" id="option52" autocomplete="off" checked>
    <label class="btn btn-icon btn-toggle" for="option52">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="icons2" id="option62" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option62">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="icons2" id="option72" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option72">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="iconsNoOutline2" id="option82" autocomplete="off" checked>
    <label class="btn btn-icon btn-no-outline" for="option82">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline2" id="option92" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option92">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline2" id="option02" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option02">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" style="background-color: #282d55;">
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check13" autocomplete="off">
    <label class="btn btn-toggle" for="btn-check13" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check23" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btn-check23" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check33" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btn-check33" data-bs-theme="dark">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-primary13" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-primary13" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary23" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btn-check-primary23" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary33" autocomplete="off" disabled>
    <label class="btn btn-outline-primary" for="btn-check-primary33" data-bs-theme="dark">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-secondary13" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-secondary13" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary23" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btn-check-secondary23" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary33" autocomplete="off" disabled>
    <label class="btn btn-outline-secondary" for="btn-check-secondary33" data-bs-theme="dark">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-success13" autocomplete="off">
    <label class="btn btn-outline-success" for="btn-check-success13" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success23" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="btn-check-success23" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success33" autocomplete="off" disabled>
    <label class="btn btn-outline-success" for="btn-check-success33" data-bs-theme="dark">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-danger13" autocomplete="off">
    <label class="btn btn-outline-danger" for="btn-check-danger13" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger23" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="btn-check-danger23" data-bs-theme="dark">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger33" autocomplete="off" disabled>
    <label class="btn btn-outline-danger" for="btn-check-danger33" data-bs-theme="dark">Single toggle</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck13" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btncheck13" data-bs-theme="dark">Checked</label>
    <input type="checkbox" class="btn-check" id="btncheck23" autocomplete="off">
    <label class="btn btn-toggle" for="btncheck23" data-bs-theme="dark">Checkbox</label>
    <input type="checkbox" class="btn-check" id="btncheck33" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btncheck33" data-bs-theme="dark">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="options3" id="option13" autocomplete="off" checked>
    <label class="btn btn-toggle" for="option13" data-bs-theme="dark">Checked</label>
    <input type="radio" class="btn-check" name="options3" id="option23" autocomplete="off">
    <label class="btn btn-toggle" for="option23" data-bs-theme="dark">Radio</label>
    <input type="radio" class="btn-check" name="options3" id="option33" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="option33" data-bs-theme="dark">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="icons3" id="option53" autocomplete="off" checked>
    <label class="btn btn-icon btn-toggle" for="option53" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="icons3" id="option63" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option63" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="icons3" id="option73" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option73" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="iconsNoOutline3" id="option83" autocomplete="off" checked>
    <label class="btn btn-icon btn-no-outline" for="option83" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline3" id="option93" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option93" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline3" id="option03" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option03" data-bs-theme="dark">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex flex-column gap-2 align-items-start border p-3" style="background-color: #b5e8f7">
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check14" autocomplete="off">
    <label class="btn btn-toggle" for="btn-check14" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check24" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btn-check24" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check34" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btn-check34" data-bs-theme="light">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-primary14" autocomplete="off">
    <label class="btn btn-outline-primary" for="btn-check-primary14" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary24" autocomplete="off" checked>
    <label class="btn btn-outline-primary" for="btn-check-primary24" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-primary34" autocomplete="off" disabled>
    <label class="btn btn-outline-primary" for="btn-check-primary34" data-bs-theme="light">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-secondary14" autocomplete="off">
    <label class="btn btn-outline-secondary" for="btn-check-secondary14" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary24" autocomplete="off" checked>
    <label class="btn btn-outline-secondary" for="btn-check-secondary24" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-secondary34" autocomplete="off" disabled>
    <label class="btn btn-outline-secondary" for="btn-check-secondary34" data-bs-theme="light">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-success14" autocomplete="off">
    <label class="btn btn-outline-success" for="btn-check-success14" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success24" autocomplete="off" checked>
    <label class="btn btn-outline-success" for="btn-check-success24" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-success34" autocomplete="off" disabled>
    <label class="btn btn-outline-success" for="btn-check-success34" data-bs-theme="light">Single toggle</label>
  </div>
  <div class="d-flex gap-2 flex-wrap">
    <input type="checkbox" class="btn-check" id="btn-check-danger14" autocomplete="off">
    <label class="btn btn-outline-danger" for="btn-check-danger14" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger24" autocomplete="off" checked>
    <label class="btn btn-outline-danger" for="btn-check-danger24" data-bs-theme="light">Single toggle</label>
    <input type="checkbox" class="btn-check" id="btn-check-danger34" autocomplete="off" disabled>
    <label class="btn btn-outline-danger" for="btn-check-danger34" data-bs-theme="light">Single toggle</label>
  </div>
  <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
    <input type="checkbox" class="btn-check" id="btncheck14" autocomplete="off" checked>
    <label class="btn btn-toggle" for="btncheck14" data-bs-theme="light">Checked</label>
    <input type="checkbox" class="btn-check" id="btncheck24" autocomplete="off">
    <label class="btn btn-toggle" for="btncheck24" data-bs-theme="light">Checkbox</label>
    <input type="checkbox" class="btn-check" id="btncheck34" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="btncheck34" data-bs-theme="light">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="options4" id="option14" autocomplete="off" checked>
    <label class="btn btn-toggle" for="option14" data-bs-theme="light">Checked</label>
    <input type="radio" class="btn-check" name="options4" id="option24" autocomplete="off">
    <label class="btn btn-toggle" for="option24" data-bs-theme="light">Radio</label>
    <input type="radio" class="btn-check" name="options4" id="option34" autocomplete="off" disabled>
    <label class="btn btn-toggle" for="option34" data-bs-theme="light">Disabled</label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="icons4" id="option54" autocomplete="off" checked>
    <label class="btn btn-icon btn-toggle" for="option54" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="icons4" id="option64" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option64" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="icons4" id="option74" autocomplete="off">
    <label class="btn btn-icon btn-toggle" for="option74" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
  <div class="btn-group" role="group">
    <input type="radio" class="btn-check" name="iconsNoOutline4" id="option84" autocomplete="off" checked>
    <label class="btn btn-icon btn-no-outline" for="option84" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-day"/>
      </svg>
      <span class="visually-hidden">Day</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline4" id="option94" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option94" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-week"/>
      </svg>
      <span class="visually-hidden">Week</span>
    </label>
    <input type="radio" class="btn-check" name="iconsNoOutline4" id="option04" autocomplete="off">
    <label class="btn btn-icon btn-no-outline" for="option04" data-bs-theme="light">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#calendar-month"/>
      </svg>
      <span class="visually-hidden">Month</span>
    </label>
  </div>
</div>

### Validation

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-column border p-3">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-column border p-3" data-bs-theme="dark">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-column border p-3" data-bs-theme="light">
  <input type="text" class="form-control is-valid" value="Mark">
  <select class="form-select is-valid"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value=""></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" checked></div>
  <div class="quantity-selector"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><select class="form-select is-invalid"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color"><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value=""><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
  <div class="quantity-selector w-100"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-column border p-3" style="background-color: #282d55;">
  <input type="text" class="form-control is-valid" value="Mark" data-bs-theme="dark">
  <select class="form-select is-valid" data-bs-theme="dark"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid" data-bs-theme="dark">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color" data-bs-theme="dark">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="dark"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="dark" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="dark"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="dark" checked></div>
  <div class="quantity-selector" data-bs-theme="dark"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><select class="form-select is-invalid" data-bs-theme="dark"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked data-bs-theme="dark"><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
  <div class="quantity-selector w-100" data-bs-theme="dark"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback" data-bs-theme="dark">Invalid feedback</p></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-column border p-3" style="background-color: #b5e8f7">
  <input type="text" class="form-control is-valid" value="Mark" data-bs-theme="light">
  <select class="form-select is-valid" data-bs-theme="light"><option selected disabled value="">Choose...</option><option>...</option></select>
  <input type="file" class="form-control is-valid" data-bs-theme="light">
  <input type="color" class="form-control form-control-color is-valid" value="#a885d8" title="Choose your color" data-bs-theme="light">
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value="" data-bs-theme="light"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="checkbox" value=""  data-bs-theme="light" checked></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="light"></div>
  <div class="form-check"><input class="form-check-input is-valid" type="radio" value="" data-bs-theme="light" checked></div>
  <div class="quantity-selector" data-bs-theme="light"><input type="number" class="form-control is-valid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button></div>
  <div><input type="text" class="form-control is-invalid" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><select class="form-select is-invalid" data-bs-theme="light"><option selected disabled value="">Choose...</option><option>...</option></select><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><input type="file" class="form-control is-invalid" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div><input type="color" class="form-control form-control-color is-invalid" value="#a885d8" title="Choose your color" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="checkbox" value="" checked data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="form-check"><input class="form-check-input is-invalid" type="radio" value="" checked data-bs-theme="light"><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
  <div class="quantity-selector w-100" data-bs-theme="light"><input type="number" class="form-control is-invalid" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="0" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector"><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="down"><span class="visually-hidden">Step down</span></button><button type="button" class="btn btn-icon btn-outline-secondary" data-bs-step="up"><span class="visually-hidden">Step up</span></button><p class="mb-0 invalid-feedback" data-bs-theme="light">Invalid feedback</p></div>
</div>

## Utilities

### Background

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-green"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-purple"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-yellow"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-blue"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-pink"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-success);" class="bg-supporting-orange"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-tertiary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-white"></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-green"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-purple"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-yellow"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-blue"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-pink"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-success);" class="bg-supporting-orange"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-tertiary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-white"></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-green"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-purple"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-yellow"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-blue"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-pink"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-success);" class="bg-supporting-orange"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-tertiary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-white"></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-primary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-success" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-danger" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-warning" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-info" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-green" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-purple" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-yellow" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-blue" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-pink" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-success);" class="bg-supporting-orange" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-light" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-dark" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-tertiary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-black" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-white" data-bs-theme="dark"></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-primary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-success" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-danger" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-warning" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-info" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-green" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-purple" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-yellow" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-blue" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-supporting-pink" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-success);" class="bg-supporting-orange" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-light" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-dark" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body-tertiary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-body" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-black" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary);" class="bg-white" data-bs-theme="light"></div>
</div>

### Borders

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-white"></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-white"></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-white"></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-primary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-success" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-danger" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-warning" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-info" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-light" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-dark" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-black" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-white" data-bs-theme="dark"></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-primary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-success" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-danger" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-warning" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-info" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-light" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-dark" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-black" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; background-color: var(--bs-secondary-bg);" class="border border-white" data-bs-theme="light"></div>
</div>

### Colors

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-white"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-emphasis"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-tertiary"></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-white"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-emphasis"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-tertiary"></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-black"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-white"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-emphasis"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-tertiary"></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-primary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-success" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-danger" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-warning" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-info" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-light" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-dark" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-black" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-white" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-emphasis" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-tertiary" data-bs-theme="dark"></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-primary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-success" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-danger" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-warning" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-info" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-light" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-dark" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-black" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-white" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-emphasis" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="text-body-tertiary" data-bs-theme="light"></div>
</div>

### Link

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-body-emphasis"></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-body-emphasis"></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-body-emphasis"></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-primary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-success" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-danger" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-warning" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-info" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-light" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-dark" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-body-emphasis" data-bs-theme="dark"></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-primary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-success" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-danger" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-warning" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-info" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-light" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-dark" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; border: 2px solid var(--bs-secondary); background-color: currentColor;" class="link-body-emphasis" data-bs-theme="light"></div>
</div>

## Helper

### Color & Background (text-bg)

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-primary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-secondary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-success"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-danger"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-warning"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-info"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-primary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-secondary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-success"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-danger"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-warning"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-info"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-primary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-secondary"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-success"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-danger"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-warning"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-info"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-primary" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-secondary" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-success" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-danger" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-warning" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-info" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-light" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-dark" data-bs-theme="dark"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-primary" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-secondary" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-success" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-danger" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-warning" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-info" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-light" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary);" class="text-bg-dark" data-bs-theme="light"><div style="width: 100%; height: 100%; background-color: currentColor;"></div></div>
</div>

### Focus ring

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-dark"></div>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-dark"></div>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-primary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-secondary"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-success"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-danger"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-warning"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-info"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-dark"></div>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-primary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-secondary" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-success" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-danger" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-warning" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-info" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-light" data-bs-theme="dark"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-dark" data-bs-theme="dark"></div>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-primary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-secondary" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-success" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-danger" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-warning" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-info" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-light" data-bs-theme="light"></div>
  <div style="width: 2.5rem; height: 2.5rem; padding: 8px; border: 2px solid var(--bs-secondary); background-color: var(--bs-focus-ring-color);" class="focus-ring-dark" data-bs-theme="light"></div>
</div>

### Icon link

<h4 class="mt-3">No theme</h4>

<div class="d-flex gap-2 flex-wrap border p-3">
  <a class="link-chevron" href="#">This is a sample link with chevron</a>
</div>

<h4 class="mt-3">Dark theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="dark">
  <a class="link-chevron" href="#">This is a sample link with chevron</a>
</div>

<h4 class="mt-3">Light theme on container</h4>

<div class="d-flex gap-2 flex-wrap border p-3" data-bs-theme="light">
  <a class="link-chevron" href="#">This is a sample link with chevron</a>
</div>

<h4 class="mt-3">Dark theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #282d55;">
  <a class="link-chevron" href="#" data-bs-theme="dark">This is a sample link with chevron</a>
</div>

<h4 class="mt-3">Light theme on component</h4>

<div class="d-flex gap-2 flex-wrap border p-3" style="background-color: #b5e8f7">
  <a class="link-chevron" href="#" data-bs-theme="light">This is a sample link with chevron</a>
</div>
