import React from 'react'
import styled from 'styled-components';

const SearchInputContainer = styled.div`
  top: 20px;
  left: 20px;
  right: 20px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;
/*
position: absolute;
width: 336px;
height: 48px;
left: 19px;
top: 50px;

background: #FDFCFC;
box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
border-radius: 10px;
*/

function SearchInput() {
  return (
    <SearchInputContainer>
      <input type="text"/>
    </SearchInputContainer>
  )
}

export default SearchInput
