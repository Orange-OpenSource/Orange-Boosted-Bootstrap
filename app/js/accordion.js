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
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }
  
  $.fn.collapse.Constructor.prototype.prototype.show = function () {
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
      Plugin.call(actives, 'hide')
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
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }
  
	var collToggle = $.fn.collapse.Constructor.prototype.toggle;
	$.fn.collapse.Constructor.prototype.toggle = function(){
		var prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]'),
    href,
    curTab,
    $curPanel = this.$element;

		if(prevTab){
			var prevPanel = prevTab.attr('data-target') || (href = prevTab.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''),
			$prevPanel = $(prevPanel);

			if (this.$parent){ curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr('id') + '"]');}
      /*
			var newHeadingSelected = $curPanel.parent().children().first(); //Selection du nouveau heading déplié (panel-heading)
			var oldHeadingSelected = $prevPanel.parent().children().first(); //Selection de l'ancien heading déplié (panel-heading)
      
			//Si on a bien le nouveau heading, on lui ajoute la classe panel-selected qui indique que panel est ouvert.
			//Enfin, on modifie les classes pour les chevrons (on vire la classe chevron droite et on ajoute la classe chevron bas)
			if(newHeadingSelected.hasClass('panel-heading') ){
				newHeadingSelected.addClass('panel-selected');
				newHeadingSelected.find('.panel-chevron-closed').removeClass('panel-chevron-closed').addClass('panel-chevron-open');
			}
			//Si on a bien l'ancien heading, on lui retire la classe panel-selected.
			//Enfin, on modifie les classes pour les chevrons (on vire la classe chevron bas et on ajoute la classe chevron droite)
			if(oldHeadingSelected.hasClass('panel-heading') ){
				oldHeadingSelected.removeClass('panel-selected');
				oldHeadingSelected.find('.panel-chevron-open').removeClass('panel-chevron-open').addClass('panel-chevron-closed');
			}
           */
			//Fix pour IE8 : sans cela, impossible de sélectionner l'onglet actif
			if(navigator.appVersion.indexOf('MSIE 8.')!=-1){
				curTab.attr({ 'aria-selected':'true','aria-expanded':'true' });
				prevTab.attr({ 'aria-selected':'false','aria-expanded':'false' });
			}

			collToggle.apply(this, arguments);
    }
      /*
			if ($.support.transition) {
				this.$element.one($.support.transition.end, function(){

					prevTab.attr({ 'aria-selected':'false','aria-expanded':'false','tabIndex' : '-1' });
					$prevPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1'});

					curTab.attr({ 'aria-selected':'true','aria-expanded':'true','tabIndex' : '0' });

					if($curPanel.hasClass('in')){
						$curPanel.attr({ 'aria-hidden' : 'false','tabIndex' : '0' });
					}else{
						curTab.attr({ 'aria-selected':'false','aria-expanded':'false'});
						$curPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1' });
					}
				});
			}
		}else{
			collToggle.apply(this, arguments);
      
			$curPanel = this.$element;

			if ($.support.transition) {
				this.$element.one($.support.transition.end, function(){
					curTab = $curPanel.parent().find('[data-toggle=collapse]');
					if($curPanel.hasClass('in')){
						$curPanel.attr({ 'aria-hidden' : 'false','tabIndex' : '0' });
						curTab.attr({ 'aria-selected':'true','aria-expanded':'true' });
					}else{
						$curPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1' });
						curTab.attr({ 'aria-selected':'false','aria-expanded':'false'});
					}
				})
			}
		}  */
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
