$(document).ready(
  function () {
    'use strict'

    $('.o-nav-local').prioritynav()

    $('#news-table').tablesorter({
      headers: {
        4: {
          sorter: false
        }
      },
      onRenderTemplate: function (i, t) {
        return '<span>' + t + '</span>'
      }
    })
  })
