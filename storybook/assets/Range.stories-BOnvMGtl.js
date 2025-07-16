const R={title:"Components/Range",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="disabledRange" class="form-label is-disabled">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled=""> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="d-flex w-100 justify-content-between">
  <label for="customRange4" class="form-label">Example range</label>
  <output for="customRange4" class="fw-bold" aria-hidden="true" id="rangeValue">50</output>
</div>
<input type="range" class="form-range" min="0" max="100" step="1" value="50" id="customRange4">

<script>
  // This is an example script, please modify as needed
  const rangeInput = document.getElementById('customRange4');
  const rangeOutput = document.getElementById('rangeValue');

  // Set initial value
  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
<\/script> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var s,l,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(o=(l=e.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,i,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="disabledRange" class="form-label is-disabled">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled=""> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,x,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0"> <div class="d-flex w-100 justify-content-between">
  <label for="customRange4" class="form-label">Example range</label>
  <output for="customRange4" class="fw-bold" aria-hidden="true" id="rangeValue">50</output>
</div>
<input type="range" class="form-range" min="0" max="100" step="1" value="50" id="customRange4">

<script>
  // This is an example script, please modify as needed
  const rangeInput = document.getElementById('customRange4');
  const rangeOutput = document.getElementById('rangeValue');

  // Set initial value
  rangeOutput.textContent = rangeInput.value;

  rangeInput.addEventListener('input', function() {
    rangeOutput.textContent = this.value;
  });
<\/script> </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const E=["Range_0","Range_1","Range_2","Range_3","Range_4"];export{e as Range_0,t as Range_1,a as Range_2,r as Range_3,n as Range_4,E as __namedExportsOrder,R as default};
