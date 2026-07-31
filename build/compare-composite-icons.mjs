#!/usr/bin/env node

// compare-composite-icons.mjs
//
// Compares the SVG data URIs embedded in the 3 brand _composite.scss files
// (orange, sosh, orange-compact) against SVG source files from a given icons
// directory. When an SVG differs, it is replaced in the composite file and
// the version comment is updated. Missing source files are reported but do
// not block execution.
//
// After replacing, a deduplication pass detects icons that share the exact
// same SVG path within a single composite file. Duplicates are replaced with
// a Sass variable reference to the first found. The corresponding comment
// is annotated with "— same icon as $first-variable".
//
// The icons directory must contain subdirectories: orange/, sosh/, wireframe/
// Brand mapping: orange → orange/, sosh → sosh/, orange-compact → orange/
//
// Usage:
//   npm run compare-composite-icons -- "<icons-directory>"
//   npm run compare-composite-icons -- --icons-root "<icons-directory>"
//   npm run compare-composite-icons -- --icons-root "<icons-directory>" --version 2.1
//
// The version is derived automatically from the folder name (e.g. "OUDS Icons V2.1"
// → v2.1) or can be set explicitly with --version.
//
// Output: a detailed report (identical / missing / replaced / deduplicated)
// per brand, followed by a summary with counts.

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const BRANDS = [
  { packageName: 'orange', sourceName: 'orange' },
  { packageName: 'sosh', sourceName: 'sosh' },
  { packageName: 'orange-compact', sourceName: 'orange' }
]

const COMPONENT_BLOCK_START = /^\/\/\/ \*\*\* OUDS components icons[^\r\n]*$/m
const COMPONENT_BLOCK_END = /^\s*\/\/\/ \*\*\* (Legacy icons|Icons for draft components)/m
const ICON_COMMENT = /^\s*\/\/\s+([^ ]+)(?:\s+v[0-9.]+)?(?:\s+—\s+same icon as \$[a-z0-9-]+)?\s*$/i
const VARIABLE_LINE = /^(\s*)(\$[a-z0-9-]+):\s*url\("data:image\/svg\+xml,([^"]*)"\)\s*!default;\s*$/i
const DEDUP_VARIABLE_LINE = /^(\s*)(\$[a-z0-9-]+):\s*(\$[a-z0-9-]+)\s*!default;\s*$/i
const DEDUP_SUFFIX_PATTERN = /\s+—\s+same icon as \$[a-z0-9-]+/i

const SCRIPT_DIRECTORY = path.dirname(fileURLToPath(import.meta.url))
const REPOSITORY_ROOT = path.resolve(SCRIPT_DIRECTORY, '..')

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

function getCompositePath(packageName) {
  return path.join(REPOSITORY_ROOT, 'packages', packageName, 'scss', 'tokens', '_composite.scss')
}

function resolveIconsRoot(iconsRootFromArgs) {
  if (!iconsRootFromArgs) {
    throw new Error('Missing required argument: --icons-root <path>')
  }

  if (path.isAbsolute(iconsRootFromArgs)) {
    return iconsRootFromArgs
  }

  return path.join(REPOSITORY_ROOT, iconsRootFromArgs)
}

const EXPECTED_SUBDIRECTORIES = ['orange', 'sosh', 'wireframe']

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

function getComponentBlockBounds(content) {
  const startMatch = content.match(COMPONENT_BLOCK_START)
  if (!startMatch || startMatch.index === undefined) {
    throw new Error('Could not find start marker for OUDS components icons block')
  }

  const afterStart = startMatch.index + startMatch[0].length
  const tail = content.slice(afterStart)
  const endMatch = tail.match(COMPONENT_BLOCK_END)
  if (!endMatch || endMatch.index === undefined) {
    throw new Error('Could not find end marker for OUDS components icons block')
  }

  const endIndex = afterStart + endMatch.index
  return {
    startIndex: startMatch.index,
    endIndex
  }
}

