(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery'), require('./util.js')) :
  typeof define === 'function' && define.amd ? define(['jquery', './util.js'], factory) :
  (global.Tab = factory(global.jQuery,global.Util));
}(this, (function ($,Util) { 'use strict';

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
   * --------------------------------------------------------------------------
   * Bootstrap (v4.1.3): tab.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  var Tab = function ($$$1) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'tab';
    var VERSION = '4.1.3';
    var DATA_KEY = 'bs.tab';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $$$1.fn[NAME]; // boosted mod

    var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

    var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

    var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

    var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

    var REGEXP_KEYDOWN = new RegExp(ARROW_LEFT_KEYCODE + "|" + ARROW_UP_KEYCODE + "|" + ARROW_RIGHT_KEYCODE + "|" + ARROW_DOWN_KEYCODE); // end mod

    var Event = {
      HIDE: "hide" + EVENT_KEY,
      HIDDEN: "hidden" + EVENT_KEY,
      SHOW: "show" + EVENT_KEY,
      SHOWN: "shown" + EVENT_KEY,
      CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
      KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY // boosted mod

    };
    var ClassName = {
      DROPDOWN_MENU: 'dropdown-menu',
      ACTIVE: 'active',
      DISABLED: 'disabled',
      FADE: 'fade',
      SHOW: 'show'
    };
    var Selector = {
      DROPDOWN: '.dropdown',
      NAV_LIST_GROUP: '.nav, .list-group',
      ACTIVE: '.active',
      ACTIVE_UL: '> li > .active',
      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      DROPDOWN_TOGGLE: '.dropdown-toggle',
      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
      /**
       * ------------------------------------------------------------------------
       * Class Definition
       * ------------------------------------------------------------------------
       */

    };

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(element) {
        this._element = element;

        this._addAccessibility(); // Boosted mod

      } // Getters


      var _proto = Tab.prototype;

      // Public
      _proto.show = function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
          return;
        }

        var target;
        var previous;
        var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (listElement) {
          var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
          previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $$$1.Event(Event.HIDE, {
          relatedTarget: this._element
        });
        var showEvent = $$$1.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $$$1(previous).trigger(hideEvent);
        }

        $$$1(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = document.querySelector(selector);
        }

        this._activate(this._element, listElement);

        var complete = function complete() {
          var hiddenEvent = $$$1.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });
          var shownEvent = $$$1.Event(Event.SHOWN, {
            relatedTarget: previous
          });
          $$$1(previous).trigger(hiddenEvent);
          $$$1(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      };

      _proto.dispose = function dispose() {
        $$$1.removeData(this._element, DATA_KEY);
        this._element = null;
      }; // Private


      _proto._activate = function _activate(element, container, callback) {
        var _this2 = this;

        var activeElements;

        if (container.nodeName === 'UL') {
          activeElements = $$$1(container).find(Selector.ACTIVE_UL);
        } else {
          activeElements = $$$1(container).children(Selector.ACTIVE);
        }

        var active = activeElements[0];
        var isTransitioning = callback && active && $$$1(active).hasClass(ClassName.FADE);

        var complete = function complete() {
          return _this2._transitionComplete(element, active, callback);
        }; // Boosted mod


        $$$1(container).find('.nav-link:not(.dropdown-toggle)').attr({
          tabIndex: '-1',
          'aria-selected': false
        });
        $$$1(container).find('.tab-pane').attr({
          'aria-hidden': true,
          tabIndex: '-1'
        }); // end mod

        if (active && isTransitioning) {
          var transitionDuration = Util.getTransitionDurationFromElement(active);
          $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      };

      _proto._transitionComplete = function _transitionComplete(element, active, callback) {
        if (active) {
          $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
          var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          if (active.getAttribute('role') === 'tab') {
            active.setAttribute('aria-selected', false);
          }
        }

        $$$1(element).addClass(ClassName.ACTIVE);

        if (element.getAttribute('role') === 'tab') {
          element.setAttribute('aria-selected', true);
        } // Boosted mod


        $$$1(element).filter('.nav-link:not(.dropdown-toggle).active').attr({
          tabIndex: '0',
          'aria-selected': true
        });
        $$$1(element).filter('.tab-pane.active').attr({
          'aria-hidden': false,
          tabIndex: '0'
        }); // end mod

        Util.reflow(element);
        $$$1(element).addClass(ClassName.SHOW);

        if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
          var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

          if (dropdownElement) {
            var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE));
            $$$1(dropdownToggleList).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }; // Boosted mod


      _proto._addAccessibility = function _addAccessibility() {
        var $tab = $$$1(this._element);
        var $tabpanel = $$$1($tab.attr('href'));
        var $tablist = $tab.closest(Selector.NAV_LIST_GROUP);
        var tabId = $tab.attr('id') || Util.getUID(NAME);
        $tab.attr('id', tabId);

        if ($tabpanel) {
          $tab.attr('role', 'tab');
          $tablist.attr('role', 'tablist'); // $li.attr('role', 'presentation')
        }

        if ($tab.hasClass(ClassName.ACTIVE)) {
          $tab.attr({
            tabIndex: '0',
            'aria-selected': 'true'
          });

          if ($tab.attr('href')) {
            $tab.attr('aria-controls', $tab.attr('href').substr(1));
          }

          $tabpanel.attr({
            role: 'tabpanel',
            tabIndex: '0',
            'aria-hidden': 'false',
            'aria-labelledby': tabId
          });
        } else {
          $tab.attr({
            tabIndex: '-1',
            'aria-selected': 'false'
          });

          if ($tab.attr('href')) {
            $tab.attr('aria-controls', $tab.attr('href').substr(1));
          }

          $tabpanel.attr({
            role: 'tabpanel',
            tabIndex: '-1',
            'aria-hidden': 'true',
            'aria-labelledby': tabId
          });
        }
      }; // end mod
      // Static
      // Boosted mod


      Tab._dataApiKeydownHandler = function _dataApiKeydownHandler(e) {
        var $this = $$$1(this);
        var Items = $this.closest('ul[role=tablist] ').find('[role=tab]:visible');
        var k = e.which || e.keyCode;
        var index = 0;
        index = Items.index(Items.filter(':focus'));

        if (k === ARROW_UP_KEYCODE || k === ARROW_LEFT_KEYCODE) {
          index--;
        } // up & left


        if (k === ARROW_RIGHT_KEYCODE || k === ARROW_DOWN_KEYCODE) {
          index++;
        } // down & right


        if (index < 0) {
          index = Items.length - 1;
        }

        if (index === Items.length) {
          index = 0;
        }

        var nextTab = Items.eq(index);

        if (nextTab.attr('role') === 'tab') {
          nextTab.tab('show').trigger('focus');
        }

        e.preventDefault();
        e.stopPropagation();
      }; // end mod


      Tab._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $$$1(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = new Tab(this);
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

      _createClass(Tab, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Tab;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault();

      Tab._jQueryInterface.call($$$1(this), 'show');
    }) // Boosted mod
    .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, function (event) {
      if (!REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();

      Tab._dataApiKeydownHandler.call($$$1(this), event);
    }).on('DOMContentLoaded', function () {
      Tab._jQueryInterface.call($$$1(Selector.DATA_TOGGLE), 'init');
    }); // end mod

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $$$1.fn[NAME] = Tab._jQueryInterface;
    $$$1.fn[NAME].Constructor = Tab;

    $$$1.fn[NAME].noConflict = function () {
      $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
      return Tab._jQueryInterface;
    };

    return Tab;
  }($);

  return Tab;

})));
//# sourceMappingURL=tab.js.map
