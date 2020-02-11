/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import SettingsStore from '../SettingsStore'
import AppConstants from '../../constants/AppConstants'

describe('SettingsStore tests...', () => {
  it('should accept adding a listener for mainnet', async () => {
    const myFunction = settings => {
      expect(settings.applicationNetwork).toBe(AppConstants.MAINNET)
    }

    SettingsStore.addListener(myFunction)
    SettingsStore.setApplicationNetwork(AppConstants.MAINNET)
    SettingsStore.removeListener(myFunction)
  })
  it('should accept adding a listener for testnet', async () => {
    const myFunction = settings => {
      expect(settings.applicationNetwork).toBe(AppConstants.TESTNET)
    }

    SettingsStore.addListener(myFunction)
    SettingsStore.setApplicationNetwork(AppConstants.TESTNET)
    SettingsStore.removeListener(myFunction)
  })
  it('should accept adding a listener for devnet', async () => {
    const myFunction = settings => {
      expect(settings.applicationNetwork).toBe(AppConstants.DEVNET)
    }

    SettingsStore.addListener(myFunction)
    SettingsStore.setApplicationNetwork(AppConstants.DEVNET)
    SettingsStore.removeListener(myFunction)
  })
  it('should remove a listner correctly', async () => {
    let listenerCalled = false
    const myFunction = settings => {
      listenerCalled = true
    }
    SettingsStore.addListener(myFunction)
    SettingsStore.removeListener(myFunction)
    SettingsStore.setApplicationNetwork(AppConstants.MAINNET)
    setTimeout(() => {
      expect(listenerCalled).toBe(false)
    }, 2000)
    SettingsStore.removeListener(myFunction)
  })
  it('should default to mainnet with initialization', async () => {
    const myFunction = settings => {
      expect(settings.applicationNetwork).toBe(AppConstants.MAINNET)
    }

    SettingsStore.addListener(myFunction)
    SettingsStore.initialize()
    SettingsStore.removeListener(myFunction)
  })
})
