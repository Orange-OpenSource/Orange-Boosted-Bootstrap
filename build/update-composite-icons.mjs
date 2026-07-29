#!/usr/bin/env node

import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const DEFAULT_ICONS_ROOT = 'OUDS Icons V2.1'
const DEFAULT_VERSION = '2.1'

const BRAND_CONFIGS = [
  { packageName: 'orange', sourceName: 'orange' },
  { packageName: 'sosh', sourceName: 'sosh' },
  { packageName: 'orange-compact', sourceName: 'orange' }
]

const COMPONENT_BLOCK_START = /^\/\/\/ \*\*\* OUDS components icons[^\r\n]*$/m
const COMPONENT_BLOCK_END = /^\s*\/\/\/ \*\*\* (Legacy icons|Icons for draft components)/m
const SECTION_TITLE = /^\/\/ \* .+ \*$/
const ICON_COMMENT = /^\/\/ OUDS icon ([^ ]+) v[0-9.]+$/
const VARIABLE_LINE = /^\s*(\$[a-z0-9-]+):\s*url\("data:image\/svg\+xml,([^"]*)"\)\s*!default;$/i

function parseArgs(args) {
  const result = {
    iconsRoot: DEFAULT_ICONS_ROOT,
    version: DEFAULT_VERSION
  }

  for (let index = 0; index < args.length; index++) {
    const argument = args[index]
    if (argument === '--icons-root' && args[index + 1]) {
      result.iconsRoot = args[index + 1]
      index++
      continue
    }

    if (argument === '--version' && args[index + 1]) {
      result.version = args[index + 1]
      index++
    }
  }

  return result
}

function getCompositePath(packageName) {
  return path.join('packages', packageName, 'scss', 'tokens', '_composite.scss')
}

function removeSvgExtension(iconPath) {
  return iconPath.replace(/\.svg$/i, '')
}

function normalizeSvg(svgContent) {
  return svgContent
    .replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\s(?:width|height|fill)=("[^"]*"|'[^']*')/g, '')
    .replace(/\r?\n/g, ' ')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/"/g, '\'')
}

function parseExistingDataUriMap(fileContent) {
  const map = new Map()
  const matches = fileContent.matchAll(new RegExp(VARIABLE_LINE.source, 'gmi'))

  for (const match of matches) {
    map.set(match[1], match[2])
  }

  return map
}

async function loadDataUriFromIconFile(iconsRoot, sourceName, relativeIconPath) {
  const pathWithExtension = relativeIconPath.endsWith('.svg') ? relativeIconPath : `${relativeIconPath}.svg`
  const svgAbsolutePath = path.join(iconsRoot, sourceName, ...pathWithExtension.split('/'))
  const svg = normalizeSvg(await fs.readFile(svgAbsolutePath, 'utf8'))
  return {
    dataUriValue: svg,
    commentPath: `${sourceName}/${removeSvgExtension(relativeIconPath)}`
  }
}

function buildIconDeclarationLine(variable, dataUriValue) {
  return `${variable}: url("data:image/svg+xml,${dataUriValue}") !default;`
}

function buildIconCommentLine(commentPath, version) {
  return `// OUDS icon ${commentPath} v${version}`
}

function getComponentBlockBounds(fileContent) {
  const startMatch = fileContent.match(COMPONENT_BLOCK_START)
  if (!startMatch || startMatch.index === undefined) {
    throw new Error('Could not find start marker for OUDS components icons block')
  }

  const afterStartIndex = startMatch.index + startMatch[0].length
  const tail = fileContent.slice(afterStartIndex)
  const nextMarkerMatch = tail.match(COMPONENT_BLOCK_END)

  if (!nextMarkerMatch || nextMarkerMatch.index === undefined) {
    throw new Error('Could not find end marker for OUDS components icons block')
  }

  const endIndex = afterStartIndex + nextMarkerMatch.index
  return {
    headerLine: startMatch[0],
    startIndex: startMatch.index,
    endIndex
  }
}

function replaceComponentIconsBlock(fileContent, nextComponentBlock) {
  const bounds = getComponentBlockBounds(fileContent)
  return `${fileContent.slice(0, bounds.startIndex)}${nextComponentBlock}${fileContent.slice(bounds.endIndex)}`
}

function parseIconCommentPath(line) {
  const match = line.match(ICON_COMMENT)
  if (!match) {
    return null
  }

  const fullPath = removeSvgExtension(match[1])
  const pathParts = fullPath.split('/').slice(1)
  if (pathParts.length === 0) {
    return null
  }

  return pathParts.join('/')
}

function extractVariableName(line) {
  const match = line.match(VARIABLE_LINE)
  return match ? match[1] : null
}

