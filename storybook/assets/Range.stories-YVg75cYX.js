const E={title:"Components/Range",parameters:{docs:{toc:!0}}},e=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,a=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="disabledRange" class="form-label is-disabled">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled="">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,r=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,t=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`,n=()=>`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="d-flex w-100 justify-content-between">
  <label for="customRange4" class="form-label">Example range</label>
  <output for="customRange4" class="fw-bold" aria-hidden="true">50</output>
</div>
<input type="range" class="form-range" min="0" max="100" step="1" id="customRange4">

<script>
  // Please note that this script is only an example, please adapt it to your needs

  function updateLabelValue() {
    document.querySelector(\`output[for="\${this.id}"]\`).innerHTML = this.value;
  }

  window.addEventListener('load', function () {
    Array.from(document.getElementsByClassName('form-range')).forEach(function (el) {
      if (document.querySelector(\`output[for="\${el.id}"]\`)) {
        el.addEventListener('input', updateLabelValue)
        updateLabelValue.call(el)
      }
    })
  })
<\/script>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>`;var l,s,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange1" class="form-label">Example range</label>
<input type="range" class="form-range" id="customRange1">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="disabledRange" class="form-label is-disabled">Disabled range</label>
<input type="range" class="form-range" id="disabledRange" disabled="">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange2" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" id="customRange2">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,b,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<label for="customRange3" class="form-label">Example range</label>
<input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,y,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => \`<div class="bd-example order-first m-0 border-0 m-0 border-0">
    
<div class="d-flex w-100 justify-content-between">
  <label for="customRange4" class="form-label">Example range</label>
  <output for="customRange4" class="fw-bold" aria-hidden="true">50</output>
</div>
<input type="range" class="form-range" min="0" max="100" step="1" id="customRange4">

<script>
  // Please note that this script is only an example, please adapt it to your needs

  function updateLabelValue() {
    document.querySelector(\\\`output[for="\\\${this.id}"]\\\`).innerHTML = this.value;
  }

  window.addEventListener('load', function () {
    Array.from(document.getElementsByClassName('form-range')).forEach(function (el) {
      if (document.querySelector(\\\`output[for="\\\${el.id}"]\\\`)) {
        el.addEventListener('input', updateLabelValue)
        updateLabelValue.call(el)
      }
    })
  })
<\/script>

  </div>
<script type="text/javascript">
  /* global boosted: false */
  document.querySelectorAll('[href]').forEach(link => {link.addEventListener('click', event => {event.preventDefault()})})
<\/script>\``,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const R=["Range_0","Range_1","Range_2","Range_3","Range_4"];export{e as Range_0,a as Range_1,r as Range_2,t as Range_3,n as Range_4,R as __namedExportsOrder,E as default};
