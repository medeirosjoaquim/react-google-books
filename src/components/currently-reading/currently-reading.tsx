import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
const {appDark50, appLightBlue, appLightGreen} = colors;
import mockbook from '../../assets/images/mock_book_originals.jpg';

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
height: 130px;
width: 88px;
`
export const RedBar = styled.div`
  position: absolute;
  left: 53.37%;
  right: 29.72%;
  top: 68.7%;
  bottom: 28.42%;
  background: #EC6374;
  transform: rotate(14deg);
`;

function CurrentlyReading() {
  return (
    <CurrentlyReadingContainer>
      <LabelWrapper>
        <Label color={appDark50}>Currently Reading</Label>
        <Label color={appLightBlue}>All</Label>
      </LabelWrapper>
      <Banner/>
      <CurrentlyReadingBookCover src={mockbook}/>
      <RedBar/>
    </CurrentlyReadingContainer>
  )
}

export default CurrentlyReading

