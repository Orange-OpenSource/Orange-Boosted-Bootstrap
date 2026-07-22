process.chdir('../../')

import { defineConfig } from 'astro/config'

import { oudsWeb } from './src/libs/astro'
import { getConfig } from './src/libs/config'
import { algoliaPlugin } from './src/plugins/algolia-plugin'
import { stackblitzPlugin } from './src/plugins/stackblitz-plugin'
import type { Element, Text } from 'hast'
import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark'
import { rehypeBsTable } from './src/libs/rehype'
import { remarkBsComp, remarkBsConfig, remarkBsDocsref } from './src/libs/remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const isDev = process.env.NODE_ENV === 'development'

const headingsRangeRegex = new RegExp(`^h[${getConfig().anchors.min}-${getConfig().anchors.max}]$`)

const site = isDev
  ? // In development mode, use the local dev server.
    'http://localhost:9001'
  : process.env.DEPLOY_PRIME_URL !== undefined
    ? // If deploying on Netlify, use the `DEPLOY_PRIME_URL` environment variable.
      process.env.DEPLOY_PRIME_URL
    : // Otherwise, use the `baseURL` value defined in the `config.yml` file.
      getConfig().baseURL

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  build: {
    assets: `${getConfig().brand}/docs/${getConfig().docs_version}/assets`
  },
  integrations: [oudsWeb()],
  markdown: {
    smartypants: false,
    processor: unified({
      rehypePlugins: [
        rehypeHeadingIds,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            content: [{ type: 'text', value: ' '}],
            properties: (element: Element) => ({
              class: 'anchor-link',
              ariaLabel: `Link to this section: ${(element.children[0] as Text).value}`
            }),
            test: (element: Element) => element.tagName.match(headingsRangeRegex)
          }
        ],
        rehypeBsTable
      ],
      remarkPlugins: [remarkBsConfig, remarkBsDocsref, remarkBsComp]
    }),
    syntaxHighlight: 'prism'
  },
  site,
  vite: {
    plugins: [algoliaPlugin(), stackblitzPlugin()]
  }
})
