import AsyncStorage from '@react-native-community/async-storage'
import AppConstants from '../../data/constants/AppConstants'

/**
 * Use this for the screens when you would like to
 * have the routeName captured when focus is set to it.
 *
 * @param {React Navigation Object} navigation
 */
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
