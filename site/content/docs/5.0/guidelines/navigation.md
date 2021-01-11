---
layout: guidelines
title: Navigation
description: Navigation available in Boosted share general markup and styles, from standard links to full featured navbars.
group: guidelines
subgroup: Components
toc: true
---

## Links

[Documentation]({{< docsref "/content/typography" >}}#links)

<div class="row row-cols-2 gy-5 pt-3 mb-5">
  <div>
    <h3 class="h5">Main navigation links —&nbsp;{{< anchor web-nav-lnk-001 >}}</h3>
    <a href="#links" class="nav-link">Text link</a>
  </div>
  <div>
    <h3 class="h5">Small navigation links —&nbsp;{{< anchor web-nav-lnk-002 >}}</h3>
    <a href="#links" class="nav-link small">Text link</a>
  </div>
  <div>
    <h3 class="h5">Links with underline —&nbsp;{{< anchor web-nav-lnk-003 >}}</h3>
    <a href="#links" class="fw-bold">Text link</a>
  </div>
  <div>
    <h3 class="h5">Small links width underline —&nbsp;{{< anchor web-nav-lnk-004 >}}</h3>
    <a href="#links" class="fw-bold small">Text link</a>
  </div>
  <div class="col-12">
    <h3 class="h5">With chevron —&nbsp;{{< anchor web-nav-lnk-005 >}}</h3>
    <a href="#links" class="link-chevron">Text link</a>
  </div>
</div>

## Tabs

[Documentation]({{< docsref "/components/navs-tabs" >}}#tabs)&nbsp;—&nbsp;{{< anchor web-nav-tab-001 >}}

<div class="mb-5">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#tabs">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#tabs" tabindex="-1" aria-disabled="true">Label</a>
    </li>
  </ul>
</div>

## Tabs light

[Documentation]({{< docsref "/components/navs-tabs" >}}#tabs-light)&nbsp;—&nbsp;{{< anchor web-nav-tab-002 >}}

<div class="mb-5">
  <ul class="nav nav-tabs nav-tabs-light">
    <li class="nav-item">
      <a class="nav-link active" href="#tabs-light" aria-current="page">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#tabs-light">Label</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#tabs-light" tabindex="-1" aria-disabled="true">Label</a>
    </li>
  </ul>
</div>

## Pagination

[Documentation]({{< docsref "/components/pagination" >}})&nbsp;—&nbsp;{{< anchor web-nav-pag-001 >}}

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#pagination" tabindex="-1" aria-disabled="true" aria-label="Previous"></a></li>
    <li class="page-item"><a class="page-link" href="#pagination">1</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">2</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">3</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">4</a></li>
    <li class="page-item active"><a class="page-link" href="#pagination" aria-current="page">5</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">6</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">7</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">8</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">9</a></li>
    <li class="page-item"><a class="page-link" href="#pagination">10</a></li>
    <li class="page-item"><a class="page-link" href="#pagination" aria-label="Next"></a></li>
  </ul>
</nav>

## Pagination dots

[Documentation]({{< docsref "/components/carousel#with-indicators" >}})&nbsp;—&nbsp;{{< anchor web-nav-pdt-001 >}}

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <ol class="carousel-indicators">
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="60" class="bd-placeholder-img-lg d-block w-100" background="#000" text=" " >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="60" class="bd-placeholder-img-lg d-block w-100" background="#eee" text=" " >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="60" class="bd-placeholder-img-lg d-block w-100" background="#666" text=" " >}}
    </div>
  </div>
</div>

## Carousel navigation

[Documentation]({{< docsref "/components/carousel" >}})&nbsp;—&nbsp;{{< anchor web-nav-cna-001 >}}

<div id="carouselExampleControls" class="carousel slide" data-bs-wrap="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {{< placeholder width="800" height="200" class="bd-placeholder-img-lg d-block w-100" color="#fff" background="#000" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="200" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#eee" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder width="800" height="200" class="bd-placeholder-img-lg d-block w-100" color="#000" background="#ccc" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>

## Accordion

[Documentation]({{< docsref "/components/accordion" >}})
<div class="row gy-3 row-cols-1 row-cols-lg-3">
  <div class="col">
    <h3 class="h6">Small — {{< anchor web-nav-acc-001 >}}</h3>
    <div class="accordion accordion-sm" id="accordionExampleSmall">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOneSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall" aria-expanded="false" aria-controls="collapseOneSmall">
            Title
          </button>
        </h2>
        <div id="collapseOneSmall" class="accordion-collapse collapse" aria-labelledby="headingOneSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwoSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall" aria-expanded="false" aria-controls="collapseTwoSmall">
            Title
          </button>
        </h2>
        <div id="collapseTwoSmall" class="accordion-collapse collapse" aria-labelledby="headingTwoSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThreeSmall">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall" aria-expanded="true" aria-controls="collapseThreeSmall">
            Title
          </button>
        </h2>
        <div id="collapseThreeSmall" class="accordion-collapse collapse show" aria-labelledby="headingThreeSmall" data-bs-parent="#accordionExampleSmall">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <h3 class="h6">Medium — {{< anchor web-nav-acc-002 >}}</h3>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Title
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Title
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
            Title
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <h3 class="h6">Large — {{< anchor web-nav-acc-003 >}}</h3>
    <div class="accordion accordion-lg" id="accordionExampleLarge">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOneLarge">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneLarge" aria-expanded="false" aria-controls="collapseOneLarge">
            Title
          </button>
        </h2>
        <div id="collapseOneLarge" class="accordion-collapse collapse" aria-labelledby="headingOneLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwoLarge">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoLarge" aria-expanded="false" aria-controls="collapseTwoLarge">
            Title
          </button>
        </h2>
        <div id="collapseTwoLarge" class="accordion-collapse collapse" aria-labelledby="headingTwoLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThreeLarge">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeLarge" aria-expanded="true" aria-controls="collapseThreeLarge">
            Title
          </button>
        </h2>
        <div id="collapseThreeLarge" class="accordion-collapse collapse show" aria-labelledby="headingThreeLarge" data-bs-parent="#accordionExampleLarge">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Stepped process

{{< callout info >}}
This feature will be delivered with [#524]({{< param repo >}}/issues/524).
{{< /callout >}}
