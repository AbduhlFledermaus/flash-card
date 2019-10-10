import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./Landing.css";

function Landing(props) {
  return (
    <div className="Landing">
      <h1>FLASHCARD</h1>
      <h5>
        "Beginnen Sie jetzt mit den Online Karteikarten zu lernen! <br></br>
        sparen sie papier und Zeit<br></br> Verzeichnen sie sofortige
        lernerfolge"
      </h5>
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
