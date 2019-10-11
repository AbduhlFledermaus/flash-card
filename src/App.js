import React, { useReducer } from "react";
import { Context, initialState, reducer } from "./store";

import firebase from "firebase";
import EasterEgg from "./EasterEgg";
import Routes from "./Routes";
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

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <div className="App">
        <Routes />
        <EasterEgg />
      </div>
    </Context.Provider>
  );
}

export default App;
