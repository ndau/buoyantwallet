import React from 'react'
import { Text, View, Button } from 'react-native'
import SettingsStore from '../../data/stores/SettingsStore'
import AppConstants from '../../data/constants/AppConstants'
import I18n from 'react-native-i18n'

export default class Dashboard extends React.Component {
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
        <Text>{I18n.t('dashboard')}</Text>
        <Text>{applicationNetwork}</Text>
        <Button
          title={I18n.t('devnet')}
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.DEVNET)
          }
        />
        <Button
          title={I18n.t('testnet')}
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.TESTNET)
          }
        />
        <Button
          title={I18n.t('mainnet')}
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.MAINNET)
          }
        />
      </View>
    )
  }
}
