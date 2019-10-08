import React from 'react'
import styled from 'styled-components'
import ComponentHelper from './ComponentHelper'
import { Animated } from 'react-native'

const Body = styled.View`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: baseline;
  background-color: #15232a;
  text-align: left;
`

const Div1 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
`

const TextWrapper2 = styled.Text`
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

const Div3 = styled.View`
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

const ButtonWrapper4 = styled.Text`
  padding: 3.2% 5%;
  background-color: #f99d1c;
  color: #fff;
  border: 0;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  width: 96%;
  min-height: 48px;
  margin-top: 16%;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div5 = styled.View`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  position: relative;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
`

const TextWrapper6 = styled.Text`
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

const Div7 = styled.View`
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

const ButtonWrapper8 = styled.Text`
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

const ButtonWrapper10 = styled.Text`
  padding: 3.2% 5%;
  background-color: #f99d1c;
  color: #fff;
  border: 0;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  width: 96%;
  min-height: 48px;
  margin-top: 16%;
  margin-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
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
        <Div5>
          <TextWrapper6>Is this the correct recovery phrase?</TextWrapper6>
        </Div5>
        <Div7>
          {ComponentHelper.createConfirmationButtons(
            this.props.recoveryPhrase,
            ButtonWrapper9
          )}
          <ButtonWrapper10>CONFIrM&nbsp;MY&nbsp;phrase</ButtonWrapper10>
        </Div7>
      </Body>
    )
  }
}

export default BuoyantWalletView