function parseReferenceInventory(fileContent) {
  const bounds = getComponentBlockBounds(fileContent)
  const blockContent = fileContent.slice(bounds.startIndex, bounds.endIndex)
  const lines = blockContent.split(/\r?\n/)

  const sections = []
  const variableSet = new Set()
  let currentSection = null
  let pendingCommentPath = null
  let pendingInlineComment = null

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line || line.startsWith('/// *** OUDS components icons')) {
      continue
    }

    if (SECTION_TITLE.test(line)) {
      currentSection = { title: line, icons: [] }
      sections.push(currentSection)
      continue
    }

    if (line.startsWith('// OUDS icon ')) {
      pendingCommentPath = parseIconCommentPath(line)
      pendingInlineComment = null
      continue
    }

    if (line.startsWith('//') && !line.startsWith('// *')) {
      pendingInlineComment = line
      pendingCommentPath = null
      continue
    }

    const variable = extractVariableName(line)
    if (!variable) {
      continue
    }

    variableSet.add(variable)

    if (!currentSection) {
      throw new Error(`Variable ${variable} found outside component section`)
    }

    currentSection.icons.push({
      variable,
      relPath: pendingCommentPath,
      inlineComment: pendingInlineComment
    })
    pendingCommentPath = null
    pendingInlineComment = null
  }

  return {
    headerLine: bounds.headerLine,
    sections,
    variableSet
  }
}

function parseCompositeVariableSet(fileContent) {
  const bounds = getComponentBlockBounds(fileContent)
  const blockContent = fileContent.slice(bounds.startIndex, bounds.endIndex)
  const variableSet = new Set()

  for (const line of blockContent.split(/\r?\n/)) {
    const variable = extractVariableName(line)
    if (variable) {
      variableSet.add(variable)
    }
  }

  return variableSet
}

function validateCompositeCoverage(referenceSet, currentSet, packageName) {
  const missing = [...referenceSet].filter(variable => !currentSet.has(variable))
  if (missing.length === 0) {
    return
  }

  throw new Error(
    `Missing icon variables in packages/${packageName}/scss/tokens/_composite.scss: ${missing.join(', ')}`
  )
}

async function validateSourceFilesExistence({ inventory, iconsRoot }) {
  const checks = []

  for (const brand of BRAND_CONFIGS) {
    for (const section of inventory.sections) {
      for (const icon of section.icons) {
        if (!icon.relPath) {
          continue
        }

        const pathWithExtension = icon.relPath.endsWith('.svg') ? icon.relPath : `${icon.relPath}.svg`
        const absolutePath = path.join(iconsRoot, brand.sourceName, ...pathWithExtension.split('/'))
        checks.push({ absolutePath, sourceName: brand.sourceName, relPath: removeSvgExtension(icon.relPath) })
      }
    }
  }

  const missing = []
  await Promise.all(checks.map(async check => {
    try {
      await fs.access(check.absolutePath)
    } catch {
      missing.push(`${check.sourceName}/${check.relPath}`)
    }
  }))

  if (missing.length > 0) {
    throw new Error(`Missing source icon files: ${missing.join(', ')}`)
  }
}

async function buildComponentIconsBlock({
  iconsRoot,
  sourceName,
  version,
  existingDataUriMap,
  inventory
}) {
  const sectionLines = await Promise.all(inventory.sections.map(async section => {
    const iconLines = await Promise.all(section.icons.map(async icon => {
      if (!icon.relPath) {
        const existing = existingDataUriMap.get(icon.variable)
        if (!existing) {
          throw new Error(`Missing existing data URI for ${icon.variable}`)
        }

        return [
          icon.inlineComment || '// Specific empty marker for bullet list',
          buildIconDeclarationLine(icon.variable, existing)
        ]
      }

      const iconData = await loadDataUriFromIconFile(iconsRoot, sourceName, icon.relPath)
      return [
        buildIconCommentLine(iconData.commentPath, version),
        buildIconDeclarationLine(icon.variable, iconData.dataUriValue)
      ]
    }))

    return [
      section.title,
      ...iconLines.flat(),
      ''
    ]
  }))

  return [
    inventory.headerLine,
    '',
    ...sectionLines.flat()
  ].join('\n')
}

async function updateCompositeFile({
  packageName,
  sourceName,
  iconsRoot,
  version,
  inventory
}) {
  const compositePath = getCompositePath(packageName)
  const originalContent = await fs.readFile(compositePath, 'utf8')
  const existingDataUriMap = parseExistingDataUriMap(originalContent)
  const componentBlock = await buildComponentIconsBlock({
    iconsRoot,
    sourceName,
    version,
    existingDataUriMap,
    inventory
  })
  const nextContent = replaceComponentIconsBlock(originalContent, componentBlock)

  if (nextContent !== originalContent) {
    await fs.writeFile(compositePath, nextContent, 'utf8')
  }
}

async function main() {
  const { iconsRoot, version } = parseArgs(process.argv.slice(2))
  const orangeCompositePath = getCompositePath('orange')
  const orangeCompositeContent = await fs.readFile(orangeCompositePath, 'utf8')
  const inventory = parseReferenceInventory(orangeCompositeContent)

  await Promise.all(BRAND_CONFIGS
    .filter(brand => brand.packageName !== 'orange')
    .map(async brand => {
      const compositePath = getCompositePath(brand.packageName)
      const content = await fs.readFile(compositePath, 'utf8')
      const variableSet = parseCompositeVariableSet(content)
      validateCompositeCoverage(inventory.variableSet, variableSet, brand.packageName)
    }))

  await validateSourceFilesExistence({ inventory, iconsRoot })

  await Promise.all(BRAND_CONFIGS.map(async brand => {
    await updateCompositeFile({
      packageName: brand.packageName,
      sourceName: brand.sourceName,
      iconsRoot,
      version,
      inventory
    })
  }))
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
