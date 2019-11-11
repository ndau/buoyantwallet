import React, { Component } from 'react'
import LogStore from '@src/data/stores/LogStore'
import Authentication from '@src/ui/components/Authentication'
import { withSafeDarkView } from './BaseScreen'
import I18n from '@src/i18n'
import { Alert } from 'react-native'
import { MultiSafeHelper, UserStore } from 'ndaujs'
import FlashNotification from '../components/FlashNotification'

class AuthenticationWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      password: '',
      loginAttempt: 1
    }

    this.maxLoginAttempts = 10
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
    if (this.state.loginAttempt === this.maxLoginAttempts) {
      this._showExitApp()
    } else {
      this.setState({ loginAttempt: this.state.loginAttempt + 1 })
    }
    FlashNotification.showError(
      `Login attempt ${this.state.loginAttempt} of ${
        this.maxLoginAttempts
      } failed.`
    )
  }

  login = async () => {
    LogStore.log('Authenticating...')
    console.log('password: ' + this.state.password)
    try {
      const user = await MultiSafeHelper.default.getDefaultUser(
        this.state.password
      )
      if (user) {
        UserStore.user = user
        this.props.navigation.navigate('App')
      }
    } catch (error) {
      console.error(error)
      this._showLoginError()
    }
  }

  setPassword = password => {
    this.setState({ password })
  }

  render () {
    return (
      <Authentication
        {...this.props}
        {...this.state}
        next={this.login}
        setPassword={this.setPassword}
      />
    )
  }
}

export default withSafeDarkView(AuthenticationWrapper, I18n.t('login'))
