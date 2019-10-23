import React from 'react'
import styled from 'styled-components'
import ComponentHelper from './ComponentHelper'
import { Animated } from 'react-native'

const Body = styled.View`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: baseline;
  text-align: left;
`

const Div54 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 0%;
  padding-left: 0%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  align-self: stretch;
  flex: 0 auto;
`

const TextWrapper55 = styled.Text`
  display: flex;
  width: 96%;
  min-width: 96%;
  margin-top: 24px;
  margin-bottom: 8px;
  justify-content: flex-start;
  align-items: baseline;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper56 = styled.Text`
  font-size: 32px;
  font-weight: 700;
  flex-direction: row;
`

const TextWrapper57 = styled.Text`
  display: flex;
  width: 96%;
  min-width: 96%;
  margin-top: 24px;
  margin-bottom: 8px;
  justify-content: flex-start;
  align-items: baseline;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper58 = styled.Text`
  font-weight: 400;
  flex-direction: row;
`

const TextWrapper59 = styled.Text`
  display: flex;
  width: 96%;
  min-width: 96%;
  margin-top: 24px;
  margin-bottom: 8px;
  justify-content: flex-start;
  align-items: baseline;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  flex-direction: row;
`

const TextWrapper60 = styled.Text`
  font-weight: 400;
  flex-direction: row;
`

const ButtonWrapper61 = styled.Text`
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
  margin-top: 16%;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

class BuoyantWalletView extends React.Component {
  render () {
    return (
      <Body>
        <Div54>
          <TextWrapper55>
            <TextWrapper56>Welcome to ndau</TextWrapper56>
          </TextWrapper55>
          <TextWrapper57>
            <TextWrapper58>
              ndau is a cryptocurrency designed to be a buoyant long-term store
              of value.
            </TextWrapper58>
          </TextWrapper57>
          <TextWrapper59>
            <TextWrapper60>
              If you ever lose access to your device, you must have the recovery
              phrase to restore your wallet.
            </TextWrapper60>
          </TextWrapper59>
          <ButtonWrapper61 {...ComponentHelper.addButtonAttributes(this.props)}>
            setup new wallet
          </ButtonWrapper61>
        </Div54>
      </Body>
    )
  }
}

export default BuoyantWalletView
