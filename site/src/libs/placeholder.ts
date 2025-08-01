import type { HTMLAttributes } from 'astro/types'
import * as htmlparser2 from 'htmlparser2'

const placeholderRegex = /<Placeholder\s+([^>]+)\/>/g

/**
 * Generates all the placeholder attributes and options required to render a placeholder.
 * @see src/components/shortcodes/Placeholder.astro
 */
export function getPlaceholder(userOptions: Partial<PlaceholderOptions>): Placeholder {
  const options = getOptionsWithDefaults(userOptions)
  const { class: className, height, markup, text, title, width } = options

  const showText = text !== false && text !== 'icon' && text !== 'false'
  const showIcon = text === 'icon'
  const showTitle = title !== false && title !== 'false'

  const placeholderClassList = ['bd-placeholder-img', className].join(' ')
  const placeholderRole = showTitle || showText ? 'img' : undefined
  const placeholderAriaHidden = !showText && !showTitle ? 'true' : undefined

  const placeholderLabel =
    showText || showTitle
      ? `${showTitle ? title : ''}${showTitle && showText ? ': ' : ''}${showText ? text : ''}`
      : undefined

  const optionsWithVisibilities = { ...options, showText, showTitle, showIcon }

  if (markup === 'img') {
    return {
      type: 'img',
      options: optionsWithVisibilities,
      props: {
        alt: placeholderLabel,
        class: placeholderClassList,
        height,
        src: getPlaceholderSrc(showTitle, showText, options),
        width
      }
    }
  }

  return {
    type: 'svg',
    options: optionsWithVisibilities,
    props: {
      'aria-hidden': placeholderAriaHidden,
      'aria-label': placeholderLabel,
      class: placeholderClassList,
      height,
      preserveAspectRatio: 'xMidYMid slice',
      role: placeholderRole,
      width,
      xmlns: 'http://www.w3.org/2000/svg'
    }
  }
}

/**
 * Replaces placeholders described using the `<Placeholder />` component in HTML markup with the expected HTML content.
 * This is useful to render examples that have a pretty large set of constraints:
 *
 *  - The provided HTML code is not valid MDX (e.g. unclosed void elements like <img>) but can contain the
 *      `<Placeholder />` Astro component. This means that we cannot use an Astro slot for example that requires valid
 *      MDX.
 *  - The provided HTML code cannot be parsed in a forgiving way with XML mode enabled (to not lose the structure due
 *      to self-closing MDX or Astro components) and serialized back to a string while closing all known void elements
 *      in order to render it as MDX using `@mdx-js/mdx` & `astro/jsx-runtime`. This works perfectly (tested) but the
 *      DOM needs to contains the exact same HTML markup (even indentation) provided to the example as it is used on the
 *      client to send the example to StackBlitz with the same indentation as the original example.
 *
 * If you are not sure if you need to use this function, you probably don't.
 */
export function replacePlaceholdersInHtml(html: string) {
  return html.replace(placeholderRegex, (match) => {
    const document = htmlparser2.parseDocument(match, { xmlMode: true })
    const placeholderElement = document.firstChild

    if (
      document.children.length > 1 ||
      !placeholderElement ||
      placeholderElement.type !== htmlparser2.ElementType.Tag ||
      placeholderElement.name !== 'Placeholder'
    ) {
      throw new Error('Invalid placeholder element.')
    }

    const placeholder = getPlaceholder(sanitizeHtmlAttributesFromMdx(placeholderElement.attribs))

    return renderPlaceholderToString(placeholder)
  })
}

function renderPlaceholderToString(placeholder: Placeholder) {
  let placeholderStr = `<${placeholder.type}`

  for (const [key, value] of Object.entries(placeholder.props)) {
    if (value === undefined) {
      continue
    }

    placeholderStr = `${placeholderStr} ${key}="${value}"`
  }

  if (placeholder.type === 'img') {
    return `${placeholderStr} />`
  }

  placeholderStr = `${placeholderStr}>`

  if (placeholder.options.showTitle) {
    placeholderStr = `${placeholderStr}<title>${placeholder.options.title}</title>`
  }

  placeholderStr = `${placeholderStr}<rect width="100%" height="100%" fill="${placeholder.options.background}" />`

  if (placeholder.options.showText) {
    placeholderStr = `${placeholderStr}<text x="50%" y="50%" fill="${placeholder.options.color}" dy=".3em">${placeholder.options.text}</text>`
  }

  if (placeholder.options.showIcon) {
    placeholderStr = `${placeholderStr}<svg x="30%" y="30%" width="40%" height="40%" viewBox="0 0 24 24" fill=${
      placeholder.options.background.startsWith('var(--')
        ? placeholder.options.color
        : placeholder.options.background === '#000'
          ? '#ffffff30'
          : '#00000014'
    } aria-hidden="true">
          <path d="M20.4 5.4a1.8 1.8 0 0 0-1.8-1.8h-15v15a1.8 1.8 0 0 0 1.8 1.8h15v-15ZM4.8 4.8h13.5a.9.9 0 0 1 .9.9V15l-4.61-5.237c-.167-.217-.436-.217-.602 0l-3.428 3.983-1.894-2.657c-.166-.217-.435-.217-.6 0L5.28 14.21c-.281-.211-.47-.444-.48-.926V4.8Zm4.8 3.25a1.5 1.5 0 1 1-3 .1 1.5 1.5 0 0 1 3-.1Z"></path>
        </svg>`
  }

  return `${placeholderStr}</${placeholder.type}>`
}

