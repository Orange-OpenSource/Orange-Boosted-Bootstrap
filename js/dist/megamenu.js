/*!
  * Boosted v4.5.3 (https://boosted.orange.com)
  * Copyright 2014-2020 The Boosted Authors
  * Copyright 2014-2020 Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap megamenu.js v4.5.3 (https://boosted.orange.com)
  * Copyright 2011-2020 The Boosted Authors (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MegaMenu = factory(global.jQuery, global.Util));
}(this, (function ($, Util) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var $__default = /*#__PURE__*/_interopDefaultLegacy($);
  var Util__default = /*#__PURE__*/_interopDefaultLegacy(Util);

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  /* eslint no-magic-numbers: ["error", { "ignore": [-100,-1,1,2,100] }] */

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'megamenu';
  var VERSION = '4.5.3';
  var DATA_KEY = 'bs.megamenu';
  var JQUERY_NO_CONFLICT = $__default['default'].fn[NAME];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var TIMEOUT = 1000; // Timeout before focusing first element

  var SPLITLENGHT = 4;
  var CLASSLENGTH = 'navbar-expand-'.length;
  var BreakPoints = {
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1440
  };
  var CLASS_NAME_TRANSITIONING = 'transitioning';
  var CLASS_NAME_ACTIVE = 'active';
  var SELECTOR_MEGAMENU = '.mega-menu';
  var SELECTOR_PARENT = '.navbar';
  var SELECTOR_ROOT_NAV = '.mega-menu > .navbar-nav';
  var SELECTOR_MEGAMENU_PANEL = '.mega-menu-panel';
  var SELECTOR_MEGAMENU_NAV = '.nav-link + .navbar-nav';
  var SELECTOR_NAV_MENU = '.navbar-nav';
  var SELECTOR_NAV_ITEM = '.nav-item';
  var SELECTOR_NAV_LINK = '.nav-link';
  var SELECTOR_NAV_LINK_COLLAPSE = '.nav-link[data-toggle=collapse]';
  var SELECTOR_NAV_LINK_BACK = '.nav-link.back';
  var SELECTOR_NAV_LINK_EXPANDED = '.nav-link[aria-expanded=true]';
  var SELECTOR_CURRENT = '.nav-link[aria-current="page"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var MegaMenu = /*#__PURE__*/function () {
    function MegaMenu(element, config) {
      var _this = this;

      this._element = element;
      this._parent = $__default['default'](this._element).parents(SELECTOR_PARENT);
      this._$parentNavbarClasses = this._parent.attr('class'); // default if no class navbar-expand-* navbar is always mobile

      this._$mediaQuery = window.matchMedia('(min-width: 0px)');
      this._$isRTL = document.dir === 'rtl' ? -1 : 1;

      if (typeof this._$parentNavbarClasses !== 'undefined' && this._$parentNavbarClasses.indexOf('navbar-expand-') !== -1) {
        if (this._parent.hasClass('navbar-expand-xxl')) {
          this._$breakpoint = 'xxl';
        } else {
          this._$breakpointIndex = this._$parentNavbarClasses.indexOf('navbar-expand-') + CLASSLENGTH;
          this._$breakpoint = this._$parentNavbarClasses.slice(this._$breakpointIndex, this._$breakpointIndex + 2);
        }

        this._$mediaQuery = window.matchMedia("(max-width: " + BreakPoints[this._$breakpoint] + "px)");
      }

      this._$navLinks = $__default['default'](this._element).find(SELECTOR_NAV_LINK);
      this._$goForwardLinks = $__default['default'](this._element).find(SELECTOR_MEGAMENU_NAV).prev(SELECTOR_NAV_LINK);
      this._$goBackLinks = $__default['default'](this._element).find(SELECTOR_NAV_LINK_BACK);
      this._$topCollapseMenus = $__default['default'](this._element).find(SELECTOR_MEGAMENU_PANEL);
      this._$navLinkCollapses = $__default['default'](this._element).find(SELECTOR_NAV_LINK_COLLAPSE);
      this._config = config;

      if (typeof this._config.noFocus === 'undefined') {
        this._config.noFocus = false;
      }

      this._addEventListeners();

      if (this._$mediaQuery.matches) {
        this._addAriaAttributes(this._element);
      }

      this.goTo = this._initPosition;
      window.addEventListener('resize', function () {
        if (_this._$mediaQuery.matches) {
          _this._addAriaAttributes(_this._element);
        } else {
          _this._removeAriaAttributes(_this._element);

          $__default['default'](_this._element).find(SELECTOR_NAV_MENU).first().attr('style', null);
          $__default['default'](_this._element).find(SELECTOR_NAV_MENU).show();
          $__default['default'](_this._element).height('auto');
        }
      });
    } // getters


    var _proto = MegaMenu.prototype;

    // public
    // private
    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      this._$goForwardLinks.on('click', function (event) {
        return _this2._goForward(event);
      });

      this._$goBackLinks.on('click', function (event) {
        return _this2._goBackward(event);
      });

      this._$navLinks.on('keydown', function (event) {
        return _this2._manageKeyDown(event);
      });

      if (!this._config.noFocus) {
        this._$topCollapseMenus.on('shown.bs.collapse', this._collapseFocus);
      }

      $__default['default'](this._element).on('hidden.bs.collapse', function (event) {
        return _this2._handleCollapseToggle(event);
      });

      this._$navLinkCollapses.on('click', function (event) {
        return _this2._handleCollapseToggle(event);
      });
    };

    _proto._addAriaAttributes = function _addAriaAttributes(element) {
      var $subNavs = $__default['default'](element).find(SELECTOR_MEGAMENU_NAV);
      var $parents = $__default['default'](element).find(SELECTOR_CURRENT).parents(SELECTOR_NAV_ITEM);
      $__default['default'](element).attr('role', 'application');
      $__default['default'](element).find('> .navbar-nav').attr('role', 'menu');
      $__default['default'](element).find(SELECTOR_MEGAMENU_PANEL).attr('role', 'menu');
      $__default['default'](element).find('.nav-link[data-toggle=collapse]').attr('role', 'menuitem');
      $__default['default'](element).find(SELECTOR_NAV_LINK_BACK).attr('aria-hidden', 'true');
      $__default['default'](element).find(SELECTOR_NAV_ITEM).attr('role', 'presentation');
      $parents.each(function () {
        $__default['default'](this).find(SELECTOR_NAV_LINK).first().attr('aria-current', 'true');
      });
      $subNavs.each(function () {
        var navId = Util__default['default'].getUID(NAME);
        var $thisNavToggler = $__default['default'](this).prev(SELECTOR_NAV_LINK);
        var $thisNav = $__default['default'](this);
        var $thisNavBackLink = $thisNav.find(SELECTOR_NAV_LINK_BACK);
        $thisNav.attr({
          id: navId,
          role: 'menu'
        });
        $thisNavToggler.attr({
          role: 'menuitem',
          'aria-controls': navId,
          'aria-expanded': false,
          'aria-haspopup': true
        });
        $thisNavBackLink.attr({
          role: 'menuitem',
          'aria-controls': navId
        });
      });
    };

    _proto._removeAriaAttributes = function _removeAriaAttributes(element) {
      var $subNavs = $__default['default'](element).find(SELECTOR_MEGAMENU_NAV);
      $__default['default'](element).attr('role', null);
      $__default['default'](element).find('> .navbar-nav').attr('role', null);
      $__default['default'](element).find(SELECTOR_MEGAMENU_PANEL).attr('role', null);
      $__default['default'](element).find('.nav-link[data-toggle=collapse]').attr('role', null);
      $__default['default'](element).find(SELECTOR_NAV_LINK).attr({
        'aria-hidden': null,
        tabindex: null
      });
      $__default['default'](element).find(SELECTOR_NAV_ITEM).attr('role', null);
      $__default['default'](element).find(SELECTOR_NAV_MENU).attr('style', null);
      $subNavs.each(function () {
        var $thisNavToggler = $__default['default'](this).prev(SELECTOR_NAV_LINK);
        var $thisNav = $__default['default'](this);
        var $thisNavBackLink = $thisNav.find(SELECTOR_NAV_LINK_BACK);
        $thisNav.attr('role', null);
        $thisNavToggler.attr({
          role: null,
          'aria-controls': null,
          'aria-expanded': null,
          'aria-haspopup': null
        });
        $thisNavBackLink.attr({
          role: null,
          'aria-controls': null
        });
      });
    };

    _proto._initPosition = function _initPosition(target) {
      var _this3 = this;

      if (!$__default['default'](target).length) {
        return;
      }

      var $target = $__default['default'](target).first();
      var position = $target.parents().index(this._element);
      var rootPosition = $__default['default']('.mega-menu-panel .nav-link').first().parents().index($__default['default']('.mega-menu')); // @TODO WTF RTL?

      var translatePercentage = -(position - rootPosition) * 100 / 2;
      var $thisNav = $target.closest(SELECTOR_NAV_MENU);
      var $rootNav = $target.closest(SELECTOR_ROOT_NAV);
      $rootNav.addClass(CLASS_NAME_TRANSITIONING);

      this._$navLinkCollapses.removeClass(CLASS_NAME_ACTIVE); // open collapse


      if ($target.attr('data-toggle') === 'collapse') {
        $target.siblings(SELECTOR_MEGAMENU_PANEL).collapse('show');
        $target.addClass(CLASS_NAME_ACTIVE);

        this._$topCollapseMenus.not($target.siblings(SELECTOR_MEGAMENU_PANEL)).collapse('hide');

        $__default['default'](this._element).height('auto');
        $rootNav.css('transform', 'translateX(0%)');
      } else {
        $target.closest(SELECTOR_MEGAMENU_PANEL).collapse('show');
        $target.closest(SELECTOR_NAV_LINK_COLLAPSE).addClass(CLASS_NAME_ACTIVE);

        this._$topCollapseMenus.not($target.closest(SELECTOR_MEGAMENU_PANEL)).collapse('hide');

        if (this._$mediaQuery.matches) {
          // show menu and hide other
          $target.parents(SELECTOR_NAV_MENU).show(); // set aria on parent links

          $target.parents(SELECTOR_NAV_ITEM).find('> .nav-link').not($target).attr({
            tabindex: -1,
            'aria-hidden': true,
            'aria-expanded': true
          }); // translate to pos

          $rootNav.css('transform', "translateX(" + translatePercentage * this._$isRTL + "%)");

          if (translatePercentage) {
            // adapt main collapse height to target height
            $__default['default'](this._element).height($thisNav.height());
          } else {
            $__default['default'](this._element).height('auto');
          }
        }
      } // set focus on target link


      setTimeout(function () {
        if (!_this3._config.noFocus) {
          // set focus on target link
          $target.trigger('focus');
        }

        $rootNav.removeClass(CLASS_NAME_TRANSITIONING);
      }, TIMEOUT);
    };

    _proto._manageKeyDown = function _manageKeyDown(event) {
      var $thisTarget = $__default['default'](event.target); // test key code

      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      } // proceed according to key code


      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          this._goBackward(event);

          break;

        case ARROW_RIGHT_KEYCODE:
          this._goForward(event);

          break;

        case ARROW_UP_KEYCODE:
          // focus prev nav link
          $thisTarget.parent().prev().find('>.nav-link').not(SELECTOR_NAV_LINK_BACK).trigger('focus');
          break;

        case ARROW_DOWN_KEYCODE:
          // focus next nav link
          $thisTarget.parent().next().find('>.nav-link').trigger('focus');
          break;
      }
    };

    _proto._collapseFocus = function _collapseFocus() {
      $__default['default'](this).find(SELECTOR_NAV_LINK).not(SELECTOR_NAV_LINK_BACK).first().trigger('focus');
    };

    _proto._handleCollapseToggle = function _handleCollapseToggle(event) {
      var $this = $__default['default'](event.target);
      var $thisCollapse = $__default['default']($this.attr('href'));

      if ($this.is($__default['default'](this._element))) {
        $this.children(SELECTOR_NAV_MENU).css('transform', 'translateX(0%)');
        $this.height('auto');
        $this.find(SELECTOR_NAV_LINK_EXPANDED).attr({
          'aria-expanded': false,
          'aria-hidden': null,
          tabindex: null
        });
        $this.find(SELECTOR_NAV_LINK_EXPANDED).next(SELECTOR_NAV_MENU).hide();
      } else {
        $this.toggleClass(CLASS_NAME_ACTIVE);
      }

      this._$navLinkCollapses.not($this).removeClass(CLASS_NAME_ACTIVE);

      this._$topCollapseMenus.not($thisCollapse).removeClass(CLASS_NAME_ACTIVE).collapse('hide');
    };

    _proto._goForward = function _goForward(event) {
      if (!this._$mediaQuery.matches) {
        return false;
      }

      event.preventDefault();
      var $this = $__default['default'](event.target);
      var $thisNav = $this.closest(SELECTOR_NAV_MENU);
      var $targetNav = $this.next(SELECTOR_NAV_MENU);
      var $rootNav = $this.closest(SELECTOR_ROOT_NAV);
      var $thisNavToggler = $this;
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10);
      var navWidth = $rootNav.width(); // @TODO WTF RTL?

      var currentTranslatePercentage = 100 * currentTranslatePos / navWidth;

      if (!$this.next(SELECTOR_NAV_MENU).length || $rootNav.hasClass(CLASS_NAME_TRANSITIONING)) {
        return false;
      }

      $rootNav.addClass(CLASS_NAME_TRANSITIONING); // hide all nav on same level

      $thisNav.find(SELECTOR_NAV_MENU).hide(); // show target navbar-nav

      $targetNav.show(); // adapt main collapse height to target height

      $__default['default'](SELECTOR_MEGAMENU).height($targetNav.height()); // make only visible elements focusable

      if (!currentTranslatePercentage) {
        $rootNav.find('>.nav-item .nav-link').attr({
          tabindex: -1,
          'aria-hidden': true
        });
      }

      $thisNav.find(SELECTOR_NAV_LINK).attr({
        tabindex: -1,
        'aria-hidden': true
      });
      $targetNav.find(SELECTOR_NAV_LINK).attr({
        tabindex: 0,
        'aria-hidden': false
      }); // translate menu
      // @TODO WTF RTL?

      $rootNav.css('transform', "translateX(" + (currentTranslatePercentage - 100 * this._$isRTL) + "%)"); // focus on target nav first item

      $rootNav.one('transitionend', function () {
        $thisNavToggler.attr('aria-expanded', true);
        $targetNav.find(SELECTOR_NAV_LINK).not(SELECTOR_NAV_LINK_BACK).first().trigger('focus');
        $rootNav.removeClass(CLASS_NAME_TRANSITIONING);
      });
      return true;
    };

    _proto._goBackward = function _goBackward(event) {
      if (!this._$mediaQuery.matches) {
        return false;
      }

      event.preventDefault();
      var $this = $__default['default'](event.target);
      var $thisNav = $this.closest(SELECTOR_NAV_MENU);
      var $targetNav = $thisNav.parent().closest(SELECTOR_NAV_MENU);
      var $rootNav = $this.closest(SELECTOR_ROOT_NAV);
      var $targetNavToggler = $targetNav.find(SELECTOR_NAV_LINK_EXPANDED);
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10);
      var navWidth = $rootNav.width(); // @TODO WTF RTL?

      var currentTranslatePercentage = 100 * currentTranslatePos / navWidth;

      if (!currentTranslatePercentage || $rootNav.hasClass(CLASS_NAME_TRANSITIONING)) {
        return false;
      }

      $rootNav.addClass(CLASS_NAME_TRANSITIONING); // reset main collapse height

      $__default['default'](SELECTOR_MEGAMENU).height('auto'); // make only visible elements focusable

      $targetNav.find(SELECTOR_NAV_LINK).attr({
        tabindex: 0,
        'aria-hidden': false
      }); // @TODO WTF RTL?

      if (currentTranslatePercentage === -100) {
        $rootNav.find('>.nav-item .nav-link').attr({
          tabindex: 0,
          'aria-hidden': false
        });
      } // translate menu
      // @TODO WTF RTL?


      $rootNav.css('transform', "translateX(" + (currentTranslatePercentage + 100 * this._$isRTL) + "%)"); // focus on target nav first item

      $rootNav.one('transitionend', function () {
        $targetNavToggler.attr('aria-expanded', false);
        $targetNavToggler.trigger('focus');
        $thisNav.hide();
        $rootNav.removeClass(CLASS_NAME_TRANSITIONING);
      });
      return true;
    } // static
    ;

    MegaMenu._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        if (!$__default['default'](this).is(SELECTOR_MEGAMENU)) {
          throw new TypeError('Element is not a mega menu');
        }

        if (!config) {
          config = {};
        } else if (config.noFocus && typeof config.noFocus !== 'boolean') {
          // param = true
          throw new TypeError('no-focus parameter must be boolean');
        }

        var data = $__default['default'](this).data(DATA_KEY);

        if (!data) {
          data = new MegaMenu(this, config);
          $__default['default'](this).data(DATA_KEY, data);
        }

        if (config.target) {
          if (typeof config.target !== 'string' || !/^[#.].*/.test(config.target)) {
            throw new TypeError("Selector \"" + config.target + "\" is not supported");
          }

          data.goTo(config.target);
        }
      });
    };

    _createClass(MegaMenu, null, [{
      key: "VERSION",
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


  $__default['default'].fn[NAME] = MegaMenu._jQueryInterface;
  $__default['default'].fn[NAME].Constructor = MegaMenu;

  $__default['default'].fn[NAME].noConflict = function () {
    $__default['default'].fn[NAME] = JQUERY_NO_CONFLICT;
    return MegaMenu._jQueryInterface;
  };

  return MegaMenu;

})));
//# sourceMappingURL=megamenu.js.map
