/* eslint no-magic-numbers: ["error", { "ignore": [1,2] }] */

/**
 * --------------------------------------------------------------------------
 * Boosted (v4.0.0-alpha.4): o-megamenu.js
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
  const VERSION             = '4.0.0-alpha.4'
  const DATA_KEY            = 'bs.megamenu'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Event = {
    MEGAMENU_SHOWN : 'shown.bs.collapse',
    MEGAMENU_SHOW : 'show.bs.collapse',
    MEGAMENU_HIDE : 'hide.bs.collapse'
  }

  const ClassName = {
    FOLDED : 'folded',
    NAVBAR_TOGGLE_ICON_OPEN : 'icon-menu',
    NAVBAR_TOGGLE_ICON_CLOSE : 'icon-delete'
  }

  const Dimension = {
    MEDIA_BP_SM : 544,
    NAVBAR_HEIGHT_PX : '50px'
  }

  const Selector = {
    MEGAMENU    : '.mega-menu.panel',
    MEGAMENU_TITLE_L1 : '.mega-menu h2',
    MEGAMENU_TITLE_L2 : '.mega-menu h3',
    MEGAMENU_FOOTER : '.mega-menu .footer',
    NAVBAR : 'header .navbar-toggleable-xs.collapse',
    NAVBAR_TOGGLER : 'header .navbar-toggler',
    NAVBAR_ITEM : 'header .navbar-toggleable-xs.collapse .nav-item',
    NAVBAR_ITEM_FOLDED : 'header .navbar-toggleable-xs.collapse .nav-item.folded a[data-toggle="collapse"]',
    NAVBAR_ITEM_MEGAMENU_TOGGLE   : 'header .navbar-toggleable-xs.collapse .nav-item .nav-link[data-toggle="collapse"]'
  }


  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class MegaMenu {

    constructor(element) {
      this._element = element
      this._addEventListeners()
    }

    // getters

    static get VERSION() {
      return VERSION
    }

    // public

    // private
    _addEventListeners() {
      // megamenu accessibility
      $(this._element).on(Event.MEGAMENU_SHOWN, function () {
        // set focus on first focusable link (ignore aria-hidden)
        $(this).find('a:not([aria-hidden="true"]):first').trigger('focus')
      })
    }

    // static
    static _jQueryInterface(config) {
      return this.each(function () {
        let $this   = $(this)
        let data    = $this.data(DATA_KEY)
        let _config = $.extend(
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

  $(document).ready(() => {

    if (window.innerWidth < Dimension.MEDIA_BP_SM) {

      $(Selector.MEGAMENU_TITLE_L2).on('click', function () {

        if (!$(this).hasClass(ClassName.FOLDED)) {
          $(Selector.MEGAMENU_TITLE_L1).hide()
          $(Selector.MEGAMENU_TITLE_L2).not($(this)).hide()
          $(this).next('ul').show()
          $(Selector.MEGAMENU_FOOTER).hide()
          $(this).addClass(ClassName.FOLDED)
          $(Selector.MEGAMENU).css('top', Dimension.NAVBAR_HEIGHT_PX)
        } else {
          $(Selector.MEGAMENU_TITLE_L1).show()
          $(Selector.MEGAMENU_TITLE_L2).not($(this)).show()
          $(this).next('ul').hide()
          $(Selector.MEGAMENU_FOOTER).show()
          $(this).removeClass(ClassName.FOLDED)
          $(Selector.MEGAMENU).css('top', `${parseInt(Dimension.NAVBAR_HEIGHT_PX, 10) * 2}px`)
        }
      })

      // navbar
      $(Selector.NAVBAR_ITEM_MEGAMENU_TOGGLE).on('click', function () {
        let parentItem = $(this).parent()

        if (!parentItem.hasClass(ClassName.FOLDED)) {
          parentItem.addClass(ClassName.FOLDED)
          $(Selector.NAVBAR_ITEM).not(parentItem).hide()
        } else {
          parentItem.removeClass(ClassName.FOLDED)
          $(Selector.NAVBAR_ITEM).show()
        }
      })

      $(Selector.NAVBAR).on(Event.MEGAMENU_HIDE, () => {
        // switch toggler icon
        $(Selector.NAVBAR_TOGGLER).find(`.${ClassName.NAVBAR_TOGGLE_ICON_CLOSE}`).removeClass(ClassName.NAVBAR_TOGGLE_ICON_CLOSE).addClass(ClassName.NAVBAR_TOGGLE_ICON_OPEN)

        // close mega-menu
        if ($(Selector.NAVBAR_ITEM_FOLDED)) {
          $($(Selector.NAVBAR_ITEM_FOLDED).attr('href')).collapse('hide')
        }
      })

      $(Selector.NAVBAR).on(Event.MEGAMENU_SHOW, () => {
        // switch toggler icon
        $(Selector.NAVBAR_TOGGLER).find(`.${ClassName.NAVBAR_TOGGLE_ICON_OPEN}`).removeClass(ClassName.NAVBAR_TOGGLE_ICON_OPEN).addClass(ClassName.NAVBAR_TOGGLE_ICON_CLOSE)

        // reset all items
        $(Selector.NAVBAR_ITEM).removeClass(ClassName.FOLDED)
        $(Selector.NAVBAR_ITEM).show()

        // reset navigation
        $(Selector.MEGAMENU_TITLE_L2).removeClass(ClassName.FOLDED)
        $(Selector.MEGAMENU_TITLE_L1).show()
        $(Selector.MEGAMENU_TITLE_L2).show()
        $(Selector.MEGAMENU_FOOTER).show()
        $(`${Selector.MEGAMENU} ul`).hide()
        $(Selector.MEGAMENU).css('top', `${parseInt(Dimension.NAVBAR_HEIGHT_PX, 10) * 2}px`)
      })
    }
  })

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
