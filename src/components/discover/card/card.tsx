import React from 'react'
import triangle from '../../../assets/images/triangle.png';
import ovalLeft from '../../../assets/images/oval-left.png';
import circle from '../../../assets/images/circle.png';
import redbar from '../../../assets/images/redbar.png';
import { CardBookTitle, CardCircle, CardContainer, CardImg, CardOvalLeft, CardRedBar, CardTriangle } from './components/card-components';

export interface ICard {
  bgColor: string;
  imgSrc: string;
  bookTitle: string;
  author: string;
  rating: string;
}

function Card({
  bgColor = '',
  imgSrc = '',
  bookTitle = '',
  author = 'test',
  rating = ''
 }: ICard) {
  return (
    <CardContainer>
      <CardImg 
      src={imgSrc} alt={`Cover for book titled ${bookTitle}`}/>
      <CardRedBar/>
      <CardTriangle src={triangle}/>
      <CardOvalLeft src={ovalLeft}/>
      <CardCircle/>
      <CardBookTitle>{bookTitle}</CardBookTitle>
    </CardContainer>
  )
}

export default Card
