/*! For license information please see auto-LocalNavigation-LocalNavigation_1-stories.2074a496.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkboosted=self.webpackChunkboosted||[]).push([[3080],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ck:function(){return withMDXComponents},Eh:function(){return MDXContext},Iu:function(){return MDXProvider},MN:function(){return useMDXComponents}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_W:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._W},gF:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gF}});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./stories/auto/LocalNavigation/LocalNavigation_1.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LocalNavigation_1:function(){return LocalNavigation_1},__namedExportsOrder:function(){return __namedExportsOrder}});var _Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/auto/LocalNavigation/Custom-MDX-Documentation.mdx");__webpack_exports__.default={title:"Components/LocalNavigation",parameters:{docs:{page:_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__.c}}};const LocalNavigation_1=()=>'<div class="bd-example m-0 border-0 bg-dark m-0 border-0">\n<nav class="local-nav local-nav-dark" aria-label="Local navigation on dark">\n  <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNavDark" aria-expanded="false" aria-controls="collapseLocalNavDark">\n    <span class="container-xxl">Shop</span>\n  </button>\n  <div id="collapseLocalNavDark" class="container-xxl local-nav-collapse d-lg-block collapse">\n      <div class="navbar navbar-dark navbar-expand-lg">\n        <ul class="navbar-nav w-100">\n          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>\n          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>\n          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>\n          <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>\n        </ul>\n      </div>\n  </div>\n</nav>\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>';LocalNavigation_1.parameters={...LocalNavigation_1.parameters,docs:{...LocalNavigation_1.parameters?.docs,source:{originalSource:'() => `<div class="bd-example m-0 border-0 bg-dark m-0 border-0">\n<nav class="local-nav local-nav-dark" aria-label="Local navigation on dark">\n  <button class="local-nav-button collapsed d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLocalNavDark" aria-expanded="false" aria-controls="collapseLocalNavDark">\n    <span class="container-xxl">Shop</span>\n  </button>\n  <div id="collapseLocalNavDark" class="container-xxl local-nav-collapse d-lg-block collapse">\n      <div class="navbar navbar-dark navbar-expand-lg">\n        <ul class="navbar-nav w-100">\n          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Discover</span></a></li>\n          <li class="nav-item"><a class="nav-link active" href="#" aria-current="page"><span class="container-xxl">Shop</span></a></li>\n          <li class="nav-item"><a class="nav-link" href="#"><span class="container-xxl">Services</span></a></li>\n          <li class="nav-item"><a class="nav-link disabled" aria-disabled="true"><span class="container-xxl">Contact</span></a></li>\n        </ul>\n      </div>\n  </div>\n</nav>\n</div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>`',...LocalNavigation_1.parameters?.docs?.source}}};const __namedExportsOrder=["LocalNavigation_1"]},"./stories/auto/LocalNavigation/Custom-MDX-Documentation.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_ju_Orange_Boosted_Bootstrap_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-localnavigation--local-navigation-0"})})}__webpack_exports__.c=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_ju_Orange_Boosted_Bootstrap_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./node_modules/memoizerific sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);