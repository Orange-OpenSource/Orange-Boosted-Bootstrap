import type { Root } from 'hast'
import type { Plugin } from 'unified'
import { SKIP, visit } from 'unist-util-visit'
import { getHeadingSlug, isHeading } from './utils'

// A rehype plugin to apply CSS classes to tables rendered in markdown (or MDX) files when wrapped in a `<BsTable />`
// component.
export const rehypeBsTable: Plugin<[], Root> = function () {
  return function rehypeBsTablePlugin(ast) {
    visit(ast, 'element', (node, _index, parent) => {
      if (node.tagName !== 'table' || parent?.type !== 'mdxJsxFlowElement' || parent.name !== 'BsTable') {
        return SKIP
      }

      const classAttribute = parent.attributes.find(
        (attribute) => attribute.type === 'mdxJsxAttribute' && attribute.name === 'class'
      )

      if (classAttribute && typeof classAttribute.value !== 'string') {
        return SKIP
      }

      const tableClass = typeof classAttribute?.value === 'string' ? classAttribute.value : 'table'

      if (!node.properties) {
        node.properties = {}
      }

      node.properties = {
        ...node.properties,
        class: tableClass
      }
    })
  }
}

// A rehype plugin to reorder header anchor link and header text
export const rehypeHeaderLinksOrder: Plugin<[], Root> = function () {
  return function rehypeHeaderLinksOrderPlugin(ast) {
    visit(ast, 'element', (node, index, parent) => {
      if (!isHeading(node.tagName) || !parent) {
        return
      }

      const hasAnchorClass = (child: any) => {
        const childClass = child?.properties?.class
        if (typeof childClass === 'string') {
          return childClass.includes('anchor-link')
        }

        if (Array.isArray(childClass)) {
          return childClass.some(item => String(item).includes('anchor-link'))
        }

        return false
      }

      const hasAnchor = hasAnchorClass(node.children[0])
      const headingIndex = node.children.findIndex(child => child.type === 'text')
      if (!hasAnchor || headingIndex === -1) {
        return
      }

      const [anchorLink] = node.children.splice(0, 1)
      node.children.splice(headingIndex, 0, anchorLink)
    })
  }
}

// A rehype plugin to generate correct heading id
export const rehypeCustomHeaderSlug: Plugin<[], Root> = function () {
  return function rehypeCustomHeaderSlugPlugin(ast) {
    visit(ast, 'element', (node) => {
      if (/^h[1-6]$/.test(node.tagName) && node?.properties?.id && typeof node.properties.id === 'string') {
        node.properties = { ...node.properties, id: getHeadingSlug(node.properties.id) }
      }
    })
  }
}
