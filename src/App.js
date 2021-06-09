import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {getItem} from './utils/storage.helper'
// components
import Login from "./views/auth/Login";
import NotFound from "./views/common/NotFound"

// admin dashboard
import DashBoard from './views/admin/Dashboard'

if (localStorage.getItem('u_p_d_1')) {

  const decoded = getItem('u_p_d_1');

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.expires < currentTime) {
    // Logout user
    // store.dispatch(logoutUser());
    // // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/";
  }
}


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
