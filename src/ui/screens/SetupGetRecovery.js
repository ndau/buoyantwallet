import React from 'react'
import I18n from '@src/i18n'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import GetRecoveryPhrase from '../components/GetRecoveryPhrase'
import ConfirmRecoveryPhrase from '@src/ui/components/ConfirmRecoveryPhrase'
import { withSafeDarkView } from './BaseScreen'
import {
  TouchableWithoutFeedback,
  LayoutAnimation,
  NativeModules,
  KeyboardAvoidingView,
  Animated,
  Keyboard
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import AppConstants from '@src/data/constants/AppConstants'
import LogStore from '@src/data/stores/LogStore'
import { RecoveryPhraseHelper, SetupStore } from 'ndaujs'
import WaitingForBlockchainSpinner from './WaitingForBlockchainSpinner'

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
      this.setState({ recoverPhraseFull: true })
    }
  }

  // Below are all the functions that the rendered child components
  // will use
  addToRecoveryPhrase = value => {
    this.recoveryPhrase[this.state.recoveryIndex] = value
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
      wordsArray: this.groupArrayIntoRows(words.split(/\s+/g), 3)
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

  // TODO: REFACTOR THIS!!!
  /**
   * Given the array passed in, create a new array that
   * contains rows.
   *
   * @param {Array} arr array to group into rows based on length
   * @param {number} length row length
   */
  groupArrayIntoRows = (arr = [], length) => {
    let res = []
    for (let i = 0; i < arr.length; i += length) {
      res.push(arr.slice(i, i + length))
    }
    return res
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
    this.setState({ spinner: true }, async () => {
      const user = await RecoveryPhraseHelper.default.recoverUser(
        this.recoveryPhrase
      )
      SetupStore.user = user
      SetupStore.recoveryPhrase = this.recoveryPhrase
      this.props.navigation.navigate('SetupPassword')
      this.setState({ spinner: false })
    })
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'android' ? 190 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <WaitingForBlockchainSpinner spinner={this.state.spinner} />
        {!this.state.recoverPhraseFull ? (
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
        ) : (
          <ConfirmRecoveryPhrase
            {...this.props}
            {...this.state}
            recoveryPhrase={this.recoveryPhrase}
            confirmRecovery={this.confirmRecovery}
          />
        )}
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(
  SetupGetRecovery,
  I18n.t('setup'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
