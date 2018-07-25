import $ from 'jquery'
import Util from './util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.3): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Tab = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME               = 'tab'
  const VERSION            = '4.1.3'
  const DATA_KEY           = 'bs.tab'
  const EVENT_KEY          = `.${DATA_KEY}`
  const DATA_API_KEY       = '.data-api'
  const JQUERY_NO_CONFLICT = $.fn[NAME]
  // boosted mod
  const ARROW_LEFT_KEYCODE  = 37 // KeyboardEvent.which value for left arrow key
  const ARROW_UP_KEYCODE    = 38 // KeyboardEvent.which value for up arrow key
  const ARROW_RIGHT_KEYCODE = 39 // KeyboardEvent.which value for right arrow key
  const ARROW_DOWN_KEYCODE  = 40 // KeyboardEvent.which value for down arrow key
  const REGEXP_KEYDOWN           = new RegExp(`${ARROW_LEFT_KEYCODE}|${ARROW_UP_KEYCODE}|${ARROW_RIGHT_KEYCODE}|${ARROW_DOWN_KEYCODE}`)
  // end mod

  const Event = {
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`,
    KEYDOWN_DATA_API : `keydown${EVENT_KEY}${DATA_API_KEY}` // boosted mod
  }

  const ClassName = {
    DROPDOWN_MENU : 'dropdown-menu',
    ACTIVE        : 'active',
    DISABLED      : 'disabled',
    FADE          : 'fade',
    SHOW          : 'show'
  }

  const Selector = {
    DROPDOWN              : '.dropdown',
    NAV_LIST_GROUP        : '.nav, .list-group',
    ACTIVE                : '.active',
    ACTIVE_UL             : '> li > .active',
    DATA_TOGGLE           : '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE       : '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD : '> .dropdown-menu .active'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Tab {
    constructor(element) {
      this._element = element
      this._addAccessibility()  // Boosted mod
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    show() {
      if (this._element.parentNode &&
          this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
          $(this._element).hasClass(ClassName.ACTIVE) ||
          $(this._element).hasClass(ClassName.DISABLED)) {
        return
      }

      let target
      let previous
      const listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0]
      const selector = Util.getSelectorFromElement(this._element)

      if (listElement) {
        const itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE
        previous = $.makeArray($(listElement).find(itemSelector))
        previous = previous[previous.length - 1]
      }

      const hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      })

      const showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      })

      if (previous) {
        $(previous).trigger(hideEvent)
      }

      $(this._element).trigger(showEvent)

      if (showEvent.isDefaultPrevented() ||
         hideEvent.isDefaultPrevented()) {
        return
      }

      if (selector) {
        target = document.querySelector(selector)
      }

      this._activate(
        this._element,
        listElement
      )

      const complete = () => {
        const hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: this._element
        })

        const shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        })

        $(previous).trigger(hiddenEvent)
        $(this._element).trigger(shownEvent)
      }

      if (target) {
        this._activate(target, target.parentNode, complete)
      } else {
        complete()
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Private

    _activate(element, container, callback) {
      let activeElements
      if (container.nodeName === 'UL') {
        activeElements = $(container).find(Selector.ACTIVE_UL)
      } else {
        activeElements = $(container).children(Selector.ACTIVE)
      }

      const active = activeElements[0]
      const isTransitioning = callback &&
        (active && $(active).hasClass(ClassName.FADE))

      const complete = () => this._transitionComplete(
        element,
        active,
        callback
      )

      // Boosted mod
      $(container).find('.nav-link:not(.dropdown-toggle)').attr({
        tabIndex : '-1',
        'aria-selected' : false
      })
      $(container).find('.tab-pane').attr({
        'aria-hidden' : true,
        tabIndex : '-1'
      })
      // end mod

      if (active && isTransitioning) {
        const transitionDuration = Util.getTransitionDurationFromElement(active)

        $(active)
          .one(Util.TRANSITION_END, complete)
          .emulateTransitionEnd(transitionDuration)
      } else {
        complete()
      }
    }

    _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(`${ClassName.SHOW} ${ClassName.ACTIVE}`)

        const dropdownChild = $(active.parentNode).find(
          Selector.DROPDOWN_ACTIVE_CHILD
        )[0]

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE)
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false)
        }
      }

      $(element).addClass(ClassName.ACTIVE)
      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true)
      }
      // Boosted mod
      $(element).filter('.nav-link:not(.dropdown-toggle).active').attr({
        tabIndex : '0',
        'aria-selected' : true
      })
      $(element).filter('.tab-pane.active').attr({
        'aria-hidden' : false,
        tabIndex : '0'
      })
      // end mod

      Util.reflow(element)
      $(element).addClass(ClassName.SHOW)

      if (element.parentNode &&
          $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        const dropdownElement = $(element).closest(Selector.DROPDOWN)[0]
        if (dropdownElement) {
          const dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector.DROPDOWN_TOGGLE))
          $(dropdownToggleList).addClass(ClassName.ACTIVE)
        }

        element.setAttribute('aria-expanded', true)
      }

      if (callback) {
        callback()
      }
    }

    // Boosted mod
    _addAccessibility() {
      const $tab = $(this._element)
      const $tabpanel = $($tab.attr('href'))
      const $tablist = $tab.closest(Selector.NAV_LIST_GROUP)
      const tabId = $tab.attr('id') || Util.getUID(NAME)

      $tab.attr('id', tabId)

      if ($tabpanel) {
        $tab.attr('role', 'tab')
        $tablist.attr('role', 'tablist')
        // $li.attr('role', 'presentation')
      }

      if ($tab.hasClass(ClassName.ACTIVE)) {
        $tab.attr({
          tabIndex : '0',
          'aria-selected' : 'true'
        })

        if ($tab.attr('href')) {
          $tab.attr('aria-controls', $tab.attr('href').substr(1))
        }

        $tabpanel.attr({
          role : 'tabpanel',
          tabIndex : '0',
          'aria-hidden' : 'false',
          'aria-labelledby': tabId
        })
      } else {
        $tab.attr({
          tabIndex : '-1',
          'aria-selected' : 'false'
        })

        if ($tab.attr('href')) {
          $tab.attr('aria-controls', $tab.attr('href').substr(1))
        }

        $tabpanel.attr({
          role : 'tabpanel',
          tabIndex : '-1',
          'aria-hidden' : 'true',
          'aria-labelledby': tabId
        })
      }
    }
    // end mod

    // Static

    // Boosted mod
    static _dataApiKeydownHandler(e) {
      const $this = $(this)
      const Items = $this.closest('ul[role=tablist] ').find('[role=tab]:visible')
      const k = e.which || e.keyCode

      let index = 0

      index = Items.index(Items.filter(':focus'))

      if (k === ARROW_UP_KEYCODE || k === ARROW_LEFT_KEYCODE) {
        index--
      } // up & left
      if (k === ARROW_RIGHT_KEYCODE || k === ARROW_DOWN_KEYCODE) {
        index++
      } // down & right

      if (index < 0) {
        index = Items.length - 1
      }
      if (index === Items.length) {
        index = 0
      }
      const nextTab = Items.eq(index)

      if (nextTab.attr('role') === 'tab') {
        nextTab.tab('show').trigger('focus')
      }

      e.preventDefault()
      e.stopPropagation()
    }
    // end mod

    static _jQueryInterface(config) {
      return this.each(function () {
        const $this = $(this)
        let data = $this.data(DATA_KEY)

        if (!data) {
          data = new Tab(this)
          $this.data(DATA_KEY, data)
        }

        // Boosted mod
        if (/init/.test(config)) {
          return
        }
        // end mod

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

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
      event.preventDefault()
      Tab._jQueryInterface.call($(this), 'show')
    })
    // Boosted mod
    .on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, function (event) {
      if (!REGEXP_KEYDOWN.test(event.which)) {
        return
      }
      event.preventDefault()
      Tab._dataApiKeydownHandler.call($(this), event)
    })
    .on('DOMContentLoaded', () => {
      Tab._jQueryInterface.call($(Selector.DATA_TOGGLE), 'init')
    })
    // end mod
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface
  $.fn[NAME].Constructor = Tab
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
  }

  return Tab
})($)

export default Tab
