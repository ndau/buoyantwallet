import AsyncStorage from '@react-native-community/async-storage'

class ThemeStoreType {
  setTheme (name) {
    return AsyncStorage.setItem('theme', name)
  }

  getTheme () {
    return AsyncStorage.getItem('theme')
  }
}

export const ThemeStore = new ThemeStoreType()
