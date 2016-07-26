/* ========================================================================
 * Bootstrap: collapse.js v3.3.7
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.7'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  // boosted mod
  var uniqueId = function(prefix) {
		return (prefix || 'ui-id') + '-' + Math.floor(Math.random()*1000+1);
	}

  var $accordions =  $('[data-multipleAtATime="true"]');
  if($accordions)
  {
      $accordions.each(function() {
        $(this).attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' });
      })
  }

	var $colltabs =  $('[data-toggle="collapse"]:not(.navbar-toggle)');
	$colltabs.attr({ 'role':'tab', 'aria-expanded':'false' });
	$colltabs.each(function() {
		var colltab = $(this),
    collpanel = colltab.attr('data-target') ? $(colltab.attr('data-target')) : $(colltab.attr('href')),
		parent  = colltab.attr('data-parent'),
		collparent = parent && $(parent),
		collid = colltab.attr('id') || uniqueId('ui-collapse'),
    heading = '';

		colltab.attr('id', collid);
		if(collparent){
			$(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation');
			collparent.attr({'role' : 'tablist'});

			heading = collpanel.parent().children().first(); //On sélectionne le heading (panel-heading)

			if(collpanel.hasClass('in')){
				colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-expanded':'true'});

				// don't change the attribute for menu panel specific case
        if(!colltab.hasClass('navbar-toggle')) {
            collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' });
        }
			} else {
				colltab.attr({'aria-controls' : collpanel.attr('id')});
        // don't change the attribute for menu panel specific case
        if(!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' });
        }

				//Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
				if(heading.hasClass('panel-heading') ){
          colltab.addClass('collapsed');
				}
			}
		}
	})
  // end mod

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    // boosted mod
    if (actives && actives.length && !$(this.options.parent).attr('data-multipleAtATime')) {
    // end mod
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)
      // boosted mod
      .attr('aria-hidden', false)
      .attr('tabindex', 0)
      // end mod

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)
      // boosted mod
      .attr('aria-expanded', false)
      .attr('aria-hidden', true)
      .attr('tabindex', -1)
      // end mod

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    // boosted mod
    $element.attr('aria-hidden', !isOpen)
    $element.attr('tabindex', isOpen ? 0 : -1)
    // end mod
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })
  // boosted mod
  // local navigation
  $('.o-nav-local .nav-local.collapse a').on('click', function() {
      $(this).parent().parent().prev('.local-select').text($(this).text());
  });

  $('.o-nav-local .nav-local.collapse').on('shown.bs.collapse', function(){
      $(this).find('li:first-child a').focus();
  });

  $('.o-nav-local .nav-local.collapse').on('hidden.bs.collapse', function(){
      $(this).prev('.local-select').focus();
  });

  $(document).ready(function(){
      $('.o-nav-local .local-select').each(function() {
        $(this).text($(this).next('.nav-local.collapse').find('li:first-child a').text());
      });
  });

  $(document).on('click', function(){
      Plugin.call($('.o-nav-local .collapse.in'), 'hide');
  });
  // end mod

}(jQuery);
