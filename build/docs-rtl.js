#!/usr/bin/env node

/* eslint-disable max-nested-callbacks */

'use strict'

/*!
 * Script to convert sample to rtl.
 * Copyright 2017-2022 The Boosted Authors
 * Copyright 2017-2022 Orange
 * Licensed under MIT
 */

const sh = require('shelljs')
const os = require('os')

if (os.platform() === 'linux') {
  sh.exec('echo linux')
  sh.exec('find _site/docs/4.6/examples/ -mindepth 1 -maxdepth 1 -type d -name "rtl-*" -exec bash -c \'rm -rf _site/docs/4.6/examples/$(basename "{}") ; rmdir _site/docs/4.6/examples/$(basename "{}")\' \\;', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)

    sh.exec('find _site/docs/4.6/examples/ -mindepth 1 -maxdepth 1 -type d ! -name "screenshots" -exec bash -c \'mkdir -p _site/docs/4.6/examples/rtl-$(basename "{}") ; cp -av "{}"/* _site/docs/4.6/examples/rtl-$(basename "{}")/ ; rtlcss -e "-rtl.css" -d _site/docs/4.6/examples/rtl-$(basename "{}")/\' \\;', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
      sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\/boosted\\.css/\\/boosted-rtl\\.css/gi\' {} \\;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
        sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\/boosted\\.min.css/\\/boosted-rtl\\.min.css/gi\' {} \\;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
          sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue55_W1G/HelveticaNeueW20-55Roman/gi\' {} \\;', (code, stdout, stderr) => {
            console.log('Exit code:', code)
            console.log('Program output:', stdout)
            console.log('Program stderr:', stderr)
            sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue75_W1G/HelveticaNeueW20-75Bold/gi\' {} \\;', (code, stdout, stderr) => {
              console.log('Exit code:', code)
              console.log('Program output:', stdout)
              console.log('Program stderr:', stderr)
              sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} \\;', (code, stdout, stderr) => {
                console.log('Exit code:', code)
                console.log('Program output:', stdout)
                console.log('Program stderr:', stderr)
              })
            })
          })
        })
      })
    })
  })
} else {
  sh.exec('echo not linux')
  sh.exec('find _site/docs/4.6/examples/ -mindepth 1 -maxdepth 1 -type d -name "rtl-*" -exec bash -c \'rm -rf _site/docs/4.6/examples/$(basename "{}") ; rmdir _site/docs/4.6/examples/$(basename "{}")\' ;', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)

    sh.exec('find _site/docs/4.6/examples/ -mindepth 1 -maxdepth 1 -type d ! -name "screenshots" -exec bash -c \'mkdir -p _site/docs/4.6/examples/rtl-$(basename "{}") ; cp -av "{}"/* _site/docs/4.6/examples/rtl-$(basename "{}")/ ; rtlcss -e "-rtl.css" -d _site/docs/4.6/examples/rtl-$(basename "{}")/\' ;', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
      sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\/boosted\\.css/\\/boosted-rtl\\.css/gi\' {} ;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
        sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\/boosted\\.min.css/\\/boosted-rtl\\.min.css/gi\' {} ;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
          sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue55_W1G/HelveticaNeueW20-55Roman/gi\' {} ;', (code, stdout, stderr) => {
            console.log('Exit code:', code)
            console.log('Program output:', stdout)
            console.log('Program stderr:', stderr)
            sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue75_W1G/HelveticaNeueW20-75Bold/gi\' {} ;', (code, stdout, stderr) => {
              console.log('Exit code:', code)
              console.log('Program output:', stdout)
              console.log('Program stderr:', stderr)
              sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} ;', (code, stdout, stderr) => {
                console.log('Exit code:', code)
                console.log('Program output:', stdout)
                console.log('Program stderr:', stderr)
              })
            })
          })
        })
      })
    })
  })
}

sh.exec('cp -av _site/docs/4.6/boostwatch/index.html _site/docs/4.6/boostwatch/rtl-index.html', (code, stdout, stderr) => {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
  sh.exec('sed -i \'s/\\/boosted\\.css/\\/boosted-rtl\\.css/gi\' _site/docs/4.6/boostwatch/rtl-index.html', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)
    sh.exec('sed -i \'s/\\/boosted\\.min\\.css/\\/boosted-rtl\\.min\\.css/gi\' _site/docs/4.6/boostwatch/rtl-index.html', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
      sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue55_W1G/HelveticaNeueW20-55Roman/gi\' {} ;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
        sh.exec('find _site/docs/4.6/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/HelvNeue75_W1G/HelveticaNeueW20-75Bold/gi\' {} ;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
          sh.exec('sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' _site/docs/4.6/boostwatch/rtl-index.html', (code, stdout, stderr) => {
            console.log('Exit code:', code)
            console.log('Program output:', stdout)
            console.log('Program stderr:', stderr)
          })
        })
      })
    })
  })
})
