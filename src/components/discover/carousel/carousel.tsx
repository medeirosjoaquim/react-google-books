import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import Card from '../card';
import mockbook1 from '../../../assets/images/mock_book_hooked.jpg';
import mockbook2 from '../../../assets/images/mock_book_one_thing.jpg';
import {mockedHookData, mockTheOneThingData} from '../../../helpers/mock.helper';

const {appDarkBlue, appPurple} = colors;

const CarouselContainer = styled.div`
  font-size: 24px;
  height: 140px;
  width: 326px;
  display: flex;
  overflow: auto;
  ::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <Card bgColor={appDarkBlue}
            imgSrc={mockbook1}
            bookTitle={'Hooked'}
            author={'Nir Eyal'}
            reads={'120'}
            detail={mockedHookData}
      />
            <Card bgColor={appPurple}
            imgSrc={mockbook2}
            bookTitle={'The One Thing'}
            author={'Gary Keller'}
            reads={'90'}
            detail={mockTheOneThingData}
      />
    </CarouselContainer>
  )
}

export default Carousel
