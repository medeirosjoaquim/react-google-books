import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';

import magnifier from '../../assets/images/magnifier.png'
import { SearchContext, SearchStatusContext } from '../../context/search-context';
import { SearchInputContainer, StyledInput, Icon } from './search-input-components/components';
import { Books } from '../../models/books.model';
import { buildQuery } from '../../helpers/query.helper';



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
  //const [searchValue, setSearchValue] = useState('')
  const [searchStatusContext, setSearchStatusContext] = useContext(SearchStatusContext);
  const debounceConsole = debounce(setSearchStatusContext, 1000)
  const history = useHistory();
  const [searchContext, setSearchContext] = useContext(SearchContext);
  //const [searchResults, setSearchResults] = useState<Books>(searchContext);

  useEffect(() => {
   if (searchStatusContext.searchQuery.length < 3) {
    history.push('/')
   } else {
    history.push('search')
    setSearchStatusContext({...searchStatusContext, fetchStatus: 'loading', startIndex: 0})
    axios
    .get<Books>(buildQuery( searchStatusContext.searchQuery, 0))
    .then(response => {
      setSearchStatusContext({...searchStatusContext, fetchStatus: 'loaded'})
      setSearchContext(response.data)
      // for change startIndex ;;; setSearchContext({...searchContext,...response.data})
    })
    .catch(() => {
      //
    });
   }
    return () => {
    }
  }, [searchStatusContext.searchQuery])


  
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {         
    if(e.target.value.length >= 3) {
    }
    debounceConsole({...searchStatusContext, searchQuery: e.target.value})
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
