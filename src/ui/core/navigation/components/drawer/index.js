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
import { View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import AppConstants from '@src/data/constants/AppConstants'
import { faTimes, faBars } from '@fortawesome/pro-light-svg-icons'

export function DrawerContainer (props) {
  return <View style={styles.drawerContainer}>{props.children}</View>
}

export function DrawerExit (props) {
  return (
    <View style={styles.drawerExit}>
      <TouchableOpacity {...props}>
        <FontAwesomeIcon
          size={36}
          icon={faTimes}
          color='#ffffff'
          type='light'
        />
      </TouchableOpacity>
    </View>
  )
}

export function DrawerBorder (props) {
  return <View style={styles.drawerBorder} />
}

export function DrawerEntryItem (props) {
  return (
    <View style={styles.drawerEntry}>
      <TouchableOpacity {...props}>
        <FontAwesomeIcon
          size={22}
          icon={props.fontAwesomeIcon}
          color={AppConstants.DRAWER_ICON_COLOR}
        />
      </TouchableOpacity>
      <TouchableOpacity {...props}>
        <Text style={styles.drawerText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export function DrawerEntryVersionItem (props) {
  return (
    <View style={styles.drawerVersionEntry}>
      <TouchableOpacity {...props}>
        <Text style={styles.drawerText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}
