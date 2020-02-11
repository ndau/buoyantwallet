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
