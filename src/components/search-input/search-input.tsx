import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import magnifier from '../../assets/images/magnifier.png'
import { SearchContext } from '../../context/search-context';
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
  const [searchValue, setSearchValue] = useState('')
  const debounceConsole = debounce(setSearchValue, 500)
  const history = useHistory();
  const [searchContext, setSearchContext] = useContext(SearchContext);

  useEffect(() => {
   if (searchValue.length === 0) {
    history.push('/')
   }
    return () => {
    }
  }, [searchContext, searchValue])


  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {         
    if(e.target.value.length >= 3) {
      history.push('search')
    }
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
