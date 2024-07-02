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
- `.side-nav-scrollable` to ensure correct behavior of scroll boxes.
- `.side-nav-item` to ensure correct size and behavior of displayed elements.
- optional `.side-nav-static` to make collapsible side navigation static.
- optional `.side-nav-toggle` and `.side-nav-content` to embed a version of the collapse toggler and make sure the content is well sized even with a toggler button.

With the following structure:

```html
<nav class="side-nav">
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
        <ul class="side-nav-content side-nav-scrollable list-unstyled m-0" tabindex="-1">
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
          <ul class="side-nav-content side-nav-scrollable list-unstyled m-0" tabindex="-1">
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

## CSS
### Variables

As part of Boosted's evolving CSS variables approach, side navigation now use local CSS variables on `.side-nav` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="side-nav-css-vars" file="scss/_side-navigation.scss" >}}

### Sass Variables

{{< scss-docs name="side-nav-variables" file="scss/_variables.scss" >}}
