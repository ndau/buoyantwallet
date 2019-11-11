import React from 'react'
import I18n from '@src/i18n'
import PrepareCreateRecovery from '@src/ui/components/PrepareCreateRecovery'
import { withSafeDarkView } from './BaseScreen'

class SetupPrepareCreateRecovery extends React.Component {
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
      <PrepareCreateRecovery
        {...this.props}
        {...this.state}
        newWallet={this.newWallet}
      />
    )
  }
}

export default withSafeDarkView(
  SetupPrepareCreateRecovery,
  I18n.t('setup'),
  true
)
