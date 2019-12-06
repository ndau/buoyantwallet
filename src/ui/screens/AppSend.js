import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import Send from '@src/ui/components/Send'
import { ScrollView } from 'react-native-gesture-handler'

class AppSend extends React.Component {
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
        <Send {...this.props} {...this.state} />
      </ScrollView>
    )
  }
}

export default withSafeDarkView(AppSend, I18n.t('send'), true)
