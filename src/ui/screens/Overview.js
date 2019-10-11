import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import AppConstants from '@src/data/constants/AppConstants'
import VersionNumber from 'react-native-version-number'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import { TouchableWithoutFeedback, View, Text, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

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
    const recoveryPhraseAsBytes = await NativeModules.KeyAddressManager.wordsToBytes(
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
        <Text>{testBytes}</Text>
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

export default withSafeDarkView(
  Overview,
  I18n.t('overview'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>,
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
