/*! For license information please see auto-Tags-Tags_1-stories.091fbca4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkboosted=self.webpackChunkboosted||[]).push([[6862],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Ck:function(){return withMDXComponents},Eh:function(){return MDXContext},Iu:function(){return MDXProvider},MN:function(){return useMDXComponents}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{_W:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__._W},gF:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gF}});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./stories/auto/Tags/Tags_1.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tags_1:function(){return Tags_1},__namedExportsOrder:function(){return __namedExportsOrder}});var _Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./stories/auto/Tags/Custom-MDX-Documentation.mdx");__webpack_exports__.default={title:"Components/Tags",parameters:{docs:{page:_Custom_MDX_Documentation_mdx__WEBPACK_IMPORTED_MODULE_0__.c}}};const Tags_1=()=>'<div class="bd-example m-0 border-0 m-0 border-0">\n    \n<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">\n  <li>\n    <input type="checkbox" class="btn-check" id="btncheck-mobile" autocomplete="off">\n    <label class="tag" for="btncheck-mobile"><span class="visually-hidden">Filter by</span>Mobile</label>\n  </li>\n  <li>\n    <input type="checkbox" class="btn-check" id="btncheck-tv" autocomplete="off" checked="">\n    <label class="tag" for="btncheck-tv">\n      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">\n        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>\n      </svg>\n      <span class="visually-hidden">Filter by</span>TV\n    </label>\n  </li>\n</ul>\n\n  </div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>';Tags_1.parameters={...Tags_1.parameters,docs:{...Tags_1.parameters?.docs,source:{originalSource:'() => `<div class="bd-example m-0 border-0 m-0 border-0">\n    \n<ul class="list-unstyled d-flex gap-2 flex-wrap m-0">\n  <li>\n    <input type="checkbox" class="btn-check" id="btncheck-mobile" autocomplete="off">\n    <label class="tag" for="btncheck-mobile"><span class="visually-hidden">Filter by</span>Mobile</label>\n  </li>\n  <li>\n    <input type="checkbox" class="btn-check" id="btncheck-tv" autocomplete="off" checked="">\n    <label class="tag" for="btncheck-tv">\n      <svg width="1.5rem" height="1.5rem" viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">\n        <path fill="currentColor" d="M75,200V720H225v80H775V720H925V200H75ZM500,755a30,30,0,1,1,30-30A30,30,0,0,1,500,755Zm365-95H135V260H865V660Z"></path>\n      </svg>\n      <span class="visually-hidden">Filter by</span>TV\n    </label>\n  </li>\n</ul>\n\n  </div>\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n<\/script>`',...Tags_1.parameters?.docs?.source}}};const __namedExportsOrder=["Tags_1"]},"./stories/auto/Tags/Custom-MDX-Documentation.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_ju_Orange_Boosted_Bootstrap_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-0"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-1"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-2"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-3"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-4"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-5"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.gF,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__._W,{id:"components-tags--tags-6"})})]})}__webpack_exports__.c=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_ju_Orange_Boosted_Bootstrap_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.MN)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./node_modules/memoizerific sync recursive":function(module){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);