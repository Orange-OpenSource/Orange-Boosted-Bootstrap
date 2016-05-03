// Accordion
(function($) {
	'use strict';

	var uniqueId = function(prefix) {
		return (prefix || 'ui-id') + '-' + Math.floor(Math.random()*1000+1);
	}

	var $colltabs =  $('[data-toggle="collapse"]:not(.navbar-toggle)');
	$colltabs.attr({ 'role':'tab', 'aria-selected':'false', 'aria-expanded':'false' });
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
				colltab.attr({ 'aria-controls': collpanel.attr('id'), 'aria-selected':'true', 'aria-expanded':'true', 'tabindex':'0' });

				// don't change the attribute for menu panel specific case
        if(!colltab.hasClass('navbar-toggle')) {
            collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' });
        }

				//Si on a bien le heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
				//Enfin, on ajoute une classe sur le premier enfant du header pour ajouter le chevron bas (ouvert)
				if(heading.hasClass('panel-heading') ){
					colltab.addClass('panel-chevron-open');
				}

			}else{
				colltab.attr({'aria-controls' : collpanel.attr('id'), 'tabindex':'-1' });
        // don't change the attribute for menu panel specific case
        if(!colltab.hasClass('navbar-toggle')) {
          collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' });
        }

				//Si on a bien le heading, on ajoute une classe sur le premier enfant du header pour ajouter le chevron droite (à ouvrir)
				if(heading.hasClass('panel-heading') ){
					colltab.addClass('panel-chevron-closed');
				}
			}
		}
	})

  $.fn.collapse.Constructor.prototype.addAriaAndCollapsedClass = function($element, $trigger){
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $element.attr('aria-hidden', isOpen)
    $element.attr('tabindex', isOpen ? 0 : -1)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .toggleClass('panel-chevron-closed', !isOpen)
      .toggleClass('panel-chevron-open', isOpen)
      .attr('aria-expanded', isOpen)
      .attr('aria-selected', isOpen)
      .attr('tabindex', isOpen ? 0 : -1)
  }

  $.fn.collapse.Constructor.prototype.hide = function () {
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
      .attr('aria-hidden', false)
      .attr('tabindex', -1)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)
      .toggleClass('panel-chevron-closed', true)
      .toggleClass('panel-chevron-open', false)
      .attr('aria-selected', false)
      .attr('tabindex', -1)

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
      .emulateTransitionEnd($.fn.collapse.Constructor.TRANSITION_DURATION)
  }

  $.fn.collapse.Constructor.prototype.show = function () {
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

    if (actives && actives.length && !$(this.options.parent).attr('data-multipleAtATime')) {
      $.fn.collapse.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)
      .attr('aria-hidden', true)
      .attr('tabindex', 0)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)
      .toggleClass('panel-chevron-closed', false)
      .toggleClass('panel-chevron-open', true)
      .attr('aria-expanded', true)
      .attr('aria-selected', true)
      .attr('tabindex', 0)


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
      .emulateTransitionEnd($.fn.collapse.Constructor.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

})(jQuery);

var $accordions =  $('[data-multipleAtATime="true"]');
if($accordions)
{
    $accordions.each(function() {
        'use strict';
        $(this).attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' });
    })
}
