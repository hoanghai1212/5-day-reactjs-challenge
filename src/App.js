import React, { useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Login/Login";
import Orders from "./pages/Orders/Orders";

import "./App.scss";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import AuthTemplate from "./templates/AuthTemplate/AuthTemplate";
import { auth } from "./config/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import PaymentWithStripe from "./pages/Payment/PaymentWithStripe";

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
        <HomeTemplate path="/orders" Component={Orders} />
        <HomeTemplate path="/checkout" Component={Checkout} />
        <HomeTemplate path="/payment" Component={PaymentWithStripe} />
        <HomeTemplate exact path="/" Component={Home} />
      </div>
    </Router>
  );
}

export default App;
