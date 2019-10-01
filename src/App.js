import React from 'react';
import firebase from 'firebase';
import './App.css';

const firebaseConfig = {
  apiKey: '-R351WSFX0sq6g',
  authDomain: '.firebaseapp.com',
  databaseURL: '.firebaseio.com',
  projectId: 'periodictable-af684',
  storageBucket: 'periodictable-af684.appspot.com',
  messagingSenderId: '821428636191',
  appId: '1:821428636191:web:11908fe1afd384429b632a',
  measurementId: 'G-2Y1BN0FZXG'
};

function App() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  const database = firebase.firestore();
  database
    .collection('PeriodicTableOfElements')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
    });

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
  );
}

export default App;
