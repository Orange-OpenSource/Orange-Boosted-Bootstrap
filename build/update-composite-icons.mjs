#!/usr/bin/env node

// update-composite-icons.mjs
//
// Updates the SVG data URIs embedded in the brand _composite.scss files
// (orange, sosh, orange-compact) from SVG source files in a given icons
// directory. Builds a map of all icons per brand, compares current vs
// updated SVGs, replaces modified ones, and always updates the version
// comment. Reference lines ($var: $other-var) and deduplicated lines
// (var(--#{$prefix}...)) are resolved: replaced with the actual SVG from
// the icons directory.
//
// After replacing, a deduplication pass detects icons that share the exact
// same SVG data URI within a single composite file. Duplicates are replaced
// with a CSS custom property reference of the form var(--#{$prefix}first-variable)
// where "first-variable" is the Sass variable name (without $) of the first
// occurrence. The corresponding comment is annotated with
// "— same icon as $first-variable".
// Additionally, the first variable is registered in the $svg-as-custom-props
// Sass map so the CSS custom property is exposed at the :root level.
//
// SVG normalization: strip XML prologue & comments, remove fill="currentColor",
// remove width/height attributes, collapse whitespace, use single quotes.
//
// The icons directory must contain subdirectories matching brand source names.
// Brand mapping: orange → orange/, sosh → sosh/, orange-compact → orange/
//
// Usage:
//   npm run update-composite-icons -- "<icons-directory>"
//   npm run update-composite-icons -- --icons-root "<icons-directory>"
//   npm run update-composite-icons -- --icons-root "<icons-directory>" --version 2.1
//
// The version is derived automatically from the folder name (e.g. "OUDS Icons V2.1"
// → v2.1) or can be set explicitly with --version.
//
// Output: the full icon map for each brand, followed by a summary with counts.

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

