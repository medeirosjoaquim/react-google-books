import React, { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import BottomBar from './components/bottom-bar';
import SearchInput from './components/search-input/search-input';
import { SearchContext, SearchStatusContext, ISearchStatusState, SearchResultInitialState } from './context/search-context';
import Detail from './pages/detail';
import Error from './pages/error';
import Home from './pages/home'
import Search from './pages/search-results';

import './style.scss'

export default function App() {
  const [searchContext, setSearchContext] = useState(
    SearchResultInitialState
  );
const [showSearchInput, setShowSearchInput] = useState(true)
  const [searchStatusContext, setSearchStatusContext] = useState<ISearchStatusState>(
    {fetchStatus: 'none', startIndex: 0, searchQuery: '', loadMore: false}
  );
  const {pathname} = useLocation();
const history = useHistory()
useEffect(() => {
  history.listen((location, action) => {
    if (location.pathname === '/detail') {
      setShowSearchInput(false)
    } else {
      setShowSearchInput(true)
    }
  });
  return () => {
  }
}, [])

  return (
    <SearchStatusContext.Provider 
      value={[searchStatusContext, setSearchStatusContext]}>
      <SearchContext.Provider value={[searchContext, setSearchContext]}>
        <div className="wrapper">
          <SearchInput show={showSearchInput}/>
          <div className="pages">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/detail" component={Detail} />
              <Route path="/search" component={Search} />
              <Route path="/error" component={Error} />
            </Switch>
          </div>
          <BottomBar />
        </div>
      </SearchContext.Provider>
    </SearchStatusContext.Provider>
  )
}
