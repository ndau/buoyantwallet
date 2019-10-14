import React from 'react'
import I18n from '@src/i18n'
import CreatePassword from '@src/ui/components/CreatePassword'
import { withSafeDarkView } from './BaseScreen'
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Animated
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'

class SetupPassword extends React.Component {
  constructor (props) {
    super(props)

    this.textAreaHeight = 150

    this.topPanelHeight = new Animated.Value(this.textAreaHeight)
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
      toValue: this.textAreaHeight
    }).start()
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 0}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <CreatePassword
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(
  SetupPassword,
  I18n.t('setup'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
