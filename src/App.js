import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Checkout from "./component/Checkout/Checkout";

import "./App.scss";



function App()
{
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
