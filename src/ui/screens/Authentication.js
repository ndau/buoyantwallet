import React, { Component } from 'react'
import { View, Button } from 'react-native'
import LogStore from '@src/data/stores/LogStore'

class Authentication extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  _signInAsync = async () => {
    LogStore.log('Authenticating...')
    this.props.navigation.navigate('App')
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='Sign in!' onPress={this._signInAsync} />
      </View>
    )
  }
}

export default Authentication
