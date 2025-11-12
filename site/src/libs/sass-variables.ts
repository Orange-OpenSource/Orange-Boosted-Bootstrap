import { exporter } from 'sass-export'
import { getConfig } from './config'

const options = {
  inputFiles: [`packages/${getConfig().brand}/scss/tokens/_raw.scss`, `packages/${getConfig().brand}/scss/tokens/_semantic.scss`],
  includePaths: []
}

export const allTokens = exporter(options).getArray()

const optionsMaps = {
  inputFiles: [`scss/_maps.scss`],
  includePaths: []
}

export const scssMaps = exporter(optionsMaps).getArray()

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
