/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.4): o-scroll-up.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const ScrollUp = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'scrollup'
  const VERSION            = '4.0.0-alpha.4'
  const DATA_KEY           = 'bs.scrollup'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]

  const SCROLLANIMATE      = 500


  const Default = {
    offset : 10,
    method : 'auto',
    target : ''
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
    SCROLL_TOP : '.o-scroll-up'
  }



  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class ScrollUp {

    constructor(element) {
      this._element       = element
      this._scrollElement = window

      $(window).on(Event.SCROLL, $.proxy(this._process, this))
      $(Selector.SCROLL_TOP).on(Event.CLICK_SCROLL, $.proxy(this._backToTop, this))

      this._process()
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }


    // public

    dispose() {
      $.removeData(this._element, DATA_KEY)
      $(this._scrollElement).off(EVENT_KEY)

      this._element       = null
      this._scrollElement = null
    }


    // private

    _process() {
      if ($(this._scrollElement).scrollTop() > $(this._scrollElement).height()*1.0) {
        $(Selector.SCROLL_TOP).fadeIn()
      } else {
        $(Selector.SCROLL_TOP).fadeOut()
      }
    }

    _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE)
    }

    _backToTop() {
      $('html, body').animate({
        scrollTop: 0
      }, SCROLLANIMATE)
    }

    // static

    static _jQueryInterface() {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)
        if (!data) {
          data = new ScrollUp(this)
          $(this).data(DATA_KEY, data)
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
    let scrollUps = $.makeArray($(Selector.SCROLL_TOP))
    for (let i = scrollUps.length; i--;) {
      let $scrollup = $(scrollUps[i])
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
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return ScrollUp._jQueryInterface
  }

  return ScrollUp

})(jQuery)

export default ScrollUp
