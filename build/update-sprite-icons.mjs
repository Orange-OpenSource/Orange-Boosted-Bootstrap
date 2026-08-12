#!/usr/bin/env node

// compare-sprite-icons.mjs
//
// Compares the SVG symbols in the 3 brand ouds-web-sprite.svg files
// (orange, sosh, orange-compact) against SVG source files from a given
// icons directory. When an SVG differs, the symbol's inner content is
// replaced and the version comment is updated. Icons that do not follow
// the standard path pattern (bicolor, legacy, brand-specific) are
// skipped.
//
// The icons directory must contain subdirectories: orange/, sosh/, wireframe/
// Brand mapping: orange → orange/, sosh → sosh/, orange-compact → orange/
// Exception: if the comment starts with a known brand prefix
// (e.g., orange/functional/...), that brand is used instead of the default.
//
// Usage:
//   npm run update-sprite-icons "<icons-directory>"
//   npm run update-sprite-icons --icons-root "<icons-directory>"
//   npm run update-sprite-icons --icons-root "<icons-directory>" --version 2.1
//
// The version is derived automatically from the folder name (e.g. "OUDS Icons V2.1"
// → v2.1) or can be set explicitly with --version.
//
// Output: a detailed report (identical / missing / replaced / skipped)
// per brand, followed by a summary with counts.

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { optimize } from 'svgo' // eslint-disable-line import/no-unresolved

const BRANDS = [
  { packageName: 'orange', sourceName: 'orange' },
  { packageName: 'sosh', sourceName: 'sosh' },
  { packageName: 'orange-compact', sourceName: 'orange' }
]

const EXPECTED_SUBDIRECTORIES = ['orange', 'sosh', 'wireframe']
const KNOWN_SOURCE_BRANDS = new Set(['orange', 'sosh', 'wireframe'])

const SCRIPT_DIRECTORY = path.dirname(fileURLToPath(import.meta.url))
const REPOSITORY_ROOT = path.resolve(SCRIPT_DIRECTORY, '..')

// A comment that carries an icon path looks like:
//   <!-- category/subcategory/icon-name v2.1 -->
//   <!-- orange/category/subcategory/icon-name v2.1 (note) -->
const ICON_COMMENT = /^(\s*)<!--\s+((?:[a-z][\w-]*\/)*[a-z][\w-]*)\s+v([\d.]+)(?:\s*\([^)]*\))?\s*-->$/i

// Comments matching any of these patterns are ignored entirely.
const SKIP_PATTERNS = [
  /\*\*\*/,
  /\bSpecific bicolor\b/i,
  /\bLegacy\b/i,
  /-specific icon\b/i
]

const SYMBOL_OPEN = /^\s*<symbol\s/
const SYMBOL_CLOSE = /<\/symbol>\s*$/

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(args) {
  const parsed = {}
  const positional = []

  for (let index = 0; index < args.length; index++) {
    const argument = args[index]
    if (argument === '--icons-root' && args[index + 1]) {
      parsed.iconsRoot = args[index + 1]
      index++
      continue
    }

    if (argument.startsWith('--icons-root=')) {
      parsed.iconsRoot = argument.slice('--icons-root='.length)
      continue
    }

    if (argument === '--version' && args[index + 1]) {
      parsed.version = args[index + 1]
      index++
      continue
    }

    if (argument.startsWith('--version=')) {
      parsed.version = argument.slice('--version='.length)
      continue
    }

    positional.push(argument)
  }

  if (!parsed.iconsRoot && positional.length > 0) {
    parsed.iconsRoot = positional[0]
  }

  return parsed
}

// ---------------------------------------------------------------------------
// Path helpers
// ---------------------------------------------------------------------------

function resolveIconsRoot(iconsRootFromArgs) {
  if (!iconsRootFromArgs) {
    throw new Error('Missing required argument: --icons-root <path>')
  }

  if (path.isAbsolute(iconsRootFromArgs)) {
    return iconsRootFromArgs
  }

  return path.join(REPOSITORY_ROOT, iconsRootFromArgs)
}

