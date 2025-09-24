import { exporter } from 'sass-export'
import { getConfig } from './config'

const options = {
  inputFiles: [`packages/${getConfig().brand}/scss/tokens/_raw.scss`, `packages/${getConfig().brand}/scss/tokens/_semantic.scss`/*, `scss/_variables.scss`*/],
  includePaths: []
}

export const asArray = exporter(options).getArray()

export const getMode = (regex: string) => {
  const modes = asArray.filter((token: any) => token.name.match(regex)).map((token: any) => token.compiledValue)
  const theme = modes[0].includes('dark')
    ? modes[1].includes('light')
      ? 'root'
      : 'dark'
    : modes[1].includes('dark')
      ? 'root-inverted'
      : 'light'
  return theme
}
