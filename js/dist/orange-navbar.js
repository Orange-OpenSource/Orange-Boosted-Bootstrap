/*!
  * Boosted v5.2.3 (https://boosted.orange.com/)
  * Copyright 2015-2022 The Boosted Authors
  * Copyright 2015-2022 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/main/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap orange-navbar.js v5.2.3 (https://boosted.orange.com/)
  * Copyright 2011-2022 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/index'), require('./dom/event-handler'), require('./base-component'), require('./dom/selector-engine')) :
  typeof define === 'function' && define.amd ? define(['./util/index', './dom/event-handler', './base-component', './dom/selector-engine'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.OrangeNavbar = factory(global.Index, global.EventHandler, global.BaseComponent, global.SelectorEngine));
})(this, (function (index, EventHandler, BaseComponent, SelectorEngine) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

  /**
   * --------------------------------------------------------------------------
   * Boosted (v5.2.3): orange-navbar.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const NAME = 'orangenavbar';
  const DATA_KEY = 'bs.orangenavbar';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_SCROLL_DATA_API = `scroll${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const SELECTOR_STICKY_TOP = 'header.sticky-top';

  /**
   * Class definition
   */

  class OrangeNavbar extends BaseComponent__default.default {
    // Getters
    static get NAME() {
      return NAME;
    }

    // Static
    static enableMinimizing(el) {
      // The minimized behaviour works only if your header has .sticky-top (fixed-top will be sticky without minimizing)
      const scroll = window.scrollY;
      const headerChildren = [...el.children];
      const globalHeaderChild = headerChildren.find(element => !element.classList.contains('supra'));
      if (globalHeaderChild) {
        if (scroll > 0) {
          // Consider first element not having .supra in array is the first header
          globalHeaderChild.classList.add('header-minimized');
        } else {
          globalHeaderChild.classList.remove('header-minimized');
        }
      }
    }
    static jQueryInterface(config) {
      return this.each(function () {
        const data = OrangeNavbar.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler__default.default.on(window, EVENT_SCROLL_DATA_API, () => {
    for (const el of SelectorEngine__default.default.find(SELECTOR_STICKY_TOP)) {
      OrangeNavbar.enableMinimizing(el);
    }
  });
  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const el of SelectorEngine__default.default.find(SELECTOR_STICKY_TOP)) {
      OrangeNavbar.enableMinimizing(el);
    }
  });

  /**
   * jQuery
   */

  index.defineJQueryPlugin(OrangeNavbar);

  return OrangeNavbar;

}));
//# sourceMappingURL=orange-navbar.js.map
