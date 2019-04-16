/*!
  * Boosted v4.3.1 (https://boosted.orange.com)
  * Copyright 2014-2019 The Boosted Authors
  * Copyright 2014-2019 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap otab.js v4.3.1 (https://boosted.orange.com)
  * Copyright 2011-2019 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.Otab = factory(global.jQuery, global.Util));
}(this, function ($, Util) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Util = Util && Util.hasOwnProperty('default') ? Util['default'] : Util;

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
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'otab';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.otab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var DEFAULT_THRESHOLD = 2;
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ACTIVE: 'active',
    SHOW: 'show',
    ACCORDION_LAYOUT: 'accordion-layout'
  };
  var Selector = {
    OTAB_HEADING: '.o-tab-heading',
    OTAB_CONTENT: '.o-tab-content'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Otab =
  /*#__PURE__*/
  function () {
    function Otab(element) {
      this._element = element;

      this._addAccessibility();

      if ($(this._element).parent().find(Selector.OTAB_HEADING).length > DEFAULT_THRESHOLD) {
        $(this._element).parent().addClass(ClassName.ACCORDION_LAYOUT);
      }
    } // getters


    var _proto = Otab.prototype;

    // public
    _proto.show = function show() {
      var $element = $(this._element);

      if ($element.next().hasClass(ClassName.SHOW)) {
        return;
      } // from parent remove all tab-content show classes


      $element.parent().find(Selector.OTAB_CONTENT).removeClass(ClassName.SHOW); // remove all aria-expanded=true

      $element.parent().find('[aria-expanded="true"]').attr('aria-expanded', false); // add show class to next tab-content

      $element.next().addClass(ClassName.SHOW); // add aria-expanded=true to element

      $element.attr('aria-expanded', true);
    } // private
    ;

    _proto._addAccessibility = function _addAccessibility() {
      var $tab = $(this._element);
      var $tabpanel = $tab.next();
      $tab.attr('id', Util.getUID(NAME));
      $tabpanel.attr('id', Util.getUID(NAME));
      $tab.attr({
        'aria-controls': $tabpanel.attr('id'),
        role: 'tab'
      });
      $tabpanel.attr({
        'aria-labelledby': $tab.attr('id'),
        role: 'tabpanel',
        tabindex: 0
      });

      if ($tabpanel.hasClass(ClassName.SHOW)) {
        $tab.attr('aria-expanded', true);
      } else {
        $tab.attr('aria-expanded', false);
      }
    } // static
    ;

    Otab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Otab(this);
          $this.data(DATA_KEY, data);
        } // Boosted mod


        if (/init/.test(config)) {
          return;
        } // end mod


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


  $(document).on('DOMContentLoaded', function () {
    Otab._jQueryInterface.call($(Selector.OTAB_HEADING), 'init');
  }).on(Event.CLICK_DATA_API, Selector.OTAB_HEADING, function (event) {
    event.preventDefault();

    Otab._jQueryInterface.call($(this), ClassName.SHOW);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Otab._jQueryInterface;
  $.fn[NAME].Constructor = Otab;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Otab._jQueryInterface;
  };

  return Otab;

}));
//# sourceMappingURL=otab.js.map
