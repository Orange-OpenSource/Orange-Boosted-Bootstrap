'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Boosted v${pkg.version} (${pkg.homepage})
  * Copyright 2014-${year} The Boosted Authors
  * Copyright 2014-${year} Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2011-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner
