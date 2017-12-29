'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const pkg     = require(path.resolve(__dirname, '../package.json'))
const BUNDLE  = process.env.BUNDLE === 'true'
const year    = new Date().getFullYear()

let fileDest  = 'boosted.js'
const external  = ['jquery', 'popper.js']
const plugins = [
  babel({
    exclude: 'node_modules/**', // only transpile our source code
    externalHelpersWhitelist: [ // include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'extends'
    ]
  })
]
const globals = {
  jquery: 'jQuery', // ensure we use jQuery which is always available even in noConflict mode
  'popper.js': 'Popper'
}

if (BUNDLE) {
  fileDest = 'boosted.bundle.js'
  // remove last entry in external array to bundle Popper
  external.pop()
  delete globals['popper.js']
  plugins.push(resolve())
}

module.exports = {
  input: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd'
  },
  name: 'boosted',
  external,
  globals,
  plugins,
  banner: `/*!
   * Boosted v${pkg.version} (${pkg.homepage})
   * Copyright 2014-${year} The Boosted Authors
   * Copyright 2014-${year} Orange
   * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/master/LICENSE)
   * This a fork of Bootstrap : Initial license below
   * Bootstrap v4.0.0-beta.3 (https://getbootstrap.com)
   * Copyright 2011-2017 The Bootstrap Authors
   * Copyright 2011-2017 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */`
}
