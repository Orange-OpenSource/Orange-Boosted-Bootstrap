import type { HTMLAttributes } from 'astro/types'
import { getConfig } from '@libs/config'
import { getVersionedDocsPath } from '@libs/path'

export function getVersionedBsCssProps(direction: 'rtl' | undefined, bootstrap_compat_css = true): HTMLAttributes<'link'> {
  let bsCssLinkHref = '/dist/css/ouds-web' + (bootstrap_compat_css ? '-bootstrap' : '')

  if (direction === 'rtl') {
    bsCssLinkHref = `${bsCssLinkHref}.rtl`
  }

  if (import.meta.env.PROD) {
    bsCssLinkHref = `${bsCssLinkHref}.min`
  }

  bsCssLinkHref = `${bsCssLinkHref}.css`

  const bsCssLinkProps: HTMLAttributes<'link'> = {
    href: getVersionedDocsPath(bsCssLinkHref),
    rel: 'stylesheet'
  }

  if (import.meta.env.PROD) {
    bsCssLinkProps.integrity = direction === 'rtl' ? getConfig().cdn.css_bootstrap_rtl_hash : getConfig().cdn.css_bootstrap_hash
  }

  return bsCssLinkProps
}

export function getVersionedBsJsProps() {
  let bsJsScriptSrc = '/dist/js/ouds-web.bundle'

  if (import.meta.env.PROD) {
    bsJsScriptSrc = `${bsJsScriptSrc}.min`
  }

  bsJsScriptSrc = `${bsJsScriptSrc}.js`

  const bsJsLinkProps: HTMLAttributes<'script'> = {
    src: getVersionedDocsPath(bsJsScriptSrc)
  }

  if (import.meta.env.PROD) {
    bsJsLinkProps.integrity = getConfig().cdn.js_bundle_hash
  }

  return bsJsLinkProps
}
