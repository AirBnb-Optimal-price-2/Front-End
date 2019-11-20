import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/Dashboard/DashBoard";
import Login from './Components/Onboarding/Login'
import SignUp from './Components/Onboarding/SignUp'
import ForgetPassword from './Components/Onboarding/ForgetPassword'
import Onboarding from './Components/Onboarding/Onboarding'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <div >
        <Onboarding />
       
        <Route exact path="/"  render={()=><Login/>}  />
        <Route  exact path="/SignUp" component={SignUp} />
        <Route  exact path="/ForgetPassword" component={ForgetPassword} />
        <PrivateRoute  exact path="/dashboard" render={props => <DashBoard {...props}/>} />


        
    </div>
  );
}

export default App;
