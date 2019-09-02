/**
 * --------------------------------------------------------------------------
 * Boosted (v4.3.1): o-scroll-up.js
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

const NAME               = 'scrollup'
const VERSION            = '4.3.1'
const DATA_KEY           = 'bs.scrollup'
const EVENT_KEY          = `.${DATA_KEY}`
const DATA_API_KEY       = '.data-api'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const SCROLLANIMATE      = 500


const Default = {
  target : ''
}

const DefaultType = {
  target  : '(string|element)'
}

const Event = {
  SCROLL        : `scroll${EVENT_KEY}`,
  CLICK_SCROLL  : `click${EVENT_KEY}`,
  LOAD_DATA_API : `load${EVENT_KEY}${DATA_API_KEY}`
}

const ClassName = {
  SCROLL_TOP    : 'o-scroll-up'
}

const Selector = {
  SCROLL_TOP : '.o-scroll-up:not(.static)'
}


/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class ScrollUp {
  constructor(element, config) {
    this._element       = element
    this._scrollElement = window
    this._config        = this._getConfig(config)

    $(window).on(Event.SCROLL, $.proxy(this._process, this))
    $(Selector.SCROLL_TOP).on(Event.CLICK_SCROLL, $.proxy(this._backToTop, this))
    $(this._element).addClass('is-fixed')
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

    this._element       = null
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
    if ($(this._scrollElement).scrollTop() > Number($(this._scrollElement).height())) {
      $(Selector.SCROLL_TOP).show()
    } else {
      $(Selector.SCROLL_TOP).hide()
    }
  }

  _clear() {
    $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
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
    // scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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

$(window).on(Event.LOAD_DATA_API, () => {
  const scrollUps = $.makeArray($(Selector.SCROLL_TOP))
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

$.fn[NAME]             = ScrollUp._jQueryInterface
$.fn[NAME].Constructor = ScrollUp
$.fn[NAME].noConflict  = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return ScrollUp._jQueryInterface
}

export default ScrollUp
