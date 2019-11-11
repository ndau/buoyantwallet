import React from 'react'
import I18n from '@src/i18n'
import VerifyConfirmRecovery from '@src/ui/components/VerifyConfirmRecovery'
import { withSafeDarkView } from './BaseScreen'
import { DataFormatHelper, SetupStore, RecoveryPhraseHelper } from 'ndaujs'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'

class SetupVerifyConfirmRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false,
      selectedItems: []
    }
  }

  handleWordClick = index => {}

  next = () => {
    this.setState({ spinner: true }, async () => {
      const user = await RecoveryPhraseHelper.default.recoverUser(
        SetupStore.recoveryPhrase
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
    const selected = DataFormatHelper.default.groupArrayIntoRows(
      this.state.selectedItems,
      3
    )

    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />
        <VerifyConfirmRecovery
          {...this.props}
          {...this.state}
          next={this.next}
          words={words}
          selectedItems={selected}
          handleWordClick={this.handleWordClick}
        />
      </View>
    )
  }
}

export default withSafeDarkView(
  SetupVerifyConfirmRecovery,
  I18n.t('setup'),
  true
)
