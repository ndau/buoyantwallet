/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

// ndau address related fields
const HARDENED_CHILD_BIP_44 = 44
const ACCOUNT_CREATION_KEY_CHILD = 100
const VALIDATION_KEY = 10000
const LEGACY_VALIDATION_KEY = 2000
const NDAU_CONSTANT = 20036 // which is 0x4e44 in hex, which are the two letters ND in ASCII

// Network settings
const MAINNET = 'mainnet'
const DEVNET = 'devnet'
const TESTNET = 'testnet'

// AsyncStorage variables
const LAST_SCREEN_FOCUSED = 'bwLastScreenFocused'
const APPLICATION_NETWORK = 'bwApplicationNetwork'

// Comon UI Colors
const TEXT_COLOR = '#FFFFFF'
const DRAWER_ICON_COLOR = '#4B9176'
const WARNING_ICON_COLOR = '#F05123'
const BACKGROUND_COLOR = '#15232A'

// Application specific properties
const APP_LANGUAGE = 'en'

export default {
  HARDENED_CHILD_BIP_44,
  ACCOUNT_CREATION_KEY_CHILD,
  VALIDATION_KEY,
  LEGACY_VALIDATION_KEY,
  NDAU_CONSTANT,
  MAINNET,
  TESTNET,
  DEVNET,
  LAST_SCREEN_FOCUSED,
  APPLICATION_NETWORK,
  TEXT_COLOR,
  DRAWER_ICON_COLOR,
  APP_LANGUAGE,
  WARNING_ICON_COLOR,
  BACKGROUND_COLOR
}
