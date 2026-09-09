const permittedFlags = new Set(['ob1', 'boosted', 'ouds'])

export const getFromFlag = args => {
  const fromFlagMatch = args.join(' ').match(/--from=(\w+)/)
  if (!fromFlagMatch) {
    return 'ouds'
  }

  return permittedFlags.has(fromFlagMatch[1]) ? fromFlagMatch[1] : 'ouds'
}
