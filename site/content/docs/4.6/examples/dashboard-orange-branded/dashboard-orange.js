$(document).ready(
  function () {
    'use strict'

    $('#myTable').tablesorter({
      sortList: [[1, 1]],
      headers: {
        0: {
          sorter: false
        }
      },
      onRenderTemplate: function (i, t) {
        return '<span>' + t + '</span>'
      }
    })
  })
