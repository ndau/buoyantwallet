import React from 'react'
import I18n from '@src/i18n'
import TermsAndConditions from '@src/ui/components/TermsAndConditions'
import { withSafeDarkView } from './BaseScreen'
import { TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { SetupStore, MultiSafeHelper, DataFormatHelper } from 'ndaujs'
import { CheckBox } from '@src/ui/components'
import WaitingForBlockchainSpinner from './WaitSpinner'

class SetupTermsAndConditions extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      iAgree: false,
      spinner: false
    }
  }

  next = () => {
    if (this.state.iAgree) {
      this.setState({ spinner: true }, async () => {
        await MultiSafeHelper.default.saveUser(
          SetupStore.user,
          SetupStore.encryptionPassword,
          DataFormatHelper.default.convertRecoveryArrayToString(
            SetupStore.recoveryPhrase
          )
        )
        this.props.navigation.navigate('Overview')
        this.setState({ spinner: false })
      })
    }
  }

  render () {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <WaitingForBlockchainSpinner spinner={this.state.spinner} />
        <TermsAndConditions
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
          next={this.next}
          checkBox={
            <CheckBox
              onValueChange={value => this.setState({ iAgree: value })}
              checked={this.state.iAgree}
              label={I18n.t('i-agree')}
            />
          }
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(
  SetupTermsAndConditions,
  I18n.t('setup'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
