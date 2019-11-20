import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/Dashboard/DashBoard";
import Login from './Components/Onboarding/Login'
import SignUp from './Components/Onboarding/SignUp'
import ForgetPassword from './Components/Onboarding/ForgetPassword'
import HeaderLayout from './Components/Onboarding/HeaderLayout'

function App() {
  return (
    <div >
        <HeaderLayout />
       
        <Route exact path="/" component={Login} />
        <Route  exact path="/SignUp" component={SignUp} />
        <Route  exact path="/ForgetPassword" component={ForgetPassword} />
        <Route  exact path="/dashboard" component={DashBoard} />

        
    </div>
  );
}

export default App;
