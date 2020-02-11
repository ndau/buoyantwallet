/* ----- ---- --- -- -
 * Copyright 2020 The Axiom Foundation. All Rights Reserved.
 *
 * Licensed under the Apache License 2.0 (the "License").  You may not use
 * this file except in compliance with the License.  You can obtain a copy
 * in the file LICENSE in the source distribution or at
 * https://www.apache.org/licenses/LICENSE-2.0.txt
 * - -- --- ---- -----
 */

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

const Div100 = styled.View`
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

const TextWrapper101 = styled.Text`
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

const Div102 = styled.View`
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

const Div103 = styled.View`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
`

const ButtonWrapper104 = styled.Text`
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

const ButtonWrapper105 = styled.Text`
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

const ButtonWrapper106 = styled.Text`
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

const ButtonWrapper107 = styled.Text`
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

const ButtonWrapper108 = styled.Text`
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

const ButtonWrapper109 = styled.Text`
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

const ButtonWrapper110 = styled.Text`
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

const ButtonWrapper111 = styled.Text`
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

const ButtonWrapper112 = styled.Text`
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

const ButtonWrapper113 = styled.Text`
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

const ButtonWrapper114 = styled.Text`
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

const ButtonWrapper115 = styled.Text`
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

const TextWrapper116 = styled.Text`
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

const ButtonWrapper117 = styled.Text`
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
        <Div100>
          <TextWrapper101>Please verify your recovery phrase.</TextWrapper101>
        </Div100>
        <Div102>
          <Div103>
            {ComponentHelper.createButtons(this.props, ButtonWrapper104)}
          </Div103>
          <TextWrapper116>
            Please be sure to store your recovery phrase in a location that is
            secure for long-term storage, such as a fireproof safe.
          </TextWrapper116>
          <ButtonWrapper117
            {...ComponentHelper.addButtonAttributes(this.props)}
          >
            confirm phrase
          </ButtonWrapper117>
        </Div102>
      </Body>
    )
  }
}

export default BuoyantWalletView
