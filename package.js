// package metadata file for Meteor.js

/* eslint-env meteor */

Package.describe({
  name: 'Orange-OpenSource:ouds-web', // https://atmospherejs.com/Orange-OpenSource/Orange-Boosted-Bootstrap
  summary: 'OUDS Web is a Bootstrap based, Orange branded accessible and ergonomic components library.',
  version: '0.0.3',
  git: 'https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git'
})

Package.onUse(api => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/css/ouds-web.css',
    'dist/js/ouds-web.js'
  ], 'client')
})
