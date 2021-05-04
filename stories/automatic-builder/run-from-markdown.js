const fs = require('fs')
const lineReader = require('line-reader');

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
  ['Accordion', '../../site/content/docs/5.0/components/accordion.md'],
  ['Alerts', '../../site/content/docs/5.0/components/alerts.md'],
  ['Badge', '../../site/content/docs/5.0/components/badge.md'],
  ['Buttons', '../../site/content/docs/5.0/components/buttons.md'],
  ['Carousel', '../../site/content/docs/5.0/components/carousel.md'],
  ['Navbar', '../../site/content/docs/5.0/components/navbar.md'],
  ['Progress', '../../site/content/docs/5.0/components/progress.md'],
  ['Toasts', '../../site/content/docs/5.0/components/toasts.md'],
  ['Tooltips', '../../site/content/docs/5.0/components/tooltips.md'],
]

files.forEach(file => {
  let example = '';
  let storingExample = false;
  let index = 0;
  lineReader.eachLine(file[1], function(line) {
    if (line === '{{< /example >}}') {
      storingExample = false;
  
      try {
        fs.writeFileSync('./stories/' + file[0] + '_' + index + '.stories.js', createTemplate(file[0], index, example))
      } catch (err) {
        console.error(err);
      }
      example = '';
      index += 1;
    }
    if (storingExample) {
      example += line + '\n';
    }
    if (line === '{{< example >}}') {
      storingExample = true;
    }
  });
})

