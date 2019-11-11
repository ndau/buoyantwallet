import React from 'react'
import I18n from '@src/i18n'
import CreatePassword from '@src/ui/components/CreatePassword'
import { withSafeDarkView } from './BaseScreen'
import { KeyboardAvoidingView, Keyboard, Animated, Alert } from 'react-native'
import { CheckBox } from '@src/ui/components'
import AppConstants from '@src/data/constants/AppConstants'
import { SetupStore } from 'ndaujs'

class SetupPassword extends React.Component {
  static MINIMUM_PASSWORD_LENGTH = 8

  constructor (props) {
    super(props)

    this.state = {
      password: '',
      confirmPassword: '',
      showPasswords: false,
      textInputColor: AppConstants.TEXT_COLOR
    }

    this.textAreaHeight = 100

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

  setPassword = password => {
    this.setState({ password })
  }

  setConfirmPassword = confirmPassword => {
    this.setState({ confirmPassword })
  }

  checkPasswordsMatch = () => {
    return this.state.password === this.state.confirmPassword
  }

  checkPasswordLength = () => {
    return this.state.password.length >= SetupPassword.MINIMUM_PASSWORD_LENGTH
  }

  confirmedPassword = () => {
    if (!this.checkPasswordsMatch()) {
      Alert.alert(
        'Error',
        'The passwords entered do not match.',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false }
      )
      this.setState({ textInputColor: AppConstants.WARNING_ICON_COLOR })
      return
    }
    if (!this.checkPasswordLength()) {
      Alert.alert(
        'Error',
        'The password must be at least 8 characters',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false }
      )
      this.setState({ textInputColor: AppConstants.WARNING_ICON_COLOR })
      return
    }
    // If we got here all is well
    SetupStore.encryptionPassword = JSON.parse(
      JSON.stringify(this.state.password)
    )
    this.props.navigation.navigate('SetupWalletName')
  }

  render () {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'android' ? -50 : 50}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
      >
        <CreatePassword
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
          setPassword={this.setPassword}
          setConfirmPassword={this.setConfirmPassword}
          confirmedPassword={this.confirmedPassword}
          checkBox={
            <CheckBox
              onValueChange={value => this.setState({ showPasswords: value })}
              checked={this.state.showPasswords}
              label={I18n.t('show-password')}
            />
          }
        />
      </KeyboardAvoidingView>
    )
  }
}

export default withSafeDarkView(SetupPassword, I18n.t('setup'), true)
