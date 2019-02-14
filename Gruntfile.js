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
  var generateCommonJSModule = require('./grunt/bs-commonjs-generator.js');
  var configBridge = grunt.file.readJSON('./grunt/configBridge.json', { encoding: 'utf8' });
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
                '/docs/3.4',
                serveStatic('docs')
              ),
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
        files: [
        {
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }
      ]
      },
      docs: {
        files: [
        {
          dot: true,
          src: [
            'docs_generated/*'
          ]
        }
      ]
      },
      server: '.tmp'
    },

    jshint: {
      options: {
        jshintrc: '<%= yeoman.app %>/js/.jshintrc'
      },
      grunt: {
        options: {
          jshintrc: 'grunt/.jshintrc'
        },
        src: ['Gruntfile.js', 'package.js', 'grunt/*.js']
      },
      core: {
        src: [
          '<%= yeoman.app %>/js/*.js',
          '!<%= yeoman.app %>/js/tablesorter.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= yeoman.app %>/js/tests/unit/.jshintrc'
        },
        src: '<%= yeoman.app %>/js/tests/unit/*.js'
      },
      assets: {
        src: ['docs_generated/docs/assets/js/src/*.js', 'docs_generated/docs/assets/js/*.js', '!docs_generated/docs/assets/js/*.min.js']
      }
    },

    jscs: {
      options: {
        config: '<%= yeoman.app %>/js/.jscsrc'
      },
      grunt: {
        src: '<%= jshint.grunt.src %>'
      },
      core: {
        src: '<%= jshint.core.src %>'
      },
      test: {
        src: '<%= jshint.test.src %>'
      },
      assets: {
        options: {
          requireCamelCaseOrUpperCaseIdentifiers: null
        },
        src: '<%= jshint.assets.src %>'
      }
    },

    stylelint: {
      options: {
        configFile: 'grunt/.stylelintrc',
        formatter: 'string',
        ignoreDisables: false,
        failOnError: true,
        outputFile: '',
        reportNeedlessDisables: false,
        syntax: ''
      },
      dist: [
        '<%= yeoman.app %>/less/**/*.less'
      ],
      docs: [
        'docs_generated/docs/assets/less/**/*.less'
      ],
      examples: [
        'docs/examples/**/*.css'
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
      'Copyright 2015 - <%= grunt.template.today("yyyy") %> <%= yeoman.pkg.author.name %>, all right reserved\n' +
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
        from: 'v3.3.2',
        commitLink: function (commitHash) {
          // TODO externalize orangeforge git url + project name etc..
          return '[' + commitHash.substring(0, 8) + '](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/' + commitHash + ')';
        }
      }
    },

    less: {
      options: {
        ieCompat: true,
        strictMath: true,
        sourceMap: true,
        outputSourceFiles: true
      },
      compileCoreIE2015: {
        options: {
          sourceMapURL: '<%= yeoman.packageName %>IE82015.css.map',
          sourceMapFilename: 'dist/css/<%= yeoman.packageName %>IE82015.css.map'
        },
        src: '<%= yeoman.app %>/less/<%= yeoman.packageName %>IE82015.less',
        dest: 'dist/css/<%= yeoman.packageName %>IE82015.css'
      },
      compileBoostedIE2015: {
        options: {
          sourceMapURL: 'boostedIE82015.css.map',
          sourceMapFilename: 'dist/css/boostedIE82015.css.map'
        },
        src: '<%= yeoman.app %>/less/boostedIE82015.less',
        dest: 'dist/css/boostedIE82015.css'
      },
      compileCore2015: {
        options: {
          sourceMapURL: '<%= yeoman.packageName %>2015.css.map',
          sourceMapFilename: 'dist/css/<%= yeoman.packageName %>2015.css.map'
        },
        src: '<%= yeoman.app %>/less/<%= yeoman.packageName %>2015.less',
        dest: 'dist/css/<%= yeoman.packageName %>2015.css'
      },
      compileBoosted2015: {
        options: {
          sourceMapURL: 'boosted2015.css.map',
          sourceMapFilename: 'dist/css/boosted2015.css.map'
        },
        src: '<%= yeoman.app %>/less/boosted2015.less',
        dest: 'dist/css/boosted2015.css'
      },
      compileHelvetica: {
        options: {
          sourceMapURL: 'orangeHelvetica.css.map',
          sourceMapFilename: 'dist/css/orangeHelvetica.css.map'
        },
        src: '<%= yeoman.app %>/less/orangeHelvetica.less',
        dest: 'dist/css/orangeHelvetica.css'
      },
      compileIcons: {
        options: {
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
    postcss: {
      options: {
        map: {
          inline: false,
          sourcesContent: true
        },
        processors: [
          require('autoprefixer')(configBridge.config.autoprefixer)
        ]
      },
      core: {
        src: [
          'dist/css/<%= yeoman.packageName %>IE82015.css',
          'dist/css/boostedIE82015.css',
          'dist/css/<%= yeoman.packageName %>2015.css',
          'dist/css/boosted2015.css',
          'dist/css/orangeHelvetica.css',
          'dist/css/orangeIcons.css'
        ]
      },
      docs: {
        src: 'docs/assets/css/docs.css'
      },
      examples: {
        options: {
          map: false
        },
        expand: true,
        cwd: 'docs/examples/',
        src: ['**/*.css'],
        dest: 'docs/examples/'
      }
    },

    imagemin: {
      // there's actually an error with the last version of imagemin.
      options: {
        force: true
      },
      dist: {
        files: [
        {
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }
      ]
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        sourceMap: true,
        sourceMapInlineSources: true,
        level: {
          1: {
            specialComments: 'all'
          }
        }
      },
      dist: {
        files: [
        {
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }
      ]
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
          // tab.js is incompatible with bs 3.3.5
          // 'bower_components/bootstrapaccessibilityplugin/src/js/tab.js'
          // we don't need the collapse, replace by our own accordion.js
          // "bower_components/bootstrapaccessibilityplugin/src/js/collapse.js",
          // we redefined the carousel.js
          // "bower_components/bootstrapaccessibilityplugin/src/js/carousel.js",
        ],
        dest: '.tmp/js/bootstrap-accessibility.js'
      },
      boosted: {
        options: {
          banner: '<%= banner %>\n<%= jqueryCheck %>\n<%= jqueryVersionCheck %>',
          stripBanners: false
        },
        src: [
          '<%= yeoman.app %>/js/transition.js',
          '<%= yeoman.app %>/js/alert.js',
          '<%= yeoman.app %>/js/button.js',
          '<%= yeoman.app %>/js/tooltip.js',
          '<%= yeoman.app %>/js/popover.js',
          '<%= yeoman.app %>/js/scrollspy.js',
          '<%= yeoman.app %>/js/affix.js',
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
          '<%= yeoman.app %>/js/transition.js',
          '<%= yeoman.app %>/js/alert.js',
          '<%= yeoman.app %>/js/button.js',
          '<%= yeoman.app %>/js/tooltip.js',
          '<%= yeoman.app %>/js/popover.js',
          '<%= yeoman.app %>/js/scrollspy.js',
          '<%= yeoman.app %>/js/affix.js',
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
        dest: '.tmp/js/<%= yeoman.pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        compress: true,
        mangle: true,
        ie8: true,
        output: {
          comments: /^!|@preserve|@license|@cc_on/i
        }
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

    exec: {
      npmUpdate: {
        command: 'npm update'
      },
      browserstack: {
        command: 'cross-env BROWSER=true karma start grunt/karma.conf.js'
      },
      karma: {
        command: 'karma start grunt/karma.conf.js'
      }
    },

    htmllint: {
      options: {
        ignore: [
          'Attribute "autocomplete" is only allowed when the input type is "color", "date", "datetime-local", "email", "hidden", "month", "number", "password", "range", "search", "tel", "text", "time", "url", or "week".',
          'Element "img" is missing required attribute "src".',
          'The "banner" role is unnecessary for element "header".',
          'The "contentinfo" role is unnecessary for element "footer".',
          'The "navigation" role is unnecessary for element "nav".',
          'The "document" role is unnecessary for element "body".',
          'The "main" role is unnecessary for element "main".',
          'The "date" input type is not supported in all browsers. Please be sure to test, and consider using a polyfill.',
          'The "form" role is unnecessary for element "form".'
        ],
        noLangDetect: true
      },
      src: ['docs/{,**/}*.html', 'app/js/tests/visual/*.html']
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
        {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            'images/**',
            'fonts/**'
          ]
        },
        {
          expand: true,
          cwd: 'dist',
          src: 'fonts/*',
          dest: '<%= yeoman.dist %>'
        }
      ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.dist %>/css',
        dest: '.tmp/css',
        src: '{,*/}*.css'
      },
      fonts: {
        expand: true,
        cwd: 'dist',
        dest: '.tmp',
        src: 'fonts/*'
      },
      docbs: {
        files: [
        {
          expand: true,
          cwd: 'docs_generated/_gh_pages',
          dest: 'docs_generated/boosted_doc',
          src: '**'
        },
        {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/boosted_doc/dist',
          src: '**'
        },
        {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/boosted_doc/',
          src: 'fonts/**'
        }
      ]
      },
      createDocbsGenerated: {
        files: [
        {
          expand: true,
          cwd: 'docs_base_bootstrap',
          dest: 'docs_generated',
          src: '**'
        },
        {
          expand: true,
          cwd: 'docs_base_boosted',
          dest: 'docs_generated',
          src: '**'
        },
        {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/docs/dist',
          src: '**'
        },
        {
          expand: true,
          cwd: 'dist',
          dest: 'docs_generated/docs/',
          src: 'fonts/**'
        }
      ]
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
          bundleExec: true,
          incremental: false,
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
        replacements: [
        {
          from: '<h2 id="glyphicons-glyphs">Available glyphs</h2>',
          to: '<h2 id="orange-icons">Orange Icons</h2><p>Icons created from the Orange brand.' +
            'Copyright (C) 2016 - 2019 Orange SA All rights reserved' +
            'See NOTICE.txt for more informations</p><p>To use it in your project you need to include the file orangeIcons.css</p>' +
            '<p>The best practice is to create your own icons libray (<a href="../getting-started/#create-icon">See howto in getting started section</a>)</p><div class="bs-glyphicons"><ul class="bs-glyphicons-list">{% for iconClassName in site.data.orange-icons %}<li><span class="{{ iconClassName }}" aria-hidden="true"></span><span class="glyphicon-class">{{ iconClassName }}</span></li>{% endfor %}</ul></div><h2 id="glyphicons-glyphs">Available glyphs</h2>'
        },
        {
          from: '<li><a href="#glyphicons-glyphs">Available glyphs</a></li>',
          to: '<li><a href="#orange-icons">Orange Icons</a></li><li><a href="#glyphicons-glyphs">Available glyphs</a></li>'
        },
        {
          from: '<li><a href="#responsive-utilities-tests">Test cases</a></li>',
          to: '<li><a href="#responsive-utilities-tests">Test cases</a></li><!--'
        },
        {
          from: 'bootstrap-orange.css',
          to: 'bootstrap-orange<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'bootstrap-orange-theme.css',
          to: 'bootstrap-orange-theme<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'boosted.css',
          to: 'boosted<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'bootstrap-orangeIE8.css',
          to: 'bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'bootstrap-orange-themeIE8.css',
          to: 'bootstrap-orange-themeIE8<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'boostedIE8.css',
          to: 'boostedIE8<%= yeoman.docbrandversion %>.css'
        },
        {
          from: '<li><a href="#sass-installation">Installation</a></li>',
          to: '<li><a href="#sass-installation">Installation</a></li> -->'
        },
        {
          from: '<a href="#" class="navbar-brand">Brand</a>',
          to: '<a href="#" class="navbar-brand"><img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>'
        },
        {
          from: '<a class="navbar-brand" href="#">Brand</a>',
          to: '<a href="#" class="navbar-brand"><img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/></a>'
        },
        {
          from: '<img alt="Brand" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA81BMVEX///9VPnxWPXxWPXxWPXxWPXxWPXxWPXz///9hSYT6+vuFc6BXPn37+vz8+/z9/f2LeqWMe6aOfqiTg6uXiK5bQ4BZQX9iS4VdRYFdRYJfSINuWI5vWY9xXJF0YJR3Y5Z4ZZd5ZZd6Z5h9apq0qcW1qsW1q8a6sMqpnLyrn76tocCvpMGwpMJoUoprVYxeRoJjS4abjLGilLemmbrDutDFvdLPx9nX0eDa1OLb1uPd1+Td2OXe2eXh3Ofj3+nk4Orl4evp5u7u7PLv7fPx7/T08vb08/f19Pf29Pj39vn6+fuEcZ9YP35aQn/8/P1ZQH5fR4PINAOdAAAAB3RSTlMAIWWOw/P002ipnAAAAPhJREFUeF6NldWOhEAUBRvtRsfdfd3d3e3/v2ZPmGSWZNPDqScqqaSBSy4CGJbtSi2ubRkiwXRkBo6ZdJIApeEwoWMIS1JYwuZCW7hc6ApJkgrr+T/eW1V9uKXS5I5GXAjW2VAV9KFfSfgJpk+w4yXhwoqwl5AIGwp4RPgdK3XNHD2ETYiwe6nUa18f5jYSxle4vulw7/EtoCdzvqkPv3bn7M0eYbc7xFPXzqCrRCgH0Hsm/IjgTSb04W0i7EGjz+xw+wR6oZ1MnJ9TWrtToEx+4QfcZJ5X6tnhw+nhvqebdVhZUJX/oFcKvaTotUcvUnY188ue/n38AunzPPE8yg7bAAAAAElFTkSuQmCC">',
          to: '<img src="../dist/images/ORANGE_LOGO_rgb.jpg" alt="Back to homepage" title="Back to homepage"/>'
        },
        {
          from: '<li><a href="#examples-framework">Using the framework</a></li>',
          to: '<li><a href="#examples-orange">Orange page example</a></li><li><a href="#examples-framework">Using the framework</a></li>'
        },
        {
          from: '<!-- Documentation extras -->',
          to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<link href="../dist/css/bootstrap.css" rel="stylesheet">',
          to: '<!--[if lt IE 9]><link href="../dist/css/bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/bootstrap-orange<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<link href="../dist/css/bootstrap-theme.css" rel="stylesheet">',
          to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<link href="../../css/bootstrap.css" rel="stylesheet">',
          to: '<!--[if lt IE 9]><link href="../../css/bootstrap-orangeIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../../css/bootstrap-orange<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<link href="../../css/bootstrap-theme.css" rel="stylesheet">',
          to: '<!--[if lt IE 9]><link href="../../css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../../css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<link href="data:text/css;charset=utf-8," data-href="../dist/css/bootstrap-theme.css" rel="stylesheet" id="bs-theme-stylesheet">',
          to: '<!--[if lt IE 9]><link href="../dist/css/boostedIE8<%= yeoman.docbrandversion %>.css" rel="stylesheet"><![endif]--><!--[if (gte IE 9) | (!IE)]><!--> <link href="../dist/css/boosted<%= yeoman.docbrandversion %>.css" rel="stylesheet"> <!--<![endif]-->'
        },
        {
          from: '<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->',
          to: ''
        },
        {
          from: '<script src="../../assets/js/ie-emulation-modes-warning.js"></script>',
          to: ''
        },
        {
          from: '<script src="../assets/js/ie-emulation-modes-warning.js"></script>',
          to: ''
        },
        {
          from: '<!--[if lt IE 9]><script src="../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->',
          to: ''
        },
        {
          from: 'bootstrap.css',
          to: 'bootstrap-orange<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'bootstrap-theme.css',
          to: 'boosted<%= yeoman.docbrandversion %>.css'
        },
        {
          from: 'bootstrap.min.css',
          to: 'bootstrap-orange<%= yeoman.docbrandversion %>.min.css'
        },
        {
          from: 'bootstrap-theme.min.css',
          to: 'boosted<%= yeoman.docbrandversion %>.min.css'
        },
        {
          from: 'bootstrap.js',
          to: 'boosted.js'
        },
        {
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
        },
        {
          from: '<a href="../customize/">Customize</a>',
          to: '<a href="../customize/">Customize</a></li><li{% if page.slug == "boostwatch" %} class="active"{% endif %}><a href="../boostwatch/">Boostwatch</a></li>'
        },
        {
          from: '{% include nav/customize.html %}',
          to: '{% include nav/customize.html %}{% elsif page.slug == "boostwatch" %}{% include nav/boostwatch.html %}'
        },
        {
          match: '<a href="../" class="navbar-brand">Bootstrap</a>',
          to: '<a href="../" class="navbar-brand">B<span class="text-primary">oo</span>st</a>'
        },
        {
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
        // Add the complex table to the nav of the Javascript page
        {
          from: '<li><a href="#transitions">Transitions</a></li>',
          to: '<li><a href="#transitions">Transitions</a></li><li><a href="#complextable">Table sorter</a></li><li><a href="#orange-popin">Orange Popin</a></li>'
        },
        // Add the complex table to the inclusion list of the javascript page
        {
          from: '{% include js/modal.html %}',
          to: '{% include js/tableSorter.html %}{% include js/modal.html %}{% include js/orangePopin.html %}'
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
        },
        {
          from: '{{ page.title }} &middot; Bootstrap',
          to: '{{ page.title }} &middot; Boosted'
        },
        {
          from: '(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){',
          to: ''
        },
        {
          from: '(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),',
          to: ''
        },
        {
          from: 'm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)',
          to: ''
        },
        {
          from: '})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');',
          to: ''
        },
        {
          from: 'ga(\'create\', \'UA-146052-10\', \'getbootstrap.com\');',
          to: ''
        },
        {
          from: 'ga(\'send\', \'pageview\');',
          to: ''
        }
        ]
      },
      removes: {
        src: ['docs_generated/docs/**/*.html'],
        overwrite: true,
        replacements: [
        {
          from: '<a href="../customize/">Customize</a></li>',
          to: ''
        },
        {
          from: '{% include css/less.html %}',
          to: ''
        },
        {
          from: '{% include css/sass.html %}',
          to: ''
        },
        {
          from: '<li{% if page.slug == "customize" %} class="active"{% endif %}>',
          to: ''
        },
        {
          from: '{% include nav/customize.html %}',
          to: ''
        },
        {
          from: '{% include ads.html %}',
          to: ''
        }
      ]
      },
      relativeurl: {
        src: ['docs/index.html'],
        overwrite: true,
        replacements: [
        {
          from: '"../',
          to: '"'
        }
      ]
      }
    },

    autoshot: {
      defaultOptions: {
        options: {
          // necessary config
          path: 'docs_base_boosted/docs/examples/screenshots',
          remote: {
            files: [
            {
              src: 'http://localhost:9000/examples/blog/index.html',
              dest: 'blog.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/carousel/index.html',
              dest: 'carousel.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/cover/index.html',
              dest: 'cover.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/dashboard/index.html',
              dest: 'dashboard.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/grid/index.html',
              dest: 'grid.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/jumbotron/index.html',
              dest: 'jumbotron.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/jumbotron-narrow/index.html',
              dest: 'jumbotron-narrow.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/justified-nav/index.html',
              dest: 'justified-nav.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/navbar/index.html',
              dest: 'navbar.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/navbar-fixed-top/index.html',
              dest: 'navbar-fixed.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/navbar-static-top/index.html',
              dest: 'navbar-static.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/non-responsive/index.html',
              dest: 'non-responsive.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/offcanvas/index.html',
              dest: 'offcanvas.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/signin/index.html',
              dest: 'signin.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/starter-template/index.html',
              dest: 'starter-template.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/sticky-footer/index.html',
              dest: 'sticky-footer.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/sticky-footer-navbar/index.html',
              dest: 'sticky-footer-navbar.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/theme/index.html',
              dest: 'theme.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/tooltip-viewport/index.html',
              dest: 'tooltip-viewport.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/example_admin/main.html',
              dest: 'example_admin.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/example_admin/edit.html',
              dest: 'example_admin_edit.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/example_dashboard/index.html',
              dest: 'example_dashboard.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/example_form/index.html',
              dest: 'example_form.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/example_news/index.html',
              dest: 'example_news.jpg',
              delay: 3000
            },
            {
              src: 'http://localhost:9000/examples/orange_brand_2015/index.html',
              dest: 'brand_2015.jpg',
              delay: 3000
            }
          ]
          },
          viewport: ['800x600']
        }
      }
    }
  });

  // CSS distribution task.
  // Supported Compilers: sass (Ruby) and libsass.
  /*
  (function (sassCompilerName) {
    require('./grunt/bs-sass-compile/' + sassCompilerName + '.js')(grunt);
  })(process.env.TWBS_SASS || 'libsass');
  grunt.registerTask('sass-compile', ['sass:core']);
  */

  grunt.registerTask('docs', [
    'clean:docs',
    'copy:createDocbsGenerated',
    // 'less:docs',
    // 'less:docsIe',
    'stylelint:docs',
    'uglify:docsJs',
    'jshint:assets',
    'jscs:assets',
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
      'less',
      'copy:styles',
      'copy:fonts',
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
    return typeof val === 'undefined' || val !== '0';
  };

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat(['dist-css', 'dist-js', 'stylelint:dist', 'test-js', 'docs']);
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html') &&
      // Skip HTML5 validator on Travis when [skip validator] is in the commit message
      isUndefOrNonZero(process.env.TWBS_DO_VALIDATOR)) {
    testSubtasks.push('validate-html');
  }
  // Only run BrowserStack tests if there's a BrowserStack access key
  if (typeof process.env.BROWSER_STACK_USERNAME !== 'undefined' &&
      // Skip BrowserStack if running a different subset of the test suite
      runSubset('browserstack') &&
      // Skip BrowserStack on Travis when [skip browserstack] is in the commit message
      isUndefOrNonZero(process.env.TWBS_DO_BROWSERSTACK)) {
    testSubtasks.push('exec:browserstack');
  }

  // Test task.
  grunt.registerTask('testKarma', testSubtasks);
  grunt.registerTask('test', ['dist-css', 'dist-js', 'stylelint:dist', 'test-js', 'docs', 'testKarma']);
  grunt.registerTask('test-js', ['jshint:core', 'jshint:test', 'jshint:grunt', 'jscs:core', 'jscs:test', 'jscs:grunt', 'exec:karma']);
  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat:bootstrapaccessibilityplugin', 'concat:boosted', 'uglify:dist', 'commonjs']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['less', 'postcss:core', 'cssmin:dist', 'usebanner']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean:dist', 'dist-css', 'copy:fonts', 'copy:dist', 'dist-js']);

  // Default task.
  grunt.registerTask('default', ['clean:dist', 'dist', 'test']);
  grunt.registerTask('commonjs', 'Generate CommonJS entrypoint module in dist dir.', function () {
    var srcFiles = grunt.config.get('concat.boosted.src');
    var destFilepath = 'dist/js/npm.js';
    generateCommonJSModule(grunt, srcFiles, destFilepath);
  });
};
