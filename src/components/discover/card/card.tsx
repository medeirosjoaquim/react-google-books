import React from 'react'
import triangle from '../../../assets/images/triangle.png';
import ovalLeft from '../../../assets/images/oval-left.png';
import readIcon from '../../../assets/images/readicon.png';
import { CardBookAuthor,
   CardBookTitle, 
   CardCircle, 
   CardContainer, 
   CardImg, 
   CardOvalLeft, 
   CardReadIcon, 
   CardReadNow, 
   CardRedBar, 
   CardTriangle } from './components/card-components';
import { Item } from '../../../models/books.model';
import { useHistory } from 'react-router';

export interface ICard {
  bgColor: string;
  imgSrc: string;
  bookTitle: string;
  author: string;
  reads: string;
  detail: {};
}

function Card({
  bgColor = '',
  imgSrc = '',
  bookTitle = '',
  author = 'test',
  reads = '',
  detail

 }: ICard) {
   const history = useHistory()
  return (
    <CardContainer bgColor={bgColor} 
      onClick={() => history.push({
        pathname: '/detail',
        state:  detail
      })}>
      <CardImg 
      src={imgSrc} alt={`Cover for book titled ${bookTitle}`}/>
      <CardRedBar/>
      <CardTriangle src={triangle}/>
      <CardOvalLeft src={ovalLeft}/>
      <CardCircle/>
      <CardBookTitle>{bookTitle}</CardBookTitle>
      <CardBookAuthor>{author}</CardBookAuthor>
      <CardReadIcon src={readIcon}/>
      <CardReadNow><span style={{fontWeight: 'bold'}}>{reads}+</span>Read now</CardReadNow>
    </CardContainer>
  )
}

export default Card
