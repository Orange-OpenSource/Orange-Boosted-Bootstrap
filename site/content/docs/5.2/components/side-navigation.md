---
layout: docs
title: Side Navigation
description: Documentation and examples for Boosted's exclusive Brand responsive side navigation.
group: components
toc: true
---

## How it works

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
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000">
              <path fill="currentColor" d="M175,125H425a50,50,0,0,1,50,50V425a50,50,0,0,1-50,50H175a50,50,0,0,1-50-50V175A50,50,0,0,1,175,125Zm0,400H425a50,50,0,0,1,50,50V825a50,50,0,0,1-50,50H175a50,50,0,0,1-50-50V575A50,50,0,0,1,175,525ZM575,125H825a50,50,0,0,1,50,50V425a50,50,0,0,1-50,50H575a50,50,0,0,1-50-50V175A50,50,0,0,1,575,125Zm0,400H825a50,50,0,0,1,50,50V825a50,50,0,0,1-50,50H575a50,50,0,0,1-50-50V575A50,50,0,0,1,575,525Z"/>
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
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item active" aria-current="true">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
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
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
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
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
                      <a href="#" class="side-nav-item">Label</a>
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
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000">
              <path fill="currentColor" d="M415.417,386.092L557.28,528.036,880.094,229.885a60.246,60.246,0,0,0,1.735-86.834l-0.445-.445a60.162,60.162,0,0,0-82.822-2.179L557.28,357.7l-99.3-99.361a60.163,60.163,0,0,0-85.118,0L117.5,513.841a60.246,60.246,0,0,0,0,85.166h0a60.165,60.165,0,0,0,85.118,0ZM124.863,780v-41L414.711,446.981,555.637,588.988,874.47,297.975V780H124.863ZM874.47,825H124.863a24.994,24.994,0,0,0-24.987,25h0a24.994,24.994,0,0,0,24.987,25H874.47a24.994,24.994,0,0,0,24.987-25h0A24.994,24.994,0,0,0,874.47,825Z"/>
            </svg>
            Financial
          </button>
        </h3>
        <div id="financialCollapse" class="accordion-collapse collapse" aria-labelledby="financialHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled m-0">
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header" id="chartsHeader">
          <button class="accordion-button collapsed side-nav-item" type="button" data-bs-toggle="collapse" data-bs-target="#chartsCollapse" aria-expanded="false" aria-controls="chartsCollapse">
            <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000">
              <path fill="currentColor" d="M525,76V475H924C911.542,260.257,739.743,88.458,525,76Zm49.842,56.774A375.23,375.23,0,0,1,867.226,425.158H574.842V132.774ZM475,76C251.987,88.937,75,273.878,75,500.135c0,0.052,0,.1,0,0.156C75.086,734.866,265.271,925,499.866,925a423.194,423.194,0,0,0,182.226-40.961L475,525V76ZM725.9,859.943C838.738,788.907,915.812,666.134,924,525H533Z"/>
            </svg>
            Charts
          </button>
        </h3>
        <div id="chartsCollapse" class="accordion-collapse collapse" aria-labelledby="chartsHeader" data-bs-parent="#sideNavAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled m-0">
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
              <a href="#" class="side-nav-item">Label</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Collapsible with title

{{< example >}}

{{< /example >}}

## Collapsible with content

{{< example >}}

{{< /example >}}
