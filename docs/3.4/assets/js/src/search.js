// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(function () {
  'use strict'

  var inputElement = document.getElementById('search-input')

  if (!window.docsearch || !inputElement) {
    return
  }

  function getOrigin() {
    var location = window.location
    var origin = location.origin

    if (!origin) {
      var port = location.port ? ':' + location.port : ''

      origin = location.protocol + '//' + location.hostname + port
    }

    return origin
  }

  window.docsearch({
    apiKey: 'a2fb9f18ccc85658e152aeb2dd350860',
    indexName: 'boosted-orange',
    inputSelector: '#search-input',
    algoliaOptions: {
      facetFilters: ['version:3.4']
    },
    handleSelected: function (input, event, suggestion) {
      var url = suggestion.url
      url = suggestion.isLvl1 ? url.split('#')[0] : url
      // If it's a title we remove the anchor so it does not jump.
      window.location.href = url
    },
    transformData: function (hits) {
      return hits.map(function (hit) {
        // When in production, return the result as is,
        // otherwise remove our url from it.
        var siteurl = getOrigin()
        var urlRE = /^https?:\/\/boosted\.orange\.com/

        hit.url = siteurl.match(urlRE) ? hit.url : hit.url.replace(urlRE, '')

        return hit
      })
    },
    debug: false // Set debug to true if you want to inspect the dropdown
  })
}())
