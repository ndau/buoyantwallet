import React from 'react'

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
    placeholder: 'Please enter a valid word',
    onChangeText: props.onChangeText,
    autoCapitalize: 'none',
    error: props.error,
    value: props.value,
    blurOnSubmit: false,
    onSubmitEditing: props.moveToNextWord,
    autoCorrect: false
  }
}

export default {
  createButtons,
  createConfirmationButtons,
  addTextInputAttributes
}
