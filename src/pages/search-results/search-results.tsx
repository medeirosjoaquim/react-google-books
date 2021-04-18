import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { SearchContext } from '../../context/search-context';

const SearchContainer = styled.div`
padding: 20px;
width: 100%;
margin-left: 20px;
margin-top: 20px;
`
const NoItems = styled.div`
height: 200px;
text-align: center;
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
  if (searchContext.items.length === 0) {
    return (
      <SearchContainer>
        <NoItems><h1>No items found</h1></NoItems>
      </SearchContainer>
    )    
  } else {
    return (
      <SearchContainer>
        items
      </SearchContainer>
    )    
  }

}

export default Search
