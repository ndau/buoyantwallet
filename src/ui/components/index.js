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
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/pro-light-svg-icons'

/**
 * This is a homegrown button as opposed to using react native components.
 * Note the props that are passed in and deconstructed. This is how
 * we can control this React Component.
 *
 * @param {Object} props
 */
export function CheckBox (props) {
  const { disabled, checkComponent, checked, onValueChange } = props

  const TEXT_COLOR = '#000000'
  const SQUARE_BUTTON_COLOR = '#f99d1c'

  const isChecked = checked || false
  const styles = {
    checkbox: {
      backgroundColor: SQUARE_BUTTON_COLOR,
      position: 'relative',
      width: 22,
      height: 22,
      minHeight: 22,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginRight: '2%'
    },
    checkboxLabel: {
      color: TEXT_COLOR,
      fontFamily: 'Open Sans',
      fontSize: 16
    }
  }

  return (
    <View style={[{ flexDirection: 'row', marginTop: '4%' }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.checkbox}
        onPress={() => onValueChange(!checked)}
        {...props}
      >
        {isChecked && !checkComponent && (
          <FontAwesomeIcon
            icon={faCheck}
            size={18}
            style={{
              color: 'white',
              fontColor: 'white'
            }}
          />
        )}
        {isChecked && checkComponent}
      </TouchableOpacity>
      <Text style={[styles.checkboxLabel]} {...props}>
        {props.label}
      </Text>
    </View>
  )
}
