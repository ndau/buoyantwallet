import React from 'react'
import I18n from '@src/i18n'
import CreateWalletName from '@src/ui/components/CreateWalletName'
import { withSafeDarkView } from './BaseScreen'
import { KeyboardAvoidingView } from 'react-native'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'

const l = LoggerHelper.curryLogger('SetupWalletName')

class SetupWalletName extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      walletName: ''
    }
  }

  onChangeText = text => {
    this.setState({ walletName: text })
  }

  replaceTempIds = () => {
    const user = SetupStore.user
    if (user) {
      DataFormatHelper.moveTempUserToWalletName(user, this.state.walletName)
    } else {
      l.debug('No user exists, so temp-id replacement is not possible')
    }
  }

  next = () => {
    SetupStore.walletName = this.state.walletName

    this.replaceTempIds()
    this.props.navigation.navigate('SetupTermsAndConditions')
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'android' ? -220 : 50}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <CreateWalletName
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
          onChangeText={this.onChangeText}
          next={this.next}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(SetupWalletName, I18n.t('setup'), true)
