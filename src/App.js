import React from 'react'
import { YellowBox, NativeModules } from 'react-native'
import AppNavigation from '@src/core/navigation/AppNavigation'
import SettingsStore from '@src/data/stores/SettingsStore'
import { useScreens } from 'react-native-screens'
import AsyncStorage from '@react-native-community/async-storage'
import { GeneralStore, CryptoStore } from 'ndaujs'
import { generateSecureRandom } from 'react-native-securerandom'

// Some libraries haven't removed componentWillMount yet
YellowBox.ignoreWarnings(['Warning: componentWillMount'])

useScreens()

global.Keyaddr = NativeModules.KeyAddressManager
GeneralStore.default.setStore(AsyncStorage)
CryptoStore.default.setStore(generateSecureRandom)

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
