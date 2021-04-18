import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import magnifier from '../../assets/images/magnifier.png'
import { SearchInputContainer, StyledInput, Icon } from './search-input-components/components';

// https://www.googleapis.com/books/v1/volumes?q=${query}

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


function SearchInput() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
     // history.push('search')
    }, 2000);
    return () => {
    }
  }, [])
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
