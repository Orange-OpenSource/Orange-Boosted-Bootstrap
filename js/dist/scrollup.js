/*!
  * Boosted v4.4.0 (https://boosted.orange.com)
  * Copyright 2014-2019 The Boosted Authors
  * Copyright 2014-2019 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap scrollup.js v4.4.0 (https://boosted.orange.com)
  * Copyright 2011-2019 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = global || self, global.ScrollUp = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollup';
  var VERSION = '4.4.0';
  var DATA_KEY = 'bs.scrollup';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SCROLLANIMATE = 500;
  var Default = {
    target: ''
  };
  var DefaultType = {
    target: '(string|element)'
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
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollUp =
  /*#__PURE__*/
  function () {
    function ScrollUp(element, config) {
      this._element = element;
      this._scrollElement = window;
      this._config = this._getConfig(config);
      $(window).on(Event.SCROLL, $.proxy(this._process, this));
      $(Selector.SCROLL_TOP).on(Event.CLICK_SCROLL, $.proxy(this._backToTop, this));
      $(this._element).addClass('is-fixed d-none');

      this._process();
    } // getters


    var _proto = ScrollUp.prototype;

    // public
    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
    } // private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2({}, this.constructor.Default, {}, $(this._element).data(), {}, config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._process = function _process() {
      $(Selector.SCROLL_TOP).toggleClass('d-none', $(this._scrollElement).scrollTop() < Number($(this._scrollElement).height()));
    };

    _proto._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    _proto._backToTop = function _backToTop() {
      // if target is defined scrollintoview
      if (this._config.target) {
        document.querySelector(this._config.target).scrollIntoView({
          behavior: 'smooth'
        });
      } else if (typeof $.animate === 'function') {
        $('html, body').animate({
          scrollTop: 0
        }, SCROLLANIMATE);
      } else {
        $('html, body').scrollTop(0);
      } // scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    } // static
    ;

    ScrollUp._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new ScrollUp(this, _config);
          $(this).data(DATA_KEY, data);
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


  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollUps = $.makeArray($(Selector.SCROLL_TOP));

    for (var i = scrollUps.length; i--;) {
      var $scrollup = $(scrollUps[i]);

      ScrollUp._jQueryInterface.call($scrollup, $scrollup.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollUp._jQueryInterface;
  $.fn[NAME].Constructor = ScrollUp;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollUp._jQueryInterface;
  };

  return ScrollUp;

})));
//# sourceMappingURL=scrollup.js.map
