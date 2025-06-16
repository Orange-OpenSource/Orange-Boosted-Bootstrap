/* eslint-disable camelcase */

'use strict'

const browsers = {
  safariMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Monterey',
    browser: 'Safari',
    browser_version: 'latest'
  },
  chromeMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Monterey',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Monterey',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  chromeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browser_version: '120'
  },
  firefoxWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: '121'
  },
  // OUDS mod: ESR Firefox used inside Orange
  EsrWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: '128'
  },
  // End mod
  chromeWin10Latest: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxWin10Latest: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  iphone12: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '14.0',
    device: 'iPhone 12',
    real_mobile: true
  },
  pixel6: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '12.0',
    device: 'Google Pixel 6',
    real_mobile: true
  }
}

module.exports = {
  browsers
}
