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
  background-color: #15232a;
  text-align: left;
`

const Div66 = styled.View`
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

const TextWrapper67 = styled.Text`
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

const TextWrapper68 = styled.Text`
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

const TextWrapper69 = styled.Text`
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

const Div70 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const ButtonWrapper71 = styled.Text`
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
  margin-top: 10%;
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

const ButtonWrapper9 = styled.Text`
  padding: 3% 5%;
  background-color: #e3f8f0;
  color: #4e957a;
  border: 1px solid #4e957a;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  min-height: 32px;
  margin-right: 2%;
  margin-bottom: 2%;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center;
  align-self: center;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  flex-direction: row;
`

class BuoyantWalletView extends React.Component {
  render () {
    return (
      <Body>
        <Div66>
          <TextWrapper67>
            We are about to create the secure recovery phrase, which is the key
            to restoring your wallet.
          </TextWrapper67>
          <TextWrapper68>
            You must WRITE IT DOWN and store it in a secure location, or risk
            losing access to your funds.
          </TextWrapper68>
          <TextWrapper69>
            Do not save this phrase on your device or in the cloud.
          </TextWrapper69>
        </Div66>
        <Div70>
          {ComponentHelper.createButtons(this.props, ButtonWrapper9)}
          <ButtonWrapper71 {...ComponentHelper.addButtonAttributes(this.props)}>
            create new wallet
          </ButtonWrapper71>
        </Div70>
      </Body>
    )
  }
}

export default BuoyantWalletView
