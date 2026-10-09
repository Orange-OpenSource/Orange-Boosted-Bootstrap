'use strict'

const fs = require('node:fs')
const path = require('node:path')
const { runSass } = require('sass-true')
// Use the project's pinned Sass (resolved from libs/web/node_modules), the same compiler as `css-compile`.
// Without it sass-true picks the first one it finds: the hoisted `sass-embedded` from the root
// node_modules (pulled in by the Angular toolchain), which serializes colors differently.
const sass = require('sass')

module.exports = (filename, { describe, it }) => {
  const data = fs.readFileSync(filename, 'utf8')
  const TRUE_SETUP = '$true-terminal-output: false; @import "true";'
  const sassString = TRUE_SETUP + data

  runSass(
    {
      describe,
      it,
      sourceType: 'string',
      sass
    },
    sassString,
    { loadPaths: [path.dirname(filename)] }
  )
}
