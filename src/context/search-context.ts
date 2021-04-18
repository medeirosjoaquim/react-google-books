import React from 'react';
import { Books } from '../models/books.model';

type SearchState = [Books, (value: Books) => void];

export const SearchContext = React.createContext<SearchState>(
  [{kind: '', totalItems: 0, items: []}, (value: Books) => {} ]
);