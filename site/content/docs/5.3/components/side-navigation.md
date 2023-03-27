---
layout: docs
title: Side Navigation
description: Documentation and examples for Boosted's exclusive Brand responsive side navigation.
group: components
aliases:
  - "/docs/components/side-navigation/"
toc: true
added: "5.3"
---

## How it works

Our side navigation is basically a `<nav>` that can provide up to 3 levels hierarchy between links.

Side navigation should be used inside an offcanvas using `.offcanvas-*` for responsive purpose. By default, we use `.offcanvas-lg` in our docs. Please refer to [Offcanvas]({{< docsref "/components/offcanvas#responsive" >}}) to learn more about its behavior. Since it uses [responsive offcanvas]({{< docsref "/components/offcanvas#responsive" >}}), please resize your browser to see its responsive behavior in action.

{{< callout warning >}}
In order to make side navigation work properly, please make sure that the Javascript files from [Collapse]({{< docsref "/components/collapse#usage" >}}) and [Tabs]({{< docsref "/components/navs-tabs#javascript-behavior" >}}) are imported in your project.
{{< /callout >}}

The side navigation provides 3 ready-to-use fully responsive variants. For each variant, we provide:
- `.side-nav` to set up at the root element.
- `.side-nav-dark` to darken our variants.
- `.side-nav-scrollable` to ensure correct behavior of scroll boxes.
- `.side-nav-item` to ensure correct size and behavior of displayed elements.
- optional `.side-nav-static` to make collapsible side navigation static.
- optional `.side-nav-toggle` and `.side-nav-content` to embed a version of the collapse toggler and make sure the content is well sized even with a toggler button.

With the following structure:

```html
<nav class="side-nav side-nav-dark">
  <div class="side-nav-variant side-nav-static">
    <!-- If collapsible -->
    <button class="side-nav-toggle"></button>
    <div class="side-nav-content">
    <!-- End collapsible -->
      <a href="#" class="side-nav-item">Links</a>
    </div>
  </div>
</nav>
```

## Examples

Side navigation comes with 3 ready-to-use fully responsive variants. If these available variants don't meet your specific needs, feel free to develop your own custom variant accordingly to the Orange Design System.

Since most of side navigation we display use the responsive version of this component, please resize your browser to see the behavior.

{{< callout info >}}
You can also notice that every example is resizable in order to show the behavior it has in different configurations.
{{< /callout >}}

### Without offcanvas

We strongly recommend using the side navigation inside an offcanvas but it can be used outside as well. If you do so, please make sure that the responsive part is still fine.

{{< example class="p-0 side-nav-example d-flex" >}}
<nav class="side-nav side-nav-static" aria-label="Basic side navigation without offcanvas">
  <div class="side-nav-accordion side-nav-scrollable">
    <div class="accordion" id="sideNavAccordion">
      <div class="accordion-item">
        <h3 class="accordion-header" id="dashboardHeader">
          <button class="accordion-button side-nav-item fw-bold active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapse" aria-expanded="true" aria-controls="dashboardCollapse">
            Dashboard
          </button>
        </h3>
        <div id="dashboardCollapse" class="accordion-collapse collapse show" aria-labelledby="dashboardHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <div class="accordion" id="dashboardAccordion">
              <div class="accordion-item">
                <h4 class="accordion-header" id="overviewHeader">
                  <button class="accordion-button side-nav-item fw-normal active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#overviewCollapse" aria-expanded="true" aria-controls="overviewCollapse">
                    Overview
                  </button>
                </h4>
                <div id="overviewCollapse" class="accordion-collapse collapse show" aria-labelledby="overviewHeader" data-bs-parent="#dashboardAccordion">
                  <div class="accordion-body">
                    <ul class="list-unstyled m-0">
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h4 class="accordion-header" id="dataHeader">
                  <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#dataCollapse" aria-expanded="false" aria-controls="dataCollapse">
                    Data
                  </button>
                </h4>
                <div id="dataCollapse" class="accordion-collapse collapse" aria-labelledby="dataHeader" data-bs-parent="#dashboardAccordion">
                  <div class="accordion-body">
                    <ul class="list-unstyled m-0">
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h4 class="accordion-header" id="exploreHeader">
                  <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#exploreCollapse" aria-expanded="false" aria-controls="exploreCollapse">
                    Explore
                  </button>
                </h4>
                <div id="exploreCollapse" class="accordion-collapse collapse" aria-labelledby="exploreHeader" data-bs-parent="#dashboardAccordion">
                  <div class="accordion-body">
                    <ul class="list-unstyled m-0">
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" id="chartsHeader">
          <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapse" aria-expanded="false" aria-controls="chartsCollapse">
            Charts
          </button>
        </h3>
        <div id="chartsCollapse" class="accordion-collapse collapse" aria-labelledby="chartsHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled m-0">
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <a href="#" class="side-nav-item fw-bold">Financial</a>
      </div>
    </div>
  </div>
