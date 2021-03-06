/* eslint-env node */

'use strict'

const path = require('path')
const ip = require('ip')
const { browsers, browsersKeys } = require('./browsers')

const USE_OLD_JQUERY = Boolean(process.env.USE_OLD_JQUERY)
const BUNDLE = Boolean(process.env.BUNDLE)
const BROWSERSTACK = Boolean(process.env.BROWSERSTACK)
const JQUERY_FILE = USE_OLD_JQUERY ?
  'https://cdn.jsdelivr.net/npm/jquery@1.9.1/jquery.min.js' :
  'node_modules/jquery/dist/jquery.slim.min.js'

const frameworks = [
  'qunit',
  'sinon'
]

const plugins = [
  'karma-qunit',
  'karma-sinon'
]

const reporters = ['dots']

const detectBrowsers = {
  usePhantomJS: false,
  postDetection(availableBrowser) {
    // On CI just use Chrome
    if (process.env.CI === true) {
      return ['ChromeHeadless']
    }

    if (availableBrowser.includes('Chrome')) {
      return ['ChromeHeadless']
    }

    if (availableBrowser.includes('Chromium')) {
      return ['ChromiumHeadless']
    }

    if (availableBrowser.includes('Firefox')) {
      return ['FirefoxHeadless']
    }

    if (availableBrowser.includes('FirefoxNightly')) {
      return ['FirefoxNightlyHeadless']
    }

    throw new Error('Please install Chrome, Chromium, Firefox or Firefox Nightly')
  }
}

let files = [
  'node_modules/popper.js/dist/umd/popper.min.js',
  'node_modules/hammer-simulator/index.js'
]

const conf = {
  basePath: '../..',
  port: 9876,
  colors: true,
  autoWatch: false,
  singleRun: true,
  concurrency: Infinity,
  client: {
    qunit: {
      showUI: true
    }
  }
}

if (BUNDLE) {
  frameworks.push('detectBrowsers')
  plugins.push(
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-detect-browsers'
  )
  conf.detectBrowsers = detectBrowsers
  files = [...files,
    JQUERY_FILE,
    'dist/js/boosted.js']
} else if (BROWSERSTACK) {
  conf.hostname = ip.address()
  conf.browserStack = {
    username: process.env.BROWSER_STACK_USERNAME,
    accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
    build: `boosted-v4-${new Date().toISOString()}`,
    project: 'Boosted',
    retryLimit: 2
  }
  plugins.push('karma-browserstack-launcher')
  conf.customLaunchers = browsers
  conf.browsers = browsersKeys
  conf.browserNoActivityTimeout = 60000
  reporters.push('BrowserStack')
  files = [...files,
    'node_modules/jquery/dist/jquery.slim.min.js',
    'js/dist/util.js',
    'js/dist/tooltip.js',
    // include all of our js/dist files except util.js, index.js and tooltip.js
    'js/dist/!(util|index|tooltip).js']
} else {
  frameworks.push('detectBrowsers')
  plugins.push(
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-detect-browsers'
  )
  files = [...files,
    JQUERY_FILE,
    'js/coverage/dist/util.js',
    'js/coverage/dist/tooltip.js',
    // include all of our js/dist files except util.js, index.js and tooltip.js
    'js/coverage/dist/!(util|index|tooltip).js']
  conf.detectBrowsers = detectBrowsers
  if (!USE_OLD_JQUERY) {
    plugins.push('karma-coverage-istanbul-reporter')
    reporters.push('coverage-istanbul')
    conf.coverageIstanbulReporter = {
      dir: path.resolve(__dirname, '../coverage/'),
      reports: ['lcov', 'text-summary'],
      thresholds: {
        emitWarning: false,
        global: {
          statements: 84,
          branches: 80,
          functions: 80,
          lines: 84
        }
      }
    }
  }
}

files.push('js/tests/unit/*.js')

conf.frameworks = frameworks
conf.plugins = plugins
conf.reporters = reporters
conf.files = files

module.exports = karmaConfig => {
  conf.logLevel = karmaConfig.LOG_ERROR
  karmaConfig.set(conf)
}
