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
  align-self: stretch;
  flex: 1;
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
  align-self: stretch;
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
  align-self: stretch;
  flex: 1;
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
  align-self: stretch;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div11 = styled.View`
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

const TextWrapper12 = styled.Text`
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

const ButtonWrapper13 = styled.Text`
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

const Div14 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: stretch;
  flex: 1;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const TextWrapper15 = styled.Text`
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: opensans-regular;
  flex-direction: row;
`

const Div16 = styled.View`
  margin: 0 0 15px;
  display: flex;
  overflow: visible;
  width: 100%;
  padding: 0px 0px 0px 0%;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  align-self: stretch;
  flex: 0 auto;
`

const Div17 = styled.View`
  display: flex;
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-self: center;
  flex: 0 auto;
`

const ButtonWrapper18 = styled.Text`
  padding: 2% 5%;
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

const TextInputWrapper19 = styled.TextInput`
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

const ButtonWrapper20 = styled.Text`
  padding: 2% 5%;
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

const TextWrapper21 = styled.Text`
  display: flex;
  width: 100%;
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

const ButtonWrapper22 = styled.Text`
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
        <Animated.View style={[{ height: this.props.topPanelHeight }]}>
          <Div11>
            <TextWrapper12>
              Type your 12 word recovery phrase below to recover your wallet.
            </TextWrapper12>
            <ButtonWrapper13>
              I don&rsquo;t have my recovery phrase
            </ButtonWrapper13>
          </Div11>
        </Animated.View>
        <Div14>
          <TextWrapper15>
            Recovery phrase word {this.props.recoveryIndex + 1} of{' '}
            {this.props.recoveryPhrase.length}
          </TextWrapper15>
          <Div16>
            <Div17>
              <ButtonWrapper18 onPress={this.props.moveBackAWord}>
                &lt;
              </ButtonWrapper18>
              <TextInputWrapper19
                placeholder={I18n.t('please-enter-a-valid-word')}
                {...ComponentHelper.addTextInputAttributes(this.props)}
              />
              <ButtonWrapper20 onPress={this.props.moveToNextWord}>
                &gt;
              </ButtonWrapper20>
            </Div17>
          </Div16>
          <TextWrapper21>Suggested words</TextWrapper21>
          {ComponentHelper.createButtons(this.props, ButtonWrapper22)}
        </Div14>
      </Body>
    )
  }
}

export default BuoyantWalletView
