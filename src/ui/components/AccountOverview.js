import React from 'react'
import styled from 'styled-components'
import AccountAPIHelper from 'ndaujs/src/api/helpers/AccountAPIHelper'
import Wallet from 'ndaujs/src/model/Wallet'
import NdauNumber from 'ndaujs/src/helpers/NdauNumber'

const Body = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: baseline;
  background-color: #15232a;
  text-align: left;
`

const Div38 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
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

const TextWrapper39 = styled.Text`
  margin-right: 0%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: center;
  font-family: opensans-regular;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  flex-direction: row;
`

const TextWrapper40 = styled.Text`
  display: flex;
  margin: 5%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  align-self: center;
  font-family: opensans-regular;
  color: #8cc74f;
  font-size: 36px;
  font-weight: 300;
  text-shadow: 0 0 5px #4e957a;
`

const Div41 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  overflow: visible;
  margin-top: 0px;
  margin-bottom: 5%;
  padding-right: 2%;
  padding-left: 2%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: flex-start;
  align-self: stretch;
  flex: 0 auto;
`

const Div42 = styled.View`
  display: flex;
  overflow: visible;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  align-self: center;
  flex: 1;
`

const Div43 = styled.View`
  margin-left: 0px;
`

const TextWrapper44 = styled.Text`
  margin-right: 0%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: flex-start;
  font-family: opensans-regular;
  color: #455b82;
  font-size: 10px;
  font-weight: 700;
  flex-direction: row;
`

const Div45 = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`

const TextWrapper46 = styled.Text`
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 12px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper47 = styled.Text`
  padding-left: 10%;
  font-family: opensans-regular;
  color: #8cc74f;
  font-size: 12px;
  font-weight: 600;
  flex-direction: row;
`

const Div48 = styled.View`
  margin-right: 15%;
  margin-left: 15%;
  padding-top: 5%;
  font-family: opensans-regular;
  color: #455b82;
  font-size: 24px;
  font-weight: 300;
  flex-direction: row;
`

const Div49 = styled.View`
  margin-left: 0px;
`

const TextWrapper50 = styled.Text`
  margin-right: 0%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-self: flex-start;
  font-family: opensans-regular;
  color: #455b82;
  font-size: 10px;
  font-weight: 700;
  flex-direction: row;
`

const Div51 = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`

const TextWrapper52 = styled.Text`
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 12px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper53 = styled.Text`
  padding-left: 10%;
  font-family: opensans-regular;
  color: #ff4646;
  font-size: 12px;
  font-weight: 600;
  flex-direction: row;
`

const Div54 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0%;
  padding: 8% 3%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  align-content: flex-start;
  align-self: stretch;
  flex: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div55 = styled.View`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  flex-direction: row;
`

const TextWrapper56 = styled.Text`
  margin-top: 0px;
  margin-bottom: 0px;
  flex: 1;
  font-family: opensans-regular;
  color: #455b82;
  font-size: 18px;
  font-weight: 700;
  flex-direction: row;
`

const Div57 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap;
  flex: 1;
`

const TextWrapper58 = styled.Text`
  display: flex;
  margin-right: 5%;
  padding-right: 0%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: stretch;
  align-self: center;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #f99d1c;
  font-size: 16px;
  font-weight: 600;
`

const TextWrapper59 = styled.Text`
  margin-left: 0%;
  align-self: center;
  font-family: opensans-regular;
  color: #f99d1c;
  font-size: 26px;
  flex-direction: row;
`

const Div60 = styled.View`
  display: flex;
  margin-top: 3%;
  padding: 3%;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
  border-radius: 4px;
  background-color: #fff;
  shadow-color: #000000;
  shadow-opacity: 0.12;
  shadow-radius: 10;
  opacity: 1;
  elevation: 5;
`

const Div61 = styled.View`
  display: flex;
  align-items: center;
  align-self: center;
  flex: 1;
  flex-direction: row;
