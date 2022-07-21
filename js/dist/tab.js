/*!
  * Boosted v4.6.2 (https://boosted.orange.com)
  * Copyright 2014-2021 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Copyright 2014-2021 Orange SA
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  **
  * This a fork of Bootstrap:
  * Bootstrap tab.js v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Tab = factory(global.jQuery, global.Util));
})(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * Constants
   */

  var NAME = 'tab';
  var VERSION = '4.6.2';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default["default"].fn[NAME]; // Boosted mod

  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var REGEXP_KEYDOWN = new RegExp(ARROW_LEFT_KEYCODE + "|" + ARROW_UP_KEYCODE + "|" + ARROW_RIGHT_KEYCODE + "|" + ARROW_DOWN_KEYCODE); // end mod

  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  var EVENT_HIDE = "hide" + EVENT_KEY;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY;
  var EVENT_SHOW = "show" + EVENT_KEY;
  var EVENT_SHOWN = "shown" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY + DATA_API_KEY; // Boosted mod

  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * Class definition
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;

      this._addAccessibility(); // Boosted mod

    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $__default["default"](this._element).hasClass(CLASS_NAME_ACTIVE) || $__default["default"](this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $__default["default"](this._element).closest(SELECTOR_NAV_LIST_GROUP)[0];
      var selector = Util__default["default"].getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE;
        previous = $__default["default"].makeArray($__default["default"](listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $__default["default"].Event(EVENT_HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $__default["default"].Event(EVENT_SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $__default["default"](previous).trigger(hideEvent);
      }

      $__default["default"](this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $__default["default"].Event(EVENT_HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $__default["default"].Event(EVENT_SHOWN, {
          relatedTarget: previous
        });
        $__default["default"](previous).trigger(hiddenEvent);
        $__default["default"](_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $__default["default"].removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $__default["default"](container).find(SELECTOR_ACTIVE_UL) : $__default["default"](container).children(SELECTOR_ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $__default["default"](active).hasClass(CLASS_NAME_FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      }; // Boosted mod


      $__default["default"](container).find('.nav-link:not(.dropdown-toggle)').attr({
        tabIndex: '-1',
        'aria-selected': false
      });
      $__default["default"](container).find('.tab-pane').attr({
        'aria-hidden': true,
        tabIndex: '-1'
      }); // end mod

      if (active && isTransitioning) {
        var transitionDuration = Util__default["default"].getTransitionDurationFromElement(active);
        $__default["default"](active).removeClass(CLASS_NAME_SHOW).one(Util__default["default"].TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $__default["default"](active).removeClass(CLASS_NAME_ACTIVE);
        var dropdownChild = $__default["default"](active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $__default["default"](dropdownChild).removeClass(CLASS_NAME_ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $__default["default"](element).addClass(CLASS_NAME_ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      } // Boosted mod


      $__default["default"](element).filter('.nav-link:not(.dropdown-toggle).active').attr({
        tabIndex: '0',
        'aria-selected': true
      });
      $__default["default"](element).filter('.tab-pane.active').attr({
        'aria-hidden': false,
        tabIndex: '0'
      }); // end mod

      Util__default["default"].reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE)) {
        element.classList.add(CLASS_NAME_SHOW);
      }

      if (element.parentNode && $__default["default"](element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var parent = element.parentNode;

        if (parent && parent.nodeName === 'LI') {
          parent = parent.parentNode;
        }

        if (parent && $__default["default"](parent).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
          var dropdownElement = $__default["default"](element).closest(SELECTOR_DROPDOWN)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE));
            $__default["default"](dropdownToggleList).addClass(CLASS_NAME_ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }
      }

      if (callback) {
        callback();
      }
    } // Boosted mod
    ;

    _proto._addAccessibility = function _addAccessibility() {
      var $tab = $__default["default"](this._element);
      var $tabpanel = $__default["default"]($tab.attr('href'));
      var $tablist = $tab.closest(SELECTOR_NAV_LIST_GROUP);
      var tabId = $tab.attr('id') || Util__default["default"].getUID(NAME);
      $tab.attr('id', tabId);

      if ($tabpanel) {
        $tab.attr('role', 'tab');
        $tablist.attr('role', 'tablist');
      }

      if ($tab.hasClass(CLASS_NAME_ACTIVE)) {
        $tab.attr({
          tabIndex: '0',
          'aria-selected': 'true'
        });

        if ($tab.attr('href')) {
          $tab.attr('aria-controls', $tab.attr('href').slice(1));
        }

        $tabpanel.attr({
          role: 'tabpanel',
          tabIndex: '0',
          'aria-hidden': 'false',
          'aria-labelledby': tabId
        });
      } else {
        $tab.attr({
          tabIndex: '-1',
          'aria-selected': 'false'
        });

        if ($tab.attr('href')) {
          $tab.attr('aria-controls', $tab.attr('href').slice(1));
        }

        $tabpanel.attr({
          role: 'tabpanel',
          tabIndex: '-1',
          'aria-hidden': 'true',
          'aria-labelledby': tabId
        });
      }
    } // end mod
    // Static
    // Boosted mod
    ;

    Tab._dataApiKeydownHandler = function _dataApiKeydownHandler(e) {
      var $this = $__default["default"](this);
      var Items = $this.closest('ul[role=tablist] ').find('[role=tab]:visible');
      var k = e.which || e.keyCode;
      var index = 0;
      index = Items.index(Items.filter(':focus'));

      if (k === ARROW_UP_KEYCODE || k === ARROW_LEFT_KEYCODE) {
        index--;
      }

      if (k === ARROW_RIGHT_KEYCODE || k === ARROW_DOWN_KEYCODE) {
        index++;
      }

      if (index < 0) {
        index = Items.length - 1;
      }

      if (index === Items.length) {
        index = 0;
      }

      var nextTab = Items.eq(index);

      if (nextTab.attr('role') === 'tab') {
        nextTab.tab('show').trigger('focus');
      }

      e.preventDefault();
      e.stopPropagation();
    } // end mod
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default["default"](this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Tab;
  }();
  /**
   * Data API implementation
   */


  $__default["default"](document).on(EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($__default["default"](this), 'show');
  }) // Boosted mod
  .on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    if (!REGEXP_KEYDOWN.test(event.which)) {
      return;
    }

    event.preventDefault();

    Tab._dataApiKeydownHandler.call($__default["default"](this), event);
  }).on('DOMContentLoaded', function () {
    Tab._jQueryInterface.call($__default["default"](SELECTOR_DATA_TOGGLE));
  }); // end mod

  /**
   * jQuery
   */

  $__default["default"].fn[NAME] = Tab._jQueryInterface;
  $__default["default"].fn[NAME].Constructor = Tab;

  $__default["default"].fn[NAME].noConflict = function () {
    $__default["default"].fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;

}));
//# sourceMappingURL=tab.js.map
