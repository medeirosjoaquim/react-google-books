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
  position: relative;
  height: 140px;
  width: 272px;
  background-color: #fff;
  background: #00173D;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
`

const CardImg = styled.img`
  width: 72px;
  height: 111px;
  position: absolute;
  left: 66.18%;
  right: 7.35%;
  top: 10.79%;
  bottom: 9.35%;
`;


function Card({
  bgColor = '',
  imgSrc = '',
  bookTitle = '',
  author = '',
  rating = ''
 }: ICard) {
  return (
    <CardContainer>
      <CardImg 
      src={imgSrc} alt={`Cover for book titled ${bookTitle}`}/>
    </CardContainer>
  )
}

export default Card
