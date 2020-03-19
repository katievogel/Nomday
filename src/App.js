import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import CreateAccount from './pages/createAcc';

function App() {
  return (
    <Router>
      <span className="">
        <Switch>
          <Route exact path="/createaccount/" component={ CreateAccount }/>
        </Switch>
      </span>
    </Router>
  );
}

export default App;
