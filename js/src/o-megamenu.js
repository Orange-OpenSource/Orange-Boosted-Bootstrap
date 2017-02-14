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
  const ARROW_LEFT_KEYCODE  = 37 // KeyboardEvent.which value for left arrow key
  const ARROW_RIGHT_KEYCODE = 39 // KeyboardEvent.which value for right arrow key
  const ARROW_UP_KEYCODE  = 38 // KeyboardEvent.which value for up arrow key
  const ARROW_DOWN_KEYCODE = 40 // KeyboardEvent.which value for down arrow key

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
    MEGAMENU_PANEL : '.mega-menu-panel',
    MEGAMENU_PANEL_NAV : '.mega-menu-panel > .container > .navbar-nav',
    MEGAMENU_NAV : '.nav-link + .navbar-nav',
    NAV_MENU : '.navbar-nav',
    NAV_ITEM : '.nav-item',
    NAV_LINK : '.nav-link',
    NAV_LINK_COLLAPSE : '.nav-link[data-toggle=collapse]',
    NAV_LINK_BACK : '.nav-link.back',
    NAV_LINK_EXPANDED : '.nav-link[aria-expanded=true]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class MegaMenu {

    constructor(element) {
      this._element = element
      this._$navLinks = $(this._element).find(Selector.NAV_LINK)
      this._$goForwardLinks = $(this._element).find(Selector.MEGAMENU_NAV).prev(Selector.NAV_LINK)
      this._$goBackLinks = $(this._element).find(Selector.NAV_LINK_BACK)
      this._$topCollapseMenus = $(this._element).find(Selector.MEGAMENU_PANEL)
      this._$navLinkCollapses = $(this._element).find(Selector.NAV_LINK_COLLAPSE)
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
      this._$goForwardLinks.on('click', (event) => this._goForward(event))
      this._$goBackLinks.on('click', (event) => this._goBackward(event))
      this._$navLinks.on('keydown', (event) => this._manageKeyDown(event))
      this._$topCollapseMenus.on('shown.bs.collapse', this._collapseFocus)
      this._$navLinkCollapses.on('click', (event) => this._handleCollapseToggle(event))
    }

    _addAriaAttributes(element) {
      const $subNavs = $(element).find('.nav-link + .navbar-nav')

      $(element).attr('role', 'application')
      $(element).find('> .navbar-nav').attr('role', 'menu')
      $(element).find(Selector.MEGAMENU_PANEL).attr('role', 'menu')
      $(element).find('.nav-link[data-toggle=collapse]').attr('role', 'menuitem')
      $(element).find(Selector.NAV_LINK_BACK).attr({'aria-hidden': true})
      $(element).find(Selector.NAV_ITEM).attr('role', 'presentation')

      $subNavs.each(function() {
        const navId = Util.getUID(NAME)
        const $thisNavToggler = $(this).prev(Selector.NAV_LINK)
        const $thisNav = $(this)
        const $thisNavBackLink = $thisNav.find(Selector.NAV_LINK_BACK)
        const $topMenu = $(this).closest(Selector.NAV_MENU).parent().closest(Selector.NAV_MENU).prev(Selector.NAV_LINK)
        let goBackLabel = 'go back to ' + $topMenu.text() + ' menu'

        if(!$topMenu.length) {
          goBackLabel = 'go back to ' + $(this).closest(Selector.MEGAMENU_PANEL).prev(Selector.NAV_LINK).text() + ' menu'
        }

        $thisNav.attr({'id': navId, 'role': 'menu'})
        $thisNavToggler.attr({'role': 'menuitem', 'aria-controls': navId, 'aria-expanded': false, 'aria-haspopup': true})
        $thisNavBackLink.attr({'role': 'menuitem', 'aria-controls': navId, 'aria-label': goBackLabel})
      })
    }

    _manageKeyDown(event) {
      const $thisTarget = $(event.target)

      // test key code
      if (/input|textarea/i.test(event.target.tagName)) {
        return
      }

      // proceed according to key code
      switch(event.which){
        case ARROW_LEFT_KEYCODE:
          this._goBackward(event)
          break
        case ARROW_RIGHT_KEYCODE:
          this._goForward(event)
          break
        case ARROW_UP_KEYCODE:
          // focus prev nav link
          $thisTarget.parent().prev().find('>.nav-link').not(Selector.NAV_LINK_BACK).trigger('focus')
          break
        case ARROW_DOWN_KEYCODE:
          // focus next nav link
          $thisTarget.parent().next().find('>.nav-link').trigger('focus')
          break
        default:
          return
      }
    }

    _collapseFocus(){
      $(this).find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus')
    }

    _handleCollapseToggle(e){
      const $this = $(e.target)
      const $thisCollapse = $($this.attr('href'))

      this._$topCollapseMenus.not($thisCollapse).collapse('hide')
    }

    _goForward(e) {
      e.preventDefault();
      const $this = $(e.target)
      const $thisNav = $this.closest(Selector.NAV_MENU)
      const $targetNav =  $this.next(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $thisNavToggler = $this
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10)
      const navWidth = $rootNav.width()
      const currentTranslatePercentage = 100 * currentTranslatePos / navWidth

      if(!$this.next(Selector.NAV_MENU).length || $rootNav.hasClass(ClassName.TRANSITIONING)) {
          return false
      }
      $rootNav.addClass(ClassName.TRANSITIONING)

      // hide all nav on same level
      $thisNav.find(Selector.NAV_MENU).hide()

      // show target navbar-nav
      $targetNav.show()

      // adapt main collapse height to target height
      $(Selector.MEGAMENU).height($targetNav.height())

      // make only visible elements focusable
      if(currentTranslatePercentage === 0) {
          $rootNav.find('>.nav-item .nav-link').attr({'tabindex': -1, 'aria-hidden': true})
      }
      $thisNav.find(Selector.NAV_LINK).attr({'tabindex': -1, 'aria-hidden': true})
      $targetNav.find(Selector.NAV_LINK).attr({'tabindex': 0, 'aria-hidden': false})

      // translate menu
      $rootNav.css('transform', 'translateX('+(currentTranslatePercentage - 100)+'%)')

      // focus on target nav first item
      $rootNav.one('transitionend', function() {
        $thisNavToggler.attr('aria-expanded', true)
        $targetNav.find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus')
        $rootNav.removeClass(ClassName.TRANSITIONING)
      })
    }

    _goBackward(e) {
      e.preventDefault()

      const $this = $(e.target)
      const $thisNav = $this.closest(Selector.NAV_MENU)
      const $targetNav = $thisNav.parent().closest(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $targetNavToggler = $targetNav.find(Selector.NAV_LINK_EXPANDED)
      const $thisNavBackLink = $this
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[4], 10)
      const navWidth = $rootNav.width()
      const currentTranslatePercentage = 100 * currentTranslatePos / navWidth

      if(currentTranslatePercentage === 0 || $rootNav.hasClass(ClassName.TRANSITIONING)) {
          return false
      }
      $rootNav.addClass(ClassName.TRANSITIONING)

      // make only visible elements focusable
      $targetNav.find(Selector.NAV_LINK).attr({'tabindex': 0, 'aria-hidden': false})
      if(currentTranslatePercentage === -100) {
        // reset main collapse height
        $(Selector.MEGAMENU).css('height', 'auto')
        $rootNav.find('>.nav-item .nav-link').attr({'tabindex': 0, 'aria-hidden': false})
      }

      // translate menu
      $rootNav.css('transform', 'translateX('+(currentTranslatePercentage + 100)+'%)')

      // focus on target nav first item
      $rootNav.one('transitionend', function() {
        $targetNavToggler.attr('aria-expanded', false)
        $targetNavToggler.trigger('focus')
        $thisNav.hide()
        $rootNav.removeClass(ClassName.TRANSITIONING)
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
