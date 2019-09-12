import React from 'react'
import { SafeAreaView, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

export const withSafeDarkView = (WrappedComponent, title) => {
  return class extends React.Component {
    static navigationOptions = {
      title: title,
      headerStyle: {
        backgroundColor: '#15232A'
      },
      headerTitleStyle: {
        color: '#8CC74F',
        fontFamily: 'opensans-bold',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
      },
      headerLeft: (
        <TouchableWithoutFeedback>
          <FontAwesomeIcon
            icon={faArrowLeft}
            size={28}
            style={{ color: 'white' }}
          />
        </TouchableWithoutFeedback>
      ),
      headerRight: (
        <TouchableWithoutFeedback>
          <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
        </TouchableWithoutFeedback>
      )
    }

    render () {
      return (
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle='light-content' />
          <WrappedComponent {...this.props} />
        </SafeAreaView>
      )
    }
  }
}
