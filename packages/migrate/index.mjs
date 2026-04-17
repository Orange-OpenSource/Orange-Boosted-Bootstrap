#!/usr/bin/env node

import { migrate } from './src/migrate.mjs'
import { getReplacementsWarnings } from './src/warnings.mjs'

// Parse command line arguments
const args = process.argv.slice(2)
const ob1Flag = args.includes('--ob1')
const globPattern = args.find(arg => !arg.startsWith('--')) || '**/*.(css,scss,html)'

try {
  const results = await migrate({
    files: globPattern,
    ob1: ob1Flag
  })
  const warning = getReplacementsWarnings()
  console.log('Replacement results:', results)
  if (warning.length > 0) {
    console.log('\nSome actions needed :\n', warning)
  }
} catch (error) {
  console.error('Error replacing text:', error)
}
