import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import Card from '../card';
import mockbook1 from '../../../assets/images/mock_book_hooked.jpg';
import mockbook2 from '../../../assets/images/mock_book_one_thing.jpg';

const {appDarkBlue, appPurple} = colors;

const CarouselContainer = styled.div`
  font-size: 24px;
  height: 140px;
  width: 376px;
  display: flex;
  width: 100%;
  background-color: #aaa;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <Card bgColor={appDarkBlue}
            imgSrc={mockbook1}
            bookTitle={'Hooked'}
            author={'Nir Eyal'}
            reads={'120'}
      />
            <Card bgColor={appPurple}
            imgSrc={mockbook2}
            bookTitle={'The One Thing'}
            author={'Gary Keller'}
            reads={'90'}
      />
    </CarouselContainer>
  )
}

export default Carousel
