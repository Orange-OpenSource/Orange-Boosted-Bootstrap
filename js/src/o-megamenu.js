import Util from './util'

/* eslint no-magic-numbers: ["error", { "ignore": [1,2] }] */

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.6): o-megamenu.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const MegaMenu = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'megamenu'
  const VERSION             = '4.0.0-alpha.6'
  const DATA_KEY            = 'bs.megamenu'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Event = {
  }

  const ClassName = {
    TRANSITIONING: 'transitioning'
  }

  const Dimension = {
  }

  const Selector = {
    MEGAMENU    : '.mega-menu',
    ROOT_NAV : '.mega-menu > .navbar-nav',
    MEGAMENU_PANEL_NAV : '.mega-menu-panel > .container > .navbar-nav',
    MEGAMENU_NAV : '.nav-link + .navbar-nav',
    NAV_MENU : '.navbar-nav',
    NAV_LINK : '.nav-link',
    NAV_BACK_LINK : '.nav-link.back'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class MegaMenu {

    constructor(element) {
      this._element = element
      this._$goForwardLinks = $(this._element).find(Selector.MEGAMENU_NAV).prev(Selector.NAV_LINK)
      this._$goBackLinks = $(Selector.NAV_BACK_LINK)
      this._addEventListeners()
      this._addAriaAttributes(this._element)
    }

    // getters

    static get VERSION() {
      return VERSION
    }

    // public

    // private

    _addEventListeners() {
      this._$goForwardLinks.on('click', this._goForward)
      this._$goBackLinks.on('click', this._goBackward)
    }

    _addAriaAttributes(element) {
      const $subNavs = $(element).find('.nav-link + .navbar-nav')

      $subNavs.each(function() {
        const navId = Util.getUID(NAME)
        const $thisNavToggler = $(this).prev(Selector.NAV_LINK)
        const $thisNav = $(this)
        const $thisNavBackLink = $thisNav.find(Selector.NAV_BACK_LINK)

        $thisNav.attr('id', navId)
        $thisNavToggler.attr({'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true})
        $thisNavBackLink.attr({'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true})
      })
    }

    _goForward(e) {
      e.preventDefault();

      const $thisNav = $(this).closest(Selector.NAV_MENU)
      const $targetNav =  $(this).next(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $thisNavToggler = $(this)
      const $targetNavBackLink = $targetNav.find(Selector.NAV_BACK_LINK)
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10)
      const navWidth = $rootNav.width()

      if($rootNav.hasClass(ClassName.TRANSITIONING)) {
          return false
      }

      // hide all nav on same level
      $thisNav.find(Selector.NAV_MENU).hide()

      // show target navbar-nav
      $targetNav.show()

      // make only visible elements focusable
      if(currentTranslatePos === 0) {
          $rootNav.find('>.nav-item .nav-link').attr('tabindex', '-1')
      }
      $thisNav.find(Selector.NAV_LINK).attr('tabindex', '-1')
      $targetNav.find(Selector.NAV_LINK).attr('tabindex', '0')

      // handle expanded state
      $thisNavToggler.attr('aria-expanded', false)

      // translate menu
      $rootNav.addClass(ClassName.TRANSITIONING)
      $rootNav.css('transform', 'translateX('+(currentTranslatePos - navWidth)+'px)')

      // focus on target nav first item
      $rootNav.one('transitionend', function() {
        $rootNav.removeClass(ClassName.TRANSITIONING)
        $targetNav.find(Selector.NAV_LINK).first().trigger('focus')
        $targetNavBackLink.attr('aria-expanded', true)
      })
    }

    _goBackward(e) {
      e.preventDefault();

      const $thisNav = $(this).closest(Selector.NAV_MENU)
      const $targetNav = $thisNav.parent().closest(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $targetNavToggler = $targetNav.prev(Selector.NAV_LINK)
      const $thisNavBackLink = $(this)
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10)
      const navWidth = $rootNav.width()

      if($rootNav.hasClass(ClassName.TRANSITIONING)) {
          return false
      }

      // make only visible elements focusable
      $targetNav.find(Selector.NAV_LINK).attr('tabindex', '0')
      if(currentTranslatePos === -navWidth) {
          $rootNav.find('>.nav-item .nav-link').attr('tabindex', '0')
      }
      $thisNav.find(Selector.NAV_LINK).attr('tabindex', '-1')

      // handle expanded state
      $thisNavBackLink.attr('aria-expanded', false)

      // translate menu
      $rootNav.addClass(ClassName.TRANSITIONING)
      $rootNav.css('transform', 'translateX('+(currentTranslatePos + navWidth)+'px)')

      // focus on target nav first item
      $rootNav.one('transitionend', function() {
        $rootNav.removeClass(ClassName.TRANSITIONING)
        $targetNav.find(Selector.NAV_LINK).first().trigger('focus')
        $targetNavToggler.attr('aria-expanded', true)
      })
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $this   = $(this)
        let data    = $this.data(DATA_KEY)
        const _config = $.extend(
          {},
        //   Default,
          $this.data(),
          typeof config === 'object' && config
        )

        if (!data) {
          data = new MegaMenu(this, _config)
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

  $.fn[NAME]             = MegaMenu._jQueryInterface
  $.fn[NAME].Constructor = MegaMenu
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return MegaMenu._jQueryInterface
  }

  return MegaMenu

})(jQuery)

export default MegaMenu
