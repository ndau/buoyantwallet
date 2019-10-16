import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'

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
        <SafeAreaView style={{ flex: 1, backgroundColor: '#15232A' }}>
          <StatusBar barStyle='light-content' />
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps='always'
          >
            <WrappedComponent {...this.props} />
          </ScrollView>
        </SafeAreaView>
      )
    }
  }
}
