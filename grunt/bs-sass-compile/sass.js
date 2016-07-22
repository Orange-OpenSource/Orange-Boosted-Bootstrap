// Compile Bootstrap with [Ruby Sass][1] using [grunt-contrib-sass][2]
// [1]: https://github.com/sass/sass
// [2]: https://github.com/gruntjs/grunt-contrib-sass
module.exports = function configureRubySass(grunt) {
  var options = {
    loadPath: ['scss'],
    precision: 6,
    sourcemap: 'auto',
    style: 'expanded',
    trace: true,
    bundleExec: true
  };
  grunt.config.merge({
    sass: {
      core: {
        options: options,
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
        options: options,
        files: {
          /* boosted mod */
        //   'dist/css/<%= pkg.name %>-flex.css': 'scss/<%= pkg.name %>-flex.scss',
        //   'dist/css/<%= pkg.name %>-grid.css': 'scss/<%= pkg.name %>-grid.scss',
        //   'dist/css/<%= pkg.name %>-reboot.css': 'scss/<%= pkg.name %>-reboot.scss'
          'dist/css/<%= pkg.name %>-flex.css': 'scss/bootstrap-flex.scss',
          'dist/css/<%= pkg.name %>-grid.css': 'scss/bootsrtap-grid.scss',
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
        options: options,
        files: {
          /* boosted mod */
          //'docs/assets/css/docs.min.css': 'docs/assets/scss/docs.scss',
          '.tmpdocs/assets/css/docs.min.css': '.tmpdocs/assets/scss/docs.scss'
          /* end mod */
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
};
