import React from "react";
import firebase from "firebase";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log(firebase);

  const database = firebase.firestore();
  /*
  database
    .collection("PeriodicTableOfElements")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {
        console.log(doc.data());
      });
	});
	*/

  /*const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: "none"
    }
  }));*/

  return (
    <div className="App">
      <div className="topnav" id="myTopnav">
        <a href="#home" class="active">
          {" "}
          Home{" "}
        </a>
        <a href="#news">Anmelden</a>
        <a href="#contact">Registrieren</a>
        <a href="#about">Logo</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
      <body>
        <div className="container">
          <h1>FLASHCARD</h1>
        </div>

        <div>
          <h5>
            {" "}
            "Beginnen Sie jetzt mit den Online Karteikarten zu lernen! <br></br>
            sparen sie papier und Zeit<br></br> Verzeichnen sie sofortige
            lernerfolge"{" "}
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
      </body>
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
