import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
const {appDark50, appLightBlue, appLightGreen} = colors;

const CurrentlyReadingContainer = styled.div`
position: relative;
  margin: 34px 0;
  margin-left: 20px;
  font-size: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
  background-color: gray;
`;

const LabelWrapper = styled.div`
  font-size: 18px;
  width: 90%;
  display: flex;
  font-weight: bold;
  margin-bottom: 32px;
  justify-content: space-between
`

const Label = styled.span<{color: string}>`
font-size: 18px;
display: block;
font-weight: bold;
color: ${prop => prop.color};
`

const Banner = styled.div`
background-color: ${appLightGreen};
height: 100px;
`
const CurrentlyReadingBookCover = styled.img`
position: absolute;
top: 30px;
left: 20px;
border: 1px solid red;
height: 130px;
width: 88px;
`

function CurrentlyReading() {
  return (
    <CurrentlyReadingContainer>
      <LabelWrapper>
        <Label color={appDark50}>Currently Reading</Label>
        <Label color={appLightBlue}>All</Label>
      </LabelWrapper>
      <Banner/>
      <CurrentlyReadingBookCover/>
    </CurrentlyReadingContainer>
  )
}

export default CurrentlyReading

