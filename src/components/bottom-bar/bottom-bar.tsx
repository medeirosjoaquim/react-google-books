import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomBarTag = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function BottomBar() {
  return (
    <div>
      <BottomBarTag>
      <Link to="/">Home </Link>
      <Link to="/detail">Detail </Link>
      <Link to="/search">Search </Link>
      </BottomBarTag>
    </div>
  )
}

export default BottomBar
