import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.6): o-navbar.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Navbar = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'navbar'
  const VERSION             = '4.0.0-alpha.6'
  const DATA_KEY            = 'bs.navbar'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const BREAKPOINT = 768

  const Default = {
    sticky : false,
    trigger : ''
  }

  const DefaultType = {
    sticky : 'boolean',
    trigger : 'string'
  }

  const Selector = {
    CONFORTP_BAR : '#accessibilitytoolbarGraphic',
    SUPRA_BAR : '.navbar.supra',
    NAVBAR : '.navbar:not(.supra)',
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

      this._addAria()

      if (this._config.sticky) {
        $(this._element).addClass('fixed-header')
        $(Selector.MEGAMENU_PANEL).addClass('sticky')
        $(document.body).css('padding-top', this._initialHeight)

        $(window).on('scroll', () => {
          const Scroll = $(window).scrollTop()
          if (Scroll > 0) {
            $(Selector.NAVBAR).addClass('minimized')
          } else {
            $(Selector.NAVBAR).removeClass('minimized')
          }
        })
      }

      if (this._config.hideSupra) {
        $(window).on('scroll', () => {
          if ($(window).innerWidth() < BREAKPOINT) {
            return
          }

          const Scroll = $(window).scrollTop()

          if (Scroll > 0) {
            $(Selector.SUPRA_BAR).hide()
          } else {
            $(Selector.SUPRA_BAR).show()
          }
        })
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

    _addAria() {
      $(this._element).find('.navbar .nav-link[data-toggle]').attr('aria-haspopup', true)
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $this   = $(this)
        let data    = $this.data(DATA_KEY)
        const _config = $.extend(
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
