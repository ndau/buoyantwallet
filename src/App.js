import React from 'react'
import { mapping } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import { DynamicStatusBar } from './ui/components/common'
import { Router } from './ui/core/navigation/Routes'
import { ThemeContext, ThemeStore, themes } from '@src/core/themes'
import SettingsStore from './data/stores/SettingsStore'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      theme: 'Eva Dark'
    }
  }

  componentDidMount = async () => {
    await SettingsStore.initialize()
  }

  onTransitionTrackError = error => {
    console.warn('Analytics error: ', error.message)
  }

  onSwitchTheme = theme => {
    ThemeStore.setTheme(theme).then(() => {
      this.setState({ theme })
    })
  }

  render () {
    const contextValue = {
      currentTheme: this.state.theme,
      toggleTheme: this.onSwitchTheme
    }

    return (
      <ThemeContext.Provider value={contextValue}>
        <ApplicationProvider mapping={mapping} theme={themes[this.state.theme]}>
          <DynamicStatusBar currentTheme={this.state.theme} />
          <Router />
        </ApplicationProvider>
      </ThemeContext.Provider>
    )
  }
}
