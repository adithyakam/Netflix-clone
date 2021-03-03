import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen';

function App() {
  const user =null;
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
       </Switch>
       )
     }
      
     </Router>
    </div> 
  );
}

export default App;
