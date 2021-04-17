import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';

const {appPink} = colors;

export interface IGreetings {
  userName: string;
}
const GreetingsContainer = styled.div`
  margin: 34px 0;
  margin-left: 20px;
  font-size: 24px;
  font-weight: bold;
`;
const GreetingsUserName = styled.span`
  font-size: 24px;
  color: ${appPink};
`;

function Greetings({userName = ''}: IGreetings) {
  return (
    <GreetingsContainer>
      <span>Hi,{' '}</span>
      <GreetingsUserName>{userName} </GreetingsUserName>
      <span>, 👋</span>
    </GreetingsContainer>
  )
}

export default Greetings
