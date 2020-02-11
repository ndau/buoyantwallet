/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React from 'react'
import I18n from '@src/i18n'
import VerifyConfirmRecovery from '@src/ui/components/VerifyConfirmRecovery'
import { withSafeDarkView } from './BaseScreen'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import RecoveryPhraseHelper from 'ndaujs/src/helpers/RecoveryPhraseHelper'
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
      const user = await RecoveryPhraseHelper.recoverUser(
        SetupStore.recoveryPhrase
      )
      SetupStore.user = user
      this.props.navigation.navigate('SetupPassword')
      this.setState({ spinner: false })
    })
  }

  render () {
    const words = DataFormatHelper.groupArrayIntoRows(
      SetupStore.recoveryPhrase,
      3
    )
    const selected = DataFormatHelper.groupArrayIntoRows(
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
