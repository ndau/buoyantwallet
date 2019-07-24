import React from 'react'
import { ActivityIndicator, View } from 'react-native'

class AuthLoadingScreen extends React.Component {
  constructor (props) {
    super(props)

    this._bootstrap()
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
