const f={title:"Components/Overview",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <fieldset disabled="">
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label is-disabled">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label is-disabled">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </fieldset>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>`,o=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <fieldset>
    <div class="mb-3">
      <label for="requiredTextInput" class="form-label is-required">Required input<span class="visually-hidden"> (required)</span></label>
      <input type="text" id="requiredTextInput" class="form-control" placeholder="Required input" required="">
    </div>
    <div class="mb-3">
      <label for="requiredSelect" class="form-label is-required">Required select menu<span class="visually-hidden"> (required)</span></label>
      <select id="requiredSelect" class="form-select" required="">
        <option value="">Required select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="requiredFieldsetCheck" required="">
        <label class="form-check-label" for="requiredFieldsetCheck">Must check this<span class="visually-hidden"> (required)</span></label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </fieldset>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>`,l=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="mb-3">
  <label for="tooltipTextInput" class="form-label">Input with helper inside a Popover</label>
  <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input">
    <span class="visually-hidden">Helper for input</span>
  </button>
  <input type="text" id="tooltipTextInput" class="form-control" placeholder="Tooltip input">
</div>
<div>
  <label for="tooltipSelect" class="form-label is-required mt-3">Select menu with helper inside a Tooltip<span class="visually-hidden"> (required)</span></label>
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for select menu">
    <span class="visually-hidden">Helper for select menu</span>
  </button>
  <select id="tooltipSelect" class="form-select" required="">
    <option value="">Tooltip select</option>
  </select>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>`;var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary mt-2">Submit</button>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>\``,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,n,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <fieldset disabled="">
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label is-disabled">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label is-disabled">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </fieldset>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>\``,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,d,b;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form>
  <fieldset>
    <div class="mb-3">
      <label for="requiredTextInput" class="form-label is-required">Required input<span class="visually-hidden"> (required)</span></label>
      <input type="text" id="requiredTextInput" class="form-control" placeholder="Required input" required="">
    </div>
    <div class="mb-3">
      <label for="requiredSelect" class="form-label is-required">Required select menu<span class="visually-hidden"> (required)</span></label>
      <select id="requiredSelect" class="form-select" required="">
        <option value="">Required select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="requiredFieldsetCheck" required="">
        <label class="form-check-label" for="requiredFieldsetCheck">Must check this<span class="visually-hidden"> (required)</span></label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary mt-2">Submit</button>
  </fieldset>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>\``,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var v,u,m;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="mb-3">
  <label for="tooltipTextInput" class="form-label">Input with helper inside a Popover</label>
  <button type="button" class="form-helper" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Help for input">
    <span class="visually-hidden">Helper for input</span>
  </button>
  <input type="text" id="tooltipTextInput" class="form-control" placeholder="Tooltip input">
</div>
<div>
  <label for="tooltipSelect" class="form-label is-required mt-3">Select menu with helper inside a Tooltip<span class="visually-hidden"> (required)</span></label>
  <button type="button" class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Help for select menu">
    <span class="visually-hidden">Helper for select menu</span>
  </button>
  <select id="tooltipSelect" class="form-select" required="">
    <option value="">Tooltip select</option>
  </select>
</div>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>
<script type="text/javascript">
  // storybook-start overview
  // --------
  // Tooltips
  // --------
  // Instantiate all tooltips in a docs or StackBlitz
  // storybook-start tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new boosted.Tooltip(tooltip)
    })
  // storybook-end tooltips

  // --------
  // Popovers
  // --------
  // Instantiate all popovers in docs or StackBlitz
  // storybook-start popovers
  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(popover => {
      new boosted.Popover(popover)
    })
  // storybook-end popovers
  // storybook-end overview
<\/script>\``,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const y=["Overview_0","Overview_1","Overview_2","Overview_3"];export{e as Overview_0,t as Overview_1,o as Overview_2,l as Overview_3,y as __namedExportsOrder,f as default};
