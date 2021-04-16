import React from 'react'
import styled from 'styled-components';
import Card from '../card';

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
      <Card/>
    </CarouselContainer>
  )
}

export default Carousel
