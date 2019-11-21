import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./Components/Dashboard/DashBoard";
import Login from './Components/Onboarding/Login'
import SignUp from './Components/Onboarding/SignUp'
import ForgetPassword from './Components/Onboarding/ForgetPassword'
import Onboarding from './Components/Onboarding/Onboarding'
import PrivateRoute from './Components/PrivateRoute'
import history from './history'

function App() {
  return (
    <div >

        <Onboarding />
       <Router history={history}>
        <Route exact path="/"  component ={Login}  />
        <Route   exact path="/SignUp" component={SignUp} />
        <Route   exact path="/ForgetPassword" component={ForgetPassword} />
        <PrivateRoute  path="/dashBoard" component={DashBoard}  />

        </Router>
        
    </div>
  );
}

export default App;
