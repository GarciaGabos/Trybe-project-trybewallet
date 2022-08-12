import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <>
      <p>TrybeWallet!</p>
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
      </Switch>
    </>);
}

export default App;
