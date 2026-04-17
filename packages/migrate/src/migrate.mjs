import { replaceInFile } from 'replace-in-file'
import { getReplacements } from './replacements.mjs'

export const migrate = async options => {
  const defaultOptions = {
    ...getReplacements(options.ob1)
  }
  return replaceInFile({ ...defaultOptions, ...options })
}
