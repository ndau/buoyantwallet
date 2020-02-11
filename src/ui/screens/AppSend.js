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
import { withSafeDarkView } from './BaseScreen'
import Send from '@src/ui/components/Send'
import { ScrollView } from 'react-native-gesture-handler'

class AppSend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='always'
      >
        <Send {...this.props} {...this.state} />
      </ScrollView>
    )
  }
}

export default withSafeDarkView(AppSend, I18n.t('send'), true)
