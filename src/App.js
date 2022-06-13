import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from "./components/Footer";
import Categories from './components/Categories';
import Payment from './components/Payment';
import Orders from "./components/Orders.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import React,{useEffect} from "react";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51L19tOSHKachyYg7yYX8HO7zHJAsR6y8wJeB4l3eYdVbboTZ0hRjjMKfOyWykvc3WAL4dREX6N9XilO5VtHOwpA9001d8jMdLM");

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("user ===",authUser);
      if(authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })

      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header/>
            <Categories/>
            <Orders/>
          </Route>
          <Route path ="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Categories/>
            <Checkout/>
            <Footer/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header/>
            <Categories/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>    
      </Router>
  );
  
}

export default App;
