'use strict'

module.exports = ctx => ({
  map: ctx.file.dirname.includes('examples') || ctx.file.dirname.includes('essentials') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    autoprefixer: {
      cascade: false
    }
  }
})
