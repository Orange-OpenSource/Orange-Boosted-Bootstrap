var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.4): o-scroll-up.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollUp = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'scrollup';
  var VERSION = '4.0.0-alpha.4';
  var DATA_KEY = 'bs.scrollup';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var SCROLLANIMATE = 500;

  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };

  var Event = {
    SCROLL: 'scroll' + EVENT_KEY,
    CLICK_SCROLL: 'click' + EVENT_KEY,
    LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
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

  var ScrollUp = function () {
    function ScrollUp(element) {
      _classCallCheck(this, ScrollUp);

      this._element = element;
      this._scrollElement = window;

      $(window).on(Event.SCROLL, $.proxy(this._process, this));
      $(Selector.SCROLL_TOP).on(Event.CLICK_SCROLL, $.proxy(this._backToTop, this));

      this._process();
    }

    // getters

    // public

    ScrollUp.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);

      this._element = null;
      this._scrollElement = null;
    };

    // private

    ScrollUp.prototype._process = function _process() {
      if ($(this._scrollElement).scrollTop() > $(this._scrollElement).height() * 1.0) {
        $(Selector.SCROLL_TOP).fadeIn();
      } else {
        $(Selector.SCROLL_TOP).fadeOut();
      }
    };

    ScrollUp.prototype._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    };

    ScrollUp.prototype._backToTop = function _backToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, SCROLLANIMATE);
    };

    // static

    ScrollUp._jQueryInterface = function _jQueryInterface() {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);
        if (!data) {
          data = new ScrollUp(this);
          $(this).data(DATA_KEY, data);
        }
      });
    };

    _createClass(ScrollUp, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }, {
      key: 'Default',
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
}(jQuery);
//# sourceMappingURL=o-scroll-up.js.map
