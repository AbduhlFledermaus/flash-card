import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Welcome from "./Welcome";
import Logout from "./Logout";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/welcome:id" component={Welcome} />
      <Route exact path="/logout" component={Logout} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
