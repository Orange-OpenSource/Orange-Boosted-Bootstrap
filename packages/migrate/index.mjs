#!/usr/bin/env node
/* eslint-disable no-undef, no-console */

import { migrate } from './src/migrate.mjs'
import { getFromFlag } from './src/utils/args.mjs'
import { getReplacementsWarnings } from './src/utils/warnings.mjs'

// Parse command line arguments
const args = process.argv.slice(2)
const fromFlag = getFromFlag(args)
const globPattern = args.find(arg => !arg.startsWith('--')) || '**/*.{css,scss,html}'

console.log(`Starting migration from ${fromFlag} with pattern: ${globPattern}`)
try {
  const results = await migrate({
    files: globPattern,
    source: fromFlag
  })
  const warning = getReplacementsWarnings()
  console.log('Replacement results:', results)
  if (warning.length > 0) {
    console.log('\nSome actions needed :\n', warning)
  }
} catch (error) {
  console.error('Error replacing text:', error)
}
