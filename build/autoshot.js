'use strict'

const webshot = require('../node_modules/node-webshot')
const async = require('async')
const http = require('http')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

const serve = serveStatic('./_gh_pages')
const host = 'localhost'
const port = 8080
const screenshotsBase = './docs/4.0/examples/screenshots/'

const items = [{
  src: `http://${host}:${port}/docs/4.0/examples/album/index.html`,
  dest: 'album.png'
}, {
  src: `http://${host}:${port}/docs/4.0/examples/blog/index.html`,
  dest: 'blog.png'
}, {
  src: `http://${host}:${port}/docs/4.0/examples/carousel/index.html`,
  dest: 'carousel.png'
}, {
  src: `http://${host}:${port}/docs/4.0/examples/cover/index.html`,
  dest: 'cover.png'
}, {
  src: `http://${host}:${port}/docs/4.0/examples/dashboard/index.html`,
  dest: 'dashboard.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/grid/index.html`,
  dest: 'grid.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/jumbotron/index.html`,
  dest: 'jumbotron.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/narrow-jumbotron/index.html`,
  dest: 'jumbotron-narrow.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/justified-nav/index.html`,
  dest: 'justified-nav.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/module-002-quick-links/index.html`,
  dest: 'module-002-quick-links.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/module-006-content-panel/index.html`,
  dest: 'module-006-content-panel.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/module-012-product-details/index.html`,
  dest: 'module-012-product-details.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/navbars/index.html`,
  dest: 'navbar.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/navbar-top-fixed/index.html`,
  dest: 'navbar-fixed.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/navbar-top-static/index.html`,
  dest: 'navbar-static.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/navbar-bottom/index.html`,
  dest: 'navbar-bottom.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/offcanvas/index.html`,
  dest: 'offcanvas.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/signin/index.html`,
  dest: 'sign-in.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/starter-template/index.html`,
  dest: 'starter-template.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/sticky-footer/index.html`,
  dest: 'sticky-footer.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/sticky-footer-navbar/index.html`,
  dest: 'sticky-footer-navbar.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/tooltip-viewport/index.html`,
  dest: 'tooltip-viewport.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-admin/index.html`,
  dest: 'example_admin.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-admin/edit.html`,
  dest: 'example_admin_edit.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-dashboard/index.html`,
  dest: 'example_dashboard.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-form/index.html`,
  dest: 'example_form.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-news/index.html`,
  dest: 'example_news.png'
},
{
  src: `http://${host}:${port}/docs/4.0/examples/orange-brand-2015/index.html`,
  dest: 'brand_2015.png'
}
]

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res)
  serve(req, res, done)
})

server.listen(port)

server.on('listening', () => {
  console.log(`docs served on ${host}:${port}, let's take some pictures`)

  async.each(items, (item, callback) => {
    webshot(item.src, screenshotsBase + item.dest, (err) => {
      console.log(`url: ${item.src} in: ${screenshotsBase}${item.dest}`)
      if (err) {
        console.log(`oups something wen't wrong : ${err}`)
      }
      callback()
    })
  }, (err) => {
    console.log('All done')
    if (err) {
      console.log(`but something wen't wrong : ${err}`)
    }
    server.close()
  })
})
