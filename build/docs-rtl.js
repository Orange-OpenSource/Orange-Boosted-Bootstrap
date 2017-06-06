#!/usr/bin/env node

'use strict'

/*!
 * Script to update version number references in the project.
 * Copyright 2017 The Bootstrap Authors
 * Copyright 2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/* global Set */

var fs = require('fs')
var path = require('path')
var sh = require('shelljs')
sh.config.fatal = true
var sed = sh.sed

sh.exec("find docs/4.0/examples/ -mindepth 1 -maxdepth 1 -type d -name 'rtl-*' -exec bash -c 'rm -rf docs/4.0/examples/$(basename \"{}\")/* ; rmdir docs/4.0/examples/$(basename \"{}\")' ;", function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);

  sh.exec("find docs/4.0/examples/ -mindepth 1 -maxdepth 1 -type d ! -name 'screenshots' -exec bash -c 'mkdir -p docs/4.0/examples/rtl-$(basename \"{}\") ; cp -av \"{}\"/* docs/4.0/examples/rtl-$(basename \"{}\")/' ;", function(code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);


    sh.exec("find docs/4.0/examples/rtl-* -type f -name '*.html' -exec sed -i 's/boosted\./boosted-rtl\./gi' {} \;", function(code, stdout, stderr) {
      console.log('Exit code:', code);
      console.log('Program output:', stdout);
      console.log('Program stderr:', stderr);


      sh.exec("find docs/4.0/examples/rtl-* -type f -name '*.html' -exec sed -i 's/html lang=\"en\"/html lang=\"en\" dir=\"rtl\"/gi' {} \;", function(code, stdout, stderr) {
        console.log('Exit code:', code);
        console.log('Program output:', stdout);
        console.log('Program stderr:', stderr);
      });
    });
  });
});

