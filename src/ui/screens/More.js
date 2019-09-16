import React from 'react'
import SettingsStore from '@src/data/stores/SettingsStore'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'

class More extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      applicationNetwork: SettingsStore.getApplicationNetwork()
    }

    SettingsStore.addListener(this.updateSettings)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  updateSettings = settings => {
    this.setState({ applicationNetwork: settings.applicationNetwork })
  }

  render () {
    return null
  }
}

export default withSafeDarkView(More, I18n.t('more'))
