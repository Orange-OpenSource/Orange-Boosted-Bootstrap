/*!
  * OUDS Web v1.4.0 (https://web.unified-design-system.orange.com/)
  * Copyright 2015-2026 The OUDS Web Authors
  * Copyright 2015-2026 Orange
  * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap button.js v1.4.0 (https://web.unified-design-system.orange.com/)
  * Copyright 2011-2026 The OUDS Web Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component.js'), require('./dom/event-handler.js')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './dom/event-handler'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Button = factory(global.BaseComponent, global.EventHandler));
})(this, (function (BaseComponent, EventHandler) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap button.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'button';
  const DATA_KEY = 'bs.button';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const CLASS_NAME_ACTIVE = 'active';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="button"]';
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

  /**
   * Class definition
   */

  class Button extends BaseComponent {
    // Getters
    static get NAME() {
      return NAME;
    }

    // Public
    toggle() {
      // OUDS mod: Determine current pressed state from aria-pressed attribute if present or active class as a fallback
      const ariaPressed = this._element.getAttribute('aria-pressed');
      const hasActiveClass = this._element.classList.contains(CLASS_NAME_ACTIVE);

      // Determine new pressed state
      let newPressedState;
      // eslint-disable-next-line unicorn/prefer-ternary
      if (ariaPressed === 'true' || ariaPressed === 'false') {
        // Toggle existing aria-pressed value
        newPressedState = ariaPressed !== 'true';
      } else {
        // Convert active class presence to aria-pressed state
        newPressedState = !hasActiveClass;
      }

      // Update aria-pressed attribute
      this._element.setAttribute('aria-pressed', String(newPressedState));

      // Add or remove active class
      if (newPressedState) {
        this._element.classList.add(CLASS_NAME_ACTIVE);
      } else {
        this._element.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {
    event.preventDefault();
    const button = event.target.closest(SELECTOR_DATA_TOGGLE);
    const data = Button.getOrCreateInstance(button);
    data.toggle();
  });

  return Button;

}));
//# sourceMappingURL=button.js.map
