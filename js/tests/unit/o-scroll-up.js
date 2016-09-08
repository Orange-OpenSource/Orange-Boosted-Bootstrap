$(function () {
  'use strict';

  QUnit.module('scroll up plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).scrollup, 'ScrollUp method is defined')
  })

  QUnit.module('button', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.bootstrapScrollup = $.fn.scrollup.noConflict()
    },
    afterEach: function () {
      $.fn.scrollup = $.fn.bootstrapScrollup
      delete $.fn.bootstrapScrollup
    }
  })

  QUnit.test('should provide no conflict', function (assert) {
    assert.expect(1)
    assert.strictEqual($.fn.scrollup, undefined, 'scrollup was set back to undefined (org value)')
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    assert.expect(2)
    var $el = $('<div/>')
    var $scrollup = $el.bootstrapScrollup()
    assert.ok($scrollup instanceof $, 'returns jquery collection')
    assert.strictEqual($scrollup[0], $el[0], 'collection contains element')
  })
})
