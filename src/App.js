import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreateAccount from './pages/createAcc';
import LogIn from './pages/login';

function App() {
  return (
    <Router>
      <span className="">
        <Switch>
          <Route exact path="/login/" component={ LogIn }/>
          <Route exact path="/createaccount/" component={ CreateAccount }/>
        </Switch>
      </span>
    </Router>
  );
}

export default App;
