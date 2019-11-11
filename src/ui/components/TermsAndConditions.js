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

const Div39 = styled.View`
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

const TextWrapper40 = styled.Text`
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

const Div41 = styled.View`
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

const TextWrapper42 = styled.Text`
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

const Div43 = styled.View`
  margin: 0 0 15px;
  display: flex;
  overflow: visible;
  width: 100%;
  padding: 0px 0px 0px 0%;
  justify-content: space-between;
  align-items: baseline;
  align-self: stretch;
  flex: 0 auto;
`

const Div44 = styled.View`
  display: flex;
  width: 100%;
  margin-top: 32px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-self: center;
  flex: 0 auto;
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
        <Div39>
          <TextWrapper40>
            [DRAFT] IMPORTANT LEGAL INFORMATION FOR NDAU HOLDERS
          </TextWrapper40>
        </Div39>
        <Div41>
          <TextWrapper42>
            All POTENTIAL ndau holders should acknowledge that while the Target
            Price may rise AS ADOPTION MOVES along the S-curve there is no
            guarantee that this will happen. &nbsp;There is no guarantee that a
            holder of ndau WILL get any particular minimum price upon selling.
            &nbsp;The Floor Price is not an absolute guaranteed price.
            &nbsp;There may be temporary or permanent liquidity constraints.
            &nbsp;Further, as the Floor Price is dependent on the dynamic value
            of the Endowment, it will rise and fall accordingly to that value
            and other factors.All POTENTIAL ndau holders should understand that
            features such as the STABILIZATION INCENTIVE BURN
            (&ldquo;SIB&rdquo;) cannot apply to off-blockchain &nbsp;etc
          </TextWrapper42>
          <Div43>
            <Div44>{this.props.checkBox}</Div44>
          </Div43>

          <ButtonWrapper45 {...ComponentHelper.addButtonAttributes(this.props)}>
            next
          </ButtonWrapper45>
        </Div41>
      </Body>
    )
  }
}

export default BuoyantWalletView
