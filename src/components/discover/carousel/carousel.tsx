import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import Card from '../card';
import mockbook1 from '../../../assets/images/mock_book_hooked.jpg';
const CarouselContainer = styled.div`
  font-size: 24px;
  height: 140px;
  display: block;
  width: 100%;
  background-color: #aaa;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <Card bgColor={colors.appDarkBlue}
            imgSrc={mockbook1}
            bookTitle={''}
            author={''}
            rating={''}
      />
    </CarouselContainer>
  )
}

export default Carousel
