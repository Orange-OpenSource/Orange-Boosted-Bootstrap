/*!
  * Boosted v4.5.3 (https://boosted.orange.com)
  * Copyright 2014-2020 The Boosted Authors
  * Copyright 2014-2020 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap otab.js v4.5.3 (https://boosted.orange.com)
  * Copyright 2011-2020 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Otab = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'otab';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.otab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var DEFAULT_THRESHOLD = 2;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_SHOW = 'show';
  var CLASS_NAME_ACCORDION_LAYOUT = 'accordion-layout';
  var SELECTOR_OTAB_HEADING = '.o-tab-heading';
  var SELECTOR_OTAB_CONTENT = '.o-tab-content';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Otab = /*#__PURE__*/function () {
    function Otab(element) {
      this._element = element;

      this._addAccessibility();

      if ($__default['default'](this._element).parent().find(SELECTOR_OTAB_HEADING).length > DEFAULT_THRESHOLD) {
        $__default['default'](this._element).parent().addClass(CLASS_NAME_ACCORDION_LAYOUT);
      }
    } // getters


    var _proto = Otab.prototype;

    // public
    _proto.show = function show() {
      var $element = $__default['default'](this._element);

      if ($element.next().hasClass(CLASS_NAME_SHOW)) {
        return;
      } // from parent remove all tab-content show classes


      $element.parent().find(SELECTOR_OTAB_CONTENT).removeClass(CLASS_NAME_SHOW); // remove all aria-expanded=true

      $element.parent().find('[aria-expanded="true"]').attr('aria-expanded', false); // add show class to next tab-content

      $element.next().addClass(CLASS_NAME_SHOW); // add aria-expanded=true to element

      $element.attr('aria-expanded', true);
    } // private
    ;

    _proto._addAccessibility = function _addAccessibility() {
      var $tab = $__default['default'](this._element);
      var $tabpanel = $tab.next();
      $tab.attr('id', Util__default['default'].getUID(NAME));
      $tabpanel.attr('id', Util__default['default'].getUID(NAME));
      $tab.attr({
        'aria-controls': $tabpanel.attr('id'),
        role: 'tab'
      });
      $tabpanel.attr({
        'aria-labelledby': $tab.attr('id'),
        role: 'tabpanel',
        tabindex: 0
      });

      if ($tabpanel.hasClass(CLASS_NAME_SHOW)) {
        $tab.attr('aria-expanded', true);
      } else {
        $tab.attr('aria-expanded', false);
      }
    } // static
    ;

    Otab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $__default['default'](this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Otab(this);
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

    _createClass(Otab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Otab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $__default['default'](document).on('DOMContentLoaded', function () {
    Otab._jQueryInterface.call($__default['default'](SELECTOR_OTAB_HEADING));
  }).on(EVENT_CLICK_DATA_API, SELECTOR_OTAB_HEADING, function (event) {
    event.preventDefault();

    Otab._jQueryInterface.call($__default['default'](this), CLASS_NAME_SHOW);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $__default['default'].fn[NAME] = Otab._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = Otab;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return Otab._jQueryInterface;
  };

  return Otab;

})));
//# sourceMappingURL=otab.js.map
