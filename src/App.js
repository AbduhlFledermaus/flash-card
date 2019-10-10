import React from "react";
import firebase from "firebase";
import EasterEgg from "./EasterEgg";
import Landing from "./Landing";
import "./App.css";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyApLGBjABs8n-4pQD1SmGArIBNJem_wVcU",
    authDomain: "flashcard-6c43d.firebaseapp.com",
    databaseURL: "https://flashcard-6c43d.firebaseio.com",
    projectId: "flashcard-6c43d",
    storageBucket: "flashcard-6c43d.appspot.com",
    messagingSenderId: "362798135144",
    appId: "1:362798135144:web:8b8884570d955c736a08dd"
  };

  firebase.initializeApp(firebaseConfig);

  return (
    <div className="App">
      <EasterEgg />
      <Landing />
    </div>
  );
}

export default App;
