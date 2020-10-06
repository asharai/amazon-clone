import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import Orders from "./Orders";
function App() {
  const [state,dispatch]=useStateValue();
  useEffect(()=>{
  auth.onAuthStateChanged(authUser =>{
    console.log('The user is',authUser);
    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })
    }
    else{
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
  },[])
  return (
<Router>
<div className="App">    
 
     <Switch>
  <Route path="/login">    
 <Login/>
   </Route>
     <Route path="/checkout">    
     <Header/>    
    <Checkout/>
   </Route>
       <Route path="/orders">
         <Header/>
         <Orders/>
       </Route>
   <Route path="/payment">    
     <Header/>    
    <Payment/>
   </Route>
   <Route path="/">  
   <Header/>    
    <Home/ >
   </Route>
     </Switch>
    </div>
</Router>
  );
}

export default App;
