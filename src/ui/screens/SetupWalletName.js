import React from 'react'
import I18n from '@src/i18n'
import CreateWalletName from '@src/ui/components/CreateWalletName'
import { withSafeDarkView } from './BaseScreen'
import { TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { SetupStore } from 'ndaujs'

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

  next = () => {
    SetupStore.walletName = this.state.walletName
    this.props.navigation.navigate('SetupTermsAndConditions')
  }

  render () {
    return (
      <KeyboardAvoidingView
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

export default withSafeDarkView(
  SetupWalletName,
  I18n.t('setup'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
