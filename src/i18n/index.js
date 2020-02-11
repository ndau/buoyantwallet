/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import I18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './locales/en'

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag
}

I18n.fallbacks = true
I18n.translations = {
  en
}

export default I18n