</nav>

<div class="d-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

### With accordions

Here is the `.side-nav-accordion` variant. It should be used with [`.side-nav-static`](#static) since it doesn't have any collapse behavior. The whole accordion should be scrollable.

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavOffcanvas" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavOffcanvas" id="sideNavToggle">Show basic side navigation</button>

<div class="offcanvas-lg offcanvas-start h-100" role="region" aria-labelledby="sideNavToggle" id="sideNavOffcanvas">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sideNavOffcanvas" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavOffcanvas"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">

    <nav class="side-nav side-nav-static" aria-label="Basic side navigation inside an offcanvas">
      <div class="side-nav-accordion side-nav-scrollable">
        <div class="accordion" id="sideNavAccordionOc">
          <div class="accordion-item">
            <h3 class="accordion-header" id="dashboardHeaderOc">
              <button class="accordion-button side-nav-item fw-bold active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseOc" aria-expanded="true" aria-controls="dashboardCollapseOc">
                Dashboard
              </button>
            </h3>
            <div id="dashboardCollapseOc" class="accordion-collapse collapse show" aria-labelledby="dashboardHeaderOc" data-bs-parent="#sideNavAccordionOc">
              <div class="accordion-body">
                <div class="accordion" id="dashboardAccordionOc">
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="overviewHeaderOc">
                      <button class="accordion-button side-nav-item fw-normal active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#overviewCollapseOc" aria-expanded="true" aria-controls="overviewCollapseOc">
                        Overview
                      </button>
                    </h4>
                    <div id="overviewCollapseOc" class="accordion-collapse collapse show" aria-labelledby="overviewHeaderOc" data-bs-parent="#dashboardAccordionOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="dataHeaderOc">
                      <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#dataCollapseOc" aria-expanded="false" aria-controls="dataCollapseOc">
                        Data
                      </button>
                    </h4>
                    <div id="dataCollapseOc" class="accordion-collapse collapse" aria-labelledby="dataHeaderOc" data-bs-parent="#dashboardAccordionOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="exploreHeaderOc">
                      <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#exploreCollapseOc" aria-expanded="false" aria-controls="exploreCollapseOc">
                        Explore
                      </button>
                    </h4>
                    <div id="exploreCollapseOc" class="accordion-collapse collapse" aria-labelledby="exploreHeaderOc" data-bs-parent="#dashboardAccordionOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="chartsHeaderOc">
              <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapseOc" aria-expanded="false" aria-controls="chartsCollapseOc">
                Charts
              </button>
            </h3>
            <div id="chartsCollapseOc" class="accordion-collapse collapse" aria-labelledby="chartsHeaderOc" data-bs-parent="#sideNavAccordionOc">
              <div class="accordion-body">
                <ul class="list-unstyled m-0">
                  <li><a href="#" class="side-nav-item">Label</a></li>
                  <li><a href="#" class="side-nav-item">Label</a></li>
                  <li><a href="#" class="side-nav-item">Label</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <a href="#" class="side-nav-item fw-bold">Financial</a>
          </div>
        </div>
      </div>
    </nav>

  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

Illustrating icons can be added on each item if needed.

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavIconsOffcanvas" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavIconsOffcanvas" id="sideNavIconsToggle">Show basic side navigation with icons</button>

<div class="offcanvas-lg offcanvas-start h-100" role="region" aria-labelledby="sideNavIconsToggle" id="sideNavIconsOffcanvas">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sideNavIconsOffcanvas" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavIconsOffcanvas"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">

    <nav class="side-nav side-nav-static" aria-label="Basic side navigation with icons inside an offcanvas">
      <div class="side-nav-accordion side-nav-scrollable">
        <div class="accordion" id="sideNavAccordionIconsOc">
          <div class="accordion-item">
            <h3 class="accordion-header" id="dashboardHeaderIconsOc">
              <button class="accordion-button side-nav-item fw-bold active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseIconsOc" aria-expanded="true" aria-controls="dashboardCollapseIconsOc">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
                </svg>
                Dashboard
              </button>
            </h3>
            <div id="dashboardCollapseIconsOc" class="accordion-collapse collapse show" aria-labelledby="dashboardHeaderIconsOc" data-bs-parent="#sideNavAccordionIconsOc">
              <div class="accordion-body">
                <div class="accordion" id="dashboardAccordionIconsOc">
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="overviewHeaderIconsOc">
                      <button class="accordion-button side-nav-item fw-normal active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#overviewCollapseIconsOc" aria-expanded="true" aria-controls="overviewCollapseIconsOc">
                        Overview
                      </button>
                    </h4>
                    <div id="overviewCollapseIconsOc" class="accordion-collapse collapse show" aria-labelledby="overviewHeaderIconsOc" data-bs-parent="#dashboardAccordionIconsOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="dataHeaderIconsOc">
                      <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#dataCollapseIconsOc" aria-expanded="false" aria-controls="dataCollapseIconsOc">
                        Data
                      </button>
                    </h4>
                    <div id="dataCollapseIconsOc" class="accordion-collapse collapse" aria-labelledby="dataHeaderIconsOc" data-bs-parent="#dashboardAccordionIconsOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h4 class="accordion-header" id="exploreHeaderIconsOc">
                      <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#exploreCollapseIconsOc" aria-expanded="false" aria-controls="exploreCollapseIconsOc">
                        Explore
                      </button>
                    </h4>
                    <div id="exploreCollapseIconsOc" class="accordion-collapse collapse" aria-labelledby="exploreHeaderIconsOc" data-bs-parent="#dashboardAccordionIconsOc">
                      <div class="accordion-body">
                        <ul class="list-unstyled m-0">
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                          <li><a href="#" class="side-nav-item">Label</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h3 class="accordion-header" id="chartsHeaderIconsOc">
              <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapseIconsOc" aria-expanded="false" aria-controls="chartsCollapseIconsOc">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
                </svg>
                Charts
              </button>
            </h3>
            <div id="chartsCollapseIconsOc" class="accordion-collapse collapse" aria-labelledby="chartsHeaderIconsOc" data-bs-parent="#sideNavAccordionIconsOc">
              <div class="accordion-body">
                <ul class="list-unstyled m-0">
                  <li><a href="#" class="side-nav-item">Label</a></li>
                  <li><a href="#" class="side-nav-item">Label</a></li>
                  <li><a href="#" class="side-nav-item">Label</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <a href="#" class="side-nav-item fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              Financial
            </a>
          </div>
        </div>
      </div>
    </nav>

  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

### Collapsible

Here is the `.side-nav-collapsible` variant. The collapsible side navigation we provide uses [Tooltips]({{< docsref "/components/tooltips#usage" >}}) internally. It also uses a small trick to nicely collapse the side navigation with an empty `div`. (might change if we try to change the collapse thing on Bootstrap)

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsible" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsible" id="sideNavCollapsibleToggle" onclick="boosted.Collapse.getOrCreateInstance('#collapsibleElement1').show()">Show basic collapsible side navigation</button>

<div class="offcanvas-lg offcanvas-start" role="region" aria-labelledby="sideNavCollapsibleToggle" id="sideNavCollapsible">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sideNavCollapsible" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsible"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">

    <nav class="side-nav" aria-label="Collapsible side navigation inside an offcanvas">
      <div class="side-nav-collapsible">
        <div id="collapsibleElement1" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
        <button class="side-nav-toggle collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleElement1" aria-expanded="false" aria-controls="collapsibleElement1"><span class="visually-hidden">Open/Close side navigation</span></button>
        <ul class="side-nav-content side-nav-scrollable list-unstyled m-0">
          <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
            <a href="#" class="side-nav-item active fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
              </svg>
              Dashboard
            </a>
          </li>
          <li data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
            <a href="#" class="side-nav-item fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
              </svg>
              Charts
            </a>
          </li>
          <li data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
            <a href="#" class="side-nav-item fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              Financial
            </a>
          </li>
        </ul>
      </div>
    </nav>

  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

### Collapsible with drawer content

Here is the `.side-nav-content-with-drawer` variant. The collapsible side navigation we provide uses [Tooltips]({{< docsref "/components/tooltips#usage" >}}) internally.

The collapsible side navigation with drawer content comes with ready to use `onclick` calls:
- On the Offcanvas toggler button to `show` its content.
- On the Offcanvas close button to `hide` its content.
- On each menu item to `show` its content (nav-item).

{{< callout info >}}
For this variant, you need to add `.side-nav-content-with-drawer` on the `.offcanvas-header` as well.
{{< /callout >}}

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCwdc1" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCwdc1" id="sideNavCwdc1Toggle" onclick="boosted.Collapse.getOrCreateInstance('#sideNavCollapseCwdc1').show()">Show collapsible side navigation with drawer content</button>

<div class="offcanvas-start offcanvas-lg d-flex" role="region" aria-labelledby="sideNavCwdc1Toggle" id="sideNavCwdc1">
  <div class="offcanvas-header p-0 side-nav-content-with-drawer">
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#sideNavCwdc1" aria-expanded="true" aria-controls="sideNavCwdc1"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body p-0">

    <nav class="side-nav" aria-label="Collapsible side navigation with drawer content inside an offcanvas">
      <div class="side-nav-content-with-drawer">
        <button class="side-nav-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#sideNavCollapseCwdc1"><span class="visually-hidden">Open/Close side navigation</span></button>
        <div class="side-nav-content">
          <ul class="nav d-block h-100 list-unstyled m-0 side-nav-dark side-nav-scrollable" role="menubar">
            <li class="nav-item" role="none" data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
              <button class="side-nav-item active" data-bs-toggle="tab" data-bs-target="#dashboardTab1" type="button" role="menuitem" aria-controls="dashboardTab1" aria-expanded="false" aria-haspopup="true" onclick="boosted.Collapse.getOrCreateInstance('#sideNavCollapseCwdc1').show()">
                <svg class="align-self-center" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
                </svg>
                <span class="visually-hidden">Open dashboard tab</span>
              </button>
            </li>
            <li class="nav-item" role="none" data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
              <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#chartsTab1" type="button" role="menuitem" aria-controls="chartsTab1" aria-expanded="false" aria-haspopup="true" onclick="boosted.Collapse.getOrCreateInstance('#sideNavCollapseCwdc1').show()">
                <svg class="align-self-center" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
                </svg>
                <span class="visually-hidden">Open charts tab</span>
              </button>
            </li>
            <li class="nav-item" role="none" data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
              <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#financialTab1" type="button" role="menuitem" aria-controls="financialTab1" aria-expanded="false" aria-haspopup="true" onclick="boosted.Collapse.getOrCreateInstance('#sideNavCollapseCwdc1').show()">
                <svg class="align-self-center" width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
                </svg>
                <span class="visually-hidden">Open financial tab</span>
              </button>
            </li>
          </ul>
          <div class="collapse collapse-horizontal" id="sideNavCollapseCwdc1">
            <div class="tab-content h-100 ms-2 p-0 border-0" style="width: 235px;">
              <div class="tab-pane h-100 active" id="dashboardTab1" role="tabpanel">
                <div class="tab-pane-content h-100">
                  <h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light mb-0 fs-5">Dashboard</h3>
                  <div class="accordion side-nav-scrollable" id="dashboardAccordionCwdc1">
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="overviewHeaderCwdc1">
                        <button class="accordion-button side-nav-item fw-normal active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#overviewCollapseCwdc1" aria-expanded="true" aria-controls="overviewCollapseCwdc1">
                          Overview
                        </button>
                      </h4>
                      <div id="overviewCollapseCwdc1" class="accordion-collapse collapse show" aria-labelledby="overviewHeaderCwdc1" data-bs-parent="#dashboardAccordionCwdc1">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item active" aria-current="page">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="dataHeaderCwdc1">
                        <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#dataCollapseCwdc1" aria-expanded="false" aria-controls="dataCollapseCwdc1">
                          Data
                        </button>
                      </h4>
                      <div id="dataCollapseCwdc1" class="accordion-collapse collapse" aria-labelledby="dataHeaderCwdc1" data-bs-parent="#dashboardAccordionCwdc1">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="exploreHeaderCwdc1">
                        <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#exploreCollapseCwdc1" aria-expanded="false" aria-controls="exploreCollapseCwdc1">
                          Explore
                        </button>
                      </h4>
                      <div id="exploreCollapseCwdc1" class="accordion-collapse collapse" aria-labelledby="exploreHeaderCwdc1" data-bs-parent="#dashboardAccordionCwdc1">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="trendHeaderCwdc1">
                        <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#trendCollapseCwdc1" aria-expanded="false" aria-controls="trendCollapseCwdc1">
                          Trend
                        </button>
                      </h4>
                      <div id="trendCollapseCwdc1" class="accordion-collapse collapse" aria-labelledby="trendHeaderCwdc1" data-bs-parent="#dashboardAccordionCwdc1">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane h-100" id="chartsTab1" role="tabpanel">
                <div class="tab-pane-content h-100">
                  <h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light mb-0 fs-5">Charts</h3>
                  <ul class="list-unstyled m-0 side-nav-scrollable">
                    <li><a href="#" class="side-nav-item">Label</a></li>
                    <li><a href="#" class="side-nav-item">Label</a></li>
                    <li><a href="#" class="side-nav-item">Label</a></li>
                  </ul>
                </div>
              </div>
              <div class="tab-pane h-100" id="financialTab1" role="tabpanel">
                <div class="tab-pane-content h-100">
                  <h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light mb-0 fs-5">Financial</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

## Static

Add `.side-nav-static` to the `.side-nav` for a static variant.

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleStatic" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleStatic" id="sideNavCollapsibleStaticToggle" onclick="boosted.Collapse.getOrCreateInstance('#collapsibleElement2').show()">Show basic collapsible static side navigation</button>
  <div class="offcanvas-lg offcanvas-start" role="region" aria-labelledby="sideNavCollapsibleStaticToggle" id="sideNavCollapsibleStatic">
    <div class="offcanvas-header p-0">
      <button type="button" class="btn-close ms-auto" data-bs-target="#sideNavCollapsibleStatic" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleStatic"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body h-100 p-0">
      <nav class="side-nav side-nav-static" aria-label="Static collapsible side navigation inside an offcanvas">
        <div class="side-nav-collapsible">
          <div id="collapsibleElement2" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
          <button class="side-nav-toggle collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleElement2" aria-expanded="false" aria-controls="collapsibleElement2"><span class="visually-hidden">Open/Close side navigation</span></button>
          <ul class="side-nav-content side-nav-scrollable list-unstyled m-0">
            <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
              <a href="#" class="side-nav-item active fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
                </svg>
                Dashboard
              </a>
            </li>
            <li data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
              <a href="#" class="side-nav-item fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
                </svg>
                Charts
              </a>
            </li>
            <li data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
              <a href="#" class="side-nav-item fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
                </svg>
                Financial
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleStatic" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleStatic" id="sideNavCollapsibleStaticToggle" onclick="boosted.Collapse.getOrCreateInstance('#collapsibleElement2').show()">Show basic collapsible static side navigation</button>

<div class="offcanvas-lg offcanvas-start" role="region" aria-labelledby="sideNavCollapsibleStaticToggle" id="sideNavCollapsibleStatic">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sideNavCollapsibleStatic" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleStatic"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">
    <nav class="side-nav side-nav-static" aria-label="Static collapsible side navigation inside an offcanvas">
      <div class="side-nav-collapsible">
        ...
      </div>
    </nav>
  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

## Scrollable

Even if we handle the scroll in a particular way inside our predefined variants, you may want to change this behavior with the `.side-nav-scrollable`. If you do so, please make sure that every part is accessible through scroll (the icon part and the content one).

## Dark variant

Add `.side-nav-dark` to the `.side-nav` or its children for a dark variant. For example the [collapsible side navigation with drawer content](#collapsible-with-drawer-content) is made with a part of dark variant.

We strongly recommend to use `.offcanvas-dark` (resp. `.btn-close-white`) on top of `.offcanvas-*` (resp. `.btn-close`) in order to have the correct design.

{{< callout info >}}
Dark variant can be applied on root of any example except the [collapsible side navigation with drawer content](#collapsible-with-drawer-content) one.
{{< /callout >}}

Here is the example on the collapsible variant.

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleDark" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleDark" id="sideNavCollapsibleDarkToggle" onclick="boosted.Collapse.getOrCreateInstance('#collapsibleElement4').show()">Show dark collapsible side navigation</button>
  <div class="offcanvas-lg offcanvas-start offcanvas-dark" role="region" aria-labelledby="sideNavCollapsibleDarkToggle" id="sideNavCollapsibleDark">
    <div class="offcanvas-header p-0">
      <button type="button" class="btn-close btn-close-white ms-auto" data-bs-target="#sideNavCollapsibleDark" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleDark"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body h-100 p-0">
      <div class="side-nav side-nav-dark">
        <div class="side-nav-collapsible">
          <div id="collapsibleElement4" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
          <button class="side-nav-toggle collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleElement4" aria-expanded="false" aria-controls="collapsibleElement4"><span class="visually-hidden">Open/Close side navigation</span></button>
          <ul class="side-nav-content side-nav-scrollable list-unstyled m-0">
            <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
              <a href="#" class="side-nav-item active fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
                </svg>
                Dashboard
              </a>
            </li>
            <li data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
              <a href="#" class="side-nav-item fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
                </svg>
                Charts
              </a>
            </li>
            <li data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
              <a href="#" class="side-nav-item fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
                </svg>
                Financial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleDark" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleDark" id="sideNavCollapsibleDarkToggle" onclick="boosted.Collapse.getOrCreateInstance('#collapsibleElement4').show()">Show dark collapsible side navigation</button>

<div class="offcanvas-lg offcanvas-start offcanvas-dark" role="region" aria-labelledby="sideNavCollapsibleDarkToggle" id="sideNavCollapsibleDark">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close btn-close-white ms-auto" data-bs-target="#sideNavCollapsibleDark" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleDark"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">
    <div class="side-nav side-nav-dark">
      <div class="side-nav-collapsible">
        ...
      </div>
    </div>
  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

Here is an example on the accordion variant.

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleDarkIconsOffcanvas" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleDarkIconsOffcanvas" id="sideNavCollapsibleIconsDarkToggle">Show dark accordion side navigation</button>
  <div class="offcanvas-lg offcanvas-start offcanvas-dark" role="region" aria-labelledby="sideNavCollapsibleIconsDarkToggle" id="sideNavCollapsibleDarkIconsOffcanvas">
    <div class="offcanvas-header p-0">
      <button type="button" class="btn-close btn-close-white ms-auto" data-bs-target="#sideNavCollapsibleDarkIconsOffcanvas" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleDarkIconsOffcanvas"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="offcanvas-body h-100 p-0">
      <div class="side-nav side-nav-dark side-nav-static">
        <div class="side-nav-accordion side-nav-scrollable">
          <div class="accordion" id="sideNavAccordionDark">
            <div class="accordion-item">
              <h3 class="accordion-header" id="dashboardHeaderDark">
                <button class="accordion-button side-nav-item fw-bold active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseDark" aria-expanded="true" aria-controls="dashboardCollapseDark">
                  <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
                  </svg>
                  Dashboard
                </button>
              </h3>
              <div id="dashboardCollapseDark" class="accordion-collapse collapse show" aria-labelledby="dashboardHeaderDark" data-bs-parent="#sideNavAccordionDark">
                <div class="accordion-body">
                  <div class="accordion" id="dashboardAccordionDark">
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="overviewHeaderDark">
                        <button class="accordion-button side-nav-item fw-normal active-parent" type="button" data-bs-toggle="collapse" data-bs-target="#overviewCollapseDark" aria-expanded="true" aria-controls="overviewCollapseDark">
                          Overview
                        </button>
                      </h4>
                      <div id="overviewCollapseDark" class="accordion-collapse collapse show" aria-labelledby="overviewHeaderDark" data-bs-parent="#dashboardAccordionDark">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="dataHeaderDark">
                        <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#dataCollapseDark" aria-expanded="false" aria-controls="dataCollapseDark">
                          Data
                        </button>
                      </h4>
                      <div id="dataCollapseDark" class="accordion-collapse collapse" aria-labelledby="dataHeaderDark" data-bs-parent="#dashboardAccordionDark">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h4 class="accordion-header" id="exploreHeaderDark">
                        <button class="accordion-button collapsed side-nav-item fw-normal" type="button" data-bs-toggle="collapse" data-bs-target="#exploreCollapseDark" aria-expanded="false" aria-controls="exploreCollapseDark">
                          Explore
                        </button>
                      </h4>
                      <div id="exploreCollapseDark" class="accordion-collapse collapse" aria-labelledby="exploreHeaderDark" data-bs-parent="#dashboardAccordionDark">
                        <div class="accordion-body">
                          <ul class="list-unstyled m-0">
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                            <li><a href="#" class="side-nav-item">Label</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h3 class="accordion-header" id="chartsHeaderDark">
                <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapseDark" aria-expanded="false" aria-controls="chartsCollapseDark">
                  <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                    <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
                  </svg>
                  Charts
                </button>
              </h3>
              <div id="chartsCollapseDark" class="accordion-collapse collapse" aria-labelledby="chartsHeaderDark" data-bs-parent="#sideNavAccordionDark">
                <div class="accordion-body">
                  <ul class="list-unstyled m-0">
                    <li><a href="#" class="side-nav-item">Label</a></li>
                    <li><a href="#" class="side-nav-item">Label</a></li>
                    <li><a href="#" class="side-nav-item">Label</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <a href="#" class="side-nav-item fw-bold">
                <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                  <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
                </svg>
                Financial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sideNavCollapsibleDarkIconsOffcanvas" data-bs-toggle="offcanvas" aria-haspopup="true" aria-controls="sideNavCollapsibleDarkIconsOffcanvas" id="sideNavCollapsibleIconsDarkToggle">Show dark accordion side navigation</button>

<div class="offcanvas-lg offcanvas-start offcanvas-dark" role="region" aria-labelledby="sideNavCollapsibleIconsDarkToggle" id="sideNavCollapsibleDarkIconsOffcanvas">
  <div class="offcanvas-header p-0">
    <button type="button" class="btn-close btn-close-white ms-auto" data-bs-target="#sideNavCollapsibleDarkIconsOffcanvas" data-bs-dismiss="offcanvas" aria-expanded="true" aria-controls="sideNavCollapsibleDarkIconsOffcanvas"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="offcanvas-body h-100 p-0">
    <div class="side-nav side-nav-dark side-nav-static">
      <div class="side-nav-accordion side-nav-scrollable">
        ...
      </div>
    </div>
  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

## CSS
### Variables

As part of Boosted's evolving CSS variables approach, side navigation now use local CSS variables on `.side-nav` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="side-nav-css-vars" file="scss/_side-navigation.scss" >}}

Customization through CSS variables can be seen on the `.side-nav-dark` modifier class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="side-nav-dark-css-vars" file="scss/_side-navigation.scss" >}}

### Sass Variables

Variables for all side navigation:

{{< scss-docs name="side-nav-variables" file="scss/_variables.scss" >}}

Variables for the [dark side navigation](#dark-variant):

{{< scss-docs name="side-nav-dark-variables" file="scss/_variables.scss" >}}
