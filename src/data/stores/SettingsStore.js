import AppConstants from '@src/data/constants/AppConstants'
import AsyncStorage from '@react-native-community/async-storage'

class SettingsStore {
  constructor () {
    if (!SettingsStore.instance) {
      this._settings = {}
      SettingsStore.instance = this
    }
    this.funcs = new Set()
    return SettingsStore.instance
  }

  /**
   * This function must be called to make sure
   * we get the values out of AsyncStorage when
   * initialization of the application.
   *
   */
  initialize = async () => {
    const applicationNetwork = await AsyncStorage.getItem(
      AppConstants.APPLICATION_NETWORK
    )
    if (applicationNetwork) {
      this.setApplicationNetwork(applicationNetwork)
    }
  }

  /**
   * Add a callback function to be called when
   * any of the settings you choose to notify listeners of
   * is altered.
   *
   * @param {function} func
   */
  addListener (func) {
    this.funcs.add(func)
  }

  /**
   * Add a callback function to be called when
   * any of the settings you choose to notify listeners of
   * is altered.
   *
   * @param {function} func
   */
  removeListener (func) {
    this.funcs.delete(func)
  }

  getApplicationNetwork () {
    if (!this._settings.applicationNetwork) {
      this._settings.applicationNetwork = AppConstants.MAINNET
    }
    return this._settings.applicationNetwork
  }

  setApplicationNetwork (network) {
    this._settings.applicationNetwork = network
    this.funcs.forEach(func => func(this._settings))
    AsyncStorage.setItem(AppConstants.APPLICATION_NETWORK, network)
  }
}

// This is how we create a singleton in JavaScript
const instance = new SettingsStore()
Object.freeze(instance)

export default instance
