import React from 'react'
import { YellowBox } from 'react-native'
import AppNavigation from '@src/core/navigation/AppNavigation'
import SettingsStore from '@src/data/stores/SettingsStore'

// Some libraries haven't removed componentWillMount yet
YellowBox.ignoreWarnings(['Warning: componentWillMount is deprecated'])

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = async () => {
    await SettingsStore.initialize()
  }

  render () {
    return <AppNavigation />
  }
}
