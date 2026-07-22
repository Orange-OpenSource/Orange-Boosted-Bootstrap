# Footer

Draft component — design not finalized. Based on Boosted footer with OUDS Web adaptations.

## Structure

```html
<footer class="footer navbar" data-bs-theme="dark">
  <h2 class="visually-hidden">Sitemap &amp; information</h2>

  <!-- Navigation section (accordion on mobile) -->
  <div class="container-fluid container-max-width footer-nav">
    <nav class="accordion" id="footerAccordion" aria-label="Sitemap">
      <div class="row">
        <div class="footer-column md:col-3">
          <h3 class="accordion-header footer-heading" id="heading1">
            <button
              class="accordion-button collapsed container-fluid container-max-width px-gridmargin md:d-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              Category
            </button>
            <span class="d-none md:d-flex">Category</span>
          </h3>
          <div
            id="collapse1"
            class="container-fluid container-max-width accordion-collapse collapse"
            data-bs-parent="#footerAccordion"
          >
            <ul class="navbar-nav ps-large md:ps-none">
              <li>
                <a class="nav-link" href="#" aria-describedby="heading1"
                  >Subcategory</a
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- More footer-columns... -->
      </div>
    </nav>
  </div>

  <div class="border-bottom border-thin border-default"></div>

  <!-- Service links -->
  <div class="container-fluid container-max-width footer-service">
    <ul class="navbar-nav gap-large md:gap-2xlarge">
      <li>
        <a class="nav-link gap-2xsmall" href="#">
          <svg width="1.875rem" height="1.875rem" aria-hidden="true">
            <use
              xlink:href="path/to/ouds-web-sprite.svg#location-pin-compass"
            ></use>
          </svg>
          <span>Store locator</span>
        </a>
      </li>
    </ul>
  </div>

  <div class="border-bottom border-thin border-default"></div>

  <!-- Terms -->
  <div class="container-fluid container-max-width footer-terms">
    <ul class="navbar-nav md:gap-large">
      <li>&copy; Orange 2026</li>
      <li><a class="nav-link" href="#">Terms and conditions</a></li>
      <li>
        <a class="nav-link active" href="#" aria-current="true"
          >Accessibility statement</a
        >
      </li>
    </ul>
  </div>
</footer>
```

## Key classes

- `.footer` + `.navbar` + `data-bs-theme="dark"` on `<footer>`
- `.footer-nav` — navigation accordion section
- `.footer-column` — each category column
- `.footer-heading` — category heading
- `.footer-service` — service links section
- `.footer-terms` — terms/legal section

## Required adaptations from Boosted

- `.accordion-button` must have `.px-gridmargin`
- `.navbar-nav` inside `.footer-nav` must have `.ps-large.md:ps-none`
- Use OUDS Web components (buttons, text inputs) instead of Boosted equivalents

> **Not Bootstrap:** Footer is an OUDS Web/Boosted-specific component. Uses accordion pattern on mobile, columns on desktop. Relies on `.footer-nav`, `.footer-service`, `.footer-terms` sections. Currently a draft — refer to Boosted docs for full variations.
