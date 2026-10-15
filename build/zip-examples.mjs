#!/usr/bin/env node

/*!
 * Script to create the built examples zip archive;
 * requires the `zip` command to be present!
 * Copyright 2020-2026 The Bootstrap Authors
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sh from 'shelljs'
import { format } from 'prettier'

// eslint-disable-next-line unicorn/no-await-expression-member
const BRANDS = (await fs.readdir('packages', { withFileTypes: true })).filter(file => file.isDirectory() && file.name !== 'migrate').map(dir => dir.name)

BRANDS.map(async brand => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))

  const pkgJson = path.join(__dirname, '../package.json')
  const pkg = JSON.parse(await fs.readFile(pkgJson, 'utf8'))

  const versionShort = pkg.version_short
  const distFolder = `ouds-web-${brand}-${pkg.version}-examples`
  const rootDocsDir = '_site'
  const docsDir = `${rootDocsDir}/${brand}/docs/${versionShort}/`

  // these are the files we need in the examples
  const cssFiles = [
    'ouds-web.min.css',
    'ouds-web.min.css.map',
    'ouds-web-bootstrap.min.css',
    'ouds-web-bootstrap.min.css.map',
    'ouds-web.rtl.min.css',
    'ouds-web.rtl.min.css.map',
    'ouds-web-bootstrap.rtl.min.css',
    'ouds-web-bootstrap.rtl.min.css.map'
  ]
  const jsFiles = [
    'ouds-web.bundle.min.js',
    'ouds-web.bundle.min.js.map'
  ]
  const imgFiles = [
    `${brand}-logo.svg`
  ]
  const staticJsFiles = [
    'color-modes.js'
  ]

  sh.config.fatal = true

  if (!sh.test('-d', rootDocsDir)) {
    throw new Error(`The "${rootDocsDir}" folder does not exist, did you forget building the docs?`)
  }

  // switch to the root dir
  sh.cd(path.join(__dirname, '..'))

  // remove any previously created folder/zip with the same name
  sh.rm('-rf', [distFolder, `${distFolder}.zip`])

  sh.mkdir('-p', [
    distFolder,
    `${distFolder}/${brand}/docs/${versionShort}/assets/brand/`,
    `${distFolder}/${brand}/docs/${versionShort}/dist/css/`,
    `${distFolder}/${brand}/docs/${versionShort}/dist/js/`,
    `${distFolder}/${brand}/docs/${versionShort}/assets/js/`,
    `${distFolder}/${brand}/docs/${versionShort}/assets/img/`
  ])

  sh.cp('-Rf', `${docsDir}/examples/*`, distFolder)

  for (const file of cssFiles) {
    sh.cp('-f', `${docsDir}/dist/css/${file}`, `${distFolder}/${brand}/docs/${versionShort}/dist/css/`)
  }

  for (const file of jsFiles) {
    sh.cp('-f', `${docsDir}/dist/js/${file}`, `${distFolder}/${brand}/docs/${versionShort}/dist/js/`)
  }

  for (const file of imgFiles) {
    sh.cp('-f', `${docsDir}/assets/brand/${file}`, `${distFolder}/${brand}/docs/${versionShort}/assets/brand/`)
  }

  for (const file of staticJsFiles) {
    sh.cp('-f', `${docsDir}/assets/js/${file}`, `${distFolder}/${brand}/docs/${versionShort}/assets/js/`)
  }

  sh.cp('-fr', `${docsDir}/assets/img/`, `${distFolder}/${brand}/docs/${versionShort}/assets/`)

  sh.rm(`${distFolder}/index.html`)

  // get all examples' HTML files
  const htmlFiles = sh.find(`${distFolder}/**/*.html`)

  const formatPromises = htmlFiles.map(async file => {
    const fileContents = sh.cat(file)
      .toString()
      .replaceAll(new RegExp(`"/docs/${versionShort}/`, 'g'), '"../')
      .replaceAll(/"..\/dist\//g, `"../${brand}/docs/${versionShort}/assets/dist/`)
      .replaceAll(/(<link\s*href="\.?\.?\/[^"]*"[^>]*) integrity="[^"]*"/g, '$1')
      .replaceAll(/<link[^>]*href="\.\.\/assets\/img\/favicons\/[^"]*"[^>]*>/g, '')
      .replaceAll(/(<script src="\.?\.?\/[^"]*"[^>]*) integrity="[^"]*"/g, '$1')

    let formattedHTML
    try {
      formattedHTML = await format(fileContents, {
        parser: 'html',
        filepath: file
      })
    } catch (error) {
      console.error(`\nError formatting ${file}:`)
      console.error(`Message: ${error.message}`)
      console.error('\nSkipping formatting for this file...\n')
      formattedHTML = fileContents
    }

    new sh.ShellString(formattedHTML).to(file)
  })

  await Promise.all(formatPromises)

  // create the zip file
  sh.exec(`zip -qr9 "${distFolder}.zip" "${distFolder}"`)

  // remove the folder we created
  sh.rm('-rf', distFolder)
})
