import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment/Payment';
import Orders from "./Orders";
import FullProduct from "./Product/FullProduct/FullProduct";
function App() {
  const [state,dispatch]=useStateValue();
    function Parent(){
        return (
            <div>
                <Route path = '/' component={Header}/>
                <Route path = '/fullProduct' component={FullProduct}/>

            </div>
        )
    }
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

         <Route path="/fullProduct" component={Parent}/>







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
