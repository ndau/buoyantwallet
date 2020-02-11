/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React from 'react'
import { Text, View, Button } from 'react-native'
import SettingsStore from '@src/data/stores/SettingsStore'
import AppConstants from '@src/data/constants/AppConstants'
import I18n from '../../i18n'
import VersionNumber from 'react-native-version-number'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import PropTypes from 'prop-types'

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
        <Text>
          {I18n.t('settings')} {`v${VersionNumber.appVersion}`}
        </Text>
        <Text>{applicationNetwork}</Text>
        <Button
          title='DEVNET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.DEVNET)}
        />
        <Button
          title='TESTNET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.TESTNET)}
        />
        <Button
          title='MAINET'
          onPress={() =>
            SettingsStore.setApplicationNetwork(AppConstants.MAINNET)}
        />
      </View>
    )
  }
}

Settings.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
}
