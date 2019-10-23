import React from 'react'
import I18n from '@src/i18n'
import Welcome from '@src/ui/components/Welcome'
import { ImageBackground, StatusBar } from 'react-native'

class SetupWelcome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  next = () => {
    this.props.navigation.navigate('SetupOnboardingType')
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
