import React from 'react'
import I18n from '@src/i18n'

const createButtons = (props, Button) => {
  return props.words.map((row, rowIndex) => {
    return (
      <React.Fragment key={rowIndex}>
        {row.map((item, index) => {
          const i = index + row.length * rowIndex
          return item !== '' ? (
            <Button key={index} onPress={() => props.handleWordClick(item, i)}>
              {item}
            </Button>
          ) : null
        })}
      </React.Fragment>
    )
  })
}

const createSelectedItems = (selectedItems, handleClick, Item) => {
  return selectedItems.map((row, rowIndex) => {
    return (
      <React.Fragment key={rowIndex}>
        {row.map((item, index) => {
          return item !== '' ? (
            <Item key={index} onPress={event => handleClick(index, event)}>
              {item}
            </Item>
          ) : null
        })}
      </React.Fragment>
    )
  })
}

const createConfirmationButtons = (words, Button) => {
  return words.map((item, index) => {
    return <Button key={index}>{item}</Button>
  })
}

const addTextInputAttributes = props => {
  return {
    placeholder: props.placeholder,
    onChangeText: props.onChangeText,
    autoCapitalize: 'none',
    error: props.error,
    value: props.value,
    blurOnSubmit: false,
    onSubmitEditing: props.moveToNextWord,
    autoCorrect: false
  }
}

const addMultilineTextInputAttributes = props => {
  return {
    multiline: true,
    placeholder: props.placeholder,
    onChangeText: props.onChangeText,
    autoCapitalize: 'none',
    error: props.error,
    value: props.value,
    blurOnSubmit: false,
    onSubmitEditing: props.moveToNextWord,
    autoCorrect: false
  }
}

const addConfirmRecovery = props => {
  return {
    onPress: props.confirmRecovery
  }
}

const addPasswordAttributes = props => {
  return {
    onChangeText: password => props.setPassword(password),
    value: props.password,
    placeholder: I18n.t('enter-a-password'),
    secureTextEntry: !props.showPasswords,
    autoCapitalize: 'none'
  }
}

const addConfirmPasswordAttributes = props => {
  return {
    onChangeText: password => props.setConfirmPassword(password),
    value: props.confirmPassword,
    placeholder: I18n.t('enter-a-password'),
    secureTextEntry: !props.showPasswords,
    autoCapitalize: 'none',
    onSubmitEditing: props.confirmedPassword
  }
}

const addConfirmPasswordButtonAttributes = props => {
  return {
    onPress: props.confirmedPassword
  }
}

const addWalletNameAttributes = props => {
  return {
    placeholder: I18n.t('ex-default-wallet'),
    onChangeText: props.onChangeText,
    autoCapitalize: 'none',
    error: props.error,
    value: props.value,
    blurOnSubmit: false,
    onSubmitEditing: props.next,
    autoCorrect: false
  }
}

const addButtonAttributes = props => {
  return {
    onPress: props.next,
    disabled: props.disabled
  }
}

const addRecoverButtonAttributes = props => {
  return {
    onPress: props.recover
  }
}

const addNewWalletButtonAttributes = props => {
  return {
    onPress: props.newWallet
  }
}

export default {
  createButtons,
  createSelectedItems,
  createConfirmationButtons,
  addTextInputAttributes,
  addMultilineTextInputAttributes,
  addConfirmRecovery,
  addPasswordAttributes,
  addConfirmPasswordAttributes,
  addConfirmPasswordButtonAttributes,
  addWalletNameAttributes,
  addButtonAttributes,
  addRecoverButtonAttributes,
  addNewWalletButtonAttributes
}
