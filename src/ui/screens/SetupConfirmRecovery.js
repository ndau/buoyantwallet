import React from 'react'
import I18n from '@src/i18n'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import ConfirmRecoveryPhrase from '@src/ui/components/ConfirmRecoveryPhrase'
import { withSafeDarkView } from './BaseScreen'
import { View } from 'react-native'
import RecoveryPhraseHelper from 'ndaujs/src/helpers/RecoveryPhraseHelper'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import WaitSpinner from './WaitSpinner'

class SetupConfirmRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  confirmRecovery = async () => {
    this.setState({ spinner: true }, async () => {
      const user = await RecoveryPhraseHelper.recoverUser(
        SetupStore.recoveryPhrase
      )
      SetupStore.user = user
      this.props.navigation.navigate('SetupPassword')
      this.setState({ spinner: false })
    })
  }

  render () {
    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />

        <ConfirmRecoveryPhrase
          {...this.props}
          {...this.state}
          recoveryPhrase={SetupStore.recoveryPhrase}
          confirmRecovery={this.confirmRecovery}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupConfirmRecovery, I18n.t('setup'), true)
