import React from 'react'
import styled from 'styled-components'

const RecoveryButton = ({ stuffInHere }) => (
  <ButtonWrapper>
    <ButtonText>Testing</ButtonText>
  </ButtonWrapper>
)

const ButtonWrapper = styled.TouchableOpacity`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 4px;
  background-color: #f99d1c;
`

const ButtonText = styled.Text`
  color: white;
  text-align: center;
`

export default RecoveryButton
