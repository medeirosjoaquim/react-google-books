import React from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';

//TODO  add icon magnifier 
const StyledInput = styled.input`
	border: 1px solid black;
	border-radius: 3px;
	padding: 0 8px;
	box-sizing: border-box;
  font-size: 16px;
  //text-align: center;
  line-height: 18px;
  width: 336px;
  height: 48px;
  left: 19px;
  top: 50px;
  
  background: #FDFCFC;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border-radius: 10px;
	&::placeholder {
		color: ${colors.appDark};
	}
	&:focus {
		background-color: #fafafa;
		border: none;
    outline: none;
    // dont remove outline for accessibility
    box-shadow: 0 0 1px 2px ${colors.appDark50};
	}
`;
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
      <StyledInput/>
    </SearchInputContainer>
  )
}

export default SearchInput
