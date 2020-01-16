import React from 'react'
import {
  Platform,
  Picker,
  KeyboardAvoidingView,
  Text,
  Alert
} from 'react-native'
import I18n from '@src/i18n'
import { withSafeDarkView } from './BaseScreen'
import TransferTransaction from 'ndaujs/src/transactions/TransferTransaction'
import DataFormatHelper from 'ndaujs/src/api/helpers/DataFormatHelper'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import Wallet from 'ndaujs/src/model/Wallet'
import WalletStore from 'ndaujs/src/stores/WalletStore'
import FlashNotification from '../../ui/components/FlashNotification'
import WaitSpinner from './WaitSpinner'
import styled from 'styled-components'
import { RNCamera } from 'react-native-camera'
import BarcodeMask from 'react-native-barcode-mask'

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

const SectionPrompt = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-family: OpenSans-Regular;
  color: #000;
  font-size: 18px;
`

const AccountAddressInput = styled.TextInput`
  overflow: visible;
  width: 100%;
  min-height: 48px;
  min-width: auto;
  margin-bottom: 0px;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  align-self: center;
  flex: 0 auto;
  border: 1px solid #e4e9f2;
  border-radius: 4px;
  background-color: #f7f9fc;
  font-family: OpenSans-Regular;
  color: #8f9bb3;
  font-size: 15px;
  flex-direction: row;
  flex-grow: 1;
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

const InvertedOrangeButton = styled.Text`
  padding: 3.2% 5%;
  background-color: #fff;
  color: #f99d1c;
  border: 2px solid #f99d1c;
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

const DarkText = styled.Text`
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: center;
  font-family: OpenSans-SemiBold;
  color: #fff;
  font-size: 18px;
  flex-direction: row;
  margin: 5% 0;
`

const InputLabel = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-family: OpenSans-Regular;
  color: #000;
  font-size: 16px;
`

const TableRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`

const CellLabel = styled.Text`
  font-family: OpenSans-SemiBold;
  color: #455b82;
`

const CellValue = styled.Text`
  font-family: OpenSans-Regular;
  font-size: 14px;
`

const SectionHeader = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  font-family: OpenSans-SemiBold;
  color: #000;
  font-size: 18px;
`

