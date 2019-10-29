import React from 'react'
import I18n from '@src/i18n'
import VerifyRecovery from '@src/ui/components/VerifyRecovery'
import { withSafeDarkView } from './BaseScreen'
import { DataFormatHelper, SetupStore } from 'ndaujs'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'

class SetupVerifyRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }
  }

  next = () => {
    this.setState({ spinner: true }, async () => {
      const user = await RecoveryPhraseHelper.default.recoverUser(
        this.recoveryPhrase
      )
      SetupStore.user = user
      this.props.navigation.navigate('SetupPassword')
      this.setState({ spinner: false })
    })
  }

  render () {
    const words = DataFormatHelper.default.groupArrayIntoRows(
      SetupStore.recoveryPhrase,
      3
    )

    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />
        <VerifyRecovery
          {...this.props}
          {...this.state}
          next={this.next}
          words={words}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupVerifyRecovery, I18n.t('setup'), true)