const COMPONENT_BLOCK_START = /^\/\/\/ \*\*\* OUDS components icons[^\r\n]*$/m
const COMPONENT_BLOCK_END = /^\s*\/\/\/ \*\*\* (Legacy icons|Icons for draft components)/m
const ICON_COMMENT = /^\s*\/\/\s+([^ ]+)\s+v([0-9.]+)(?:\s+—\s+same icon as \$[a-z0-9-]+)?\s*$/i
const VARIABLE_LINE = /^(\s*)(\$[a-z0-9-]+):\s*url\("data:image\/svg\+xml,([^"]*)"\)\s*!default;\s*$/i
const DEDUP_VARIABLE_LINE = /^(\s*)(\$[a-z0-9-]+):\s*var\(--#\{\$prefix\}([a-z0-9-]+)\)\s*!default;\s*$/i
const REFERENCE_VARIABLE_LINE = /^(\s*)(\$[a-z0-9-]+):\s*(\$[a-z0-9-]+)\s*!default;\s*$/i
const DEDUP_SUFFIX_PATTERN = /\s+—\s+same icon as \$[a-z0-9-]+/i

const SCRIPT_DIRECTORY = path.dirname(fileURLToPath(import.meta.url))
const REPOSITORY_ROOT = path.resolve(SCRIPT_DIRECTORY, '..')

// --- CLI argument parsing ---

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

// --- Path helpers ---

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

// --- Block parsing ---

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

// --- SVG normalization ---

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
  result = optimize(result, { multipass: true, floatPrecision: 1 }).data
  return result
    .replace(/\s(?:width|height|fill)=("[^"]*"|'[^']*')/g, '')
    .replace(/\r\n|\r|\n/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/"/g, '\'')
}

// --- Source SVG loading ---

async function loadSourceSvg(iconsRoot, sourceName, relativeIconPath) {
  const relativeWithExtension = relativeIconPath.endsWith('.svg') ? relativeIconPath : `${relativeIconPath}.svg`
  const svgAbsolutePath = path.join(iconsRoot, sourceName, ...relativeWithExtension.split('/'))
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

  return normalizeSvg(raw)
}

// --- Comment parsing ---

function parseCommentPath(line) {
  const match = line.match(ICON_COMMENT)
  if (!match) {
    return null
  }

  const rawPath = match[1].replace(/\.svg$/i, '')
  const version = match[2]
  const parts = rawPath.split('/')
  if (parts.length < 2) {
    return null
  }

  return {
    commentPath: rawPath,
    version,
    relativeIconPath: parts.slice(1).join('/')
  }
}

// --- Line builders ---

function buildVariableLine(indent, variable, dataUriValue) {
  return `${indent}${variable}: url("data:image/svg+xml,${dataUriValue}") !default;`
}

function buildCommentLine(commentPath, version) {
  return `// ${commentPath} v${version}`
}

// --- Main processing per brand ---

/**
 * Warns when a pending icon comment (`// path v1.0`) is discarded without
 * ever being consumed by a following variable line. This can happen if the
 * SCSS formatting drifts from what the parser expects (see PR description
 * for details on the associated risks).
 */
function warnOrphanComment(packageName, pendingComment, reason) {
  if (!pendingComment) {
    return
  }

  console.warn(
    `[${packageName}] Orphan icon comment ignored (${reason}): ` +
    `"${pendingComment.commentPath}" v${pendingComment.version} ` +
    `at block-relative line ${pendingComment.commentLineIndex + 1}`
  )
}

async function processBrand({ packageName, sourceName, iconsRoot, version }) {
  const compositePath = getCompositePath(packageName)
  const originalContent = await fs.readFile(compositePath, 'utf8')
  const bounds = getComponentBlockBounds(originalContent)
  const block = originalContent.slice(bounds.startIndex, bounds.endIndex)
  const lines = block.split(/\r\n|\r|\n/)
  const nextLines = [...lines]

  const iconMap = new Map()
  const identical = []
  const modified = []
  const missing = []

  // Collect all entries: comment + variable pairs
  const entries = []
  let pendingComment = null

  for (const [lineIndex, line] of lines.entries()) {
    const parsedComment = parseCommentPath(line)
    if (parsedComment) {
      warnOrphanComment(packageName, pendingComment, 'overwritten by next comment')
      pendingComment = { ...parsedComment, commentLineIndex: lineIndex }
      continue
    }

    // Match url(...) variable line
    const variableMatch = line.match(VARIABLE_LINE)
    if (variableMatch && pendingComment) {
      entries.push({
        type: 'url',
        commentLineIndex: pendingComment.commentLineIndex,
        lineIndex,
        indent: variableMatch[1],
        variable: variableMatch[2],
        currentSvg: variableMatch[3],
        commentPath: pendingComment.commentPath,
        currentVersion: pendingComment.version,
        relativeIconPath: pendingComment.relativeIconPath
      })
      pendingComment = null
      continue
    }

    // Match deduplicated variable line: var(--#{$prefix}...)
    const dedupMatch = line.match(DEDUP_VARIABLE_LINE)
    if (dedupMatch && pendingComment) {
      entries.push({
        type: 'dedup',
        commentLineIndex: pendingComment.commentLineIndex,
        lineIndex,
        indent: dedupMatch[1],
        variable: dedupMatch[2],
        referencedProp: dedupMatch[3],
        currentSvg: null,
        commentPath: pendingComment.commentPath,
        currentVersion: pendingComment.version,
        relativeIconPath: pendingComment.relativeIconPath
      })
      pendingComment = null
      continue
    }

    // Match reference variable line: $var: $other-var !default;
    const refMatch = line.match(REFERENCE_VARIABLE_LINE)
    if (refMatch && pendingComment) {
      entries.push({
        type: 'reference',
        commentLineIndex: pendingComment.commentLineIndex,
        lineIndex,
        indent: refMatch[1],
        variable: refMatch[2],
        referencedVar: refMatch[3],
        currentSvg: null,
        commentPath: pendingComment.commentPath,
        currentVersion: pendingComment.version,
        relativeIconPath: pendingComment.relativeIconPath
      })
      pendingComment = null
      continue
    }

    // Reset pending comment on non-matching comment lines
    if (line.trim().startsWith('//')) {
      warnOrphanComment(packageName, pendingComment, 'followed by unrecognized comment line')
      pendingComment = null
    }
  }

  warnOrphanComment(packageName, pendingComment, 'end of block reached without a following variable line')

  // Load updated SVGs in parallel
  const results = await Promise.all(entries.map(async entry => {
    try {
      const updatedSvg = await loadSourceSvg(iconsRoot, sourceName, entry.relativeIconPath)
      return { ...entry, updatedSvg, found: true }
    } catch (error) {
      // Rethrow OneDrive / invalid-SVG errors so the user sees the message
      if (error.message && error.message.startsWith('File does not appear to be a valid SVG')) {
        throw error
      }

      return { ...entry, updatedSvg: null, found: false }
    }
  }))

  // Process results, update lines, and build the map
  for (const result of results) {
    const iconPath = `${sourceName}/${result.relativeIconPath}`
    const mapEntry = {
      path: iconPath,
      version: result.currentVersion,
      currentSvg: result.currentSvg,
      updatedSvg: result.updatedSvg,
      status: null
    }

    if (!result.found) {
      mapEntry.status = 'missing'
      missing.push({ variable: result.variable, iconPath })
      iconMap.set(result.variable, mapEntry)
      // Don't modify the line
      continue
    }

    // Always update the comment with new version
    nextLines[result.commentLineIndex] = buildCommentLine(result.commentPath, version)

    if (result.type === 'dedup' || result.type === 'reference') {
      // Resolve: replace with actual SVG url(...)
      mapEntry.status = 'modified'
      modified.push({ variable: result.variable, iconPath })
      nextLines[result.lineIndex] = buildVariableLine(result.indent, result.variable, result.updatedSvg)
    } else if (result.currentSvg === result.updatedSvg) {
      mapEntry.status = 'identical'
      identical.push({ variable: result.variable, iconPath })
      // Keep existing line as-is (SVG didn't change)
    } else {
      mapEntry.status = 'modified'
      modified.push({ variable: result.variable, iconPath })
      nextLines[result.lineIndex] = buildVariableLine(result.indent, result.variable, result.updatedSvg)
    }

    mapEntry.version = version
    iconMap.set(result.variable, mapEntry)
  }

  // Write updated content
  const nextBlock = nextLines.join('\n')
  const nextContent = `${originalContent.slice(0, bounds.startIndex)}${nextBlock}${originalContent.slice(bounds.endIndex)}`

  if (nextContent !== originalContent) {
    await fs.writeFile(compositePath, nextContent, 'utf8')
  }

  return {
    packageName,
    iconMap,
    identical,
    modified,
    missing
  }
}

// --- Deduplication ---

/**
 * Adds new entries to the $svg-as-custom-props Sass map in the given content.
 * Each entry maps a custom property name to a data URI value so the icon is
 * exposed as a CSS custom property at the :root level (via _root.scss).
 * Existing entries are preserved; only missing keys are inserted.
 */
function addCustomPropEntries(content, entries) {
  const mapRegex = /(\$svg-as-custom-props:\s*\()([\s\S]*?)(\)\s*!default;)/
  const match = content.match(mapRegex)
  if (!match) {
    return content
  }

  const mapBody = match[2]

  const existingKeys = new Set()
  for (const keyMatch of mapBody.matchAll(/"([^"]+)"\s*:/g)) {
    existingKeys.add(keyMatch[1])
  }

  const toAdd = []
  for (const [key, entryData] of entries) {
    if (!existingKeys.has(key)) {
      toAdd.push({ key, ...entryData })
    }
  }

  if (toAdd.length === 0) {
    return content
  }

  const bodyLines = mapBody.split('\n')

  // Find the last map entry line and ensure it has a trailing comma
  for (let index = bodyLines.length - 1; index >= 0; index--) {
    if (/"[^"]+"\s*:/.test(bodyLines[index])) {
      const line = bodyLines[index]
      const hasComma = /,\s*(?:\/\/.*)?$/.test(line)
      if (!hasComma) {
        bodyLines[index] = line.includes('//') ?
          line.replace(/(\S)(\s+\/\/)/, '$1,$2') :
          `${line.trimEnd()},`
      }

      break
    }
  }

  const newLines = toAdd.map((entry, index) => {
    const comma = index < toAdd.length - 1 ? ',' : ''
    const varList = entry.variables.join(', ')
    return `  "${entry.key}": ${entry.value}${comma} // Duplicated SVG used by ${varList}`
  })

  // Insert new entries after the last existing entry
  let insertPosition = bodyLines.length - 1
  for (let index = bodyLines.length - 1; index >= 0; index--) {
    if (/"[^"]+"\s*:/.test(bodyLines[index])) {
      insertPosition = index + 1
      break
    }
  }

  bodyLines.splice(insertPosition, 0, ...newLines)

  const updatedBody = bodyLines.join('\n')
  return content.replace(mapRegex, `$1${updatedBody}$3`)
}

