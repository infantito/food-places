import { createBreakpoint } from 'styled-components-breakpoint'

const theme = {
  colors: {
    background: '#ffffff',
    black: '#000000',
    dark: '#2a2a2a',
    gray: '#878e91',
    green: '#34b379',
    highlight: '#43e895',
    white: '#fff',
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  fonts: {
    regular: 'Avenir Next Regular',
    bold: 'Avenir Next Demi Bold',
  },
  sizes: {
    highest: 24,
    higher: 20,
    header: 17,
    standard: 16,
    medium: 12,
    small: 10,
  },
  spacing: (...args: number[]): string => {
    return args.map(n => `${6 * n}px`).join(' ')
  },
}

const breakpoint = createBreakpoint(theme.breakpoints)

export { theme as default, breakpoint }
