import React from 'react';
import {
 
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import Home from './Components/Marketing/Home';
import Onboarding from './Components/Onboarding/Onboarding';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route  path='/onboarding'>
          <Onboarding/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
