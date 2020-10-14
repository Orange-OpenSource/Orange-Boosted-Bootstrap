/**
 * ------------------------------------------------------------------------------------------------------
 * Boosted (v4.5.3): otab.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * ------------------------------------------------------------------------------------------------------
 */

import $ from 'jquery'
import Util from './util'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'otab'
const VERSION = '4.5.3'
const DATA_KEY = 'bs.otab'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const JQUERY_NO_CONFLICT = $.fn[NAME]
const DEFAULT_THRESHOLD = 2

const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_ACCORDION_LAYOUT = 'accordion-layout'

const SELECTOR_OTAB_HEADING = '.o-tab-heading'
const SELECTOR_OTAB_CONTENT = '.o-tab-content'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Otab {
  constructor(element) {
    this._element = element
    this._addAccessibility()

    if ($(this._element).parent().find(SELECTOR_OTAB_HEADING).length > DEFAULT_THRESHOLD) {
      $(this._element).parent().addClass(CLASS_NAME_ACCORDION_LAYOUT)
    }
  }

  // getters

  static get VERSION() {
    return VERSION
  }

  // public
  show() {
    const $element = $(this._element)

    if ($element.next().hasClass(CLASS_NAME_SHOW)) {
      return
    }

    // from parent remove all tab-content show classes
    $element.parent().find(SELECTOR_OTAB_CONTENT).removeClass(CLASS_NAME_SHOW)
    // remove all aria-expanded=true
    $element.parent().find('[aria-expanded="true"]').attr('aria-expanded', false)
    // add show class to next tab-content
    $element.next().addClass(CLASS_NAME_SHOW)
    // add aria-expanded=true to element
    $element.attr('aria-expanded', true)
  }

  // private

  _addAccessibility() {
    const $tab = $(this._element)
    const $tabpanel = $tab.next()

    $tab.attr('id', Util.getUID(NAME))
    $tabpanel.attr('id', Util.getUID(NAME))

    $tab.attr({
      'aria-controls': $tabpanel.attr('id'),
      role: 'tab'
    })
    $tabpanel.attr({
      'aria-labelledby': $tab.attr('id'),
      role: 'tabpanel',
      tabindex: 0
    })

    if ($tabpanel.hasClass(CLASS_NAME_SHOW)) {
      $tab.attr('aria-expanded', true)
    } else {
      $tab.attr('aria-expanded', false)
    }
  }

  // static

  static _jQueryInterface(config) {
    return this.each(function () {
      const $this = $(this)
      let data = $this.data(DATA_KEY)

      if (!data) {
        data = new Otab(this)
        $this.data(DATA_KEY, data)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

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
  .on('DOMContentLoaded', () => {
    Otab._jQueryInterface.call($(SELECTOR_OTAB_HEADING))
  })
  .on(EVENT_CLICK_DATA_API, SELECTOR_OTAB_HEADING, function (event) {
    event.preventDefault()
    Otab._jQueryInterface.call($(this), CLASS_NAME_SHOW)
  })

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Otab._jQueryInterface
$.fn[NAME].Constructor = Otab
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Otab._jQueryInterface
}

export default Otab
