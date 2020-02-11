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
