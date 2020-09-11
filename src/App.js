import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './compoents/header'
import Home from './compoents/home'
import Checkout from './compoents/checkout'

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
        <Route path='/checkout'>    
            <Checkout />
          </Route>
          <Route path='/'>
            <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
