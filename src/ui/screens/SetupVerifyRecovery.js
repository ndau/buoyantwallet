import React from 'react'
import { Alert } from 'react-native'
import I18n from '@src/i18n'
import VerifyRecovery from '@src/ui/components/VerifyRecovery'
import { withSafeDarkView } from './BaseScreen'
import { DataFormatHelper, SetupStore } from 'ndaujs'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'

const _ = require('lodash')

const MAX_ERRORS = 4 // 4 strikes and you're out

class SetupVerifyRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false,
      inError: false,
      mustRetry: false,
      errorCount: 0,
      match: false,
      selected: []
    }

    this.shuffledMap = []
    this.shuffledWords = []
  }

  shuffleTheWords = () => {
    // Shuffle the deck with a Fisher-Yates shuffle algorithm;
    // walks through the array backwards once, exchanging each value
    // with a random element from the remainder of the array
    let map = SetupStore.recoveryPhrase.map((e, i) => i)
    let arr = SetupStore.recoveryPhrase.slice()
    for (let i = arr.length - 1; i >= 0; i--) {
      let r = Math.floor(Math.random() * i)
      ;[map[i], map[r]] = [map[r], map[i]]
      ;[arr[i], arr[r]] = [arr[r], arr[i]]
    }

    this.shuffledWords = arr
    // turn array inside out
    this.shuffledMap = map.reduce((a, c, i) => {
      a[c] = i
      return a
    }, [])
  }

  // These are stubbed out so we can use common conventions in the
  // components.
  handleClick = () => {}
  next = () => {}

  handleWordClick = (selectedItem, index) => {
    const selected = this.state.selected.slice()
    const foundIndex = selected.indexOf(selectedItem)
    if (foundIndex !== -1) {
      // already selected item was clicked
      selected.splice(foundIndex, 1)
      this.setState({ selected: selected, inError: false })
    } else if (!this.state.inError) {
      selected.push(selectedItem)
      this.setState({ selected: selected }, this.afterClick(selected))
    }
  }

  isCorrect (selected) {
    const correctSoFar = this.shuffledWords.slice(0, selected.length)
    const correctSoFarIndex = this.shuffledMap.slice(0, selected.length)

    const recoveryPhrase = SetupStore.recoveryPhrase
    const recoveryPhraseSlice = recoveryPhrase.slice(0, selected.length)
    console.log(
      correctSoFar,
      selected,
      recoveryPhrase[selected.length - 1],
      recoveryPhrase[correctSoFarIndex]
    )
    if (_.isEqual(recoveryPhraseSlice, selected)) {
      return true
    } else if (
      recoveryPhrase[selected.length - 1] === recoveryPhrase[correctSoFarIndex]
    ) {
      // compare the last element of the arrays by string
      return true
    } else {
      return false
    }
  }

  checkMistakes (selected) {
    if (!this.isCorrect(selected)) {
      const errorText = this.state.mustRetry
        ? 'Please click the Back button to generate a new recovery phrase. Write down your phrase instead of memorizing it, or you may lose access to your ndau.'
        : 'Please enter the words in the correct order. De-select the last word to continue.'

      Alert.alert('Verify Recovery', errorText, [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ])

      let errorCount = this.state.errorCount + 1
      this.setState({
        inError: true,
        mustRetry: errorCount >= MAX_ERRORS,
        errorCount: errorCount,
        errorWord: this.state.selected[this.state.selected.length - 1]
      })
    } else {
      this.setState({
        inError: false,
        errorWord: null
      })
    }
  }

  checkDone (selected) {
    if (_(selected).isEqual(SetupStore.recoveryPhrase)) {
      this.setState({ match: true })
      this.props.navigation.navigate('SetupVerifyConfirmRecovery')
    }
  }

  afterClick (selected) {
    this.checkMistakes(selected)
    this.checkDone(selected)
  }

  render () {
    if (!this.shuffledWords.length) {
      this.shuffleTheWords()
    }
    const words = DataFormatHelper.default.groupArrayIntoRows(
      this.shuffledWords,
      3
    )
    const selected = DataFormatHelper.default.groupArrayIntoRows(
      this.state.selected,
      3
    )

    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />
        <VerifyRecovery
          {...this.props}
          {...this.state}
          next={this.next}
          words={words}
          selected={selected}
          handleWordClick={this.handleWordClick}
          handleClick={this.handleClick}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupVerifyRecovery, I18n.t('setup'), true)
