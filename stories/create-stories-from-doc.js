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

const files = fs.readdirSync(path.resolve(__dirname, `..\\site\\content\\docs\\${version}\\components\\`)).map(fileName => toPascalCase(fileName.replace('.md', '')))

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
        page.goto(`file://${__dirname}/../_site/docs/${version}/components/${convertToKebabCase(file)}/index.html`),
        page.waitForNavigation()
      ])

      const e = await page.evaluate(() =>
        Array.from(document.querySelectorAll('.bd-example'), e => e.innerHTML) // eslint-disable-line no-undef
      )

      let index = 0
      let mdxContent = ''
      for (let example of e) {
        const outputFileDirectory = `${outputDirectory}/${file[0]}`
        const outputFile = `${outputFileDirectory}/${file[0]}_${index}.stories.js`

        console.log(`creating ${outputFile}...`)

        // Fill the MDX doc content with this component
        mdxContent += `<Canvas>\n<Story id="components-${file[0].toLowerCase()}--${convertToKebabCase(file[0])}-${index}"/>\n</Canvas>\n\n`

        // Automatically remove HTML comments that would break the story
        example = example.replace(/<!--[\S\s]*?-->/gm, '')

        // Insert some specific JavaScript
        example += '<script src="https://cdn.jsdelivr.net/npm/boosted/dist/js/boosted.bundle.min.js" crossorigin="anonymous"></script>'
        if (file.match('Tooltip') || file.match('Popover') || file.match('Modal') || file.match('')) {
          example += `<script type="text/javascript">${fs.readFile(path.resolve(__dirname, '..\\site\\assets\\js\\snippets.js'), 'utf8', (err, data) => {
            return data
          })}</script>`
        }

        createDirectoryIfNeeded(outputFileDirectory)

        try {
          fs.writeFileSync(outputFile, createTemplate(file[0], index, example))
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
