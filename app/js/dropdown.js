// dropdown megamenu mod :
// for megamenu we need to modify the way item parent is returned in getParent() function
// then we need to redefine very method that uses getParent()
// and unbind / rebind event with new methods

(function($) {
  'use strict';  
    
    var backdrop = '.dropdown-backdrop';
    var toggle   = '[data-toggle="dropdown"]';
    
    /* boosted mod */
    // remove tabindex = -1
    var menus = $(toggle).parent().find('ul').attr('role','menu'),
      lis = menus.find('li').attr('role','presentation')

    lis.find('a').attr({'tabIndex':'0'})
    /* end mod */

    function getParent($this) {
        var selector = $this.attr('data-target')

        if (!selector) {
          selector = $this.attr('href')
          selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
        }

        var $parent = selector && $(selector)

        /* boosted mod */
//      return $parent && $parent.length ? $parent : $this.parent()
        //looking for closest parent with .dropdown class
        var dropdownParent = $(this).closest('.dropdown');
        if(!dropdownParent.length){
            //if not found just return parent as in most cases dropdown parent is immediate parent of dropdown toggle
            dropdownParent = $this.parent();
        }
        return $parent && $parent.length ? $parent : dropdownParent;
        return $parent && $parent.length ? $parent : $this.closest('.dropdown');
        /* end mod */
      }
    
    function clearMenus(e) {
    if (e && e.which === 3){ return}
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) {return}

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) {return}

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
      
      /* boosted mod */
      //focus parent toggle element
      $(relatedTarget.relatedTarget).focus();
      /* end mod */
    })
  }
    
    //remove default event handler 
    $(document)
    .off('click.bs.dropdown.data-api')
    .off('click.bs.dropdown.data-api')
    .off('keydown.bs.dropdown.data-api')
    .off('keydown.bs.dropdown.data-api')
    .off('keydown.bs.dropdown.data-api');

    $.fn.dropdown.prototype.keydown = function (e) {
    /* boosted mod */
    if (!/(37|38|39|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) {return}
    /* end mod */

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) {return}

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27){ $parent.find(toggle).trigger('focus')}
      /* boosted mod */
//      return $this.trigger('click')
      return;
        /* end mod */
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) {return}

    var index = $items.index(e.target)

    /* boosted mod */
    if ( (e.which == 37 || e.which == 38) && index > 0) {
      index--;                        // up & left
    }
    if ( (e.which == 40 || e.which == 39) && index < $items.length - 1) {
      index++;                        // down & down
    }
    /* end mod */
    if (!~index) {index = 0}

    $items.eq(index).trigger('focus');
  }
    
    $.fn.dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) {return}

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) {return}

      $this
      /* boosted mod */
//        .trigger('focus')
      /* end mod */
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
      
      /* boosted mod */
      // focus first menu item
      $parent.find('a[role=menuitem]').first().trigger('focus');
      /* end mod */
    }

    return false
  }
    //reassign event handler 
    $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', toggle, $.fn.dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, $.fn.dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', $.fn.dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', $.fn.dropdown.prototype.keydown);
})(jQuery);