import React from 'react'
import styled from 'styled-components'
import ComponentHelper from './ComponentHelper'
import { Animated, ImageBackground } from 'react-native'

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

const Div39 = styled.View`
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  align-self: stretch;
  flex: 0 auto;
`

const NdauImage40 = styled.Image`
  margin-top: 15%;
  margin-bottom: 35%;
  padding-right: 20%;
  padding-left: 20%;
`

const Div41 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 0%;
  padding: 8% 3%;
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

const Div42 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper43 = styled.Text`
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

const TextInputWrapper44 = styled.TextInput`
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

const ButtonWrapper45 = styled.Text`
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
        {/* <ImageBackground
          source={require('img/New-dashboard.png')}
          style={{ width: '100%', height: '50%' }}
        > */}
        <Div38>
          <Div39>
            <NdauImage40
              resizeMode='contain'
              style={{ width: '50%', height: '50%' }}
              source={require('img/ndau_logo.png')}
            />
          </Div39>
        </Div38>
        {/* </ImageBackground> */}
        <Div41>
          <Div42>
            <TextWrapper43>Password</TextWrapper43>
            <TextInputWrapper44
              {...ComponentHelper.addPasswordAttributes(this.props)}
            />
          </Div42>
          <ButtonWrapper45 {...ComponentHelper.addButtonAttributes(this.props)}>
            log in
          </ButtonWrapper45>
        </Div41>
      </Body>
    )
  }
}

export default BuoyantWalletView
