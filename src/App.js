import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <>
      <p>Trybe Wallet Manager</p>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </>);
}

export default App;
