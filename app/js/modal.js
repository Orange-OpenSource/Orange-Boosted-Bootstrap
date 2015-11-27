// Modal Extension
(function($) {
  'use strict';
  
  // Malgré les recommandation de Bootstrap, on fait en sorte d'ajouter les tags aria pour "être sur"
  var $modals =  $('[data-toggle="modal"]');
  $modals.each(function() {
  
    //modal = l'élement déclencheur de l'aperçu de la popin
    //modalPanel = la fenêtre modal à proprement parler
    var modal = $(this),
      modalPanel = modal.attr('data-target') ? $(modal.attr('data-target')) : $(modal.attr('href'));
    
    //On ajoute les tags aria qui vont bien et on empeche le focus avec tabulation
    modalPanel.attr({ 'role' : 'dialog'});//LLA removed with BS 3.3.5, 'aria-hidden' : 'true', 'tabIndex' : '-1' });
    
    //On ajoute le tags aria-labelledby uniquement si la popin à un title et que celui-ci possède un id
    var modalTitle = modalPanel.find('.modal-title');
    if(modalTitle){ 
      var modalTitleId = modalTitle.attr('id');
      if(modalTitleId){
        modalPanel.attr({ 'aria-labelledby' : modalTitleId });
      }
    }
  });
  
  $('.modal-dialog').attr( {'role' : 'document'})
  var modalhide = $.fn.modal.Constructor.prototype.hide
  $.fn.modal.Constructor.prototype.hide = function(){
     var modalOpener = this.$element.parent().find('[data-target="#' + this.$element.attr('id') + '"]')
     modalhide.apply(this, arguments)
     //L'élement déclencheur de l'aperçu de la popin reprend le focus quand celle-ci disparait
     modalOpener.focus()
  }
})(jQuery);