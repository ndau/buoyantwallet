import React from 'react'
import { ActivityIndicator, ImageBackground } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '@src/data/constants/AppConstants'
import MultiSafeHelper from 'ndaujs/src/helpers/MultiSafeHelper'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'

const l = LoggerHelper.curryLogger('AuthLoadingScreen')

class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)

    // if (__DEV__) {
    //   this._bootstrapDev()
    // } else {
    this._bootstrap()
    // }
  }

  /**
   * bootstrap the application in __DEV__ mode
   */
  _bootstrapDev = async () => {
    // Load the last screen used
    l.debug('Bootstraping DEV...')
    const screen = await AsyncStorage.getItem(AppConstants.LAST_SCREEN_FOCUSED)
    if (screen) {
      this.props.navigation.navigate(screen)
    } else {
      this._bootstrap()
    }
  }

  /**
   * bootstrap the application in a production mode
   */
  _bootstrap = async () => {
    l.debug('Bootstraping PROD...')

    const multiSafes = await MultiSafeHelper.isAMultiSafePresent()
    if (!multiSafes) {
      try {
        this.props.navigation.navigate('Welcome')
      } catch (error) {
        // TODO LOG ERROR
      }
    } else {
      try {
        this.props.navigation.navigate('AppAuthentication')
      } catch (error) {
        // TODO LOG ERROR
      }
    }
  }

  /**
   * Render how the loading appears
   */
  render () {
    return (
      <ImageBackground
        source={require('img/New-dashboard.png')}
        style={{ backgroundColor: '#15232a', width: '100%', height: '100%' }}
      />
    )
  }
}

export default AuthLoadingScreen
