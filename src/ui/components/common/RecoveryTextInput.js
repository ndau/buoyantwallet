import React from 'react'
import styled from 'styled-components'

const RecoveryTextInput = () => (
  <TextInputWrapper>
    <TextInputInner />
  </TextInputWrapper>
)

const TextInputWrapper = styled.View``

const TextInputInner = styled.TextInput`
  margin-top: 0px;
  margin-bottom: 0px;
  border: 1px solid #8cc74f;
`
export default RecoveryTextInput
