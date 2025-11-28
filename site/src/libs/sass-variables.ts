import { exporter } from 'sass-export'
import { getConfig } from './config'

const options = {
  inputFiles: [`packages/${getConfig().brand}/scss/tokens/_raw.scss`, `packages/${getConfig().brand}/scss/tokens/_semantic.scss`],
  includePaths: []
}

export const allTokens = exporter(options).getArray()

/**
 * This function returns the current theme depending on the parameter passed (light, dark, root, root-inverted). You need to use a name containing 'modes-on' and it should exist in the _semantic.scss file.
 * @param regex
 * @returns the current theme (light, dark, root, root-inverted) for the chosen background
 */
export const getMode = (regex: string) => {
  const modes = allTokens.filter((token: any) => token.name.match(regex)).map((token: any) => token.compiledValue)
  const theme = modes[0].includes('dark')
    ? modes[1].includes('light')
      ? 'root'
      : 'dark'
    : modes[1].includes('dark')
      ? 'root-inverted'
      : 'light'
  return theme
}

/**
 * This function returns true if we have the specified token in allTokens list.
 * @param searchToken
 * @returns boolean
 */
export const hasToken = (searchToken: string) => {
  return allTokens.some((token: any) => token.name === searchToken);
}
