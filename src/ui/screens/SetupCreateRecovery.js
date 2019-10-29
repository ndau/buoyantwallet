import React from 'react'
import I18n from '@src/i18n'
import CreateRecovery from '@src/ui/components/CreateRecovery'
import { withSafeDarkView } from './BaseScreen'
import { CryptoStore, DataFormatHelper, SetupStore } from 'ndaujs'
import Base64 from 'base-64'
import AppConstants from '@src/data/constants/AppConstants'

const _ = require('lodash')

class SetupCreateRecovery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      spinner: false,
      recoveryPhrase: []
    }

    this.shuffledWords = []
  }

  componentDidMount = async () => {
    const secureRandom = await CryptoStore.default.generateRandom(16)
    const secureRandomString = String.fromCharCode.apply(null, secureRandom)
    const base64Value = Base64.encode(secureRandomString)

    const seeds = await Keyaddr.wordsFromBytes(
      AppConstants.APP_LANGUAGE,
      base64Value
    )
    const seedBytes = await Keyaddr.wordsToBytes(
      AppConstants.APP_LANGUAGE,
      seeds
    )
    if (!_(seedBytes).isEqual(base64Value)) {
      console.error('Seeds are not the same from Keyaddr')
    } else {
      console.log(`the seedBytes and entropy are equal.`)
    }
    const recoveryPhrase = seeds.split(/\s+/g)
    this.setState({ recoveryPhrase: recoveryPhrase })
  }

  handleWordClick = () => {}

  next = () => {
    SetupStore.recoveryPhrase = this.state.recoveryPhrase
    this.props.navigation.navigate('SetupVerifyRecovery')
  }

  render () {
    const words = DataFormatHelper.default.groupArrayIntoRows(
      this.state.recoveryPhrase,
      3
    )

    return (
      <CreateRecovery
        {...this.props}
        {...this.state}
        next={this.next}
        words={words}
      />
    )
  }
}

export default withSafeDarkView(SetupCreateRecovery, I18n.t('setup'), true)
