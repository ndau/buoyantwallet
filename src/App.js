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
import { YellowBox, NativeModules, View } from 'react-native'
import AppNavigation from '@src/core/navigation/AppNavigation'
import SettingsStore from '@src/data/stores/SettingsStore'
import { useScreens } from 'react-native-screens'
import AsyncStorage from '@react-native-community/async-storage'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import CryptoStore from 'ndaujs/src/stores/CryptoStore'
import GeneralStore from 'ndaujs/src/stores/GeneralStore'
import { generateSecureRandom } from 'react-native-securerandom'
import FlashMessage from 'react-native-flash-message'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faInfoCircle } from '@fortawesome/pro-light-svg-icons'

// Some libraries haven't removed componentWillMount yet
YellowBox.ignoreWarnings(['Warning: componentWillMount'])

useScreens()

global.Keyaddr = NativeModules.KeyAddressManager
GeneralStore.setStore(AsyncStorage)
CryptoStore.setStore(generateSecureRandom)

LoggerHelper.setLevel(LoggerHelper.LEVEL_DEBUG)
LoggerHelper.setLogger(console)

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount = async () => {
    await SettingsStore.initialize()
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <AppNavigation />
        <FlashMessage
          position='top'
          duration={10000}
          icon='danger'
          style={{
            // marginTop: '14.5%',
            backgroundColor: '#FFE3DC'
          }}
          titleStyle={{
            color: '#F05123',
            fontSize: 14,
            fontFamily: 'opensans-regular',
            paddingLeft: '1%',
            paddingRight: '5%'
          }}
          renderFlashMessageIcon={() => {
            return (
              <View>
                <FontAwesomeIcon
                  style={{ padding: 0 }}
                  size={24}
                  icon={faInfoCircle}
                  color='#F05123'
                />
              </View>
            )
          }}
        />
      </View>
    )
  }
}
