#!/usr/bin/env node

'use strict'

/*!
 * Script to convert sample to rtl.
 * Copyright 2017-2018 The Boosted Authors
 * Copyright 2017-2018 Orange
 * Licensed under MIT
 */

var sh = require('shelljs')
sh.config.fatal = true

sh.exec('find docs/4.0/examples/ -mindepth 1 -maxdepth 1 -type d -name \'rtl-*\' -exec bash -c \'rm -rf docs/4.0/examples/$(basename "{}")/* ; rmdir docs/4.0/examples/$(basename "{}")\' ;', function (code, stdout, stderr) {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)

  sh.exec('find docs/4.0/examples/ -mindepth 1 -maxdepth 1 -type d ! -name \'screenshots\' -exec bash -c \'mkdir -p docs/4.0/examples/rtl-$(basename "{}") ; cp -av "{}"/* docs/4.0/examples/rtl-$(basename "{}")/\' ;', function (code, stdout, stderr) {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)


    sh.exec('find docs/4.0/examples/rtl-* -type f -name \'*.html\' -exec sed -i \'s/boosted\\./boosted-rtl\\./gi\' {} ;', function (code, stdout, stderr) {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)


      sh.exec('find docs/4.0/examples/rtl-* -type f -name \'*.html\' -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} ;', function (code, stdout, stderr) {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
      })
    })
  })
})

