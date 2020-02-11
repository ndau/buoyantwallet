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
import { withSafeDarkView } from './BaseScreen'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import AccountOverview from '@src/ui/components/AccountOverview'
import WalletStore from 'ndaujs/src/stores/WalletStore'
import UserStore from 'ndaujs/src/stores/UserStore'
import UserData from 'ndaujs/src/model/UserData'
import MultiSafeHelper from 'ndaujs/src/helpers/MultiSafeHelper'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import KeyMaster from 'ndaujs/src/helpers/KeyMaster'
import NdauStore from 'ndaujs/src/stores/NdauStore'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import FlashNotification from '../components/FlashNotification'
import { RefreshControl, ScrollView } from 'react-native'
import WaitSpinner from './WaitSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faPlusSquare,
  faArrowSquareRight
} from '@fortawesome/pro-light-svg-icons'

const l = LoggerHelper.curryLogger('AppAccountOverview')

class AppAccountOverview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      refreshing: false,
      currentPrice: 0,
      totalNdau: 0,
      totalSpendableNdau: 0,
      accounts: {},
      spinner: false
    }
    props.navigation.addListener('didBlur', FlashNotification.hideMessage)
  }

  componentDidMount = async () => {
    await this.onRefresh()
  }

  onRefresh = async () => {
    if (this.state.refreshing) return

    FlashNotification.hideMessage()
    this.setState({ refreshing: true, spinner: true }, async () => {
      const user = UserStore.getUser()

      let wallet = WalletStore.getWallet()
      try {
        await UserData.loadUserData(user)
        WalletStore.setWallet(
          user.wallets[DataFormatHelper.create8CharHash(wallet.walletId)]
        )
        this._loadMetricsAndSetState(WalletStore.getWallet())
      } catch (error) {
        l.error(error)
        FlashNotification.showError(error)
      }

      this.setState({ refreshing: false, spinner: false })
    })
  }

  addNewAccount = async () => {
    try {
      const newWallet = await KeyMaster.createNewAccount(
        WalletStore.getWallet(),
        1
      )
      KeyMaster.setWalletInUser(UserStore.getUser(), newWallet)
      WalletStore.setWallet(newWallet)

      await MultiSafeHelper.saveUser(
        UserStore.getUser(),
        UserStore.getPassword()
      )

      this.setState({ showFeesModal: true })
    } catch (error) {
      FlashNotification.showError(
        `Problem adding new account: ${error.message}`
      )
      l.error(error)
    }
  }

  gotoAccountDetails = account => {
    // GOTO the account details page
  }

  _loadMetricsAndSetState = wallet => {
    if (wallet) {
      totalNdau = new NdauNumber(
        AccountAPIHelper.accountTotalNdauAmount(wallet.accounts)
      ).toDetail()
      totalNdauNumber = new NdauNumber(
        AccountAPIHelper.accountTotalNdauAmount(wallet.accounts, false)
      ).toDetail()
      totalSpendable = new NdauNumber(
        AccountAPIHelper.totalSpendableNdau(wallet.accounts, totalNdauNumber)
      ).toSummary()
    } else {
      totalNdau = '0'
      totalNdauNumber = '0'
      totalSpendable = '0'
    }
    const currentPrice = AccountAPIHelper.currentPrice(
      NdauStore.getMarketPrice(),
      totalNdauNumber
    )

    this.setState({
      refreshing: false,
      currentPrice,
      totalNdau,
      totalSpendable,
      spinner: false
    })
  }

  render () {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='always'
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <WaitSpinner
          label={I18n.t('talking-to-blockchain')}
          spinner={this.state.spinner}
        />
        <AccountOverview
          {...this.props}
          {...this.state}
          marketPrice={NdauStore.getMarketPrice()}
          plusSquareIcon={
            <FontAwesomeIcon
              icon={faPlusSquare}
              size={28}
              style={{
                color: '#F99D1C'
              }}
            />
          }
          arrowSquareRightIcon={
            <FontAwesomeIcon
              icon={faArrowSquareRight}
              size={28}
              style={{
                color: '#F99D1C'
              }}
            />
          }
          addNewAccount={this.addNewAccount}
          wallet={WalletStore.getWallet()}
          gotoAccountDetails={this.gotoAccountDetails}
        />
      </ScrollView>
    )
  }
}

export default withSafeDarkView(
  AppAccountOverview,
  I18n.t('accountoverview'),
  true,
  false
)
