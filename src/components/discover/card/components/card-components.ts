import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 140px;
  width: 272px;
  background-color: #fff;
  background: #00173D;
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
  border-radius: 5px;
`

export const CardImg = styled.img`
  width: 72px;
  height: 111px;
  position: absolute;
  left: 66.18%;
  right: 7.35%;
  top: 10.79%;
  bottom: 9.35%;
`;

export const CardTriangle= styled.img`
  position: absolute;
  left: 61.95%;
  right: 25.97%;
  top: 2.73%;
  bottom: 76.97%;
`;
export const CardOvalLeft = styled.img`
position: absolute;
left: -9.19%;
right: 62.5%;
top: 17.99%;
bottom: -9.35%;

`;
export const CardCircle = styled.div`
  position: absolute;
  left: 52.94%;
  right: 40.44%;
  top: 10.07%;
  bottom: 76.98%;
  border: 2px solid #4550A7;
  border-radius: 100%;
`;

export const CardRedBar = styled.div`
  position: absolute;
  left: 53.37%;
  right: 29.72%;
  top: 68.7%;
  bottom: 28.42%;
  background: #EC6374;
  transform: rotate(14deg);
`;
export const CardBookTitle = styled.span`
  position: absolute;
  height: 36px;
  left: 7.35%;
  right: 53.31%;
  top: calc(50% - 36px/2 - 34.5px);
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #FEFEFE;
`
export const CardBookAuthor = styled.span`
  position: absolute;
  height: 36px;
  left: 7.35%;
  right: 53.31%;
  top: calc(50% - 36px/2 - 34.5px);
  font-family: Playfair Display;
  font-style: normal;
  font-weight: bold;
  font-size: 27px;
  line-height: 36px;
  letter-spacing: 2px;
  color: #FEFEFE;
`