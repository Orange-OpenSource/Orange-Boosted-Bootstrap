$(function () {
  'use strict'

  QUnit.module('navbar plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).navbar, 'navbar method is defined')
  })

  QUnit.module('navbar', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.boostedNavbar = $.fn.navbar.noConflict()
    },
    afterEach: function () {
      $.fn.navbar = $.fn.boostedNavbar
      delete $.fn.boostedNavbar
      $('#qunit-fixture').html('')
    }
  })

  QUnit.test('should provide no conflict', function (assert) {
    assert.expect(1)
    assert.strictEqual(typeof $.fn.navbar, 'undefined', 'navbar was set back to undefined (org value)')
  })

  QUnit.test('should throw explicit error on undefined method', function (assert) {
    assert.expect(1)
    var $el = $('<div/>')
    $el.boostedNavbar()
    try {
      $el.boostedNavbar('noMethod')
    } catch (error) {
      assert.strictEqual(error.message, 'No method named "noMethod"')
    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    assert.expect(2)
    var $el = $('<div/>')
    var $navbar = $el.boostedNavbar()
    assert.ok($navbar instanceof $, 'returns jquery collection')
    assert.strictEqual($navbar[0], $el[0], 'collection contains element')
  })

  QUnit.test('should not be sticky by default', function (assert) {
    assert.expect(1)
    var $el = $('<div/>').css('position', 'static')
    $el.boostedNavbar()
    assert.strictEqual($el.css('position'), 'static')
  })

  QUnit.test('should be sticky if configured sticky', function (assert) {
    assert.expect(1)
    var $el = $('<div/>').css('position', 'static')
    $el.boostedNavbar({
      sticky: true
    })
    assert.ok($el.hasClass('fixed-top'))
    // assert.strictEqual($el.css('position'), 'fixed')
  })

  QUnit.test('should add height equivalent padding-top to body', function (assert) {
    assert.expect(1)
    var $el = $('<div/>').css('position', 'static')
    $el.css('height', '140px')
    $el.boostedNavbar({
      sticky: true
    })
    var elHeight = $el.outerHeight()
    assert.strictEqual($(document.body).css('padding-top'), elHeight + 'px')
  })

  QUnit.test('should add aria to toggle elements', function (assert) {
    assert.expect(1)
    var $el = $('<div><div class="navbar"><div class="nav-link" data-toggle="collapse"></div></div></div>')
    $el.boostedNavbar()
    assert.strictEqual($el.find('.nav-link[data-toggle]').attr('aria-haspopup'), 'true')
  })
})
