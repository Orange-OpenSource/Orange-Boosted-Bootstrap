/* eslint no-undef: 0 */
/* eslint unicorn/prefer-date-now: 0 */
tarteaucitron.services.googletagmanager = {
  key: 'googletagmanager',
  type: 'api',
  name: 'Google Tag Manager',
  uri: 'https://policies.google.com/privacy',
  needConsent: true,
  cookies: ['_ga', '_gat', '__utma', '__utmb', '__utmc', '__utmt', '__utmz', '__gads', '_drt_', 'FLC', 'exchange_uid', 'id', 'fc', 'rrs', 'rds', 'rv', 'uid', 'UIDR', 'UID', 'clid', 'ipinfo', 'acs'],
  js() {
    'use strict'
    if (tarteaucitron.user.googletagmanagerId === undefined) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    })
    tarteaucitron.addScript(`https://www.googletagmanager.com/gtm.js?id=${tarteaucitron.user.googletagmanagerId}`)
  }
}

tarteaucitron.services.mastermedia = {
  key: 'mastermedia',
  type: 'video',
  name: 'Mastermedia Orange',
  uri: '',
  needConsent: true,
  cookies: ['_ga_CM1FZT549X', 'viewer_uid', '_ga'],
  js() {
    'use strict'
    tarteaucitron.fallback(['mastermedia-player'], x => {
      const frameTitle = tarteaucitron.getElemAttr(x, 'title') || 'Mastermedia iframe'
      const videoId = tarteaucitron.getElemAttr(x, 'videoid')
      const classlist = tarteaucitron.getElemAttr(x, 'classlist')
      return `<iframe class="${classlist}" src="https://mastermedia.orange.com/${videoId}" title="${frameTitle}" allowfullscreen></iframe>`
    })
  }
}
