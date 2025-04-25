import { slug } from 'github-slugger'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
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

export function processMarkdownToHtml(markdown: string): string {
  // Use remark to process markdown to HTML
  const result = remark().use(remarkHtml).processSync(markdown)
  return result.toString()
}
