import React from 'react'
import I18n from '@src/i18n'
import { RecoveryPhraseHelper, SetupStore } from 'ndaujs'

const createButtons = (props, Button) => {
  return props.words.map((row, rowIndex) => {
    return (
      <React.Fragment key={rowIndex}>
        {row.map((item, index) => {
          return item !== '' ? (
            <Button key={index} onPress={() => props.handleWordClick(item)}>
              {item}
            </Button>
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
    placeholder: I18n.t('pleaseenteravalidword'),
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
    placeholder: I18n.t('enterapassword'),
    secureTextEntry: !props.showPasswords,
    autoCapitalize: 'none'
  }
}

const addConfirmPasswordAttributes = props => {
  return {
    onChangeText: password => props.setConfirmPassword(password),
    value: props.confirmPassword,
    placeholder: I18n.t('enterapassword'),
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
    placeholder: I18n.t('exdefaultwallet'),
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
    onPress: props.next
  }
}

export default {
  createButtons,
  createConfirmationButtons,
  addTextInputAttributes,
  addConfirmRecovery,
  addPasswordAttributes,
  addConfirmPasswordAttributes,
  addConfirmPasswordButtonAttributes,
  addWalletNameAttributes,
  addButtonAttributes
}
