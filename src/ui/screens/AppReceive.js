import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import Receive from '@src/ui/components/Receive'

class AppReceive extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    SettingsStore.addListener(this.updateSettings)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  render () {
    return <Receive />
  }
}

export default withSafeDarkView(AppReceive, I18n.t('receive'))
