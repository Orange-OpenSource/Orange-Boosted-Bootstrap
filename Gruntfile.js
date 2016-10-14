// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

var serveStatic = require('serve-static');

module.exports = function (grunt) {
  'use strict';
  // load all grunt tasks
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

  // show elapsed time at the end
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('gruntify-eslint');

  /* Jenkins flag */
  var JENKINS = grunt.option('jenkins');
  if (process.env._JAVA_OPTIONS) {
    delete process.env._JAVA_OPTIONS;
  }

  // configurable paths
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    packageName: 'bootstrap-orange',
    dist: 'dist',
    docbrandversion: '2015',
    pkg: grunt.file.readJSON('bower.json') || {},
    browsers: [
      'Android 2.3',
      'Android >= 4',
      'Chrome >= 20',
      'Firefox >= 24',
      'Explorer >= 8',
      'iOS >= 6',
      'Opera >= 12',
      'Safari >= 6'
    ]
  };
  var path = require('path');

  var configBridge = grunt.file.readJSON('./docs_base_boosted/grunt/configBridge.json', { encoding: 'utf8' });
  Object.keys(configBridge.paths).forEach(function (key) {
    configBridge.paths[key].forEach(function (val, i, arr) {
      arr[i] = path.join('./docs_generated/docs/assets', val);
    });
  });
  grunt.initConfig({
    yeoman: appConfig,
    jqueryCheck: configBridge.config.jqueryCheck.join('\n'),
    jqueryVersionCheck: configBridge.config.jqueryVersionCheck.join('\n'),
    watch: {
      less: {
        files: ['<%= yeoman.app %>/less/{,*/}*.less'],
        tasks: ['dist', 'docs']
      },
      js: {
        files: ['<%= yeoman.app %>/js/{,*/}*.js'],
        tasks: ['dist', 'docs'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      docs: {
        files: ['docs_base_boosted/**/*.*'],
        tasks: ['docs'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/**/*.html',
          '<%= yeoman.app %>/**/*.js',
          '<%= yeoman.app %>/**/*.css',
          'docs_base_boosted/{,*/}/*.*',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9001,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
        livereload: 35730
      },

      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              serveStatic('.tmp'),
              serveStatic('docs'),
              connect().use(
                '/bower_components',
                serveStatic('./bower_components')
              ),
              serveStatic(appConfig.app)
            ];
          }
        }
      },

      test: {
          options: {
            port: 3000,
            base: './app'
          }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      docs: {
        files: [{
          dot: true,
          src: [
            'docs_generated/*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Renames files for browser caching purposeses
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/css/{,*/}*.css',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/fonts/*'
        ]
      }
    },

    csslint: {
      options: {
        csslintrc: 'app/less/.csslintrc'
      },
        dist: [
        'dist/css/*.css',
          '!dist/css/*.min.css'
       ]
    },

    bootlint: {
      options: {
        stoponerror: false,
        relaxerror: []
      },
      files: ['docs/{,**/}*.html', 'docs/{,**/}*.htm']
    },

    // Banner
    banner: '/*!\n <%= yeoman.pkg.name %> - v<%= yeoman.pkg.version %> - ' +
      '<%= yeoman.pkg.description %>\n ' +
      'Copyright <%= grunt.template.today("yyyy") %> <%= yeoman.pkg.author.name %>, all right reserved\n'+
      'MIT Licensed \n*/\n',
    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: ['dist/js/*', 'dist/css/*.css', 'dist/examples/**/*.css', 'dist/examples/**/*.js']
        }
      }
    },

    // Generate changelog based on git commit
    changelog: {
      options: {
        from: 'v3.3.0',
        commitLink: function (commitHash) {
          //TODO externalize orangeforge git url + project name etc..
          return '[' + commitHash.substring(0, 8) + '](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/' + commitHash + ')';
        }
      }
    },

    less: {
      compileCoreIE2015: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= yeoman.packageName %>IE82015.css.map',
          sourceMapFilename: 'dist/css/<%= yeoman.packageName %>IE82015.css.map'
        },
        src: '<%= yeoman.app %>/less/<%= yeoman.packageName %>IE82015.less',
        dest: 'dist/css/<%= yeoman.packageName %>IE82015.css'
      },
      compileBoostedIE2015: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'boostedIE82015.css.map',
          sourceMapFilename: 'dist/css/boostedIE82015.css.map'
        },
        src: '<%= yeoman.app %>/less/boostedIE82015.less',
        dest: 'dist/css/boostedIE82015.css'
      },
      compileCore2015: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= yeoman.packageName %>2015.css.map',
          sourceMapFilename: 'dist/css/<%= yeoman.packageName %>2015.css.map'
        },
        src: '<%= yeoman.app %>/less/<%= yeoman.packageName %>2015.less',
        dest: 'dist/css/<%= yeoman.packageName %>2015.css'
      },
      compileBoosted2015: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'boosted2015.css.map',
          sourceMapFilename: 'dist/css/boosted2015.css.map'
        },
        src: '<%= yeoman.app %>/less/boosted2015.less',
        dest: 'dist/css/boosted2015.css'
      },
      compileHelvetica: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'orangeHelvetica.css.map',
          sourceMapFilename: 'dist/css/orangeHelvetica.css.map'
        },
        src: '<%= yeoman.app %>/less/orangeHelvetica.less',
        dest: 'dist/css/orangeHelvetica.css'
      },
      compileIcons: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'orangeIcons.css.map',
          sourceMapFilename: 'dist/css/orangeIcons.css.map'
        },
        src: '<%= yeoman.app %>/less/orangeIcons.less',
        dest: 'dist/css/orangeIcons.css'
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: appConfig.browsers
      },
      dist: {
        options: {
          map: true
        },
        src: 'dist/css/*.css'
      }
    },

    csscomb: {
      options: {
        config: 'app/less/.csscomb.json'
      },
      dist: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
      }
    },

    imagemin: {
      // there's actually an error with the last version of imagemin.
      options: {
        force: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    cssmin: {
      options: {
        // TODO: disable `zeroUnits` optimization once clean-css 3.2 is released
        //    and then simplify the fix for https://github.com/twbs/bootstrap/issues/14837 accordingly
        compatibility: 'ie8',
        keepSpecialComments: '*',
        sourceMap: true,
        advanced: false
      },
      dist: {
          files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },

    concat: {
      bootstrapaccessibilityplugin: {
        options: {
          banner: '/*! ========================================================================' + '* Extends Bootstrap v3.1.1' + '' + '* Copyright (c) <2014> eBay Software Foundation' + '' + '* All rights reserved.' + '' + '* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:' + '' + '* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.' + '' + '* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.' + '' + '* Neither the name of eBay or any of its subsidiaries or affiliates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.' + '' + '* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.' + '' + '* ======================================================================== */  \n \n (function($) { \n  "use strict"; \n',
          separator: '\n',
          stripBanners: false,
          footer: '\n\n })(jQuery);'
        },
        src: [
          /* build the bootstrap accessibility JS */
          'bower_components/bootstrapaccessibilityplugin/src/js/functions.js',
          'bower_components/bootstrapaccessibilityplugin/src/js/alert.js',
          'bower_components/bootstrapaccessibilityplugin/src/js/modal.js'
          // 'bower_components/bootstrapaccessibilityplugin/src/js/dropdown.js'
          //tab.js is incompatible with bs 3.3.5
          // 'bower_components/bootstrapaccessibilityplugin/src/js/tab.js'
          // we don't need the collapse, replace by our own accordion.js
          //"bower_components/bootstrapaccessibilityplugin/src/js/collapse.js",
          // we redefined the carousel.js
          //"bower_components/bootstrapaccessibilityplugin/src/js/carousel.js",
        ],
        dest: '.tmp/js/bootstrap-accessibility.js'
      },
      boosted: {
        options: {
          banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
          stripBanners: false
        },
        src: [
          'bower_components/bootstrap/js/transition.js',
          'bower_components/bootstrap/js/alert.js',
          'bower_components/bootstrap/js/button.js',
          '<%= yeoman.app %>/js/tooltip.js',
          'bower_components/bootstrap/js/popover.js',
          'bower_components/bootstrap/js/scrollspy.js',
          'bower_components/bootstrap/js/affix.js',
          '<%= yeoman.app %>/js/collapse.js',
          '<%= yeoman.app %>/js/carousel.js',
          '<%= yeoman.app %>/js/dropdown.js',
          '<%= yeoman.app %>/js/megamenu.js',
          '<%= yeoman.app %>/js/modal.js',
          '<%= yeoman.app %>/js/tablesorter.js',
          '<%= yeoman.app %>/js/form.js',
          '<%= yeoman.app %>/js/tab.js',
          '.tmp/js/bootstrap-accessibility.js'
        ],
        dest: 'dist/js/<%= yeoman.pkg.name %>.js'
      },
      server: {
        src: [
          'bower_components/bootstrap/dist/js/bootstrap.js',
          '.tmp/js/bootstrap-accessibility.js',
          '<%= yeoman.app %>/js/collapse.js',
          '<%= yeoman.app %>/js/carousel.js',
          '<%= yeoman.app %>/js/dropdown.js',
          '<%= yeoman.app %>/js/megamenu.js',
          '<%= yeoman.app %>/js/modal.js',
          '<%= yeoman.app %>/js/tablesorter.js',
          '<%= yeoman.app %>/js/form.js',
          '<%= yeoman.app %>/js/tab.js'
        ],
        dest: '.tmp/js/<%= yeoman.pkg.name %>.js'
      }
    },
    /*
        uglify: {
          options: {
            preserveComments: 'some'
          },
          core: {
            src: '<%= concat.bootstrap.dest %>',
            dest: 'dist/js/<%= yeoman.pkg.name %>.min.js'
          },
          customize: {
            src: configBridge.paths.customizerJs,
            dest: 'docs/assets/js/customize.min.js'
          },
          docsJs: {
            src: configBridge.paths.docsJs,
            dest: 'docs/assets/js/docs.min.js'
          }
        },
          */
    uglify: {
      options: {
        report: 'min'
      },
      dist: {
        src: '<%= concat.boosted.dest %>',
        dest: 'dist/js/<%= yeoman.pkg.name %>.min.js'
      },
      docsJs: {
        src: configBridge.paths.docsJs,
        dest: 'docs_generated/docs/assets/js/docs.min.js'
      }
    },
    // concat: {
    //   dist: {}
    // },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'samples/{,*/}*.html', 'samples/{,*/}*.htm'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    qunit: {
      options: {
        inject: '<%= yeoman.app %>/js/tests/unit/phantom.js'
      },
      files: '<%= yeoman.app %>/js/tests/index.html'
    },

    'saucelabs-qunit': {
      all: {
        options: {
          build: process.env.TRAVIS_JOB_ID,
          throttled: 10,
          maxRetries: 3,
          maxPollRetries: 4,
          urls: ['http://127.0.0.1:3000/js/tests/index.html?hidepassed'],
          browsers: grunt.file.readYAML('sauce_browsers.yml')
        }
      }
    },

    htmllint: {
      options: {
        reporter: JENKINS && 'checkstyle',
        reporterOutput: JENKINS && 'reports/htmllint.xml',
        ignore: [
          'Attribute "autocomplete" not allowed on element "button" at this point.',
          'Attribute "autocomplete" is only allowed when the input type is "color", "date", "datetime", "datetime-local", "email", "month", "number", "password", "range", "search", "tel", "text", "time", "url", or "week".',
          'Element "img" is missing required attribute "src".',
          'Element “input” is missing one or more of the following attributes: “aria-expanded”, “aria-valuemax”, “aria-valuemin”, “aria-valuenow”, “role”.',
          'The “datetime” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “color” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “date” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “datetime-local” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “month” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “time” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The “week” input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.'
        ]
      },
      src: ['docs/{,**/}*.html','app/js/tests/visual/*.html']
    },

    // make a zipfile
    compress: {
      source: {
        options: {
          archive: '<%= yeoman.pkg.name %>-v<%= yeoman.pkg.version %>.zip'
        },
        files: [{
            expand: true,
            cwd: '',
            src: ['app/**', 'dist/**', 'docs/**', 'docs_base_boosted/**', 'docs_base_bootstrap/**', 'test/**', '.*', '*.*', '!*.zip', '!.git', '!.tmp'],
            dest: '<%= yeoman.pkg.name %>-v<%= yeoman.pkg.version %>'
          } // makes all src relative to cwd
        ]
      },
      dist: {
        options: {
          archive: '<%= yeoman.pkg.name %>-v<%= yeoman.pkg.version %>-dist.zip'
        },
        files: [{
            expand: true,
            cwd: 'dist',
            src: ['**'],
            dest: '<%= yeoman.pkg.name %>-v<%= yeoman.pkg.version %>-dist'
          } // makes all src relative to cwd
        ]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            'images/**',
            'fonts/**'
          ]
        }, {
          expand: true,
          cwd: 'bower_components/bootstrap/dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.dist %>/css',
        dest: '.tmp/css',
        src: '{,*/}*.css'
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/bootstrap/dist',
        dest: '.tmp',
        src: 'fonts/*'
      },
      docbs: {
        files: [{
          expand: true,
          cwd: 'docs_generated/_gh_pages',
          dest: 'docs_generated/boosted_doc',
          src: '**'
        }, {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/boosted_doc/dist',
          src: '**'
        }, {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/boosted_doc/',
          src: 'fonts/**'
        }]
      },
      createDocbsGenerated: {
        files: [{
          expand: true,
          cwd: 'docs_base_bootstrap',
          dest: 'docs_generated',
          src: '**'
        }, {
          expand: true,
          cwd: 'docs_base_boosted',
          dest: 'docs_generated',
          src: '**'
        }, {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/docs/dist',
          src: '**'
        }, {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/docs/',
          src: 'fonts/**'
        }]
      }
    },


    jekyll: {
      server: {
        options: {
          src: 'docs_origin',
          dest: 'docs',
          config: '_config.yml'
        }
      },
      bootstrap: {
        options: {
          src: 'docs_generated/docs',
          dest: 'docs',
          config: 'docs_base_boosted/_config_bootstrap_for_boosted.yml'
        }
      }
    },

    replace: {
      remplace: {
        src: ['docs_generated/docs/**/*.html'],
        overwrite: true,
        replacements: [{
              from: '<h2 id="glyphicons-glyphs">Available glyphs</h2>',
              to: '<h2 id="orange-icons">Orange Icons</h2><p>Icons created from the Orange brand.'+
        'Copyright (C) 2016 Orange SA All rights reserved'+
        'See NOTICE.txt for more informations</p><p>To use it in your project you need to include the file orangeIcons.css</p>'+
        '<p>The best practice is to create your own icons libray (<a href="../getting-started/#create-icon">See howto in getting started section</a>)</p><div class="bs-glyphicons"><ul class="bs-glyphicons-list">{% for iconClassName in site.data.orange-icons %}<li><span class="{{ iconClassName }}" aria-hidden="true"></span><span class="glyphicon-class">{{ iconClassName }}</span></li>{% endfor %}</ul></div><h2 id="glyphicons-glyphs">Available glyphs</h2>'
          }, {
              from: '<li><a href="#glyphicons-glyphs">Available glyphs</a></li>',
              to: '<li><a href="#orange-icons">Orange Icons</a></li><li><a href="#glyphicons-glyphs">Available glyphs</a></li>'
          }, {
              from: '<li><a href="#responsive-utilities-tests">Test cases</a></li>',
              to: '<li><a href="#responsive-utilities-tests">Test cases</a></li><!--'
          }, {
              from: 'bootstrap-orange.css',
              to: 'bootstrap-orange<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'bootstrap-orange-theme.css',
              to: 'bootstrap-orange-theme<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'boosted.css',
              to: 'boosted<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'bootstrap-orangeIE8.css',
              to: 'bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'bootstrap-orange-themeIE8.css',
              to: 'bootstrap-orange-themeIE8<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'boostedIE8.css',
              to: 'boostedIE8<%= yeoman.docbrandversion %>.css'
          }, {
              from: '<li><a href="#sass-installation">Installation</a></li>',
              to: '<li><a href="#sass-installation">Installation</a></li> -->'
          }, {
              from: '<a href="#" class="navbar-brand">Brand</a>',
              to: '<a href="#" class="navbar-brand"><img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>'
          }, {
              from: '<a class="navbar-brand" href="#">Brand</a>',
              to: '<a href="#" class="navbar-brand"><img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>'
          }, {
              from: '<img alt="Brand" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA81BMVEX///9VPnxWPXxWPXxWPXxWPXxWPXxWPXz///9hSYT6+vuFc6BXPn37+vz8+/z9/f2LeqWMe6aOfqiTg6uXiK5bQ4BZQX9iS4VdRYFdRYJfSINuWI5vWY9xXJF0YJR3Y5Z4ZZd5ZZd6Z5h9apq0qcW1qsW1q8a6sMqpnLyrn76tocCvpMGwpMJoUoprVYxeRoJjS4abjLGilLemmbrDutDFvdLPx9nX0eDa1OLb1uPd1+Td2OXe2eXh3Ofj3+nk4Orl4evp5u7u7PLv7fPx7/T08vb08/f19Pf29Pj39vn6+fuEcZ9YP35aQn/8/P1ZQH5fR4PINAOdAAAAB3RSTlMAIWWOw/P002ipnAAAAPhJREFUeF6NldWOhEAUBRvtRsfdfd3d3e3/v2ZPmGSWZNPDqScqqaSBSy4CGJbtSi2ubRkiwXRkBo6ZdJIApeEwoWMIS1JYwuZCW7hc6ApJkgrr+T/eW1V9uKXS5I5GXAjW2VAV9KFfSfgJpk+w4yXhwoqwl5AIGwp4RPgdK3XNHD2ETYiwe6nUa18f5jYSxle4vulw7/EtoCdzvqkPv3bn7M0eYbc7xFPXzqCrRCgH0Hsm/IjgTSb04W0i7EGjz+xw+wR6oZ1MnJ9TWrtToEx+4QfcZJ5X6tnhw+nhvqebdVhZUJX/oFcKvaTotUcvUnY188ue/n38AunzPPE8yg7bAAAAAElFTkSuQmCC">',
              to: '<img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/>'
          }, {
              from: '<li><a href="#examples-framework">Using the framework</a></li>',
              to: '<li><a href="#examples-orange">Orange page example</a></li><li><a href="#examples-framework">Using the framework</a></li>'
          }, {
              from: '<!-- Documentation extras -->',
              to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<link href="../dist/css/bootstrap.css" rel="stylesheet">',
              to: '<!--[if lt IE 9]><link href="../dist/css/bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/bootstrap-orange<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<link href="../dist/css/bootstrap-theme.css" rel="stylesheet">',
              to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<link href="../../css/bootstrap.css" rel="stylesheet">',
              to: '<!--[if lt IE 9]><link href="../../css/bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../../css/bootstrap-orange<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<link href="../../css/bootstrap-theme.css" rel="stylesheet">',
              to: '<!--[if lt IE 9]><link href="../../css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../../css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<link href="data:text/css;charset=utf-8," data-href="../dist/css/bootstrap-theme.css" rel="stylesheet" id="bs-theme-stylesheet">',
              to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
          }, {
              from: '<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->',
              to: ''
          }, {
              from: '<script src="../../assets/js/ie-emulation-modes-warning.js"></script>',
              to: ''
          }, {
              from: '<script src="../assets/js/ie-emulation-modes-warning.js"></script>',
              to: ''
          }, {
              from: '<!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->',
              to: ''
          }, {
              from: 'bootstrap.css',
              to: 'bootstrap-orange<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'bootstrap-theme.css',
              to: 'boosted<%= yeoman.docbrandversion %>.css'
          }, {
              from: 'bootstrap.min.css',
              to: 'bootstrap-orange<%= yeoman.docbrandversion %>.min.css'
          }, {
              from: 'bootstrap-theme.min.css',
              to: 'boosted<%= yeoman.docbrandversion %>.min.css'
          }, {
              from: 'bootstrap.js',
              to: 'boosted.js'
          }, {
              from: 'bootstrap.min.js',
              to: 'boosted.min.js'
          },
          // {
          //     from: 'js/boosted.js',
          //     to: 'js/boosted.min.js'
          // },
           {
              from: 'js/bootstrap.js',
              to: 'js/boosted.min.js'
          }, {
              from: '<a href="../customize/">Customize</a>',
              to: '<a href="../customize/">Customize</a></li><li{% if page.slug == "boostwatch" %} class="active"{% endif %}><a href="../boostwatch/">Boostwatch</a></li>'
          }, {
              from: '{% include nav/customize.html %}',
              to: '{% include nav/customize.html %}{% elsif page.slug == "boostwatch" %}{% include nav/boostwatch.html %}'
          }, {
              match: '<a href="../" class="navbar-brand">Bootstrap</a>',
              to: '<a href="../" class="navbar-brand">B<span class="text-primary">oo</span>st</a>'
          }, {
              from: '<h2 id="type-lists">Lists</h2>',
              to: '<h2 id="type-lists">Lists</h2>{% include css/listsOrange.html %}'
          },
          // Add the Stepbar and footer link to the nav of the component page
            {
              from: '<li><a href="#breadcrumbs">Breadcrumbs</a></li>',
              to: '{% include nav/addCustoToComponentNav.html %}<li><a href="#breadcrumbs">Breadcrumbs</a></li>'
          },
          // Add the Stepbar and footer to the component page
            {
              from: '{% include components/navbar.html %}',
              to: '{% include components/navbar.html %}{% include components/stepbar.html %}{% include components/ofooter.html %}{% include components/toggles.html %}'
          },
          // Put the orange logo to replace the bootstrap one and the project name
            {
              from: '<a class="navbar-brand" href="#">Project Name</a>',
              to: '<a href="#" class="navbar-brand"><img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>'
          },
          // Add the Orange pagination to the nav of the components page
        //     {
        //       from: '<li><a href="#pagination-default">Default pagination</a></li>',
        //       to: '<li><a href="#pagination-default">Default pagination</a></li><li><a href="#orange-pagination">Orange pagination</a></li>'
        //   },
          // Add the inclusion into pagination.html to o-pagination.html, before the pager
        //     {
        //       from: '<h2 id="pagination-pager">Pager</h2>',
        //       to: '{% include components/o-pagination.html %}<h2 id="pagination-pager">Pager</h2>'
        //   },
          // Add the complex table to the nav of the Javascript page
            {
              from: '<li><a href="#transitions">Transitions</a></li>',
              to: '<li><a href="#transitions">Transitions</a></li><li><a href="#complextable">Table sorter</a></li>'
          },
          // Add the complex table to the inclusion list of the javascript page
            {
              from: '{% include js/modal.html %}',
              to: '{% include js/tableSorter.html %}{% include js/modal.html %}'
          },
          // Add the NavTabs to the navigation
            {
              from: '<li><a href="#nav-pills">Pills</a></li>',
              to: '<li><a href="#nav-tabs-a">Standard tabs bar</a></li><li><a href="#nav-pills">Pills</a></li>'
          },
          // Add the NavTabs to the inclusion list of the navs.html native page
            {
              from: '<h2 id="nav-pills">Pills</h2>',
              to: '{% include components/navTab.html %}<h2 id="nav-pills">Pills</h2>'
          },
          // Add the megamenu and localNavigation to the navbar nav menu
            {
              from: '<li><a href="#navbar-forms">Forms</a></li>',
              to: '<li><a href="#navbar-brand-image-text">Brand image and text</a></li><li><a href="#megamenu">Orange megamenu</a></li><li><a href="#local1">Default local navigation</a></li><li><a href="#local2">Two levels local navigation</a></li><li><a href="#navbar-forms">Forms</a></li>'
          },
          // Add the megamenu and localNavigation to the inclusion list of the navbar.html native page
            {
              from: '<h2 id="navbar-forms">Forms</h2>',
              to: '{% include components/navbar-brand-text.html %}{% include components/megamenu.html %}{% include components/local.html %}<h2 id="navbar-forms">Forms</h2>'
          },
          // Replace the default bootstrap accordions by o-accordion orange
            {
              from: 'class="panel-group"',
              to: 'class="o-accordion panel-group"'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-tabs" >',
              to: '<ul class="nav nav-tabs" role="tablist">'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-tabs">',
              to: '<ul class="nav nav-tabs" role="tablist">'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-pills">',
              to: '<ul class="nav nav-pills" role="tablist">'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-pills nav-stacked">   ',
              to: '<ul class="nav nav-pills nav-stacked" role="tablist">'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-tabs nav-justified">   ',
              to: '<ul class="nav nav-tabs nav-justified" role="tablist">'
          },
          // fix semantic aria roles error into the native documentation
            {
              from: '<ul class="nav nav-pills nav-justified">   ',
              to: '<ul class="nav nav-pills nav-justified" role="tablist">'
          },
          // Explain into the documentation that for Orange Brand there's only BLACK header / Footer
            {
              from: '<p>Modify the look of the navbar by adding <code>.navbar-inverse</code>.</p>',
              to: '<p>In native Bootstrap framework, you can modify the look of the navbar by adding <code>.navbar-inverse</code>. But according to the Orange Brand specification only Black navigations (Headers and footer) can be used</p>'
          },
          // Add inclusion for orange responsive tables
            {
              from: '<h2 id="tables-responsive">Responsive tables</h2>',
              to: '<h2 id="tables-responsive">Responsive tables</h2>{% include css/responsive_table.html %}'
          },
          // Add inclusion for orange checkboxes and radio
            {
              from: '<h3>Selects</h3>',
              to: '{% include css/o-checkbox-radio.html %}<h3>Selects</h3>'
          },
          // WARNING for bordered table, not recommended by the brand TEAM
            {
              from: '<p>Add <code>.table-bordered</code> for borders on all sides of the table and cells.</p>',
              to: '<p>Add <code>.table-bordered</code> for borders on all sides of the table and cells. WARNING : Be careful use of bordered table is not recommended by the Orange brand</p>'
          },
          // WARNING for stripped, not recommended by the brand TEAM
            {
              from: '<p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p>',
              to: '<p>Use <code>.table-striped</code> to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>. WARNING : Be careful use of stripped row is not recommended by the Orange brand</p>'
          }, {
              from: '{{ page.title }} &middot; Bootstrap',
              to: '{{ page.title }} &middot; Boosted'
          }, {
              from: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){',
              to: ''
          }, {
              from: '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
              to: ''
          }, {
              from: 'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
              to: ''
          }, {
              from: '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');',
              to: ''
          }, {
              from: 'ga(\'create\', \'UA-146052-10\', \'getbootstrap.com\');',
              to: ''
          }, {
              from: 'ga(\'send\', \'pageview\');',
              to: ''
          }

        ]
          //usePrefix:false
          //}
          //,
          //files: [
          //{expand: true, src: 'docs_generated/docs/**/*.html', dest: ''}
          //]
      },
      removes: {
        src: ['docs_generated/docs/**/*.html'],
        overwrite: true,
        //options: {
        replacements: [{
          from: '<a href="../customize/">Customize</a></li>',
          to: ''
        }, {
          from: '{% include css/less.html %}',
          to: ''
        }, {
          from: '{% include css/sass.html %}',
          to: ''
        }, {
          from: '<li{% if page.slug == "customize" %} class="active"{% endif %}>',
          to: ''
        }, {
          from: '{% include nav/customize.html %}',
          to: ''
        }, {
          from: '{% include ads.html %}',
          to: ''
        }]
      },
      relativeurl: {
        src: ['docs/index.html'],
        overwrite: true,
        //options: {
        replacements: [{
          from: '"../',
          to: '"'
        }]

      }
    },

    autoshot: {
      default_options: {
        options: {
          // necessary config
          path: 'docs_base_boosted/docs/examples/screenshots',
          remote: {
            files: [{
              src: 'http://localhost:9000/examples/blog/index.html',
              dest: 'blog.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/carousel/index.html',
              dest: 'carousel.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/cover/index.html',
              dest: 'cover.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/dashboard/index.html',
              dest: 'dashboard.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/grid/index.html',
              dest: 'grid.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/jumbotron/index.html',
              dest: 'jumbotron.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/jumbotron-narrow/index.html',
              dest: 'jumbotron-narrow.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/justified-nav/index.html',
              dest: 'justified-nav.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/navbar/index.html',
              dest: 'navbar.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/navbar-fixed-top/index.html',
              dest: 'navbar-fixed.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/navbar-static-top/index.html',
              dest: 'navbar-static.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/non-responsive/index.html',
              dest: 'non-responsive.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/offcanvas/index.html',
              dest: 'offcanvas.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/signin/index.html',
              dest: 'signin.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/starter-template/index.html',
              dest: 'starter-template.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/sticky-footer/index.html',
              dest: 'sticky-footer.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/sticky-footer-navbar/index.html',
              dest: 'sticky-footer-navbar.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/theme/index.html',
              dest: 'theme.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/tooltip-viewport/index.html',
              dest: 'tooltip-viewport.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/example_admin/main.html',
              dest: 'example_admin.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/example_admin/edit.html',
              dest: 'example_admin_edit.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/example_dashboard/index.html',
              dest: 'example_dashboard.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/example_form/index.html',
              dest: 'example_form.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/example_news/index.html',
              dest: 'example_news.jpg',
              delay: 3000
            }, {
              src: 'http://localhost:9000/examples/orange_brand_2015/index.html',
              dest: 'brand_2015.jpg',
              delay: 3000
            }]
          },
          viewport: ['800x600']
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'less',
        'copy:styles',
        'copy:fonts'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'less',
        'imagemin',
        'svgmin'
      ]
    },

    eslint: {
      options: {
        silent: true
      },
      nodeFiles: {
        src: ['*.js'],
        options: {
          configFile: '.eslintrc'
        }
      },
      boostedFiles: {
        src: ['app/js/**/*.js','!app/js/tablesorter.js','!app/js/tests/**/*.js'],
        options: {
          configFile: 'app/js/.eslintrc',
          format: './node_modules/eslint-friendly-formatter'
        }
      }
    }
  });

  // CSS distribution task.
  // Supported Compilers: sass (Ruby) and libsass.
  (function (sassCompilerName) {
    require('./grunt/bs-sass-compile/' + sassCompilerName + '.js')(grunt);
  })(process.env.TWBS_SASS || 'libsass');
  // grunt.registerTask('sass-compile', ['sass:core', 'sass:extras', 'sass:docs']);
  grunt.registerTask('sass-compile', ['sass:core']);

  grunt.registerTask('docs', [
    'clean:docs',
    'copy:createDocbsGenerated',
    'uglify:docsJs',
    'replace:remplace',
    'replace:removes',
    'jekyll:bootstrap',
    'replace:relativeurl'
  ]);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less',
      'concat:bootstrapaccessibilityplugin',
      'concat:server',
      'concurrent:server',
      //'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['docs', 'htmllint']);

  var runSubset = function (subset) {
    return !process.env.TWBS_TEST || process.env.TWBS_TEST === subset;
  };
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0';
  };

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core') &&
      // Skip core tests if this is a Savage build
      process.env.TRAVIS_REPO_SLUG !== 'twbs-savage/bootstrap') {
    testSubtasks = testSubtasks.concat(['dist-css', 'dist-js', 'csslint:dist', 'test-js', 'docs']);
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html')) {
    testSubtasks.push('validate-html');
  }
  // Only run Sauce Labs tests if there's a Sauce access key
  if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined' &&
      // Skip Sauce if running a different subset of the test suite
      runSubset('sauce-js-unit') &&
      // Skip Sauce on Travis when [skip sauce] is in the commit message
      isUndefOrNonZero(process.env.TWBS_DO_SAUCE)) {
    testSubtasks.push('connect');
    testSubtasks.push('saucelabs-qunit');
  }

  // Test task.
  grunt.registerTask('test', ['dist-css', 'dist-js', 'csslint:dist','test-js', 'docs']);
  grunt.registerTask('test-js', ['eslint:boostedFiles', 'eslint:nodeFiles', 'qunit']);
  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat:bootstrapaccessibilityplugin',  'concat:boosted', 'uglify:dist']);

  // CSS distribution task.
  grunt.registerTask('less-compile', ['less']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer:dist', 'csscomb:dist', 'cssmin:dist', 'usebanner']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css', 'copy:fonts', 'copy:dist', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'dist', 'test']);
};
