/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React from 'react'
import I18n from '@src/i18n'
import CreatePassword from '@src/ui/components/CreatePassword'
import { withSafeDarkView } from './BaseScreen'
import { KeyboardAvoidingView, Keyboard, Animated, Alert } from 'react-native'
import { CheckBox } from '@src/ui/components'
import AppConstants from '@src/data/constants/AppConstants'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import FlashNotification from '../components/FlashNotification'

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
      FlashNotification.showError(I18n.t('password-do-not-match'))

      this.setState({ textInputColor: AppConstants.WARNING_ICON_COLOR })
      return
    }
    if (!this.checkPasswordLength()) {
      FlashNotification.showError(I18n.t('passwords-must-be-8'))
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
