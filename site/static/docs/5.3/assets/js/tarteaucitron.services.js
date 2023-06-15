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

tarteaucitron.services.youtube = {
  key: 'youtube',
  type: 'video',
  name: 'YouTube',
  uri: 'https://policies.google.com/privacy',
  needConsent: true,
  cookies: ['VISITOR_INFO1_LIVE', 'YSC', 'PREF', 'GEUP'],
  js() {
    'use strict'
    tarteaucitron.fallback(['youtube_player'], x => {
      const frameTitle = tarteaucitron.fixSelfXSS(tarteaucitron.getElemAttr(x, 'title') || 'Youtube iframe')
      const videoId = tarteaucitron.getElemAttr(x, 'videoID')
      let srcdoc = tarteaucitron.getElemAttr(x, 'srcdoc')
      let loading = tarteaucitron.getElemAttr(x, 'loading')
      const videoWidth = tarteaucitron.getElemAttr(x, 'width')
      let frameWidth = 'width='
      const videoHeight = tarteaucitron.getElemAttr(x, 'height')
      let frameHeight = 'height='
      const allowfullscreen = tarteaucitron.getElemAttr(x, 'allowfullscreen')
      const attrs = ['theme', 'relates', 'controls', 'showinfo', 'autoplay', 'mute', 'start', 'end', 'loop', 'enablejsapi']
      let params = attrs.filter(a => {
        return tarteaucitron.getElemAttr(x, a) !== null
      }).map(a => {
        return `${a === 'relates' ? 'rel' : a}=${tarteaucitron.getElemAttr(x, a)}`
      }).join('&')

      if (tarteaucitron.getElemAttr(x, 'loop') === 1) {
        params = `${params}&playlist=${videoId}`
      }

      if (videoId === undefined) {
        return ''
      }

      frameWidth += (videoWidth === undefined) ? '"" ' : `"${videoWidth}" `
      frameHeight += (videoHeight === undefined) ? '"" ' : `"${videoHeight}" `

      srcdoc = (srcdoc !== undefined && srcdoc !== null && srcdoc !== '') ? `srcdoc="${srcdoc}" ` : ''

      loading = loading !== undefined && loading !== null && loading !== '' ? 'loading ' : ''

      // eslint-disable-next-line eqeqeq
      const videoFrame = `<iframe title="${frameTitle}" type="text/html" ${frameWidth}${frameHeight} src="//www.youtube-nocookie.com/embed/${videoId}?${params}"${allowfullscreen == '0' ? '' : ' webkitallowfullscreen mozallowfullscreen allowfullscreen'} ${srcdoc} ${loading}></iframe>`
      return videoFrame
    })
  }
}
