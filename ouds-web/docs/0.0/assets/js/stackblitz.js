(()=>{var F="https://stackblitz.com",T=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],M=["project","search","ports","settings"],U=["light","dark"],k=["editor","preview"],j={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>$("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>p("file",e),showSidebar:e=>H("showSidebar",e),sidebarView:e=>g("sidebarView",e,M),startScript:e=>p("startScript",e),terminalHeight:e=>$("terminalHeight",e),theme:e=>g("theme",e,U),view:e=>g("view",e,k),zenMode:e=>d("zenMode",e),organization:e=>`${p("orgName",e==null?void 0:e.name)}&${p("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>d("corp",e)};function P(e={}){let t=Object.entries(e).map(([n,o])=>o!=null&&j.hasOwnProperty(n)?j[n](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function d(e,t){return t===!0?`${e}=1`:""}function H(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function $(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function g(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function p(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function A(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function w(e,t){return`${N(t)}${e}${P(t)}`}function _(e,t){let n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${N(n)}${e}${P(n)}`}function N(e={}){return(typeof e.origin=="string"?e.origin:F).replace(/\/$/,"")}function S(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),W(t,n),R(e,t,n),e.replaceWith(t)}function v(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function I(e){return e&&e.newWindow===!1?"_self":"_blank"}function W(e,t={}){let n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function R(e,t,n={}){var s,r,i;let o=(i=(r=(s=e.allow)==null?void 0:s.split(";"))==null?void 0:r.map(a=>a.trim()))!=null?i:[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}var y=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((o,s)=>{let r=A();this.pending[r]={resolve:o,reject:s},this.port.postMessage({type:t,payload:{...n,__reqid:r}})})}messageListener(t){var a;if(typeof((a=t.data.payload)==null?void 0:a.__reqid)!="string")return;let{type:n,payload:o}=t.data,{__reqid:s,__success:r,__error:i}=o;this.pending[s]&&(r?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(i?`${n}: ${i}`:n),delete this.pending[s])}cleanResult(t){let n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}},b=class{constructor(t,n){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>{var s;return(s=o==null?void 0:o.url)!=null?s:null}),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new y(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){let n=o=>o!==null&&typeof o=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},m=[],E=class{constructor(t){this.id=A(),this.element=t,this.pending=new Promise((n,o)=>{let s=({data:c,ports:l})=>{(c==null?void 0:c.action)==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new b(l[0],c.payload),n(this.vm),i())},r=()=>{var c;(c=this.element.contentWindow)==null||c.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(u),window.removeEventListener("message",s)}window.addEventListener("message",s),r();let a=0,u=window.setInterval(()=>{if(this.vm){i();return}if(a>=20){i(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),m.forEach((c,l)=>{c.id===this.id&&m.splice(l,1)});return}a++,r()},500)}),m.push(this)}},K=e=>{var n;let t=e instanceof Element?"element":"id";return(n=m.find(o=>o[t]===e))!=null?n:null};function V(e,t){let n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function G(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function B({template:e,title:t,description:n,dependencies:o,files:s,settings:r}){if(!T.includes(e)){let c=T.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}let i=[],a=(c,l,q="")=>{i.push(V(c,typeof l=="string"?l:q))};a("project[title]",t),typeof n=="string"&&n.length>0&&a("project[description]",n),a("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(o))),r&&a("project[settings]",JSON.stringify(r)),Object.entries(s).forEach(([c,l])=>{a(`project[files][${G(c)}]`,l)});let u=document.createElement("form");return u.method="POST",u.setAttribute("style","display:none!important;"),u.append(...i),u}function z(e,t){let n=B(e);return n.action=_("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function J(e,t){let n=B(e);n.action=w("/run",t),n.target=I(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function h(e){var n;return e!=null&&e.contentWindow?((n=K(e))!=null?n:new E(e)).pending:Promise.reject("Provided element is not an iframe.")}function X(e,t){J(e,t)}function Y(e,t){let n=w(`/edit/${e}`,t),o=I(t);window.open(n,o)}function Q(e,t){let n=w(`/github/${e}`,t),o=I(t);window.open(n,o)}function Z(e,t,n){var i;let o=v(e),s=z(t,n),r=document.createElement("iframe");return S(o,r,n),(i=r.contentDocument)==null||i.write(s),h(r)}function ee(e,t,n){let o=v(e),s=document.createElement("iframe");return s.src=_(`/edit/${t}`,n),S(o,s,n),h(s)}function te(e,t,n){let o=v(e),s=document.createElement("iframe");return s.src=_(`/github/${t}`,n),S(o,s,n),h(s)}var C={connect:h,embedGithubProject:te,embedProject:Z,embedProjectId:ee,openGithubProject:Q,openProject:X,openProjectId:Y};var L="https://cdn.jsdelivr.net/npm/@ouds/web@0.0.2/dist/css/ouds-web.min.css",x="0.0";var D="https://cdn.jsdelivr.net/npm/@ouds/web@0.0.2/dist/js/ouds-web.bundle.min.js",O=`(() => {
  // ns-hugo:/Users/ju/Orange-Boosted-Bootstrap/site/assets/js/partials/snippets.js
  var snippets_default = () => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
      new oudsWeb.Tooltip(tooltip);
    });
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
      new oudsWeb.Popover(popover);
    });
    if (document.getElementById("toastPlacement")) {
      document.getElementById("selectToastPlacement").addEventListener("change", function() {
        if (!document.getElementById("toastPlacement").dataset.originalClass) {
          document.getElementById("toastPlacement").dataset.originalClass = document.getElementById("toastPlacement").className;
        }
        document.getElementById("toastPlacement").className = \`\${document.getElementById("toastPlacement").dataset.originalClass} \${this.value}\`;
      });
    }
    document.querySelectorAll(".bd-example .toast").forEach((toastNode) => {
      const toast = new oudsWeb.Toast(toastNode, {
        autohide: false
      });
      toast.show();
    });
    if (document.getElementById("liveToastBtn")) {
      document.getElementById("liveToastBtn").addEventListener("click", () => {
        oudsWeb.Toast.getOrCreateInstance(document.getElementById("liveToast")).show();
      });
    }
    function appendAlert(message, type, typeVisuallyHidden) {
      const wrapper = document.createElement("div");
      wrapper.innerHTML = [
        \`<div class="alert alert-\${type} alert-dismissible" role="alert">\`,
        '  <span class="alert-icon">',
        \`    <span class="visually-hidden">\${typeVisuallyHidden}</span>\`,
        "  </span>",
        \`  <p>\${message}</p>\`,
        '  <button type="button" class="btn-close" data-bs-dismiss="alert" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Close">',
        '    <span class="visually-hidden">Close</span>',
        "  </button>",
        "</div>"
      ].join("");
      document.getElementById("liveAlertPlaceholder").append(wrapper);
      const btnClose = wrapper.querySelector(".btn-close");
      const tooltip = new oudsWeb.Tooltip(btnClose);
      btnClose.addEventListener("click", () => {
        tooltip.hide();
      });
    }
    if (document.getElementById("liveAlertBtn")) {
      document.getElementById("liveAlertBtn").addEventListener("click", () => {
        appendAlert("Nice, you triggered this alert message!", "success", "Success");
      });
    }
    document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])').forEach((carousel) => {
      oudsWeb.Carousel.getOrCreateInstance(carousel);
    });
    document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]').forEach((checkbox) => {
      if (checkbox.id.includes("Indeterminate")) {
        checkbox.indeterminate = true;
      }
    });
    document.querySelectorAll('.bd-content [href="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });
    if (document.getElementById("exampleModal")) {
      document.getElementById("exampleModal").addEventListener("show.bs.modal", (event) => {
        const button = event.relatedTarget;
        const recipient = button.getAttribute("data-bs-whatever");
        const modalTitle = document.getElementById("exampleModal").querySelector(".modal-title");
        const modalBodyInput = document.getElementById("exampleModal").querySelector(".modal-body input");
        modalTitle.textContent = \`New message to \${recipient}\`;
        modalBodyInput.value = recipient;
      });
    }
    document.querySelectorAll(".bd-example-offcanvas .offcanvas").forEach((offcanvas) => {
      offcanvas.addEventListener("show.bs.offcanvas", (event) => {
        event.preventDefault();
      }, false);
    });
  };

  // <stdin>
  snippets_default();
})();
`;document.querySelectorAll(".btn-edit").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.closest(".bd-code-snippet"),o=n.querySelector(".bd-example"),s=o.innerHTML,r=n.querySelector(".btn-edit").getAttribute("data-sb-js-snippet"),i=Array.from(o.classList).join(" ");ne(s,r,i)})});var ne=(e,t,n)=>{let s={files:{"index.html":`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="${L}" rel="stylesheet">
  <link href="https://web.unified-design-system.orange.com/docs/${x}/assets/css/docs.css" rel="stylesheet">
  <title>OUDS Web Example</title>
  <script defer src="${D}"><\/script>
</head>
<body class="p-3 m-0 border-0 ${n}">
  <!-- Example Code -->
${e.trimStart().replace(/^/gm,"    ").replace(/^ {4}$/gm,"").trimEnd()}
  <!-- End Example Code -->
</body>
</html>
`,...t&&{"index.js":O}},title:"OUDS Web Example",description:`Official example from ${window.location.href}`,template:t?"javascript":"html",tags:["ouds-web"]};C.openProject(s,{openFile:"index.html"})};})();
/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */
