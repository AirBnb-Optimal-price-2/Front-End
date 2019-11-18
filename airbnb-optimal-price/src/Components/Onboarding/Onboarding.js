import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

function Onboarding() {
  const [users, addUser] = useState([])
  const [loggedIn, changeLogIn] = useState(false)
  if (loggedIn === false) {
    return (
      <div >
        <Link to='/onboarding/login' >Log In</Link>
        <Link to='/onboarding/register'>Register</Link>

        <Route exact path='/onboarding/login' render={props => <Login {...props} loggedIn={loggedIn} changeLogIn={changeLogIn} users={users}>Log In</Login>} />
        <Route exact path='/onboarding/register' render={props => <Register {...props} addUser={addUser} users={users}>Register</Register>} />

      </div>
    );
  } else {
    return (
      <a href='#' >log Out</a>
    )
  }
}

export default Onboarding;
