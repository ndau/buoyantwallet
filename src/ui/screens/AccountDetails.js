import React, { Component } from 'react'
import { Share, Linking, Alert } from 'react-native'
import { withSafeDarkView } from './BaseScreen'
import styled from 'styled-components'
import NotifyTransaction from 'ndaujs/src/transactions/NotifyTransaction'
import WalletStore from 'ndaujs/src/stores/WalletStore'
import UserStore from 'ndaujs/src/stores/UserStore'
import UserData from 'ndaujs/src/model/UserData'
import KeyMaster from 'ndaujs/src/helpers/KeyMaster'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import DateHelper from 'ndaujs/src/helpers/DateHelper'
import WaitSpinner from './WaitSpinner'
import I18n from '@src/i18n'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faLockOpen,
  faLock,
  faExclamationCircle
} from '@fortawesome/pro-solid-svg-icons'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import FlashNotification from '../components/FlashNotification'

const Body = styled.View`
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: baseline;
  background-color: #15232a;
  text-align: left;
`

const LightSectionScroller = styled.ScrollView`
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const LightSection = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0%;
  margin-bottom: 50px;
  padding: 8% 3%;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-self: stretch;
  flex: auto;
`

const DarkSection = styled.View`
  display: flex;
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 0%;
  padding-right: 2%;
  padding-left: 2%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: flex-start;
  align-self: center;
  flex: 0 auto;
`

const DarkLabel = styled.Text`
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: center;
  font-family: OpenSans-SemiBold;
  color: #fff;
  font-size: 14px;
  flex-direction: row;
  text-transform: uppercase;
`

const DarkValue = styled.Text`
  display: flex;
  margin: 5% 2%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-self: center;
  font-family: OpenSans-Regular;
  color: #8cc74f;
  font-size: 28px;
  text-shadow: 0 0 5px #4e957a;
`

const OrangeButton = styled.Text`
  padding: 3.2% 5%;
  background-color: #f99d1c;
  color: #fff;
  border: 0;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  width: 100%;
  max-height: 48px;
  min-height: 48px;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex: 0 auto;
  font-family: OpenSans-Bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`

const SecondaryButton = styled.Text`
  padding: 3.2% 5%;
  background-color: #def9f0;
  color: #2d9778;
  border: 1px solid #2d9778;
  text-decoration: none;
  border-radius: 4px;
  font-family: OpenSans-Bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`

const TableRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`

const iconStyles = {
  marginRight: 10
}

const LockRow = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5px 0;
  justify-content: flex-start;
  align-items: center;
`

const LockWord = styled.Text`
  font-family: OpenSans-SemiBold;
`

const SectionHeader = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-family: OpenSans-Regular;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
`

const BorderedWrapper = styled.View`
  margin: 14px;
`

const BorderedSection = styled.View`
  padding: 10px;
  border: 1px solid #455b82;
  border-radius: 4px;
  font-family: OpenSans-SemiBold;
`

const CellValue = styled.Text`
  font-family: OpenSans-Regular;
  font-size: 14px;
`

const BorderedBox = props => {
  return (
    <BorderedWrapper>
      <BorderedSection>{props.children}</BorderedSection>
    </BorderedWrapper>
  )
}

const CellLabel = styled.Text`
  font-family: OpenSans-SemiBold;
  color: #455b82;
`

const AddressLabel = styled.Text`
  font-family: OpenSans-SemiBold;
  color: #000;
`

const calcExplorerURL = address =>
  `https://explorer.ndau.tech/account/${address}?node=mainnet`

class AccountDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: this.props.navigation.state.params.address || '',
      wallet: this.props.navigation.state.params.wallet
    }
  }

  share () {
    Share.share(
      {
        message: this.state.address,
        title: 'ndau address',
        url: '/'
      },
      {
        dialogTitle: 'ndau address'
      }
    )
  }

  async notify () {
    const wallet = this.state.wallet
    const account = this.state.wallet.accounts[this.state.address]
    Alert.alert(
      'Unlock countdown',
      'The unlock countdown will be started. The account will not be able to send or receive ndau until the countdown ends.',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: async () => {
            this.setState({ spinner: true })

            // First send out the Notify
            const notifyTransaction = new NotifyTransaction(wallet, account)
            await notifyTransaction.createSignPrevalidateSubmit()

            try {
              // Ok now we have to refresh data on this page
              // So get the user from the store and load
              const user = UserStore.getUser()

              await UserData.loadUserData(user)

              const newWallet = KeyMaster.getWalletFromUser(
                user,
                wallet.walletId
              )
              WalletStore.setWallet(newWallet)
              this.setState({ wallet: newWallet })
            } catch (error) {
              FlashNotification.showError(error.message)
            } finally {
              this.setState({
                spinner: false
              })
            }
          }
        }
      ],
      { cancelable: false }
    )
  }

  render () {
    const { address, wallet } = this.state
    const accountData = wallet.accounts[address].addressData
    const balance = accountData
      ? new NdauNumber(accountData.balance).toDetail()
      : '...'
    const WAA = AccountAPIHelper.weightedAverageAgeInDays(accountData)
    const lockBonus = AccountAPIHelper.lockBonusEAI(
      DateHelper.getDaysFromISODate(
        accountData && accountData.lock ? accountData.lock.noticePeriod : 0
      )
    )
    const EAISentTo = AccountAPIHelper.sendingEAITo(accountData)
    const currentEAI = AccountAPIHelper.eaiValueForDisplay(accountData)
    const isAccountLocked = AccountAPIHelper.isAccountLocked(accountData)
    const accountLockedUntil = AccountAPIHelper.accountLockedUntil(accountData)
    let spendable = 0
    if (!isAccountLocked) {
      spendable = AccountAPIHelper.spendableNdau(accountData, true)
    }
    const spendableNdau = new NdauNumber(spendable).toDetail()

    return (
      <Body>
        <WaitSpinner
          label={I18n.t('talking-to-blockchain')}
          spinner={this.state.spinner}
        />
        <DarkSection>
          <DarkLabel>Total ndau</DarkLabel>
          <DarkValue>{balance}</DarkValue>
        </DarkSection>
        <LightSectionScroller>
          <LightSection>
            <SectionHeader>Account Status</SectionHeader>
            {isAccountLocked ? (
              <LockRow>
                <FontAwesomeIcon
                  style={iconStyles}
                  size={24}
                  icon={faLock}
                  color='#2D9778'
                />
                <LockWord>Locked</LockWord>
              </LockRow>
            ) : (
              <LockRow>
                <FontAwesomeIcon
                  style={iconStyles}
                  size={24}
                  icon={faLockOpen}
                  color='#2D9778'
                />
                <LockWord>Unlocked</LockWord>
              </LockRow>
            )}

            {isAccountLocked && accountLockedUntil ? (
              <LockRow>
                <FontAwesomeIcon
                  style={iconStyles}
                  size={24}
                  icon={faExclamationCircle}
                  color='#F99D1C'
                />
                <LockWord>You cannot send or receive</LockWord>
              </LockRow>
            ) : null}

            {isAccountLocked && !accountLockedUntil ? (
              <LockRow>
                <FontAwesomeIcon
                  style={iconStyles}
                  size={24}
                  icon={faExclamationCircle}
                  color='#F99D1C'
                />
                <LockWord>You cannot send</LockWord>
              </LockRow>
            ) : null}

            {!isAccountLocked ? (
              <OrangeButton>Lock Account</OrangeButton>
            ) : null}
            {isAccountLocked && !accountLockedUntil ? (
              <OrangeButton>Start Countdown Timer</OrangeButton>
            ) : null}

            <SectionHeader>Account Status</SectionHeader>
            {isAccountLocked && accountLockedUntil ? (
              <TableRow>
                <CellLabel>Will unlock</CellLabel>
                <CellValue>{accountLockedUntil}</CellValue>
              </TableRow>
            ) : null}
            <TableRow>
              <CellLabel>Weighted Average Age(WAA):</CellLabel>
              <CellValue>{WAA} days</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>Current EAI based on WAA:</CellLabel>
              <CellValue>{currentEAI}%</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>Lock bonus EAI:</CellLabel>
              <CellValue>{lockBonus}%</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>EAI being sent to:</CellLabel>
              <CellValue>{EAISentTo}</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>Spendable ndau:</CellLabel>
              <CellValue>{spendableNdau}</CellValue>
            </TableRow>
            <SectionHeader>Address</SectionHeader>
            <BorderedBox>
              <TableRow>
                <AddressLabel
                  style={{ textDecoration: 'underline' }}
                  onPress={() => Linking.openURL(calcExplorerURL(address))}
                >
                  {`${address.substr(0, 25)}...`}
                </AddressLabel>
                <SecondaryButton onPress={() => this.share()}>
                  Share
                </SecondaryButton>
              </TableRow>
            </BorderedBox>
          </LightSection>
        </LightSectionScroller>
      </Body>
    )
  }
}

export default withSafeDarkView(
  AccountDetails,
  'Account details',
  true,
  null,
  'AppAccountOverview',
  null
)
