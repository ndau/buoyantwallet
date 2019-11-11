import React from 'react'
import I18n from '@src/i18n'
import OnboardingType from '@src/ui/components/OnboardingType'
import { withSafeDarkView } from './BaseScreen'

class SetupOnboardingType extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }
  }

  recover = () => {
    this.props.navigation.navigate('SetupGetRecovery')
  }

  newWallet = () => {
    this.props.navigation.navigate('SetupPrepareCreateRecovery')
  }

  render () {
    return (
      <OnboardingType
        {...this.props}
        {...this.state}
        recover={this.recover}
        newWallet={this.newWallet}
      />
    )
  }
}

export default withSafeDarkView(SetupOnboardingType, I18n.t('setup'), true)
