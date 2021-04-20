import React, {useState} from 'react'
import {RouteComponentProps} from 'react-router'
import BackButton from '../../components/back-button/back-button'
import headerImg from '../../assets/images/detail-header.png'
import {Item} from '../../models/books.model'
import './detail.scss'
import {
    DetailWrapper,
    HeaderWrapper,
    DetailHeaderImg,
    BackBtnWrapper,
    BookCoverImg,
    NoCover,
    InfoWrapper,
    DescriptionWrapper,
    Title,
    SubTitle,
    Author,
} from './components/detail-components'


function Detail({location}: RouteComponentProps<{}, {}, Item>) {
    const book = location.state;
    const {title, subtitle, imageLinks, description, authors} = book.volumeInfo;
    const [imageLoaded, setImageLoaded] = useState(false)
    const [readMore, setreadMore] = useState(false)
    const handleImageLoaded = () => {
        setImageLoaded(true);
    }
console.log(description)
    return (
        <DetailWrapper>
            <HeaderWrapper>
                <DetailHeaderImg src={headerImg}/>
                {!imageLoaded && <NoCover></NoCover>}
                {imageLinks.thumbnail
                    ? <BookCoverImg src={imageLinks.thumbnail}
                                    onLoad={() => handleImageLoaded()}/>
                    : <NoCover></NoCover>}
                <BackBtnWrapper><BackButton/></BackBtnWrapper>
            </HeaderWrapper>


            <InfoWrapper>
                <div className="">
                    {title && <Title>{title}</Title>}
                    {subtitle && <SubTitle>{' : '}{subtitle}</SubTitle>}
                </div>
                <Author>{authors}</Author>
            </InfoWrapper>
            {description && <DescriptionWrapper className={readMore ? '' : 'description--container'}>{description}
                <p className="read-more"></p>
                {!readMore && <button className="read-more-btn"
                                      onClick={() => setreadMore((true))}>Read More</button>}
            </DescriptionWrapper>}

        </DetailWrapper>
    )
}

export default Detail
