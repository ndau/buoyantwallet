import React from 'react'
import { Text, View, Button } from 'react-native'
import SettingsStore from '../../data/stores/SettingsStore'
import AppConstants from '../../data/constants/AppConstants'
import I18n from 'react-native-i18n'

export default class Settings extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      applicationNetwork: SettingsStore.getApplicationNetwork()
    }

    SettingsStore.addListener(this.updateApplicationNetwork)
  }

  updateApplicationNetwork = applicationNetwork => {
    this.setState({ applicationNetwork: applicationNetwork })
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
