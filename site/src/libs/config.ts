import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'
import { z } from 'zod'
import { zVersionMajorMinor, zVersionSemver } from './validation'

// The config schema used to validate the config file content and ensure all values required by the site are valid.
const configSchema = z.object({
  algolia: z.object({
    api_key: z.string(),
    app_id: z.string(),
    index_name: z.string()
  }),
  anchors: z.object({
    min: z.number(),
    max: z.number()
  }),
  authors: z.string(),
  baseURL: z.url(),
  blog: z.url(),
  bootstrap: z.url(),
  bootstrap_current_version: z.string(),
  bootstrap_docs_version: z.string(),
  bootstrap_github_org: z.url(),
  brand: z.string(),
  cdn: z.object({
    css: z.url(),
    css_hash: z.string(),
    css_bootstrap: z.url(),
    css_bootstrap_hash: z.string(),
    css_bootstrap_rtl: z.url(),
    css_bootstrap_rtl_hash: z.string(),
    css_rtl: z.url(),
    css_rtl_hash: z.string(),
    js: z.url(),
    js_hash: z.string(),
    js_bundle: z.url(),
    js_bundle_hash: z.string(),
    popper: z.url(),
    popper_esm: z.url(),
    popper_hash: z.string()
  }),
  current_version: zVersionSemver,
  current_ruby_version: zVersionSemver,
  debug_template: z.url(),
  display_brand: z.string(),
  description: z.string(),
  docs_version: zVersionMajorMinor,
  docsDir: z.string(),
  download: z.object({
    dist: z.url(),
    dist_examples: z.url(),
    source: z.url()
  }),
  icons: z.url(),
  icons_develop: z.url(),
  icons_license: z.url(),
  icons_usage: z.url(),
  ouds: z.object({
    web: z.url()
  }),
  repo: z.url(),
  subtitle: z.string(),
  title: z.string(),
  toc: z.object({
    min: z.number(),
    max: z.number()
  }),
  x: z.string()
})

let config: Config | undefined

// A helper to get the config loaded fom the `config.yml` file. If the config does not match the `configSchema`, an
// error is thrown to indicate that the config file is invalid and some action is required.
export function getConfig(): Config {
  if (config) {
    // Returns the config if it has already been loaded.
    return config
  }

  const brand = process.env.BRAND || "orange"

  try {
    // Load the config from the `config.yml` file.
    const rawConfig = fs.existsSync(path.join(process.cwd(), 'config.yml'))
      ? yaml.load(fs.readFileSync(path.join(process.cwd(), 'config.yml'), 'utf8'))
      : yaml.load(fs.readFileSync(path.join(process.cwd(), `packages/${brand}/config.yml`), 'utf8'))

    // Parse the config using the config schema to validate its content and get back a fully typed config object.
    config = configSchema.parse(rawConfig)

    return config
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('The `config.yml` file content is invalid:', error.issues)
    }

    throw new Error('Failed to load configuration from `config.yml`', { cause: error })
  }
}

type Config = z.infer<typeof configSchema>
