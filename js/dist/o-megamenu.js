var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint no-magic-numbers: ["error", { "ignore": [1,2] }] */

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.6): o-megamenu.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var MegaMenu = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'megamenu';
  var VERSION = '4.0.0-alpha.6';
  var DATA_KEY = 'bs.megamenu';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Event = {};

  var ClassName = {
    TRANSITIONING: 'transitioning'
  };

  var Dimension = {};

  var Selector = {
    MEGAMENU: '.mega-menu',
    ROOT_NAV: '.mega-menu > .navbar-nav',
    MEGAMENU_PANEL_NAV: '.mega-menu-panel > .container > .navbar-nav',
    MEGAMENU_NAV: '.nav-link + .navbar-nav',
    NAV_MENU: '.navbar-nav',
    NAV_LINK: '.nav-link',
    NAV_BACK_LINK: '.nav-link.back'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var MegaMenu = function () {
    function MegaMenu(element) {
      _classCallCheck(this, MegaMenu);

      this._element = element;
      this._$goForwardLinks = $(this._element).find(Selector.MEGAMENU_NAV).prev(Selector.NAV_LINK);
      this._$goBackLinks = $(Selector.NAV_BACK_LINK);
      this._addEventListeners();
      this._addAriaAttributes(this._element);
    }

    // getters

    // public

    // private

    MegaMenu.prototype._addEventListeners = function _addEventListeners() {
      this._$goForwardLinks.on('click', this._goForward);
      this._$goBackLinks.on('click', this._goBackward);
    };

    MegaMenu.prototype._addAriaAttributes = function _addAriaAttributes(element) {
      var $subNavs = $(element).find('.nav-link + .navbar-nav');

      $subNavs.each(function () {
        var navId = Util.getUID(NAME);
        var $thisNavToggler = $(this).prev(Selector.NAV_LINK);
        var $thisNav = $(this);
        var $thisNavBackLink = $thisNav.find(Selector.NAV_BACK_LINK);

        $thisNav.attr('id', navId);
        $thisNavToggler.attr({ 'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true });
        $thisNavBackLink.attr({ 'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true });
      });
    };

    MegaMenu.prototype._goForward = function _goForward(e) {
      e.preventDefault();

      var $thisNav = $(this).closest(Selector.NAV_MENU);
      var $targetNav = $(this).next(Selector.NAV_MENU);
      var $rootNav = $(Selector.ROOT_NAV);
      var $thisNavToggler = $(this);
      var $targetNavBackLink = $targetNav.find(Selector.NAV_BACK_LINK);
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10);
      var navWidth = $rootNav.width();

      if ($rootNav.hasClass(ClassName.TRANSITIONING)) {
        return false;
      }

      // hide all nav on same level
      $thisNav.find(Selector.NAV_MENU).hide();

      // show target navbar-nav
      $targetNav.show();

      // make only visible elements focusable
      if (currentTranslatePos === 0) {
        $rootNav.find('>.nav-item .nav-link').attr('tabindex', '-1');
      }
      $thisNav.find(Selector.NAV_LINK).attr('tabindex', '-1');
      $targetNav.find(Selector.NAV_LINK).attr('tabindex', '0');

      // handle expanded state
      $thisNavToggler.attr('aria-expanded', false);

      // translate menu
      $rootNav.addClass(ClassName.TRANSITIONING);
      $rootNav.css('transform', 'translateX(' + (currentTranslatePos - navWidth) + 'px)');

      // focus on target nav first item
      $rootNav.one('transitionend', function () {
        $rootNav.removeClass(ClassName.TRANSITIONING);
        $targetNav.find(Selector.NAV_LINK).first().trigger('focus');
        $targetNavBackLink.attr('aria-expanded', true);
      });
    };

    MegaMenu.prototype._goBackward = function _goBackward(e) {
      e.preventDefault();

      var $thisNav = $(this).closest(Selector.NAV_MENU);
      var $targetNav = $thisNav.parent().closest(Selector.NAV_MENU);
      var $rootNav = $(Selector.ROOT_NAV);
      var $targetNavToggler = $targetNav.prev(Selector.NAV_LINK);
      var $thisNavBackLink = $(this);
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10);
      var navWidth = $rootNav.width();

      if ($rootNav.hasClass(ClassName.TRANSITIONING)) {
        return false;
      }

      // make only visible elements focusable
      $targetNav.find(Selector.NAV_LINK).attr('tabindex', '0');
      if (currentTranslatePos === -navWidth) {
        $rootNav.find('>.nav-item .nav-link').attr('tabindex', '0');
      }

      // handle expanded state
      $thisNavBackLink.attr('aria-expanded', false);

      // translate menu
      $rootNav.addClass(ClassName.TRANSITIONING);
      $rootNav.css('transform', 'translateX(' + (currentTranslatePos + navWidth) + 'px)');

      // focus on target nav first item
      $rootNav.one('transitionend', function () {
        $rootNav.removeClass(ClassName.TRANSITIONING);
        $targetNav.find(Selector.NAV_LINK).first().trigger('focus');
        $targetNavToggler.attr('aria-expanded', true);
        $thisNav.hide();
      });
    };

    // static

    MegaMenu._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);
        var _config = $.extend({},
        //   Default,
        $this.data(), (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object' && config);

        if (!data) {
          data = new MegaMenu(this, _config);
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

    _createClass(MegaMenu, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return MegaMenu;
  }();

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = MegaMenu._jQueryInterface;
  $.fn[NAME].Constructor = MegaMenu;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return MegaMenu._jQueryInterface;
  };

  return MegaMenu;
}(jQuery);
//# sourceMappingURL=o-megamenu.js.map
