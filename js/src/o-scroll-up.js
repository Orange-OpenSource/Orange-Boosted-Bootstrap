/**
 * --------------------------------------------------------------------------
 * Boosted (v4.5.3): o-scroll-up.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'
import Util from './util'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'scrollup'
const VERSION = '4.5.3'
const DATA_KEY = 'bs.scrollup'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const SCROLLANIMATE = 500

const Default = {
  target: ''
}

const DefaultType = {
  target: '(string|element)'
}

const EVENT_SCROLL = `scroll${EVENT_KEY}`
const EVENT_CLICK_SCROLL = `click${EVENT_KEY}`
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`

const SELECTOR_SCROLL_TOP = '.o-scroll-up:not(.static)'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollUp {
  constructor(element, config) {
    this._element = element
    this._scrollElement = window
    this._config = this._getConfig(config)

    $(window).on(EVENT_SCROLL, $.proxy(this._process, this))
    $(SELECTOR_SCROLL_TOP).on(EVENT_CLICK_SCROLL, $.proxy(this._backToTop, this))
    $(this._element).addClass('is-fixed d-none')
    this._process()
  }

  // getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  // public

  dispose() {
    $.removeData(this._element, DATA_KEY)
    $(this._scrollElement).off(EVENT_KEY)

    this._element = null
    this._scrollElement = null
  }

  // private

  _getConfig(config) {
    config = {
      ...this.constructor.Default,
      ...$(this._element).data(),
      ...config
    }

    Util.typeCheckConfig(
      NAME,
      config,
      this.constructor.DefaultType
    )

    return config
  }

  _process() {
    $(SELECTOR_SCROLL_TOP).toggleClass('d-none', $(this._scrollElement).scrollTop() < Number($(this._scrollElement).height()))
  }

  _backToTop() {
    // if target is defined scrollintoview
    if (this._config.target) {
      document.querySelector(this._config.target).scrollIntoView({
        behavior: 'smooth'
      })
    } else if (typeof $.animate === 'function') {
      $('html, body').animate({
        scrollTop: 0
      }, SCROLLANIMATE)
    } else {
      $('html, body').scrollTop(0)
    }
  }

  // static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = $(this).data(DATA_KEY)
      const _config = typeof config === 'object' ? config : null

      if (!data) {
        data = new ScrollUp(this, _config)
        $(this).data(DATA_KEY, data)
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

$(window).on(EVENT_LOAD_DATA_API, () => {
  const scrollUps = $.makeArray($(SELECTOR_SCROLL_TOP))
  for (let i = scrollUps.length; i--;) {
    const $scrollup = $(scrollUps[i])
    ScrollUp._jQueryInterface.call($scrollup, $scrollup.data())
  }
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = ScrollUp._jQueryInterface
$.fn[NAME].Constructor = ScrollUp
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return ScrollUp._jQueryInterface
}

export default ScrollUp
