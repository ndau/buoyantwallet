/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '@src/data/constants/AppConstants'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'

const l = LoggerHelper.curryLogger('NavigationHelper')

// Use this filter to prevent storage of the last screen used. This is
// particularly useful for the More button, but perhaps there may be more
// in the future
const screenStorageFilter = ['More']

/**
 * Use this for the screens when you would like to
 * have the routeName captured when focus is set to it.
 *
 * @param {React Navigation Object} navigation
 */
const setupNavigationFocusListener = navigation => {
  navigation.addListener('willFocus', async payload => {
    try {
      if (
        !screenStorageFilter.find(element => {
          return element === payload.state.routeName
        })
      ) {
        await AsyncStorage.setItem(
          AppConstants.LAST_SCREEN_FOCUSED,
          payload.state.routeName
        )
      }
    } catch (err) {
      l.error(err)
    }
  })
}

export default {
  setupNavigationFocusListener
}
