/*!
  * OUDS Web v0.0.0 (https://web.unified-design-system.orange.com/)
  * Copyright 2015-2024 The OUDS Web Authors
  * Copyright 2015-2024 Orange
  * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap orange-navbar.js v0.0.0 (https://web.unified-design-system.orange.com/)
  * Copyright 2011-2024 The OUDS Web Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component.js'), require('./dom/event-handler.js'), require('./dom/selector-engine.js'), require('./util/index.js')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './dom/event-handler', './dom/selector-engine', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.OrangeNavbar = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Index));
})(this, (function (BaseComponent, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * OUDS Web orange-navbar.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
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

  class OrangeNavbar extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME;
    }

    // Static
    static enableMinimizing(el) {
      // The minimized behavior works only if your header has .sticky-top (fixed-top will be sticky without minimizing)
      if (window.scrollY > 0) {
        el.classList.add('header-minimized');
      } else {
        el.classList.remove('header-minimized');
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

  EventHandler.on(window, EVENT_SCROLL_DATA_API, () => {
    for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
      OrangeNavbar.enableMinimizing(el);
    }
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const el of SelectorEngine.find(SELECTOR_STICKY_TOP)) {
      OrangeNavbar.enableMinimizing(el);
    }
  });

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(OrangeNavbar);

  return OrangeNavbar;

}));
//# sourceMappingURL=orange-navbar.js.map
