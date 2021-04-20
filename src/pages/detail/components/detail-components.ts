import styled from "styled-components";
import { colors } from "../../../assets/colors";

const {appDark25, appPink, appCream, appDarkBlue} = colors;

export const DetailWrapper = styled.div`
  height: 100%;
  width: 376px;
  overflow-x: hidden;
`

export const BookCoverImg = styled.img`
  position: absolute;
  left: 112px;
  top: 84px;
  height: 230px;
  width: 150px;
`
export const NoCover = styled.div`
  position: absolute;
  background-color: ${appCream};
  border: 1px solid ${appDarkBlue};
  left: 112px;
  top: 84px;
  height: 230px;
  width: 150px;
`

export const Title = styled.span`
  font-weight: bold;
  font-size: 24px;
  color: ${appDark25};
`
export const SubTitle = styled.span`
  font-size: 24px;
  color: ${appDark25};
`
export const Author = styled.span`
  width: 57px;
  height: 19px;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.670588px;
  color: ${appPink};
`

export const BackBtnWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
`
export const HeaderWrapper = styled.div`
position: relative;
  height: 300px;
margin-bottom: 40px;
`

export const DetailHeaderImg = styled.img`
  position: absolute;
  top: -20px;
`

export const InfoWrapper = styled.div`
  margin: 20px;
  text-align: start;
`

export const DescriptionWrapper = styled.div`
  margin: 0 20px;
  padding-bottom: 42px;
  text-align: start;
`