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
        <PrivateRoute  path="/dashboard" render ={()=><DashBoard/>}  />
        <Route    path="/SignUp" component={SignUp} />
        <Route    path="/ForgetPassword" component={ForgetPassword} />


        
    </div>
  );
}

export default App;
