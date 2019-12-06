import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import Receive from '@src/ui/components/Receive'
import { ScrollView } from 'react-native-gesture-handler'

class AppReceive extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='always'
      >
        <Receive {...this.props} {...this.state} />
      </ScrollView>
    )
  }
}

export default withSafeDarkView(AppReceive, I18n.t('receive'), true)
