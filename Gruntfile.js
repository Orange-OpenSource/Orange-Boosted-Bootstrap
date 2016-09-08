/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2016 The Bootstrap Authors
 * Copyright 2013-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  /* Jenkins flag */
  var JENKINS = grunt.option('jenkins');
  if (process.env._JAVA_OPTIONS) {
    delete process.env._JAVA_OPTIONS;
  }
  /* boosted mod */
  var serveStatic = require('serve-static');
  /* end mod */
  var fs = require('fs');
  var path = require('path');
  var isTravis = require('is-travis');

  var configBridge = grunt.file.readJSON('./grunt/configBridge.json', { encoding: 'utf8' });

  Object.keys(configBridge.paths).forEach(function (key) {
    configBridge.paths[key].forEach(function (val, i, arr) {
      /* boosted mod */
      arr[i] = path.join('./.tmpdocs', val);
      /* end mod */
    });
  });

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
                 '  throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\')\n' +
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
      docs: ['docs/dist','_gh_pages'],
      /* Boosted mod */
      rtl: 'dist/css/o-rtl.*',
      tmp: '.tmpdocs'
      /* end mod */
    },

    // JS build configuration
    babel: {
      dev: {
        options: {
          sourceMap: true,
          modules: 'ignore'
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
          'js/dist/o-switch.js'   : 'js/src/o-switch.js',
          'js/dist/o-scroll-up.js': 'js/src/o-scroll-up.js',
          /* end mod */
          'js/dist/popover.js'    : 'js/src/popover.js'
        }
      },
      dist: {
        options: {
          modules: 'ignore'
        },
        files: {
          '<%= concat.bootstrap.dest %>' : '<%= concat.bootstrap.dest %>'
        }
      }
    },

    stamp: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>\n+function ($) {\n',
        footer: '\n}(jQuery);'
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
          return src.replace(/^(export|import).*/gm, '');
        },
        stripBanners: false
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

    uglify: {
      options: {
        compress: {
          warnings: false
        },
        mangle: true,
        preserveComments: /^!|@preserve|@license|@cc_on/i
      },
      core: {
        src: '<%= concat.bootstrap.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
      docsJs: {
        src: configBridge.paths.docsJs,
        /* Boosted mod */
        dest: '.tmpdocs/assets/js/docs.min.js'
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
    scsslint: {
      options: {
        bundleExec: true,
        config: 'scss/.scss-lint.yml',
        reporterOutput: null
      },
      core: {
        /* Boosted mod */
        src: ['scss/{,**/}*.scss', '!scss/_normalize.scss']
        /* end mod */
      },
      docs: {
        src: ['docs/assets/scss/*.scss', '!docs/assets/scss/docs.scss']
      }
    },

    // boosted mod
    rtlcss: {
      core:{
        expand : false,
        dest   : 'dist/css/boosted-rtl.css',
        src    : ['dist/css/boosted.css']
      }
    },
    // end mod

    cssmin: {
      options: {
        // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
        //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
        compatibility: 'ie9',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      core: {
        files: [
          {
            expand: true,
            cwd: 'dist/css',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/css',
            ext: '.min.css'
          }
        ]
      },
      docs: {
        /* Boosted mod */
        src: '.tmpdocs/assets/css/docs.min.css',
        dest: '.tmpdocs/assets/css/docs.min.css'
        /* end mod */
      }
    },

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
          return dest + 'rtl-' + src;
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
      vendorsjs: {
        expand: true,
        cwd: 'bower_components/jquery.tablesorter/dist/js/',
        src: ['*'],
        dest: 'dist/js/vendors/'
        /* end mod */
      }
    },

    connect: {
      /* boosted mod */
      //   server: {
      //     options: {
      //       port: 3000,
      //       base: '.'
      //     }
      //   }
      // },
      livereload: {
        options: {
          open: true,
          port: 9000,
          middleware: function (connect) {
            return [
              serveStatic('_gh_pages')
            ];
          }
          /* end mod */
        }
      }
    },

    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml',
        incremental: false
      },
      docs: {},
      github: {
        options: {
          raw: 'github: true'
        }
      }
    },

    /* boosted mod */
    replace: {
      bootstrapfiles: {
        src: ['_gh_pages/{,**/}*.html'],
        overwrite: true,
        replacements: [
          {
            from: 'bootstrap.min.css',
            to: 'boosted.min.css'
          },
          {
            from: 'bootstrap.css',
            to: 'boosted.css'
          },
          {
            from: 'bootstrap.min.js',
            to: 'boosted.min.js'
          },
          {
            from: 'bootstrap.js',
            to: 'boosted.js'
          }
        ]
      },
      paths1: {
        src: ['_gh_pages/*.html'],
        overwrite: true,
        replacements: [
          {
            from: 'href="/',
            to: 'href="'
          }
        ]
      },
      paths2: {
        src: ['_gh_pages/*/*.html'],
        overwrite: true,
        replacements: [
          {
            from: 'href="/',
            to: 'href="../'
          },
          {
            from: 'src="dist',
            to: 'src="../dist'
          },
          {
            from: 'src="/dist',
            to: 'src="../dist'
          },
          {
            from: 'src="/assets',
            to: 'src="../assets'
          },
          {
            from: 'src="/../assets',
            to: 'src="../assets'
          },
          {
            from: 'src="/examples',
            to: 'src="../examples'
          }
        ]
      },
      paths3: {
        src: ['_gh_pages/*/*/*.html'],
        overwrite: true,
        replacements: [
          {
            from: 'href="/',
            to: 'href="../../'
          },
          {
            from: 'src="/dist',
            to: 'src="../../dist'
          },
          {
            from: 'src="dist',
            to: 'src="../../dist'
          },
          {
            from: 'src="/assets',
            to: 'src="../../assets'
          },
          {
            from: 'src="/../assets',
            to: 'src="../../assets'
          }
        ]
      },
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

    htmllint: {
      options: {
        reporter: JENKINS && 'checkstyle',
        reporterOutput: JENKINS && 'reports/htmllint.xml',
        ignore: [
          /* boosted mod Src : https://www.w3.org/TR/html-aria/ */
          'The “banner” role is unnecessary for element “header”.',
          'Element “form” does not need a “role” attribute.',
          'The “contentinfo” role is unnecessary for element “footer”.',
          'Bad value “search” for attribute “role” on element “form”.',
          'Attribute “aria-required” not allowed on element “input” at this point.',
          'Element “input” is missing one or more of the following attributes: “aria-expanded”, “aria-valuemax”, “aria-valuemin”, “aria-valuenow”, “role”.',
          /* end mod */
          'Attribute “autocomplete” is only allowed when the input type is “color”, “date”, “datetime”, “datetime-local”, “email”, “hidden”, “month”, “number”, “password”, “range”, “search”, “tel”, “text”, “time”, “url”, or “week”.',
          'Attribute “autocomplete” not allowed on element “button” at this point.',
          'Consider using the “h1” element as a top-level heading only (all “h1” elements are treated as top-level headings by many screen readers and other tools).',
          'Element “div” not allowed as child of element “progress” in this context. (Suppressing further errors from this subtree.)',
          'Element “img” is missing required attribute “src”.',
          'The “color” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “date” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime-local” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “month” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “time” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “week” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
        ]
      },
      src: ['_gh_pages/**/*.html', 'js/tests/visual/*.html']
    },

    watch: {
      src: {
        files: '<%= concat.bootstrap.src %>',
        /* boosted mod */
        tasks: ['babel:dev', 'dist-js', 'docs']
        /* end mod */
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['dist-css', 'docs']
      },
      docs: {
        /* boosted mod */
        files: ['docs-orange/**/*'],
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
          urls: ['http://127.0.0.1:3000/js/tests/index.html?hidepassed'],
          browsers: grunt.file.readYAML('grunt/sauce_browsers.yml')
        }
      }
    },

    exec: {
      postcss: {
        command: 'npm run postcss'
      },
      'postcss-docs': {
        command: 'npm run postcss-docs'
      },
      htmlhint: {
        command: 'npm run htmlhint'
      },
      'upload-preview': {
        command: './grunt/upload-preview.sh'
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
        from: 'v4.0.0-alpha.3.1',
        // to: 'v4.0.0-alpha.2',
        // version: 'v4.0.0-alpha.2',
        commitLink: function (commitHash) {
          // TODO externalize orangeforge git url + project name etc..
          return '[' + commitHash.substring(0, 8) + '](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/' + commitHash + ')';
        }
      }
    }

  });


  // These plugins provide necessary tasks.
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies',
    // Exclude Sass compilers. We choose the one to load later on.
    pattern: ['grunt-*', '!grunt-sass', '!grunt-contrib-sass'] });
  require('time-grunt')(grunt);

  // Docs HTML validation task
  /* boosted mod */
  grunt.registerTask('validate-html', ['docs', 'htmllint', 'exec:htmlhint']);
  /* end mod */
  var runSubset = function (subset) {
    return !process.env.TWBS_TEST || process.env.TWBS_TEST === subset;
  };
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0';
  };

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat(['dist-css', 'dist-js', 'test-scss', 'qunit', 'docs']);
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html')) {
    testSubtasks.push('validate-html');
  }
  // Only run Sauce Labs tests if there's a Sauce access key
  if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined' &&
      // Skip Sauce if running a different subset of the test suite
      runSubset('sauce-js-unit')) {
    testSubtasks = testSubtasks.concat(['dist', 'docs-css', 'docs-js', 'clean:docs', 'copy:docs', 'exec:upload-preview']);
    // Skip Sauce on Travis when [skip sauce] is in the commit message
    if (isUndefOrNonZero(process.env.TWBS_DO_SAUCE)) {
      testSubtasks.push('connect');
      testSubtasks.push('saucelabs-qunit');
    }
  }
  grunt.registerTask('test', testSubtasks);

  // JS distribution task.
  grunt.registerTask('dist-js', ['babel:dev', 'concat', 'babel:dist', 'stamp', 'uglify:core']);

  grunt.registerTask('test-scss', ['scsslint:core']);

  // CSS distribution task.
  // Supported Compilers: sass (Ruby) and libsass.
  (function (sassCompilerName) {
    require('./grunt/bs-sass-compile/' + sassCompilerName + '.js')(grunt);
  })(process.env.TWBS_SASS || 'libsass');
  // grunt.registerTask('sass-compile', ['sass:core', 'sass:extras', 'sass:docs']);
  grunt.registerTask('sass-compile', ['sass:core', 'sass:rtl', 'sass:docs']);

  grunt.registerTask('dist-css', ['sass-compile', 'rtlcss:core','concat:rtlCss', 'clean:rtl', 'exec:postcss', 'cssmin:core', 'cssmin:docs']);

  // Full distribution task.
  /* boosted mod */
  grunt.registerTask('dist', ['clean:dist', 'clean:tmp', 'dist-css', 'dist-js', 'copy:fonts','copy:img','copy:vendorsjs']);
  /* end mod */
  // Default task.
  grunt.registerTask('default', ['dist', 'test']);

  // Docs task.
  /* boosted mod */
  grunt.registerTask('docs-css', ['sass:docs', 'cssmin:docs', 'exec:postcss-docs']);
  /* end mod */
  grunt.registerTask('lint-docs-css', ['scsslint:docs']);
  /* boosted mod */
  grunt.registerTask('docs-js', ['concat:docsJs', 'uglify:docsJs']);
  /* end mod */
  /* boosted mod */
  grunt.registerTask('docs', ['copy:tmpdocs','lint-docs-css','docs-css', 'docs-js', 'clean:docs', 'copy:rtl', 'replace:rtl','copy:docs', 'jekyll:docs', 'replace']);
  /* end mod */
  grunt.registerTask('docs-github', ['jekyll:github']);

  grunt.registerTask('prep-release', ['dist', 'docs', 'docs-github', 'compress']);

  // Publish to GitHub
  grunt.registerTask('publish', ['buildcontrol:pages']);

  /* boosted mod */
  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    grunt.task.run([
      'dist',
      'docs',
      'connect:livereload',
      'watch'
    ]);
  });
  /* end mod */
};
