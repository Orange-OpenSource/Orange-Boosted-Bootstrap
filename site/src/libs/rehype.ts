import type { Root } from 'hast'
import type { Plugin } from 'unified'
import { SKIP, visit } from 'unist-util-visit'
import { isHeading } from './utils.ts'

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

// A rehype plugin to add link to changelog
export const rehypeHeaderLinksOrder: Plugin<[], Root> = function () {
  return function rehypeHeaderLinksOrderPlugin(ast) {
    visit(ast, 'element', (node, index, parent) => {
      if (!isHeading(node.tagName) || !parent) {
        return
      }

      const anchorLinkIndex = node.children.findIndex(child => child.type === "element" && child.properties.class?.includes('anchor-link'))
      const headingIndex = node.children.findIndex(child => child.type === 'text')
      if (anchorLinkIndex === -1 || headingIndex === -1) {
        return
      }

      const targetIndex = headingIndex + 1
      if (anchorLinkIndex !== targetIndex) {
        const [anchorLink] = node.children.splice(anchorLinkIndex, 1)
        const insertIndex = anchorLinkIndex < targetIndex ? targetIndex - 1 : targetIndex
        node.children.splice(insertIndex, 0, anchorLink)
      }
    })
  }
}
