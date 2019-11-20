import React from 'react'
import I18n from '@src/i18n'
import TermsAndConditions from '@src/ui/components/TermsAndConditions'
import { withSafeDarkView } from './BaseScreen'
import { View } from 'react-native'
import { SetupStore, MultiSafeHelper, DataFormatHelper, UserStore } from 'ndaujs'
import { CheckBox } from '@src/ui/components'
import WaitSpinner from './WaitSpinner'

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
        UserStore.user = SetupStore.user
        this.props.navigation.navigate('Overview')
        this.setState({ spinner: false })
      })
    }
  }

  render () {
    return (
      <View>
        <WaitSpinner
          label={I18n.t('talking-to-blockchain')}
          spinner={this.state.spinner}
        />
        <TermsAndConditions
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
          next={this.next}
          disabled={!this.state.iAgree}
          checkBox={
            <CheckBox
              onValueChange={value => this.setState({ iAgree: value })}
              checked={this.state.iAgree}
              label={I18n.t('i-agree')}
            />
          }
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupTermsAndConditions, I18n.t('setup'), true)
