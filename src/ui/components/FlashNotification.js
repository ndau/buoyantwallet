import React, { Component } from 'react'
import { showMessage, hideMessage } from 'react-native-flash-message'

const _ = require('lodash')

class FlashNotification extends Component {
  static showError (message) {
    if (_.isError(message) && message.message) {
      const errorMessage = message.message
      showMessage({
        errorMessage
      })
      console.error(message)
    } else if (message) {
      showMessage({
        message
      })
      console.log(message)
    }
  }

  static hideMessage () {
    hideMessage()
  }
}

export default FlashNotification
