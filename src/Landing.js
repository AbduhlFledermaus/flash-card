import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./Landing.css";

/**
 * Runs the landing page that allows the user to login or register
 */

function Landing() {
  return (
    <div className="Landing">
      <h1>FLASHCARD</h1>

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

export default Landing;
