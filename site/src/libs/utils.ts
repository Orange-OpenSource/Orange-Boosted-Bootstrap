import { slug } from 'github-slugger'
import fromMarkdown from 'mdast-util-from-markdown'
import toString from 'mdast-util-to-string'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { getVersionedDocsPath } from './path'
import { getConfig } from './config.ts'

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getSequence(start: number, end: number, step = 1) {
  const sequence = []

  for (let i = start; i <= end; i += step) {
    sequence.push(i)
  }

  return sequence
}

// This function is used in the docs sidebar to generate partial slugs and properly order the sidebar entries and also
// to generate docs frontmatter sections slugs.
// Note: this should be refactored and removed, the sidebar ordering defined in `site/data/sidebar.yml` should not rely
// on slugified custom titles that are expected to generate a string matching the actual file names on disk, this is
// error prone. Instead, custom sidebar titles should be defined in the frontmatter of the MDX files when needed and
// `site/data/sidebar.yml` should only reference the actual file names and slug extracted from the docs content
// collection. Same goes for the docs frontmatter sections.
export function getSlug(str: string) {
  return slug(str).replace(/--+/g, '-')
}

export function trimLeadingAndTrailingSlashes(str: string) {
  return str.replace(/^\/+|\/+$/g, '')
}

export function stripMarkdown(str: string) {
  return toString(fromMarkdown(str))
}

export function processMarkdownToHtml(markdown: string): string {
  // Use remark to process markdown to HTML
  const result = remark().use(remarkHtml).processSync(markdown)
  return result.toString()
}

export function getComponentSVG(className: string): string {
  return `<svg class="${className}" width="1rem" height="1rem" aria-label=" - component type - "><use xlink:href="${getVersionedDocsPath('assets/img/ouds-web-sprite.svg#component-atom')}" /></svg>`
}

export function getVersionLink(version: string): string {
  return `<a class="link float-end pt-none align-content-center" href="https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/tag/${version}-ouds-web">Full changelog</a>`
}

export function isHeading(tag: string): boolean {
  const headingsRangeRegex = new RegExp(`^h[${getConfig().anchors.min}-${getConfig().anchors.max}]$`)
  return !!tag.match(headingsRangeRegex)
}
