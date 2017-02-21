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
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key
  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key
  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key
  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key
  // const POS_MODULO = 5;

  var Event = {};

  var ClassName = {
    TRANSITIONING: 'transitioning'
  };

  var Dimension = {};

  var Selector = {
    MEGAMENU: '.mega-menu',
    ROOT_NAV: '.mega-menu > .navbar-nav',
    MEGAMENU_PANEL: '.mega-menu-panel',
    MEGAMENU_NAV: '.nav-link + .navbar-nav',
    NAV_MENU: '.navbar-nav',
    NAV_ITEM: '.nav-item',
    NAV_LINK: '.nav-link',
    NAV_LINK_COLLAPSE: '.nav-link[data-toggle=collapse]',
    NAV_LINK_BACK: '.nav-link.back',
    NAV_LINK_EXPANDED: '.nav-link[aria-expanded=true]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var MegaMenu = function () {
    function MegaMenu(element, config) {
      _classCallCheck(this, MegaMenu);

      this._element = element;
      this._config = config;
      this._$navLinks = $(this._element).find(Selector.NAV_LINK);
      this._$goForwardLinks = $(this._element).find(Selector.MEGAMENU_NAV).prev(Selector.NAV_LINK);
      this._$goBackLinks = $(this._element).find(Selector.NAV_LINK_BACK);
      this._$topCollapseMenus = $(this._element).find(Selector.MEGAMENU_PANEL);
      this._$navLinkCollapses = $(this._element).find(Selector.NAV_LINK_COLLAPSE);
      this._addEventListeners();
      this._addAriaAttributes(this._element);
      this.goTo = this._initPosition;
    }

    // getters

    // public

    // private

    MegaMenu.prototype._addEventListeners = function _addEventListeners() {
      var _this = this;

      this._$goForwardLinks.on('click', function (event) {
        return _this._goForward(event);
      });
      this._$goBackLinks.on('click', function (event) {
        return _this._goBackward(event);
      });
      this._$navLinks.on('keydown', function (event) {
        return _this._manageKeyDown(event);
      });
      this._$topCollapseMenus.on('shown.bs.collapse', this._collapseFocus);
      this._$navLinkCollapses.on('click', function (event) {
        return _this._handleCollapseToggle(event);
      });
    };

    MegaMenu.prototype._addAriaAttributes = function _addAriaAttributes(element) {
      var $subNavs = $(element).find('.nav-link + .navbar-nav');

      $(element).attr('role', 'application');
      $(element).find('> .navbar-nav').attr('role', 'menu');
      $(element).find(Selector.MEGAMENU_PANEL).attr('role', 'menu');
      $(element).find('.nav-link[data-toggle=collapse]').attr('role', 'menuitem');
      $(element).find(Selector.NAV_LINK_BACK).attr({ 'aria-hidden': true });
      $(element).find(Selector.NAV_ITEM).attr('role', 'presentation');

      $subNavs.each(function () {
        var navId = Util.getUID(NAME);
        var $thisNavToggler = $(this).prev(Selector.NAV_LINK);
        var $thisNav = $(this);
        var $thisNavBackLink = $thisNav.find(Selector.NAV_LINK_BACK);
        var $topMenu = $(this).closest(Selector.NAV_MENU).parent().closest(Selector.NAV_MENU).prev(Selector.NAV_LINK);
        var goBackLabel = 'go back to ' + $topMenu.text() + ' menu';

        if (!$topMenu.length) {
          goBackLabel = 'go back to ' + $(this).closest(Selector.MEGAMENU_PANEL).prev(Selector.NAV_LINK).text() + ' menu';
        }

        $thisNav.attr({ 'id': navId, 'role': 'menu' });
        $thisNavToggler.attr({ 'role': 'menuitem', 'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true });
        $thisNavBackLink.attr({ 'role': 'menuitem', 'aria-controls': navId, 'aria-label': goBackLabel });
      });
    };

    MegaMenu.prototype._initPosition = function _initPosition(target) {
      if ($(target).length === 0) {
        return;
      }

      var $target = $(target).first();
      var position = $target.parents().index(this._element);
      var rootPosition = $('.mega-menu-panel .nav-link').first().parents().index($('.mega-menu'));
      var translatePercentage = -(position - rootPosition) * 100 / 2;
      var $thisNav = $target.closest(Selector.NAV_MENU);
      var $rootNav = $(Selector.ROOT_NAV);

      $rootNav.addClass(ClassName.TRANSITIONING);

      // open collapse
      $target.closest(Selector.MEGAMENU_PANEL).collapse('show');

      // show menu and hide other
      $target.parents(Selector.NAV_MENU).show();

      // set aria on parent links
      $target.parents(Selector.NAV_ITEM).find('> .nav-link').not($target).attr({ 'tabindex': -1, 'aria-hidden': true, 'aria-expanded': true });

      // translate to pos
      $rootNav.css('transform', 'translateX(' + translatePercentage + '%)');

      // adapt main collapse height to target height
      $(this._element).height($thisNav.height());

      //set focus on target link
      setTimeout(function () {
        //set focus on target link
        $target.trigger('focus');

        $rootNav.removeClass(ClassName.TRANSITIONING);
      }, 1000);
    };

    MegaMenu.prototype._manageKeyDown = function _manageKeyDown(event) {
      var $thisTarget = $(event.target);

      // test key code
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      // proceed according to key code
      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          this._goBackward(event);
          break;
        case ARROW_RIGHT_KEYCODE:
          this._goForward(event);
          break;
        case ARROW_UP_KEYCODE:
          // focus prev nav link
          $thisTarget.parent().prev().find('>.nav-link').not(Selector.NAV_LINK_BACK).trigger('focus');
          break;
        case ARROW_DOWN_KEYCODE:
          // focus next nav link
          $thisTarget.parent().next().find('>.nav-link').trigger('focus');
          break;
        default:
          return;
      }
    };

    MegaMenu.prototype._collapseFocus = function _collapseFocus() {
      $(this).find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus');
    };

    MegaMenu.prototype._handleCollapseToggle = function _handleCollapseToggle(e) {
      var $this = $(e.target);
      var $thisCollapse = $($this.attr('href'));

      this._$topCollapseMenus.not($thisCollapse).collapse('hide');
    };

    MegaMenu.prototype._goForward = function _goForward(e) {
      e.preventDefault();
      var $this = $(e.target);
      var $thisNav = $this.closest(Selector.NAV_MENU);
      var $targetNav = $this.next(Selector.NAV_MENU);
      var $rootNav = $(Selector.ROOT_NAV);
      var $thisNavToggler = $this;
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10);
      var navWidth = $rootNav.width();
      var currentTranslatePercentage = 100 * currentTranslatePos / navWidth;

      if (!$this.next(Selector.NAV_MENU).length || $rootNav.hasClass(ClassName.TRANSITIONING)) {
        return false;
      }

      $rootNav.addClass(ClassName.TRANSITIONING);

      // hide all nav on same level
      $thisNav.find(Selector.NAV_MENU).hide();

      // show target navbar-nav
      $targetNav.show();

      // adapt main collapse height to target height
      $(Selector.MEGAMENU).height($targetNav.height());

      // make only visible elements focusable
      if (currentTranslatePercentage === 0) {
        $rootNav.find('>.nav-item .nav-link').attr({ 'tabindex': -1, 'aria-hidden': true });
      }
      $thisNav.find(Selector.NAV_LINK).attr({ 'tabindex': -1, 'aria-hidden': true });
      $targetNav.find(Selector.NAV_LINK).attr({ 'tabindex': 0, 'aria-hidden': false });

      // translate menu
      $rootNav.css('transform', 'translateX(' + (currentTranslatePercentage - 100) + '%)');

      // focus on target nav first item
      $rootNav.one('transitionend', function () {
        $thisNavToggler.attr('aria-expanded', true);
        $targetNav.find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus');
        $rootNav.removeClass(ClassName.TRANSITIONING);
      });
    };

    MegaMenu.prototype._goBackward = function _goBackward(e) {
      e.preventDefault();

      var $this = $(e.target);
      var $thisNav = $this.closest(Selector.NAV_MENU);
      var $targetNav = $thisNav.parent().closest(Selector.NAV_MENU);
      var $rootNav = $(Selector.ROOT_NAV);
      var $targetNavToggler = $targetNav.find(Selector.NAV_LINK_EXPANDED);
      var $thisNavBackLink = $this;
      var currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10);
      var navWidth = $rootNav.width();
      var currentTranslatePercentage = 100 * currentTranslatePos / navWidth;

      if (currentTranslatePercentage === 0 || $rootNav.hasClass(ClassName.TRANSITIONING)) {
        return false;
      }

      $rootNav.addClass(ClassName.TRANSITIONING);

      // make only visible elements focusable
      $targetNav.find(Selector.NAV_LINK).attr({ 'tabindex': 0, 'aria-hidden': false });
      if (currentTranslatePercentage === -100) {
        // reset main collapse height
        $(Selector.MEGAMENU).css('height', 'auto');
        $rootNav.find('>.nav-item .nav-link').attr({ 'tabindex': 0, 'aria-hidden': false });
      }

      // translate menu
      $rootNav.css('transform', 'translateX(' + (currentTranslatePercentage + 100) + '%)');

      // focus on target nav first item
      $rootNav.one('transitionend', function () {
        $targetNavToggler.attr('aria-expanded', false);
        $targetNavToggler.trigger('focus');
        $thisNav.hide();
        $rootNav.removeClass(ClassName.TRANSITIONING);
      });
    };

    // static

    MegaMenu._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new MegaMenu(this, config);
          $element.data(DATA_KEY, data);
        }

        if (typeof config !== 'undefined' && config.length > 0) {
          if (typeof config !== 'string' || !/^[.#].*/.test(config)) {
            throw new Error('Selector "' + config + '" is not supported');
          }

          data.goTo(config);
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
