import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
const {appDark50, appLightBlue, appLightGreen} = colors;
import mockbook from '../../assets/images/mock_book_originals.jpg';

export interface ICurrentlyReading {
  title: string;
  author: string;
  totalChapers: string;
  currentChapter: string;
}


const CurrentlyReadingContainer = styled.div`
position: relative;
  margin: 34px 0;
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
  width: 50px;
  height: 5px;
  right: -10px; 
  bottom: 50px;
  background: #EC6374;
  transform: rotate(14deg);
`;

export const Title = styled.span`
/* book title */
position: absolute;
width: 103px;
height: 27px;
left: 118px;
top: 60px;
font-family: Playfair Display;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
letter-spacing: 2px;
color: #2A2B26;
`
export const Author = styled.span`
position: absolute;
width: 106px;
height: 12px;
left: 118px;
top: 485px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;
color: #74776D;
`
export const Chapters = styled.div`
/* Chapter 2 From 9 */
position: absolute;
width: 106px;
height: 12px;
left: 137px;
top: 519px;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 12px;
/* identical to box height */

letter-spacing: 0.020635px;

color: #2A2B26;
`
function CurrentlyReading({
  title = '',
  author = '',
  totalChapers = '',
  currentChapter = ''
}) {
  return (
    <CurrentlyReadingContainer>
      <LabelWrapper>
        <Label color={appDark50}>Currently Reading</Label>
        <Label color={appLightBlue}>All</Label>
      </LabelWrapper>
      <Banner/>
      <CurrentlyReadingBookCover src={mockbook}/>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <RedBar/>
    </CurrentlyReadingContainer>
  )
}

export default CurrentlyReading

