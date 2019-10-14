import React from 'react'
import styled from 'styled-components'
import ComponentHelper from './ComponentHelper'
import { Animated } from 'react-native'

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
  align-self: flex-start;
  flex: 0 auto;
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
  align-self: flex-end;
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
  align-self: flex-start;
  flex: 0 auto;
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
  align-self: flex-end;
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
  align-self: flex-start;
  flex: 0 auto;
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

const Div23 = styled.View`
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

const TextWrapper24 = styled.Text`
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

const Div25 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const TextWrapper26 = styled.Text`
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

const Div27 = styled.View`
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

const Div28 = styled.View`
  display: flex;
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-self: center;
  flex: 0 auto;
`

const TextInputWrapper29 = styled.TextInput`
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

const ButtonWrapper30 = styled.Text`
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
  align-self: flex-end;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div31 = styled.View`
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

const TextWrapper32 = styled.Text`
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

const Div33 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const TextWrapper34 = styled.Text`
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

const Div35 = styled.View`
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

const Div36 = styled.View`
  display: flex;
  width: 100%;
  margin-top: 32px;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-self: center;
  flex: 0 auto;
`

const Div37 = styled.View`
  float: left;
  margin-bottom: 0px;
  margin-left: -20px;
  margin-right: 0px;
  margin-top: 4px;
  flex-direction: row;
`

const ButtonWrapper38 = styled.Text`
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
  align-self: flex-end;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div39 = styled.View`
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

const TextWrapper40 = styled.Text`
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

const TextWrapper41 = styled.Text`
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

const ButtonWrapper42 = styled.Text`
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
  align-self: flex-end;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div43 = styled.View`
  margin: 0 0 15px;
  flex-direction: row;
`

const TextInputWrapper44 = styled.TextInput`
  flex-direction: row;
  flex-grow: 1;
`

const ButtonWrapper45 = styled.Text`
  padding: 9px 15px;
  background-color: #3898ec;
  color: white;
  border: 0;
  text-decoration: none;
  border-radius: 0;
  flex-direction: row;
`

const Div46 = styled.View`
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

const TextWrapper47 = styled.Text`
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

const Div48 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const ButtonWrapper49 = styled.Text`
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
  align-self: flex-end;
  flex: 0 auto;
  font-family: opensans-regular;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`

const Div50 = styled.View`
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

const TextWrapper51 = styled.Text`
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

const Div52 = styled.View`
  position: relative;
  display: flex;
  width: 100%;
  padding: 8% 3%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  align-content: flex-start;
  align-self: flex-start;
  flex: 0 auto;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #fff;
`

const Div53 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper54 = styled.Text`
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

const TextInputWrapper55 = styled.TextInput`
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
`

const Div56 = styled.View`
  margin: 0 0 15px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: stretch;
  align-self: center;
  flex: 0 auto;
`

const TextWrapper57 = styled.Text`
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

const TextInputWrapper58 = styled.TextInput`
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
`

const Div59 = styled.View`
  margin-bottom: 0px;
  margin-left: -20px;
  margin-right: 0px;
  margin-top: 4px;
  flex-direction: row;
`

const TextWrapper60 = styled.Text`
  font-weight: normal;
  margin-bottom: 0px;
  padding-left: 0%;
  flex-direction: row;
  justify-content: flex-start;
  flex: 0 auto;
`

const ButtonWrapper61 = styled.Text`
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
  align-self: flex-end;
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
          <Div50>
            <TextWrapper51>
              Data in this app will be encrypted to protect your ndau. You will
              need to enter a password to decrypt it whenever you open this app.
            </TextWrapper51>
          </Div50>
        </Animated.View>
        <Div52>
          <Div53>
            <TextWrapper54>Password</TextWrapper54>
            <TextInputWrapper55
              {...ComponentHelper.addPasswordAttributes(this.props)}
            />
          </Div53>
          <Div56>
            <TextWrapper57>Password</TextWrapper57>
            <TextInputWrapper58
              {...ComponentHelper.addConfirmPasswordAttributes(this.props)}
            />
            {this.props.checkBox}
          </Div56>
          <ButtonWrapper61>next</ButtonWrapper61>
        </Div52>
      </Body>
    )
  }
}

export default BuoyantWalletView
