import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens'

export const {
  globalCss,
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    lineHeights,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    space,
  },
})
