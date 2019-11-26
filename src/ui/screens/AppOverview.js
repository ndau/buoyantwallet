import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import Overview from '@src/ui/components/Overview'

const l = LoggerHelper.curryLogger('AppOverview')

class AppOverview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return <Overview {...this.props} {...this.state} />
  }
}

export default withSafeDarkView(AppOverview, I18n.t('overview'), true, false)
