import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router'
import BackButton from '../../components/back-button/back-button'
import headerImg from '../../assets/images/detail-header.png'
import { Item } from '../../models/books.model'
import { DetailWrapper, HeaderWrapper, DetailHeaderImg, BackBtnWrapper, BookCoverImg, NoCover, InfoWrapper, Title, SubTitle, Author } from './components/detail-components'


const handleImageLoaded = () => {

}

function Detail({ location }: RouteComponentProps<{}, {}, Item>) {
  const book = location.state;
  const {title, subtitle, imageLinks , infoLink, authors} = book.volumeInfo;
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <DetailWrapper>
      <HeaderWrapper>
        <DetailHeaderImg src={headerImg}/>
      </HeaderWrapper>
      <BackBtnWrapper><BackButton/></BackBtnWrapper>
      {!imageLoaded && <NoCover></NoCover>}
      {imageLinks.thumbnail 
      ?  <BookCoverImg src={imageLinks.thumbnail}
                       onLoad={() => handleImageLoaded()}/> 
      :  <NoCover></NoCover>}
      <InfoWrapper>
        <div className="">
          {title && <Title>{title}</Title>}
          {subtitle && <SubTitle>{' : '}{subtitle}</SubTitle>}
        </div>
        <Author>{authors}</Author>
      </InfoWrapper>
      
    </DetailWrapper>
  )
}

export default Detail
