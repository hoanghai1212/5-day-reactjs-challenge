import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

import "./App.scss";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import Login from "./pages/Login/Login";
import { auth } from "./config/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";



function App()
{
  const [{ }, dispatch] = useStateValue();
  useEffect(() =>
  {

    auth.onAuthStateChanged(authUser =>
    {
      if (authUser)
      {
        dispatch({
          type: 'SET_USER',
          payload: { user: authUser }
        })
      } else
      {
        dispatch({
          type: 'SET_USER',
          payload: { user: null }
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <AuthTemplate path="/login" Component={Login} />
        <HomeTemplate path="/checkout" Component={Checkout} />
        <HomeTemplate exact path="/" Component={Home} />
      </div>
    </Router>
  );
}

export default App;
