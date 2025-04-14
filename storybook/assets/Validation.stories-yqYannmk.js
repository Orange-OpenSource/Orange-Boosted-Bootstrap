const f={title:"Components/Validation",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3 needs-validation" novalidate="">
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required="">
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom03" required="">
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select" id="validationCustom04" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom05" required="">
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required="">
      
      <label class="form-check-label" for="invalidCheck">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required="">
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required="">
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required="">
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault03" required="">
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select" id="validationDefault04" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault05" required="">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required="">
      
      <label class="form-check-label" for="invalidCheck2">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,i=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required="">
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required="">
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required="">
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required="">
      
      <label class="form-check-label" for="invalidCheck3">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,l=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label is-required">Textarea<span class="visually-hidden"> (required)</span></label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="">
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox<span class="visually-hidden"> (required)</span></label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio<span class="visually-hidden"> (required)</span></label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio<span class="visually-hidden"> (required)</span></label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required="" aria-label="Open select menu (required)">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="Select a file (required)" required="">
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <label for="inputQuantitySelector" class="form-label">Quantity selector</label>
    <div class="quantity-selector w-100">
      <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="11" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
      <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
        <span class="visually-hidden">Step down</span>
      </button>
      <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
        <span class="visually-hidden">Step up</span>
      </button>
      <div class="invalid-feedback">Please enter a valid number.</div>
    </div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary mt-2" type="submit" disabled="">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var s,d,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3 needs-validation" novalidate="">
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom01" value="Mark" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom02" value="Otto" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required="">
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom03" required="">
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select" id="validationCustom04" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationCustom05" required="">
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required="">
      
      <label class="form-check-label" for="invalidCheck">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var r,t,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required="">
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required="">
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required="">
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault03" required="">
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select" id="validationDefault04" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control" id="validationDefault05" required="">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required="">
      
      <label class="form-check-label" for="invalidCheck2">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(o=(t=a.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var c,v,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="row g-3">
  <div class="col-md-4">
    <label for="validationServer01" class="form-label is-required">First name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label is-required">Last name<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServerUsername" class="form-label is-required">Username<span class="visually-hidden"> (required)</span></label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend3">@</span>
      <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required="">
      <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label is-required">City<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required="">
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label is-required">State<span class="visually-hidden"> (required)</span></label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required="">
      <option selected="" disabled="" value="">Choose...</option>
      <option>...</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label is-required">Zip<span class="visually-hidden"> (required)</span></label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required="">
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required="">
      
      <label class="form-check-label" for="invalidCheck3">By checking this box, I agree to the <a href="" target="_blank" aria-label="Terms and conditions (opens new window)">terms and conditions</a><span class="visually-hidden"> (required)</span></label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary mt-2" type="submit">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(u=(v=i.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var p,b,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<form class="was-validated">
  <div class="mb-3">
    <label for="validationTextarea" class="form-label is-required">Textarea<span class="visually-hidden"> (required)</span></label>
    <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required=""></textarea>
    <div class="invalid-feedback">
      Please enter a message in the textarea.
    </div>
  </div>

  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="validationFormCheck1" required="">
    <label class="form-check-label" for="validationFormCheck1">Check this checkbox<span class="visually-hidden"> (required)</span></label>
    <div class="invalid-feedback">Example invalid feedback text</div>
  </div>

  <div class="form-check">
    <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck2">Toggle this radio<span class="visually-hidden"> (required)</span></label>
  </div>
  <div class="form-check mb-3">
    <input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required="">
    <label class="form-check-label" for="validationFormCheck3">Or toggle this other radio<span class="visually-hidden"> (required)</span></label>
    <div class="invalid-feedback">More example invalid feedback text</div>
  </div>

  <div class="mb-3">
    <select class="form-select" required="" aria-label="Open select menu (required)">
      <option value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="invalid-feedback">Example invalid select feedback</div>
  </div>

  <div class="mb-3">
    <input type="file" class="form-control" aria-label="Select a file (required)" required="">
    <div class="invalid-feedback">Example invalid form file feedback</div>
  </div>

  <div class="mb-3">
    <label for="inputQuantitySelector" class="form-label">Quantity selector</label>
    <div class="quantity-selector w-100">
      <input type="number" id="inputQuantitySelector" class="form-control" aria-live="polite" data-bs-step="counter" name="quantity" title="quantity" value="11" min="0" max="10" step="1" data-bs-round="0" aria-label="Quantity selector">
      <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="down">
        <span class="visually-hidden">Step down</span>
      </button>
      <button type="button" class="btn btn-icon btn-outline-secondary" aria-describedby="inputQuantitySelector" data-bs-step="up">
        <span class="visually-hidden">Step up</span>
      </button>
      <div class="invalid-feedback">Please enter a valid number.</div>
    </div>
  </div>

  <div class="mb-3">
    <button class="btn btn-primary mt-2" type="submit" disabled="">Submit form</button>
  </div>
</form>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const h=["Validation_0","Validation_1","Validation_2","Validation_3"];export{e as Validation_0,a as Validation_1,i as Validation_2,l as Validation_3,h as __namedExportsOrder,f as default};
