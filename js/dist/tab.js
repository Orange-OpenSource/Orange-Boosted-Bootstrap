'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var test;
var Tab = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'tab';
  var VERSION = '4.0.0-alpha.2';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;

  var Event = {
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    FADE: 'fade',
    IN: 'in'
  };

  var Selector = {
    A: 'a',
    LI: 'li',
    DROPDOWN: '.dropdown',
    UL: 'ul:not(.dropdown-menu)',
    FADE_CHILD: '> .nav-item .fade, > .fade',
    ACTIVE: '.active',
    ACTIVE_CHILD: '> .nav-item > .active, > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = (function () {
    function Tab(element) {
      _classCallCheck(this, Tab);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Tab, [{
      key: 'show',

      // public

      value: function show() {
        var _this = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)) {
          return;
        }

        var target = undefined;
        var previous = undefined;
        var ulElement = $(this._element).closest(Selector.UL)[0];
        var selector = Util.getSelectorFromElement(this._element);

        if (ulElement) {
          previous = $.makeArray($(ulElement).find(Selector.ACTIVE));
          previous = previous[previous.length - 1];
        }

        var hideEvent = $.Event(Event.HIDE, {
          relatedTarget: this._element
        });

        var showEvent = $.Event(Event.SHOW, {
          relatedTarget: previous
        });

        if (previous) {
          $(previous).trigger(hideEvent);
        }

        $(this._element).trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
          return;
        }

        if (selector) {
          target = $(selector)[0];
        }

        this._activate(this._element, ulElement);

        var complete = function complete() {
          var hiddenEvent = $.Event(Event.HIDDEN, {
            relatedTarget: _this._element
          });

          var shownEvent = $.Event(Event.SHOWN, {
            relatedTarget: previous
          });

          $(previous).trigger(hiddenEvent);
          $(_this._element).trigger(shownEvent);
        };

        if (target) {
          this._activate(target, target.parentNode, complete);
        } else {
          complete();
        }
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeClass(this._element, DATA_KEY);
        this._element = null;
      }
    }, {
      key: '_activate',

      // private

      value: function _activate(element, container, callback) {
        console.log('activate');
        //--- rajout
        var $active = $(container).find('> .active');
        $active.find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex': '-1', 'aria-selected': false });
        $active.filter('.tab-pane').attr({ 'aria-hidden': true, 'tabIndex': '-1' });
        //---
        var active = $(container).find(Selector.ACTIVE_CHILD)[0];
        var isTransitioning = callback && Util.supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

        var complete = $.proxy(this._transitionComplete, this, element, active, isTransitioning, callback);

        if (active && isTransitioning) {
          $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
        } else {
          complete();
        }

        if (active) {
          $(active).removeClass(ClassName.IN);
        }

        if (element.tagName === 'A') {
          // $(container).find('[data-toggle=tab], [data-toggle=pill]').attr({ 'tabIndex' : '0','aria-selected' : true }).focus() // (DOESN'T WORK ?)
          $('#' + element.id).attr({ 'tabIndex': '0', 'aria-selected': true }).focus();
        }
        $(element).filter('.tab-pane.active').attr({ 'aria-hidden': false, 'tabIndex': '0' });
      }
    }, {
      key: '_transitionComplete',
      value: function _transitionComplete(element, active, isTransitioning, callback) {
        if (active) {
          $(active).removeClass(ClassName.ACTIVE);

          var dropdownChild = $(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

          if (dropdownChild) {
            $(dropdownChild).removeClass(ClassName.ACTIVE);
          }

          active.setAttribute('aria-expanded', false);
        }

        $(element).addClass(ClassName.ACTIVE);
        element.setAttribute('aria-expanded', true);

        if (isTransitioning) {
          Util.reflow(element);
          $(element).addClass(ClassName.IN);
        } else {
          $(element).removeClass(ClassName.FADE);
        }

        if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

          var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
          if (dropdownElement) {
            $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
          }

          element.setAttribute('aria-expanded', true);
        }

        if (callback) {
          callback();
        }
      }

      // static

    }], [{
      key: '_keydown',
      value: function _keydown(e) {
        console.log('keydown!');
        var $this = $(this),
            $items,
            $ul = $this.closest('ul[role=tablist] '),
            index,
            k = e.which || e.keyCode;

        $this = $(this);
        if (!/(37|38|39|40)/.test(k)) return;

        $items = $ul.find('[role=tab]:visible');
        index = $items.index($items.filter(':focus'));

        if (k === 38 || k === 37) index--; // up & left
        if (k === 39 || k === 40) index++; // down & right

        if (index < 0) index = $items.length - 1;
        if (index === $items.length) index = 0;

        var nextTab = $items.eq(index);
        if (nextTab.attr('role') === 'tab') {

          nextTab.tab('show') //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
          .focus();
        }
        // nextTab.focus()

        e.preventDefault();
        e.stopPropagation();
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);

          if (!data) {
            data = data = new Tab(this);
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
    }]);

    return Tab;
  })();

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    Tab._jQueryInterface.call($(this), 'show');
  });

  $(document).on('keydown.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (event) {
    if (!/(38|40|39|37)/.test(event.which)) {
      return;
    }
    event.preventDefault();
    Tab._keydown.call($(this), event);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */
  // ajout de l'accesibilité
  // ===============================

  var uniqueId = function uniqueId(prefix) {
    return (prefix || 'ui-id') + '-' + Math.floor(Math.random() * 1000 + 1);
  };

  var $tablist = $('.nav-tabs, .nav-pills'),
      $lis = $tablist.children('li'),
      $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');

  $tablist.attr('role', 'tablist');
  $lis.attr('role', 'presentation');
  $tabs.attr('role', 'tab');

  $tabs.each(function (index) {
    var tabpanel = $($(this).attr('href')),
        tab = $(this),
        tabid = tab.attr('id') || uniqueId('ui-tab');

    tab.attr('id', tabid);

    if (tab.hasClass('active')) {
      tab.attr({ 'tabIndex': '0', 'aria-selected': 'true', 'aria-controls': tab.attr('href').substr(1) });
      tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '0', 'aria-hidden': 'false', 'aria-labelledby': tabid });
    } else {
      tab.attr({ 'tabIndex': '-1', 'aria-selected': 'false', 'aria-controls': tab.attr('href').substr(1) });
      tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '-1', 'aria-hidden': 'true', 'aria-labelledby': tabid });
    }
  });

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
})(jQuery);
//# sourceMappingURL=tab.js.map
