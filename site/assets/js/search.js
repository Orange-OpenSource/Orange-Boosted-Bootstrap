// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

(function () {
  'use strict'

  var inputElement = document.getElementById('search-input')

  if (!window.docsearch || !inputElement) {
    return
  }

  var siteDocsVersion = inputElement.getAttribute('data-docs-version')

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
    apiKey: 'd04e794979727856a09d53f12ead9069',
    indexName: 'boosted-orange',
    appId: 'F4PKENW3TB',
    inputSelector: '#search-input',
    algoliaOptions: {
      facetFilters: ['version:' + siteDocsVersion]
    },
    transformData: function (hits) {
      return hits.map(function (hit) {
        var currentUrl = getOrigin()
        var liveUrl = 'https://boosted.orange.com/'

        // When in production, return the result as is,
        // otherwise remove our url from it.
        hit.url = currentUrl.lastIndexOf(liveUrl, 0) === 0 ?
          // On production, return the result as is
          hit.url :
          // On development or Netlify, replace `hit.url` with a trailing slash,
          // so that the result link is relative to the server root
          hit.url.replace(liveUrl, '/')

        // Prevent jumping to first header
        if (hit.anchor === 'content') {
          hit.url = hit.url.replace(/#content$/, '')
          hit.anchor = null
        }

        return hit
      })
    },
    // Set debug to `true` if you want to inspect the dropdown
    debug: false
  })
})()
