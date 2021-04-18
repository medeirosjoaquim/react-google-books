import React from 'react';
import { Books } from '../models/books.model';

export type FetchStatus = 'loading' | 'loaded' | 'error' | 'none'
export interface ISearchStatusState {
  fetchStatus: FetchStatus;
  searchQuery: string;
  startIndex: number
}

type SearchStatusState = [ISearchStatusState, (value: ISearchStatusState) => void];
type SearchState = [Books, (value: Books) => void];

export const SearchContext = React.createContext<SearchState>(
  [{kind: '', totalItems: 0, items: []}, (value: Books) => {} ]
);

export const SearchStatusContext = React.createContext<SearchStatusState>(
  [{fetchStatus: 'none', startIndex: 0, searchQuery: ''}, (value: ISearchStatusState) => {} ]
);