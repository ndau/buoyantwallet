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

const Div81 = styled.View`
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

const TextWrapper82 = styled.Text`
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

const Div83 = styled.View`
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

const Div84 = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`

const ButtonWrapper85 = styled.Text`
  padding: 3% 5%;
  background-color: transparent;
  color: #4e957a;
  border: 2px solid #4e957a;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  min-height: 32px;
  margin-right: 3%;
  margin-bottom: 3%;
  margin-left: 3%;
  justify-content: center;
  flex-wrap: wrap;
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

const TextWrapper86 = styled.Text`
  display: flex;
  margin-bottom: 0%;
  padding: 0px 1% 2%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  align-self: center;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`

const Div87 = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`

const ButtonWrapper88 = styled.Text`
  padding: 3% 5%;
  background-color: #e3f8f0;
  color: #4e957a;
  border: 1px solid #4e957a;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  min-height: 32px;
  margin-right: 3%;
  margin-bottom: 3%;
  margin-left: 3%;
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
        <Div81>
          <TextWrapper82>Please verify your recovery phrase.</TextWrapper82>
        </Div81>
        <Div83>
          <Div84>
            {ComponentHelper.createSelectedItems(this.props, ButtonWrapper85)}
          </Div84>
          <TextWrapper86>
            Please tap each word in the correct order.
          </TextWrapper86>
          <Div87>
            {ComponentHelper.createButtons(this.props, ButtonWrapper88)}
          </Div87>
        </Div83>
      </Body>
    )
  }
}

export default BuoyantWalletView
