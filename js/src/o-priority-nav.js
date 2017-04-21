/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.6.1): o-priority-nav.js
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const PriorityNav = (($) => {


  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'prioritynav'
  const VERSION = '4.0.0-alpha.6.1'
  const DATA_KEY = 'bs.prioritynav'
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  const RESIZE_DURATION = 500

  const Event = {
    RESIZE: 'resize'
  }

  const ClassName = {
    PRIORITY: 'priority',
    HIDE: 'hide'
  }

  const Selector = {
    NAV_ELEMENTS: 'li:not(\'.overflow-nav\')',
    FIRST_ELEMENT: 'li:first',
    PRIORITY_ELEMENT: '.priority'
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

      this._$menu = $(element)
      this._$allNavElements = this._$menu.find(Selector.NAV_ELEMENTS)
      this._bindUIActions()
      this._setupMenu()
    }

    // getters

    static get VERSION() {
      return VERSION
    }

    // public

    // private

    _setupMenu() {
      const $allNavElements = this._$allNavElements

      // Checking top position of first item (sometimes changes)
      const firstPos = this._$menu.find(Selector.FIRST_ELEMENT).position()

      // Empty collection in which to put menu items to move
      let $wrappedElements = $()

      // Used to snag the previous menu item in addition to ones that have wrapped
      let first = true

      // move priority element out of wrap
      const $priorityEl = this._$menu.find(Selector.PRIORITY_ELEMENT)

      if ($priorityEl.length > 0 && $priorityEl.position().top !== firstPos.top) {
        while ($priorityEl.position().top !== firstPos.top) {
          $priorityEl.insertBefore($priorityEl.prev())
        }
      }

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
        $wrappedElements.addClass(ClassName.HIDE)

        // Add wrapped elements to dropdown
        this._$menu.find('.overflow-nav-list').append(newSet)

        // Show new menu
        this._$menu.find('.overflow-nav').addClass('show-inline-block')

        // Make overflow visible again so dropdown can be seen.
        this._$menu.find('.o-nav-local').css('overflow', 'visible')
      }

    }

    _tearDown() {
      this._$menu.find('.overflow-nav-list').empty()
      this._$menu.find('.overflow-nav').removeClass('show-inline-block')
      this._$allNavElements.removeClass(ClassName.HIDE)
    }

    _bindUIActions() {
      $(window).on(Event.RESIZE, () => {
        this._$menu.addClass('resizing')

        setTimeout(() => {
          this._tearDown()
          this._setupMenu()
          this._$menu.removeClass('resizing')
        }, RESIZE_DURATION)
      })
    }

    // static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $element = $(this)

        let data       = $element.data(DATA_KEY)

        if (!data) {
          data = new PriorityNav(this, config)
          $element.data(DATA_KEY, data)
        }

        if (typeof config !== 'undefined' && config) {
          if (typeof config !== 'string' || !/^[.#].*/.test(config)) {
            throw new Error(`Selector "${config}" is not supported`)
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

  $.fn[NAME]             = PriorityNav._jQueryInterface
  $.fn[NAME].Constructor = PriorityNav
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return PriorityNav._jQueryInterface
  }

  return PriorityNav

})(jQuery)

export default PriorityNav
