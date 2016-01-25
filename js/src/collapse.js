import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Collapse = (($) => {

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'collapse'
  const VERSION             = '4.0.0-alpha.2'
  const DATA_KEY            = 'bs.collapse'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    toggle : true,
    parent : ''
  }

  const DefaultType = {
    toggle : 'boolean',
    parent : 'string'
  }

  const Event = {
    SHOW           : `show${EVENT_KEY}`,
    SHOWN          : `shown${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
    HIDDEN         : `hidden${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    IN         : 'in',
    COLLAPSE   : 'collapse',
    COLLAPSING : 'collapsing',
    COLLAPSED  : 'collapsed'
  }

  const Dimension = {
    WIDTH  : 'width',
    HEIGHT : 'height'
  }

  const Selector = {
    ACTIVES     : '.panel > .in, .panel > .collapsing',
    DATA_TOGGLE : '[data-toggle="collapse"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Collapse {

    constructor(element, config) {
      this._isTransitioning = false
      this._element         = element
      this._config          = this._getConfig(config)
      this._triggerArray    = $.makeArray($(
        `[data-toggle="collapse"][href="#${element.id}"],` +
        `[data-toggle="collapse"][data-target="#${element.id}"]`
     ))

      this._parent = this._config.parent ? this._getParent() : null

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray)
      }

      if (this._config.toggle) {
        this.toggle()
      }
    }


    // getters

    static get VERSION() {
      return VERSION
    }

    static get Default() {
      return Default
    }

    // public
    toggle() {
      if ($(this._element).hasClass(ClassName.IN)) {
        this.hide()
      } else {
        this.show()
      }
    }

    show() {

      if (this._isTransitioning ||
        $(this._element).hasClass(ClassName.IN)) {
        return
      }

      let actives
      let activesData

      if (this._parent) {
        actives = $.makeArray($(this._parent).find(Selector.ACTIVES))
        if (!actives.length) {
          actives = null
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY)
        if (activesData && activesData._isTransitioning) {
          return
        }
      }

      let startEvent = $.Event(Event.SHOW)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide')
        if (!activesData) {
          $(actives).data(DATA_KEY, null)
        }
      }

      let dimension = this._getDimension()

      $(this._element)
        .removeClass(ClassName.COLLAPSE)
        .addClass(ClassName.COLLAPSING)

      this._element.style[dimension] = 0
      this._element.setAttribute('aria-expanded', true)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .removeClass(ClassName.COLLAPSED)
          .attr('aria-expanded', true)
      }

      this.setTransitioning(true)

      $(this._element).parent().find('h4.panel-title').removeClass('panel-chevron-closed').addClass('panel-chevron-open')

      let complete = () => {
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .addClass(ClassName.IN)

        this._element.style[dimension] = ''

        this.setTransitioning(false)

        $(this._element).trigger(Event.SHOWN)
      }

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      let capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)
      let scrollSize           = `scroll${capitalizedDimension}`

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)

      this._element.style[dimension] = `${this._element[scrollSize]}px`
    }

    hide() {

      if (this._isTransitioning ||
        !$(this._element).hasClass(ClassName.IN)) {
        return
      }

      let startEvent = $.Event(Event.HIDE)
      $(this._element).trigger(startEvent)
      if (startEvent.isDefaultPrevented()) {
        return
      }

      let dimension       = this._getDimension()
      let offsetDimension = dimension === Dimension.WIDTH ?
        'offsetWidth' : 'offsetHeight'

      this._element.style[dimension] = `${this._element[offsetDimension]}px`

      Util.reflow(this._element)

      $(this._element)
        .addClass(ClassName.COLLAPSING)
        .removeClass(ClassName.COLLAPSE)
        .removeClass(ClassName.IN)

      this._element.setAttribute('aria-expanded', false)

      if (this._triggerArray.length) {
        $(this._triggerArray)
          .addClass(ClassName.COLLAPSED)
          .attr('aria-expanded', false)
      }

      this.setTransitioning(true)

      let complete = () => {
        this.setTransitioning(false)
        $(this._element)
          .removeClass(ClassName.COLLAPSING)
          .addClass(ClassName.COLLAPSE)
          .trigger(Event.HIDDEN)
      }

      this._element.style[dimension] = 0
      $(this._element).parent().find('h4.panel-title').addClass('panel-chevron-closed').removeClass('panel-chevron-open')

      if (!Util.supportsTransitionEnd()) {
        complete()
        return
      }

      $(this._element)
        .one(Util.TRANSITION_END, complete)
        .emulateTransitionEnd(TRANSITION_DURATION)
    }

    setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)

      this._config          = null
      this._parent          = null
      this._element         = null
      this._triggerArray    = null
      this._isTransitioning = null
    }


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
      config.toggle = Boolean(config.toggle) // coerce string values
      Util.typeCheckConfig(NAME, config, DefaultType)
      return config
    }

    _getDimension() {
      let hasWidth = $(this._element).hasClass(Dimension.WIDTH)
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT
    }

    _getParent() {
      let parent   = $(this._config.parent)[0]
      let selector =
        `[data-toggle="collapse"][data-parent="${this._config.parent}"]`

      $(parent).find(selector).each((i, element) => {
        this._addAriaAndCollapsedClass(
          Collapse._getTargetFromElement(element),
          [element]
       )
      })

      return parent
    }

    _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN)
        element.setAttribute('aria-expanded', isOpen)

        if (triggerArray.length) {
          $(triggerArray)
            .toggleClass(ClassName.COLLAPSED, !isOpen)
            .attr('aria-expanded', isOpen)
        }
      }
    }


    // static

  static _keydown(e, that) {
    let $items,
      $tablist = $this.closest('div.panel-group '),
      $this = $(that),
      index,
      k = e.which || e.keyCode

    if (k === 32) { 					// space
      $this.click()
    }

    $items = $tablist.find('[role=tab]')
    index = $items.index($items.filter(':focus'))

    if (k === 38 || k === 37) {
      index--                      // up & left
    }
    if (k === 39 || k === 40) {
      index++                      // down & right
    }
    if (index < 0) {
      index = $items.length - 1
    }
    if (index === $items.length) {
      index = 0
    }

    $items.eq(index).focus()
    e.preventDefault()
    e.stopPropagation()

  }

    static _getTargetFromElement(element) {
      let selector = Util.getSelectorFromElement(element)
      return selector ? $(selector)[0] : null
    }

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

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false
        }

        if (!data) {
          data = new Collapse(this, _config)
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
   * Adding accessibility
   * ------------------------------------------------------------------------
   */

  let uniqueId = function(prefix) {
    return `${prefix || 'ui-id'}-${Math.floor(Math.random() * 1000 + 1)}`
  }

  let $colltabs =  $('[data-toggle="collapse"]:not(.navbar-toggle)')
  $colltabs.attr({ role:'tab', 'aria-selected':'false', 'aria-expanded':'false' })
  $colltabs.each(function() {
    let colltab = $(this), 
      collid = colltab.attr('id') || uniqueId('ui-collapse'),
      collpanel = colltab.attr('data-target') ? $(colltab.attr('data-target')) : $(colltab.attr('href')),
      collparent = parent && $(parent),
      heading = '',
      parent  = colltab.attr('data-parent')

    colltab.attr('id', collid)
    if (collparent) {
      $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role', 'presentation')
      collparent.attr({ role: 'tablist', 'aria-multiselectable' : 'true' })

      heading = collpanel.parent().children().first() // On sélectionne le heading (panel-heading)

      if (collpanel.hasClass('in')) {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected':'true', 'aria-expanded':'true', tabindex:'0' })

        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role:'tabpanel', tabindex:'0', 'aria-labelledby':collid, 'aria-hidden':'false' })
        }

        // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
        // Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
        if (heading.hasClass('panel-heading')) {
          heading.addClass('panel-selected')
          heading.children().first().addClass('panel-chevron-open')
        }
      } else {
        colltab.attr({ 'aria-controls' : collpanel.attr('id'), tabindex:'-1' })
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role:'tabpanel', tabindex:'-1', 'aria-labelledby':collid, 'aria-hidden':'true' })
        }

        // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
        if (heading.hasClass('panel-heading')) {
          heading.children().first().addClass('panel-chevron-closed')
        }
      }
    } else {
      heading = collpanel.parent().children().first() // On sélectionne le heading (panel-heading)
      if (collpanel.hasClass('in')) {
        colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected':'true', 'aria-expanded':'true' })
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role:'tabpanel', 'aria-labelledby':collid, 'aria-hidden':'false' })
        }

        // Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
        // Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
        if (heading.hasClass('panel-heading')) {
          heading.addClass('panel-selected')
          heading.children().first().addClass('panel-chevron-open')
        }

      } else {
        colltab.attr({ 'aria-controls' : collpanel.attr('id'), 'aria-selected':'false', 'aria-expanded':'false'  })
        // don't change the attribute for menu panel specific case
        if (!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ role:'tabpanel', 'aria-labelledby':collid, 'aria-hidden':'true' })
        }

        // Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
        if (heading.hasClass('panel-heading')) {
          heading.children().first().addClass('panel-chevron-closed')
        }
      }
    }
  })

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */
  $(document).on('keydown.collapse.data-api', '[data-toggle="collapse"]', function (event) {
    let target = Collapse._getTargetFromElement(this)
    let k = event.which || event.keyCode
    if (!/(32|37|38|39|40)/.test(k)) {
      return true
    }
    Collapse._keydown.call($(target), event, this)
    event.preventDefault()
    event.stopPropagation()
    return false
  })

  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault()
    let target = Collapse._getTargetFromElement(this)
    let data   = $(target).data(DATA_KEY)
    let config = data ? 'toggle' : $(this).data()

    Collapse._jQueryInterface.call($(target), config)
  })
  $(() => {
    $('.o-accordion .panel-heading h4 a ').prepend('<div class=arrow></div>')
  })
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Collapse._jQueryInterface
  $.fn[NAME].Constructor = Collapse
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Collapse._jQueryInterface
  }

  return Collapse

})(jQuery)

export default Collapse
