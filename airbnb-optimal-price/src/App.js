import React from 'react';
import {
 
  Switch,
  Route
  
} from "react-router-dom";
import './App.css';
import Home from './Components/Marketing/Home';
<<<<<<< HEAD
import Onboarding from './Components/Onboarding/Onboarding';
import DashBoard from './Components/Dashboard/DashBoard';
=======
// import Onboarding from './Components/Onboarding/Onboarding';
import NavBar from './Components/Navigation/index';
>>>>>>> 5298a76f30410c265afb1c88a6b76715e99a6d46


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
<<<<<<< HEAD
        <Route  path='/onboarding'>
          <Onboarding/>
        </Route>
        <Route path='/dashBoard'>
          <DashBoard/>
        </Route>
=======
        {/* <Route  path='/onboarding'> */}
          {/* <Onboarding/> */}
        {/* </Route> */}
>>>>>>> 5298a76f30410c265afb1c88a6b76715e99a6d46
      </Switch>
    </div>
  );
}

export default App;
