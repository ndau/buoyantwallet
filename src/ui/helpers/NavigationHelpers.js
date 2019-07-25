import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '../../data/constants/AppConstants'

const setupNavigationFocusListener = navigation => {
  navigation.addListener('willFocus', async payload => {
    try {
      await AsyncStorage.setItem(
        AppConstants.LAST_SCREEN_FOCUSED,
        payload.state.routeName
      )
    } catch (err) {
      console.error(err)
    }
  })
}

export default {
  setupNavigationFocusListener
}
