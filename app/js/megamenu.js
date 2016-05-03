(function($) {    
  'use strict';
    var megamenuItems = '.mega-menu ul.navbar-nav > li > a';
    
    function uuid() {
        return 'ui-'+ (Math.random().toString(16)+'000000000').substr(2,8);
    }
    
    //arrow keys management
    $(document).on('keydown', megamenuItems, function(e){
        if (!/(37|38|39|40)/.test(e.which) ){ return; }
        
        e.preventDefault();
        e.stopPropagation();
        
        var k = e.which || e.keyCode;
        var index = $(megamenuItems).index(e.target);
        
        if( (k === 37 || k ===38) && index > 0){ index--; }  // up & left
        if( (k === 39 || k ===40) && index < $(megamenuItems).length - 1){ index++; }  // down & right

        $(megamenuItems).eq(index).trigger('focus');
    });
    
    //WAI-ARIA
    $('.mega-menu .dropdown-toggle').each(function(){
        var dropdownToggleId = uuid();
        var dropdownMenu = $(this).next('ul.dropdown-menu');
        var dropdownMenuId = uuid();
        
        $(this).attr('id', dropdownToggleId);
        $(dropdownMenu).attr('id', dropdownMenuId);
        
        $(this).attr('aria-owns', dropdownMenuId);
        $(this).attr('aria-controls', dropdownMenuId);
        $(dropdownMenu).attr('aria-labelledby', dropdownToggleId);
    });
    
})(jQuery);