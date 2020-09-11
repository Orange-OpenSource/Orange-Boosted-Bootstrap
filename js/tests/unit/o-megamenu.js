$(function () {
  'use strict'

  QUnit.module('megamenu plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).megamenu, 'megamenu method is defined')
  })

  QUnit.module('megamenu', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.boostedMegaMenu = $.fn.megamenu.noConflict()
    },
    afterEach: function () {
      $.fn.megamenu = $.fn.boostedMegaMenu
      delete $.fn.boostedMegaMenu
      $('#qunit-fixture').html('')
    }
  })

  QUnit.test('should provide no conflict', function (assert) {
    assert.expect(1)
    assert.strictEqual(typeof $.fn.megamenu, 'undefined', 'megamenu was set back to undefined (org value)')
  })

  QUnit.test('should throw explicit error on wrong ID target parameter', function (assert) {
    assert.expect(1)
    var $el = $('<div class="mega-menu"/>')
    try {
      $el.boostedMegaMenu({
        target: 'noid'
      })
    } catch (error) {
      assert.strictEqual(error.message, 'Selector "noid" is not supported')
    }
  })

  QUnit.test('should throw explicit error on wrong type noFocus parameter', function (assert) {
    assert.expect(1)
    var $el = $('<div class="mega-menu"/>')
    try {
      $el.boostedMegaMenu({
        noFocus: 'notboolean'
      })
    } catch (error) {
      assert.strictEqual(error.message, 'no-focus parameter must be boolean')
    }
  })

  QUnit.test('should throw explicit error if element is not a megamenu', function (assert) {
    assert.expect(1)
    var $el = $('<div/>')
    try {
      $el.boostedMegaMenu()
    } catch (error) {
      assert.strictEqual(error.message, 'Element is not a mega menu')
    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    assert.expect(2)
    var $el = $('<div class="mega-menu navbar-collapse collapse" id="collapsing-navbarHead">< ul class="navbar-nav" > <li class="nav-item"> <a class="nav-link collapsed" href="#mega-level-1-collapse" data-toggle="collapse">Shop</a><div class="mega-menu-panel collapse" id="mega-level-1-collapse"><div class="container"><ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="">Mobile</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Mobile</a></li> <li class="nav-item"> <a class="nav-link" href="">Phones</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Phones</a></li> <li class="nav-item"> <a class="nav-link" href="" id="test">Sub link 1</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Plans</a></li> <li class="nav-item"><a class="nav-link" href="">Accessories</a></li></ul></li> <li class="nav-item"> <a class="nav-link" href="">Internet</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Internet</a></li> <li class="nav-item"> <a class="nav-link" href="">Pay monthly offers</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Pay monthly offers</a></li> <li class="nav-item"> <a class="nav-link" href="">Sub link 1</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Shared plans</a></li> <li class="nav-item"><a class="nav-link" href="">Orange TV</a></li></ul></li> <li class="nav-item"> <a class="nav-link" href>Link 3</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Link 3</a></li> <li class="nav-item"><a class="nav-link" href="">Item 1</a></li> <li class="nav-item"><a class="nav-link" href="">Item 2</a></li> <li class="nav-item"><a class="nav-link" href="">Item 3</a></li> <li class="nav-item"><a class="nav-link" href="">Item 4</a></li> <li class="nav-item"><a class="nav-link" href="">Item 5</a></li> <li class="nav-item"><a class="nav-link" href="">Item 6</a></li> <li class="nav-item"><a class="nav-link" href="">Item 7</a></li> <li class="nav-item"><a class="nav-link" href="">Item 8</a></li><li class="nav-item"><a class="nav-link" href="">Item 9</a></li> <li class="nav-item"><a class="nav-link" href="">Item 10</a></li> <li class="nav-item"><a class="nav-link" href="">Item 11</a></li> <li class="nav-item"><a class="nav-link" href="">Item 12</a></li> <li class="nav-item"><a class="nav-link" href="">Item 13</a></li></ul></li></ul> <a data-toggle="collapse" href="#mega-level-1-collapse" aria-expanded="true" aria-controls="collapse-shop" title="close shop menu"><span class="icon-delete"></span></a></div></div></li> <li class="nav-item"> <a class="nav-link collapsed" href="#mega_level_2_collapse" data-toggle="collapse">Discover</a><div class="mega-menu-panel collapse" id="mega_level_2_collapse"><div class="container"><ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="">Test 1</a></li></ul></div></div></li> <li class="nav-item"><a class="nav-link collapsed" href="" data-toggle="collapse">My Orange</a></li></ul ></div >')
    var $megamenu = $el.boostedMegaMenu()
    assert.ok($megamenu instanceof $, 'returns jquery collection')
    assert.strictEqual($megamenu[0], $el[0], 'collection contains element')
  })

  QUnit.test('should add roles on megamenu element on default/mobile view', function (assert) {
    assert.expect(6)
    var $el = $('<div class="mega-menu navbar-collapse collapse" id="collapsing-navbarHead">' +
      '<ul class="navbar-nav" >' +
      '<li class="nav-item">' +
      '<a class="nav-link collapsed" href="#mega-level-1-collapse" data-toggle="collapse">Shop</a>' +
      '<div class="mega-menu-panel collapse" id="mega-level-1-collapse">' +
      '<div class="container">' +
      '<ul class="navbar-nav">' +
      '<li class="nav-item">' +
      '<a class="nav-link" href="">Mobile</a>' +
      '<ul class="navbar-nav">' +
      '<li class="nav-item"><a class="nav-link back" href="">Mobile</a></li> <li class="nav-item"> <a class="nav-link" href="">Phones</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Phones</a></li> <li class="nav-item"> <a class="nav-link" href="" id="test">Sub link 1</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Plans</a></li> <li class="nav-item"><a class="nav-link" href="">Accessories</a></li></ul></li> <li class="nav-item"> <a class="nav-link" href="">Internet</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Internet</a></li> <li class="nav-item"> <a class="nav-link" href="">Pay monthly offers</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Pay monthly offers</a></li> <li class="nav-item"> <a class="nav-link" href="">Sub link 1</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 1</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Sub link 2</a></li> <li class="nav-item"><a class="nav-link" href="">Sub link 3</a></li></ul></li> <li class="nav-item"><a class="nav-link" href="">Shared plans</a></li> <li class="nav-item"><a class="nav-link" href="">Orange TV</a></li></ul></li> <li class="nav-item"> <a class="nav-link" href>Link 3</a><ul class="navbar-nav"> <li class="nav-item"><a class="nav-link back" href="">Link 3</a></li> <li class="nav-item"><a class="nav-link" href="">Item 1</a></li> <li class="nav-item"><a class="nav-link" href="">Item 2</a></li> <li class="nav-item"><a class="nav-link" href="">Item 3</a></li> <li class="nav-item"><a class="nav-link" href="">Item 4</a></li> <li class="nav-item"><a class="nav-link" href="">Item 5</a></li> <li class="nav-item"><a class="nav-link" href="">Item 6</a></li> <li class="nav-item"><a class="nav-link" href="">Item 7</a></li> <li class="nav-item"><a class="nav-link" href="">Item 8</a></li><li class="nav-item"><a class="nav-link" href="">Item 9</a></li> <li class="nav-item"><a class="nav-link" href="">Item 10</a></li> <li class="nav-item"><a class="nav-link" href="">Item 11</a></li> <li class="nav-item"><a class="nav-link" href="">Item 12</a></li> <li class="nav-item"><a class="nav-link" href="">Item 13</a></li></ul></li></ul> <a data-toggle="collapse" href="#mega-level-1-collapse" aria-expanded="true" aria-controls="collapse-shop" title="close shop menu"><span class="icon-delete"></span></a></div></div></li> <li class="nav-item"> <a class="nav-link collapsed" href="#mega_level_2_collapse" data-toggle="collapse">Discover</a><div class="mega-menu-panel collapse" id="mega_level_2_collapse"><div class="container"><ul class="navbar-nav"> <li class="nav-item"> <a class="nav-link" href="">Test 1</a></li></ul></div></div></li> <li class="nav-item"><a class="nav-link collapsed" href="" data-toggle="collapse">My Orange</a></li></ul ></div >')
    var $megamenu = $el.boostedMegaMenu().appendTo($('#qunit-fixture'))
    assert.strictEqual($megamenu.attr('role'), 'application', 'megamenu has role application')
    assert.strictEqual($megamenu.find('> .navbar-nav').attr('role'), 'menu', 'navbar has role menu')
    assert.strictEqual($megamenu.find('.mega-menu-panel').attr('role'), 'menu', 'panels have role menu')
    assert.strictEqual($megamenu.find('.nav-link[data-toggle=collapse]').attr('role'), 'menuitem', 'main menu links have role menuitem')
    assert.strictEqual($megamenu.find('.nav-link.back').attr('aria-hidden'), 'true', 'back link has aria-hidden set to true')
    assert.strictEqual($megamenu.find('.nav-item').attr('role'), 'presentation', 'nav-item s have role presentation')
  })
})
