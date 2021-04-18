import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Loader from '../../components/discover/card/components/loader';
import { SearchContext, SearchStatusContext } from '../../context/search-context';
import { buildQuery } from '../../helpers/query.helper';
import { Books } from '../../models/books.model';
import { LoadingResults, Label, SearchContainer, LoadMoreBtn, LoadMoreWrapper } from './components/search-results-components';



function Search() {
  const [searchContext, setSearchContext] = useContext(SearchContext);
  const [searchStatusContext, setSearchStatusContext] = useContext(SearchStatusContext);
  const history = useHistory();

const loadMore = () => {
  const nextIndex = searchStatusContext.startIndex + 5;
  setSearchStatusContext({...searchStatusContext, loadMore: true,startIndex: nextIndex})
}

// LOAD MORE
useEffect(() => {
  if (!searchStatusContext.loadMore) {
    return;
  }
  setSearchStatusContext({...searchStatusContext, fetchStatus: 'loading'})
  axios
    .get<Books>(buildQuery( searchStatusContext.searchQuery, searchStatusContext.startIndex))
    .then(response => {
      setSearchStatusContext({...searchStatusContext, fetchStatus: 'loaded'})
      const concatItems = Array.from(new Set([...searchContext.items, ...response.data.items]))
      setSearchContext({...response.data, items: concatItems})
    })
    .catch(() => {
      setSearchStatusContext({...searchStatusContext, fetchStatus: 'error'})
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
    return (
      <SearchContainer>
        {searchContext.items.map(book => <li key={book.id}>{book.volumeInfo.title}</li>)}
        <LoadMoreWrapper>
          <LoadMoreBtn onClick={() => loadMore()}>load more</LoadMoreBtn>
        </LoadMoreWrapper>
      </SearchContainer>
    )    
  }

}

export default Search
