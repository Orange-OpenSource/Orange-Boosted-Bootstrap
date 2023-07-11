'use strict'

const fs = require('node:fs')
const path = require('node:path')
const puppeteer = require('puppeteer') // eslint-disable-line import/no-extraneous-dependencies

const version = '5.3'

function createDirectoryIfNeeded(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, 0o766, error => {
      if (error) {
        throw new Error(error)
      }
    })
  }
}

function createMDXDocumentation(content) {
  return `import { Story, Canvas } from '@storybook/addon-docs/blocks';\n\n${content}`
}

function createTemplate(component, index, content) {
  return `import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';\n\
  export default {\n\
    title: 'Components/${component}',\n\
    parameters: {\n\
      docs: {\n\
        page: CustomMDXDocumentation,\n\
      }\n\
    },\n\
  }\n\
  \n\
  export const ${component}_${index} = () => \`${content}\``
}

const convertToKebabCase = string => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

const toPascalCase = str => {
  return (str.match(/[\dA-Za-z]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('')
}

// Get all stories that might be displayed
const files = fs.readdirSync(path.resolve(__dirname, `../site/content/docs/${version}/components/`)).map(fileName => [toPascalCase(fileName.replace('.md', '')), 'components'])
  .concat(fs.readdirSync(path.resolve(__dirname, `../site/content/docs/${version}/forms/`)).map(fileName => [toPascalCase(fileName.replace('.md', '')), 'forms']))
  .concat([['Tables', 'content']]) // Manual adding
const snippets = fs.readFileSync(path.resolve(__dirname, '../site/assets/js/snippets.js'), { encoding: 'utf8' })

const outputDirectory = `${__dirname}/auto`
createDirectoryIfNeeded(outputDirectory);

(async () => {
  // Note: `{ headless: true, args: ['--no-sandbox'] }` is needed only for some Windows configurations with strong security policies
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
  // console.log(await browser.version())

  for (const file of files) {
    console.log(file)
    try {
      const page = await browser.newPage()

      // Some timeouts and `page.waitForNavigation` have been added to avoid
      // 'Error: Execution context was destroyed, most likely because of a navigation.':
      await Promise.all([
        page.waitForNavigation(),
        page.goto(`file://${__dirname}/../_site/docs/${version}/${file[1]}/${convertToKebabCase(file[0])}/index.html`),
        page.waitForNavigation()
      ])

      // Getting examples content and classes
      const e = await page.evaluate(() =>
        Array.from(document.querySelectorAll('.bd-example'), e => [e.innerHTML, e.classList]) // eslint-disable-line no-undef
      )

      let index = 0
      let mdxContent = ''
      for (const example of e) {
        const outputFileDirectory = `${outputDirectory}/${file[0]}`
        const outputFile = `${outputFileDirectory}/${file[0]}_${index}.stories.js`

        console.log(`creating ${outputFile}...`)

        // Fill the MDX doc content with this component
        mdxContent += `<Canvas>\n<Story id="components-${file[0].toLowerCase()}--${convertToKebabCase(file[0])}-${index}"/>\n</Canvas>\n\n`

        // Automatically remove HTML comments that would break the story
        example[0] = example[0].replace(/<!--[\S\s]*?-->/gm, '').replaceAll('`', '\\`').replaceAll('${', '\\${')

        // Insert some specific JavaScript
        example[0] += '\n<script type="text/javascript">\n  /* global boosted: false */\n  document.querySelectorAll(\'[href]\').forEach(link => {link.addEventListener(\'click\', event => {event.preventDefault()})})\n</script>' // Remove links behavior
        example[0] += `\n<script type="text/javascript">\n  const rootElts = document.getElementById('storybook-root') !== null ? document.querySelectorAll('#storybook-root') : document.querySelectorAll('[id^="story--components-${file[0].toLowerCase()}--${convertToKebabCase(file[0])}"][id$="-inner"]')\n  rootElts.forEach(elt => {elt.className = "${Object.values(example[1]).join(' ')} m-0 p-0 border-0"})\n</script>` // Add example classes and remove the previous ones
        if (new RegExp(`// storybook-start ${file[0]}\n`, 's').test(snippets)) {
          const re = new RegExp(`// storybook-start ${file[0]}\n.*// storybook-end ${file[0]}\n`, 'gs') // RegExp to get all used code in `snippets.js`
          example[0] += `\n<script type="text/javascript">\n  ${snippets.match(re)[0].replaceAll('`', '\\`').replaceAll('${', '\\${')}</script>` // Replace backticks and variables in js snippets
        }

        createDirectoryIfNeeded(outputFileDirectory)

        try {
          fs.writeFileSync(outputFile, createTemplate(file[0], index, example[0]))
        } catch (error) {
          throw new Error(error)
        }

        index++
      }

      // Create the MDX documentation
      try {
        fs.writeFileSync(`${outputDirectory}/${file[0]}/Custom-MDX-Documentation.mdx`, createMDXDocumentation(mdxContent))
      } catch (error) {
        throw new Error(error)
      }

      await page.close()
    } catch (error) {
      throw new Error(error)
    }
  }

  await browser.close()
})()
