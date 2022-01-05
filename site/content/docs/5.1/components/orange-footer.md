---
layout: docs
title: Orange footer
description: Documentation and examples for Boosted's powerful, responsive footer. Includes support for branding, navigation and more.
group: components
aliases: "/docs/5.1/components/orange-footer/"
toc: true
---

## How it works

Orange footer is basically a `<footer>` tag with a `.bg-dark` class. It can be composed of several parts:
- mailing list bar
- social media bar
- navigation bar
- service bar
- **mandatory** bar

## Examples

<footer class="bg-dark">
  <!-- Mailing list -->
  <div class="container footer-mailing">
    <h6>Sign up to our mailing list</h6>
    <form>
      <label for="inputEmail2" class="visually-hidden">Email</label>
      <input type="email" class="form-control bg-dark border-dark text-white" id="inputEmail2" placeholder="Enter your email">
      <button type="submit" class="btn btn-secondary btn-inverse text-nowrap">Sign up</button>
    </form>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Follow us bar -->
  <div class="container footer-social">
    <ul>
      <li>Follow us</li>
      <li><a href="#" class="btn btn-icon btn-social btn-twitter btn-inverse"><span class="visually-hidden">Twitter</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-facebook btn-inverse"><span class="visually-hidden">Facebook</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-instagram btn-inverse"><span class="visually-hidden">Instagram</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-whatsapp btn-inverse"><span class="visually-hidden">WhatsApp</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-linkedin btn-inverse"><span class="visually-hidden">LinkedIn</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-youtube btn-inverse"><span class="visually-hidden">YouTube</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-snapchat btn-inverse"><span class="visually-hidden">Snapchat</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-pinterest btn-inverse"><span class="visually-hidden">Pinterest</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-mail btn-inverse"><span class="visually-hidden">Mail</span></a></li>
    </ul>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Navigation -->
  <div class="navbar-dark footer-nav">
    <div class="container d-none d-md-flex">
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
    </div>
    <div class="d-md-none accordion" id="accordionExampleSmall">
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingOneSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall" aria-expanded="true" aria-controls="collapseOneSmall">
            Category
          </button>
        </h6>
        <div id="collapseOneSmall" class="container accordion-collapse collapse" aria-labelledby="headingOneSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingTwoSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall" aria-expanded="true" aria-controls="collapseTwoSmall">
            Category
          </button>
        </h6>
        <div id="collapseTwoSmall" class="container accordion-collapse collapse" aria-labelledby="headingTwoSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingThreeSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall" aria-expanded="true" aria-controls="collapseThreeSmall">
            Category
          </button>
        </h6>
        <div id="collapseThreeSmall" class="container accordion-collapse collapse" aria-labelledby="headingThreeSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h6 class="container accordion-header" id="headingFourSmall">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourSmall" aria-expanded="true" aria-controls="collapseFourSmall">
            Category
          </button>
        </h6>
        <div id="collapseFourSmall" class="container accordion-collapse collapse" aria-labelledby="headingFourSmall" data-bs-parent="#accordionExampleSmall">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Service links -->
  <div class="container navbar-dark footer-service">
    <ul class="navbar-nav">
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#locate"/></svg>Locate a store</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#coverage"/></svg>Coverage checker</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#contact"/></svg>Contact us</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#protection"/></svg>Child protection</a></li>
    </ul>
  </div>

  <div class="border-bottom border-1 border-dark"></div>

  <!-- Terms & Conditions -->
  <div class="container navbar-dark footer-terms">
    <ul class="navbar-nav">
      <li>© Orange {{< year >}}</li>
      <li><a class="nav-link" href="#">Terms & Conditions</a></li>
      <li><a class="nav-link" href="#">Privacy</a></li>
      <li><a class="nav-link" href="#">Accessibility statement</a></li>
      <li><a class="nav-link" href="#">Cookie policy</a></li>
    </ul>
  </div>
</footer>

## Parts

Orange footer parts are independent from each other. Just add a dark separator between each part.

```html
<div class="border-bottom border-1 border-dark"></div>
```

### Mailing list bar

Orange footer comes with a mailing list sub-component: `.footer-mailing`.

{{< example class="p-0" >}}
<footer class="bg-dark">
  <!-- Mailing list -->
  <div class="container footer-mailing">
    <h6>Sign up to our mailing list</h6>
    <form>
      <label for="inputEmail1" class="visually-hidden">Email</label>
      <input type="email" class="form-control bg-dark border-dark text-white" id="inputEmail1" placeholder="Enter your email">
      <button type="submit" class="btn btn-secondary btn-inverse text-nowrap">Sign up</button>
    </form>
  </div>
