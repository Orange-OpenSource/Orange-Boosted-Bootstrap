/* eslint no-undef: 0 */
/* eslint new-cap: 0 */
/* eslint no-unused-vars: 0 */
/* eslint unicorn/no-array-callback-reference: 0 */
(function () {
  'use strict'

  var tileServer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  var copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'

  // @todo Get a few arguments here: shape, color, size
  function createIcon() {
    // == Colors
    // @note Should probably stick to functional colors
    var colors = ['#32c832', '#527edb', '#fc0', '#cd3c14']

    // == Shapes
    // startup.orange.com markers
    var startup = '<path fill="#f16e00" d="M 32.9,0 C 14.7,0 0,14.7 0,32.9 0,58.4 32.9,90 32.9,90 32.9,90 65.8,58.3 65.8,32.9 65.8,14.7 51.1,0 32.9,0 Z m 0,48 c -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 0,8.3 -6.7,15 -15,15 z"/>'
    // IoT Map Component "inner" marker
    // @note Based on a fixed size of 30, explaining values:
    // 15 = 30 / 2
    // 14 = (30 / 2) - (2 / 2)
    var circle = '<circle r="14" cx="15" cy="15" fill="' + colors[2] + '" stroke="#fff" stroke-width="2"/>'
    var rounded = '<path d="M30 15.017a15 15 0 10-19.011 14.437 3.105 3.105 0 011.491.932L15 33.221l2.52-2.835a3.105 3.105 0 011.491-.932A14.988 14.988 0 0030 15.017z" fill="' + colors[2] + '"/>'
    // 28 = 30 - 2
    // 1 = 2 / 2
    var square = '<rect x="1" y="1" width="28" height="28" rx="3.75" ry="3.75" fill="' + colors[2] + '" stroke="#fff" stroke-width="2"/>'
    var squared = '<path d="M26.24 0H3.749A3.839 3.839 0 000 3.749v22.49a3.839 3.839 0 003.749 3.75h7.028a3.131 3.131 0 012.206.954l2.011 2.794 2.015-2.794a3.121 3.121 0 012.202-.955h7.029A3.724 3.724 0 0030 26.385l-.012-22.636A3.839 3.839 0 0026.24 0z" fill="' + colors[2] + '"/><rect x="4" y="4" width="22" height="22" rx="2" ry="2" fill="#fff"/>'
    // 15 = 30 / 2
    // 11 = 15 - 4
    // 94 = 2 × µ × 15
    // 17 represents 18% = 17 × 100 / 94
    // @see https://codepen.io/ffoodd/pen/QWEbRwE
    var gauge = '<circle r="15" cx="15" cy="15" fill="#fff"></circle><circle r="11" cx="15" cy="15" fill="none" stroke="red" stroke-width="4" stroke-dasharray="17, 94" transform="rotate(-90 15 15)"></circle>'
    var gauged = '<path d="M30 15.017a15 15 0 10-19.011 14.437 3.105 3.105 0 011.491.932L15 33.221l2.52-2.835a3.105 3.105 0 011.491-.932A14.988 14.988 0 0030 15.017z" fill="#fff"/><circle r="11" cx="15" cy="15" fill="none" stroke-width="4" stroke="red" stroke-dasharray="17, 94" transform="rotate(-90 15 15)"></circle>'

    // @note switch this variable to use one of the above shapes
    var svg = squared
    // Exceptions for height
    var pin = [rounded, squared, gauged]

    // == Content: text / icon
    // @todo Variable character
    var text = '<text fill="#000" dx=".6em" y="50%" dy=".3em" class="fw-bold">H</text>'
    // @todo handle icons, too?

    // == Sizes
    // @todo getting started with variable size
    var height = pin.includes(svg) ? 35 : 30
    var width = 30

    return L.divIcon({
      className: 'o-marker',
      html: '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + height + '" focusable="false">' + svg + text + '</svg>',
      iconSize: [width, height]
    })
  }

  function setContent(pin) {
    var content = '<h3>' + pin.title + '</h3>'
    if (pin.content) {
      content += '<p>' + pin.content + '<p>'
    }

    return content
  }

  function initOpenStreetMap(el) {
    // @todo handle clusters (wtf)
    el.style.height = el.dataset.height + 'rem'
    var pins = JSON.parse(el.dataset.markers)
    var zoom = Number.parseFloat(el.dataset.zoom)
    var bounds = []
    var markers = []

    Object.keys(pins).forEach(function (el) {
      var pin = pins[el]
      var coords = [Number.parseFloat(pin.lat), Number.parseFloat(pin.lng)]
      // @todo Maybe add some logic there, to pass arguments to createIcon()
      var marker = L.marker(coords, { icon: createIcon() })

      markers.push(marker)
      bounds.push(coords)

      var content = setContent(pin)

      marker.bindPopup(content)
    })

    var center = new L.latLngBounds(bounds)
    var points = new L.featureGroup(markers)

    var map = L.map(el.id, {
      scrollWheelZoom: false,
      zoomSnap: 0.1
    }).setView(center.getCenter(), zoom)

    points.addTo(map)

    L.tileLayer(tileServer, { attribution: copyright }).addTo(map)
  }

  document.addEventListener('DOMContentLoaded', function () {
    var map = document.getElementById('map')
    initOpenStreetMap(map)

    var links = map.querySelectorAll('a')
    Array.prototype.forEach.call(links, function (el) {
      el.setAttribute('aria-hidden', 'true')
      el.setAttribute('tabindex', '-1')
    })
  })
})()
