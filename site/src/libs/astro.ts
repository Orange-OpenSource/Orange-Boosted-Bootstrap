import fs from 'node:fs'
import path from 'node:path'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import type { AstroIntegration } from 'astro'
import autoImport from 'astro-auto-import'
import type { Element, Text } from 'hast'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { getConfig } from './config'
import { rehypeBsTable } from './rehype'
import { remarkBsConfig, remarkBsDocsref } from './remark'
import { configurePrism } from './prism'
import {
  docsDirectory,
  getDocsFsPath,
  getDocsPublicFsPath,
  getDocsStaticFsPath,
  validateVersionedDocsPaths
} from './path'

// A list of directories in `src/components` that contains components that will be auto imported in all pages for
// convenience.
// Note: adding a new component to one of the existing directories requires a restart of the dev server.
const autoImportedComponentDirectories = ['shortcodes']

// A list of static file paths that will be aliased to a different path.
const staticFileAliases = {
  '/docs/[version]/assets/img/favicons/apple-touch-icon.png': '/apple-touch-icon.png',
  '/docs/[version]/assets/img/favicons/favicon.ico': '/favicon.ico'
}

// A list of pages that will be excluded from the sitemap.
const sitemapExcludes = [
  '/404',
  '/docs',
  `/docs/${getConfig().docs_version}`,
  `/docs/dark-mode`,
  `/docs/${getConfig().docs_version}/dark-mode`,
  `/docs/${getConfig().docs_version}/getting-started`,
  `/docs/${getConfig().docs_version}/customize`,
  `/docs/${getConfig().docs_version}/layout`,
  `/docs/${getConfig().docs_version}/content`,
  `/docs/${getConfig().docs_version}/components`,
  `/docs/${getConfig().docs_version}/helpers`,
  `/docs/${getConfig().docs_version}/utilities`,
  `/docs/${getConfig().docs_version}/extend`,
  `/docs/${getConfig().docs_version}/about`
]

const headingsRangeRegex = new RegExp(`^h[${getConfig().anchors.min}-${getConfig().anchors.max}]$`)

export function boosted(): AstroIntegration[] {
  const sitemapExcludedUrls = sitemapExcludes.map((url) => `${getConfig().baseURL}${url}/`)

  configurePrism()

  return [
    boosted_auto_import(),
    {
      name: 'boosted-integration',
      hooks: {
        'astro:config:setup': ({ addWatchFile, updateConfig }) => {
          // Reload the config when the integration is modified.
          addWatchFile(path.join(getDocsFsPath(), 'src/libs/astro.ts'))

          // Add the remark and rehype plugins.
          updateConfig({
            markdown: {
              rehypePlugins: [
                rehypeHeadingIds,
                [
                  rehypeAutolinkHeadings,
                  {
                    behavior: 'append',
                    content: [{ type: 'text', value: ' ' }],
                    properties: (element: Element) => ({
                      class: 'anchor-link',
                      ariaLabel: `Link to this section: ${(element.children[0] as Text).value}`
                    }),
                    test: (element: Element) => element.tagName.match(headingsRangeRegex)
                  }
                ],
                rehypeBsTable
              ],
              remarkPlugins: [remarkBsConfig, remarkBsDocsref]
            }
          })
        },
        'astro:config:done': () => {
          cleanPublicDirectory()
          copyTarteauCitron()
          copyBoosted()
          copyStatic()
          aliasStatic()
        },
        'astro:build:done': ({ dir }) => {
          validateVersionedDocsPaths(dir)
        }
      }
    },
    // https://github.com/withastro/astro/issues/6475
    mdx() as AstroIntegration,
    sitemap({
      filter: (page) => sitemapFilter(page, sitemapExcludedUrls)
    })
  ]
}

