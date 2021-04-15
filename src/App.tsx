import React from 'react'
import { Route, Switch } from 'react-router-dom';

import BottomBar from './components/bottom-bar';
import Detail from './pages/detail';
import Error from './pages/error';
import Main from './pages/main'
import Search from './pages/search';

import './style.scss'

export default function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/detail" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/error" component={Error} />
      </Switch>
      <BottomBar/>
    </div>
  )
}
