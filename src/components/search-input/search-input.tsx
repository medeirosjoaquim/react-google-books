import React, { useState } from 'react'
import styled from 'styled-components';
import { colors } from '../../assets/colors';
import magnifier from '../../assets/images/magnifier.png'

export const debounce = (fn: any, milis: number) => {
  let timeoutID: NodeJS.Timeout;
  return (...args: any) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      fn(...args);
    }, milis);
  };
};

const StyledInput = styled.input`
  border: none;
	border-radius: 3px;
	padding: 0 32px;
	box-sizing: border-box;
  font-size: 16px;
  line-height: 18px;
  width: 336px;
  height: 48px;
  background: #FDFCFC;
  border-radius: 10px;
	&::placeholder {
		color: ${colors.appDark};
	}
	&:focus {
		background-color: #fafafa;
		border: none;
    outline: none;
    // don't remove outline -- for accessibility reasons
    box-shadow: 0 0 1px 1px ${colors.appDark50};
	}
`;

const SearchInputContainer = styled.div`
position: relative;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
`;


const Icon = styled.img`
position: absolute;
  height: 12px;
  left: 10px;
`


function SearchInput() {
  const [searchValue, setSearchValue] = useState()
  // show search useContext
  //const [searchValue, setSearchValue] = useState()

  const debounceConsole = debounce(console.log, 1000)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {         
    debounceConsole(e.target.value)
    
  }
  

  return (
    <SearchInputContainer>
      <StyledInput placeholder={'Search book'}
      onChange={e => handleInputChange(e)}/>
      <Icon src={magnifier}/>  
    </SearchInputContainer>
  )
}

export default SearchInput