function getOptionsWithDefaults(options: Partial<PlaceholderOptions>) {
  const optionsWithDefaults = Object.assign(
    {},
    {
      background: 'var(--bs-secondary-bg)',
      color: 'var(--bs-tertiary-color)',
      height: '180',
      markup: 'svg',
      title: 'Placeholder',
      width: '100%'
    },
    options
  )

  if (optionsWithDefaults.text === undefined) {
    optionsWithDefaults.text = `${optionsWithDefaults.width}x${optionsWithDefaults.height}`
  }

  return optionsWithDefaults as PlaceholderOptions
}

function getPlaceholderSrc(
  showTitle: boolean,
  showText: boolean,
  { background, color, text, title }: PlaceholderOptions
) {
  // Sanitize the background and text colors by removing the leading hash if any.
  const bgColor = background.replace(/^#/, '')
  const textColor = color.replace(/^#/, '')

  // Build the raw SVG string first
  let svg = `<svg style='font-size: 1.125rem; font-family:system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; -webkit-user-select: none; -moz-user-select: none; user-select: none; text-anchor: middle;' width='200' height='200' xmlns='http://www.w3.org/2000/svg'>`

  if (showTitle) {
    svg += `<title>${title}</title>`
  }

  svg += `<rect width='100%' height='100%' fill='#${bgColor}'></rect>`

  if (showText) {
    svg += `<text x='50%' y='50%' fill='#${textColor}' dy='.3em'>${text}</text>`
  }

  svg += `</svg>`

  const encodedSvg = encodeURIComponent(svg)

  return `data:image/svg+xml,${encodedSvg}`
}

function sanitizeHtmlAttributesFromMdx(attributes: Record<string, unknown>) {
  const sanitizedAttributes: typeof attributes = {}

  for (const [key, value] of Object.entries(attributes)) {
    if (value === undefined) {
      continue
    } else if (value === '{false}') {
      sanitizedAttributes[key] = false
    } else if (value === '{true}') {
      sanitizedAttributes[key] = true
    } else {
      sanitizedAttributes[key] = value
    }
  }

  return sanitizedAttributes
}

export interface PlaceholderOptions {
  /**
   * The SVG background color.
   * @default "var(--bs-secondary-bg)"
   */
  background: string
  /**
   * CSS classes to append to `bd-placeholder-img` for the `svg` or `img` elements.
   */
  class?: string
  /**
   * The text color (foreground).
   * @default "var(--bs-tertiary-color)"
   */
  color: string
  /**
   * The placeholder height.
   * @default "180"
   */
  height: string
  /**
   * If it should render `svg` or `img` tags.
   * @default "svg"
   */
  markup: 'img' | 'svg'
  /**
   * The text to show in the image. You can explicitly pass the `false` boolean value (and not the string "false") to
   * hide the text.
   * @default "${width}x{$height}"
   */
  text: string | false
  /**
   * Used in the SVG `title` tag. You can explicitly pass the `false` boolean value (and not the string "false") to
   * hide the title.
   * @default "Placeholder"
   */
  title: string | false
  /**
   * The placeholder width.
   * @default "100%"
   */
  width: string
}

interface PlaceholderVisibilities {
  showText: boolean
  showTitle: boolean
  showIcon: boolean
}

type Placeholder =
  | {
      type: 'img'
      options: PlaceholderOptions & PlaceholderVisibilities
      props: HTMLAttributes<'img'>
    }
  | {
      type: 'svg'
      options: PlaceholderOptions & PlaceholderVisibilities
      props: HTMLAttributes<'svg'>
    }
