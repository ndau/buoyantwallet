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

const Div74 = styled.View`
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
  background-image: url('../images/New-dashboard.png');
  background-position: 0% 25%;
  background-size: cover;
  background-repeat: no-repeat;
`

const TextWrapper75 = styled.Text`
  display: flex;
  width: auto;
  min-width: auto;
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

const Div76 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: stretch;
  flex: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div77 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper78 = styled.Text`
  display: flex;
  margin-bottom: 2%;
  padding-top: 0px;
  padding-right: 0%;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`

const TextInputWrapper79 = styled.TextInput`
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
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 15px;
  flex-direction: row;
  flex-grow: 1;
`

const Div80 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper81 = styled.Text`
  display: flex;
  margin-bottom: 2%;
  padding-top: 0px;
  padding-right: 0%;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  align-content: stretch;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
`

const TextInputWrapper82 = styled.TextInput`
  overflow: visible;
  width: 100%;
  min-height: 96px;
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
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 15px;
  text-align: left;
  flex-direction: row;
  flex-grow: 1;
`

const ButtonWrapper83 = styled.Text`
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
        <Div74>
          <TextWrapper75>
            Please add a brief description of the problem you are seeing below
          </TextWrapper75>
        </Div74>
        <Div76>
          <Div77>
            <TextWrapper78>Email</TextWrapper78>
            <TextInputWrapper79 />
          </Div77>
          <Div80>
            <TextWrapper81>Description</TextWrapper81>
            <TextInputWrapper82 />
          </Div80>
          <ButtonWrapper83>next</ButtonWrapper83>
        </Div76>
      </Body>
    )
  }
}

export default BuoyantWalletView
