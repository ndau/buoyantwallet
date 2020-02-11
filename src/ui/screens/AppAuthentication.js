/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React, { Component } from 'react'
import Authentication from '@src/ui/components/Authentication'
import { withSafeDarkView } from './BaseScreen'
import I18n from '@src/i18n'
import { Alert, KeyboardAvoidingView, Keyboard, Animated } from 'react-native'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import MultiSafeHelper from 'ndaujs/src/helpers/MultiSafeHelper'
import UserStore from 'ndaujs/src/stores/UserStore'
import WalletStore from 'ndaujs/src/stores/WalletStore'
import FlashNotification from '../components/FlashNotification'
import { ScrollView } from 'react-native-gesture-handler'

const l = LoggerHelper.curryLogger('AppAuthentication')

class AppAuthentication extends Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      loginAttempt: 1
    }

    this.textAreaHeight = 200

    this.topPanelHeight = new Animated.Value(this.textAreaHeight)

    this.maxLoginAttempts = 10
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

  _showExitApp () {
    Alert.alert(
      '',
      `You have hit the maximum amount of login attempts.`,
      [
        {
          text: 'Ok',
          onPress: () => {}
        }
      ],
      { cancelable: false }
    )
  }

  _showLoginError = () => {
    FlashNotification.showError(
      `Login attempt ${this.state.loginAttempt} of ${
        this.maxLoginAttempts
      } failed.`
    )

    if (this.state.loginAttempt === this.maxLoginAttempts) {
      this._showExitApp()
    } else {
      this.setState({ loginAttempt: this.state.loginAttempt + 1 })
    }
  }

  _setNdauJSAppropriately = user => {
    // Set the default user
    UserStore.setUser(user)
    // We must also set the password for usage in ndaujs
    UserStore.setPassword(this.state.password)
    // if there is only 1 wallet...then set it to the WalletStore
    if (Object.keys(user.wallets).length <= 1) {
      WalletStore.setWallet(user.wallets[Object.keys(user.wallets)[0]])
    } else {
      // TODO:
      // HERE WE MUST GO TO A NEW SCREEN that allows us to pick the wallet
      // THAT IS MISSING!!!!
    }
  }

  login = async () => {
    l.debug('Authenticating...')
    try {
      const user = await MultiSafeHelper.getDefaultUser(this.state.password)
      if (user) {
        FlashNotification.hideMessage()
        l.debug(user)

        this._setNdauJSAppropriately(user)

        this.props.navigation.navigate('AppWalletOverview')
      }
    } catch (error) {
      l.debug(error)
      this._showLoginError()
    }
  }

  setPassword = password => {
    this.setState({ password })
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='always'
      >
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === 'android' ? -20 : 50}
          behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        >
          <Authentication
            {...this.props}
            {...this.state}
            next={this.login}
            setPassword={this.setPassword}
            topPanelHeight={this.topPanelHeight}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

export default withSafeDarkView(AppAuthentication, I18n.t('login'))
