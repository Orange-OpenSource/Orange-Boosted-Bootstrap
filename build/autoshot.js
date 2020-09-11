'use strict'

const webshot = require('../node_modules/node-webshot')
const async = require('async')
const http = require('http')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

const serve = serveStatic('./_gh_pages')
const host = 'localhost'
const port = 9001
const screenshotsBase = './docs/4.5/examples/screenshots/'

const options = {
  screenSize: {
    width: 1024,
    height: 768
  },
  shotSize: {
    width: 1024,
    height: 768
  },
  renderDelay: 3600
}

const items = [{
  src: `http://${host}:${port}/docs/4.5/examples/album/index.html`,
  dest: 'album.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/blog/index.html`,
  dest: 'blog.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/carousel/index.html`,
  dest: 'carousel.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/checkout/index.html`,
  dest: 'checkout.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/cover/index.html`,
  dest: 'cover.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/dashboard/index.html`,
  dest: 'dashboard.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/floating-labels/index.html`,
  dest: 'floating-labels.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/grid/index.html`,
  dest: 'grid.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/jumbotron/index.html`,
  dest: 'jumbotron.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/narrow-jumbotron/index.html`,
  dest: 'narrow-jumbotron.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/quick-links/index.html`,
  dest: 'quick-links.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/content-panel/index.html`,
  dest: 'content-panel.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/product-details/index.html`,
  dest: 'product-details.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbars/index.html`,
  dest: 'navbars.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbar-fixed/index.html`,
  dest: 'navbar-fixed.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbar-static/index.html`,
  dest: 'navbar-static.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbar-bottom/index.html`,
  dest: 'navbar-bottom.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbar-top/index.html`,
  dest: 'navbar-top.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/navbar-top-fixed/index.html`,
  dest: 'navbar-top-fixed.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/offcanvas/index.html`,
  dest: 'offcanvas.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/sign-in/index.html`,
  dest: 'sign-in.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/pricing/index.html`,
  dest: 'pricing.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/product/index.html`,
  dest: 'product.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/starter-template/index.html`,
  dest: 'starter-template.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/sticky-footer/index.html`,
  dest: 'sticky-footer.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/sticky-footer-navbar/index.html`,
  dest: 'sticky-footer-navbar.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/tooltip-viewport/index.html`,
  dest: 'tooltip-viewport.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/administration-mainpage/index.html`,
  dest: 'administration-mainpage.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/administration-edition-page/index.html`,
  dest: 'administration-edition-page.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/dashboard-orange-branded/index.html`,
  dest: 'dashboard-orange-branded.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/orange-form/index.html`,
  dest: 'orange-form.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/news-template/index.html`,
  dest: 'news-template.png'
},
{
  src: `http://${host}:${port}/docs/4.5/examples/orange-homepage/index.html`,
  dest: 'orange-homepage.png'
}]

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(port)

server.on('listening', () => {
  console.log(`docs served on ${host}:${port}, let's take some pictures`)

  async.each(items, (item, callback) => {
    webshot(item.src, screenshotsBase + item.dest, options, error => {
      console.log(`url: ${item.src} in: ${screenshotsBase}${item.dest}`)
      if (error) {
        console.log(`oups something wen't wrong : ${error}`)
      }

      callback()
    })
  }, error => {
    console.log('All done')
    if (error) {
      console.log(`but something wen't wrong : ${error}`)
    }

    server.close()
  })
})
