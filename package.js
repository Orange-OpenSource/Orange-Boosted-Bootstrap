// package metadata file for Meteor.js

/* global Package:true */

Package.describe({
  name: 'Orange-OpenSource:Orange-Boosted-Bootstrap',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'Orange Boosted with Bootstrap is a framework library accessible, ergonomic and Orange branded based on Bootstrap v4.0.0-alpha.6.',
  version: '4.0.0-alpha.6.1',
  git: 'https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    'dist/css/boosted.css',
    'dist/js/boosted.js'
  ], 'client');
});