function parseCommentPath(line) {
  const match = line.match(ICON_COMMENT)
  if (!match) {
    return null
  }

  const rawPath = match[1].replace(/\.svg$/i, '')
  const parts = rawPath.split('/')
  if (parts.length < 2) {
    return null
  }

  return {
    commentPath: rawPath,
    relativeIconPath: parts.slice(1).join('/')
  }
}

function stripAll(string, pattern) {
  let previous = string
  let next = previous.replace(pattern, '')
  while (next !== previous) {
    previous = next
    next = previous.replace(pattern, '')
  }

  return next
}

function normalizeSvg(svgContent) {
  let result = svgContent
  result = stripAll(result, /<\?xml[\s\S]*?\?>/g)
  result = stripAll(result, /<!--[\s\S]*?-->/g)
  return result
    .replace(/\s(?:width|height|fill)=("[^"]*"|'[^']*')/g, '')
    .replace(/\r?\n/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/"/g, '\'')
}

async function loadSourceDataUri(iconsRoot, sourceName, relativeIconPath) {
  const relativeWithExtension = relativeIconPath.endsWith('.svg') ? relativeIconPath : `${relativeIconPath}.svg`
  const svgAbsolutePath = path.join(iconsRoot, sourceName, ...relativeWithExtension.split('/'))
  const raw = await fs.readFile(svgAbsolutePath, 'utf8')
  return normalizeSvg(raw)
}

function buildVariableLine(indent, variable, dataUriValue) {
  return `${indent}${variable}: url("data:image/svg+xml,${dataUriValue}") !default;`
}

function buildCommentLine(commentPath, version) {
  return `// ${commentPath} v${version}`
}

function createEmptyBrandReport(packageName) {
  return {
    packageName,
    identical: [],
    missing: [],
    replaced: [],
    alreadyDeduplicated: []
  }
}

function pushReportEntry(list, variable, iconPath) {
  list.push({
    variable,
    iconPath
  })
}

function collectChecksFromBlock(lines, sourceName, report) {
  const checks = []
  let pendingComment = null

  for (const [lineIndex, line] of lines.entries()) {
    const parsedComment = parseCommentPath(line)
    if (parsedComment) {
      pendingComment = parsedComment
      continue
    }

    const variableMatch = line.match(VARIABLE_LINE)
    const dedupMatch = !variableMatch && line.match(DEDUP_VARIABLE_LINE)

    if (!variableMatch && !dedupMatch) {
      if (line.trim().startsWith('//')) {
        pendingComment = null
      }

      continue
    }

    const indent = variableMatch ? variableMatch[1] : dedupMatch[1]
    const variable = variableMatch ? variableMatch[2] : dedupMatch[2]
    const existingDataUri = variableMatch ? variableMatch[3] : null
    const referencedVariable = dedupMatch ? dedupMatch[3] : null
    const iconPathForReport = pendingComment ? `${sourceName}/${pendingComment.relativeIconPath}` : variable

    if (!pendingComment) {
      pushReportEntry(report.identical, variable, iconPathForReport)
      continue
    }

    checks.push({
      commentLineIndex: lineIndex - 1,
      lineIndex,
      indent,
      line,
      variable,
      existingDataUri,
      relativeIconPath: pendingComment.relativeIconPath,
      commentPath: `${sourceName}/${pendingComment.relativeIconPath}`,
      iconPathForReport,
      wasDeduplicated: Boolean(dedupMatch),
      referencedVariable
    })

    pendingComment = null
  }

  return checks
}

async function compareAndReplaceBrand({
  packageName,
  sourceName,
  iconsRoot,
  version
}) {
  const compositePath = getCompositePath(packageName)
  const originalContent = await fs.readFile(compositePath, 'utf8')
  const bounds = getComponentBlockBounds(originalContent)
  const block = originalContent.slice(bounds.startIndex, bounds.endIndex)
  const lines = block.split(/\r?\n/)

  const report = createEmptyBrandReport(packageName)
  const nextLines = [...lines]
  const checks = collectChecksFromBlock(lines, sourceName, report)

  const results = await Promise.all(checks.map(async check => {
    try {
      const sourceDataUri = await loadSourceDataUri(iconsRoot, sourceName, check.relativeIconPath)

      if (check.wasDeduplicated) {
        // Status determined below after all source data URIs are resolved
        return {
          ...check,
          status: 'pending-dedup',
          sourceDataUri
        }
      }

      return {
        ...check,
        status: sourceDataUri === check.existingDataUri ? 'identical' : 'replaced',
        sourceDataUri
      }
    } catch {
      return {
        ...check,
        status: 'missing'
      }
    }
  }))

  // Build a lookup from variable name to its resolved result
  const resultByVariable = new Map()
  for (const result of results) {
    resultByVariable.set(result.variable, result)
  }

  // Determine status for previously-deduplicated entries:
  // "already-deduplicated" if the referenced variable's icon hasn't changed AND the
  // source SVG for this entry still matches (dedup stays valid — counted in deduplicated).
  // Otherwise "replaced" (icon changed — expanded to url(...) then re-deduplicated if needed).
  for (const result of results) {
    if (result.status !== 'pending-dedup') {
      continue
    }

    const referencedResult = resultByVariable.get(result.referencedVariable)
    result.status = (
      referencedResult &&
      referencedResult.status === 'identical' &&
      result.sourceDataUri === referencedResult.existingDataUri
    ) ?
      'already-deduplicated' :
      'replaced'
  }

  for (const result of results) {
    if (result.status === 'identical') {
      pushReportEntry(report.identical, result.variable, result.iconPathForReport)
      nextLines[result.commentLineIndex] = buildCommentLine(result.commentPath, version)
      nextLines[result.lineIndex] = result.line
      continue
    }

    if (result.status === 'already-deduplicated') {
      // Keep original dedup line unchanged; will be counted in deduplicated report
      report.alreadyDeduplicated.push({
        variable: result.variable,
        referencesVariable: result.referencedVariable
      })
      nextLines[result.commentLineIndex] = buildCommentLine(result.commentPath, version)
      nextLines[result.lineIndex] = result.line
      continue
    }

    if (result.status === 'replaced') {
      pushReportEntry(report.replaced, result.variable, result.iconPathForReport)
      nextLines[result.commentLineIndex] = buildCommentLine(result.commentPath, version)
      nextLines[result.lineIndex] = buildVariableLine(result.indent, result.variable, result.sourceDataUri)
      continue
    }

    pushReportEntry(report.missing, result.variable, result.iconPathForReport)
    if (result.commentLineIndex !== null) {
      let commentLine = nextLines[result.commentLineIndex]
      commentLine = commentLine.replace(DEDUP_SUFFIX_PATTERN, '')
      nextLines[result.commentLineIndex] = commentLine
    }

    nextLines[result.lineIndex] = result.line
  }

  const nextBlock = nextLines.join('\n')
  const nextContent = `${originalContent.slice(0, bounds.startIndex)}${nextBlock}${originalContent.slice(bounds.endIndex)}`

  if (nextContent !== originalContent) {
    await fs.writeFile(compositePath, nextContent, 'utf8')
  }

  return report
}

async function deduplicateIconsInBrand(packageName) {
  const compositePath = getCompositePath(packageName)
  const content = await fs.readFile(compositePath, 'utf8')
  const bounds = getComponentBlockBounds(content)
  const block = content.slice(bounds.startIndex, bounds.endIndex)
  const lines = block.split(/\r?\n/)

  const dataUriToFirst = new Map()
  const deduplications = []

  const variableEntries = []
  for (const [lineIndex, line] of lines.entries()) {
    const match = line.match(VARIABLE_LINE)
    if (!match) {
      continue
    }

    const indent = match[1]
    const variable = match[2]
    const dataUri = match[3]

    let commentLineIndex = null
    if (lineIndex > 0 && lines[lineIndex - 1].trim().startsWith('//')) {
      commentLineIndex = lineIndex - 1
    }

    variableEntries.push({
      lineIndex,
      indent,
      variable,
      dataUri,
      commentLineIndex
    })
  }

  for (const entry of variableEntries) {
    if (dataUriToFirst.has(entry.dataUri)) {
      const firstVariable = dataUriToFirst.get(entry.dataUri)

      lines[entry.lineIndex] = `${entry.indent}${entry.variable}: ${firstVariable} !default;`

      if (entry.commentLineIndex !== null) {
        let commentLine = lines[entry.commentLineIndex]
        commentLine = commentLine.replace(DEDUP_SUFFIX_PATTERN, '')
        lines[entry.commentLineIndex] = `${commentLine} — same icon as ${firstVariable}`
      }

      deduplications.push({
        variable: entry.variable,
        referencesVariable: firstVariable
      })
    } else {
      dataUriToFirst.set(entry.dataUri, entry.variable)
    }
  }

  if (deduplications.length > 0) {
    const nextBlock = lines.join('\n')
    const nextContent = `${content.slice(0, bounds.startIndex)}${nextBlock}${content.slice(bounds.endIndex)}`
    await fs.writeFile(compositePath, nextContent, 'utf8')
  }

  return deduplications
}

function writeReportEntryLines(entries, label) {
  process.stdout.write(`${label} (${entries.length})\n`)
  if (entries.length === 0) {
    return
  }

  for (const entry of entries.sort((left, right) => left.variable.localeCompare(right.variable))) {
    process.stdout.write(`- ${entry.variable} (${entry.iconPath})\n`)
  }
}

function writeDeduplicatedEntryLines(entries) {
  process.stdout.write(`Deduplicated (${entries.length})\n`)
  if (entries.length === 0) {
    return
  }

  for (const entry of entries.sort((left, right) => left.variable.localeCompare(right.variable))) {
    process.stdout.write(`- ${entry.variable} → ${entry.referencesVariable}\n`)
  }
}

function writeReport(reports) {
  process.stdout.write('\nSVG comparison report\n')
  process.stdout.write('=====================\n')

  for (const report of reports) {
    process.stdout.write(`\n[${report.packageName}]\n`)
    writeReportEntryLines(report.identical, 'Identical')
    writeReportEntryLines(report.missing, 'Missing')
    writeReportEntryLines(report.replaced, 'Replaced')
    writeDeduplicatedEntryLines(report.deduplicated)
  }

  process.stdout.write('\nSummary\n')
  process.stdout.write('-------\n')
  for (const report of reports) {
    process.stdout.write(`[${report.packageName}] Identical: ${report.identical.length} | Missing: ${report.missing.length} | Replaced: ${report.replaced.length} | Deduplicated: ${report.deduplicated.length}\n`)
  }
}

async function main() {
  const { iconsRoot: iconsRootFromArgs, version: versionFromArgs } = parseArgs(process.argv.slice(2))
  const iconsRoot = resolveIconsRoot(iconsRootFromArgs)
  await validateIconsRoot(iconsRoot)
  const version = resolveVersion(versionFromArgs, iconsRoot)

  const reports = await Promise.all(BRANDS.map(async brand => {
    return compareAndReplaceBrand({
      packageName: brand.packageName,
      sourceName: brand.sourceName,
      iconsRoot,
      version
    })
  }))

  const dedupResults = await Promise.all(BRANDS.map(async brand => {
    return deduplicateIconsInBrand(brand.packageName)
  }))

  for (const [index, report] of reports.entries()) {
    report.deduplicated = [...report.alreadyDeduplicated, ...dedupResults[index]]
  }

  writeReport(reports)
}

main().catch(error => {
  console.error(error.message)
  process.exit(1)
})
