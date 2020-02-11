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
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import ConfirmRecoveryPhrase from '@src/ui/components/ConfirmRecoveryPhrase'
import { withSafeDarkView } from './BaseScreen'
import { View } from 'react-native'
import RecoveryPhraseHelper from 'ndaujs/src/helpers/RecoveryPhraseHelper'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import WaitSpinner from './WaitSpinner'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'

class SetupConfirmRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false
    }

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  confirmRecovery = async () => {
    this.setState({ spinner: true }, async () => {
      const user = await RecoveryPhraseHelper.recoverUser(
        DataFormatHelper.convertRecoveryArrayToString(SetupStore.recoveryPhrase)
      )
      SetupStore.user = user
      this.props.navigation.navigate('SetupPassword')
      this.setState({ spinner: false })
    })
  }

  render () {
    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />

        <ConfirmRecoveryPhrase
          {...this.props}
          {...this.state}
          recoveryPhrase={SetupStore.recoveryPhrase}
          confirmRecovery={this.confirmRecovery}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupConfirmRecovery, I18n.t('setup'), true)
