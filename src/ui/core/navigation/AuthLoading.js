import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '@src/data/constants/AppConstants'
import LogStore from '@src/data/stores/LogStore'
import MultiSafeHelper from 'ndaujs/src/helpers/MultiSafeHelper'

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
    LogStore.log('Bootstraping DEV...')
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
    LogStore.log('Bootstraping PROD...')

    const multiSafes = await MultiSafeHelper.isAMultiSafePresent()
    if (!multiSafes) {
      try {
        this.props.navigation.navigate('SetupGetRecovery')
      } catch (error) {
        // TODO LOG ERROR
      }
    } else {
      try {
        this.props.navigation.navigate('Authentication')
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
      <View>
        <ActivityIndicator />
      </View>
    )
  }
}

export default AuthLoadingScreen
