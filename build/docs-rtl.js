#!/usr/bin/env node

'use strict'

/*!
 * Script to convert sample to rtl.
 * Copyright 2017-2018 The Boosted Authors
 * Copyright 2017-2018 Orange
 * Licensed under MIT
 */

const sh = require('shelljs')
sh.config.fatal = true
sh.exec('find site/docs/4.1/examples/ -mindepth 1 -maxdepth 1 -type d -name "rtl-*" -exec bash -c \'rm -rf site/docs/4.1/examples/$(basename "{}")/* ; rmdir site/docs/4.1/examples/$(basename "{}")\' \\;', (code, stdout, stderr) => {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)

  sh.exec('find site/docs/4.1/examples/ -mindepth 1 -maxdepth 1 -type d ! -name "screenshots" -exec bash -c \'mkdir -p site/docs/4.1/examples/rtl-$(basename "{}") ; cp -av "{}"/* site/docs/4.1/examples/rtl-$(basename "{}")/\' \\;', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)

    sh.exec('find site/docs/4.1/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/boosted\\.css/boosted-rtl\\.css/gi\' {} \\;', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)

      sh.exec('find site/docs/4.1/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/boosted\\.min\\.css/boosted-rtl\\.min\\.css/gi\' {} \\;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)

        sh.exec('find site/docs/4.1/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} \\;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
        })
      })
    })
  })
})

