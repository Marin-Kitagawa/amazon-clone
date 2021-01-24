import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function App() {
  const [{ user }, dispatch] = useStateValue();
  // Code which runs based on a given consition -> useEffect()
  useEffect(() =>{
    // Listener for authentication
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any cleanup operation goes here
      unsubscribe();
    }
  }, [])
  // First argument is a function Second argument is dependency
  // Runs once when the App component loads and eveytime the dependency changes
  console.log("USER IS >>> ", user);


  return (
    // No refresh (react-router)
    <Router>
      {/* BEM Convention */}
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* We can use wildcards like /checkout/:someRandomId/page */}
            {/* :is the main thing here */}
            <Header/>
              <Checkout/>
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/">
          <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
{/* localhost:3000*/}
{/* localhost:3000/checkout*/}
{/* localhost:3000/login */}
{/* Solution: REACT-Router */}
export default App;