class AppSend extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fromAccount: '',
      toAccount: '',
      amount: 0,
      transactionFee: 0,
      sibFee: 0,
      total: 0,
      canProceed: false,
      wallet: new Wallet().fromObject(WalletStore.getWallet())
    }
  }

  scanSuccess (evt) {
    if (evt.data.substr(0, 2) === 'nd') {
      this.setState({
        toAccount: evt.data,
        scanning: false,
        validAddress: true
      })
    } else {
      FlashNotification.showError('QR code is not a valid ndau address')
    }
  }

  _send () {
    this.setState({ spinner: true }, async () => {
      try {
        const transferTransaction = new TransferTransaction(
          Object.assign({}, this.state.wallet), // convert to plain object
          this.state.wallet.accounts[this.state.fromAccount],
          this.state.toAccount,
          this.state.amount
        )
        await transferTransaction.createSignPrevalidateSubmit()

        this.props.navigation.navigate('AppWalletOverview', {
          refresh: true
        })
      } catch (error) {
        FlashNotification.showError(
          `An error occurred while attempting to send ndau ${error.message}`
        )
      }

      this.setState({ spinner: false })
    })
  }

  send () {
    Alert.alert(
      'Confirm',
      `Send ${this.state.amount} ndau?`,
      [
        {
          text: 'Yes',
          onPress: () => {
            this._send()
          }
        },
        { text: 'No', style: 'cancel' }
      ],
      { cancelable: true }
    )
  }

  fetchTransactionFees () {
    if (!(this.state.toAccount && this.state.fromAccount)) {
      return
    }
    // If we don't have a number or if the amount is zero then
    // we should short circuit here as there is nothing to
    // calculate
    if (isNaN(this.state.amount) || this.state.amount === 0) return

    this.setState({ spinner: true }, async () => {
      let transactionFee = 0
      let sibFee = 0
      let total = this.state.total
      let canProceedFromAmount = this.state.canProceedFromAmount
      try {
        const transferTransaction = new TransferTransaction(
          Object.assign({}, this.state.wallet), // convert to plain object
          this.state.wallet.accounts[this.state.fromAccount],
          this.state.toAccount,
          this.state.amount
        )
        await transferTransaction.create()
        await transferTransaction.sign()
        const prevalidateData = await transferTransaction.prevalidate()
        if (prevalidateData.fee_napu) {
          transactionFee = DataFormatHelper.getNdauFromNapu(
            prevalidateData.fee_napu
          )
        }
        if (prevalidateData.sib_napu) {
          sibFee = DataFormatHelper.getNdauFromNapu(prevalidateData.sib_napu)
        }
        total = AccountAPIHelper.getTotalNdauForSend(
          Number(this.state.amount),
          Number(transactionFee),
          sibFee
        )
        canProceedFromAmount = true
      } catch (error) {
        // Check to see if fee and sib info are passed back so they can be displayed.
        if (error.error.response && error.error.response.data) {
          const resp = error.error.response.data
          if (resp.sib_napu) {
            sibFee = DataFormatHelper.getNdauFromNapu(resp.sib_napu)
          }
          if (resp.fee_napu) {
            transactionFee = DataFormatHelper.getNdauFromNapu(resp.fee_napu)
          }
          if (resp.sib_napu && resp.fee_napu) {
            total = AccountAPIHelper.getTotalNdauForSend(
              Number(this.state.amount),
              Number(transactionFee),
              sibFee
            )
          }
        }
        canProceedFromAmount = false
        FlashNotification.showError(
          `Error occurred while sending ndau: ${error.message}`
        )
      }

      this.setState({
        spinner: false,
        transactionFee,
        sibFee,
        total,
        canProceedFromAmount
      })
    })
  }

  render () {
    const {
      fromAccount,
      scanning,
      transactionFee,
      toAccount,
      sibFee,
      total,
      canProceedFromAmount
    } = this.state

    const formFilled = fromAccount && toAccount
    const eligibleAccounts = Object.keys(this.state.wallet.accounts).filter(
      acctKey => {
        const acct = this.state.wallet.accounts[acctKey]
        const accountData = acct.addressData
        const isAccountLocked = AccountAPIHelper.isAccountLocked(accountData)
        let spendable = 0
        if (!isAccountLocked) {
          spendable = AccountAPIHelper.spendableNdau(accountData, true)
        }
        if (spendable === 0) {
          return false
        }
        return true
      }
    )

    return (
      <Body>
        <WaitSpinner
          label={I18n.t('talking-to-blockchain')}
          spinner={this.state.spinner}
        />
        <LightSectionScroller>
          <LightSection>
            <SectionPrompt>Which account are you sending from?</SectionPrompt>
            <Picker
              selectedValue={fromAccount}
              style={{ height: 50 }}
              onValueChange={acct => {
                this.setState({ fromAccount: acct }, () => {
                  this.fetchTransactionFees()
                })
              }}
            >
              <Picker.Item
                key='p00'
                label='Please select an account'
                enabled={false}
              />
              {eligibleAccounts.map((acctKey, i) => {
                const acct = this.state.wallet.accounts[acctKey]
                const accountData = acct.addressData
                const balance = new NdauNumber(accountData.balance).toDetail()
                const addrAbrv = acct.address.substr(acct.address.length - 4)
                return (
                  <Picker.Item
                    key={`p${i}`}
                    label={`Account ${addrAbrv} - ${balance}`}
                    value={acct.address}
                  />
                )
              })}
            </Picker>
            <SectionPrompt>Which account are you sending to?</SectionPrompt>
            <KeyboardAvoidingView
              keyboardVerticalOffset={Platform.OS === 'android' ? -20 : 50}
              behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            >
              <InputLabel>Address</InputLabel>
              <AccountAddressInput
                onChangeText={addr => {
                  this.setState({ toAccount: addr }, () => {
                    this.fetchTransactionFees()
                  })
                }}
                value={this.state.toAccount}
              />
            </KeyboardAvoidingView>
            <InvertedOrangeButton
              onPress={() => {
                this.setState({ scanning: true })
              }}
            >
              Scan QR Code
            </InvertedOrangeButton>
            {scanning ? (
              <RNCamera onBarCodeRead={evt => this.scanSuccess(evt)}>
                <BarcodeMask
                  width={250}
                  height={250}
                  showAnimatedLine={false}
                />
              </RNCamera>
            ) : null}
            <KeyboardAvoidingView
              keyboardVerticalOffset={Platform.OS === 'android' ? -20 : 50}
              behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
            >
              <InputLabel>Amount</InputLabel>
              <AccountAddressInput
                onChangeText={amount => {
                  this.setState({
                    amount
                  })
                }}
                onSubmitEditing={() => {
                  this.fetchTransactionFees()
                }}
                value={this.state.amount}
              />
            </KeyboardAvoidingView>
            <SectionHeader>Fees</SectionHeader>
            <TableRow>
              <CellLabel>Transaction fee</CellLabel>
              <CellValue>{transactionFee}</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>SIB fee</CellLabel>
              <CellValue>{sibFee}</CellValue>
            </TableRow>
            <TableRow>
              <CellLabel>Total</CellLabel>
              <CellValue>{total}</CellValue>
            </TableRow>
            {formFilled && canProceedFromAmount ? (
              <OrangeButton
                onPress={() => {
                  this.send()
                }}
              >
                Send
              </OrangeButton>
            ) : (
              <Text>Not enough ndau in this account to proceed.</Text>
            )}
          </LightSection>
        </LightSectionScroller>
      </Body>
    )
  }
}

export default withSafeDarkView(AppSend, I18n.t('send'), true, null, null, true)
