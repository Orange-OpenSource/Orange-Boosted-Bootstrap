import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.2): navbar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Navbar = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'navbar'
  const VERSION             = '4.0.0-alpha.2'
  const DATA_KEY            = 'bs.navbar'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Default = {
    sticky : true,
    trigger : ''
  }

  const DefaultType = {
    sticky : 'boolean',
    trigger : 'string'
  }

  const Dimension = {
    MEDIA_BP_SM : 544
  }

  const Event = {
    PAGE_SCROLL : 'scroll'
  }

  const Selector = {
    CONFORTP_BAR : '#accessibilitytoolbarGraphic',
    HIDE_SUPRA_TRIGGER : '#hide_supra_trigger',
    SUPRA_BAR : '.navbar.supra',
    MEGAMENU_PANEL : '.mega-menu.panel'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Navbar {

    constructor(element, config) {
      this._element         = element
      this._supraBar        = $(element).find(Selector.SUPRA_BAR)
      this._config          = this._getConfig(config)
      this._initialHeight = $(this._element).outerHeight()
      this._initialSupraHeight = $(this._supraBar).outerHeight()
      this._triggerElm = $(this._config.trigger)[0]
      this._throttleTimer = 0

      if (this._config.sticky) {
        $(this._element).addClass('fixed-header')
        $(Selector.MEGAMENU_PANEL).addClass('sticky')
        $(document.body).css('padding-top', this._initialHeight)
        this._addEventListeners()
      }
    }

    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _isElementInViewport (el, topOffset) {
      let rect = el.getBoundingClientRect()

      if (!topOffset) {
        topOffset = 0
      }

      return rect.bottom > topOffset &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    }

    _scrollHandler() {
      if (this._throttleTimer) {
        window.clearTimeout(this._throttleTimer)
      }

      this._throttleTimer = window.setTimeout(this._managePageScroll.bind(this), 100)
    }

    _managePageScroll() {
      if (this._isElementInViewport(this._triggerElm, 0)) {
        $(Selector.SUPRA_BAR).show()
        $(document.body).css('padding-top', this._initialHeight)
      } else {
        $(Selector.SUPRA_BAR).hide()
        $(document.body).css('padding-top', this._initialHeight - this._initialSupraHeight)
      }
    }

    _addEventListeners() {
      if (window.innerWidth >= Dimension.MEDIA_BP_SM) {
        window.addEventListener(Event.PAGE_SCROLL, this._scrollHandler.bind(this))
      }
    }


    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        let $this   = $(this)
        let data    = $this.data(DATA_KEY)
        let _config = $.extend(
          {},
          Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new Navbar(this, _config)
          $this.data(DATA_KEY, data)
        }

        if (typeof config === 'string') {
          if (data[config] === undefined) {
            throw new Error(`No method named "${config}"`)
          }
          data[config]()
        }
      })
    }

  }

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Navbar._jQueryInterface
  $.fn[NAME].Constructor = Navbar
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Navbar._jQueryInterface
  }

  return Navbar

})(jQuery)

export default Navbar
