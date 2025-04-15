(()=>{var W="https://stackblitz.com",j=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],V=["project","search","ports","settings"],R=["light","dark"],K=["editor","preview"],T={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>$("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>z("showSidebar",e),sidebarView:e=>g("sidebarView",e,V),startScript:e=>m("startScript",e),terminalHeight:e=>$("terminalHeight",e),theme:e=>g("theme",e,R),view:e=>g("view",e,K),zenMode:e=>u("zenMode",e),organization:e=>`${m("orgName",e==null?void 0:e.name)}&${m("orgProvider",e==null?void 0:e.provider)}`,crossOriginIsolated:e=>u("corp",e)};function N(e={}){let t=Object.entries(e).map(([n,o])=>o!=null&&T.hasOwnProperty(n)?T[n](o):"").filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return t===!0?`${e}=1`:""}function z(e,t){return typeof t=="boolean"?`${e}=${t?"1":"0"}`:""}function $(e,t){if(typeof t=="number"&&!Number.isNaN(t)){let n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function g(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function m(e,t){return(Array.isArray(t)?t:[t]).filter(o=>typeof o=="string"&&o.trim()!=="").map(o=>`${e}=${encodeURIComponent(o)}`).join("&")}function P(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function w(e,t){return`${C(t)}${e}${N(t)}`}function v(e,t){let n={forceEmbedLayout:!0};return t&&typeof t=="object"&&Object.assign(n,t),`${C(n)}${e}${N(n)}`}function C(e={}){return(typeof e.origin=="string"?e.origin:W).replace(/\/$/,"")}function _(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),J(t,n),Q(e,t,n),e.replaceWith(t)}function S(e){if(typeof e=="string"){let t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function I(e){return e&&e.newWindow===!1?"_self":"_blank"}function J(e,t={}){let n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:"300",o=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),o?e.setAttribute("width",o):e.setAttribute("style","width:100%;")}function Q(e,t,n={}){var s,i,r;let o=(r=(i=(s=e.allow)==null?void 0:s.split(";"))==null?void 0:i.map(a=>a.trim()))!=null?r:[];n.crossOriginIsolated&&!o.includes("cross-origin-isolated")&&o.push("cross-origin-isolated"),o.length>0&&(t.allow=o.join("; "))}var y=class{constructor(t){this.pending={},this.port=t,this.port.onmessage=this.messageListener.bind(this)}request({type:t,payload:n}){return new Promise((o,s)=>{let i=P();this.pending[i]={resolve:o,reject:s},this.port.postMessage({type:t,payload:{...n,__reqid:i}})})}messageListener(t){var a;if(typeof((a=t.data.payload)==null?void 0:a.__reqid)!="string")return;let{type:n,payload:o}=t.data,{__reqid:s,__success:i,__error:r}=o;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(o)):this.pending[s].reject(r?`${n}: ${r}`:n),delete this.pending[s])}cleanResult(t){let n={...t};return delete n.__reqid,delete n.__success,delete n.__error,Object.keys(n).length?n:null}},b=class{constructor(t,n){this.editor={openFile:o=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:o}}),setCurrentFile:o=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:o}}),setTheme:o=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:o}}),setView:o=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:o}}),showSidebar:(o=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:o}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(o=>{var s;return(s=o==null?void 0:o.url)!=null?s:null}),setUrl:(o="/")=>{if(typeof o!="string"||!o.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${o}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:o}})}},this._rdc=new y(t),Object.defineProperty(this.preview,"origin",{value:typeof n.previewOrigin=="string"?n.previewOrigin:null,writable:!1})}applyFsDiff(t){let n=o=>o!==null&&typeof o=="object";if(!n(t)||!n(t.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(t.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},h=[],E=class{constructor(t){this.id=P(),this.element=t,this.pending=new Promise((n,o)=>{let s=({data:c,ports:l})=>{(c==null?void 0:c.action)==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new b(l[0],c.payload),n(this.vm),r())},i=()=>{var c;(c=this.element.contentWindow)==null||c.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(p),window.removeEventListener("message",s)}window.addEventListener("message",s),i();let a=0,p=window.setInterval(()=>{if(this.vm){r();return}if(a>=20){r(),o("Timeout: Unable to establish a connection with the StackBlitz VM"),h.forEach((c,l)=>{c.id===this.id&&h.splice(l,1)});return}a++,i()},500)}),h.push(this)}},X=e=>{var n;let t=e instanceof Element?"element":"id";return(n=h.find(o=>o[t]===e))!=null?n:null};function Y(e,t){let n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function Z(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function A({template:e,title:t,description:n,dependencies:o,files:s,settings:i}){if(!j.includes(e)){let c=j.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}let r=[],a=(c,l,U="")=>{r.push(Y(c,typeof l=="string"?l:U))};a("project[title]",t),typeof n=="string"&&n.length>0&&a("project[description]",n),a("project[template]",e,"javascript"),o&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(o))),i&&a("project[settings]",JSON.stringify(i)),Object.entries(s).forEach(([c,l])=>{a(`project[files][${Z(c)}]`,l)});let p=document.createElement("form");return p.method="POST",p.setAttribute("style","display:none!important;"),p.append(...r),p}function ee(e,t){let n=A(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${n.outerHTML}
  <script>document.getElementById('${n.id}').submit();<\/script>
</body>
</html>`}function te(e,t){let n=A(e);n.action=w("/run",t),n.target=I(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}function f(e){var n;return e!=null&&e.contentWindow?((n=X(e))!=null?n:new E(e)).pending:Promise.reject("Provided element is not an iframe.")}function ne(e,t){te(e,t)}function oe(e,t){let n=w(`/edit/${e}`,t),o=I(t);window.open(n,o)}function se(e,t){let n=w(`/github/${e}`,t),o=I(t);window.open(n,o)}function ie(e,t,n){var r;let o=S(e),s=ee(t,n),i=document.createElement("iframe");return _(o,i,n),(r=i.contentDocument)==null||r.write(s),f(i)}function re(e,t,n){let o=S(e),s=document.createElement("iframe");return s.src=v(`/edit/${t}`,n),_(o,s,n),f(s)}function ce(e,t,n){let o=S(e),s=document.createElement("iframe");return s.src=v(`/github/${t}`,n),_(o,s,n),f(s)}var B={connect:f,embedGithubProject:ce,embedProject:ie,embedProjectId:re,openGithubProject:se,openProject:ne,openProjectId:oe};var O="https://cdn.jsdelivr.net/npm/boosted@5.3.5/dist/css/boosted.min.css",L="5.3",x="https://cdn.jsdelivr.net/npm/boosted@5.3.5/dist/fonts/HelvNeue55_W1G.woff2",M="sha384-R6e0PFLMMV6HBvkQK22ecNfjOzyh89wSndiTC71MuvoaOnhIYgOAGVC0gW0kVN16",k="https://cdn.jsdelivr.net/npm/boosted@5.3.5/dist/fonts/HelvNeue75_W1G.woff2",H="sha384-ylOkwNNvSwXpWNbpEhI45ruJTXyfQbIb42IxMvSGGcndZBpZ9iAmOFSUl4/Goeqz",q="https://cdn.jsdelivr.net/npm/boosted@5.3.5/dist/css/orange-helvetica.min.css",D="sha384-A0Qk1uKfS1i83/YuU13i2nx5pk79PkIfNFOVzTcjCMPGKIDj9Lqx9lJmV7cdBVQZ";var F="https://cdn.jsdelivr.net/npm/boosted@5.3.5/dist/js/boosted.bundle.min.js",G=`(() => {
  // ns-hugo-imp:C:\\Users\\louis\\Documents\\Orange\\Orange-Boosted-Bootstrap\\site\\assets\\js\\partials\\snippets.js
  var snippets_default = () => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
      new boosted.Tooltip(tooltip);
    });
    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
      new boosted.Popover(popover);
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
      const toast = new boosted.Toast(toastNode, {
        autohide: false
      });
      toast.show();
    });
    if (document.getElementById("liveToastBtn")) {
      document.getElementById("liveToastBtn").addEventListener("click", () => {
        boosted.Toast.getOrCreateInstance(document.getElementById("liveToast")).show();
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
      const tooltip = new boosted.Tooltip(btnClose);
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
      boosted.Carousel.getOrCreateInstance(carousel);
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
`;document.querySelectorAll(".btn-edit").forEach(e=>{e.addEventListener("click",t=>{let n=t.target.closest(".bd-code-snippet"),o=n.querySelector(".bd-example"),s=o.innerHTML,i=n.querySelector(".btn-edit").getAttribute("data-sb-js-snippet"),r=Array.from(o.classList).join(" ");ae(s,i,r)})});var ae=(e,t,n)=>{let s={files:{"index.html":`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!--
    Neue Helvetica is a trademark of Monotype Imaging Inc. registered in the U.S.
    Patent and Trademark Office and may be registered in certain other jurisdictions.
    Copyright \xA9 2014 Monotype Imaging Inc. All rights reserved.
    Orange has purchased the right to use Helvetica in its websites and mobile applications.
    If you are not authorized to used it, don\u2019t include the orange-helvetica.css
    See NOTICE.txt for more information.
  -->
  <link href="${x}" rel="preload" as="font" type="font/woff2" integrity="${M}" crossorigin="anonymous">
  <link href="${k}" rel="preload" as="font" type="font/woff2" integrity="${H}" crossorigin="anonymous">
  <link href="${q}" rel="stylesheet" integrity="${D}" crossorigin="anonymous">

  <link href="${O}" rel="stylesheet">
  <link href="https://boosted.orange.com/docs/${L}/assets/css/docs.css" rel="stylesheet">
  <title>Boosted Example</title>
  <script defer src="${F}"><\/script>
</head>
<body class="p-3 m-0 border-0 ${n}">
  <!-- Example Code -->
${e.trimStart().replace(/^/gm,"    ").replace(/^ {4}$/gm,"").trimEnd()}
  <!-- End Example Code -->
</body>
</html>
`,...t&&{"index.js":G}},title:"Boosted Example",description:`Official example from ${window.location.href}`,template:t?"javascript":"html",tags:["boosted"]};B.openProject(s,{openFile:"index.html"})};})();
/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */
