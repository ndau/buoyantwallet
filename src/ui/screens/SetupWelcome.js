import React from 'react'
import I18n from '@src/i18n'
import Welcome from '@src/ui/components/Welcome'
import { withSafeDarkView } from './BaseScreen'
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { SetupStore } from 'ndaujs'

class SetupWelcome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  next = () => {
    this.props.navigation.navigate('Setup')
  }

  render () {
    return (
      <ImageBackground
        source={require('img/New-dashboard.png')}
        style={{ width: '100%', height: '100%' }}
      >
        <StatusBar barStyle='light-content' />
        <Welcome
          {...this.props}
          {...this.state}
          topPanelHeight={this.topPanelHeight}
          next={this.next}
        />
      </ImageBackground>
    )
  }
}

export default SetupWelcome