/**
 * Removes entries from $svg-as-custom-props whose value is a data URI
 * (url("data:image/svg+xml,...")). These are dedup-generated entries from
 * a previous run. Entries referencing Sass variables ($var) are preserved.
 */
function cleanDedupCustomProps(content) {
  const mapRegex = /(\$svg-as-custom-props:\s*\()([\s\S]*?)(\)\s*!default;)/
  const match = content.match(mapRegex)
  if (!match) {
    return content
  }

  const bodyLines = match[2].split('\n')
  const cleanedLines = bodyLines.filter(line => {
    // Keep non-entry lines (blanks, comments)
    if (!/"[^"]+"\s*:/.test(line)) {
      return true
    }

    // Remove entries whose value is a url(...) data URI (dedup-generated)
    return !/:\s*url\(/.test(line)
  })

  // Fix trailing comma: ensure the last entry line has no dangling comma
  for (let index = cleanedLines.length - 1; index >= 0; index--) {
    if (/"[^"]+"\s*:/.test(cleanedLines[index])) {
      cleanedLines[index] = cleanedLines[index].replace(/,(\s*(?:\/\/.*)?)$/, '$1')
      break
    }
  }

  const updatedBody = cleanedLines.join('\n')
  return content.replace(mapRegex, `$1${updatedBody}$3`)
}

