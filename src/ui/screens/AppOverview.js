import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import AppConstants from '@src/data/constants/AppConstants'
import VersionNumber from 'react-native-version-number'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import { View, Text, Button } from 'react-native'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import UserStore from 'ndaujs/src/stores/UserStore'
import Overview from '@src/ui/components/Overview'

const l = LoggerHelper.curryLogger('AppOverview')

class AppOverview extends React.Component {
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
    return <Overview {...this.props} {...this.state} />
  }
}

export default withSafeDarkView(AppOverview, I18n.t('overview'), true, true)
