import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Context } from "./store";
import "./Landing.css";
import Login from "./Login";
import Register from "./Register";

/**
 * Logout
 *
 * @param {*} props
 */
function Logout(props) {
  const { store, dispatch } = useContext(Context);

  useEffect(
    () =>
      dispatch({
        type: "setUser",
        value: {}
      }),
    [dispatch]
  );

  return (
    <div className="Landing">
      <h1>FLASHCARD</h1>
      <h3>Erfolgreich ausgeloggt!</h3>

      <div className="Landing-button-container">
        <div className="Landing-button">
          <Login />
        </div>
        <div className="Landing-button">
          <Register />
        </div>
      </div>
    </div>
  );
}

export default Logout;
