'use strict'

const fs = require('node:fs')
const puppeteer = require('puppeteer') // eslint-disable-line import/no-extraneous-dependencies

function createDirectoryIfNeeded(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, 0o766, error => {
      if (error) {
        throw new Error(error)
      }
    })
  }
}

function createTemplate(component, index, content) {
  return `export default {\n\
    title: 'Components/${component}',\n\
  }\n\
  \n\
  export const ${component}_${index} = () => \`${content}\``
}

// TODO: build this list automatically from docs
const files = [
  ['Accordion', '../_site/docs/5.3/components/accordion/index.html'],
  ['Alerts', '../_site/docs/5.3/components/alerts/index.html'],
  ['BackToTop', '../_site/docs/5.3/components/back-to-top/index.html'],
  ['Badge', '../_site/docs/5.3/components/badge/index.html'],
  ['Breadcrumb', '../_site/docs/5.3/components/breadcrumb/index.html'],
  ['ButtonGroup', '../_site/docs/5.3/components/button-group/index.html'],
  ['Buttons', '../_site/docs/5.3/components/buttons/index.html'],
  ['Card', '../_site/docs/5.3/components/card/index.html'],
  ['Carousel', '../_site/docs/5.3/components/carousel/index.html'],
  ['CloseButton', '../_site/docs/5.3/components/close-button/index.html'],
  ['Collapse', '../_site/docs/5.3/components/collapse/index.html'],
  ['Dropdowns', '../_site/docs/5.3/components/dropdowns/index.html'],
  ['Footer', '../_site/docs/5.3/components/footer/index.html'],
  ['ListGroup', '../_site/docs/5.3/components/list-group/index.html'],
  ['Modal', '../_site/docs/5.3/components/modal/index.html'],
  ['Navbar', '../_site/docs/5.3/components/navbar/index.html'],
  ['NavsTabs', '../_site/docs/5.3/components/navs-tabs/index.html'],
  ['OffCanvas', '../_site/docs/5.3/components/offcanvas/index.html'],
  ['OrangeNavbar', '../_site/docs/5.3/components/orange-navbar/index.html'],
  ['Pagination', '../_site/docs/5.3/components/pagination/index.html'],
  ['Placeholders', '../_site/docs/5.3/components/placeholders/index.html'],
  ['Popovers', '../_site/docs/5.3/components/popovers/index.html'],
  ['Progress', '../_site/docs/5.3/components/progress/index.html'],
  ['Scrollspy', '../_site/docs/5.3/components/scrollspy/index.html'],
  ['Spinners', '../_site/docs/5.3/components/spinners/index.html'],
  ['SteppedProcess', '../_site/docs/5.3/components/stepped-process/index.html'],
  ['Sticker', '../_site/docs/5.3/components/sticker/index.html'],
  ['Tags', '../_site/docs/5.3/components/tags/index.html'],
  ['TitleBars', '../_site/docs/5.3/components/title-bars/index.html'],
  ['Toasts', '../_site/docs/5.3/components/toasts/index.html'],
  // Note: we need to use `var` instead of `const` to avoid `redeclaration of const tooltipTriggerList` message
  ['Tooltips',
    '../_site/docs/5.3/components/tooltips/index.html',
    'var tooltipTriggerList = [].slice.call(document.querySelectorAll(\'[data-bs-toggle="tooltip"]\'));\
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\
      return new boosted.Tooltip(tooltipTriggerEl);\
    })']
]

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
        page.goto(`file://${__dirname}/${file[1]}`),
        page.waitForNavigation()
      ])

      const e = await page.evaluate(() =>
        Array.from(document.querySelectorAll('.bd-example'), e => e.innerHTML) // eslint-disable-line no-undef
      )

      let index = 0
      for (let example of e) {
        const outputFileDirectory = `${outputDirectory}/${file[0]}`
        const outputFile = `${outputFileDirectory}/${file[0]}_${index}.stories.js`

        console.log(`creating ${outputFile}...`)

        // Automatically remove HTML comments that would break the story
        example = example.replace(/<!--[\S\s]*?-->/gm, '')

        // Insert some specific JavaScript
        example += '<script src="https://cdn.jsdelivr.net/npm/boosted/dist/js/boosted.bundle.min.js" crossorigin="anonymous"></script>'
        if (file[2]) {
          example += `<script type="text/javascript">${file[2]}</script>`
        }

        createDirectoryIfNeeded(outputFileDirectory)

        try {
          fs.writeFileSync(outputFile, createTemplate(file[0], index, example))
        } catch (error) {
          throw new Error(error)
        }

        index++
      }

      await page.close()
    } catch (error) {
      throw new Error(error)
    }
  }

  await browser.close()
})()