async function validateIconsRoot(iconsRoot) {
  try {
    const stats = await fs.stat(iconsRoot)
    if (!stats.isDirectory()) {
      throw new Error(`Icons root is not a directory: ${iconsRoot}`)
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`Icons root directory does not exist: ${iconsRoot}`)
    }

    throw error
  }

  const missing = []
  await Promise.all(EXPECTED_SUBDIRECTORIES.map(async subdirectory => {
    const subdirectoryPath = path.join(iconsRoot, subdirectory)
    try {
      const stats = await fs.stat(subdirectoryPath)
      if (!stats.isDirectory()) {
        missing.push(subdirectory)
      }
    } catch {
      missing.push(subdirectory)
    }
  }))

  if (missing.length > 0) {
    throw new Error(
      `Invalid icons directory structure. Missing expected subdirectories: ${missing.join(', ')}\n` +
      `Expected: ${EXPECTED_SUBDIRECTORIES.join(', ')} in ${iconsRoot}`
    )
  }
}

function deriveVersionFromIconsRoot(iconsRoot) {
  const folderName = path.basename(iconsRoot)
  const match = folderName.match(/\bv([0-9]+(?:\.[0-9]+)*)$/i)
  return match ? match[1] : null
}

function resolveVersion(versionFromArgs, iconsRoot) {
  if (versionFromArgs) {
    return versionFromArgs
  }

  const derivedVersion = deriveVersionFromIconsRoot(iconsRoot)
  if (derivedVersion) {
    return derivedVersion
  }

  throw new Error('Unable to determine icons version. Use --version <x.y>')
}

function getSpritePath(packageName) {
  return path.join(
    REPOSITORY_ROOT, 'site', 'static', packageName, 'docs', '[version]', 'assets', 'img', 'ouds-web-sprite.svg'
  )
}

// ---------------------------------------------------------------------------
// SVG helpers
// ---------------------------------------------------------------------------

function stripAll(string, pattern) {
  let previous = string
  let next = previous.replace(pattern, '')
  while (next !== previous) {
    previous = next
    next = previous.replace(pattern, '')
  }

  return next
}

function extractSvgInnerContent(svgFileContent) {
  let result = svgFileContent
  result = stripAll(result, /<\?xml[\s\S]*?\?>/g)
  result = stripAll(result, /<!--[\s\S]*?-->/g)
  result = optimize(result, { multipass: true, floatPrecision: 1 }).data
  result = result.replace(/^\s*<svg[^>]*>/i, '')
  result = result.replace(/<\/svg>\s*$/i, '')
  return result
    .replace(/\r\n|\r|\n/g, '\n')
    .trim()
}

function extractSymbolInnerContent(symbolBlock) {
  const openMatch = symbolBlock.match(/<symbol[^>]*>/)
  const closeIndex = symbolBlock.lastIndexOf('</symbol>')
  if (!openMatch || closeIndex === -1) {
    return null
  }

  return symbolBlock
    .slice(openMatch.index + openMatch[0].length, closeIndex)
    .replace(/\r\n|\r|\n/g, '\n')
    .trim()
}

function normalizeForComparison(content) {
  return content
    .replace(/\r?\n/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s*\/>/g, '/>')
    .trim()
}

// ---------------------------------------------------------------------------
// Comment parsing
// ---------------------------------------------------------------------------

function shouldSkipComment(commentText) {
  return SKIP_PATTERNS.some(pattern => pattern.test(commentText))
}

function parseCommentIconPath(commentText, defaultSourceBrand) {
  const match = commentText.match(ICON_COMMENT)
  if (!match) {
    return null
  }

  const fullPath = match[2]
  const firstSegment = fullPath.split('/')[0]
  let sourceBrand = defaultSourceBrand
  let iconPath = fullPath

  if (KNOWN_SOURCE_BRANDS.has(firstSegment)) {
    sourceBrand = firstSegment
    iconPath = fullPath.slice(firstSegment.length + 1)
  }

  return { fullPath, iconPath, sourceBrand }
}

// ---------------------------------------------------------------------------
// Source loading
// ---------------------------------------------------------------------------

