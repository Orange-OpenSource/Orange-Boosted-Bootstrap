/*!
 * Bootstrap's Gruntfile
 * https://getbootstrap.com
 * Copyright 2013-2017 The Bootstrap Authors
 * Copyright 2013-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict'

  // Force use of Unix newlines
  grunt.util.linefeed = '\n'

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
  }

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n' +
            ' */\n',
    jqueryCheck: 'if (typeof jQuery === \'undefined\') {\n' +
                 '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\\\'s JavaScript.\')\n' +
                 '}\n',
    jqueryVersionCheck: '+function ($) {\n' +
                        '  var version = $.fn.jquery.split(\' \')[0].split(\'.\')\n' +
                        '  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] >= 4)) {\n' +
                        '    throw new Error(\'Bootstrap\\\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0\')\n' +
                        '  }\n' +
                        '}(jQuery);\n\n',

    // Task configuration.
    clean: {
      dist: 'dist',
      /* Boosted mod */
      docs: ['docs/dist', '_gh_pages'],
      rtl: 'dist/css/o-rtl.*',
      tmp: '.tmpdocs'
      /* end mod */
    },

    // JS build configuration
    babel: {
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          'js/dist/util.js'       : 'js/src/util.js',
          'js/dist/alert.js'      : 'js/src/alert.js',
          'js/dist/button.js'     : 'js/src/button.js',
          'js/dist/carousel.js'   : 'js/src/carousel.js',
          'js/dist/collapse.js'   : 'js/src/collapse.js',
          'js/dist/dropdown.js'   : 'js/src/dropdown.js',
          'js/dist/modal.js'      : 'js/src/modal.js',
          'js/dist/scrollspy.js'  : 'js/src/scrollspy.js',
          'js/dist/tab.js'        : 'js/src/tab.js',
          'js/dist/tooltip.js'    : 'js/src/tooltip.js',
          /* Boosted mod */
          'js/dist/o-navbar.js'   : 'js/src/o-navbar.js',
          'js/dist/o-megamenu.js' : 'js/src/o-megamenu.js',
          'js/dist/o-priority-nav.js' : 'js/src/o-priority-nav.js',
          'js/dist/o-switch.js'   : 'js/src/o-switch.js',
          'js/dist/o-scroll-up.js': 'js/src/o-scroll-up.js',
          /* end mod */
          'js/dist/popover.js'    : 'js/src/popover.js'
        }
      },
      dist: {
        options: {
          extends: '../../.babelrc'
        },
        files: {
          '<%= concat.bootstrap.dest %>' : '<%= concat.bootstrap.dest %>'
        }
      }
    },

    stamp: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>\n+function () {\n',
        footer: '\n}();'
      },
      bootstrap: {
        files: {
          src: '<%= concat.bootstrap.dest %>'
        }
      }
    },

    concat: {
      options: {
        // Custom function to remove all export and import statements
        process: function (src) {
          return src.replace(/^(export|import).*/gm, '')
        }
      },
      bootstrap: {
        src: [
          'js/src/util.js',
          'js/src/alert.js',
          'js/src/button.js',
          'js/src/carousel.js',
          'js/src/collapse.js',
          'js/src/dropdown.js',
          'js/src/modal.js',
          'js/src/scrollspy.js',
          'js/src/tab.js',
          'js/src/tooltip.js',
          /* Boosted mod */
          'js/src/o-navbar.js',
          'js/src/o-megamenu.js',
          'js/src/o-priority-nav.js',
          'js/src/o-switch.js',
          'js/src/o-scroll-up.js',
          /* end mod */
          'js/src/popover.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      },
      /* boosted mod */
      rtlCss: {
        src: ['dist/css/boosted-rtl.css', 'dist/css/o-rtl.css'],
        dest: 'dist/css/boosted-rtl.css'
      },
      docsJs: {
        src: [
          '.tmpdocs/assets/js/src/application.js',
          '.tmpdocs/assets/js/src/application-orange.js'
        ],
        dest: '.tmpdocs/assets/js/src/application.js'
        /* end mod */
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'js/tests/index.html'
    },

    // CSS build configuration
    // boosted mod
    rtlcss: {
      core:{
        expand : false,
        dest   : 'dist/css/boosted-rtl.css',
        src    : ['dist/css/boosted.css']
      }
    },
    // end mod

    copy: {
      docs: {
        expand: true,
        cwd: 'dist/',
        src: [
          '**/*'
        ],
        /* boosted mod */
        dest: '.tmpdocs/dist/'
      },
      tmpdocs: {
        files: [
          {
            cwd: 'docs',
            expand: true,
            src: ['{,**/}*'],
            dest: '.tmpdocs'
          },
          {
            cwd: 'docs-orange',
            expand: true,
            src: ['{,**/}*'],
            dest: '.tmpdocs'
          }
        ]
      },
      rtl: {
        expand: true,
        cwd: 'docs-orange/examples/',
        src: ['**/*', '!**/screenshots/**', '!index.md'],
        dest: '.tmpdocs/examples/',
        rename: function (dest, src) {
          return dest + 'rtl-' + src
        }
      },
      fonts: {
        expand: true,
        cwd: 'fonts/',
        src: ['*'],
        dest: 'dist/fonts/'
      },
      img: {
        expand: true,
        cwd: 'img/',
        src: ['*'],
        dest: 'dist/img/'
      },
      vendorCss: {
        expand: true,
        flatten: true,
        cwd: '.',
        src: ['node_modules/swiper/dist/css/swiper.min.css'],
        dest: 'dist/css/vendor/'
      },
      vendorJs: {
        expand: true,
        flatten: true,
        cwd: '.',
        src: ['js/vendor/**/*.js', 'node_modules/swiper/dist/js/swiper.min.js'],
        dest: 'dist/js/vendor/'
        /* end mod */
      }
    },

    connect: {
      /* boosted mod */
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    /* boosted mod */
    replace: {
      rtl: {
        src: ['.tmpdocs/examples/rtl-*/**/*.html'],
        overwrite: true,
        replacements: [
          {
            from: 'boosted.css',
            to: 'boosted-rtl.css'
          },
          {
            from: 'boosted.min.css',
            to: 'boosted-rtl.min.css'
          },
          {
            from: '<html lang="en">',
            to: '<html lang="en" dir="rtl">'
          }
        ]
      }
    },
    /* end mod */

    watch: {
      src: {
        files: '<%= concat.bootstrap.src %>',
        /* boosted mod */
        tasks: ['babel:dev', 'dist-js']
        /* end mod */
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['dist-css', 'copy:docs']
      },
      docs: {
        /* boosted mod */
        files: ['docs/assets/scss/**/*.scss', 'docs-orange/**/*', 'docs/**/*.md'],
        tasks: ['docs']
        /* end mod */
      }
    },

    'saucelabs-qunit': {
      all: {
        options: {
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 10,
          maxRetries: 3,
          maxPollRetries: 4,
          urls: ['http://localhost:3000/js/tests/index.html?hidepassed'],
          browsers: grunt.file.readYAML('build/sauce_browsers.yml')
        }
      }
    },

    exec: {
      'clean-css': {
        command: 'npm run clean-css'
      },
      'clean-css-docs': {
        command: 'npm run clean-css-docs'
      },
      postcss: {
        command: 'npm run postcss'
      },
      'postcss-docs': {
        command: 'npm run postcss-docs'
      },
      htmlhint: {
        command: 'npm run htmlhint'
      },
      htmllint: {
        command: 'npm run htmllint'
      },
      jekyll: {
        command: 'npm run jekyll'
      },
      'jekyll-github': {
        command: 'npm run jekyll-github'
      },
      sass: {
        command: 'npm run sass'
      },
      'sass-docs': {
        command: 'npm run sass-docs'
      },
      'scss-lint': {
        command: 'npm run scss-lint'
      },
      'scss-lint-docs': {
        command: 'npm run scss-lint-docs'
      },
      uglify: {
        command: 'npm run uglify'
      },
      'uglify-docs': {
        command: 'npm run uglify-docs'
      }
    },

    buildcontrol: {
      options: {
        dir: '_gh_pages',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:twbs/derpstrap.git',
          branch: 'gh-pages'
        }
      }
    },

    compress: {
      main: {
        options: {
          archive: '<%= pkg.name %>-<%= pkg.version %>-dist.zip',
          mode: 'zip',
          level: 9,
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist/',
            src: ['**'],
            dest: '<%= pkg.name %>-<%= pkg.version %>-dist'
          }
        ]
      }
    },
    // Generate changelog based on git commit
    changelog: {
      options: {
        from: 'v4.0.0-beta',
        // to: 'v4.0.0-alpha.2',
        // version: 'v4.0.0-alpha.2',
        commitLink: function (commitHash) {
          // TODO externalize orangeforge git url + project name etc..
          return '[' + commitHash.substring(0, 8) + '](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/' + commitHash + ')'
        }
      }
    }

  })


  grunt.loadNpmTasks('grunt-saucelabs')
  grunt.loadNpmTasks('grunt-conventional-changelog')

  // Docs HTML validation task
  /* boosted mod */
  grunt.registerTask('validate-html', ['docs', 'exec:jekyll', 'exec:htmllint', 'exec:htmlhint'])
  /* end mod */
  var runSubset = function (subset) {
    return !process.env.TWBS_TEST || process.env.TWBS_TEST === subset
  }
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0'
  }

  // Test task.
  var testSubtasks = []
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat(['dist-css', 'dist-js', 'test-scss', 'qunit', 'docs'])
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html')) {
    testSubtasks.push('validate-html')
  }
  // Only run Sauce Labs tests if there's a Sauce access key
  if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined' &&
      // Skip Sauce if running a different subset of the test suite
      runSubset('sauce-js-unit')) {
    testSubtasks = testSubtasks.concat(['dist', 'docs-css', 'docs-js', 'clean:docs', 'copy:docs'])
    // Skip Sauce on Travis when [skip sauce] is in the commit message
    if (isUndefOrNonZero(process.env.TWBS_DO_SAUCE)) {
      testSubtasks.push('connect')
      testSubtasks.push('saucelabs-qunit')
    }
  }
  grunt.registerTask('test', testSubtasks)

  // JS distribution task.
  grunt.registerTask('dist-js', ['babel:dev', 'concat', 'babel:dist', 'stamp', 'exec:uglify', 'copy:docs'])

  grunt.registerTask('test-scss', ['exec:scss-lint'])

  // CSS distribution task.
  grunt.registerTask('sass-compile', ['exec:sass', 'exec:sass-docs'])

  grunt.registerTask('dist-css', ['copy:tmpdocs', 'sass-compile', 'exec:postcss', 'rtlcss', 'concat:rtlCss', 'exec:clean-css', 'exec:clean-css-docs', 'copy:docs'])

  // Full distribution task.
  /* boosted mod */
  grunt.registerTask('dist', ['clean:dist', 'clean:tmp', 'dist-css', 'dist-js', 'copy:fonts', 'copy:img', 'copy:vendorCss', 'copy:vendorJs'])
  /* end mod */
  // Default task.
  grunt.registerTask('default', ['clean:dist', 'test'])

  // Docs task.
  grunt.registerTask('docs-css', ['exec:sass-docs', 'exec:clean-css-docs', 'exec:postcss-docs'])
  grunt.registerTask('lint-docs-css', ['exec:scss-lint-docs'])
  /* boosted mod */
  grunt.registerTask('docs-js', ['concat:docsJs', 'exec:uglify-docs'])
  grunt.registerTask('docs', ['copy:tmpdocs', 'lint-docs-css', 'docs-css', 'docs-js', 'clean:docs', 'copy:rtl', 'replace:rtl', 'copy:docs'])
  /* end mod */
  grunt.registerTask('docs-github', ['exec:jekyll-github'])

  grunt.registerTask('prep-release', ['dist', 'docs', 'docs-github', 'compress'])

  // Publish to GitHub
  grunt.registerTask('publish', ['buildcontrol:pages'])
}
