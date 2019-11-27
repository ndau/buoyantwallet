import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import Overview from '@src/ui/components/Overview'
import UserStore from 'ndaujs/src/stores/UserStore'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import NdauStore from 'ndaujs/src/stores/NdauStore'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import UserData from 'ndaujs/src/model/UserData'
import FlashNotification from '../components/FlashNotification'

const l = LoggerHelper.curryLogger('AppOverview')

class AppOverview extends React.Component {
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
    const user = UserStore.getUser()

    l.debug(`User to be drawn: ${JSON.stringify(user)}`)

    await this._loadMetricsAndSetState(user)
  }

  _loadMetricsAndSetState = async user => {
    try {
      await UserData.loadUserData(user)
    } catch (error) {
      l.error(error)
    }

    const accounts = DataFormatHelper.getObjectWithAllAccounts(user)
    l.debug(`accounts ${JSON.stringify(accounts)}`)
    const totalNdau = new NdauNumber(
      AccountAPIHelper.accountTotalNdauAmount(accounts)
    ).toDetail()
    l.debug(`totalNdau: ${totalNdau}`)

    const totalNdauNumber = AccountAPIHelper.accountTotalNdauAmount(
      accounts,
      false
    )
    l.debug(`totalNdauNumber: ${totalNdauNumber}`)

    const totalSpendableNdau = new NdauNumber(
      AccountAPIHelper.totalSpendableNdau(accounts, totalNdauNumber)
    ).toSummary()
    l.debug(`totalSpendableNdau: ${totalSpendableNdau}`)

    const currentPrice = AccountAPIHelper.currentPrice(
      NdauStore.getMarketPrice(),
      totalNdauNumber
    )
    l.debug(`currentPrice: ${currentPrice}`)

    this.setState({
      refreshing: false,
      currentPrice,
      totalNdau,
      totalSpendableNdau,
      accounts
    })
  }

  render () {
    return (
      <Overview
        {...this.props}
        {...this.state}
        marketPrice={NdauStore.getMarketPrice()}
      />
    )
  }
}

export default withSafeDarkView(AppOverview, I18n.t('overview'), true, false)
