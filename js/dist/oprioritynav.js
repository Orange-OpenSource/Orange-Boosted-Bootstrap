(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
  typeof define === 'function' && define.amd ? define(['jquery'], factory) :
  (global.OPriorityNav = factory(global.jQuery));
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
   * Boosted (v4.1.3): o-priority-nav.js
   * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var PriorityNav = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'prioritynav';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.prioritynav';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
    var RESIZE_DURATION = 500;
    var TAB_KEYCODE = 9;
    var Event = {
      RESIZE: 'resize',
      FOCUS: 'focus'
    };
    var ClassName = {
      PRIORITY: 'priority',
      HIDE: 'sr-only',
      RESIZING: 'resizing'
    };
    var Selector = {
      NAV_ELEMENTS: 'li:not(\'.overflow-nav\')',
      FIRST_ELEMENT: 'li:first',
      PRIORITY_ELEMENT: '.priority'
    };
    var MenuLabelDefault = 'More';

    function MenuTemplate(MenuLabel) {
      return "\n    <li class=\"overflow-nav nav-item dropdown\">\n        <a href=\"#\" class=\"dropdown-toggle nav-link\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\">" + MenuLabel + "</a>\n        <ul class=\"overflow-nav-list dropdown-menu dropdown-menu-right\"></ul>\n    </li>\n  ";
    }
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */


    var PriorityNav =
    /*#__PURE__*/
    function () {
      function PriorityNav(element, config) {
        this._element = element;
        this._config = config;

        if ($$$1(element).is('ul')) {
          this._$menu = $$$1(element);
        } else {
          this._$menu = $$$1(element).find('ul').first();
        }

        this._initMenu();

        this._$allNavElements = this._$menu.find(Selector.NAV_ELEMENTS);

        this._bindUIActions();

        this._setupMenu();
      } // getters


      var _proto = PriorityNav.prototype;

      // public
      // private
      _proto._initMenu = function _initMenu() {
        var MenuLabel = this._config;

        if (typeof MenuLabel === 'undefined') {
          MenuLabel = MenuLabelDefault;
        } // add menu template


        this._$menu.append(MenuTemplate(MenuLabel));
      };

      _proto._setupMenu = function _setupMenu() {
        var $allNavElements = this._$allNavElements; // Checking top position of first item (sometimes changes)

        var firstPos = this._$menu.find(Selector.FIRST_ELEMENT).position(); // Empty collection in which to put menu items to move


        var $wrappedElements = $$$1(); // Used to snag the previous menu item in addition to ones that have wrapped

        var first = true; // Loop through all the nav items...

        this._$allNavElements.each(function (i) {
          var $elm = $$$1(this); // ...in which to find wrapped elements

          var pos = $elm.position();

          if (pos.top !== firstPos.top) {
            // If element is wrapped, add it to set
            $wrappedElements = $wrappedElements.add($elm); // Add the previous one too, if first

            if (first) {
              $wrappedElements = $wrappedElements.add($allNavElements.eq(i - 1));
              first = false;
            }
          }
        });

        if ($wrappedElements.length) {
          // Clone set before altering
          var newSet = $wrappedElements.clone(); // Hide ones that we're moving

          $wrappedElements.addClass(ClassName.HIDE);
          $wrappedElements.find('.nav-link').attr('tabindex', -1); // Add wrapped elements to dropdown

          this._$menu.find('.overflow-nav-list').append(newSet); // Show new menu


          this._$menu.find('.overflow-nav').addClass('show-inline-block'); // Make overflow visible again so dropdown can be seen.


          this._$menu.find('.o-nav-local').css('overflow', 'visible'); // Check if menu doesn't overflow after process


          if (this._$menu.find('.overflow-nav').position().top !== firstPos.top) {
            var $item = $$$1(this._element).find("." + ClassName.HIDE).first().prev();
            var $itemDuplicate = $item.clone();
            $item.addClass(ClassName.HIDE);
            $item.find('.nav-link').attr('tabindex', -1);

            this._$menu.find('.overflow-nav-list').prepend($itemDuplicate);
          }
        } // hide menu from AT


        this._$menu.find('.overflow-nav').attr('aria-hidden', true);
      };

      _proto._tearDown = function _tearDown() {
        this._$menu.find('.overflow-nav-list').empty();

        this._$menu.find('.overflow-nav').removeClass('show-inline-block');

        this._$allNavElements.removeClass(ClassName.HIDE);

        this._$allNavElements.find('.nav-link').attr('tabindex', 0);
      };

      _proto._bindUIActions = function _bindUIActions() {
        var _this = this;

        $$$1(window).on(Event.RESIZE, function () {
          _this._$menu.addClass(ClassName.RESIZING);

          setTimeout(function () {
            _this._tearDown();

            _this._setupMenu();

            _this._$menu.removeClass(ClassName.RESIZING);
          }, RESIZE_DURATION);
        });

        this._$menu.find('.overflow-nav .dropdown-toggle').on('keyup', function (e) {
          if (e.which === TAB_KEYCODE) {
            $$$1(e.target).dropdown('toggle');
          }
        });
      }; // static


      PriorityNav._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $$$1(this).data(DATA_KEY);

          if (!data) {
            data = new PriorityNav(this, config);
            $$$1(this).data(DATA_KEY, data);
          }

          if (typeof config !== 'undefined' && config) {
            if (typeof config !== 'string') {
              throw new TypeError('Priority nav label type must be string');
            }
          }
        });
      };

      _createClass(PriorityNav, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return PriorityNav;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $$$1.fn[NAME] = PriorityNav._jQueryInterface;
    $$$1.fn[NAME].Constructor = PriorityNav;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return PriorityNav._jQueryInterface;
    };

    return PriorityNav;
  }($);

  return PriorityNav;

})));
//# sourceMappingURL=oprioritynav.js.map
