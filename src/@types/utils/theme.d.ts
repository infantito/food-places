import { DefaultTheme } from 'styled-components'
import theme from 'utils/theme'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
