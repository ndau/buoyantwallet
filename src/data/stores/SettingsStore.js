import AppConstants from '../constants/AppConstants'

class SettingsStore {
  constructor () {
    if (!SettingsStore.instance) {
      this._settings = {}
      SettingsStore.instance = this
    }
    this.funcs = new Set()
    return SettingsStore.instance
  }

  addListener (func) {
    this.funcs.add(func)
  }

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
    this.funcs.forEach(func => func(network))
  }
}

const instance = new SettingsStore()
Object.freeze(instance)

export default instance
