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
import TermsAndConditions from '@src/ui/components/TermsAndConditions'
import { withSafeDarkView } from './BaseScreen'
import { View } from 'react-native'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import MultiSafeHelper from 'ndaujs/src/helpers/MultiSafeHelper'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import UserStore from 'ndaujs/src/stores/UserStore'
import { CheckBox } from '@src/ui/components'
import WaitSpinner from './WaitSpinner'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'

const l = LoggerHelper.curryLogger('SetupCreateRecovery')

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
        try {
          await MultiSafeHelper.saveUser(
            SetupStore.user,
            SetupStore.encryptionPassword,
            DataFormatHelper.convertRecoveryArrayToString(
              SetupStore.recoveryPhrase
            )
          )
          UserStore.setUser(SetupStore.user)
          l.debug(SetupStore.user)
          this.props.navigation.navigate('AppWalletOverview')
          this.setState({ spinner: false })
        } catch (error) {
          l.error(error)
        }
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
