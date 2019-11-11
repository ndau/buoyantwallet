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

const Div117 = styled.View`
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

const TextWrapper118 = styled.Text`
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
  text-align: left;
  flex-direction: row;
`

const Div119 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 4%;
  padding: 2% 3%;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-start;
  align-self: stretch;
  flex: auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div120 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper121 = styled.Text`
  display: flex;
  margin-bottom: 0%;
  padding: 0px 1% 2%;
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
  text-align: center;
`

const TextInputWrapper122 = styled.TextInput`
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

const Div123 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper124 = styled.Text`
  display: flex;
  margin-bottom: 0%;
  padding: 0px 1% 2%;
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
  text-align: center;
`

const TextInputWrapper125 = styled.TextInput`
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

const ButtonWrapper126 = styled.Text`
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
        <Animated.View style={[{ height: this.props.topPanelHeight }]}>
          <Div117>
            <TextWrapper118>
              Data in this app will be encrypted to protect your ndau. You will
              need to enter a password to decrypt it whenever you open this app.
            </TextWrapper118>
          </Div117>
        </Animated.View>
        <Div119>
          <Div120>
            <TextWrapper121>Password</TextWrapper121>
            <TextInputWrapper122
              {...ComponentHelper.addPasswordAttributes(this.props)}
            />
          </Div120>
          <Div123>
            <TextWrapper124>Confirm password</TextWrapper124>
            <TextInputWrapper125
              {...ComponentHelper.addConfirmPasswordAttributes(this.props)}
            />
            {this.props.checkBox}
          </Div123>
          <ButtonWrapper126
            {...ComponentHelper.addConfirmPasswordButtonAttributes(this.props)}
          >
            next
          </ButtonWrapper126>
        </Div119>
      </Body>
    )
  }
}

export default BuoyantWalletView
