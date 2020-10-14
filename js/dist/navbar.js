/*!
  * Boosted v4.5.3 (https://boosted.orange.com)
  * Copyright 2014-2020 The Boosted Authors
  * Copyright 2014-2020 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap navbar.js v4.5.3 (https://boosted.orange.com)
  * Copyright 2011-2020 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Navbar = factory(global.jQuery, global.Util));
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

  var NAME = 'navbar';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.navbar';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var BREAKPOINT = 768;
  var Default = {
    sticky: false,
    trigger: ''
  };
  var DefaultType = {
    sticky: 'boolean',
    trigger: 'string'
  };
  var SELECTOR_SUPRA_BAR = '.navbar.supra';
  var SELECTOR_MEGAMENU_PANEL = '.mega-menu.panel';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Navbar = /*#__PURE__*/function () {
    function Navbar(element, config) {
      var _this = this;

      this._element = element;
      this._supraBar = element.querySelector(SELECTOR_SUPRA_BAR);
      this._config = this._getConfig(config);
      this._initialHeight = $__default['default'](this._element).outerHeight();
      this._initialSupraHeight = $__default['default'](this._supraBar).outerHeight();

      this._addAria();

      if (this._config.sticky) {
        $__default['default'](this._element).addClass('fixed-top');
        $__default['default'](SELECTOR_MEGAMENU_PANEL).addClass('sticky');
        $__default['default'](document.body).css('padding-top', this._initialHeight);
        $__default['default'](window).on('scroll', function () {
          var Scroll = $__default['default'](window).scrollTop();

          if (Scroll > 0) {
            $__default['default'](_this._element).addClass('minimized');
          } else {
            $__default['default'](_this._element).removeClass('minimized');
          }
        });
      }

      if (this._config.hideSupra) {
        $__default['default'](window).on('scroll', function () {
          if ($__default['default'](window).innerWidth() < BREAKPOINT) {
            return;
          }

          var Scroll = $__default['default'](window).scrollTop();

          if (Scroll > 0) {
            $__default['default'](SELECTOR_SUPRA_BAR).hide();
          } else {
            $__default['default'](SELECTOR_SUPRA_BAR).show();
          }
        });
      }
    } // getters


    var _proto = Navbar.prototype;

    // private
    _proto._getConfig = function _getConfig(config) {
      config = $__default['default'].extend({}, Default, config);
      Util__default['default'].typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addAria = function _addAria() {
      $__default['default'](this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true);
    } // static
    ;

    Navbar._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $__default['default'](this).data(DATA_KEY);

        var _config = _extends({}, Default, $__default['default'](this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Navbar(this, _config);
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

    _createClass(Navbar, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Navbar;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $__default['default'].fn[NAME] = Navbar._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Navbar;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Navbar._jQueryInterface;
  };

  return Navbar;

})));
//# sourceMappingURL=navbar.js.map
