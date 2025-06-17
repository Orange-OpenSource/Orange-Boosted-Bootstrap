const z={title:"Components/Toasts",parameters:{docs:{toc:!0}}},t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,e=()=>`<div class="bd-example m-0 border-0">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
</div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,s=()=>`<div class="bd-example order-first m-0 border-0 bg-secondary m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast-container position-static">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>just now</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>2 seconds ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,o=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast align-items-center fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,l=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast align-items-center text-bg-dark border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-theme="dark">
  <div class="d-flex">
    <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,d=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected="">Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-body-secondary position-relative bd-example-toasts">
  <div class="toast-container p-3" id="toastPlacement">
    <div class="toast fade show">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,i=()=>`<div class="bd-example order-first m-0 border-0 bd-example-toasts p-0 m-0 border-0">
    
<div aria-live="polite" aria-atomic="true" class="position-relative">
  
  
  
  
  <div class="toast-container top-0 end-0 p-3" id="toastStacked">

    
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>just now</small>
        <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-container="#toastStacked"><span class="visually-hidden">Close</span></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>2 seconds ago</small>
        <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-container="#toastStacked"><span class="visually-hidden">Close</span></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,c=()=>`<div class="bd-example order-first m-0 border-0 bd-example-toasts d-flex m-0 border-0">
    

<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`,r=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast fade show" data-bs-autohide="false">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \`\${document.getElementById('toastPlacement').dataset.originalClass} \${this.value}\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>`;var m,v,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var u,p,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`<div class="bd-example m-0 border-0">
  <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>
</div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,h,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 bg-secondary m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var E,B,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast-container position-static">
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>just now</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      See? Just like this.
    </div>
  </div>

  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>2 seconds ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Heads up, toasts will stack automatically
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var w,T,P;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast align-items-center fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(P=(T=o.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var k,x,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="toast-body">
    Hello, world! This is a toast message.
    <div class="mt-2 pt-2 border-top">
      <button type="button" class="btn btn-primary btn-sm">Take action</button>
      <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var j,N,S;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="toast align-items-center text-bg-dark border-0 fade show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-theme="dark">
  <div class="d-flex">
    <div class="toast-body my-auto">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var L,A,q;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <div class="mb-3">
    <label for="selectToastPlacement">Toast placement</label>
    <select class="form-select mt-2" id="selectToastPlacement">
      <option value="" selected="">Select a position...</option>
      <option value="top-0 start-0">Top left</option>
      <option value="top-0 start-50 translate-middle-x">Top center</option>
      <option value="top-0 end-0">Top right</option>
      <option value="top-50 start-0 translate-middle-y">Middle left</option>
      <option value="top-50 start-50 translate-middle">Middle center</option>
      <option value="top-50 end-0 translate-middle-y">Middle right</option>
      <option value="bottom-0 start-0">Bottom left</option>
      <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
      <option value="bottom-0 end-0">Bottom right</option>
    </select>
  </div>
</form>
<div aria-live="polite" aria-atomic="true" class="bg-body-secondary position-relative bd-example-toasts">
  <div class="toast-container p-3" id="toastPlacement">
    <div class="toast fade show">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>11 mins ago</small>
      </div>
      <div class="toast-body">
        Hello, world! This is a toast message.
      </div>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(q=(A=d.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var $,M,_;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 bd-example-toasts p-0 m-0 border-0">
    
<div aria-live="polite" aria-atomic="true" class="position-relative">
  
  
  
  
  <div class="toast-container top-0 end-0 p-3" id="toastStacked">

    
    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>just now</small>
        <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-container="#toastStacked"><span class="visually-hidden">Close</span></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
          </svg>
        <strong class="me-auto">Boosted</strong>
        <small>2 seconds ago</small>
        <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close" data-bs-container="#toastStacked"><span class="visually-hidden">Close</span></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(_=(M=i.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var O,D,H;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 bd-example-toasts d-flex m-0 border-0">
    

<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

  
  <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
      <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
        </svg>
      <strong class="me-auto">Boosted</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(H=(D=c.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var R,Y,J;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div role="alert" aria-live="assertive" aria-atomic="true" class="toast fade show" data-bs-autohide="false">
  <div class="toast-header">
    <svg class="bd-placeholder-img me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><rect width="100%" height="100%" fill="#ff7900"></rect>
      </svg>
    <strong class="me-auto">Boosted</strong>
    <small>11 mins ago</small>
    <button type="button" class="btn-close ms-2" data-bs-dismiss="toast" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
  </div>
  <div class="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start toasts
  if (document.getElementById('toastPlacement')) {
    document.getElementById('selectToastPlacement').addEventListener('change', function () {
      if (!document.getElementById('toastPlacement').dataset.originalClass) {
        document.getElementById('toastPlacement').dataset.originalClass = document.getElementById('toastPlacement').className
      }

      document.getElementById('toastPlacement').className = \\\`\\\${document.getElementById('toastPlacement').dataset.originalClass} \\\${this.value}\\\`
    })
  }

  // Instantiate all toasts in docs pages only
  document.querySelectorAll('.bd-example .toast')
    .forEach(toastNode => {
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Instantiate all toasts in docs pages only
  // js-docs-start live-toast
  if (document.getElementById('liveToastBtn')) {
    document.getElementById('liveToastBtn').addEventListener('click', () => {
      boosted.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    })
  }
  // js-docs-end live-toast
  // storybook-end toasts
<\/script>\``,...(J=(Y=r.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};const F=["Toasts_0","Toasts_1","Toasts_2","Toasts_3","Toasts_4","Toasts_5","Toasts_6","Toasts_7","Toasts_8","Toasts_9","Toasts_10"];export{t as Toasts_0,e as Toasts_1,r as Toasts_10,s as Toasts_2,a as Toasts_3,o as Toasts_4,n as Toasts_5,l as Toasts_6,d as Toasts_7,i as Toasts_8,c as Toasts_9,F as __namedExportsOrder,z as default};
