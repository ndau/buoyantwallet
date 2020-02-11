/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React, { Component } from 'react'
import { showMessage, hideMessage } from 'react-native-flash-message'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'

const _ = require('lodash')
const l = LoggerHelper.curryLogger('FlashNotifcation')

class FlashNotification extends Component {
  static showError (message) {
    if (_.isError(message) && message.message) {
      const errorMessage = message.message
      showMessage({
        errorMessage
      })
      l.error(message)
    } else if (message) {
      showMessage({
        message
      })
      l.debug(message)
    }
  }

  static hideMessage () {
    hideMessage()
  }
}

export default FlashNotification
