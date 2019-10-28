import React from 'react'
import I18n from '@src/i18n'
import VerifyRecovery from '@src/ui/components/VerifyRecovery'
import { withSafeDarkView } from './BaseScreen'

class SetupVerifyRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }
  }

  newWallet = () => {
    this.props.navigation.navigate('SetupPassword')
  }

  render () {
    return (
      <VerifyRecovery
        {...this.props}
        {...this.state}
        newWallet={this.newWallet}
      />
    )
  }
}

export default withSafeDarkView(SetupVerifyRecovery, I18n.t('setup'), true)
