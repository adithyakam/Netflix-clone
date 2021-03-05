import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './Profile';

function App() {
  const user =useSelector(selectUser)
const dispatch = useDispatch()

useEffect(() => {

const unsub=auth.onAuthStateChanged(userAuth=>{
  if(userAuth){
    
dispatch(login({
  uid:userAuth.uid,
  email:userAuth.email
}))
  }else{
dispatch(logout())
  }
}) 

return unsub;
}, [dispatch])

  return (
    <div className="app">
     <Router>
     {
       (!user)?
        ( <LoginScreen/>)
       :(
        <Switch>
          <Route exact path='/'>    
          <HomeScreen/>
          </Route>
          <Route  path="/profile">
<Profile/>
          </Route>
       </Switch>
       )
     }
      
     </Router>
    </div> 
  );
}

export default App;
