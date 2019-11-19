import React from 'react';
import {
 
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import Home from './Components/Marketing/Home';
// import Onboarding from './Components/Onboarding/Onboarding';
import NavBar from './Components/Navigation/index';
import DashBoard from './Components/Dashboard/DashBoard';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        {/* <Route  path='/onboarding'> */}
          {/* <Onboarding/> */}
        {/* </Route> */}
        <Route path="/dashBoard">
          <DashBoard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
