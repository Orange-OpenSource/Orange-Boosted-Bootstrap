---
layout: docs
title: Side Navigation
description: Documentation and examples for Boosted's exclusive Brand responsive side navigation.
group: components
toc: true
added: "5.3"
---

## How it works

Side navigation is based on `.offcanvas-lg` class. Please refer to [Offcanvas]({{< docsref "/components/offcanvas#responsive" >}}) to learn more about its behavior. Since it uses [responsive offcanvas]({{< docsref "/components/offcanvas#responsive" >}}), please resize your browser to see its responsive behavior.

In the side navigation, each displayed element should have `.side-nav-item` to ensure correct size and behavior.

{{< callout warning >}}
In order to make side navigation work properly, please make sure that the Javascript files from [Collapse]({{< docsref "/components/collapse#usage" >}}) and [Tabs]({{< docsref "/components/navs-tabs#javascript-behavior" >}}) are imported in your project.
{{< /callout >}}

## Examples

### Basic

{{< example class="p-lg-0 d-block d-lg-flex side-nav-example" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenu" data-bs-toggle="offcanvas">With icon and accordions</button>

<div class="offcanvas-lg offcanvas-start side-nav" id="sidebarMenu">
  <div class="offcanvas-header">
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <div class="accordion" id="sideNavAccordion">
      <div class="accordion-item">
        <h3 class="accordion-header" id="dashboardHeader">
          <button class="accordion-button side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapse" aria-expanded="true" aria-controls="dashboardCollapse">
            Dashboard
          </button>
        </h3>
        <div id="dashboardCollapse" class="accordion-collapse collapse show" aria-labelledby="dashboardHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <div class="accordion" id="labels">
              <div class="accordion-item">
                <h4 class="accordion-header" id="labelOneHeader">
                  <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelOneCollapse" aria-expanded="true" aria-controls="labelOneCollapse">
                    Label
                  </button>
                </h4>
                <div id="labelOneCollapse" class="accordion-collapse collapse show" aria-labelledby="labelOneHeader" data-bs-parent="#labels">
                  <div class="accordion-body">
                    <ul class="list-unstyled m-0">
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h4 class="accordion-header" id="labelTwoHeader">
                  <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelTwoCollapse" aria-expanded="false" aria-controls="labelTwoCollapse">
                    Label
                  </button>
                </h4>
                <div id="labelTwoCollapse" class="accordion-collapse collapse" aria-labelledby="labelTwoHeader" data-bs-parent="#labels">
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
                <h4 class="accordion-header" id="labelThreeHeader">
                  <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelThreeCollapse" aria-expanded="false" aria-controls="labelThreeCollapse">
                    Label
                  </button>
                </h4>
                <div id="labelThreeCollapse" class="accordion-collapse collapse" aria-labelledby="labelThreeHeader" data-bs-parent="#labels">
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
        <h3 class="accordion-header" id="financialHeader">
          <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#financialCollapse" aria-expanded="false" aria-controls="financialCollapse">
            Financial
          </button>
        </h3>
        <div id="financialCollapse" class="accordion-collapse collapse" aria-labelledby="financialHeader" data-bs-parent="#sideNavAccordion">
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

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

### Basic with icons

{{< example class="p-lg-0 d-block d-lg-flex side-nav-example" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuWithIcons" data-bs-toggle="offcanvas">With icon and accordions</button>

<div class="offcanvas-lg offcanvas-start side-nav" id="sidebarMenuWithIcons">
  <div class="offcanvas-header">
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenuWithIcons" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <div class="accordion" id="sideNavAccordionWithIcons">
      <div class="accordion-item">
        <h3 class="accordion-header" id="dashboardHeaderWithIcons">
          <button class="accordion-button side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseWithIcons" aria-expanded="true" aria-controls="dashboardCollapseWithIcons">
            <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
            </svg>
            Dashboard
          </button>
        </h3>
        <div id="dashboardCollapseWithIcons" class="accordion-collapse collapse show" aria-labelledby="dashboardHeaderWithIcons" data-bs-parent="#sideNavAccordionWithIcons">
          <div class="accordion-body">
            <div class="accordion" id="labelsWithIcons">
              <div class="accordion-item">
                <h4 class="accordion-header" id="labelOneHeaderWithIcons">
                  <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelOneCollapseWithIcons" aria-expanded="true" aria-controls="labelOneCollapseWithIcons">
                    Label
                  </button>
                </h4>
                <div id="labelOneCollapseWithIcons" class="accordion-collapse collapse show" aria-labelledby="labelOneHeaderWithIcons" data-bs-parent="#labelsWithIcons">
                  <div class="accordion-body">
                    <ul class="list-unstyled m-0">
                      <li><a href="#" class="side-nav-item">Label</a></li>
                      <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                      <li><a href="#" class="side-nav-item">Label</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h4 class="accordion-header" id="labelTwoHeaderWithIcons">
                  <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelTwoCollapseWithIcons" aria-expanded="false" aria-controls="labelTwoCollapseWithIcons">
                    Label
                  </button>
                </h4>
                <div id="labelTwoCollapseWithIcons" class="accordion-collapse collapse" aria-labelledby="labelTwoHeaderWithIcons" data-bs-parent="#labelsWithIcons">
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
                <h4 class="accordion-header" id="labelThreeHeaderWithIcons">
                  <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelThreeCollapseWithIcons" aria-expanded="false" aria-controls="labelThreeCollapseWithIcons">
                    Label
                  </button>
                </h4>
                <div id="labelThreeCollapseWithIcons" class="accordion-collapse collapse" aria-labelledby="labelThreeHeaderWithIcons" data-bs-parent="#labelsWithIcons">
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
        <h3 class="accordion-header" id="chartsHeaderWithIcons">
          <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapseWithIcons" aria-expanded="false" aria-controls="chartsCollapseWithIcons">
            <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
            </svg>
            Charts
          </button>
        </h3>
        <div id="chartsCollapseWithIcons" class="accordion-collapse collapse" aria-labelledby="chartsHeaderWithIcons" data-bs-parent="#sideNavAccordionWithIcons">
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
        <h3 class="accordion-header" id="financialHeaderWithIcons">
          <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#financialCollapseWithIcons" aria-expanded="false" aria-controls="financialCollapseWithIcons">
            <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
            </svg>
            Financial
          </button>
        </h3>
        <div id="financialCollapseWithIcons" class="accordion-collapse collapse" aria-labelledby="financialHeaderWithIcons" data-bs-parent="#sideNavAccordionWithIcons">
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

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

### Collapsible

To use the collapsible behavior, know that:

- The toggle arrow is displayed by adding `.side-nav-collapse` to an empty `.side-nav-item`.
- The collapsible navigation width can be set by:
  - `--bs-side-nav-width` for the closed state.
  - `--bs-offcanvas-width` for the opened state.
- The collapsible side navigation uses [Tooltips]({{< docsref "/components/tooltips#usage" >}}) internally.

#### Collapsible basic

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuWithTitle" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-collapsible" id="sidebarMenuWithTitle">
  <div class="offcanvas-header">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenuWithTitle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div id="collapsible-element" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
    <div class="position-absolute">

      <button class="side-nav-item side-nav-collapse ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-element" aria-expanded="false" aria-controls="collapsible-element"><span class="visually-hidden">Open/Close side navigation</span></button>

      <ul class="list-unstyled m-0 w-100">
        <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
          <a href="#" class="side-nav-item fw-bold">
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
          <a href="#" class="side-nav-item active fw-bold">
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

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

#### Collapsible with drawer content

The collapsible side navigation comes with ready to use `onclick` calls:
- On the Offcanvas toggler button to `show` its content.
- On the Offcanvas close button to `hide` its content.
- On each menu item to `show` its content. (nav-item)

{{< example class="p-lg-0 side-nav-example d-block d-lg-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuWithContent" data-bs-toggle="offcanvas" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">Collapsing side navigation with content</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-collapsible side-nav-collapsible-content" id="sidebarMenuWithContent">
  <div class="offcanvas-header">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenuWithContent" data-bs-dismiss="offcanvas" aria-label="Close" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').hide()"></button>
  </div>
  <div class="offcanvas-body">
    <div id="collapsingTab" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
    <div class="position-absolute">

      <button class="side-nav-item side-nav-collapse ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingTab" aria-expanded="false" aria-controls="collapsingTab"><span class="visually-hidden">Open/Close side navigation</span></button>

      <div class="d-flex overflow-hidden">
        <ul class="list-unstyled m-0 side-nav-dark mw-100" role="tablist">
          <li role="presentation" data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
            <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#dashboardTab" type="button" role="tab" aria-controls="dashboardTab" aria-selected="false" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
              </svg>
              <span class="visually-hidden">Open dashboard tab</span>
            </button>
          </li>
          <li role="presentation" data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
            <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#chartsTab" type="button" role="tab" aria-controls="chartsTab" aria-selected="false" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
              </svg>
              <span class="visually-hidden">Open charts tab</span>
            </button>
          </li>
          <li role="presentation" data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
            <button class="side-nav-item active" data-bs-toggle="tab" data-bs-target="#financialTab" type="button" role="tab" aria-controls="financialTab" aria-selected="true" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              <span class="visually-hidden">Open financial tab</span>
            </button>
          </li>
        </ul>

        <div class="tab-content ms-2 w-100">
          <div class="tab-pane" id="dashboardTab" role="tabpanel">
            <div class="tab-pane-content"><h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light">Dashboard</h3></div>
          </div>

          <div class="tab-pane" id="chartsTab" role="tabpanel">
            <div class="tab-pane-content">
              <h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light">Charts</h3>
              <ul class="list-unstyled m-0">
                <li><a href="#" class="side-nav-item">Label</a></li>
                <li><a href="#" class="side-nav-item">Label</a></li>
                <li><a href="#" class="side-nav-item active">Label</a></li>
              </ul>
            </div>
          </div>

          <div class="tab-pane active" id="financialTab" role="tabpanel">
            <div class="tab-pane-content">
              <h3 class="tab-pane-title side-nav-item pe-none border-bottom border-1 border-light">Financial</h3>

              <div class="accordion" id="labelsContent">
                <div class="accordion-item">
                  <h4 class="accordion-header" id="labelOneContentHeader">
                    <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelOneContentCollapse" aria-expanded="true" aria-controls="labelOneContentCollapse">
                      Label
                    </button>
                  </h4>
                  <div id="labelOneContentCollapse" class="accordion-collapse collapse show" aria-labelledby="labelOneContentHeader" data-bs-parent="#labelsContent">
                    <div class="accordion-body">
                      <ul class="list-unstyled m-0">
                        <li><a href="#" class="side-nav-item">Label</a></li>
                        <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                        <li><a href="#" class="side-nav-item">Label</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h4 class="accordion-header" id="labelTwoContentHeader">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelTwoContentCollapse" aria-expanded="false" aria-controls="labelTwoContentCollapse">
                      Label
                    </button>
                  </h4>
                  <div id="labelTwoContentCollapse" class="accordion-collapse collapse" aria-labelledby="labelTwoContentHeader" data-bs-parent="#labelsContent">
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
                  <h4 class="accordion-header" id="labelThreeContentHeader">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelThreeContentCollapse" aria-expanded="false" aria-controls="labelThreeContentCollapse">
                      Label
                    </button>
                  </h4>
                  <div id="labelThreeContentCollapse" class="accordion-collapse collapse" aria-labelledby="labelThreeContentHeader" data-bs-parent="#labelsContent">
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
                  <h4 class="accordion-header" id="labelFourContentHeader">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelFourContentCollapse" aria-expanded="false" aria-controls="labelFourContentCollapse">
                      Label
                    </button>
                  </h4>
                  <div id="labelFourContentCollapse" class="accordion-collapse collapse" aria-labelledby="labelFourContentHeader" data-bs-parent="#labelsContent">
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
                  <h4 class="accordion-header" id="labelFiveContentHeader">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelFiveContentCollapse" aria-expanded="false" aria-controls="labelFiveContentCollapse">
                      Label
                    </button>
                  </h4>
                  <div id="labelFiveContentCollapse" class="accordion-collapse collapse" aria-labelledby="labelFiveContentHeader" data-bs-parent="#labelsContent">
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
      </div>

    </div>
  </div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
{{< /example >}}

## Static

Collapsible side navigation comes with a static variant: `.side-nav-static`.

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuStatic" data-bs-toggle="offcanvas">Collapsing side navigation</button>
  <div class="offcanvas-lg offcanvas-start side-nav side-nav-static side-nav-collapsible" id="sidebarMenuStatic">
    <div class="offcanvas-header">
      <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenuStatic" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="collapsible-element-2" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
      <div class="position-absolute">
        <button class="side-nav-item side-nav-collapse ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-element-2" aria-expanded="false" aria-controls="collapsible-element-2"><span class="visually-hidden">Open/Close side navigation</span></button>
        <ul class="list-unstyled m-0 mw-100">
          <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
            <a href="#" class="side-nav-item fw-bold">
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
            <a href="#" class="side-nav-item active fw-bold">
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
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuStatic" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-static side-nav-collapsible" id="sidebarMenuStatic">
  <div class="offcanvas-header">...</div>
  <div class="offcanvas-body">...</div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

## Right sided

Side navigation comes with a right sided variant: `.offcanvas-end`.

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuRight" data-bs-toggle="offcanvas">Collapsing side navigation</button>
  <div class="offcanvas-lg offcanvas-end side-nav side-nav-collapsible" id="sidebarMenuRight">
    <div class="offcanvas-header">
      <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenuRight" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="collapsible-element-right" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
      <div class="position-absolute">
        <button class="side-nav-item side-nav-collapse ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-element-right" aria-expanded="false" aria-controls="collapsible-element-right"><span class="visually-hidden">Open/Close side navigation</span></button>
        <ul class="list-unstyled m-0 w-100">
          <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
            <button class="side-nav-item fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
              </svg>
              Dashboard
            </button>
          </li>
          <li data-bs-toggle="tooltip" data-bs-title="Charts" data-bs-placement="right">
            <button class="side-nav-item fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
              </svg>
              Charts
            </button>
          </li>
          <li data-bs-toggle="tooltip" data-bs-title="Financial" data-bs-placement="right">
            <button class="side-nav-item active fw-bold">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              Financial
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuRight" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-end side-nav side-nav-collapsible" id="sidebarMenuRight">
  <div class="offcanvas-header">...</div>
  <div class="offcanvas-body">...</div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

## Dark variant

Side navigation comes with a dark variant: `.side-nav-dark`.

{{< callout info >}}
Dark variant can be applied on any example except the [Collapsible with drawer content](#collapsible-with-drawer-content) one.
{{< /callout >}}

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuDark" data-bs-toggle="offcanvas">With icon and accordions</button>
  <div class="offcanvas-lg offcanvas-start side-nav side-nav-dark" id="sidebarMenuDark">
    <div class="offcanvas-header">
      <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenuDark" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion w-100" id="sideNavAccordionDark">
        <div class="accordion-item">
          <h3 class="accordion-header" id="dashboardHeaderDark">
            <button class="accordion-button side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseDark" aria-expanded="true" aria-controls="dashboardCollapseDark">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
              </svg>
              Dashboard
            </button>
          </h3>
          <div id="dashboardCollapseDark" class="accordion-collapse collapse show" aria-labelledby="dashboardHeaderDark" data-bs-parent="#sideNavAccordionDark">
            <div class="accordion-body">
              <div class="accordion" id="labelsDark">
                <div class="accordion-item">
                  <h4 class="accordion-header" id="labelOneHeaderDark">
                    <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelOneCollapseDark" aria-expanded="true" aria-controls="labelOneCollapseDark">
                      Label
                    </button>
                  </h4>
                  <div id="labelOneCollapseDark" class="accordion-collapse collapse show" aria-labelledby="labelOneHeaderDark" data-bs-parent="#labelsDark">
                    <div class="accordion-body">
                      <ul class="list-unstyled m-0">
                        <li><a href="#" class="side-nav-item">Label</a></li>
                        <li><a href="#" class="side-nav-item active" aria-current="true">Label</a></li>
                        <li><a href="#" class="side-nav-item">Label</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h4 class="accordion-header" id="labelTwoHeaderDark">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelTwoCollapseDark" aria-expanded="false" aria-controls="labelTwoCollapseDark">
                      Label
                    </button>
                  </h4>
                  <div id="labelTwoCollapseDark" class="accordion-collapse collapse" aria-labelledby="labelTwoHeaderDark" data-bs-parent="#labelsDark">
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
                  <h4 class="accordion-header" id="labelThreeHeaderDark">
                    <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#labelThreeCollapseDark" aria-expanded="false" aria-controls="labelThreeCollapseDark">
                      Label
                    </button>
                  </h4>
                  <div id="labelThreeCollapseDark" class="accordion-collapse collapse" aria-labelledby="labelThreeHeaderDark" data-bs-parent="#labelsDark">
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
          <h3 class="accordion-header" id="financialHeaderDark">
            <button class="accordion-button collapsed side-nav-item fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#financialCollapseDark" aria-expanded="false" aria-controls="financialCollapseDark">
              <svg width="1.5rem" height="1.5rem" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              Financial
            </button>
          </h3>
          <div id="financialCollapseDark" class="accordion-collapse collapse" aria-labelledby="financialHeaderDark" data-bs-parent="#sideNavAccordionDark">
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
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuDark" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-dark" id="sidebarMenuDark">
  <div class="offcanvas-header">...</div>
  <div class="offcanvas-body">...</div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

<div class="bd-example p-lg-0 side-nav-example d-block d-lg-flex">
  <button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuDarkWithTitle" data-bs-toggle="offcanvas">With icon and accordions</button>
  <div class="offcanvas-lg offcanvas-start side-nav side-nav-dark side-nav-collapsible" id="sidebarMenuDarkWithTitle">
    <div class="offcanvas-header">
      <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenuDarkWithTitle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div id="collapsible-element-dark" class="collapse collapse-horizontal"><div>&nbsp;</div></div>
      <div class="position-absolute">
        <button class="side-nav-item side-nav-collapse ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-element-dark" aria-expanded="false" aria-controls="collapsible-element-dark"><span class="visually-hidden">Open/Close side navigation</span></button>
        <ul class="list-unstyled m-0 w-100">
          <li data-bs-toggle="tooltip" data-bs-title="Dashboard" data-bs-placement="right">
            <a href="#" class="side-nav-item fw-bold">
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
            <a href="#" class="side-nav-item active fw-bold">
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
  <div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
</div>

```html
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenuDarkWithTitle" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-dark side-nav-collapsible" id="sidebarMenuDarkWithTitle">
  <div class="offcanvas-header">...</div>
  <div class="offcanvas-body">...</div>
</div>

<div class="d-none d-lg-flex flex-grow-1 p-2">Content that should fill the remaining space.</div>
```

## CSS

### Variables

As part of Boosted's evolving CSS variables approach, side navigation now use local CSS variables on `.side-nav` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

{{< scss-docs name="side-nav-css-vars" file="scss/_side-navigation.scss" >}}

Some additional CSS variables are also present on `.side-nav-collapsible`:

{{< scss-docs name="side-nav-collapsible-css-vars" file="scss/_side-navigation.scss" >}}

Some additional CSS variables are also present on `.side-nav-collapsible-content`:

{{< scss-docs name="side-nav-collapsible-content-css-vars" file="scss/_side-navigation.scss" >}}

Customization through CSS variables can be seen on the `.side-nav-dark` modifier class where we override specific values without adding duplicate CSS selectors.

{{< scss-docs name="side-nav-dark-css-vars" file="scss/_side-navigation.scss" >}}

### Sass variables

{{< scss-docs name="side-nav-variables" file="scss/_variables.scss" >}}
