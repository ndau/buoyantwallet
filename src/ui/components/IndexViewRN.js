import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const ButtonWrapper1 = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  overflow: visible;
`
const ButtonText1 = styled.Text`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  overflow: visible;
`
const TextInputWrapper1 = styled.TextInput`
  margin-top: 0px;
  margin-bottom: 0px;
  border: 1px solid #8cc74f;
  margin-top: 0px;
  margin-bottom: 0px;
  border: 1px solid #8cc74f;
`
const ButtonWrapper2 = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
`
const ButtonText2 = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
`

class IndexView extends React.Component {
  render () {
    return (
      <View>
        <ButtonWrapper1>
          <ButtonText1>&lt;</ButtonText1>
        </ButtonWrapper1>
        <TextInputWrapper1 />
        <ButtonWrapper2>
          <ButtonText2>&gt;</ButtonText2>
        </ButtonWrapper2>
      </View>
    )
  }
}

export default IndexView
