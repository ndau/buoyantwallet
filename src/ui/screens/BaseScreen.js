import React from 'react'
import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import AppConstants from '@src/data/constants/AppConstants'

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
        backgroundColor: AppConstants.BACKGROUND_COLOR
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
        <SafeAreaView
          style={{ flex: 1, backgroundColor: AppConstants.BACKGROUND_COLOR }}
        >
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
