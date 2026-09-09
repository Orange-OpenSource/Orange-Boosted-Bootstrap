import { replaceInFile } from 'replace-in-file'
import { getReplacements } from './replacements/index.mjs'

export const migrate = async options => {
  const defaultOptions = {
    ...getReplacements(options.source)
  }
  return replaceInFile({ ...defaultOptions, ...options })
}
