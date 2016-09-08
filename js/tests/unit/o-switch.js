$(function () {
  'use strict';

  QUnit.module('switch plugin')

  QUnit.test('should be defined on jquery object', function (assert) {
    assert.expect(1)
    assert.ok($(document.body).switch, 'switch method is defined')
  })

  QUnit.module('button', {
    beforeEach: function () {
      // Run all tests in noConflict mode -- it's the only way to ensure that the plugin works in noConflict mode
      $.fn.bootstrapSwitch = $.fn.switch.noConflict()
    },
    afterEach: function () {
      $.fn.switch = $.fn.bootstrapSwitch
      delete $.fn.bootstrapSwitch
    }
  })

  QUnit.test('should provide no conflict', function (assert) {
    assert.expect(1)
    assert.strictEqual($.fn.switch, undefined, 'switch was set back to undefined (org value)')
  })

  QUnit.test('should return jquery collection containing the element', function (assert) {
    assert.expect(2)
    var $el = $('<div/>')
    var $switch = $el.bootstrapSwitch()
    assert.ok($switch instanceof $, 'returns jquery collection')
    assert.strictEqual($switch[0], $el[0], 'collection contains element')
  })


  QUnit.test('input is checked when toggle is called', function (assert) {
    assert.expect(2)
    var oswitch = $('<div class="o-switch">'+
                    '<input class="checkbox sr-only" id="checkbox1" type="checkbox"/>'+
                    '<div class="toggle form-control-label col-xs-3" aria-hidden="true"></div>'+
                  '</div>')
    var $oswitch = $(oswitch)
    var $toggle = $oswitch.find('.toggle')
    var $input = $oswitch.find('input')

    assert.ok(!$input.prop('checked'), 'input is not checked')
    $toggle.bootstrapSwitch('toggle')
    assert.ok($input.prop('checked'), 'input is checked')
  })

})
