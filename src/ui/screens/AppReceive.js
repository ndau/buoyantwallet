import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import Receive from '@src/ui/components/Receive'

class AppReceive extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return <Receive {...this.props} {...this.state} />
  }
}

export default withSafeDarkView(AppReceive, I18n.t('receive'), true)
