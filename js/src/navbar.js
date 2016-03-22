import Util from './util'


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.2): navbar.js
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
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]
  const TRANSITION_DURATION = 600

  const Default = {
    sticky : true,
    parent : ''
  }

  const DefaultType = {
    sticky : 'boolean',
    parent : 'string'
  }

  const Event = {
    PAGE_SCROLL : 'scroll',
    SHOW           : `show${EVENT_KEY}`,
    HIDE           : `hide${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    IN         : 'in',
  }

  const Dimension = {
    WIDTH  : 'width',
    HEIGHT : 'height'
  }

  const Selector = {
    CONFORTP_BAR : '#accessibilitytoolbarGraphic',
    HIDE_SUPRA_TRIGGER : '#hide_supra_trigger',
    SUPRA_BAR : '.navbar.supra',
    ACTIVES     : '.panel > .in, .panel > .collapsing',
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
      this._parent = this._config.parent ? this._getParent() : null

      if (!this._config.parent) {
        this._addAriaAndNavbardClass(this._element)
      }

      if(this._config.sticky) {
        $(this._element).addClass('fixed-header')
        $(document.body).css('padding-top', $(this._element).height())
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


    // public


    // private

    _getConfig(config) {
      config = $.extend({}, Default, config)
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
        this._addAriaAndNavbardClass(
          Navbar._getTargetFromElement(element),
          [element]
        )
      })

      return parent
    }

    _addAriaAndNavbardClass(element) {
      if (element) {
        let isOpen = $(element).hasClass(ClassName.IN)
        element.setAttribute('aria-expanded', isOpen)
      }
    }

    _managePageScroll() {
        function _isElementInViewport (el, topOffset) {
            var rect = el.getBoundingClientRect();

            if(!topOffset){ topOffset = 0; }

            return rect.bottom > topOffset &&
            rect.right > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.top < (window.innerHeight || document.documentElement.clientHeight);
            }

      if(_isElementInViewport($(Selector.HIDE_SUPRA_TRIGGER)[0], 0)){
        // document.getElementById('top_menu').style.display = 'block';
        // document.body.style.paddingTop = defaultBodyTop+'px';
        console.log('in viewport !')
      }else{
        // document.getElementById('top_menu').style.display = 'none';
        // document.body.style.paddingTop = defaultBodyTop - defaultMenuTop +'px';
        console.log('not in viewport !')
      }
    }

    _addEventListeners() {
      window.addEventListener(Event.PAGE_SCROLL, this._managePageScroll)
    }


    // static

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

        if (!data) {
          data = new Navbar(this, _config)
          console.log(data)
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
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

//   $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
//     event.preventDefault()

//     let target = Navbar._getTargetFromElement(this)
//     let data   = $(target).data(DATA_KEY)
//     let config = data ? 'toggle' : $(this).data()

//     Navbar._jQueryInterface.call($(target), config)
//   })


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
