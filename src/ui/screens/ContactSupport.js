import React, { Component } from 'react'
import { CheckBox } from '@src/ui/components'
import axios from 'axios'
import I18n from '@src/i18n'
import { View, Text, TextInput, Button } from 'react-native'
import { withSafeDarkView } from './BaseScreen'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import AppConfig from '@src/data/config/AppConfig'
import WaitSpinner from './WaitSpinner'
import FlashNotification from '../components/FlashNotification'

const l = LoggerHelper.curryLogger('ContactSupport')

class ContactSupport extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      description: '',
      includeLogs: true,
      sent: false,
      emailStatus: 'normal',
      sending: false
    }
    props.navigation.addListener('didBlur', FlashNotification.hideMessage)
  }

  onBack () {
    this.props.navigation.navigate('Authentication')
  }

  validate () {
    const msgs = []
    if (!this.state.email.match(/.@.*\.../) || this.state.email.length < 6) {
      msgs.push('enter a valid email address')
    }
    if (
      this.state.description.length < 10 ||
      this.state.description.length > 1000
    ) {
      msgs.push('provide a description between 10 and 1024 characters')
    }
    return msgs
  }

  onSubmit () {
    // do this last
    defered = () => this.setState({ sending: false })

    // bounce if we're already sending, if not set flag
    if (this.state.sending) {
      defered()
      return
    } else {
      this.setState({ sending: true })
    }

    // validate the fields
    validateResult = this.validate()
    if (validateResult.length) {
      defered()
      FlashNotification.showError(
        `Please correct the following: ${validateResult.join(', ')}`
      )
      return
    }

    const logs = this.state.includeLogs ? LoggerHelper.getLogData() : []
    const ax = axios.create({
      headers: { 'x-api-key': AppConfig.FRESHDESK_INTEGRATION_API_KEY }
    })
    ax.post(AppConfig.FRESHDESK_TICKET_ENDPOINT, {
      email: this.state.email,
      description: this.state.description,
      logs: logs._array
    })
      .then(response => {
        this.setState({ sent: true })
        l.debug('support message sent')
      })
      .catch(error => {
        let msg = error.message
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          msg = error.response.data.message
        }
        FlashNotification.showError(`Message could not be sent: ${msg}`)
        l.debug(error)
      })
      .finally(defered)
  }

  render () {
    const { includeLogs, sent, description, email, sending } = this.state
    const sendDisabled = sending // don't let'em press send when already sending
    return (
      <View>
        <WaitSpinner spinner={this.state.sending} label='Sending...' />
        <View>
          <TextInput
            onChangeText={value => {
              this.setState({ email: value })
            }}
            value={email}
            placeholder='Email'
          />
          <TextInput
            multiline
            height={92}
            numberOfLines={4}
            onChangeText={value => this.setState({ description: value })}
            value={description}
            placeholder='Description (between 10-1000 characters)'
          />
          <Button
            onPress={() => {
              this.onSubmit()
            }}
            title='Send message'
          />
          <Text style={{ marginTop: '4%' }} />
          <CheckBox
            onValueChange={value => this.setState({ includeLogs: value })}
            checked={includeLogs}
            label='Attach diagnostic data *'
          />
          <Text>
            * The attached data does NOT contain any private keys and contains
            NO secret information (e.g., your wallet passwords or recovery
            phrase). The data contains basic state information about your wallet
            and accounts, and is by default, included in your support request to
            help us debug any issues you might be having with your wallet app.
          </Text>
        </View>
      </View>
    )
  }
}

export default withSafeDarkView(
  ContactSupport,
  I18n.t('contactsupport'),
  true,
  true
)
