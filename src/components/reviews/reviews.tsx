import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
const {appDark50, appLightBlue} = colors;
import reviewbanner from '../../assets/images/review-banner.png'

const ReviewContainer = styled.div`
  margin-top: 3px;
  margin-left: 20px;
  font-size: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  font-size: 18px;
  width: 90%;
  display: flex;
  font-weight: bold;
  margin-bottom: 15px;
  justify-content: space-between
`
const ImgBanner = styled.img`
width: 100%;
height: 160px;
`

const Label = styled.span<{color: string}>`
font-size: 18px;
display: block;
font-weight: bold;
color: ${prop => prop.color};
`

function Review() {
  return (
    <ReviewContainer>
      <LabelWrapper>
        <Label color={appDark50}>Reviews of the day</Label>
        <Label color={appLightBlue}>All Videos</Label>
      </LabelWrapper>
      <ImgBanner src={reviewbanner}/>
    </ReviewContainer>
  )
}

export default Review
