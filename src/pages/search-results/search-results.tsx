import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SearchContext } from '../../context/search-context';

const SearchContainer = styled.div`
height: 100%;
`


function Search() {
  const [searchContext, setSearchContext] = useContext(SearchContext);
  const history = useHistory();

useEffect(() => {
  setTimeout(() => {
   // history.push('/')
  }, 2000);
  return () => {
  }
}, [])

  return (
    <SearchContainer>
      search works
    </SearchContainer>
  )
}

export default Search
