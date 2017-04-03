var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.6.1): o-navbar.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Navbar = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'navbar';
  var VERSION = '4.0.0-alpha.6.1';
  var DATA_KEY = 'bs.navbar';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var BREAKPOINT = 768;

  var Default = {
    sticky: false,
    trigger: ''
  };

  var DefaultType = {
    sticky: 'boolean',
    trigger: 'string'
  };

  var Selector = {
    CONFORTP_BAR: '#accessibilitytoolbarGraphic',
    SUPRA_BAR: '.navbar.supra',
    NAVBAR: '.navbar:not(.supra)',
    MEGAMENU_PANEL: '.mega-menu.panel'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Navbar = function () {
    function Navbar(element, config) {
      _classCallCheck(this, Navbar);

      this._element = element;
      this._supraBar = $(element).find(Selector.SUPRA_BAR);
      this._config = this._getConfig(config);
      this._initialHeight = $(this._element).outerHeight();
      this._initialSupraHeight = $(this._supraBar).outerHeight();

      this._addAria();

      if (this._config.sticky) {
        $(this._element).addClass('fixed-header');
        $(Selector.MEGAMENU_PANEL).addClass('sticky');
        $(document.body).css('padding-top', this._initialHeight);

        $(window).on('scroll', function () {
          var Scroll = $(window).scrollTop();
          if (Scroll > 0) {
            $(Selector.NAVBAR).addClass('minimized');
          } else {
            $(Selector.NAVBAR).removeClass('minimized');
          }
        });
      }

      if (this._config.hideSupra) {
        $(window).on('scroll', function () {
          if ($(window).innerWidth() < BREAKPOINT) {
            return;
          }

          var Scroll = $(window).scrollTop();

          if (Scroll > 0) {
            $(Selector.SUPRA_BAR).hide();
          } else {
            $(Selector.SUPRA_BAR).show();
          }
        });
      }
    }

    // getters

    // private

    Navbar.prototype._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    Navbar.prototype._addAria = function _addAria() {
      $(this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true);
    };

    // static

    Navbar._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({}, Default, $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

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
    };

    _createClass(Navbar, null, [{
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
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Navbar._jQueryInterface;
  $.fn[NAME].Constructor = Navbar;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Navbar._jQueryInterface;
  };

  return Navbar;
}(jQuery);
//# sourceMappingURL=o-navbar.js.map
