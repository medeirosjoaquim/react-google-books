import React from 'react'
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import Card from '../card';
import mockbook1 from '../../../assets/images/mock_book_hooked.jpg';
import mockbook2 from '../../../assets/images/mock_book_hooked.jpg';

const CarouselContainer = styled.div`
  font-size: 24px;
  height: 140px;
  width: 500px;
  display: flex;
  width: 100%;
  background-color: #aaa;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <Card bgColor={colors.appDarkBlue}
            imgSrc={mockbook1}
            bookTitle={'Hooked'}
            author={'Nir Eyal'}
            rating={''}
      />
            <Card bgColor={colors.appPurple}
            imgSrc={mockbook1}
            bookTitle={'The One Thing'}
            author={'Gary Keller'}
            rating={''}
      />
    </CarouselContainer>
  )
}

export default Carousel
