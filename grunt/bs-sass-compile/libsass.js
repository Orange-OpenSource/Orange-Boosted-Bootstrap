// Compile Bootstrap with [libsass][1] using [grunt-sass][2]
// [1]: https://github.com/sass/libsass
// [2]: https://github.com/sindresorhus/grunt-sass
module.exports = function configureLibsass(grunt) {
  grunt.config.merge({
    sass: {
      options: {
        includePaths: ['scss'],
        precision: 6,
        sourceComments: false,
        sourceMap: true,
        outputStyle: 'expanded'
      },
      core: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'scss/<%= pkg.name %>.scss'
        }
      },
      extras: {
        files: {
          'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
          'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
          'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
        }
      },
      docs: {
        files: {
          /* boosted mod */
          //'docs/assets/css/docs.min.css': 'docs/assets/scss/docs.scss',
          '.tmpdocs/assets/css/docs.min.css': '.tmpdocs/assets/scss/docs.scss'
          /* end mod */
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
};
