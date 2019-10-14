import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheck } from '@fortawesome/pro-light-svg-icons'

/**
 * This is a homegrown button as opposed to using nachosui. The reason
 * here is that they way nachosui inserts Icon objects does not allow
 * customization. You can change the fontset but the button doesn't call
 * the Icon correctly to pass in the name of the icon. It uses a hardcoded
 * map of name to unicode characters. These unicode characters do not line
 * up to the FontAwesomePro5 set.
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
    <View
      style={[
        { flexDirection: 'row', marginTop: '4%' },
        disabled ? disabledStyle : {}
      ]}
    >
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
