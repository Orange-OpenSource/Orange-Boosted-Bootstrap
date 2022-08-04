---
layout: docs
title: Side Navigation
description: Documentation and examples for Boosted's exclusive Brand responsive side navigation.
group: components
toc: true
---

## How it works

Side navigation is based on `.offcanvas-*` class. Please refer to [its documentation]({{< docsref "/components/offcanvas#responsive" >}}) to learn more about its behavior.

Side navigation may need the Javascript from Accordions, Collapse, Tabs or Tooltips (in addition of its own), depending on the implemented navigation, to work correctly.

## Basic

{{< example class="p-0" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenu1" data-bs-toggle="offcanvas">With icon and accordions</button>

<div class="offcanvas-lg offcanvas-start side-nav" id="sidebarMenu1">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu1" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="accordion w-100" id="sideNavAccordion">
      <div class="accordion-item">
        <h3 class="accordion-header" id="dashboardHeader">
          <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapse" aria-expanded="true" aria-controls="dashboardCollapse">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
            </svg>
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
                      <li><a href="#" class="side-nav-item">Label</a></li>
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
        <h3 class="accordion-header" id="financialHeader">
          <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#financialCollapse" aria-expanded="false" aria-controls="financialCollapse">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
            </svg>
            Financial
          </button>
        </h3>
        <div id="financialCollapse" class="accordion-collapse collapse" aria-labelledby="financialHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled m-0">
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" id="chartsHeader">
          <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapse" aria-expanded="false" aria-controls="chartsCollapse">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
            </svg>
            Charts
          </button>
        </h3>
        <div id="chartsCollapse" class="accordion-collapse collapse" aria-labelledby="chartsHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled m-0">
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
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
{{< /example >}}

## Collapsible with title

{{< example class="p-0 scrollspy-example-2 d-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenu2" data-bs-toggle="offcanvas">Collapsing side navigation</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-collapsible" id="sidebarMenu2">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-target="#sidebarMenu2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div id="collapsible-list" class="collapse collapse-horizontal">
      <div class="fake">&nbsp;</div>
    </div>
    <div class="position-absolute w-100">
      <button class="btn side-nav-item p-0 bg-transparent d-none d-lg-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible-list" aria-expanded="false" aria-controls="collapsible-list"><span class="visually-hidden">Open/Close side navigation</span></button>
      <ul class="list-unstyled m-0">
        <li>
          <button class="side-nav-item fw-bold" data-bs-toggle="tooltip" title="Dashboard" data-bs-placement="right">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
            </svg>
            Dashboard
          </button>
        </li>
        <li>
          <button class="side-nav-item active fw-bold" data-bs-toggle="tooltip" title="Financial" data-bs-placement="right">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
            </svg>
            Financial
          </button>
        </li>
        <li>
          <button class="side-nav-item fw-bold" data-bs-toggle="tooltip" title="Charts" data-bs-placement="right">
            <svg width="1.5rem" height="1.5rem">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
            </svg>
            Charts
          </button>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="d-none d-lg-flex">test</div>
{{< /example >}}

## Collapsible with content

Strongly WIP, onclick functions are a test without extra JS. But fully working example atm.

{{< example class="p-0 scrollspy-example-2 d-flex" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenu3" data-bs-toggle="offcanvas" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">Collapsing side navigation with content</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-collapsible-content" id="sidebarMenu3">
  <div class="offcanvas-header justify-content-end">
    <button type="button" class="btn-close ms-auto" data-bs-target="#sidebarMenu3" data-bs-dismiss="offcanvas" aria-label="Close" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').hide()"></button>
  </div>
  <div class="offcanvas-body d-flex flex-row">
    <div class="position-absolute d-flex flex-column flex-wrap">
      <button class="btn side-nav-item p-0 bg-transparent d-none d-lg-flex collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingTab" aria-expanded="false" aria-controls="collapsingTab"><span class="visually-hidden">Open/Close side navigation</span></button>
      <div class="d-flex flex-row">
        <ul class="list-unstyled m-0 side-nav-dark" role="tablist">
          <li role="presentation" data-bs-toggle="tooltip" title="Dashboard" data-bs-placement="right">
            <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#dashboardTab" type="button" role="tab" aria-controls="dashboardTab" aria-selected="false" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#dashboard"/>
              </svg>
              <span class="visually-hidden">Open dashboard tab</span>
            </button>
          </li>
          <li role="presentation" data-bs-toggle="tooltip" title="Financial" data-bs-placement="right">
            <button class="side-nav-item active" data-bs-toggle="tab" data-bs-target="#financialTab" type="button" role="tab" aria-controls="financialTab" aria-selected="true" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#financial"/>
              </svg>
              <span class="visually-hidden">Open financial tab</span>
            </button>
          </li>
          <li role="presentation" data-bs-toggle="tooltip" title="Charts" data-bs-placement="right">
            <button class="side-nav-item" data-bs-toggle="tab" data-bs-target="#chartsTab" type="button" role="tab" aria-controls="chartsTab" aria-selected="false" onclick="boosted.Collapse.getOrCreateInstance('#collapsingTab').show()">
              <svg width="1.5rem" height="1.5rem">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#chart"/>
              </svg>
              <span class="visually-hidden">Open charts tab</span>
            </button>
          </li>
        </ul>
        <div class="collapse collapse-horizontal" id="collapsingTab">
          <div class="tab-content d-flex flex-column">
            <div class="tab-pane" id="dashboardTab" role="tabpanel" tabindex="0">
              <div class="tab-pane-content"><h3 class="tab-pane-title">Dashboard</h3></div>
            </div>
            <div class="tab-pane active" id="financialTab" role="tabpanel" tabindex="0">
              <div class="tab-pane-content"><h3 class="tab-pane-title">Financial</h3></div>
            </div>
            <div class="tab-pane" id="chartsTab" role="tabpanel" tabindex="0">
              <div class="tab-pane-content"><h3 class="tab-pane-title">Charts</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="d-none d-lg-flex">test</div>
{{< /example >}}

## Dark variant

Side navigation comes with a dark variant: `.side-nav-dark`.

{{< example class="p-0" >}}
<button class="btn btn-primary d-lg-none" data-bs-target="#sidebarMenu4" data-bs-toggle="offcanvas">With icon and accordions</button>

<div class="offcanvas-lg offcanvas-start side-nav side-nav-dark" id="sidebarMenu4">
  <div class="offcanvas-header">
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu4" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="accordion w-100" id="sideNavAccordionDark">
      <div class="accordion-item">
        <h3 class="accordion-header" id="dashboardHeaderDark">
          <button class="accordion-button side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardCollapseDark" aria-expanded="true" aria-controls="dashboardCollapseDark">
            <svg width="1.5rem" height="1.5rem">
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
                      <li><a href="#" class="side-nav-item">Label</a></li>
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
        <h3 class="accordion-header" id="financialHeaderDark">
          <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#financialCollapseDark" aria-expanded="false" aria-controls="financialCollapseDark">
            <svg width="1.5rem" height="1.5rem">
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
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" id="chartsHeaderDark">
          <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapseDark" aria-expanded="false" aria-controls="chartsCollapseDark">
            <svg width="1.5rem" height="1.5rem">
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
              <li><a href="#" class="side-nav-item">Label</a></li>
              <li><a href="#" class="side-nav-item">Label</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}
