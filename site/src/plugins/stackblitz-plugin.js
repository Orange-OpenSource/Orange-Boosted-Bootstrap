import { getConfig } from '../libs/config.ts'

/**
 * Vite plugin to replace placeholder values in stackblitz.js with actual configuration values
 */
export function stackblitzPlugin() {
  const config = getConfig()

  return {
    name: 'stackblitz-config-replacer',
    transform(code, id) {
      if (id.includes('stackblitz.js')) {
        return code
          .replace(/__CSS_CDN__/g, config.cdn.css)
          .replace(/__JS_BUNDLE_CDN__/g, config.cdn.js_bundle)
          .replace(/__DOCS_VERSION__/g, config.docs_version)
          .replace(/__HELV_NEUE_55_W1G_CDN__/g, config.HelvNeue55_W1G)
          .replace(/__HELV_NEUE_55_W1G_HASH__/g, config.HelvNeue55_W1G_hash)
          .replace(/__HELV_NEUE_75_W1G_CDN__/g, config.HelvNeue75_W1G)
          .replace(/__HELV_NEUE_75_W1G_HASH__/g, config.HelvNeue75_W1G_hash)
          .replace(/__HELVETICA_CDN__/g, config.helvetica)
          .replace(/__HELVETICA_HASH__/g, config.helvetica_hash)
      }

      return code
    }
  }
}
