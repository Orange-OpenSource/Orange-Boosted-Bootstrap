(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', './util'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.Util);
    global.navbar = mod.exports;
  }
})(this, function (exports, module, _util) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Util = _interopRequireDefault(_util);

  /**
   * --------------------------------------------------------------------------
   * Boosted (v4.0.0-alpha.2): navbar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Navbar = (function ($) {

    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var NAME = 'navbar';
    var VERSION = '4.0.0-alpha.2';
    var DATA_KEY = 'bs.navbar';
    var JQUERY_NO_CONFLICT = $.fn[NAME];

    var Default = {
      sticky: false,
      trigger: ''
    };

    var DefaultType = {
      sticky: 'boolean',
      trigger: 'string'
    };

    var Dimension = {
      MEDIA_BP_SM: 544
    };

    var Event = {
      PAGE_SCROLL: 'scroll'
    };

    var Selector = {
      CONFORTP_BAR: '#accessibilitytoolbarGraphic',
      SUPRA_BAR: '.navbar.supra',
      MEGAMENU_PANEL: '.mega-menu.panel'
    };

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Navbar = (function () {
      function Navbar(element, config) {
        _classCallCheck(this, Navbar);

        this._element = element;
        this._supraBar = $(element).find(Selector.SUPRA_BAR);
        this._config = this._getConfig(config);
        this._initialHeight = $(this._element).outerHeight();
        this._initialSupraHeight = $(this._supraBar).outerHeight();
        this._triggerElm = $(this._config.trigger)[0];
        this._throttleTimer = 0;

        this._addAria();

        if (this._config.sticky) {
          $(this._element).addClass('fixed-header');
          $(Selector.MEGAMENU_PANEL).addClass('sticky');
          $(document.body).css('padding-top', this._initialHeight);
          this._addEventListeners();
        }
      }

      /**
       * ------------------------------------------------------------------------
       * jQuery
       * ------------------------------------------------------------------------
       */

      // getters

      _createClass(Navbar, [{
        key: '_getConfig',

        // private

        value: function _getConfig(config) {
          config = $.extend({}, Default, config);
          _Util['default'].typeCheckConfig(NAME, config, DefaultType);
          return config;
        }
      }, {
        key: '_isElementInViewport',
        value: function _isElementInViewport(el, topOffset) {
          var rect = el.getBoundingClientRect();

          if (!topOffset) {
            topOffset = 0;
          }

          return rect.bottom > topOffset && rect.right > 0 && rect.left < (window.innerWidth || document.documentElement.clientWidth) && rect.top < (window.innerHeight || document.documentElement.clientHeight);
        }
      }, {
        key: '_scrollHandler',
        value: function _scrollHandler() {
          if (this._throttleTimer) {
            window.clearTimeout(this._throttleTimer);
          }

          this._throttleTimer = window.setTimeout(this._managePageScroll.bind(this), 100);
        }
      }, {
        key: '_managePageScroll',
        value: function _managePageScroll() {
          if (this._isElementInViewport(this._triggerElm, 0)) {
            $(Selector.SUPRA_BAR).show();
            $(document.body).css('padding-top', this._initialHeight);
          } else {
            $(Selector.SUPRA_BAR).hide();
            $(document.body).css('padding-top', this._initialHeight - this._initialSupraHeight);
          }
        }
      }, {
        key: '_addEventListeners',
        value: function _addEventListeners() {
          if (window.innerWidth >= Dimension.MEDIA_BP_SM) {
            window.addEventListener(Event.PAGE_SCROLL, this._scrollHandler.bind(this));
          }
        }
      }, {
        key: '_addAria',
        value: function _addAria() {
          $(this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true);
        }

        // static

      }], [{
        key: '_jQueryInterface',
        value: function _jQueryInterface(config) {
          return this.each(function () {
            var $this = $(this);
            var data = $this.data(DATA_KEY);
            var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

            if (!data) {
              data = new Navbar(this, _config);
              $this.data(DATA_KEY, data);
            }

            if (typeof config === 'string') {
              if (data[config] === undefined) {
                throw new Error('No method named "' + config + '"');
              }
              data[config]();
            }
          });
        }
      }, {
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

      return Navbar;
    })();

    $.fn[NAME] = Navbar._jQueryInterface;
    $.fn[NAME].Constructor = Navbar;
    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Navbar._jQueryInterface;
    };

    return Navbar;
  })(jQuery);

  module.exports = Navbar;
});
