import styled from "styled-components"
import { colors } from "../../../assets/colors"
const {appDarkBlue, appDark50} = colors;
export const SearchContainer = styled.div`
  width: 360px;
  overflow-y: scroll; 
  height:580px;
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`
export const LoadMoreWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`

export const LoadMoreBtn = styled.button`
 display: inline-block;
    padding: 15px 30px;
    border: 2px solid #ddd;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    min-width: 100px;
    text-align: center;
    margin: 5px 10px;
    text-transform: uppercase;
    border-color: ${appDark50};
    color: #0a9929;
`
export const LoadingResults = styled.div`
  padding: 20px;
  width: 100%;
  height:580px;
  margin-left: 20px;
  margin-top: 20px;
`

export const Label = styled.div`
height: 200px;
text-align: center;
`

export const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 105px;
  height: 200px;
  margin-right: 8px;
  margin-bottom: 12px;
`
export const BookCover = styled.img`
  min-height: 153px;
  width: 105px;
  margin-bottom: 8px;
`
export const NoCover = styled.div`
  height: 150px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding-top: 40px;
  width: 100px;
`
export const BookTitle = styled.span`
  display: block;
  
  font-weight: bold;
  font-size: 12px;
  color: rgba(49, 49, 49, 0.8);
`

export const BookAuthor = styled.span`
  display: block;
  height: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  color: rgba(49, 49, 49, 0.8);
  margin-bottom: 8px;
  margin-top: 4px;
`