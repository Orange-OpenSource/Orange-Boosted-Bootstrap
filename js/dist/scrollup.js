/*!
  * Boosted v4.5.3 (https://boosted.orange.com)
  * Copyright 2014-2020 The Boosted Authors
  * Copyright 2014-2020 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap scrollup.js v4.5.3 (https://boosted.orange.com)
  * Copyright 2011-2020 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ScrollUp = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollup';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.scrollup';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var SCROLLANIMATE = 500;
  var Default = {
    target: ''
  };
  var DefaultType = {
    target: '(string|element)'
  };
  var EVENT_SCROLL = "scroll" + EVENT_KEY;
  var EVENT_CLICK_SCROLL = "click" + EVENT_KEY;
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY + DATA_API_KEY;
  var SELECTOR_SCROLL_TOP = '.o-scroll-up:not(.static)';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollUp = /*#__PURE__*/function () {
    function ScrollUp(element, config) {
      this._element = element;
      this._scrollElement = window;
      this._config = this._getConfig(config);
      $__default['default'](window).on(EVENT_SCROLL, $__default['default'].proxy(this._process, this));
      $__default['default'](SELECTOR_SCROLL_TOP).on(EVENT_CLICK_SCROLL, $__default['default'].proxy(this._backToTop, this));
      $__default['default'](this._element).addClass('is-fixed d-none');

      this._process();
    } // getters


    var _proto = ScrollUp.prototype;

    // public
    _proto.dispose = function dispose() {
      $__default['default'].removeData(this._element, DATA_KEY);
      $__default['default'](this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
    } // private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $__default['default'](this._element).data(), config);
      Util__default['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._process = function _process() {
      $__default['default'](SELECTOR_SCROLL_TOP).toggleClass('d-none', $__default['default'](this._scrollElement).scrollTop() < Number($__default['default'](this._scrollElement).height()));
    };

    _proto._backToTop = function _backToTop() {
      // if target is defined scrollintoview
      if (this._config.target) {
        document.querySelector(this._config.target).scrollIntoView({
          behavior: 'smooth'
        });
      } else if (typeof $__default['default'].animate === 'function') {
        $__default['default']('html, body').animate({
          scrollTop: 0
        }, SCROLLANIMATE);
      } else {
        $__default['default']('html, body').scrollTop(0);
      }
    } // static
    ;

    ScrollUp._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new ScrollUp(this, _config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollUp, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return ScrollUp;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](window).on(EVENT_LOAD_DATA_API, function () {
    var scrollUps = $__default['default'].makeArray($__default['default'](SELECTOR_SCROLL_TOP));

    for (var i = scrollUps.length; i--;) {
      var $scrollup = $__default['default'](scrollUps[i]);

      ScrollUp._jQueryInterface.call($scrollup, $scrollup.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = ScrollUp._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = ScrollUp;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollUp._jQueryInterface;
  };

  return ScrollUp;

})));
//# sourceMappingURL=scrollup.js.map
