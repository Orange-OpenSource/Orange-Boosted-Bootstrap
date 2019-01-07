// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'Orange-OpenSource:Orange-Boosted-Bootstrap',  // https://atmospherejs.com/twbs/bootstrap
  summary: 'Orange Boosted with Bootstrap is a framework library accessible, ergonomic and Orange branded based on Bootstrap v3.4.0.',
  version: '3.4.0',
  git: 'https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  var assets = [
    'dist/fonts/glyphicons-halflings-regular.eot',
    'dist/fonts/glyphicons-halflings-regular.svg',
    'dist/fonts/glyphicons-halflings-regular.ttf',
    'dist/fonts/glyphicons-halflings-regular.woff',
    'dist/fonts/glyphicons-halflings-regular.woff2',
    'dist/fonts/boosted.eot',
    'dist/fonts/boosted.svg',
    'dist/fonts/boosted.ttf',
    'dist/fonts/boosted.woff',
    'dist/fonts/HelvNeue55_W1G.eot',
    'dist/fonts/HelvNeue55_W1G.svg',
    'dist/fonts/HelvNeue55_W1G.ttf',
    'dist/fonts/HelvNeue55_W1G.woff',
    'dist/fonts/HelvNeue55_W1G.woff2',
    'dist/fonts/HelvNeue75_W1G.eot',
    'dist/fonts/HelvNeue75_W1G.svg',
    'dist/fonts/HelvNeue75_W1G.ttf',
    'dist/fonts/HelvNeue75_W1G.woff',
    'dist/fonts/HelvNeue75_W1G.woff2',
    'dist/fonts/icon-orange.eot',
    'dist/fonts/icon-orange.svg',
    'dist/fonts/icon-orange.ttf',
    'dist/fonts/icon-orange.woff'
  ];
  if (api.addAssets) {
    api.addAssets(assets, 'client');
  } else {
    api.addFiles(assets, 'client', { isAsset: true });
  }
  api.addFiles([
    'dist/css/bootstrap-orange2015.css',
    'dist/css/boosted2015.css',
    'dist/css/orangeHelvetica.css',
    'dist/css/orangeIcons.css',
    'dist/js/boosted.js'
  ], 'client');
});
