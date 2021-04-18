import React from 'react'

import { colors } from '../../assets/colors';
const {appDark50, appLightBlue, appPink} = colors;
import mockbook from '../../assets/images/mock_book_originals.jpg';
import fullOval from '../../assets/images/fulloval.png';
import bookWithMarker from '../../assets/images/bookwithmarker.png';


import { CurrentlyReadingContainer,
  LabelWrapper,
  Label,
  Banner,
  CurrentlyReadingBookCover,
  Title,
  Author,
  RedBar, 
  FullOval,
  Circle,
  BookWithMarker,
  Chapters} from './components/currently-reading-components';

export interface ICurrentlyReading {
  title: string;
  author: string;
  totalChapers: string;
  currentChapter: string;
}


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
      <Banner>
        <FullOval src={fullOval}/>
        <RedBar/>
        <Circle/>
      </Banner>
      <CurrentlyReadingBookCover src={mockbook}/>
      <Title>{title}</Title>
      <Author>by{' '}{author}</Author>
      <Chapters>
        <BookWithMarker src={bookWithMarker}/>
        <span>Chaper</span>
        <span style={{color: appPink, fontWeight: 'bold'}}>{currentChapter}</span>
        <span>From</span>
        <span>{totalChapers}</span>
      </Chapters>
    </CurrentlyReadingContainer>
  )
}

export default CurrentlyReading

