import React from 'react'
import styled from 'styled-components'

export interface ICard {
  bgColor: string;
  imgSrc: string;
  bookTitle: string;
  author: string;
  rating: string;
}

const CardContainer = styled.div`
  height: 140px;
  width: 272px;
  background-color: #fff;
  background: #00173D;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
`

function Card({
  bgColor = '',
  imgSrc = '',
  bookTitle = '',
  author = '',
  rating = ''
 }: ICard) {
  return (
    <CardContainer>
      
    </CardContainer>
  )
}

export default Card
