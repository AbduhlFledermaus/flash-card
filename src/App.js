import React from 'react';
import firebase from 'firebase';
import EasterEgg from './EasterEgg';
import Button from '@material-ui/core/Button';
import './App.css';

function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyApLGBjABs8n-4pQD1SmGArIBNJem_wVcU',
    authDomain: 'flashcard-6c43d.firebaseapp.com',
    databaseURL: 'https://flashcard-6c43d.firebaseio.com',
    projectId: 'flashcard-6c43d',
    storageBucket: 'flashcard-6c43d.appspot.com',
    messagingSenderId: '362798135144',
    appId: '1:362798135144:web:8b8884570d955c736a08dd'
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();

  database
    .collection('user')
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
    });

  return (
    <div className="App">
      <EasterEgg />

      <div className="container">
        <h1>FLASHCARD</h1>
      </div>
      <div>
        <h5>
          {' '}
          "Beginnen Sie jetzt mit den Online Karteikarten zu lernen! <br></br>
          sparen sie papier und Zeit<br></br> Verzeichnen sie sofortige lernerfolge"{' '}
        </h5>
        <div className="App-button-container">
          <div className="App-button">
            <Button variant="contained">Anmelden</Button>
          </div>
          <div className="App-button">
            <Button variant="contained">Registrieren</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
