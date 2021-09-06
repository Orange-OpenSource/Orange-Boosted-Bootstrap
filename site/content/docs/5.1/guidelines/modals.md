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
          <p lang="zxx">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore.</p>
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
          <p lang="zxx">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore.</p>
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
          <p lang="zxx">Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Consectetur lorem donec massa sapien faucibus et molestie. Nunc mattis enim ut tellus elementum sagittis vitae et leo.</p>
          <p>Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Lorem sed risus ultricies tristique. Volutpat diam ut venenatis tellus in. Mauris vitae ultricies leo integer malesuada nunc vel risus.</p>
          <p>Sit amet consectetur adipiscing elit duis tristique. Lacus laoreet non curabitur gravida arcu ac tortor. Pellentesque pulvinar pellentesque habitant morbi.</p>
          <p>Adipiscing commodo elit at imperdiet dui accumsan sit amet. Sit amet aliquam id diam maecenas. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Tellus at urna condimentum mattis pellentesque id nibh tortor.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button</button>
          <button type="button" class="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  </div>
</div>
