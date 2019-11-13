import React from 'react'
import { Alert } from 'react-native'
import I18n from '@src/i18n'
import VerifyRecovery from '@src/ui/components/VerifyRecovery'
import { withSafeDarkView } from './BaseScreen'
import { DataFormatHelper, SetupStore } from 'ndaujs'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'
import FlashNotification from '../components/FlashNotification'

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
      selected: [],
      selectedItems: []
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

  handleWordClick = (selectedItem, index) => {
    const selected = this.state.selected.slice()
    const selectedItems = this.state.selectedItems.slice()
    const foundIndex = selected.indexOf(index)
    console.log('selected: ', selected)
    if (foundIndex !== -1) {
      // already selected item was clicked
      selected.splice(foundIndex, 1)
      selectedItems.splice(foundIndex, 1)
      this.setState({ selected, selectedItems }, this.afterClick)
    } else if (!this.state.inError) {
      selected.push(index)
      selectedItems.push(selectedItem)
      this.setState({ selected, selectedItems }, this.afterClick)
    }
  }

  isCorrect (selected) {
    const correctSoFar = this.shuffledMap.slice(0, this.state.selected.length)
    const recoveryPhrase = this.shuffledWords
    console.log(
      'isCorrect: ',
      correctSoFar,
      selected,
      recoveryPhrase[_(selected).last()],
      recoveryPhrase[_(correctSoFar).last()]
    )
    console.log('shuffledWords: ', this.shuffledWords)
    console.log('shuffledMap: ', this.shuffledMap)
    if (_.isEqual(correctSoFar, selected)) {
      return true
    } else if (
      recoveryPhrase[_(selected).last()] ===
      recoveryPhrase[_(correctSoFar).last()]
    ) {
      // compare the last element of the arrays by string
      return true
    } else {
      return false
    }
  }

  checkMistakes () {
    const { selected } = this.state

    if (!this.isCorrect(selected)) {
      const errorText = this.state.mustRetry
        ? I18n.t('please-click-back-button-error-message')
        : I18n.t('please-enter-words-in-correct-order')
      FlashNotification.showError(errorText)

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

  checkDone () {
    if (_(this.state.selected).isEqual(this.shuffledMap)) {
      this.setState({ match: true })
      this.props.navigation.navigate('SetupVerifyConfirmRecovery')
    }
  }

  afterClick () {
    this.checkMistakes()
    this.checkDone()
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
    const selectedItems = DataFormatHelper.default.groupArrayIntoRows(
      this.state.selectedItems,
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
          next={() => {}}
          words={words}
          selected={selected}
          selectedItems={selectedItems}
          handleWordClick={this.handleWordClick}
          handleClick={() => {}}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupVerifyRecovery, I18n.t('setup'), true)
