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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### Local theme dark

<div class="border border-tertiary p-3" data-bs-theme="dark">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
</div>

### White background

Using bg-white

<div class="border border-tertiary p-3 bg-white">
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
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
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
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
                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
          plugin adds the appropriate classes that we use to style each element. These classes control the overall
          appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
          CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
          <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
          adds the appropriate classes that we use to style each element. These classes control the overall
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

### Local theme dark

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

### White background

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


