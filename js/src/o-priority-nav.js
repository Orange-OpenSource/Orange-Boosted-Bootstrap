/**
 * --------------------------------------------------------------------------
 * Boosted (v4.5.3): o-priority-nav.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'prioritynav'
const VERSION = '4.5.3'
const DATA_KEY = 'bs.prioritynav'
const JQUERY_NO_CONFLICT = $.fn[NAME]
const RESIZE_DURATION = 500
const TAB_KEYCODE = 9

const EVENT_RESIZE = 'resize'

const CLASS_NAME_HIDE = 'sr-only'
const CLASS_NAME_RESIZING = 'resizing overflow-hidden'

const SELECTOR_NAV_ELEMENTS = 'li:not(\'.overflow-nav\')'
const SELECTOR_FIRST_ELEMENT = 'li:first'

const MenuLabelDefault = 'More'

function MenuTemplate(MenuLabel) {
  return `
  <li class="overflow-nav nav-item dropdown d-none">
      <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true">${MenuLabel}</a>
      <ul class="overflow-nav-list dropdown-menu dropdown-menu-right"></ul>
  </li>
`
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class PriorityNav {
  constructor(element, config) {
    this._element = element
    this._config = config

    if ($(element).is('ul')) {
      this._$menu = $(element)
    } else {
      this._$menu = $(element).find('ul').first()
    }

    this._initMenu()
    this._$allNavElements = this._$menu.find(SELECTOR_NAV_ELEMENTS)
    this._bindUIActions()
    this._setupMenu()
  }

  // getters

  static get VERSION() {
    return VERSION
  }

  // public

  // private

  _initMenu() {
    let MenuLabel = this._config

    if (typeof MenuLabel === 'undefined') {
      MenuLabel = MenuLabelDefault
    }

    // add menu template
    this._$menu.append(MenuTemplate(MenuLabel))
  }

  _setupMenu() {
    const $allNavElements = this._$allNavElements

    // Checking top position of first item (sometimes changes)
    const firstPos = this._$menu.find(SELECTOR_FIRST_ELEMENT).position()

    // Empty collection in which to put menu items to move
    let $wrappedElements = $()

    // Used to snag the previous menu item in addition to ones that have wrapped
    let first = true

    // Loop through all the nav items...
    this._$allNavElements.each(function (i) {
      const $elm = $(this)

      // ...in which to find wrapped elements
      const pos = $elm.position()

      if (pos.top !== firstPos.top) {
        // If element is wrapped, add it to set
        $wrappedElements = $wrappedElements.add($elm)

        // Add the previous one too, if first
        if (first) {
          $wrappedElements = $wrappedElements.add($allNavElements.eq(i - 1))
          first = false
        }
      }
    })

    if ($wrappedElements.length) {
      // Clone set before altering
      const newSet = $wrappedElements.clone()

      // Hide ones that we're moving
      $wrappedElements.addClass(CLASS_NAME_HIDE)
      $wrappedElements.find('.nav-link').attr('tabindex', -1)

      // Add wrapped elements to dropdown
      this._$menu.find('.overflow-nav-list').append(newSet)

      // Show new menu
      this._$menu.find('.overflow-nav').removeClass('d-none').addClass('d-inline-block')

      // Make overflow visible again so dropdown can be seen.
      this._$menu.find('.o-nav-local').css('overflow', 'visible')

      // Check if menu doesn't overflow after process
      if (this._$menu.find('.overflow-nav').position().top !== firstPos.top) {
        const $item = $(this._element).find(`.${CLASS_NAME_HIDE}`).first().prev()
        const $itemDuplicate = $item.clone()

        $item.addClass(CLASS_NAME_HIDE)
        $item.find('.nav-link').attr('tabindex', -1)

        this._$menu.find('.overflow-nav-list').prepend($itemDuplicate)
      }
    }

    // hide menu from AT
    this._$menu.find('.overflow-nav').attr('aria-hidden', true)
  }

  _tearDown() {
    this._$menu.find('.overflow-nav-list').empty()
    this._$menu.find('.overflow-nav').removeClass('d-inline-block').addClass('d-none')
    this._$allNavElements.removeClass(CLASS_NAME_HIDE)
    this._$allNavElements.find('.nav-link').attr('tabindex', 0)
  }

  _bindUIActions() {
    $(window).on(EVENT_RESIZE, () => {
      this._$menu.addClass(CLASS_NAME_RESIZING)

      setTimeout(() => {
        this._tearDown()
        this._setupMenu()
        this._$menu.removeClass(CLASS_NAME_RESIZING)
      }, RESIZE_DURATION)
    })

    this._$menu.find('.overflow-nav .dropdown-toggle').on('keyup', e => {
      if (e.which === TAB_KEYCODE) {
        $(e.target).dropdown('toggle')
      }
    })
  }

  // static

  static _jQueryInterface(config) {
    return this.each(function () {
      let data = $(this).data(DATA_KEY)

      if (!data) {
        data = new PriorityNav(this, config)
        $(this).data(DATA_KEY, data)
      }

      if (typeof config !== 'undefined' && config) {
        if (typeof config !== 'string') {
          throw new TypeError('Priority nav label type must be string')
        }
      }
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = PriorityNav._jQueryInterface
$.fn[NAME].Constructor = PriorityNav
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return PriorityNav._jQueryInterface
}

export default PriorityNav
