/* eslint no-undef: 0 */
/* eslint new-cap: 0 */
/* eslint unicorn/no-array-callback-reference: 0 */
(function () {
  'use strict'

  var tileServer = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
  var copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'

  function createIcon() {
    var svg = '<path fill="#f16e00" d="M 32.9,0 C 14.7,0 0,14.7 0,32.9 0,58.4 32.9,90 32.9,90 32.9,90 65.8,58.3 65.8,32.9 65.8,14.7 51.1,0 32.9,0 Z m 0,48 c -8.3,0 -15,-6.7 -15,-15 0,-8.3 6.7,-15 15,-15 8.3,0 15,6.7 15,15 0,8.3 -6.7,15 -15,15 z"/>'

    return L.divIcon({
      className: 'leaflet-marker-icon',
      html: '<svg xmlns="https://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 65.800003 90" focusable="false">' + svg + '</svg>',
      iconSize: [30, 40]
    })
  }

  function setContent(pin) {
    return '<h3>' + pin.title + '</h3><p>' + pin.content + '<p>'
  }

  function initOpenStreetMap(el) {
    el.style.height = el.dataset.height + 'rem'
    var pins = JSON.parse(el.dataset.markers)
    var zoom = Number.parseFloat(el.dataset.zoom)
    var bounds = []
    var markers = []

    Object.keys(pins).forEach(function (el) {
      var pin = pins[el]
      var coords = [Number.parseFloat(pin.lat), Number.parseFloat(pin.lng)]
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