/**
 * After SVGs have been updated, detects icons that share the exact same SVG
 * data URI within a single composite file. Duplicates are replaced with a CSS
 * custom property reference var(--#{$prefix}first-variable) and the first
 * variable is registered in $svg-as-custom-props.
 */
async function deduplicateIconsInBrand(packageName) {
  const compositePath = getCompositePath(packageName)
  let content = await fs.readFile(compositePath, 'utf8')

  // Clean dedup entries from a previous run before re-detecting duplicates
  content = cleanDedupCustomProps(content)

  const bounds = getComponentBlockBounds(content)
  const block = content.slice(bounds.startIndex, bounds.endIndex)
  const lines = block.split(/\r\n|\r|\n/)

  const deduplications = []
  const customPropEntries = new Map()

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

  // Map from dataUri to { variable, entry, duplicates: [entry, ...] }
  const dataUriToFirst = new Map()

  // First pass: collect all duplicates
  for (const entry of variableEntries) {
    if (dataUriToFirst.has(entry.dataUri)) {
      dataUriToFirst.get(entry.dataUri).duplicates.push(entry)
    } else {
      dataUriToFirst.set(entry.dataUri, { variable: entry.variable, entry, duplicates: [] })
    }
  }

  // Second pass: apply replacements for groups with duplicates
  for (const [, group] of dataUriToFirst) {
    if (group.duplicates.length === 0) {
      continue
    }

    const customPropName = group.variable.replace(/^\$/, '')
    const allVariables = [group.variable, ...group.duplicates.map(d => d.variable)]

    // Replace the first occurrence
    lines[group.entry.lineIndex] = `${group.entry.indent}${group.variable}: var(--#{$prefix}${customPropName}) !default;`

    deduplications.push({
      variable: group.variable,
      referencesCustomProp: customPropName
    })

    // Replace all subsequent duplicates
    for (const entry of group.duplicates) {
      lines[entry.lineIndex] = `${entry.indent}${entry.variable}: var(--#{$prefix}${customPropName}) !default;`

      if (entry.commentLineIndex !== null) {
        let commentLine = lines[entry.commentLineIndex]
        commentLine = commentLine.replace(DEDUP_SUFFIX_PATTERN, '')
        lines[entry.commentLineIndex] = `${commentLine} — same icon as ${group.variable}`
      }

      deduplications.push({
        variable: entry.variable,
        referencesVariable: group.variable
      })
    }

    // Add map entry with all variables listed in the comment
    customPropEntries.set(customPropName, {
      value: `url("data:image/svg+xml,${group.entry.dataUri}")`,
      variables: allVariables
    })
  }

  if (deduplications.length > 0) {
    const nextBlock = lines.join('\n')
    content = `${content.slice(0, bounds.startIndex)}${nextBlock}${content.slice(bounds.endIndex)}`
  }

  if (customPropEntries.size > 0) {
    content = addCustomPropEntries(content, customPropEntries)
  }

  if (deduplications.length > 0 || customPropEntries.size > 0) {
    await fs.writeFile(compositePath, content, 'utf8')
  }

  return deduplications
}

