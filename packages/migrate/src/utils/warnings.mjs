const warnings = []

// eslint-disable-next-line unicorn/no-object-as-default-parameter
export const warnForClass = (className, options = { remove: false, message: '', replace: undefined }) => {
  return [
    className,
    (...args) => {
      const filename = args.at(-1)
      if (options.message) {
        warnings.push(options.message.replace('{class}', args[0]).replace('{file}', filename))
      } else if (options.remove) {
        warnings.push(`${args[0]} class has been removed in ${filename}`)
      } else {
        warnings.push(`${args[0]} class is deprecated in ${filename}`)
      }

      return options.remove ? '' : (options.replace === undefined ? args[0] : options.replace)
    }
  ]
}

export const getReplacementsWarnings = () => [...new Set(warnings)]

export const clearWarnings = () => {
  warnings.length = 0
}
