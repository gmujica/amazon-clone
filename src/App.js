import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './compoents/Header'
import Home from './compoents/Home'
import Checkout from './compoents/Checkout'

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
