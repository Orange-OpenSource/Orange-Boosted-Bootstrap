/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.4): o-switch.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Switch = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'switch'
  const VERSION             = '4.0.0-alpha.4'
  const DATA_KEY            = 'bs.switch'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    CHECKED : 'checked',
    SWITCH: "o-switch",
  }

  const Selector = {
    SWITCH: '.o-switch',
    TOGGLE: '.o-switch .toggle',
    LABEL: '.o-switch label'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Switch {

    constructor(element) {
      this._element = element
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    // private
    toggle() {

      if($(this._element).prev('input').prop('checked')) {
        $(this._element).prev('input').prop('checked', false)
      } else {
        $(this._element).prev('input').prop('checked', true)
      }
    }


    // public

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Switch(this)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }

  }


  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on('click', Selector.TOGGLE, function(event) {
      event.preventDefault()

      Switch._jQueryInterface.call($(this), 'toggle')
    })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Switch._jQueryInterface
  $.fn[NAME].Constructor = Switch
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Switch._jQueryInterface
  }

  return Switch

})(jQuery)

export default Switch