async function loadSourceInnerContent(iconsRoot, sourceBrand, iconPath) {
  const relativeWithExtension = iconPath.endsWith('.svg') ? iconPath : `${iconPath}.svg`
  const svgAbsolutePath = path.join(iconsRoot, sourceBrand, ...relativeWithExtension.split('/'))
  const buffer = await fs.readFile(svgAbsolutePath)
  const raw = buffer.toString('utf8')

  // Guard against OneDrive cloud files returning placeholder data instead of
  // actual content (known issue when Node.js runs under Git Bash / MSYS2).
  if (!raw.trimStart().startsWith('<')) {
    throw new Error(
      'File does not appear to be a valid SVG (does not start with "<"):\n' +
      `  ${svgAbsolutePath}\n\n` +
      'This usually happens when the icons directory is on OneDrive and the\n' +
      'script is launched from Git Bash. OneDrive cloud-file placeholders are\n' +
      'not hydrated correctly under MSYS2.\n\n' +
      'Workarounds:\n' +
      '  1. Run from PowerShell or cmd instead of Git Bash\n' +
      '  2. Copy the icons folder to a local (non-OneDrive) path\n' +
      '  3. Pin the icons folder in OneDrive: right-click → "Always keep on this device"'
    )
  }

  return extractSvgInnerContent(raw)
}

// ---------------------------------------------------------------------------
// Sprite parsing
// ---------------------------------------------------------------------------

function parseSpriteEntries(lines) {
  const entries = []
  let pendingComment = null
  let pendingCommentLine = -1
  let inSymbol = false
  let symbolStartLine = -1
  let symbolLines = []

  for (const [i, line] of lines.entries()) {
    const trimmed = line.trim()

    if (!inSymbol && trimmed.startsWith('<!--') && trimmed.endsWith('-->')) {
      pendingComment = trimmed
      pendingCommentLine = i
      continue
    }

    if (!inSymbol && SYMBOL_OPEN.test(line)) {
      inSymbol = true
      symbolStartLine = i
      symbolLines = [line]

      if (SYMBOL_CLOSE.test(line)) {
        inSymbol = false
        entries.push({
          comment: pendingComment,
          commentLine: pendingCommentLine,
          symbolBlock: symbolLines.join('\n'),
          symbolStartLine,
          symbolEndLine: i
        })
        pendingComment = null
        pendingCommentLine = -1
        symbolLines = []
      }

      continue
    }

    if (inSymbol) {
      symbolLines.push(line)
      if (SYMBOL_CLOSE.test(line)) {
        inSymbol = false
        entries.push({
          comment: pendingComment,
          commentLine: pendingCommentLine,
          symbolBlock: symbolLines.join('\n'),
          symbolStartLine,
          symbolEndLine: i
        })
        pendingComment = null
        pendingCommentLine = -1
        symbolLines = []
      }

      continue
    }

    if (trimmed !== '') {
      pendingComment = null
      pendingCommentLine = -1
    }
  }

  return entries
}

// ---------------------------------------------------------------------------
// Brand comparison & replacement
// ---------------------------------------------------------------------------

function createEmptyBrandReport(packageName) {
  return {
    packageName,
    identical: [],
    missing: [],
    replaced: [],
    skipped: []
  }
}

function pushReportEntry(list, variable, iconPath) {
  list.push({ variable, iconPath })
}

