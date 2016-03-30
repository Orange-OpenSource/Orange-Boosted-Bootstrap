$(function () {
  'use strict';

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
    }
  })

  QUnit.test('should provide no conflict', function (assert) {
    assert.expect(1)
    assert.strictEqual($.fn.megamenu, undefined, 'megamenu was set back to undefined (org value)')
  })

  QUnit.test('should throw explicit error on undefined method', function (assert) {
    assert.expect(1)
    var $el = $('<div/>')
    $el.boostedMegaMenu()
    try {
      $el.boostedMegaMenu('noMethod')
    }
    catch (err) {
      assert.strictEqual(err.message, 'No method named "noMethod"')
    }
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    assert.expect(2)
    var $el = $('<div/>')
    var $megamenu = $el.boostedMegaMenu()
    assert.ok($megamenu instanceof $, 'returns jquery collection')
    assert.strictEqual($megamenu[0], $el[0], 'collection contains element')
  })

  QUnit.test('should focus first focusable link', function (assert) {
    assert.expect(1)
    var done = assert.async();
    var $el = $('#megamenu_test').boostedMegaMenu();
    var $focusable = $('#megamenu_test a:not([aria-hidden="true"]):first')
    $el.trigger('shown.bs.collapse');
    setTimeout(function () {
      assert.strictEqual(document.activeElement, $focusable[0], 'Link was focused');
      done();
    });
  })

})
