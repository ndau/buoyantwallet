import { dark, light } from '@eva-design/eva'
import { default as appTheme } from './appTheme.json'

export const themes = {
  'Eva Light': light,
  'Eva Dark': dark,
  'App Theme': appTheme
}

export { ThemeContext } from './ThemeContext'

export { ThemeStore } from './ThemeStore'
