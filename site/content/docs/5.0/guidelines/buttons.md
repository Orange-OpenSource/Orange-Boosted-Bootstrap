---
layout: guidelines
title: Buttons
description: Boosted includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.
group: guidelines
subgroup: Components
toc: true
---


## Sizes

[Documentation]({{< docsref "/components/buttons" >}}#sizes)

<div class="row row-cols-lg-3 align-items-center">
  <div class="col">
    <h3 class="h6">Small</h3>
    <button type="button" class="btn btn-secondary btn-sm">Button</button>
  </div>
  <div class="col">
    <h3 class="h6">Medium</h3>
    <button type="button" class="btn btn-secondary">Button</button>
  </div>
  <div class="col">
    <h3 class="h6">Large</h3>
    <button type="button" class="btn btn-secondary btn-lg">Button</button>
  </div>
</div>


## Styles

[Documentation]({{< docsref "/components/buttons" >}}#examples)

<div class="row row-cols-3 row-cols-lg-6 gy-3 mt-4 mb-5">
  <div class="col-12 col-lg-2"></div>
  <div class="col">{{< anchor web-btn-sol-001 >}}</div>
  <div class="col">{{< anchor web-btn-sfl-001 >}}</div>
  <div class="col">{{< anchor web-btn-imp-001 >}}</div>
  <div class="col">{{< anchor web-btn-pos-001 >}}</div>
  <div class="col">{{< anchor web-btn-neg-001 >}}</div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger">Button</button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Pressed</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success active">Button</button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger active">Button</button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-secondary">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-info">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-primary">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-success">Button</button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-danger">Button</button>
  </div>
</div>

### With icon

[Documentation]({{< docsref "/components/buttons" >}}#with-icon)

<div class="row row-cols-3 row-cols-lg-6 gy-3 mt-4 mb-5">
  <div class="col-12 col-lg-2"></div>
  <div class="col">{{< anchor web-btn-sol-002 >}}</div>
  <div class="col">{{< anchor web-btn-sfl-002 >}}</div>
  <div class="col">{{< anchor web-btn-imp-002 >}}</div>
  <div class="col">{{< anchor web-btn-pos-002 >}}</div>
  <div class="col">{{< anchor web-btn-neg-002 >}}</div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Buy
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
      </svg>
      Save
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
      </svg>
      Delete
    </button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Pressed</h3>
  </div>
  <div class="col">
    <button type="button" class="btn btn-secondary active">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-info active">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-primary active">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Buy
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-success active">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
      </svg>
      Save
    </button>
  </div>
  <div class="col">
    <button type="button" class="btn btn-danger active">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
      </svg>
      Delete
    </button>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-secondary">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-info">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-primary">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
      </svg>
      Buy
    </button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-success">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
      </svg>
      Save
    </button>
  </div>
  <div class="col">
    <button type="button" disabled class="btn btn-danger">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
      </svg>
      Delete
    </button>
  </div>
</div>

### Icon buttons

[Documentation]({{< docsref "/components/buttons" >}}#icon-only)

<div class="row row-cols-2 gy-3 mt-4 mb-5">
  <div class="col">
    <h4 class="h5">Icon button —&nbsp;{{< anchor web-btn-ico-001 >}}</h4>
    <div class="row row-cols-3 gy-3">
      <div>
        <h5 class="h6">Default</h5>
        <button type="button" class="btn btn-icon btn-no-outline">
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Pressed</h5>
        <button type="button" class="btn btn-icon btn-no-outline active">
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Disabled</h5>
        <button type="button" class="btn btn-icon btn-no-outline" disabled>
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
    </div>
  </div>
  <div class="col">
    <h4 class="h5">Icon button outlined —&nbsp;{{< anchor web-btn-ico-002 >}}</h4>
    <div class="row row-cols-3 gy-3">
      <div>
        <h5 class="h6">Default</h5>
        <button type="button" class="btn btn-icon btn-secondary">
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Pressed</h5>
        <button type="button" class="btn btn-icon btn-secondary active">
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Disabled</h5>
        <button type="button" class="btn btn-icon btn-secondary" disabled>
          <svg width="1.25rem" height="1.25rem" fill="currentColor">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
    </div>
  </div>
</div>

## Toggle Buttons

[Documentation]({{< docsref "/forms/checks-radios" >}}#radio-toggle-buttons)&nbsp;—&nbsp;{{< anchor web-btn-tog-001 >}}

<div class="row gy-3 mt-4 mb-5">
  <div class="col-12 col-lg-2">
    <h3 class="h6">Selected</h3>
  </div>
  <div class="col-12 col-lg-4">
    <div class="btn-group">
      <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
      <label class="btn" for="option1">Day</label>
      <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
      <label class="btn" for="option2">Week</label>
      <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
      <label class="btn" for="option3">Month</label>
    </div>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons</h4>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons, borderless</h4>
  </div>
  <div class="col-12 col-lg-6 offset-lg-6 my-0">
    <div class="bd-callout bd-callout-info my-0">

  This feature will be delivered with [#182]({{< param repo >}}/issues/182).

  </div>
  </div>
  <div class="col-12 col-lg-2">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col-12 col-lg-4">
    <div class="btn-group">
      <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" disabled>
      <label class="btn" for="option4">Day</label>
      <input type="radio" class="btn-check" name="options" id="option5" autocomplete="off" disabled>
      <label class="btn" for="option5">Week</label>
      <input type="radio" class="btn-check" name="options" id="option6" autocomplete="off" disabled>
      <label class="btn" for="option6">Month</label>
    </div>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons</h4>
  </div>
  <div class="col-12 col-lg-3">
    <h4 class="h6 m-0">With icons, borderless</h4>
  </div>
  <div class="col-12 col-lg-6 offset-lg-6 my-0">
    <div class="bd-callout bd-callout-info my-0">

  This feature will be delivered with [#182]({{< param repo >}}/issues/182).

  </div>
  </div>
</div>

## Split buttons

[Documentation]({{< docsref "/components/dropdowns" >}}#split-button)&nbsp;—&nbsp;{{< anchor web-btn-spt-001 >}}

<div class="row gy-3 mt-4 mb-5">
  <div class="col-3">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-9">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary">Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
  <div class="col-3">
    <h3 class="h6">Active</h3>
  </div>
  <div class="col-9">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary active">Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
  <div class="col-3">
    <h3 class="h6">Disabled</h3>
  </div>
  <div class="col-9">
    <div class="btn-group">
      <button type="button" class="btn btn-secondary" disabled>Button</button>
      <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" disabled>
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
      </ul>
    </div>
  </div>
</div>

## Pagination

<div class="row row-cols-1 row-cols-lg-2 mb-5">
  <div class="col">

  ### With labels

  [Documentation]({{< docsref "/components/pagination" >}}#overview)&nbsp;—&nbsp;{{< anchor web-btn-pag-001 >}}

  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link has-label" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link has-label" href="#">Next</a></li>
    </ul>
  </nav>
  </div>
  <div class="col">

  ### With icons

  [Documentation]({{< docsref "/components/pagination" >}}#working-with-icons)&nbsp;—&nbsp;{{< anchor web-btn-pag-002 >}}

  <nav aria-label="Page navigation example with icons">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#" aria-label="Previous"></a></li>
      <li class="page-item"><a class="page-link" href="#" aria-label="Next"></a></li>
    </ul>
  </nav>
  </div>
</div>

## Back to top

[Documentation]({{< docsref "/components/back-to-top" >}})&nbsp;—&nbsp;{{< anchor web-btn-btt-001 >}}

<nav aria-label="Icon only back to top example" class="back-to-top position-static">
  <a href="#top" class="back-to-top-link position-static btn btn-icon btn-secondary" title="Back to top">
    <span class="visually-hidden">Back to top</span>
  </a>
</nav>


## Social buttons

{{< callout info >}}
This feature will be delivered with [#521]({{< param repo >}}/issues/521).
{{< /callout >}}