async function compareAndReplaceBrand({ packageName, sourceName, iconsRoot, version }) {
  const spritePath = getSpritePath(packageName)
  const originalContent = await fs.readFile(spritePath, 'utf8')
  const lines = originalContent.split(/\r?\n/)
  const entries = parseSpriteEntries(lines)

  const report = createEmptyBrandReport(packageName)

  // Phase 1: resolve all source icons in parallel
  const results = await Promise.all(entries.map(async entry => {
    const idMatch = entry.symbolBlock.match(/id="([^"]*)"/)
    const symbolId = idMatch ? idMatch[1] : 'unknown'

    if (!entry.comment || shouldSkipComment(entry.comment)) {
      return {
        entry, symbolId, status: 'skipped', reason: entry.comment ? 'special icon' : 'no comment'
      }
    }

    const parsed = parseCommentIconPath(entry.comment, sourceName)
    if (!parsed) {
      return {
        entry, symbolId, status: 'skipped', reason: 'unparseable comment'
      }
    }

    const iconPathDisplay = `${parsed.sourceBrand}/${parsed.iconPath}`

    try {
      const sourceContent = await loadSourceInnerContent(iconsRoot, parsed.sourceBrand, parsed.iconPath)
      const currentContent = extractSymbolInnerContent(entry.symbolBlock)

      if (!currentContent) {
        return {
          entry, symbolId, iconPathDisplay, status: 'skipped', reason: 'cannot extract content'
        }
      }

      const normalizedSource = normalizeForComparison(sourceContent)
      const normalizedCurrent = normalizeForComparison(currentContent)

      if (normalizedSource === normalizedCurrent) {
        return {
          entry, symbolId, iconPathDisplay, status: 'identical'
        }
      }

      return {
        entry, symbolId, iconPathDisplay, status: 'replaced', newInnerContent: sourceContent
      }
    } catch (error) {
      // Rethrow OneDrive / invalid-SVG errors so the user sees the message
      if (error.message && error.message.startsWith('File does not appear to be a valid SVG')) {
        throw error
      }

      return {
        entry, symbolId, iconPathDisplay, status: 'missing'
      }
    }
  }))

  // Phase 2: apply changes (process in reverse order to preserve line indices)
  const nextLines = [...lines]
  const sortedResults = [...results].sort(
    (a, b) => b.entry.symbolStartLine - a.entry.symbolStartLine
  )

  for (const result of sortedResults) {
    const { entry, symbolId, iconPathDisplay, status } = result

    if (status === 'skipped') {
      pushReportEntry(report.skipped, symbolId, result.reason)
      continue
    }

    // Update version in comment for identical, replaced, and missing entries
    if (entry.commentLine >= 0 && status !== 'missing') {
      nextLines[entry.commentLine] = nextLines[entry.commentLine].replace(
        /\bv[\d.]+/,
        `v${version}`
      )
    }

    if (status === 'identical') {
      pushReportEntry(report.identical, symbolId, iconPathDisplay)
      continue
    }

    if (status === 'replaced') {
      pushReportEntry(report.replaced, symbolId, iconPathDisplay)

      // Rebuild the <symbol> block with new inner content
      const openTagMatch = entry.symbolBlock.match(/^(\s*)(<symbol[^>]*>)/)
      if (openTagMatch) {
        const indent = openTagMatch[1]
        const openTag = openTagMatch[2]
        const contentIndent = `${indent}    `

        const formattedContent = result.newInnerContent
          .split('\n')
          .map(line => line.trim())
          .filter(line => line !== '')
          .map(line => `${contentIndent}${line}`)
          .join('\n')

        const newSymbolBlock = `${indent}${openTag}\n${formattedContent}\n${indent}</symbol>`
        const newSymbolLines = newSymbolBlock.split('\n')
        const count = entry.symbolEndLine - entry.symbolStartLine + 1
        nextLines.splice(entry.symbolStartLine, count, ...newSymbolLines)
      }

      continue
    }

    // missing
    pushReportEntry(report.missing, symbolId, iconPathDisplay)
  }

  const nextContent = nextLines.join('\n')
  if (nextContent !== originalContent) {
    await fs.writeFile(spritePath, nextContent, 'utf8')
  }

  return report
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function writeReportEntryLines(entries, label) {
  process.stdout.write(`${label} (${entries.length})\n`)
  if (entries.length === 0) {
    return
  }

  for (const entry of entries.sort((left, right) => left.variable.localeCompare(right.variable))) {
    process.stdout.write(`- ${entry.variable} (${entry.iconPath})\n`)
  }
}

function writeReport(reports) {
  process.stdout.write('\nSVG sprite comparison report\n')
  process.stdout.write('============================\n')

  for (const report of reports) {
    process.stdout.write(`\n[${report.packageName}]\n`)
    writeReportEntryLines(report.identical, 'Identical')
    writeReportEntryLines(report.missing, 'Missing')
    writeReportEntryLines(report.replaced, 'Replaced')
    writeReportEntryLines(report.skipped, 'Skipped')
  }

  process.stdout.write('\nSummary\n')
  process.stdout.write('-------\n')
  for (const report of reports) {
    process.stdout.write(
      `[${report.packageName}] Identical: ${report.identical.length}` +
      ` | Missing: ${report.missing.length}` +
      ` | Replaced: ${report.replaced.length}` +
      ` | Skipped: ${report.skipped.length}\n`
    )
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const { iconsRoot: iconsRootFromArgs, version: versionFromArgs } = parseArgs(process.argv.slice(2))
  const iconsRoot = resolveIconsRoot(iconsRootFromArgs)
  await validateIconsRoot(iconsRoot)
  const version = resolveVersion(versionFromArgs, iconsRoot)

  const reports = await Promise.all(BRANDS.map(async brand =>
    compareAndReplaceBrand({
      packageName: brand.packageName,
      sourceName: brand.sourceName,
      iconsRoot,
      version
    })
  ))

  writeReport(reports)
}

main().catch(error => {
  console.error(error.message)
  process.exit(1)
})
