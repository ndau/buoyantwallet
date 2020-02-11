/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import AppConstants from '@src/data/constants/AppConstants'
import AsyncStorage from '@react-native-community/async-storage'
import I18n from '@src/i18n'

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

  isMainNet () {
    if (
      this._settings.applicationNetwork &&
      this._settings.applicationNetwork.toLowerCase() === AppConstants.MAINNET
    ) {
      return true
    }
    return false
  }
}

// This is how we create a singleton in JavaScript
const instance = new SettingsStore()
Object.freeze(instance)

export default instance
