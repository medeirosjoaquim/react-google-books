import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Search from './pages/search';
import Main from './pages/main'
import './style.scss'
import Detail from './pages/detail';

export default function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/search" component={Search} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  )
}
