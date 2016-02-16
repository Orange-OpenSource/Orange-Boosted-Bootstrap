(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.megamenu = mod.exports;
  }
})(this, function (exports, module) {
  /**
   * --------------------------------------------------------------------------
   * Orange Boosted
   * Based on
   * Bootstrap (v4.0.0): alert.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  'use strict';

  var Megamenu = (function ($) {
    'use strict';

    var megamenuItems = '.mega-menu ul.navbar-nav > li > a';

    function uuid() {
      var id = Math.random().toString(16) + '000000000';
      return 'ui-' + id.substr(2, 8);
    }

    // arrow keys management
    $(document).on('keydown', megamenuItems, function (e) {
      if (!/(37|38|39|40)/.test(e.which)) {
        return;
      }
      e.preventDefault();
      e.stopPropagation();

      var k = e.which || e.keyCode;
      var index = $(megamenuItems).index(e.target);

      if ((k === 37 || k === 38) && index > 0) {
        index--;
      } // up & left
      if ((k === 39 || k === 40) && index < $(megamenuItems).length - 1) {
        index++;
      } // down & right

      $(megamenuItems).eq(index).trigger('focus');
    });

    // WAI-ARIA
    $('.mega-menu .dropdown-toggle').each(function () {
      var dropdownToggleId = uuid();
      var dropdownMenu = $(this).next('ul.dropdown-menu');
      var dropdownMenuId = uuid();
      $(this).attr('id', dropdownToggleId);
      $(dropdownMenu).attr('id', dropdownMenuId);
      $(this).attr('aria-owns', dropdownMenuId);
      $(this).attr('aria-controls', dropdownMenuId);
      $(dropdownMenu).attr('aria-labelledby', dropdownToggleId);
    });

    $('.mega-menu .megamenu-dropdown-toggle').on('click', function () {
      $('.mega-menu .megamenu-dropdown-toggle').each(function () {
        $(this).removeClass('active');
      });
      $(this).addClass('active');
    });

    // extending to level 2 in 320
    $('.mega-menu h3').on('click', function () {
      $('.megamenuclosetop').parent().find('.megamenuclosetop').addClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.container .navbar-toggleable-xs').addClass('active');
      $(this).addClass('disabled');
    });

    // extending to level 1 in 320
    $('.nav-item .megamenu-dropdown-toggle').on('click', function () {
      $('.closing-bare').css({ height: '0' });
      $('.open').removeClass('open');
      // standard
      $(this).parent().addClass('open');
      $(this).attr('aria-expanded', 'true');

      // 320
      if (document.body.clientWidth < 768) {
        $(this).parent().parent().addClass('menu-level1');
        var _outerHeight = $(this).parent().find('ul[role=menu]').outerHeight();
        $('.navbar-toggleable-xs').css({ height: _outerHeight });
      } else {
        $('.navbar-toggleable-xs').css({
          height: 'inherit'
        });
        $('.closing-bare').animate({ height: '40px' }, 200);
      }
    });

    // extending to level 2 in 320
    $('.nav-item ul li div h3').on('click', function () {
      $(this).parent().find('ul').addClass('open');
      $(this).parent().find('ul').prepend('<li class="back_menu1" ><h4 class="back-menu1title">' + this.innerHTML + '</h4></li>');
      $('.back_menu1').on('click', backToMenu1);
      if (document.body.clientWidth < 768) {
        var _outerHeight2 = $(this).parent().find('ul').outerHeight();
        $('.navbar-toggleable-xs').css({ height: _outerHeight2 });
        $('.menu-level1').addClass('menu-level2');
      }
    });

    // back to level 0 in 320
    $('.nav-item .row h2').on('click', function () {
      $('.menu-level1').removeClass('menu-level1');
      $('.navbar-toggleable-xs').css({ height: 'inherit' });
    });

    // back to level 1 in 320
    function backToMenu1() {
      $('.menu-level1').removeClass('menu-level2');
      $('.back_menu1').remove();
      $('.row .open').removeClass('open');
      if (document.body.clientWidth < 768) {
        var _outerHeight3 = $('.menu-level1 > .nav-item.open ul ').outerHeight();
        $('.navbar-toggleable-xs').css({ height: _outerHeight3 });
      }
    }

    //  openning mega menu in 320
    $('.megamenubacktop').on('click', function () {
      $('.menu-level1').removeClass('menu-level1').removeClass('menu-level2');
      $('.navbar-toggleable-xs').css({ height: 'inherit' });
      $('.topmenucontent .icon-search').removeClass('color-orange');
      $('.megamenubacktop').parent().find('.megamenuclosetop').addClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.container .navbar-toggleable-xs').addClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.navbar-langbar').addClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.menu-footer-320').addClass('active');
      $('.navbar-smallsearchbar').removeClass('active');
      $(this).addClass('disabled');
    });

    // close mega menu in 320
    $('.megamenuclosetop , .closing-bare-button a').on('click', function () {
      $('.open').removeClass('open');
      $('.megamenuclosetop').parent().find('.megamenubacktop').removeClass('disabled');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.container .navbar-toggleable-xs').removeClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.navbar-langbar').removeClass('active');
      $('.megamenuclosetop').parent().parent().parent().parent().find('.menu-footer-320').removeClass('active');
      $(this).removeClass('active');
    });

    // search bar
    $('.megamenusearchtop').on('click', function () {
      $('.megamenuclosetop').trigger('click');
      $('.topmenucontent .icon-search').addClass('color-orange');
      $('.navbar-smallsearchbar').addClass('active');
    });

    // clear search
    $('.megamenusearchinputclose').on('click', function () {
      $(this).parent().find('input').val('');
      $(this).removeClass('visible');
    });

    $('.megamenusearchinputtext').on('keyup', function () {
      if ($(this).val() !== '') {
        $(this).parent().find('.megamenusearchinputclose').addClass('visible');
      } else {
        $(this).parent().find('.megamenusearchinputclose').removeClass('visible');
      }
    });
  })(jQuery);

  module.exports = Megamenu;
});
