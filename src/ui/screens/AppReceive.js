import React from 'react'
import { Picker, View, Text, Linking } from 'react-native'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'
import Wallet from 'ndaujs/src/model/Wallet'
import WalletStore from 'ndaujs/src/stores/WalletStore'

import I18n from '@src/i18n'
import WaitSpinner from './WaitSpinner'
import { withSafeDarkView } from './BaseScreen'
import QRCode from 'react-native-qrcode-svg'
import styled from 'styled-components'

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

const BorderedBox = props => {
  return (
    <BorderedWrapper>
      <BorderedSection>{props.children}</BorderedSection>
    </BorderedWrapper>
  )
}

const TableRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`

const AddressLabel = styled.Text`
  font-family: OpenSans-SemiBold;
  color: #000;
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

const CellLabel = styled.Text`
  font-family: OpenSans-SemiBold;
  color: #455b82;
`

const CellValue = styled.Text`
  font-family: OpenSans-Regular;
  font-size: 14px;
`

const calcExplorerURL = address =>
  `https://explorer.ndau.tech/account/${address}?node=mainnet`

class AppReceive extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      addr: '',
      wallet: new Wallet().fromObject(WalletStore.getWallet())
    }
  }

  render () {
    const { wallet, addr } = this.state
    return (
      <Body>
        <WaitSpinner
          label={I18n.t('talking-to-blockchain')}
          spinner={this.state.spinner}
        />

        <DarkSection>
          <DarkText>
            To receive ndau, present this QR code or address to the sender.
          </DarkText>
        </DarkSection>
        <LightSectionScroller>
          <LightSection>
            <Picker
              selectedValue={addr}
              style={{ height: 50 }}
              onValueChange={addr => this.setState({ addr: addr })}
              prompt='Select an account'
            >
              <Picker.Item
                key='p00'
                label='Please select an account'
                enabled={false}
              />
              {Object.keys(wallet.accounts).map((acctKey, i) => {
                const acct = wallet.accounts[acctKey]
                const accountData = acct.addressData
                const balance = new NdauNumber(accountData.balance).toDetail()
                const addrAbrv = acct.address.substr(acct.address.length - 4)
                return (
                  <Picker.Item
                    key={`p${i}`}
                    label={`Account ${addrAbrv} (bal: ${balance})`}
                    value={acct.address}
                  />
                )
              })}
            </Picker>

            {addr ? (
              <View>
                <QRCode size={200} value={addr} />
              </View>
            ) : null}
            <BorderedBox>
              <TableRow>
                <AddressLabel
                  style={{ textDecoration: 'underline' }}
                  onPress={() => Linking.openURL(calcExplorerURL(address))}
                >
                  {`${addr.substr(0, 25)}...`}
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

export default withSafeDarkView(AppReceive, I18n.t('receive'), true)
