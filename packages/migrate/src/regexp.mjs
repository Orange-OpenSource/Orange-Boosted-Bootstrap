export const getGapReplacement = (value, semantic) => {
  return [`(g[xy]?(-[a-z23]{0,3})?-n?)${value}`, `$1${semantic}`]
}

export const getSpacingReplacement = (value, semantic) => {
  return [`(([mp][tblrsexy]?|((row|column)-)?gap)(-[a-z23]{0,3})?-n?)${value}`, `$1${semantic}`]
}

export const getBreakpointsReplacement = value => {
  return [`([\\w-]*)-${value}-([\\w-]*)`, (...args) => `${value}:${args[1]}-${args[2]}`]
}
