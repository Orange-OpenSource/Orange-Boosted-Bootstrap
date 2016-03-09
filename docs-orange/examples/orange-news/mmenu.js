if(window.innerWidth < 544) {
    $('.mmega-menu h3').click(function(){
        var megaMenuTop = parseInt($('.mmega-menu').css('top') ,10);

        if(!$(this).hasClass('folded')) {
            $('.mmega-menu h2').hide();
            $('.mmega-menu h3').not($(this)).hide();
            $(this).next('ul').show();
            $('.mmega-menu .footer').hide();
            $(this).addClass('folded');
            $('.mmega-menu').css('top', '50px');
        } else
        {
            $('.mmega-menu h2').show();
            $('.mmega-menu h3').not($(this)).show();
            $(this).next('ul').hide();
            $('.mmega-menu .footer').show();
            $(this).removeClass('folded');
            $('.mmega-menu').css('top', '100px');
        }
    });

    // $('.mmega-menu  h2').click(function(){
    //     $('header .navbar-toggler').attr('data-target', '#exCollapsingNavbar2');
    //     $('.mmega-menu.collapse').collapse('hide');
    //     $('header .navbar-toggleable-xs.collapse').collapse('show');
    // });

    // $('.mmega-menu.collapse').on('show.bs.collapse', function () {
    //     $('header .navbar-toggleable-xs.collapse').collapse('hide');
    //     $('header .navbar-toggler').attr('data-target', '#collapseShop');
    // });

    //  $('.mmega-menu.collapse').on('hide.bs.collapse', function () {
    //     if($('header .navbar-toggler').attr('data-target') === '#collapseShop') {
    //         $('header .navbar-toggler').find('.icon-delete').removeClass('icon-delete').addClass('icon-menu');
    //         $('header .navbar-toggler').attr('data-target', '#exCollapsingNavbar2');
    //     }
    // });

    // $('header .navbar-toggleable-xs.collapse').on('shown.bs.collapse', function(){
    //     $('header .navbar-toggler').find('.icon-menu').removeClass('icon-menu').addClass('icon-delete');
    // });

    // $('header .navbar-toggleable-xs.collapse').on('hidden.bs.collapse', function(){
        // if($('header .navbar-toggler').attr('data-target') === '#exCollapsingNavbar2') {
            // $('header .navbar-toggler').find('.icon-delete').removeClass('icon-delete').addClass('icon-menu');
        // }
    // });

    // include in navbar.js
    $('header .navbar-toggleable-xs.collapse .nav-item a[data-toggle="collapse"]').click(function(){
        var parentItem = $(this).parent();
        if(!parentItem.hasClass('folded')) {
            parentItem.addClass('folded');
            $('header .navbar-toggleable-xs.collapse .nav-item').not(parentItem).hide();
        } else {
            parentItem.removeClass('folded');
            $('header .navbar-toggleable-xs.collapse .nav-item').show();
        }
    });

    // $('header .navbar-toggler').click(function(){
    //     if($('.mmega-menu.collapse.in')){
    //         $('.mmega-menu.collapse').collapse('hide');
    //     }
    // });

    // $('header .navbar-toggleable-xs.collapse').on('show.bs.collapse', function(){
    //     if($('header .navbar-toggleable-xs.collapse .nav-item').hasClass('folded')){
    //         $('.mmega-menu.collapse').collapse('show');
    //     }
    // });

    $('header .navbar-toggleable-xs.collapse').on('hide.bs.collapse', function(){
        //change toggler icon
        $('header .navbar-toggler').find('.icon-delete').removeClass('icon-delete').addClass('icon-menu');

        //close mega-menu
        if($('header .navbar-toggleable-xs.collapse .nav-item.folded a[data-toggle="collapse"]')){
            $($('header .navbar-toggleable-xs.collapse .nav-item.folded a').attr('href')).collapse('hide');
        }
    });

    $('header .navbar-toggleable-xs.collapse').on('show.bs.collapse', function(){
        var megaMenuTop = parseInt($('.mmega-menu').css('top'), 10);

        //change toggler icon
        $('header .navbar-toggler').find('.icon-menu').removeClass('icon-menu').addClass('icon-delete');

        //reset all items
        $('header .navbar-toggleable-xs.collapse .nav-item').removeClass('folded');
        $('header .navbar-toggleable-xs.collapse .nav-item').show();

        // reset navigation
        $('.mmega-menu h3').removeClass('folded');
        $('.mmega-menu h2').show();
        $('.mmega-menu h3').show();
        $('.mmega-menu .footer').show();
        $('.mmega-menu ul').hide();
        $('.mmega-menu').css('top', '100px');
    });
}
