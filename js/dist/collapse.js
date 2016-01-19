'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'collapse';
  var VERSION = '4.0.0-alpha.2';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;

  var Default = {
    toggle: true,
    parent: ''
  };

  var DefaultType = {
    toggle: 'boolean',
    parent: 'string'
  };

  var Event = {
    SHOW: 'show' + EVENT_KEY,
    SHOWN: 'shown' + EVENT_KEY,
    HIDE: 'hide' + EVENT_KEY,
    HIDDEN: 'hidden' + EVENT_KEY,
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  var ClassName = {
    IN: 'in',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };

  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };

  var Selector = {
    ACTIVES: '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = (function () {
    function Collapse(element, config) {
      _classCallCheck(this, Collapse);

      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + element.id + '"],' + ('[data-toggle="collapse"][data-target="#' + element.id + '"]')));

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    }

    /**
     * ------------------------------------------------------------------------
     * Adding accessibility
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Collapse, [{
      key: 'toggle',

      // public
      value: function toggle() {
        if ($(this._element).hasClass(ClassName.IN)) {
          this.hide();
        } else {
          this.show();
        }
      }
    }, {
      key: 'show',
      value: function show() {
        var _this = this;

        if (this._isTransitioning || $(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var actives = undefined;
        var activesData = undefined;

        if (this._parent) {
          actives = $.makeArray($(this._parent).find(Selector.ACTIVES));
          if (!actives.length) {
            actives = null;
          }
        }

        if (actives) {
          activesData = $(actives).data(DATA_KEY);
          if (activesData && activesData._isTransitioning) {
            return;
          }
        }

        var startEvent = $.Event(Event.SHOW);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        if (actives) {
          Collapse._jQueryInterface.call($(actives), 'hide');
          if (!activesData) {
            $(actives).data(DATA_KEY, null);
          }
        }

        var dimension = this._getDimension();

        $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);

        this._element.style[dimension] = 0;
        this._element.setAttribute('aria-expanded', true);

        if (this._triggerArray.length) {
          $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
        }

        this.setTransitioning(true);

        $(this._element).parent().find('h4.panel-title').removeClass('panel-chevron-closed').addClass('panel-chevron-open');

        var complete = function complete() {
          $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.IN);

          _this._element.style[dimension] = '';

          _this.setTransitioning(false);

          $(_this._element).trigger(Event.SHOWN);
        };

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        var scrollSize = 'scroll' + capitalizedDimension;

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);

        this._element.style[dimension] = this._element[scrollSize] + 'px';
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this2 = this;

        if (this._isTransitioning || !$(this._element).hasClass(ClassName.IN)) {
          return;
        }

        var startEvent = $.Event(Event.HIDE);
        $(this._element).trigger(startEvent);
        if (startEvent.isDefaultPrevented()) {
          return;
        }

        var dimension = this._getDimension();
        var offsetDimension = dimension === Dimension.WIDTH ? 'offsetWidth' : 'offsetHeight';

        this._element.style[dimension] = this._element[offsetDimension] + 'px';

        Util.reflow(this._element);

        $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.IN);

        this._element.setAttribute('aria-expanded', false);

        if (this._triggerArray.length) {
          $(this._triggerArray).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
        }

        this.setTransitioning(true);

        var complete = function complete() {
          _this2.setTransitioning(false);
          $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
        };

        this._element.style[dimension] = 0;
        $(this._element).parent().find('h4.panel-title').addClass('panel-chevron-closed').removeClass('panel-chevron-open');

        if (!Util.supportsTransitionEnd()) {
          complete();
          return;
        }

        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      }
    }, {
      key: 'setTransitioning',
      value: function setTransitioning(isTransitioning) {
        this._isTransitioning = isTransitioning;
      }
    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);

        this._config = null;
        this._parent = null;
        this._element = null;
        this._triggerArray = null;
        this._isTransitioning = null;
      }

      // private

    }, {
      key: '_getConfig',
      value: function _getConfig(config) {
        config = $.extend({}, Default, config);
        config.toggle = Boolean(config.toggle); // coerce string values
        Util.typeCheckConfig(NAME, config, DefaultType);
        return config;
      }
    }, {
      key: '_getDimension',
      value: function _getDimension() {
        var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
        return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
      }
    }, {
      key: '_getParent',
      value: function _getParent() {
        var _this3 = this;

        var parent = $(this._config.parent)[0];
        var selector = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';

        $(parent).find(selector).each(function (i, element) {
          _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
        });

        return parent;
      }
    }, {
      key: '_addAriaAndCollapsedClass',
      value: function _addAriaAndCollapsedClass(element, triggerArray) {
        if (element) {
          var isOpen = $(element).hasClass(ClassName.IN);
          element.setAttribute('aria-expanded', isOpen);

          if (triggerArray.length) {
            $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
          }
        }
      }

      // static

    }], [{
      key: '_keydown',
      value: function _keydown(e, that) {
        var $items = undefined,
            $tablist = $this.closest('div.panel-group '),
            $this = $(that),
            index = undefined,
            k = e.which || e.keyCode;

        if (k === 32) {
          // space
          $this.click();
        }

        $items = $tablist.find('[role=tab]');
        index = $items.index($items.filter(':focus'));

        if (k === 38 || k === 37) {
          index--; // up & left
        }
        if (k === 39 || k === 40) {
          index++; // down & right
        }
        if (index < 0) {
          index = $items.length - 1;
        }
        if (index === $items.length) {
          index = 0;
        }

        $items.eq(index).focus();
        e.preventDefault();
        e.stopPropagation();
      }
    }, {
      key: '_getTargetFromElement',
      value: function _getTargetFromElement(element) {
        var selector = Util.getSelectorFromElement(element);
        return selector ? $(selector)[0] : null;
      }
    }, {
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data(DATA_KEY);
          var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

          if (!data && _config.toggle && /show|hide/.test(config)) {
            _config.toggle = false;
          }

          if (!data) {
            data = new Collapse(this, _config);
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

    return Collapse;
  })();

  var uniqueId = function uniqueId(prefix) {
    return (prefix || 'ui-id') + '-${Math.floor(Math.random() * 1000 + 1)}';
  };

  var $colltabs = $('[data-toggle="collapse"]:not(.navbar-toggle)');
  $colltabs.attr({ role: 'tab', 'aria-selected': 'false', 'aria-expanded': 'false' });
  $colltabs.each(function () {
    var colltab = $(this),
        collid = colltab.attr('id') || uniqueId('ui-collapse'),
        collpanel = colltab.attr('data-target') ? $(colltab.attr('data-target')) : $(colltab.attr('href')),
        collparent = parent && $(parent),
        heading = '',
        parent = colltab.attr('data-parent');

    colltab.attr('id', collid);
    if (collparent) {
      $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role', 'presentation');
      collparent.attr({ role: 'tablist', 'aria-multiselectable': 'true' });

      heading = collpanel.parent().children().first(); // On sélectionne le heading (panel-heading)

      if (collpanel.hasClass('in')) {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected': 'true', 'aria-expanded': 'true', tabindex: '0' });

        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role: 'tabpanel', tabindex: '0', 'aria-labelledby': collid, 'aria-hidden': 'false' });
        }

        // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
        // Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
        if (heading.hasClass('panel-heading')) {
          heading.addClass('panel-selected');
          heading.children().first().addClass('panel-chevron-open');
        }
      } else {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), tabindex: '-1' });
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role: 'tabpanel', tabindex: '-1', 'aria-labelledby': collid, 'aria-hidden': 'true' });
        }

        // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
        if (heading.hasClass('panel-heading')) {
          heading.children().first().addClass('panel-chevron-closed');
        }
      }
    } else {
      heading = collpanel.parent().children().first(); // On sélectionne le heading (panel-heading)
      if (collpanel.hasClass('in')) {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected': 'true', 'aria-expanded': 'true' });
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role: 'tabpanel', 'aria-labelledby': collid, 'aria-hidden': 'false' });
        }

        // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
        // Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
        if (heading.hasClass('panel-heading')) {
          heading.addClass('panel-selected');
          heading.children().first().addClass('panel-chevron-open');
        }
      } else {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected': 'false', 'aria-expanded': 'false' });
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role: 'tabpanel', 'aria-labelledby': collid, 'aria-hidden': 'true' });
        }

        // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
        if (heading.hasClass('panel-heading')) {
          heading.children().first().addClass('panel-chevron-closed');
        }
      }
    }
  });

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
  $(document).on('keydown.collapse.data-api', '[data-toggle="collapse"]', function (event) {
    var target = Collapse._getTargetFromElement(this);
    var k = event.which || event.keyCode;
    if (!/(32|37|38|39|40)/.test(k)) {
      return true;
    }
    Collapse._keydown.call($(target), event, this);
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    var target = Collapse._getTargetFromElement(this);
    var data = $(target).data(DATA_KEY);
    var config = data ? 'toggle' : $(this).data();

    Collapse._jQueryInterface.call($(target), config);
  });
  $(function () {
    $('.o-accordion .panel-heading h4 a ').prepend('<div class=arrow></div>');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
})(jQuery);
//# sourceMappingURL=collapse.js.map
