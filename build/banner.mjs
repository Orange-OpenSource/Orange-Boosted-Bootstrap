import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const pkgJson = path.join(__dirname, '../package.json')
const pkg = JSON.parse(await fs.readFile(pkgJson, 'utf8'))

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Boosted v${pkg.version} (${pkg.homepage})
  * Copyright 2015-${year} The Boosted Authors
  * Copyright 2015-${year} Orange
  * Licensed under MIT (https://github.com/orange-opensource/orange-boosted-bootstrap/blob/main/LICENSE)
  * This a fork of Bootstrap : Initial license below
  * Bootstrap${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2011-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

export default getBanner
