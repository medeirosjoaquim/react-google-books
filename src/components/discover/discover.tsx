import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
import Carousel from './carousel';
const {appDark50, appLightBlue} = colors;

const DiscoverContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  font-size: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  font-size: 18px;
  width: 90%;
  display: flex;
  font-weight: bold;
  margin-bottom: 15px;
  justify-content: space-between
`

const Label = styled.span<{color: string}>`
font-size: 18px;
display: block;
font-weight: bold;
color: ${prop => prop.color};
`

function Discover() {
  return (
    <DiscoverContainer data-testid="discover">
      <LabelWrapper>
        <Label color={appDark50}>Discover new book</Label>
        <Label color={appLightBlue}>More</Label>
      </LabelWrapper>
      <Carousel/>
    </DiscoverContainer>
  )
}

export default Discover
