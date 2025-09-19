import { exporter } from 'sass-export'
import { getConfig } from './config'

const options = {
  inputFiles: [`packages/${getConfig().brand}/scss/tokens/_raw.scss`, `packages/${getConfig().brand}/scss/tokens/_semantic.scss`/*, `scss/_variables.scss`*/],
  includePaths: []
}

export const asArray = exporter(options).getArray()
