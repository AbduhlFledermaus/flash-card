import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./Landing";
import Welcome from "./Welcome";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/welcome:id" component={Welcome} />
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
