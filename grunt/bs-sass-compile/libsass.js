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
        /* boosted mod */
        //   'dist/css/<%= pkg.name %>.css': 'scss/<%= pkg.name %>.scss'
        'dist/css/<%= pkg.name %>.css': 'scss/bootstrap.scss',
        'dist/css/orangeHelvetica.css': 'scss/orangeHelvetica.scss',
        'dist/css/orangeIcons.css': 'scss/orangeIcons.scss'
        /* end mod */
        }
      },
      extras: {
        files: {
          /* boosted mod */
        //   'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
        //   'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
        //   'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
          'dist/css/<%= pkg.name %>-flex.css': 'scss/bootstrap-flex.scss',
          'dist/css/<%= pkg.name %>-grid.css': 'scss/bootstrap-grid.scss',
          'dist/css/<%= pkg.name %>-reboot.css': 'scss/bootstrap-reboot.scss'
          /* end mod */
        }
      },
      // boosted mod
      rtl: {
        options: {
          sourceMap: false
        },
        files: {
          'dist/css/o-rtl.css': 'scss/o-rtl.scss'
        }
      },
      // end mod
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
