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
import Welcome from '@src/ui/components/Welcome'
import { ImageBackground, StatusBar, SafeAreaView } from 'react-native'
import AppConstants from '@src/data/constants/AppConstants'

class SetupWelcome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  next = () => {
    this.props.navigation.navigate('SetupOnboardingType')
  }

  render () {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: AppConstants.BACKGROUND_COLOR }}
      >
        <ImageBackground
          source={require('img/New-dashboard.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <StatusBar barStyle='light-content' />
          <Welcome
            {...this.props}
            {...this.state}
            topPanelHeight={this.topPanelHeight}
            next={this.next}
          />
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

export default SetupWelcome
