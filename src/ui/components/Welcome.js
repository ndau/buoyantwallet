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

const Div45 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 2%;
  padding-left: 2%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  align-self: stretch;
  flex: 0 auto;
`

const Div46 = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper47 = styled.Text`
  display: flex;
  width: 100%;
  min-width: auto;
  margin-top: 5%;
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

const TextWrapper48 = styled.Text`
  font-size: 32px;
  font-weight: 700;
  flex-direction: row;
`

const TextWrapper49 = styled.Text`
  display: flex;
  width: 100%;
  min-width: auto;
  margin-top: 5%;
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

const TextWrapper50 = styled.Text`
  font-weight: 400;
  flex-direction: row;
`

const TextWrapper51 = styled.Text`
  display: flex;
  width: 100%;
  min-width: auto;
  margin-top: 5%;
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

const TextWrapper52 = styled.Text`
  font-weight: 400;
  flex-direction: row;
`

const TextWrapper53 = styled.Text`
  display: flex;
  width: 100%;
  min-width: auto;
  margin-top: 5%;
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

const TextWrapper54 = styled.Text`
  font-weight: 400;
  flex-direction: row;
`

const TextWrapper55 = styled.Text`
  display: flex;
  width: 100%;
  min-width: auto;
  margin-top: 5%;
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
  font-weight: 400;
  flex-direction: row;
`

const Div57 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 4%;
  padding: 2% 3%;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: stretch;
  flex: auto;
`

const ButtonWrapper58 = styled.Text`
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

class BuoyantWalletView extends React.Component {
  render () {
    return (
      <Body>
        <Div45>
          <Div46>
            <TextWrapper47>
              <TextWrapper48>Welcome to ndau</TextWrapper48>
            </TextWrapper47>
            <TextWrapper49>
              <TextWrapper50>
                ndau is a buoyant virtual currency optimized for the long-term
                store of value.
              </TextWrapper50>
            </TextWrapper49>
            <TextWrapper51>
              <TextWrapper52>
                In the next few minutes, you will: &nbsp;
              </TextWrapper52>
            </TextWrapper51>
            <TextWrapper53>
              <TextWrapper54>
                &bull; Create a new wallet{'\n'}&bull; Recover a wallet{'\n'}
                &bull; Protect it with a secure password{'\n'}&bull; Create a
                recovery phrase
              </TextWrapper54>
            </TextWrapper53>
            <TextWrapper55>
              <TextWrapper56>
                If you ever lose access to your device, you must have the
                recovery phrase to restore your wallet.
              </TextWrapper56>
            </TextWrapper55>
          </Div46>
        </Div45>
        <Div57>
          <ButtonWrapper58 {...ComponentHelper.addButtonAttributes(this.props)}>
            setup new wallet
          </ButtonWrapper58>
        </Div57>
      </Body>
    )
  }
}

export default BuoyantWalletView
