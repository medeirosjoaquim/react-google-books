import React from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomBar from './components/bottom-bar';
import SearchInput from './components/search-input/search-input';
import Detail from './pages/detail';
import Error from './pages/error';
import Home from './pages/home'
import Search from './pages/search';

import './style.scss'

export default function App() {
  return (
    <div className="wrapper">
      <SearchInput/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/detail" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/error" component={Error} />
      </Switch>
      <BottomBar/>
    </div>
  )
}
