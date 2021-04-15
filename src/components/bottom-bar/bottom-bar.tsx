import React from 'react'
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
        bottom bar works
      </BottomBarTag>
    </div>
  )
}

export default BottomBar
