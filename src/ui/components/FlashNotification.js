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
