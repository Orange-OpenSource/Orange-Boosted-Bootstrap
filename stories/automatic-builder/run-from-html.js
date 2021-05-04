const fs = require('fs')
const puppeteer = require('puppeteer');

function createTemplate(component, index, content) {
  return "export default {\n\
    title: 'Components/" + component + "'\n\
  }\n\
  \n\
  export const " + component + "_" + index + " = () => {\n\
    return `" + content + "`\n\
  }";
}

const files = [
  ['Accordion', '../../_site/docs/5.0/components/accordion/index.html'],
  ['Alerts', '../../_site/docs/5.0/components/alerts/index.html'],
  ['Badge', '../../_site/docs/5.0/components/badge/index.html'],
  ['Buttons', '../../_site/docs/5.0/components/buttons/index.html'],
  ['Carousel', '../../_site/docs/5.0/components/carousel/index.html'],
  ['Navbar', '../../_site/docs/5.0/components/navbar/index.html'],
  ['Progress', '../../_site/docs/5.0/components/progress/index.html'],
  ['Toasts', '../../_site/docs/5.0/components/toasts/index.html'],
  ['Tooltips', '../../_site/docs/5.0/components/tooltips/index.html'],
];

(async() => {    
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const file of files) {
    await page.goto('file://' + __dirname + '/' + file[1]);
  
    const e = await page.evaluate(() => 
      Array.from(document.querySelectorAll('.bd-example'), 
    e => e.innerHTML));

    let index = 0;
    e.forEach(example => {
      try {
        fs.writeFileSync('./stories/' + file[0] + '_' + index + '.stories.js', createTemplate(file[0], index, example))
      } catch (err) {
        console.error(err);
      }
      index++;
    })
  };

  await browser.close();    
  })();