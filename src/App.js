import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "./views/auth/Login";
import NotFound from "./views/common/NotFound"


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Redirect to='/login' />
          </Route>
          <Route exact path="/login" >
            <Login />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
