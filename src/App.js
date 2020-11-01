import React from 'react'
import './App.css';
import { Nav } from './components'
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom'
import { Covid, Home, Stock, User } from './templates';

function App() {
  return (<>
    <Router>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/user' component={User}></Route>
        <Route path='/covid' component={Covid}></Route>
        <Route path='/stock' component={Stock}></Route>
      </Switch>
    </Router>
  </>);
}

export default App;