`

const TextWrapper62 = styled.Text`
  padding: 0%;
  align-self: flex-start;
  background-color: #fff;
  font-family: opensans-regular;
  color: #0a1724;
  font-size: 16px;
  font-weight: 400;
  flex-direction: row;
`

const Div63 = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const TextWrapper64 = styled.Text`
  margin-right: 10%;
  font-family: opensans-regular;
  color: #0a1724;
  font-size: 16px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper65 = styled.Text`
  margin-left: 0%;
  align-self: center;
  font-family: opensans-regular;
  color: #f99d1c;
  font-size: 26px;
  flex-direction: row;
`

class BuoyantWalletView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      wallet: {}
    }
  }

  async gotoAccountDetails (accountKey) {
    this.props.navigation.navigate('AccountDetails', {
      address: accountKey,
      wallet: this.state.wallet
    })
  }

  async componentDidMount () {
    const wallet = new Wallet().fromObject(this.props.wallet)
    await wallet.populateWalletWithAddressData()
    this.setState({ wallet })
  }

  render () {
    const accounts = this.props.wallet.accounts
    return (
      <Body>
        <Div38>
          <TextWrapper39>TOTAL NDAU</TextWrapper39>
          <TextWrapper40>{this.props.totalNdau}</TextWrapper40>
        </Div38>
        <Div41>
          <Div42>
            <Div43>
              <TextWrapper44>TARGET PRICE</TextWrapper44>
              <Div45>
                <TextWrapper46>${this.props.marketPrice}</TextWrapper46>
                <TextWrapper47 />
              </Div45>
            </Div43>
            <Div48 />
            <Div49>
              <TextWrapper50>MARKET PRICE</TextWrapper50>
              <Div51>
                <TextWrapper52>${this.props.marketPrice}</TextWrapper52>
                <TextWrapper53 />
              </Div51>
            </Div49>
          </Div42>
        </Div41>
        <Div54>
          <Div55>
            <TextWrapper56>YOUR ACCOUNTS</TextWrapper56>
            <Div57>
              <TextWrapper58>Add account</TextWrapper58>
              <TextWrapper59 onPress={this.props.addNewAccount}>
                {this.props.plusSquareIcon}
              </TextWrapper59>
            </Div57>
          </Div55>
          {accounts
            ? Object.keys(accounts)
                .sort((a, b) => {
                  if (
                    !accounts[a].addressData.nickname ||
                    !accounts[b].addressData.nickname
                  ) {
                    return 0
                  }

                  const accountNumberA = parseInt(
                    accounts[a].addressData.nickname.split(' ')[1]
                  )
                  const accountNumberB = parseInt(
                    accounts[b].addressData.nickname.split(' ')[1]
                  )
                  if (accountNumberA < accountNumberB) {
                    return -1
                  } else if (accountNumberA > accountNumberB) {
                    return 1
                  }
                  return 0
                })
                .map((accountKey, index) => {
                  const accountNickname = accounts[accountKey].address.slice(
                    accounts[accountKey].address.length - 4,
                    accounts[accountKey].address.length
                  )

                  const accountAmount = new NdauNumber(
                    AccountAPIHelper.accountNdauAmount(
                      accounts[accountKey].addressData
                    )
                  )

                  return (
                    <Div60 key={index}>
                      <Div61>
                        <TextWrapper62>Account {accountNickname}</TextWrapper62>
                      </Div61>
                      <Div63>
                        <TextWrapper64>
                          {accountAmount.toSummary()}
                        </TextWrapper64>
                        <TextWrapper65
                          onPress={() => {
                            this.gotoAccountDetails(accountKey)
                          }}
                        >
                          {this.props.arrowSquareRightIcon}
                        </TextWrapper65>
                      </Div63>
                    </Div60>
                  )
                })
            : null}
        </Div54>
      </Body>
    )
  }
}

export default BuoyantWalletView
