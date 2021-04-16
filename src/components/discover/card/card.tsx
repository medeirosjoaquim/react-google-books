import React from 'react'
import styled from 'styled-components'
import triangle from '../../../assets/images/triangle.png';
import ovalLeft from '../../../assets/images/oval-left.png';
import circle from '../../../assets/images/circle.png';
import redbar from '../../../assets/images/redbar.png';


export interface ICard {
  bgColor: string;
  imgSrc: string;
  bookTitle: string;
  author: string;
  rating: string;
}

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
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

const CardTriangle= styled.img`
  position: absolute;
  left: 61.95%;
  right: 25.97%;
  top: 2.73%;
  bottom: 76.97%;
`;
const CardOvalLeft = styled.img`
position: absolute;
left: -9.19%;
right: 62.5%;
top: 17.99%;
bottom: -9.35%;

`;
const CardCircle = styled.div`
  position: absolute;
  left: 52.94%;
  right: 40.44%;
  top: 10.07%;
  bottom: 76.98%;
  border: 2px solid #4550A7;
  border-radius: 100%;
`;

const CardRedBar = styled.div`
/* Rectangle */


position: absolute;
left: 53.37%;
right: 29.72%;
top: 68.7%;
bottom: 28.42%;

background: #EC6374;
transform: rotate(14deg);

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
      <CardRedBar/>
      <CardTriangle src={triangle}/>
      <CardOvalLeft src={ovalLeft}/>
      <CardCircle/>
    </CardContainer>
  )
}

export default Card
