/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import { StyleSheet, Platform } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import AppConstants from '@src/data/constants/AppConstants'

export default (styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0A1724'
  },
  drawerExit: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('3%')
  },
  drawerEntry: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('2.5%')
  },
  drawerVersionEntry: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: wp('4%'),
    marginBottom: hp('2.5%')
  },
  drawerText: {
    color: AppConstants.TEXT_COLOR,
    fontFamily: 'Open Sans',
    fontSize: 15,
    marginLeft: wp('2%'),
    paddingTop: 0
  },
  drawerBorder: {
    borderBottomColor: '#455B82',
    borderBottomWidth: 1,
    marginBottom: hp('3%'),
    ...Platform.select({
      android: {
        width: '68%'
      }
    })
  }
}))
