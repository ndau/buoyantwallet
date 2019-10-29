import React from 'react'
import I18n from '@src/i18n'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import GetRecoveryPhrase from '../components/GetRecoveryPhrase'
import { withSafeDarkView } from './BaseScreen'
import {
  LayoutAnimation,
  NativeModules,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from 'react-native'
import AppConstants from '@src/data/constants/AppConstants'
import { SetupStore, DataFormatHelper } from 'ndaujs'
import WaitSpinner from './WaitSpinner'

const DEFAULT_ROW_LENGTH = 4

class SetupGetRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      recoverPhraseFull: false,
      confirmationError: false,
      acquisitionError: false,
      stepNumber: 0,
      recoveryIndex: 0,
      disableArrows: true,
      spinner: false,
      keyboardShown: false,
      input: '',
      wordsArray: [],
      spinner: false
    }

    this.index = 0
    this.recoveryPhrase = ['', '', '', '', '', '', '', '', '', '', '', '']

    this.rowLength = DEFAULT_ROW_LENGTH
    this.topPanelHeight = new Animated.Value(137)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  _adjustStepNumber = pageIndex => {
    this.setState({ stepNumber: pageIndex })
    if (pageIndex === this.recoveryPhrase.length) {
      this.props.navigation.navigate('SetupConfirmRecovery')
    }
  }

  // Below are all the functions that the rendered child components
  // will use
  addToRecoveryPhrase = value => {
    this.recoveryPhrase[this.state.recoveryIndex] = value
    SetupStore.recoveryPhrase = this.recoveryPhrase
  }

  moveToNextWord = async () => {
    return new Promise(resolve => {
      // this allows a second prevention to move to the next
      // word if there are problems, mainly for when keyboard
      // stays up and user uses return key to progress
      if (this.state.disableArrows) return

      if (this.state.recoveryIndex <= 11) {
        const newRecoveryIndex = this.state.recoveryIndex + 1
        this.setState(
          {
            recoveryIndex: newRecoveryIndex,
            disableArrows: this.recoveryPhrase[newRecoveryIndex] === ''
          },
          () => {
            this._adjustStepNumber(this.state.recoveryIndex)
            resolve(true)
          }
        )
      }
    })
  }

  moveBackAWord = () => {
    if (this.state.recoveryIndex > 0) {
      const newRecoveryIndex = this.state.recoveryIndex - 1
      this.setState(
        {
          recoveryIndex: newRecoveryIndex,
          disableArrows: false
        },
        () => {
          this._adjustStepNumber(this.state.recoveryIndex)
        }
      )
    }
  }

  nextWord = async () => {
    LayoutAnimation.easeInEaseOut()
    if (await this.moveToNextWord()) {
      this.setState({ input: '', wordsArray: [] })
    }
  }

  prevWord = () => {
    LayoutAnimation.easeInEaseOut()
    this.moveBackAWord()
    this.setState({ input: '', wordsArray: [] })
  }

  handleWords = async text => {
    const words =
      text !== ''
        ? await NativeModules.KeyAddressManager.wordsFromPrefix(
          AppConstants.APP_LANGUAGE,
          text,
          6
        )
        : ' '
    this.setState({
      wordsArray: DataFormatHelper.default.groupArrayIntoRows(
        words.split(/\s+/g),
        3
      )
    })

    this.checkIfArrowsNeedToBeDisabled(words, text)
    this.setAcquisitionError(!words.length)
    this.addToRecoveryPhrase(text)
  }

  handleWordClick = async text => {
    LayoutAnimation.easeInEaseOut()
    const words = await NativeModules.KeyAddressManager.wordsFromPrefix(
      AppConstants.APP_LANGUAGE,
      text,
      6
    )

    this.setState({ input: text })

    this.checkIfArrowsNeedToBeDisabled(words, text)
    this.addToRecoveryPhrase(text)
    this.nextWord()
  }

  setDisableArrows = value => {
    this.setState({ disableArrows: value })
  }

  checkIfArrowsNeedToBeDisabled = (words, textEntered) => {
    const wordsArray = words.split(' ')
    let disableArrows = true

    if (words === textEntered) {
      // if the textEntered matches the full words string then
      // we have an exact match, so we are all done. this happens
      // when someone types the whole word
      disableArrows = false
    } else if (wordsArray.indexOf(textEntered) >= 0) {
      // if we have a word that matches in the array of words
      // then they have typed a word in there which is present
      // 2 times. For example, if someone types in 'pig', you will
      // see 'pig' and 'pigeon' in the list. The word 'pig' is a
      // match, so they can move on...hence we enable the arrows
      disableArrows = false
    }

    this.setDisableArrows(disableArrows)

    return disableArrows
  }

  setAcquisitionError = value => {
    if (value) {
      this.setState({ disableArrows: value })
    }
    this.setState({ acquisitionError: value })
  }

  componentDidMount () {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    )
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    )
  }

  componentWillUnmount () {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    Animated.timing(this.topPanelHeight, {
      duration: event.duration,
      toValue: 0
    }).start()
  }

  keyboardWillHide = event => {
    Animated.timing(this.topPanelHeight, {
      duration: event.duration,
      toValue: 137
    }).start()
  }

  confirmRecovery = async () => {
    SetupStore.recoveryPhrase = this.recoveryPhrase
    this.props.navigation.navigate('SetupConfirmRecovery')
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'android' ? 190 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />
        <GetRecoveryPhrase
          {...this.props}
          {...this.state}
          autoCapitalize='none'
          error={this.props.error}
          onChangeText={text => {
            LayoutAnimation.easeInEaseOut()
            this.handleWords(text)
            this.setState({ input: text })
          }}
          value={
            this.state.input || this.recoveryPhrase[this.state.recoveryIndex]
          }
          blurOnSubmit={false}
          onSubmitEditing={this.nextWord}
          autoCorrect={false}
          recoveryIndex={this.state.recoveryIndex}
          recoveryPhrase={this.recoveryPhrase}
          keyboardShown={this.state.keyboardShown}
          error={this.state.acquisitionError}
          moveBackAWord={this.prevWord}
          moveToNextWord={this.nextWord}
          words={this.state.wordsArray}
          addToRecoveryPhrase={this.addToRecoveryPhrase}
          setDisableArrows={this.setDisableArrows}
          setAcquisitionError={this.setAcquisitionError}
          checkIfArrowsNeedToBeDisabled={this.checkIfArrowsNeedToBeDisabled}
          handleWordClick={this.handleWordClick}
          topPanelHeight={this.topPanelHeight}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(SetupGetRecovery, I18n.t('setup'), true)
