import React from 'react'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import LoggerHelper from 'ndaujs/src/helpers/LoggerHelper'
import WalletOverview from '@src/ui/components/WalletOverview'
import UserStore from 'ndaujs/src/stores/UserStore'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import NdauStore from 'ndaujs/src/stores/NdauStore'
import WalletStore from 'ndaujs/src/stores/WalletStore'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import UserData from 'ndaujs/src/model/UserData'
import FlashNotification from '../components/FlashNotification'
import { View } from 'react-native'
import WaitSpinner from './WaitSpinner'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faPlusSquare,
  faArrowSquareRight
} from '@fortawesome/pro-light-svg-icons'

const l = LoggerHelper.curryLogger('AppWalletOverview')

class AppWalletOverview extends React.Component {
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

    this.setState({ spinner: true }, async () => {
      await this._loadMetricsAndSetState(user)
    })
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
      accounts,
      spinner: false
    })
  }

  gotoAccount = wallet => {
    WalletStore.setWallet(wallet)
    this.props.navigation.navigate('AppAccountOverview')
  }

  render () {
    try {
      const user = UserStore.getUser()
      const wallets = Object.values(user.wallets)

      return (
        <View>
          <WaitSpinner
            label={I18n.t('talking-to-blockchain')}
            spinner={this.state.spinner}
          />
          <WalletOverview
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
            wallets={wallets}
            gotoAccount={this.gotoAccount}
          />
        </View>
      )
    } catch (error) {
      FlashNotification.showError(error)
    }
  }
}

export default withSafeDarkView(
  AppWalletOverview,
  I18n.t('walletoverview'),
  true,
  false
)
