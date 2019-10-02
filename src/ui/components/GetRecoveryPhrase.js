import React from 'react'
import styled from 'styled-components'
import { createButtons, addTextInputAttributes } from './ComponentHelper'
import { Animated } from 'react-native'

const Body = styled.View`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
`

const TextWrapper39 = styled.Text`
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

const ButtonWrapper40 = styled.Text`
  display: flex;
  width: 96%;
  margin-bottom: 24px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: baseline;
  font-family: opensans-regular;
  color: #f99d1c;
  font-size: 15px;
  flex-direction: row;
`

const Div41 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
  flex-direction: row;
`

const TextWrapper42 = styled.Text`
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: opensans-regular;
  flex-direction: row;
`

const Div43 = styled.View`
  margin: 0 0 15px;
  display: flex;
  overflow: visible;
  width: auto;
  padding-top: 0px;
  padding-bottom: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  flex: 0 auto;
`

const Div44 = styled.View`
  display: flex;
  margin-top: 32px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-self: center;
  flex: 1;
  flex-direction: row;
`

const ButtonWrapper45 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  flex: 0 auto;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
`

const TextInputWrapper46 = styled.TextInput`
  width: auto;
  min-height: 48px;
  min-width: auto;
  margin-bottom: 0px;
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

const ButtonWrapper47 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  flex: 0 auto;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
`

const TextWrapper48 = styled.Text`
  display: flex;
  width: 96%;
  padding-top: 0px;
  padding-bottom: 4px;
  justify-content: flex-start;
  align-items: baseline;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 18px;
  font-weight: 400;
  flex-direction: row;
`

const ButtonWrapper49 = styled.Text`
  padding: 9px 15px;
  background-color: #e3f8f0;
  color: #4e957a;
  border: 1px solid #4e957a;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  min-height: 32px;
  margin-right: 8px;
  margin-bottom: 8px;
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

class GetRecoveryPhrase extends React.Component {
  render () {
    return (
      <Body>
        <Animated.View style={[{ height: this.props.topPanelHeight }]}>
          <Div38>
            <TextWrapper39>
              Type your 12 word recovery phrase below to recover your wallet.
            </TextWrapper39>
            <ButtonWrapper40>
              I don&rsquo;t have my recovery phrase
            </ButtonWrapper40>
          </Div38>
        </Animated.View>
        <Div41>
          <TextWrapper42>
            Recovery phrase word {this.props.recoveryIndex + 1} of{' '}
            {this.props.recoveryPhrase.length}
          </TextWrapper42>
          <Div43>
            <Div44>
              <ButtonWrapper45 onPress={this.props.moveBackAWord}>
                &lt;
              </ButtonWrapper45>
              <TextInputWrapper46
                placeholder='Please enter a valid word'
                {...addTextInputAttributes(this.props)}
              />
              <ButtonWrapper47 onPress={this.props.moveToNextWord}>
                &gt;
              </ButtonWrapper47>
            </Div44>
          </Div43>
          <TextWrapper48>Suggested words</TextWrapper48>
          {createButtons(this.props, ButtonWrapper49)}
        </Div41>
      </Body>
    )
  }
}

export default GetRecoveryPhrase
