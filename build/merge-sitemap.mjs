import fs from 'node:fs'

function readUrls(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const matches = [...content.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc\s*>/gi)]

  if (matches.length === 0) {
    throw new Error(`No <loc> URLs found in ${filePath}.`)
  }

  return matches
    .map(match => match[1].trim())
    .filter(Boolean)
}

function main() {
  const [firstFile, secondFile] = process.argv.slice(2)

  if (!firstFile || !secondFile) {
    throw new Error(
      'Usage: node merge-sitemaps.mjs sitemap1.xml sitemap2.xml'
    )
  }

  // Read both files before replacing the first one.
  const firstUrls = readUrls(firstFile)
  const secondUrls = readUrls(secondFile)

  // A Set removes duplicates while preserving the URLs' order.
  const allUrls = [...new Set([...firstUrls, ...secondUrls])]

  const sitemapEntries = allUrls
    .map(url => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`

  fs.writeFileSync(firstFile, sitemap, 'utf8')
  console.log(`${allUrls.length} unique URL(s) saved to ${firstFile}.`)
}

try {
  main()
} catch (error) {
  console.error('Error:', error.message)
}
