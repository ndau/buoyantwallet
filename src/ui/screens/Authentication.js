import React, { Component } from 'react'
import { View, Button } from 'react-native'
import LogStore from '@src/data/stores/LogStore'
import { withSafeDarkView } from './BaseScreen'
import I18n from '@src/i18n'

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

export default withSafeDarkView(Authentication, I18n.t('login'))
