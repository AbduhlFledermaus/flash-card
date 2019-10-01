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
          <div class="item3">Main</div>
          <div class="item4">Right</div>
          <div class="item5">Footer</div>
        </div>
      </div>
    </div>

    /*<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.0.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyApLGBjABs8n-4pQD1SmGArIBNJem_wVcU",
    authDomain: "flashcard-6c43d.firebaseapp.com",
    databaseURL: "https://flashcard-6c43d.firebaseio.com",
    projectId: "flashcard-6c43d",
    storageBucket: "flashcard-6c43d.appspot.com",
    messagingSenderId: "362798135144",
    appId: "1:362798135144:web:8b8884570d955c736a08dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
*/
  );
}

export default App;
