import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'

export const withSafeDarkView = (
  WrappedComponent,
  title,
  headerLeft,
  headerRight
) => {
  return class extends React.Component {
    static navigationOptions = {
      title,
      headerStyle: {
        backgroundColor: '#15232A'
      },
      headerTitleStyle: {
        color: '#8CC74F',
        fontFamily: 'opensans-bold',
        fontWeight: 'bold',
        flexGrow: 1,
        textAlign: 'center',
        alignSelf: 'center'
      },
      headerLeft,
      headerRight
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
