import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Item } from '../../models/books.model'
import styled from 'styled-components';
import Loader from '../../components/discover/card/components/loader';
import { SearchContext, SearchStatusContext } from '../../context/search-context';
import { buildQuery } from '../../helpers/query.helper';
import { Books } from '../../models/books.model';
import { LoadingResults, Label, SearchContainer, LoadMoreBtn, LoadMoreWrapper, BookAuthor, BookContainer, BookCover, BookTitle, NoCover } from './components/search-results-components';


function Search() {
  const [searchContext, setSearchContext] = useContext(SearchContext);
  const [searchStatusContext, setSearchStatusContext] = useContext(SearchStatusContext);
  const history = useHistory();

  const loadMore = () => {
    const nextIndex = searchStatusContext.startIndex + 5;
    setSearchStatusContext({ ...searchStatusContext, loadMore: true, startIndex: nextIndex })
  }


  const renderBook = (book: Item) =>
  (<BookContainer key={book.id}
    onClick={() => history.push({
      pathname: '/detail',
      state: { book }
    })}

  >
    {book.volumeInfo?.imageLinks?.smallThumbnail
      ? <BookCover src={book.volumeInfo?.imageLinks?.smallThumbnail} />
      : <NoCover>No cover</NoCover>
    }

    <BookTitle>
      {book.volumeInfo.title.length > 28 ?
        book.volumeInfo.title.substring(0, 27) + '...'
        : book.volumeInfo.title}
    </BookTitle>
    {book.volumeInfo.authors &&
      <BookAuthor>by {''}
        {book.volumeInfo.authors.length === 1 ? book.volumeInfo.authors[0].substring(0, 24)
          : `${book.volumeInfo.authors[0]} and more`}
      </BookAuthor>}
  </BookContainer>)

  // LOAD MORE
  useEffect(() => {
    if (!searchStatusContext.loadMore) {
      return;
    }
    setSearchStatusContext({ ...searchStatusContext, fetchStatus: 'loading' })
    axios
      .get<Books>(buildQuery(searchStatusContext.searchQuery, searchStatusContext.startIndex))
      .then(response => {
        setSearchStatusContext({ ...searchStatusContext, fetchStatus: 'loaded' })
        const concatItems = Array.from(new Set([...searchContext.items, ...response.data.items]))
        setSearchContext({ ...response.data, items: concatItems })
      })
      .catch(() => {
        setSearchStatusContext({ ...searchStatusContext, fetchStatus: 'error' })
      });


    return () => {
    }
  }, [searchStatusContext.startIndex])

  if (searchStatusContext.fetchStatus === 'loading') {
    return (
      <LoadingResults>
        <Label><h1>Loading results</h1></Label>
        <Loader />
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
        {searchContext.items.map(book => renderBook(book))}
        <LoadMoreWrapper>
          <LoadMoreBtn onClick={() => loadMore()}>load more</LoadMoreBtn>
        </LoadMoreWrapper>
      </SearchContainer>
    )
  }

}

export default Search
