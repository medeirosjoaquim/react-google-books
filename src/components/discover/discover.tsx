import React from 'react'
import styled from 'styled-components';
import Carousel from './carousel';

const DiscoverContainer = styled.div`
  margin: 30px 0;
  margin-left: 20px;
  font-size: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
font-size: 18px;
font-weight: bold;
color: #3F4043;
margin-bottom: 15px;
`

function Discover() {
  return (
    <DiscoverContainer>
      <Label>Discover new book</Label>
      <Carousel/>
    </DiscoverContainer>
  )
}

export default Discover
