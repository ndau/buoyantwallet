import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import Send from '@src/ui/components/Send'

class AppSend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}

    SettingsStore.addListener(this.updateSettings)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  render () {
    return <Send />
  }
}

export default withSafeDarkView(AppSend, I18n.t('send'))
