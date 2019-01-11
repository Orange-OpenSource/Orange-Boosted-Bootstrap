import 'popper.js'
import $ from 'jquery'
import boosted from '../../../dist/js/boosted'

$(() => {
  $('#resultUID').text(boosted.Util.getUID('bs'))
  $('[data-toggle="tooltip"]').tooltip()
})