function boosted_auto_import() {
  const autoImportedComponents: string[] = []
  const autoImportedComponentDefinitions: string[] = []

  for (const autoImportedComponentDirectory of autoImportedComponentDirectories) {
    const components = fs.readdirSync(path.join(getDocsFsPath(), 'src/components', autoImportedComponentDirectory), {
      withFileTypes: true
    })

    for (const component of components) {
      if (component.isFile()) {
        autoImportedComponents.push(
          `./${path.posix.join(docsDirectory, 'src/components', autoImportedComponentDirectory, component.name)}`
        )

        if (component.name.endsWith('.astro')) {
          autoImportedComponentDefinitions.push(
            `export const ${component.name.replace('.astro', '')}: typeof import('@shortcodes/${
              component.name
            }').default`
          )
        }
      }
    }
  }

  const autoImportedComponentDefinition = `/**
 * DO NOT EDIT THIS FILE MANUALLY.
 *
 * This file is automatically generated by the Boosted Astro Integration.
 * It contains the type definitions for the components that are auto imported in all pages.
 * @see site/src/libs/astro.ts
 */
export declare global {
  ${autoImportedComponentDefinitions.join('\n  ')}
}
`

  fs.writeFileSync(path.join(getDocsFsPath(), 'src/types/auto-import.d.ts'), autoImportedComponentDefinition)

  return autoImport({
    imports: autoImportedComponents
  })
}

function cleanPublicDirectory() {
  fs.rmSync(getDocsPublicFsPath(), { force: true, recursive: true })
}

// Copy the `tarteaucitron` folder from the node_modules the latest version of TarteauCitron to make it available from
// the `/docs/${docs_version}/dist` URL.
function copyTarteauCitron() {
  const source = path.join(process.cwd(), 'node_modules/tarteaucitronjs')
  const destination = path.join(getDocsPublicFsPath(), 'docs', getConfig().docs_version, 'assets/js')

  fs.mkdirSync(destination, { recursive: true })
  fs.copyFileSync(path.join(source, 'tarteaucitron.min.js'), path.join(destination, 'tarteaucitron.min.js'))
  fs.mkdirSync(path.join(destination, 'lang'), { recursive: true })
  fs.copyFileSync(
    path.join(source, 'lang/tarteaucitron.en.min.js'),
    path.join(destination, 'lang/tarteaucitron.en.min.js')
  )
}

// Copy the `dist` folder from the root of the repo containing the latest version of Boosted to make it available from
// the `/docs/${docs_version}/dist` URL.
function copyBoosted() {
  const source = path.join(process.cwd(), 'dist')
  const destination = path.join(getDocsPublicFsPath(), 'docs', getConfig().docs_version, 'dist')

  fs.mkdirSync(destination, { recursive: true })
  fs.cpSync(source, destination, { recursive: true })
}

// Copy the content as-is of the `static` folder to make it available from the `/` URL.
// A folder named `[version]` will automatically be renamed to the current version of the docs extracted from the
// `config.yml` file.
function copyStatic() {
  const source = getDocsStaticFsPath()
  const destination = path.join(getDocsPublicFsPath())

  copyStaticRecursively(source, destination)
}

// Alias (copy) some static files to different paths.
function aliasStatic() {
  const source = getDocsStaticFsPath()
  const destination = path.join(getDocsPublicFsPath())

  for (const [aliasSource, aliasDestination] of Object.entries(staticFileAliases)) {
    fs.cpSync(path.join(source, aliasSource), path.join(destination, aliasDestination))
  }
}

// See `copyStatic()` for more details.
function copyStaticRecursively(source: string, destination: string) {
  const entries = fs.readdirSync(source, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isFile()) {
      fs.cpSync(path.join(source, entry.name), replacePathVersionPlaceholder(path.join(destination, entry.name)))
    } else if (entry.isDirectory()) {
      fs.mkdirSync(replacePathVersionPlaceholder(path.join(destination, entry.name)), { recursive: true })

      copyStaticRecursively(path.join(source, entry.name), path.join(destination, entry.name))
    }
  }
}

function replacePathVersionPlaceholder(name: string) {
  return name.replace('[version]', getConfig().docs_version)
}

function sitemapFilter(page: string, excludedUrls: string[]) {
  if (page === `${getConfig().baseURL}/`) {
    return true
  }

  if (excludedUrls.includes(page)) {
    return false
  }

  if (!page.includes(getConfig().docs_version)) {
    return false
  }

  return true
}
