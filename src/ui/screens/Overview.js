import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import AppConstants from '@src/data/constants/AppConstants'
import VersionNumber from 'react-native-version-number'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import { View, Text, Button } from 'react-native'
import { UserStore } from 'ndaujs'

class Overview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      applicationNetwork: SettingsStore.getApplicationNetwork(),
      testBytes: 'nothing yet...'
    }

    SettingsStore.addListener(this.updateSettings)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  updateSettings = settings => {
    this.setState({ applicationNetwork: settings.applicationNetwork })
  }

  componentDidMount = async () => {
    const recoveryPhraseAsBytes = await Keyaddr.wordsToBytes(
      'en',
      'crouch loan escape idea drop blush silver history gentle pave office ginger'
    )
    this.setState({ testBytes: recoveryPhraseAsBytes })
  }

  render () {
    const { applicationNetwork, testBytes } = this.state

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around'
        }}
      >
        <Text>
          {I18n.t('overview')} {`v${VersionNumber.appVersion}`}
        </Text>
        <Text>{UserStore.user.userId} has been created successfully!</Text>
        <Text>{applicationNetwork}</Text>
        <Button
          title={I18n.t('devnet')}
          onPress={() => {
            SettingsStore.setApplicationNetwork(AppConstants.DEVNET)
          }}
        />
        <Button
          title={I18n.t('testnet')}
          onPress={() => {
            SettingsStore.setApplicationNetwork(AppConstants.TESTNET)
          }}
        />
        <Button
          title={I18n.t('mainnet')}
          onPress={() => {
            SettingsStore.setApplicationNetwork(AppConstants.MAINNET)
          }}
        />
      </View>
    )
  }
}

export default withSafeDarkView(Overview, I18n.t('overview'), true, true)
