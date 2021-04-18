import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomBar from './components/bottom-bar';
import SearchInput from './components/search-input/search-input';
import { SearchContext } from './context/search-context';
import Detail from './pages/detail';
import Error from './pages/error';
import Home from './pages/home'
import Search from './pages/search-results';

import './style.scss'

export default function App() {
  const [searchContext, setSearchContext] = useState(
    {kind: '', totalItems: 0, items: []}
  );
  return (
    <SearchContext.Provider value={[searchContext, setSearchContext]}>
    <div className="wrapper">
      <SearchInput/>
      <div className="pages">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/error" component={Error} />
      </Switch>
      </div>
      <BottomBar/>
    </div>
    </SearchContext.Provider>
  )
}
