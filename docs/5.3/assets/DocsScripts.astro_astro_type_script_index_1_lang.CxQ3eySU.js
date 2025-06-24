const P="https://stackblitz.com",S=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],A=["project","search","ports","settings"],B=["light","dark"],N=["editor","preview"],I={clickToLoad:e=>p("ctl",e),devToolsHeight:e=>_("devtoolsheight",e),forceEmbedLayout:e=>p("embed",e),hideDevTools:e=>p("hidedevtools",e),hideExplorer:e=>p("hideExplorer",e),hideNavigation:e=>p("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>x("showSidebar",e),sidebarView:e=>y("sidebarView",e,A),startScript:e=>m("startScript",e),terminalHeight:e=>_("terminalHeight",e),theme:e=>y("theme",e,B),view:e=>y("view",e,N),zenMode:e=>p("zenMode",e),organization:e=>`${m("orgName",e?.name)}&${m("orgProvider",e?.provider)}`,crossOriginIsolated:e=>p("corp",e)};function T(e={}){const t=Object.entries(e).map(([n,o])=>o!=null&&I.hasOwnProperty(n)?I[n](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function p(e,t){return t===!0?`${e}=1`:""}function x(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function _(e,t){if(typeof t=="number"&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function y(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function m(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function j(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${k(t)}${e}${T(t)}`}function b(e,t){const n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${k(n)}${e}${T(n)}`}function k(e={}){return(typeof e.origin=="string"?e.origin:P).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),L(t,n),M(e,t,n),e.replaceWith(t)}function E(e){if(typeof e=="string"){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function w(e){return e&&e.newWindow===!1?"_self":"_blank"}function L(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function M(e,t,n={}){const o=e.allow?.split(";")?.map(s=>s.trim())??[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}class O{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((o,s)=>{const r=j();this.pending[r]={resolve:o,reject:s},this.port.postMessage({type:t,payload:{...n,__reqid:r}})})}messageListener(t){if(typeof t.data.payload?.__reqid!="string")return;const{type:n,payload:o}=t.data,{__reqid:s,__success:r,__error:i}=o;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(i?`${n}: ${i}`:n),delete this.pending[s])}cleanResult(t){const n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}}class D{constructor(t,n){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>o?.url??null),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new O(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){const n=o=>o!==null&&typeof o=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const h=[];class H{constructor(t){this.id=j(),this.element=t,this.pending=new Promise((n,o)=>{const s=({data:a,ports:c})=>{a?.action==="SDK_INIT_SUCCESS"&&a.id===this.id&&(this.vm=new D(c[0],a.payload),n(this.vm),i())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(u),window.removeEventListener("message",s)}window.addEventListener("message",s),r();let l=0;const u=window.setInterval(()=>{if(this.vm){i();return}if(l>=20){i(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),h.forEach((a,c)=>{a.id===this.id&&h.splice(c,1)});return}l++,r()},500)}),h.push(this)}}const q=e=>{const t=e instanceof Element?"element":"id";return h.find(n=>n[t]===e)??null};function F(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function U(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function C({template:e,title:t,description:n,dependencies:o,files:s,settings:r}){if(!S.includes(e)){const a=S.map(c=>`'${c}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${a}`)}const i=[],l=(a,c,$="")=>{i.push(F(a,typeof c=="string"?c:$))};l("project[title]",t),typeof n=="string"&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(o))),r&&l("project[settings]",JSON.stringify(r)),Object.entries(s).forEach(([a,c])=>{l(`project[files][${U(a)}]`,c)});const u=document.createElement("form");return u.method="POST",u.setAttribute("style","display:none!important;"),u.append(...i),u}function R(e,t){const n=C(e);return n.action=b("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function G(e,t){const n=C(e);n.action=g("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function f(e){return e?.contentWindow?(q(e)??new H(e)).pending:Promise.reject("Provided element is not an iframe.")}function W(e,t){G(e,t)}function V(e,t){const n=g(`/edit/${e}`,t),o=w(t);window.open(n,o)}function z(e,t){const n=g(`/github/${e}`,t),o=w(t);window.open(n,o)}function K(e,t,n){const o=E(e),s=R(t,n),r=document.createElement("iframe");return v(o,r,n),r.contentDocument?.write(s),f(r)}function J(e,t,n){const o=E(e),s=document.createElement("iframe");return s.src=b(`/edit/${t}`,n),v(o,s,n),f(s)}function X(e,t,n){const o=E(e),s=document.createElement("iframe");return s.src=b(`/github/${t}`,n),v(o,s,n),f(s)}const Y={connect:f,embedGithubProject:X,embedProject:K,embedProjectId:J,openGithubProject:z,openProject:W,openProjectId:V},Q=`// NOTICE!!! Initially embedded in our docs this JavaScript
// file contains elements that can help you create reproducible
// use cases in StackBlitz for instance.
// In a real project please adapt this content to your needs.
// ++++++++++++++++++++++++++++++++++++++++++

/*
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global boosted: false */

export default () => {
  // Boosted mod: Try not using \`const\` at the first layer in this file, otherwise Storybook will fail to render some examples.

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

  // -------------------------------
  // Toasts
  // -------------------------------
  // Used by 'Placement' example in docs or StackBlitz
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

  // -------------------------------
  // Alerts
  // -------------------------------
  // Used in 'Show live alert' example in docs or StackBlitz

  // Boosted mod: adapted innerHTML to have the icon and so added a parameter within \`appendAlert()\` and a tooltip on \`.btn-close\`
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

  // --------
  // Carousels
  // --------
  // Instantiate all non-autoplaying carousels in docs or StackBlitz
  // storybook-start carousel
  document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])')
    .forEach(carousel => {
      boosted.Carousel.getOrCreateInstance(carousel)
    })
  // storybook-end carousel

  // -------------------------------
  // Checks & Radios
  // -------------------------------
  // Indeterminate checkbox example in docs and StackBlitz
  // storybook-start checksradios
  document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]')
    .forEach(checkbox => {
      if (checkbox.id.includes('Indeterminate')) {
        checkbox.indeterminate = true
      }
    })
  // storybook-end checksradios

  // -------------------------------
  // Links
  // -------------------------------
  // Disable empty links in docs examples only
  document.querySelectorAll('.bd-content [href="#"]')
    .forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault()
      })
    })

  // -------------------------------
  // Modal
  // -------------------------------
  // Modal 'Varying modal content' example in docs and StackBlitz
  // storybook-start modal
  // js-docs-start varying-modal-content
  if (document.getElementById('exampleModal')) {
    document.getElementById('exampleModal').addEventListener('show.bs.modal', event => {
      // Button that triggered the modal
      const button = event.relatedTarget
      // Extract info from data-bs-* attributes
      const recipient = button.getAttribute('data-bs-whatever')
      // If necessary, you could initiate an Ajax request here
      // and then do the updating in a callback.

      // Update the modal's content.
      const modalTitle = document.getElementById('exampleModal').querySelector('.modal-title')
      const modalBodyInput = document.getElementById('exampleModal').querySelector('.modal-body input')

      modalTitle.textContent = \`New message to \${recipient}\`
      modalBodyInput.value = recipient
    })
  }
  // js-docs-end varying-modal-content
  // storybook-end modal

  // -------------------------------
  // Offcanvas
  // -------------------------------
  // 'Offcanvas components' example in docs only
  // storybook-start offcanvas
  document.querySelectorAll('.bd-example-offcanvas .offcanvas')
    .forEach(offcanvas => {
      offcanvas.addEventListener('show.bs.offcanvas', event => {
        event.preventDefault()
      }, false)
    })
  // storybook-end offcanvas
}
`,d={cssCdn:"https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/css/boosted.min.css",jsBundleCdn:"https://cdn.jsdelivr.net/npm/boosted@5.3.7/dist/js/boosted.bundle.min.js",docsVersion:"5.3",helvNeue55W1GCdn:"undefined",helvNeue55W1GHash:"undefined",helvNeue75W1GCdn:"undefined",helvNeue75W1GHash:"undefined",helveticaCdn:"undefined",helveticaHash:"undefined"};document.querySelectorAll(".btn-edit").forEach(e=>{e.addEventListener("click",t=>{const n=t.target.closest(".bd-code-snippet"),o=n.querySelector(".bd-example"),s=o.innerHTML,r=n.querySelector(".btn-edit").getAttribute("data-sb-js-snippet"),i=Array.from(o.classList).join(" ");Z(s,r,i)})});const Z=(e,t,n)=>{const o=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--
      Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
      Patent and Trademark Office and may be registered in certain other jurisdictions.
      Copyright © 2014 Monotype Imaging Inc. All rights reserved.
      Orange has purchased the right to use Helvetica in its websites and mobile applications.
      If you are not authorized to used it, don’t include the orange-helvetica.css
      See NOTICE.txt for more information.
    -->
    <link href="${d.helvNeue55W1GCdn}" rel="preload" as="font" type="font/woff2" integrity="${d.helvNeue55W1GHash}" crossorigin="anonymous">
    <link href="${d.helvNeue75W1GCdn}" rel="preload" as="font" type="font/woff2" integrity="${d.helvNeue75W1GHash}" crossorigin="anonymous">
    <link href="${d.helveticaCdn}" rel="stylesheet" integrity="${d.helveticaHash}" crossorigin="anonymous">

    <link href="${d.cssCdn}" rel="stylesheet">
    <link href="https://boosted.orange.com/docs/${d.docsVersion}/assets/css/docs.css" rel="stylesheet">
    <title>Boosted Example</title>
    <script defer src="${d.jsBundleCdn}"><\/script>
  </head>
  <body class="p-3 m-0 border-0 ${n}">
    <!-- Example Code -->
  ${e.trimStart().replace(/^/gm,"    ").replace(/^ {4}$/gm,"").trimEnd()}
    <!-- End Example Code -->
  </body>
</html>`;let s="";t&&(s=Q.replace("export default () => {","const snippets_default = () => {"),s=`(() => {
  ${s}
  // <stdin>
  snippets_default();
})();`);const r={files:{"index.html":o,...t&&{"index.js":s}},title:"Boosted Example",description:`Official example from ${window.location.href}`,template:t?"javascript":"html",tags:["boosted"]};Y.openProject(r,{openFile:"index.html"})};
