import React from 'react'
import { Text, View, Button } from 'react-native'
import SettingsStore from '@src/data/stores/SettingsStore'
import AppConstants from '@src/data/constants/AppConstants'
import I18n from 'react-native-i18n'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'

export default class Settings extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      applicationNetwork: SettingsStore.getApplicationNetwork()
    }

    SettingsStore.addListener(this.updateSettings)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  updateSettings = settings => {
    this.setState({ applicationNetwork: settings.applicationNetwork })
  }

  render () {
    const { applicationNetwork } = this.state
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{I18n.t('settings')}</Text>
        <Text>{applicationNetwork}</Text>
        <Button
          title='DEVNET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.DEVNET)
          }
        />
        <Button
          title='TESTNET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.TESTNET)
          }
        />
        <Button
          title='MAINET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.MAINNET)
          }
        />
      </View>
    )
  }
}
