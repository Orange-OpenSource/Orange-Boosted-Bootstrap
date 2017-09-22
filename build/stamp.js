const fs = require('fs')

fs.readFile('package.json', (err, data) => {
  if (err) {
    throw err
  }

  const pkg = JSON.parse(data)
  const year = new Date().getFullYear()

  const stampTop =
`/*!
 * Boosted v${pkg.version} (${pkg.homepage})
 * Copyright 2014-${year} The Boosted Authors
 * Copyright 2014-${year} Orange
 * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
 * This a fork of Bootstrap : Initial license below
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-${year} The Bootstrap Authors
 * Copyright 2011-${year} Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */


if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\'s JavaScript.')
}

(function ($) {
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {
    throw new Error('Bootstrap\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})(jQuery);

(function () {
`
  const stampEnd = `
})();`

  process.stdout.write(stampTop)

  process.stdin.on('end', () => {
    process.stdout.write(stampEnd)
  })

  process.stdin.pipe(process.stdout)
})
