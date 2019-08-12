import React from 'react'

const initialValue = {
  currentTheme: 'Eva Light',
  toggleTheme: theme => {}
}

export const ThemeContext = React.createContext(initialValue)
