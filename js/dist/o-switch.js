var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-beta): o-switch.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Switch = function ($) {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'switch';
  var VERSION = '4.0.0-beta';
  var DATA_KEY = 'bs.switch';
  var JQUERY_NO_CONFLICT = $.fn[NAME];

  var Selector = {
    SWITCH: '.o-switch',
    TOGGLE: '.o-switch .toggle',
    LABEL: '.o-switch label'

    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };
  var Switch = function () {
    function Switch(element) {
      _classCallCheck(this, Switch);

      this._element = element;
    }

    // getters

    // private
    Switch.prototype.toggle = function toggle() {

      if ($(this._element).prev('input').prop('checked')) {
        $(this._element).prev('input').prop('checked', false);
      } else {
        $(this._element).prev('input').prop('checked', true);
      }
    };

    // public

    Switch.prototype.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    };

    // static

    Switch._jQueryInterface = function _jQueryInterface(config) {
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
    };

    _createClass(Switch, null, [{
      key: 'VERSION',
      get: function get() {
        return VERSION;
      }
    }]);

    return Switch;
  }();

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

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
}(jQuery);
//# sourceMappingURL=o-switch.js.map