import styled from "styled-components";
import { colors } from "../../../assets/colors";

const { appLightGreen } = colors;

export const CurrentlyReadingContainer = styled.div`
position: relative;
  margin-top: 30px;
  margin-left: 20px;
  font-size: 24px;
  height: 180px;
  display: flex;
  flex-direction: column;
`;

export const BookWithMarker = styled.img`
  height: 10px;
  width: 10px;
  margin-right: 4px;
`
export const LabelWrapper = styled.div`
  font-size: 18px;
  width: 90%;
  display: flex;
  font-weight: bold;
  margin-bottom: 32px;
  justify-content: space-between
`

export const Label = styled.span<{ color: string }>`
font-size: 18px;
display: block;
font-weight: bold;
color: ${prop => prop.color};
`

export const Banner = styled.div`
  position: absolute;
  background-color: ${appLightGreen};
  top: 50px;
  width: 330px;
  height: 100px;
  overflow: hidden;
`
export const Circle = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  left: 65%;
  top: -10px;
  bottom: 76.98%;
  border: 2px solid #4550A7;
  border-radius: 100%;
`;

export const FullOval = styled.img`
  position: absolute;
  overflow: hidden;
  right: -30px;
  top: -15px;
  height:70px;
  width: 70px;
`
export const RedBar = styled.div`
  position: absolute;
  width: 50px;
  height: 5px;
  right: -25px; 
  bottom: 25px;
  background: #EC6374;
  transform: rotate(14deg);
`;
export const CurrentlyReadingBookCover = styled.img`
  position: absolute;
  top: 30px;
  left: 20px;
  height: 130px;
  width: 88px;
`
export const Title = styled.span`
/* book title */
  position: absolute;
  width: 103px;
  height: 27px;
  left: 118px;
  top: 60px;
  font-family: PlayfairPlayfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 2px;
  color: #2A2B26;
`
export const Author = styled.span`
  position: absolute;
  width: 106px;
  height: 12px;
  left: 118px;
  top: 95px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #74776D;
`
export const Chapters = styled.div`
  display: flex;
  position: absolute;
  width: 106px;
  height: 12px;
  left: 120px;
  bottom: 50px;
  font-size: 10px;
  line-height: 12px;
  color: #2A2B26;
  & span {
    margin-right: 4px;
  }
`