(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.ScrollUp = factory(global.jQuery));
}(this, (function ($) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

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
   * --------------------------------------------------------------------------
   * Boosted (v4.1.3): o-scroll-up.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var ScrollUp = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'scrollup';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.scrollup';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var SCROLLANIMATE = 500;
    var Default = {
      offset: 10,
      method: 'auto',
      target: ''
    };
    var Event = {
      SCROLL: "scroll" + EVENT_KEY,
      CLICK_SCROLL: "click" + EVENT_KEY,
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
    };
    var ClassName = {
      SCROLL_TOP: 'o-scroll-up'
    };
    var Selector = {
      SCROLL_TOP: '.o-scroll-up:not(.static)'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var ScrollUp =
    /*#__PURE__*/
    function () {
      function ScrollUp(element) {
        this._element = element;
        this._scrollElement = window;
        $$$1(window).on(Event.SCROLL, $$$1.proxy(this._process, this));
        $$$1(Selector.SCROLL_TOP).on(Event.CLICK_SCROLL, $$$1.proxy(this._backToTop, this));

        this._process();
      } // getters


      var _proto = ScrollUp.prototype;

      // public
      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        $$$1(this._scrollElement).off(EVENT_KEY);
        this._element = null;
        this._scrollElement = null;
      }; // private


      _proto._process = function _process() {
        if ($$$1(this._scrollElement).scrollTop() > Number($$$1(this._scrollElement).height())) {
          $$$1(Selector.SCROLL_TOP).show();
        } else {
          $$$1(Selector.SCROLL_TOP).hide();
        }
      };

      _proto._clear = function _clear() {
        $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
      };

      _proto._backToTop = function _backToTop() {
        if (typeof $$$1.animate === 'function') {
          $$$1('html, body').animate({
            scrollTop: 0
          }, SCROLLANIMATE);
        } else {
          $$$1('html, body').scrollTop(0);
        }
      }; // static


      ScrollUp._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          if (!data) {
            data = new ScrollUp(this);
            $$$1(this).data(DATA_KEY, data);
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
      }]);

      return ScrollUp;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(window).on(Event.LOAD_DATA_API, function () {
      var scrollUps = $$$1.makeArray($$$1(Selector.SCROLL_TOP));

      for (var i = scrollUps.length; i--;) {
        var $scrollup = $$$1(scrollUps[i]);

        ScrollUp._jQueryInterface.call($scrollup, $scrollup.data());
      }
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = ScrollUp._jQueryInterface;
    $$$1.fn[NAME].Constructor = ScrollUp;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return ScrollUp._jQueryInterface;
    };

    return ScrollUp;
  }($);

  return ScrollUp;

})));
//# sourceMappingURL=scrollup.js.map
