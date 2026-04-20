import { getBreakpointsReplacement } from './common.mjs'

const breakpoints = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', '2xl', '3xl']

export const oudsReplacements = [
  // Breakpoints
  ...breakpoints.map(bp => [...getBreakpointsReplacement(bp)]),
  ...breakpoints.map(bp => [`offcanvas-${bp}`, `${bp}:offcanvas`]),
  ...breakpoints.map(bp => [`col-${bp}`, `${bp}:col`]),
  ...breakpoints.map(bp => [`table-responsive-${bp}`, `${bp}:table-responsive`]),
  ...breakpoints.map(bp => [`navbar-expand-${bp}`, `${bp}:navbar-expand`]),
  ...breakpoints.map(bp => [`list-group-horizontal-${bp}`, `${bp}:list-group-horizontal`])
]
