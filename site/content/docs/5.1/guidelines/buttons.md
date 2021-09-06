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

<div class="table-responsive mt-4 mb-5" tabindex="0">
  <table class="table table-guidelines">
    <thead>
      <tr>
        <td></td>
        <th scope="col">{{< anchor web-btn-sol-001 >}}</th>
        <th scope="col">{{< anchor web-btn-sfl-001 >}}</th>
        <th scope="col">{{< anchor web-btn-imp-001 >}}</th>
        <th scope="col">{{< anchor web-btn-pos-001 >}}</th>
        <th scope="col">{{< anchor web-btn-neg-001 >}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>
          <button type="button" class="btn btn-secondary">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-info">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-primary">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-success">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger">Button</button>
        </td>
      </tr>
      <tr>
        <th scope="row">Pressed</th>
        <td>
          <button type="button" class="btn btn-secondary active">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-info active">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-primary active">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-success active">Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger active">Button</button>
        </td>
      </tr>
      <tr>
        <th scope="row">Disabled</th>
        <td>
          <button type="button" class="btn btn-secondary" disabled>Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-info" disabled>Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-primary" disabled>Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-success" disabled>Button</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" disabled>Button</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### With icon

[Documentation]({{< docsref "/components/buttons" >}}#with-icon)

<div class="table-responsive mt-4 mb-5" tabindex="0">
  <table class="table table-guidelines">
    <thead>
      <tr>
        <td></td>
        <th scope="col">{{< anchor web-btn-sol-002 >}}</th>
        <th scope="col">{{< anchor web-btn-sfl-002 >}}</th>
        <th scope="col">{{< anchor web-btn-imp-002 >}}</th>
        <th scope="col">{{< anchor web-btn-pos-002 >}}</th>
        <th scope="col">{{< anchor web-btn-neg-002 >}}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Default</th>
        <td>
    <button type="button" class="btn btn-secondary">
      <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
        <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
      </svg>
      Settings
    </button>
  </td>
        <td>
          <button type="button" class="btn btn-info">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
            </svg>
            Settings
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-primary">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            Buy
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-success">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
            </svg>
            Save
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-danger">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
            </svg>
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">Pressed</th>
        <td>
          <button type="button" class="btn btn-secondary active">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
            </svg>
            Settings
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-info active">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
            </svg>
            Settings
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-primary active">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            Buy
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-success active">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
            </svg>
            Save
          </button>
        </td>
        <td>
          <button type="button" class="btn btn-danger active">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
            </svg>
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">Disabled</th>
        <td>
          <button type="button" disabled class="btn btn-secondary">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
            </svg>
            Settings
          </button>
        </td>
        <td>
          <button type="button" disabled class="btn btn-info">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#settings"/>
            </svg>
            Settings
          </button>
        </td>
        <td>
          <button type="button" disabled class="btn btn-primary">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#buy"/>
            </svg>
            Buy
          </button>
        </td>
        <td>
          <button type="button" disabled class="btn btn-success">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#tick"/>
            </svg>
            Save
          </button>
        </td>
        <td>
          <button type="button" disabled class="btn btn-danger">
            <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false" class="me-1 overflow-visible">
              <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
            </svg>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
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
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Pressed</h5>
        <button type="button" class="btn btn-icon btn-no-outline active">
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Disabled</h5>
        <button type="button" class="btn btn-icon btn-no-outline" disabled>
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
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
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Pressed</h5>
        <button type="button" class="btn btn-icon btn-secondary active">
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
      <div>
        <h5 class="h6">Disabled</h5>
        <button type="button" class="btn btn-icon btn-secondary" disabled>
          <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
            <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#delete"/>
          </svg>
          <span class="visually-hidden">Secondary</span>
        </button>
      </div>
    </div>
  </div>
</div>

## Toggle Buttons

[Documentation]({{< docsref "/forms/checks-radios" >}}#radio-toggle-buttons)

<div class="table-responsive mt-4 mb-5" tabindex="0">
  <table class="table table-guidelines">
    <thead>
      <tr>
        <td></td>
        <th scope="col">With labels<br/>{{< anchor web-btn-tog-001 >}}</th>
        <th scope="col">With icons<br/>{{< anchor web-btn-tog-002 >}}</th>
        <th scope="col">With icons, no outline<br/>{{< anchor web-btn-tog-003 >}}</th>
      </tr>
    </thead>
      <tr>
        <th scope="row">Selected</th>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
            <label class="btn" for="option1">Day</label>
            <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
            <label class="btn" for="option2">Week</label>
            <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off">
            <label class="btn" for="option3">Month</label>
          </div>
        </td>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="icons" id="option7" autocomplete="off" checked>
            <label class="btn btn-icon" for="option7">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
              </svg>
              <span class="visually-hidden">Day</span>
            </label>
            <input type="radio" class="btn-check" name="icons" id="option8" autocomplete="off">
            <label class="btn btn-icon" for="option8">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
              </svg>
              <span class="visually-hidden">Week</span>
            </label>
            <input type="radio" class="btn-check" name="icons" id="option9" autocomplete="off">
            <label class="btn btn-icon" for="option9">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
              </svg>
              <span class="visually-hidden">Month</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="borderless" id="option13" autocomplete="off" checked>
            <label class="btn btn-icon btn-no-outline" for="option13">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
              </svg>
              <span class="visually-hidden">Day</span>
            </label>
            <input type="radio" class="btn-check btn-check-no-outline" name="borderless" id="option14" autocomplete="off">
            <label class="btn btn-icon btn-no-outline" for="option14">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
              </svg>
              <span class="visually-hidden">Week</span>
            </label>
            <input type="radio" class="btn-check btn-check-no-outline" name="borderless" id="option15" autocomplete="off">
            <label class="btn btn-icon btn-no-outline" for="option15">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
              </svg>
              <span class="visually-hidden">Month</span>
            </label>
          </div>
        </td>
      </tr>
      <tr>
        <th scope="row">Disabled</th>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="disabled-options" id="option4" autocomplete="off" disabled checked>
            <label class="btn" for="option4">Day</label>
            <input type="radio" class="btn-check" name="disabled-options" id="option5" autocomplete="off" disabled>
            <label class="btn" for="option5">Week</label>
            <input type="radio" class="btn-check" name="disabled-options" id="option6" autocomplete="off" disabled>
            <label class="btn" for="option6">Month</label>
          </div>
        </td>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="disabled-icons" id="option10" autocomplete="off" disabled checked>
            <label class="btn btn-icon" for="option10">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
              </svg>
              <span class="visually-hidden">Day</span>
            </label>
            <input type="radio" class="btn-check" name="disabled-icons" id="option11" autocomplete="off" disabled>
            <label class="btn btn-icon" for="option11">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
              </svg>
              <span class="visually-hidden">Week</span>
            </label>
            <input type="radio" class="btn-check" name="disabled-icons" id="option12" autocomplete="off" disabled>
            <label class="btn btn-icon" for="option12">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
              </svg>
              <span class="visually-hidden">Month</span>
            </label>
          </div>
        </td>
        <td>
          <div class="btn-group" role="group">
            <input type="radio" class="btn-check" name="disabled-borderless" id="option16" autocomplete="off" disabled checked>
            <label class="btn btn-icon btn-no-outline" for="option16">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#day"/>
              </svg>
              <span class="visually-hidden">Day</span>
            </label>
            <input type="radio" class="btn-check btn-check-no-outline" name="disabled-borderless" id="option17" autocomplete="off" disabled>
            <label class="btn btn-icon btn-no-outline" for="option17">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#week"/>
              </svg>
              <span class="visually-hidden">Week</span>
            </label>
            <input type="radio" class="btn-check btn-check-no-outline" name="disabled-borderless" id="option18" autocomplete="off" disabled>
            <label class="btn btn-icon btn-no-outline" for="option18">
              <svg width="1.25rem" height="1.25rem" fill="currentColor" aria-hidden="true" focusable="false">
                <use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#month"/>
              </svg>
              <span class="visually-hidden">Month</span>
            </label>
          </div>
        </td>
      </tr>
    <tbody>
    </tbody>
  </table>
</div>

## Split buttons

[Documentation]({{< docsref "/components/dropdowns" >}}#split-button)&nbsp;—&nbsp;{{< anchor web-btn-spt-001 >}}

<div class="row gy-3 mt-4 mb-5">
  <div class="col-3">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-9">
    <div class="btn-group" role="group">
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
    <div class="btn-group" role="group">
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
    <div class="btn-group" role="group">
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
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
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

[Documentation]({{< docsref "/components/buttons" >}}#social-buttons)&nbsp;—&nbsp;{{< anchor web-btn-soc-001 >}}

<div class="row gy-3 mb-5">
  <div class="col-2">
    <h3 class="h6">Default</h3>
  </div>
  <div class="col-10">
    <a href="/" class="btn btn-icon btn-social btn-twitter"><span class="visually-hidden">Twitter</span></a>
    <a href="/" class="btn btn-icon btn-social btn-facebook"><span class="visually-hidden">Facebook</span></a>
    <a href="/" class="btn btn-icon btn-social btn-instagram"><span class="visually-hidden">Instagram</span></a>
    <a href="/" class="btn btn-icon btn-social btn-whatsapp"><span class="visually-hidden">Whatsapp</span></a>
    <a href="/" class="btn btn-icon btn-social btn-linkedin"><span class="visually-hidden">LinkedIn</span></a>
    <a href="/" class="btn btn-icon btn-social btn-youtube"><span class="visually-hidden">YouTube</span></a>
    <a href="/" class="btn btn-icon btn-social btn-snapchat"><span class="visually-hidden">Snapchat</span></a>
    <a href="/" class="btn btn-icon btn-social btn-pinterest"><span class="visually-hidden">Pinterest</span></a>
    <a href="/" class="btn btn-icon btn-social btn-mail"><span class="visually-hidden">Mail</span></a>
  </div>
  <div class="col-2">
    <h3 class="h6">Pressed</h3>
  </div>
  <div class="col-10">
    <a href="/" class="btn btn-icon btn-social btn-twitter active"><span class="visually-hidden">Twitter</span></a>
    <a href="/" class="btn btn-icon btn-social btn-facebook active"><span class="visually-hidden">Facebook</span></a>
    <a href="/" class="btn btn-icon btn-social btn-instagram active"><span class="visually-hidden">Instagram</span></a>
    <a href="/" class="btn btn-icon btn-social btn-whatsapp active"><span class="visually-hidden">Whatsapp</span></a>
    <a href="/" class="btn btn-icon btn-social btn-linkedin active"><span class="visually-hidden">LinkedIn</span></a>
    <a href="/" class="btn btn-icon btn-social btn-youtube active"><span class="visually-hidden">YouTube</span></a>
    <a href="/" class="btn btn-icon btn-social btn-snapchat active"><span class="visually-hidden">Snapchat</span></a>
    <a href="/" class="btn btn-icon btn-social btn-pinterest active"><span class="visually-hidden">Pinterest</span></a>
    <a href="/" class="btn btn-icon btn-social btn-mail active"><span class="visually-hidden">Mail</span></a>
  </div>
</div>
