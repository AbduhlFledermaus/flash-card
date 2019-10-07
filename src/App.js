import React from 'react';
import firebase from 'firebase';
import EasterEgg from './EasterEgg';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const firebaseInit = () => {
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
    /*
    database
      .collection('user')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data());
        });
      });
    */
  };

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
            <Login />
          </div>
          <div className="App-button">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
