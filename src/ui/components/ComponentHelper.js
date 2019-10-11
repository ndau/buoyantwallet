import React from 'react'
import I18n from '@src/i18n'
import { DataFormatHelper, RecoveryPhraseHelper } from 'ndaujs'

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
    onPress: async () => {
      const phrase = DataFormatHelper.default.convertRecoveryArrayToString(
        props.recoveryPhrase
      )
      const user = await RecoveryPhraseHelper.default.recoverUser(phrase)
      console.log(JSON.stringify(user, null, 2))
      props.navigation.navigate('Overview')
    }
  }
}

export default {
  createButtons,
  createConfirmationButtons,
  addTextInputAttributes,
  addConfirmRecovery
}
