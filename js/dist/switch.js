/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.3): switch.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Switch = (function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'switch';
  var VERSION = '4.0.0-alpha.3';
  var DATA_KEY = 'bs.switch';
  var EVENT_KEY = '.' + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var ClassName = {
    CHECKED: 'checked',
    SWITCH: "o-switch"
  };

  var Selector = {
    SWITCH: '.o-switch',
    TOGGLE: '.o-switch .toggle',
    LABEL: '.o-switch label'
  };

  var Event = {
    CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
  };

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Switch = (function () {
    function Switch(element) {
      _classCallCheck(this, Switch);

      this._element = element;
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    // getters

    _createClass(Switch, [{
      key: 'toggle',

      // private
      value: function toggle() {

        if ($(this._element).prev('input').prop('checked')) {
          $(this._element).prev('input').prop('checked', false);
        } else {
          $(this._element).prev('input').prop('checked', true);
        }
      }

      // public

    }, {
      key: 'dispose',
      value: function dispose() {
        $.removeData(this._element, DATA_KEY);
        this._element = null;
      }

      // static

    }], [{
      key: '_jQueryInterface',
      value: function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          if (!data) {
            data = new Switch(this);
            $(this).data(DATA_KEY, data);
          }

          if (config === 'toggle') {
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

    return Switch;
  })();

  $(document).on('click', Selector.TOGGLE, function (event) {
    event.preventDefault();

    Switch._jQueryInterface.call($(this), 'toggle');
  });

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Switch._jQueryInterface;
  $.fn[NAME].Constructor = Switch;
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Switch._jQueryInterface;
  };

  return Switch;
})(jQuery);
//# sourceMappingURL=switch.js.map
