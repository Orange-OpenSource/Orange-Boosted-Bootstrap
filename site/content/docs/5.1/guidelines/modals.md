---
layout: guidelines
title: Modals
description: Display dialog or additional information above the current page.
group: guidelines
subgroup: Components
toc: true
---

## Modal with title and description

[Documentation]({{< docsref "/components/modal" >}})&nbsp;—&nbsp;{{< anchor web-mod-std-001 >}}

<div class="bd-example-modal">
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p lang="zxx">Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p lang="zxx">Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <a href="#" class="fw-bold me-3">Text link</a>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>

## Modal with image, title and description

[Documentation]({{< docsref "/components/modal" >}}#with-image)&nbsp;—&nbsp;{{< anchor web-mod-std-002 >}}

<div class="bd-example-modal">
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        {{< placeholder width="100%" height="260" class="modal-img" text="Image cap" >}}
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body">
          <p lang="zxx">Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>

## Modal with scrolling

[Documentation]({{< docsref "/components/modal" >}}#scrolling-long-content)&nbsp;—&nbsp;{{< anchor web-mod-scr-001 >}}

<div class="bd-example-modal">
  <div class="modal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"><span class="visually-hidden">Close</span></button>
        </div>
        <div class="modal-body" lang="zxx">
          <p>Please read through our Contributing guidelines.</p>
          <p>Included are directions for opening issues, coding standards, and notes on development.</p>
          <p>Moreover, if your pull request contains JavaScript patches or features, you must include relevant unit tests.</p>
          <p>All HTML and CSS should conform to the Code Guide.</p>
          <p>Editor preferences are available in the editor config for easy use in common text editors.</p>
          <p>For transparency into our release cycle and in striving to maintain backward compatibility, Boosted is maintained under the Semantic Versioning guidelines.</p>
          <p>Sometimes we screw up, but we adhere to those rules whenever possible.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>
