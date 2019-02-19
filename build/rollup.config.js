'use strict'

const path    = require('path')
const babel   = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const banner  = require('./banner.js')

const BUNDLE  = process.env.BUNDLE === 'true'

let fileDest  = 'boosted.js'
const external = ['jquery', 'tablesorter', 'swiper', 'popper.js']
const plugins = [
  babel({
    exclude: 'node_modules/**', // Only transpile our source code
    externalHelpersWhitelist: [ // Include only required helpers
      'defineProperties',
      'createClass',
      'inheritsLoose',
      'defineProperty',
      'objectSpread'
    ]
  })
]
const globals = {
  jquery: 'jQuery', // Ensure we use jQuery which is always available even in noConflict mode
  tablesorter: 'tablesorter',
  swiper: 'Swiper',
  'popper.js': 'Popper'
}

if (BUNDLE) {
  fileDest = 'boosted.bundle.js'
  // Remove last entry in external array to bundle Popper
  external.pop()
  delete globals['popper.js']
  plugins.push(resolve())
  // Remove last entry in external array to bundle Swiper
  external.pop()
  delete globals.swiper
  plugins.push(resolve())
  // Remove last entry in external array to bundle tablesort
  external.pop()
  delete globals.tablesorter
  plugins.push(resolve())
}

module.exports = {
  input: path.resolve(__dirname, '../js/src/index.js'),
  output: {
    banner,
    file: path.resolve(__dirname, `../dist/js/${fileDest}`),
    format: 'umd',
    globals,
    name: 'boosted'
  },
  external,
  plugins
}
