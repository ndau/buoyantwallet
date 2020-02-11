/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

import React from 'react'
import I18n from '@src/i18n'
import CreateRecovery from '@src/ui/components/CreateRecovery'
import { withSafeDarkView } from './BaseScreen'
import CryptoStore from 'ndaujs/src/stores/CryptoStore'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import SetupStore from 'ndaujs/src/stores/SetupStore'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import Base64 from 'base-64'
import AppConstants from '@src/data/constants/AppConstants'

const l = LoggerHelper.curryLogger('SetupCreateRecovery')

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
    const secureRandom = await CryptoStore.generateRandom(16)
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
      l.error('Seeds are not the same from Keyaddr')
    } else {
      l.debug(`the seedBytes and entropy are equal.`)
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
    const words = DataFormatHelper.groupArrayIntoRows(
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
