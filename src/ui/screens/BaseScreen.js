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
import { SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native'
import AppConstants from '@src/data/constants/AppConstants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

export const withSafeDarkView = (
  WrappedComponent,
  title,
  headerLeft,
  headerRight,
  goBackToAuth,
  goBackToOverview
) => {
  return class extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const goBack = () => {
        if (goBackToAuth) {
          navigation.navigate('AppAuthentication')
        } else if (goBackToOverview) {
          navigation.navigate('AppOverview')
        } else {
          navigation.goBack()
        }
      }
      return {
        title,
        headerStyle: {
          backgroundColor: AppConstants.BACKGROUND_COLOR
        },
        headerTitleStyle: {
          color: '#8CC74F',
          fontFamily: 'opensans-bold',
          fontWeight: 'bold',
          flexGrow: 1,
          textAlign: 'center',
          alignSelf: 'center'
        },
        headerLeft: headerLeft ? (
          <TouchableOpacity onPress={goBack}>
            <View style={{ paddingLeft: 6 }}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size={30}
                style={{ color: 'white' }}
              />
            </View>
          </TouchableOpacity>
        ) : null,
        headerRight: headerRight ? (
          <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
        ) : null
      }
    }

    render () {
      return (
        <SafeAreaView
          style={{ flex: 1, backgroundColor: AppConstants.BACKGROUND_COLOR }}
        >
          <StatusBar barStyle='light-content' />

          <WrappedComponent {...this.props} />
        </SafeAreaView>
      )
    }
  }
}
