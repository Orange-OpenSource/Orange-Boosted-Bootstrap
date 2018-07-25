import $ from 'jquery'
import Util from './util'

/* eslint no-magic-numbers: ["error", { "ignore": [1,2] }] */

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.1.3): o-megamenu.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const MegaMenu = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'megamenu'
  const VERSION = '4.1.3'
  const DATA_KEY = 'bs.megamenu'
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  const ARROW_LEFT_KEYCODE = 37 // KeyboardEvent.which value for left arrow key
  const ARROW_RIGHT_KEYCODE = 39 // KeyboardEvent.which value for right arrow key
  const ARROW_UP_KEYCODE = 38 // KeyboardEvent.which value for up arrow key
  const ARROW_DOWN_KEYCODE = 40 // KeyboardEvent.which value for down arrow key
  const TIMEOUT = 1000 // Timeout befor focusing first element
  const PERCENTAGE = 100 // Width slide proportion
  const SPLITLENGHT = 4

  const ClassName = {
    TRANSITIONING: 'transitioning'
  }

  const Selector = {
    MEGAMENU    : '.mega-menu',
    ROOT_NAV : '.mega-menu > .navbar-nav',
    MEGAMENU_PANEL : '.mega-menu-panel',
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
    constructor(element, config) {
      this._element = element
      this._$navLinks = $(this._element).find(Selector.NAV_LINK)
      this._$goForwardLinks = $(this._element).find(Selector.MEGAMENU_NAV).prev(Selector.NAV_LINK)
      this._$goBackLinks = $(this._element).find(Selector.NAV_LINK_BACK)
      this._$topCollapseMenus = $(this._element).find(Selector.MEGAMENU_PANEL)
      this._$navLinkCollapses = $(this._element).find(Selector.NAV_LINK_COLLAPSE)
      this._config = config
      if (typeof this._config.noFocus === 'undefined') {
        this._config.noFocus = false
      }
      this._addEventListeners()
      this._addAriaAttributes(this._element)
      this.goTo = this._initPosition
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
      if (!this._config.noFocus) {
        this._$topCollapseMenus.on('shown.bs.collapse', this._collapseFocus)
      }
      this._$navLinkCollapses.on('click', (event) => this._handleCollapseToggle(event))
    }

    _addAriaAttributes(element) {
      const $subNavs = $(element).find('.nav-link + .navbar-nav')

      $(element).attr('role', 'application')
      $(element).find('> .navbar-nav').attr('role', 'menu')
      $(element).find(Selector.MEGAMENU_PANEL).attr('role', 'menu')
      $(element).find('.nav-link[data-toggle=collapse]').attr('role', 'menuitem')
      $(element).find(Selector.NAV_LINK_BACK).attr({
        'aria-hidden': true
      })
      $(element).find(Selector.NAV_ITEM).attr('role', 'presentation')

      $subNavs.each(function () {
        const navId = Util.getUID(NAME)
        const $thisNavToggler = $(this).prev(Selector.NAV_LINK)
        const $thisNav = $(this)
        const $thisNavBackLink = $thisNav.find(Selector.NAV_LINK_BACK)
        const $topMenu = $(this).closest(Selector.NAV_MENU).parent().closest(Selector.NAV_MENU).prev(Selector.NAV_LINK)
        let goBackLabel = `go back to ${$topMenu.text()} menu`

        if (!$topMenu.length) {
          goBackLabel = `go back to ${$(this).closest(Selector.MEGAMENU_PANEL).prev(Selector.NAV_LINK).text()} menu`
        }

        $thisNav.attr({
          id: navId,
          role: 'menu'
        })
        $thisNavToggler.attr({
          role: 'menuitem',
          'aria-controls': navId,
          'aria-expanded': false,
          'aria-haspopup': true
        })
        $thisNavBackLink.attr({
          role: 'menuitem',
          'aria-controls': navId,
          'aria-label': goBackLabel
        })
      })
    }

    _initPosition(target) {
      if (!$(target).length) {
        return
      }

      const $target = $(target).first()
      const position = $target.parents().index(this._element)
      const rootPosition = $('.mega-menu-panel .nav-link').first().parents().index($('.mega-menu'))
      const translatePercentage = -(position - rootPosition) * PERCENTAGE / 2
      const $thisNav = $target.closest(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)

      $rootNav.addClass(ClassName.TRANSITIONING)

      // open collapse
      if ($target.attr('data-toggle') === 'collapse') {
        $target.siblings(Selector.MEGAMENU_PANEL).collapse('show')
        this._$topCollapseMenus.not($target.siblings(Selector.MEGAMENU_PANEL)).collapse('hide')
        $(this._element).height('auto')
        $rootNav.css('transform', 'translateX(0%)')
      } else {
        $target.closest(Selector.MEGAMENU_PANEL).collapse('show')
        this._$topCollapseMenus.not($target.closest(Selector.MEGAMENU_PANEL)).collapse('hide')

        // show menu and hide other
        $target.parents(Selector.NAV_MENU).show()

        // set aria on parent links
        $target.parents(Selector.NAV_ITEM).find('> .nav-link').not($target).attr({
          tabindex: -1,
          'aria-hidden': true,
          'aria-expanded': true
        })

        // translate to pos
        $rootNav.css('transform', `translateX(${translatePercentage}%)`)
        if (translatePercentage) {
          // adapt main collapse height to target height
          $(this._element).height($thisNav.height())
        } else {
          $(this._element).height('auto')
        }
      }

      // set focus on target link
      setTimeout(() =>  {
        if (!this._config.noFocus) {
          // set focus on target link
          $target.trigger('focus')
        }

        $rootNav.removeClass(ClassName.TRANSITIONING)
      }, TIMEOUT)
    }

    _manageKeyDown(event) {
      const $thisTarget = $(event.target)

      // test key code
      if (/input|textarea/i.test(event.target.tagName)) {
        return
      }

      // proceed according to key code
      switch (event.which) {
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
      }
    }

    _collapseFocus() {
      $(this).find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus')
    }

    _handleCollapseToggle(e) {
      const $this = $(e.target)
      const $thisCollapse = $($this.attr('href'))

      this._$topCollapseMenus.not($thisCollapse).collapse('hide')
    }

    _goForward(e) {
      e.preventDefault()
      const $this = $(e.target)
      const $thisNav = $this.closest(Selector.NAV_MENU)
      const $targetNav =  $this.next(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $thisNavToggler = $this
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10)
      const navWidth = $rootNav.width()
      const currentTranslatePercentage = PERCENTAGE * currentTranslatePos / navWidth

      if (!$this.next(Selector.NAV_MENU).length || $rootNav.hasClass(ClassName.TRANSITIONING)) {
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
      if (!currentTranslatePercentage) {
        $rootNav.find('>.nav-item .nav-link').attr({
          tabindex: -1,
          'aria-hidden': true
        })
      }
      $thisNav.find(Selector.NAV_LINK).attr({
        tabindex: -1,
        'aria-hidden': true
      })
      $targetNav.find(Selector.NAV_LINK).attr({
        tabindex: 0,
        'aria-hidden': false
      })

      // translate menu
      $rootNav.css('transform', `translateX(${currentTranslatePercentage - PERCENTAGE}%)`)

      // focus on target nav first item
      $rootNav.one('transitionend', () => {
        $thisNavToggler.attr('aria-expanded', true)
        $targetNav.find(Selector.NAV_LINK).not(Selector.NAV_LINK_BACK).first().trigger('focus')
        $rootNav.removeClass(ClassName.TRANSITIONING)
      })
      return true
    }

    _goBackward(e) {
      e.preventDefault()

      const $this = $(e.target)
      const $thisNav = $this.closest(Selector.NAV_MENU)
      const $targetNav = $thisNav.parent().closest(Selector.NAV_MENU)
      const $rootNav = $(Selector.ROOT_NAV)
      const $targetNavToggler = $targetNav.find(Selector.NAV_LINK_EXPANDED)
      const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10)
      const navWidth = $rootNav.width()
      const currentTranslatePercentage = PERCENTAGE * currentTranslatePos / navWidth

      if (!currentTranslatePercentage || $rootNav.hasClass(ClassName.TRANSITIONING)) {
        return false
      }

      $rootNav.addClass(ClassName.TRANSITIONING)

      // make only visible elements focusable
      $targetNav.find(Selector.NAV_LINK).attr({
        tabindex: 0,
        'aria-hidden': false
      })
      if (currentTranslatePercentage === -PERCENTAGE) {
        // reset main collapse height
        $(Selector.MEGAMENU).css('height', 'auto')
        $rootNav.find('>.nav-item .nav-link').attr({
          tabindex: 0,
          'aria-hidden': false
        })
      }

      // translate menu
      $rootNav.css('transform', `translateX(${currentTranslatePercentage + PERCENTAGE}%)`)

      // focus on target nav first item
      $rootNav.one('transitionend', () => {
        $targetNavToggler.attr('aria-expanded', false)
        $targetNavToggler.trigger('focus')
        $thisNav.hide()
        $rootNav.removeClass(ClassName.TRANSITIONING)
      })
      return true
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $element = $(this)

        if (!$element.is(Selector.MEGAMENU)) {
          throw new Error('Element is not a mega menu')
        }

        if (!config) {
          config = {}
        } else if (config.noFocus && typeof config.noFocus !== 'boolean') {
          // param = true
          throw new Error('no-focus parameter must be boolean')
        }

        let data       = $element.data(DATA_KEY)

        if (!data) {
          data = new MegaMenu(this, config)
          $element.data(DATA_KEY, data)
        }

        if (config.target) {
          if (typeof config.target !== 'string' || !/^[.#].*/.test(config.target)) {
            throw new TypeError(`Selector "${config.target}" is not supported`)
          }

          data.goTo(config.target)
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
})($)

export default MegaMenu