// --- Reporting ---

function writeReport(reports) {
  process.stdout.write('\n\nUpdate component icons report\n')
  process.stdout.write('=============================\n')

  process.stdout.write('\n\nSummary\n')
  process.stdout.write('-------\n')
  for (const report of reports) {
    process.stdout.write(
      `[${report.packageName}] Identical: ${report.identical.length} | ` +
      `Modified: ${report.modified.length} | ` +
      `Missing: ${report.missing.length} | ` +
      `Deduplicated: ${report.deduplicated.length}\n`
    )
  }
}

// --- Entry point ---

async function main() {
  const { iconsRoot: iconsRootFromArgs, version: versionFromArgs } = parseArgs(process.argv.slice(2))
  const iconsRoot = resolveIconsRoot(iconsRootFromArgs)
  await validateIconsRoot(iconsRoot)
  const version = resolveVersion(versionFromArgs, iconsRoot)

  process.stdout.write(`Icons root: ${iconsRoot}\n`)
  process.stdout.write(`Version:    v${version}\n`)

  const reports = await Promise.all(BRANDS.map(async brand => {
    return processBrand({
      packageName: brand.packageName,
      sourceName: brand.sourceName,
      iconsRoot,
      version
    })
  }))

  // Deduplication pass: detect identical SVGs within each brand
  const dedupResults = await Promise.all(BRANDS.map(async brand => {
    return deduplicateIconsInBrand(brand.packageName)
  }))

  // Merge dedup results into reports and update icon maps
  for (const [index, report] of reports.entries()) {
    report.deduplicated = dedupResults[index]
    for (const dedup of dedupResults[index]) {
      const mapEntry = report.iconMap.get(dedup.variable)
      if (mapEntry) {
        mapEntry.deduplicatedTo = dedup.referencesVariable || `--#{$prefix}${dedup.referencesCustomProp}`
      }
    }
  }

  writeReport(reports)
}

main().catch(error => {
  console.error(error.message)
  process.exit(1)
})
