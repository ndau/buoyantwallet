import React from 'react'
import I18n from '@src/i18n'
import VerifyRecovery from '@src/ui/components/VerifyRecovery'
import { withSafeDarkView } from './BaseScreen'
import { DataFormatHelper, SetupStore } from 'ndaujs'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'

class SetupVerifyRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false,
      selectedItems: []
    }
  }

  handleWordClick = index => {
    const selected = this.state.selectedItems.slice()
    const foundIndex = selected.indexOf(index)
    if (foundIndex !== -1) {
      // already selected item was clicked
      selected.splice(foundIndex, 1)
      this.setState({ selectedItems: selected })
    } else if (!this.state.inError) {
      selected.push(index)
      this.setState({ selectedItems: selected }, this.afterClick(selected))
    }
  }

  afterClick = selectedItems => {
    if (selectedItems.length === SetupStore.recoveryPhrase.length) {
      this.props.navigation.navigate('SetupVerifyConfirmRecovery')
    }
  }

  next = () => {}

  render () {
    const words = DataFormatHelper.default.groupArrayIntoRows(
      SetupStore.recoveryPhrase,
      3
    )
    const selected = DataFormatHelper.default.groupArrayIntoRows(
      this.state.selectedItems,
      3
    )

    return (
      <View>
        <WaitSpinner
          spinner={this.state.spinner}
          label={I18n.t('talking-to-blockchain')}
        />
        <VerifyRecovery
          {...this.props}
          {...this.state}
          next={this.next}
          words={words}
          selectedItems={selected}
          handleWordClick={this.handleWordClick}
        />
      </View>
    )
  }
}

export default withSafeDarkView(SetupVerifyRecovery, I18n.t('setup'), true)
