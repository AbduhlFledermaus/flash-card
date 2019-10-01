import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="nav-conatiner">
        <nav>
          <ul>
            <li>
              <a href="default.asp">Register</a>
            </li>
            <li>
              <a href="news.asp">LogIn</a>
            </li>
            <li>
              <a href="contact.asp">Contact</a>
            </li>
            <li>
              <a href="about.asp">About</a>
            </li>
            <li>
              <h1>FlashCard</h1>
            </li>
          </ul>
        </nav>

        <div class="grid-container">
          <div class="item1"></div>
          <div class="item2"></div>
          <div class="item3">Hier sollte die App sein</div>
          <div class="item4"></div>
          <div class="item5">created by Simon Hagn</div>
        </div>
      </div>
    </div>
  );
}

export default App;
