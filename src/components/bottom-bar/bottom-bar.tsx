import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../assets/colors';

const home = require('../../assets/images/home.svg') as string;
const libraries = require('../../assets/images/book.svg') as string;
const profile = require('../../assets/images/profile.svg') as string;

const BottomBarTag = styled.div`
position: fixed;
  margin-left: 20px;
  bottom: 0;
  padding-bottom: 4px;
  margin-top: 8px;
  height: 40px;
  background-color: ${colors.appCream};
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 376px) {
    width: 320px;
  }
`;
const Label = styled.span`
  display: block;
  margin-top: 6px;
  font-size: 12px;
`;

const BarItem = styled.div`
  display: flex;
  flex-direction: column;
`

function BottomBar() {
  return (
    <div>
      <BottomBarTag>
      <Link to='/'>
      <BarItem>
        <img height={22} src={home} />  
        <Label>Home</Label>
      </BarItem>  
      </Link>
      <BarItem>
        <img height={22} src={libraries} />  
        <Label>Libraries</Label>
      </BarItem>  
      <BarItem>
        <img height={22} src={profile} />  
        <Label>Profile</Label>
      </BarItem>  
      </BottomBarTag>
    </div>
  )
}

export default BottomBar