</footer>
{{< /example >}}

### Social media bar

Orange footer comes with a social media sub-component: `.footer-social`.

{{< example class="p-0" >}}
<footer class="bg-dark">
  <!-- Follow us bar -->
  <div class="container footer-social">
    <ul>
      <li>Follow us</li>
      <li><a href="#" class="btn btn-icon btn-social btn-twitter btn-inverse"><span class="visually-hidden">Twitter</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-facebook btn-inverse"><span class="visually-hidden">Facebook</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-instagram btn-inverse"><span class="visually-hidden">Instagram</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-whatsapp btn-inverse"><span class="visually-hidden">WhatsApp</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-linkedin btn-inverse"><span class="visually-hidden">LinkedIn</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-youtube btn-inverse"><span class="visually-hidden">YouTube</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-snapchat btn-inverse"><span class="visually-hidden">Snapchat</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-pinterest btn-inverse"><span class="visually-hidden">Pinterest</span></a></li>
      <li><a href="#" class="btn btn-icon btn-social btn-mail btn-inverse"><span class="visually-hidden">Mail</span></a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

### Navigation bar

Orange footer comes with a navigation sub-component: `.footer-nav`.

{{< callout warning >}}
This sub-component needs our Collapse JavaScript plugin to work well.
{{< /callout >}}

{{< example class="p-0" >}}
<footer class="bg-dark">
  <!-- Navigation -->
  <div class="navbar-dark footer-nav">
    <div class="container d-none d-md-flex">
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
      <div class="col-3 me-1">
        <h6>Category</h6>
        <ul class="navbar-nav">
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
          <li><a class="nav-link" href="#">Subcategory</a></li>
        </ul>
      </div>
    </div>
    <div class="d-md-none accordion" id="accordionExampleSmall1">
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingOneSmall1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneSmall1" aria-expanded="true" aria-controls="collapseOneSmall1">
            Category
          </button>
        </h6>
        <div id="collapseOneSmall1" class="container accordion-collapse collapse" aria-labelledby="headingOneSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingTwoSmall1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoSmall1" aria-expanded="true" aria-controls="collapseTwoSmall1">
            Category
          </button>
        </h6>
        <div id="collapseTwoSmall1" class="container accordion-collapse collapse" aria-labelledby="headingTwoSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div class="border-bottom border-1 border-dark">
        <h6 class="container accordion-header" id="headingThreeSmall1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeSmall1" aria-expanded="true" aria-controls="collapseThreeSmall1">
            Category
          </button>
        </h6>
        <div id="collapseThreeSmall1" class="container accordion-collapse collapse" aria-labelledby="headingThreeSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h6 class="container accordion-header" id="headingFourSmall1">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourSmall1" aria-expanded="true" aria-controls="collapseFourSmall1">
            Category
          </button>
        </h6>
        <div id="collapseFourSmall1" class="container accordion-collapse collapse" aria-labelledby="headingFourSmall1" data-bs-parent="#accordionExampleSmall1">
          <ul class="navbar-nav">
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
            <li><a class="nav-link" href="#">Subcategory</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
{{< /example >}}

### Service bar

Orange footer comes with a service links sub-component: `.footer-service`.

{{< example class="p-0" >}}
<footer class="bg-dark">
  <!-- Service links -->
  <div class="container navbar-dark footer-service">
    <ul class="navbar-nav">
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#locate"/></svg>Locate a store</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#coverage"/></svg>Coverage checker</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#contact"/></svg>Contact us</a></li>
      <li><a class="nav-link" href="#"><svg width="1.875rem" height="1.875rem" focusable="false"><use xlink:href="/docs/{{< param docs_version >}}/assets/img/boosted-sprite.svg#protection"/></svg>Child protection</a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

### Mandatory bar

Orange footer comes with a terms & conditions sub-component: `.footer-terms`. This sub-component is mandatory.

{{< example class="p-0" >}}
<footer class="bg-dark">
  <!-- Terms & Conditions -->
  <div class="container navbar-dark footer-terms">
    <ul class="navbar-nav">
      <li>© Orange {{< year >}}</li>
      <li><a class="nav-link" href="#">Terms & Conditions</a></li>
      <li><a class="nav-link" href="#">Privacy</a></li>
      <li><a class="nav-link" href="#">Accessibility statement</a></li>
      <li><a class="nav-link" href="#">Cookie policy</a></li>
    </ul>
  </div>
</footer>
{{< /example >}}

## Sass

### Variables

For more details, please have a look at the exhaustive list of available variables:

{{< scss-docs name="orange-footer" file="scss/_variables.scss" >}}
