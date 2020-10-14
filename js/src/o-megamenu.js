/**
 * --------------------------------------------------------------------------
 * Boosted (v4.5.3): o-megamenu.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'
import Util from './util'

/* eslint no-magic-numbers: ["error", { "ignore": [-100,-1,1,2,100] }] */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'megamenu'
const VERSION = '4.5.3'
const DATA_KEY = 'bs.megamenu'
const JQUERY_NO_CONFLICT = $.fn[NAME]
const ARROW_LEFT_KEYCODE = 37 // KeyboardEvent.which value for left arrow key
const ARROW_RIGHT_KEYCODE = 39 // KeyboardEvent.which value for right arrow key
const ARROW_UP_KEYCODE = 38 // KeyboardEvent.which value for up arrow key
const ARROW_DOWN_KEYCODE = 40 // KeyboardEvent.which value for down arrow key
const TIMEOUT = 1000 // Timeout before focusing first element
const SPLITLENGHT = 4
const CLASSLENGTH = 'navbar-expand-'.length

const BreakPoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440
}

const CLASS_NAME_TRANSITIONING = 'transitioning'
const CLASS_NAME_ACTIVE = 'active'

const SELECTOR_MEGAMENU = '.mega-menu'
const SELECTOR_PARENT = '.navbar'
const SELECTOR_ROOT_NAV = '.mega-menu > .navbar-nav'
const SELECTOR_MEGAMENU_PANEL = '.mega-menu-panel'
const SELECTOR_MEGAMENU_NAV = '.nav-link + .navbar-nav'
const SELECTOR_NAV_MENU = '.navbar-nav'
const SELECTOR_NAV_ITEM = '.nav-item'
const SELECTOR_NAV_LINK = '.nav-link'
const SELECTOR_NAV_LINK_COLLAPSE = '.nav-link[data-toggle=collapse]'
const SELECTOR_NAV_LINK_BACK = '.nav-link.back'
const SELECTOR_NAV_LINK_EXPANDED = '.nav-link[aria-expanded=true]'
const SELECTOR_CURRENT = '.nav-link[aria-current="page"]'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class MegaMenu {
  constructor(element, config) {
    this._element = element
    this._parent = $(this._element).parents(SELECTOR_PARENT)
    this._$parentNavbarClasses = this._parent.attr('class')
    // default if no class navbar-expand-* navbar is always mobile
    this._$mediaQuery = window.matchMedia('(min-width: 0px)')
    this._$isRTL = document.dir === 'rtl' ? -1 : 1
    if (typeof this._$parentNavbarClasses !== 'undefined' && this._$parentNavbarClasses.indexOf('navbar-expand-') !== -1) {
      if (this._parent.hasClass('navbar-expand-xxl')) {
        this._$breakpoint = 'xxl'
      } else {
        this._$breakpointIndex = this._$parentNavbarClasses.indexOf('navbar-expand-') + CLASSLENGTH
        this._$breakpoint = this._$parentNavbarClasses.slice(this._$breakpointIndex, this._$breakpointIndex + 2)
      }

      this._$mediaQuery = window.matchMedia(`(max-width: ${BreakPoints[this._$breakpoint]}px)`)
    }

    this._$navLinks = $(this._element).find(SELECTOR_NAV_LINK)
    this._$goForwardLinks = $(this._element).find(SELECTOR_MEGAMENU_NAV).prev(SELECTOR_NAV_LINK)
    this._$goBackLinks = $(this._element).find(SELECTOR_NAV_LINK_BACK)
    this._$topCollapseMenus = $(this._element).find(SELECTOR_MEGAMENU_PANEL)
    this._$navLinkCollapses = $(this._element).find(SELECTOR_NAV_LINK_COLLAPSE)
    this._config = config
    if (typeof this._config.noFocus === 'undefined') {
      this._config.noFocus = false
    }

    this._addEventListeners()
    if (this._$mediaQuery.matches) {
      this._addAriaAttributes(this._element)
    }

    this.goTo = this._initPosition

    window.addEventListener('resize', () => {
      if (this._$mediaQuery.matches) {
        this._addAriaAttributes(this._element)
      } else {
        this._removeAriaAttributes(this._element)
        $(this._element).find(SELECTOR_NAV_MENU).first().attr('style', null)
        $(this._element).find(SELECTOR_NAV_MENU).show()
        $(this._element).height('auto')
      }
    })
  }

  // getters

  static get VERSION() {
    return VERSION
  }

  // public

  // private

  _addEventListeners() {
    this._$goForwardLinks.on('click', event => this._goForward(event))
    this._$goBackLinks.on('click', event => this._goBackward(event))
    this._$navLinks.on('keydown', event => this._manageKeyDown(event))
    if (!this._config.noFocus) {
      this._$topCollapseMenus.on('shown.bs.collapse', this._collapseFocus)
    }

    $(this._element).on('hidden.bs.collapse', event => this._handleCollapseToggle(event))
    this._$navLinkCollapses.on('click', event => this._handleCollapseToggle(event))
  }

  _addAriaAttributes(element) {
    const $subNavs = $(element).find(SELECTOR_MEGAMENU_NAV)
    const $parents = $(element).find(SELECTOR_CURRENT).parents(SELECTOR_NAV_ITEM)

    $(element).attr('role', 'application')
    $(element).find('> .navbar-nav').attr('role', 'menu')
    $(element).find(SELECTOR_MEGAMENU_PANEL).attr('role', 'menu')
    $(element).find('.nav-link[data-toggle=collapse]').attr('role', 'menuitem')
    $(element).find(SELECTOR_NAV_LINK_BACK).attr('aria-hidden', 'true')
    $(element).find(SELECTOR_NAV_ITEM).attr('role', 'presentation')

    $parents.each(function () {
      $(this).find(SELECTOR_NAV_LINK).first().attr('aria-current', 'true')
    })

    $subNavs.each(function () {
      const navId = Util.getUID(NAME)
      const $thisNavToggler = $(this).prev(SELECTOR_NAV_LINK)
      const $thisNav = $(this)
      const $thisNavBackLink = $thisNav.find(SELECTOR_NAV_LINK_BACK)

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
        'aria-controls': navId
      })
    })
  }

  _removeAriaAttributes(element) {
    const $subNavs = $(element).find(SELECTOR_MEGAMENU_NAV)

    $(element).attr('role', null)
    $(element).find('> .navbar-nav').attr('role', null)
    $(element).find(SELECTOR_MEGAMENU_PANEL).attr('role', null)
    $(element).find('.nav-link[data-toggle=collapse]').attr('role', null)
    $(element).find(SELECTOR_NAV_LINK).attr({
      'aria-hidden': null,
      tabindex: null
    })
    $(element).find(SELECTOR_NAV_ITEM).attr('role', null)
    $(element).find(SELECTOR_NAV_MENU).attr('style', null)

    $subNavs.each(function () {
      const $thisNavToggler = $(this).prev(SELECTOR_NAV_LINK)
      const $thisNav = $(this)
      const $thisNavBackLink = $thisNav.find(SELECTOR_NAV_LINK_BACK)

      $thisNav.attr('role', null)
      $thisNavToggler.attr({
        role: null,
        'aria-controls': null,
        'aria-expanded': null,
        'aria-haspopup': null
      })
      $thisNavBackLink.attr({
        role: null,
        'aria-controls': null
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
    // @TODO WTF RTL?
    const translatePercentage = -(position - rootPosition) * 100 / 2
    const $thisNav = $target.closest(SELECTOR_NAV_MENU)
    const $rootNav = $target.closest(SELECTOR_ROOT_NAV)

    $rootNav.addClass(CLASS_NAME_TRANSITIONING)
    this._$navLinkCollapses.removeClass(CLASS_NAME_ACTIVE)

    // open collapse
    if ($target.attr('data-toggle') === 'collapse') {
      $target.siblings(SELECTOR_MEGAMENU_PANEL).collapse('show')
      $target.addClass(CLASS_NAME_ACTIVE)
      this._$topCollapseMenus.not($target.siblings(SELECTOR_MEGAMENU_PANEL)).collapse('hide')
      $(this._element).height('auto')
      $rootNav.css('transform', 'translateX(0%)')
    } else {
      $target.closest(SELECTOR_MEGAMENU_PANEL).collapse('show')
      $target.closest(SELECTOR_NAV_LINK_COLLAPSE).addClass(CLASS_NAME_ACTIVE)
      this._$topCollapseMenus.not($target.closest(SELECTOR_MEGAMENU_PANEL)).collapse('hide')

      if (this._$mediaQuery.matches) {
        // show menu and hide other
        $target.parents(SELECTOR_NAV_MENU).show()

        // set aria on parent links
        $target.parents(SELECTOR_NAV_ITEM).find('> .nav-link').not($target).attr({
          tabindex: -1,
          'aria-hidden': true,
          'aria-expanded': true
        })

        // translate to pos
        $rootNav.css('transform', `translateX(${translatePercentage * this._$isRTL}%)`)
        if (translatePercentage) {
          // adapt main collapse height to target height
          $(this._element).height($thisNav.height())
        } else {
          $(this._element).height('auto')
        }
      }
    }

    // set focus on target link
    setTimeout(() => {
      if (!this._config.noFocus) {
        // set focus on target link
        $target.trigger('focus')
      }

      $rootNav.removeClass(CLASS_NAME_TRANSITIONING)
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
        $thisTarget.parent().prev().find('>.nav-link').not(SELECTOR_NAV_LINK_BACK).trigger('focus')
        break
      case ARROW_DOWN_KEYCODE:
        // focus next nav link
        $thisTarget.parent().next().find('>.nav-link').trigger('focus')
        break
      default:
    }
  }

  _collapseFocus() {
    $(this).find(SELECTOR_NAV_LINK).not(SELECTOR_NAV_LINK_BACK).first().trigger('focus')
  }

  _handleCollapseToggle(event) {
    const $this = $(event.target)
    const $thisCollapse = $($this.attr('href'))

    if ($this.is($(this._element))) {
      $this.children(SELECTOR_NAV_MENU).css('transform', 'translateX(0%)')
      $this.height('auto')
      $this.find(SELECTOR_NAV_LINK_EXPANDED).attr({
        'aria-expanded': false,
        'aria-hidden': null,
        tabindex: null
      })
      $this.find(SELECTOR_NAV_LINK_EXPANDED).next(SELECTOR_NAV_MENU).hide()
    } else {
      $this.toggleClass(CLASS_NAME_ACTIVE)
    }

    this._$navLinkCollapses.not($this).removeClass(CLASS_NAME_ACTIVE)
    this._$topCollapseMenus.not($thisCollapse).removeClass(CLASS_NAME_ACTIVE).collapse('hide')
  }

  _goForward(event) {
    if (!this._$mediaQuery.matches) {
      return false
    }

    event.preventDefault()
    const $this = $(event.target)
    const $thisNav = $this.closest(SELECTOR_NAV_MENU)
    const $targetNav = $this.next(SELECTOR_NAV_MENU)
    const $rootNav = $this.closest(SELECTOR_ROOT_NAV)
    const $thisNavToggler = $this
    const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10)
    const navWidth = $rootNav.width()
    // @TODO WTF RTL?
    const currentTranslatePercentage = 100 * currentTranslatePos / navWidth

    if (!$this.next(SELECTOR_NAV_MENU).length || $rootNav.hasClass(CLASS_NAME_TRANSITIONING)) {
      return false
    }

    $rootNav.addClass(CLASS_NAME_TRANSITIONING)

    // hide all nav on same level
    $thisNav.find(SELECTOR_NAV_MENU).hide()

    // show target navbar-nav
    $targetNav.show()

    // adapt main collapse height to target height
    $(SELECTOR_MEGAMENU).height($targetNav.height())

    // make only visible elements focusable
    if (!currentTranslatePercentage) {
      $rootNav.find('>.nav-item .nav-link').attr({
        tabindex: -1,
        'aria-hidden': true
      })
    }

    $thisNav.find(SELECTOR_NAV_LINK).attr({
      tabindex: -1,
      'aria-hidden': true
    })
    $targetNav.find(SELECTOR_NAV_LINK).attr({
      tabindex: 0,
      'aria-hidden': false
    })

    // translate menu
    // @TODO WTF RTL?
    $rootNav.css('transform', `translateX(${currentTranslatePercentage - 100 * this._$isRTL}%)`)

    // focus on target nav first item
    $rootNav.one('transitionend', () => {
      $thisNavToggler.attr('aria-expanded', true)
      $targetNav.find(SELECTOR_NAV_LINK).not(SELECTOR_NAV_LINK_BACK).first().trigger('focus')
      $rootNav.removeClass(CLASS_NAME_TRANSITIONING)
    })
    return true
  }

  _goBackward(event) {
    if (!this._$mediaQuery.matches) {
      return false
    }

    event.preventDefault()

    const $this = $(event.target)
    const $thisNav = $this.closest(SELECTOR_NAV_MENU)
    const $targetNav = $thisNav.parent().closest(SELECTOR_NAV_MENU)
    const $rootNav = $this.closest(SELECTOR_ROOT_NAV)
    const $targetNavToggler = $targetNav.find(SELECTOR_NAV_LINK_EXPANDED)
    const currentTranslatePos = parseInt($rootNav.css('transform').split(',')[SPLITLENGHT], 10)
    const navWidth = $rootNav.width()
    // @TODO WTF RTL?
    const currentTranslatePercentage = 100 * currentTranslatePos / navWidth

    if (!currentTranslatePercentage || $rootNav.hasClass(CLASS_NAME_TRANSITIONING)) {
      return false
    }

    $rootNav.addClass(CLASS_NAME_TRANSITIONING)
    // reset main collapse height
    $(SELECTOR_MEGAMENU).height('auto')

    // make only visible elements focusable
    $targetNav.find(SELECTOR_NAV_LINK).attr({
      tabindex: 0,
      'aria-hidden': false
    })
    // @TODO WTF RTL?
    if (currentTranslatePercentage === -100) {
      $rootNav.find('>.nav-item .nav-link').attr({
        tabindex: 0,
        'aria-hidden': false
      })
    }

    // translate menu
    // @TODO WTF RTL?
    $rootNav.css('transform', `translateX(${currentTranslatePercentage + 100 * this._$isRTL}%)`)

    // focus on target nav first item
    $rootNav.one('transitionend', () => {
      $targetNavToggler.attr('aria-expanded', false)
      $targetNavToggler.trigger('focus')
      $thisNav.hide()
      $rootNav.removeClass(CLASS_NAME_TRANSITIONING)
    })
    return true
  }

  // static

  static _jQueryInterface(config) {
    return this.each(function () {
      if (!$(this).is(SELECTOR_MEGAMENU)) {
        throw new TypeError('Element is not a mega menu')
      }

      if (!config) {
        config = {}
      } else if (config.noFocus && typeof config.noFocus !== 'boolean') {
        // param = true
        throw new TypeError('no-focus parameter must be boolean')
      }

      let data = $(this).data(DATA_KEY)

      if (!data) {
        data = new MegaMenu(this, config)
        $(this).data(DATA_KEY, data)
      }

      if (config.target) {
        if (typeof config.target !== 'string' || !/^[#.].*/.test(config.target)) {
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

$.fn[NAME] = MegaMenu._jQueryInterface
$.fn[NAME].Constructor = MegaMenu
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return MegaMenu._jQueryInterface
}

export default MegaMenu
