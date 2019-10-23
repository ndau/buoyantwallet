import React from 'react'
import I18n from '@src/i18n'
import CreateRecovery from '@src/ui/components/CreateRecovery'
import { withSafeDarkView } from './BaseScreen'

class SetupCreateRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }
  }

  newWallet = () => {
    this.props.navigation.navigate('SetupCreateRecovery')
  }

  render () {
    return (
      <CreateRecovery
        {...this.props}
        {...this.state}
        newWallet={this.newWallet}
      />
    )
  }
}

export default withSafeDarkView(SetupCreateRecovery, I18n.t('setup'), true)
