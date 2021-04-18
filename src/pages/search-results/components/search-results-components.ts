import styled from "styled-components"
import { colors } from "../../../assets/colors"
const {appDarkBlue, appDark50} = colors;
export const SearchContainer = styled.div`
  padding: 20px;
  width: 100%;
  overflow-y: scroll; 
  height:580px;
  margin-left: 20px;
  margin-top: 20px;
`
export const LoadMoreWrapper = styled.div`
  width: 100%auto;
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