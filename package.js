// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'Orange-OpenSource:Orange-Boosted-Bootstrap', // https://atmospherejs.com/Orange-OpenSource/Orange-Boosted-Bootstrap
  summary: 'Orange Boosted with Bootstrap is a Bootstrap based, Orange branded accessible and ergonomic components library.',
  version: '5.3.7',
  git: 'https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/boosted.css',
    'dist/js/boosted.js'
  ], 'client')
})
