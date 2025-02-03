#!/usr/bin/env node

/*!
 * Script to modify relative paths in generated OUDS Web documentation.
 *
 * Copyright (c) 2015-2025 Orange SA
 * Copyright (c) 2015-2025 The OUDS Web Authors
 * Licensed under MIT (https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
 */

import sh from 'shelljs'

if (sh.test('-d', 'ouds-web')) {
  sh.rm('-rf', 'ouds-web')
}

sh.mkdir('ouds-web')
sh.mv('_site/*', 'ouds-web/')
sh.mv('ouds-web', '_site/')

for (const file of sh.find('_site').filter(filename => {
  return filename.includes('.html') || filename.includes('.xml')
})) {
  // Replace /docs with /ouds-web/docs
  sh.sed('-i', /"\/docs/g, '"/ouds-web/docs', file)
  // Replace href="/" with href="/ouds-web"
  sh.sed('-i', 'href="/"', 'href="/ouds-web"', file)
}
