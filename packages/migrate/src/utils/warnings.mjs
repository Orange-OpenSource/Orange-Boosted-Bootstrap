const warnings = []

// eslint-disable-next-line unicorn/no-object-as-default-parameter
export const warnForClass = (className, options = {
  remove: false, message: '', replace: undefined, link: ''
}) => {
  return [
    className,
    (...args) => {
      const filename = args.at(-1)
      if (options.message) {
        warnings.push(`${options.message.replace('{class}', args[0]).replace('{file}', filename)}${options.link ? ` See: ${options.link}` : ''}`)
      } else if (options.remove) {
        warnings.push(`${args[0]} class has been removed in ${filename}.${options.link ? ` See: ${options.link}` : ''}`)
      } else {
        warnings.push(`${args[0]} class is deprecated in ${filename}.${options.link ? ` See: ${options.link}` : ''}`)
      }

      return options.remove ? '' : (options.replace === undefined ? args[0] : options.replace)
    }
  ]
}

export const getReplacementsWarnings = () => [...new Set(warnings)]

export const clearWarnings = () => {
  warnings.length = 0
}
