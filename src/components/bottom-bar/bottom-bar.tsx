import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const home = require("../../assets/images/home.svg") as string;
const libraries = require("../../assets/images/book.svg") as string;
const profile = require("../../assets/images/profile.svg") as string;


const BottomBarTag = styled.div`
  position: absolute;
  bottom: 20px;
  padding: 8px;
  left: 20px;
  right: 20px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
      <Link to="/">
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
