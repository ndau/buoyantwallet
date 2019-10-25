import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import AppConstants from '@src/data/constants/AppConstants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

export const withSafeDarkView = (
  WrappedComponent,
  title,
  headerLeft,
  headerRight
) => {
  return class extends React.Component {
    static navigationOptions = ({ navigation }) => {
      const goBack = () => {
        navigation.goBack()
      }
      return {
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
        headerLeft: headerLeft ? (
          <TouchableOpacity onPress={goBack}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={28}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        ) : null,
        headerRight: headerRight ? (
          <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
        ) : null
      }
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
