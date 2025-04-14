const E={title:"Components/Alerts",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
      '  <span class="alert-icon">',
      \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
      '  </span>',
      \`  <p>\${message}</p>\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \`.btn-close\` tooltip after \`innerHTML\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
      '  <span class="alert-icon">',
      \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
      '  </span>',
      \`  <p>\${message}</p>\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \`.btn-close\` tooltip after \`innerHTML\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>`,s=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
      '  <span class="alert-icon">',
      \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
      '  </span>',
      \`  <p>\${message}</p>\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \`.btn-close\` tooltip after \`innerHTML\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <div>
    <h4 class="alert-heading">Success notification text with <a href="#">a link</a> goes here.</h4>
    <p>Description text with <a href="#">a link</a> goes here.</p>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
      '  <span class="alert-icon">',
      \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
      '  </span>',
      \`  <p>\${message}</p>\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \`.btn-close\` tooltip after \`innerHTML\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
      '  <span class="alert-icon">',
      \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
      '  </span>',
      \`  <p>\${message}</p>\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \`.btn-close\` tooltip after \`innerHTML\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>`;var l,r,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-\\\${type} alert-dismissible" role="alert">\\\`,
      '  <span class="alert-icon">',
      \\\`    <span class="visually-hidden">\\\${typeVisuallyHidden}</span>\\\`,
      '  </span>',
      \\\`  <p>\\\${message}</p>\\\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \\\`.btn-close\\\` tooltip after \\\`innerHTML\\\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var o,d,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div id="liveAlertPlaceholder"></div>
<button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-\\\${type} alert-dismissible" role="alert">\\\`,
      '  <span class="alert-icon">',
      \\\`    <span class="visually-hidden">\\\${typeVisuallyHidden}</span>\\\`,
      '  </span>',
      \\\`  <p>\\\${message}</p>\\\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \\\`.btn-close\\\` tooltip after \\\`innerHTML\\\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,v,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <p>Success notification text goes here.</p>
</div>
<div class="alert alert-info alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Info</span></span>
  <p>Information notification text goes here.</p>
</div>
<div class="alert alert-warning alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
</div>
<div class="alert alert-danger alert-sm" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Error</span></span>
  <p>Error notification text goes here.</p>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-\\\${type} alert-dismissible" role="alert">\\\`,
      '  <span class="alert-icon">',
      \\\`    <span class="visually-hidden">\\\${typeVisuallyHidden}</span>\\\`,
      '  </span>',
      \\\`  <p>\\\${message}</p>\\\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \\\`.btn-close\\\` tooltip after \\\`innerHTML\\\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var u,m,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-success" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Success</span></span>
  <div>
    <h4 class="alert-heading">Success notification text with <a href="#">a link</a> goes here.</h4>
    <p>Description text with <a href="#">a link</a> goes here.</p>
  </div>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-\\\${type} alert-dismissible" role="alert">\\\`,
      '  <span class="alert-icon">',
      \\\`    <span class="visually-hidden">\\\${typeVisuallyHidden}</span>\\\`,
      '  </span>',
      \\\`  <p>\\\${message}</p>\\\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \\\`.btn-close\\\` tooltip after \\\`innerHTML\\\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <span class="alert-icon"><span class="visually-hidden">Warning</span></span>
  <p>Warning notification text goes here.</p>
  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close"><span class="visually-hidden">Close</span></button>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start alerts
  // js-docs-start live-alert
  function appendAlert(message, type, typeVisuallyHidden) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      \\\`<div class="alert alert-\\\${type} alert-dismissible" role="alert">\\\`,
      '  <span class="alert-icon">',
      \\\`    <span class="visually-hidden">\\\${typeVisuallyHidden}</span>\\\`,
      '  </span>',
      \\\`  <p>\\\${message}</p>\\\`,
      '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
      '    <span class="visually-hidden">Close</span>',
      '  </button>',
      '</div>'
    ].join('')

    document.getElementById('liveAlertPlaceholder').append(wrapper)

    // Create \\\`.btn-close\\\` tooltip after \\\`innerHTML\\\` has been modified
    const btnClose = wrapper.querySelector('.btn-close')
    const tooltip = new boosted.Tooltip(btnClose)
    btnClose.addEventListener('click', () => {
      tooltip.hide()
    })
  }

  if (document.getElementById('liveAlertBtn')) {
    document.getElementById('liveAlertBtn').addEventListener('click', () => {
      appendAlert('Nice, you triggered this alert message!', 'success', 'Success')
    })
  }
  // js-docs-end live-alert
  // storybook-end alerts
<\/script>\``,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["Alerts_0","Alerts_1","Alerts_2","Alerts_3","Alerts_4"];export{e as Alerts_0,t as Alerts_1,s as Alerts_2,n as Alerts_3,a as Alerts_4,A as __namedExportsOrder,E as default};
