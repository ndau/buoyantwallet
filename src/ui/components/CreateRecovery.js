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

const Div56 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-right: 2%;
  padding-left: 2%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: flex-start;
  align-self: stretch;
  flex: 0 auto;
`

const TextWrapper57 = styled.Text`
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

const TextWrapper58 = styled.Text`
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

const Div59 = styled.View`
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
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div60 = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`

const TextWrapper61 = styled.Text`
  display: flex;
  margin-bottom: 4%;
  padding: 0px 1% 8px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const ButtonWrapper73 = styled.Text`
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
        <Div56>
          <TextWrapper57>
            Please write down this phrase, in this exact order, and plan to
            store it in a secure location.
          </TextWrapper57>
          <TextWrapper58>
            We will confirm you have done so on the next screen.
          </TextWrapper58>
        </Div56>
        <Div59>
          <Div60>
            {ComponentHelper.createButtons(this.props, TextWrapper61)}
          </Div60>
          <ButtonWrapper73 {...ComponentHelper.addButtonAttributes(this.props)}>
            i've written it down
          </ButtonWrapper73>
        </Div59>
      </Body>
    )
  }
}

export default BuoyantWalletView
