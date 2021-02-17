'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Boosted v${pkg.version} (${pkg.homepage})
  * Copyright 2014-${year} ${pkg.author}
  * Copyright 2014-${year} ${pkg.contributors[0]}
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
  **
  * This a fork of Bootstrap:
  * Bootstrap${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (https://getbootstrap.com/)
  * Copyright 2011-${year} The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner
