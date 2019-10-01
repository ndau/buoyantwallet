import React, { useEffect, useState } from 'react'
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Easing
} from 'react-native'
import styled from 'styled-components'
import { createButtons, addTextInputAttributes } from './ComponentHelper'

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
  margin-top: 24px;
  margin-bottom: 8px;
  justify-content: flex-start;
  align-items: baseline;
  font-family: opensans-regular;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  flex-direction: row;
`

const ButtonWrapper3 = styled.Text`
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

const Div4 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div5 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 96%;
  flex-direction: row;
`

const Div6 = styled.View`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-self: center;
  flex: 1;
  flex-direction: row;
`

const ButtonWrapper7 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
`

const TextInputWrapper8 = styled.TextInput`
  min-height: 48px;
  margin-bottom: 0px;
  align-self: center;
  flex: 1;
  border: 1px solid #e4e9f2;
  background-color: #f7f9fc;
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 15px;
  flex-direction: row;
  flex-grow: 1;
`

const ButtonWrapper9 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
`

const Div10 = styled.View`
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

const TextWrapper11 = styled.Text`
  display: flex;
  width: 96%;
  margin-top: 24px;
  margin-bottom: 8px;
  justify-content: flex-start;
  align-items: baseline;
  font-family: opensans-regular;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  flex-direction: row;
`

const ButtonWrapper12 = styled.Text`
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

const Div13 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding-top: 32px;
  padding-bottom: 32px;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div14 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 96%;
  flex-direction: row;
`

const Div15 = styled.View`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-self: center;
  flex: 1;
  flex-direction: row;
`

const ButtonWrapper16 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
`

const TextInputWrapper17 = styled.TextInput`
  min-height: 48px;
  margin-bottom: 0px;
  align-self: center;
  flex: 1;
  border: 1px solid #e4e9f2;
  background-color: #f7f9fc;
  font-family: opensans-regular;
  color: #8f9bb3;
  font-size: 15px;
  flex-direction: row;
  flex-grow: 1;
`

const ButtonWrapper18 = styled.Text`
  padding: 9px 15px;
  background-color: #f99d1c;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  min-height: 48px;
  min-width: 48px;
  align-self: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
`

const TextWrapper19 = styled.Text`
  display: flex;
  width: 96%;
  padding-top: 0px;
  padding-bottom: 16px;
  justify-content: flex-start;
  align-items: baseline;
  font-family: opensans-regular;
  color: #15232a;
  font-size: 15px;
  font-weight: 600;
  flex-direction: row;
`

const Div20 = styled.View`
  display: flex;
  width: 96%;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  flex: 0 auto;
  flex-direction: row;
`

const ButtonWrapper21 = styled.Text`
  padding: 9px 15px;
  background-color: #e3f8f0;
  color: #4e957a;
  border: 1px solid #4e957a;
  text-decoration: none;
  border-radius: 4px;
  display: flex;
  min-height: 32px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`

const FadeInView = props => {
  const [fadeAnim] = useState(new Animated.Value(0)) // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: '100%',
      easing: Easing.bounce(),
      duration: 2000
    }).start()
  }, [])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        height: fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}

class IndexView extends React.Component {
  constructor (props) {
    super(props)

    this.imageHeight = new Animated.Value(137)
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    )
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    )
  }

  componentWillUnmount () {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 0
    }).start()
  }

  keyboardWillHide = event => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: 137
    }).start()
  }

  render () {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Body>
          <Animated.View style={[{ height: this.imageHeight }]}>
            <Div10>
              <TextWrapper11>
                Type your 12 word recovery phrase below to recover your wallet.
              </TextWrapper11>
              <ButtonWrapper12>
                I don&rsquo;t have my recovery phrase
              </ButtonWrapper12>
            </Div10>
          </Animated.View>
          <Div13>
            <Div14>
              <Div15>
                <ButtonWrapper16 onPress={this.props.moveBackAWord}>
                  &lt;
                </ButtonWrapper16>
                <TextInputWrapper17
                  placeholder='Please enter a valid word'
                  {...addTextInputAttributes(this.props)}
                />
                <ButtonWrapper18 onPress={this.props.moveToNextWord}>
                  &gt;
                </ButtonWrapper18>
              </Div15>
            </Div14>
            <TextWrapper19>Suggested words</TextWrapper19>
            <Div20>{createButtons(this.props, ButtonWrapper21)}</Div20>
          </Div13>
        </Body>
      </KeyboardAvoidingView>
    )
  }
}

export default IndexView
