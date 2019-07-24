import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '../../data/constants/AppConstants'

class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)

    if (__DEV__) {
      this._bootstrapDev()
    } else {
      this._bootstrap()
    }
  }

  _bootstrapDev = async () => {
    // Load the last screen used
    this.props.navigation.navigate(
      await AsyncStorage.getItem(AppConstants.LAST_SCREEN_FOCUSED)
    )
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrap = async () => {
    try {
      this.props.navigation.navigate('Dashboard')
    } catch (error) {
      // TODO LOG ERROR
    }
  }

  // Render any loading content that you like here
  render () {
    return (
      <View>
        <ActivityIndicator />
      </View>
    )
  }
}

export default AuthLoadingScreen
