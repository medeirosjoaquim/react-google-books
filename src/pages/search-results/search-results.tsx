import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Loader from '../../components/discover/card/components/loader';
import { SearchContext, SearchStatusContext } from '../../context/search-context';
import { buildQuery } from '../../helpers/query.helper';
import { Books } from '../../models/books.model';

const SearchContainer = styled.div`
  padding: 20px;
  width: 100%;
  overflow-y: scroll; 
  height:580x;
  margin-left: 20px;
  margin-top: 20px;
`

const LoadingResults = styled.div`
  padding: 20px;
  width: 100%;
  height:580x;
  margin-left: 20px;
  margin-top: 20px;
`

const Label = styled.div`
height: 200px;
text-align: center;
`

function Search() {
  const [searchContext, setSearchContext] = useContext(SearchContext);
  const [searchStatusContext, setSearchStatusContext] = useContext(SearchStatusContext);
  const history = useHistory();

const loadMore = () => {
  const nextIndex = searchStatusContext.startIndex + 11;
  setSearchStatusContext({...searchStatusContext, startIndex: nextIndex})
}

// LOAD MORE
useEffect(() => {
  setSearchStatusContext({...searchStatusContext, fetchStatus: 'loading'})
  axios
    .get<Books>(buildQuery( searchStatusContext.searchQuery, searchStatusContext.startIndex))
    .then(response => {
      setSearchStatusContext({...searchStatusContext, fetchStatus: 'loaded'})
      const concatItems = Array.from(new Set([...searchContext.items, ...response.data.items]))
      setSearchContext({...response.data, items: concatItems})
      // for change startIndex ;;; setSearchContext({...searchContext,...response.data})
    })
    .catch(() => {
      // if error , set status error
    });


  return () => {
  }
}, [searchStatusContext.startIndex])

  if(searchStatusContext.fetchStatus === 'loading') {
    return (
      <LoadingResults>
      <Label><h1>Loading results</h1></Label>
      <Loader/>
    </LoadingResults>
    )
  }
  if (!searchContext.items || searchContext.items.length === 0) {
    return (
      <SearchContainer>
        <Label><h1>No items found</h1></Label>
      </SearchContainer>
    )    
  } else {
    console.log(searchContext.items)
    return (
      <SearchContainer>
        {searchContext.items.map(book => <li key={book.id}>{book.volumeInfo.title}</li>)}
        <button onClick={() => loadMore()}>load more</button>
      </SearchContainer>
    )    
  }

}

export default Search
