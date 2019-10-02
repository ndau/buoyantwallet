import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import NavigationHelpers from '@src/ui/helpers/NavigationHelpers'
import { TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'
import { faBell } from '@fortawesome/pro-solid-svg-icons'

class Overview extends React.Component {
  constructor (props) {
    super(props)

    NavigationHelpers.setupNavigationFocusListener(props.navigation)
  }

  render () {
    return <View />
  }
}

export default withSafeDarkView(
  Overview,
  I18n.t('overview'),
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faArrowLeft} size={28} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>,
  <TouchableWithoutFeedback>
    <FontAwesomeIcon icon={faBell} size={24} style={{ color: 'white' }} />
  </TouchableWithoutFeedback>
)
