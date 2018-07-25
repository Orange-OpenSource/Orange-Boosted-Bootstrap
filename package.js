// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'Orange-OpenSource:Orange-Boosted-Bootstrap',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'Orange Boosted with Bootstrap is a framework library accessible, ergonomic and Orange branded based on Bootstrap v4.1.3.',
  version: '4.1.3',
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
