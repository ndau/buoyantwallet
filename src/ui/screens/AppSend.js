import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import Send from '@src/ui/components/Send'

class AppSend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return <Send {...this.props} {...this.state} />
  }
}

export default withSafeDarkView(AppSend, I18n.t('send'), true)
