import "./App.css";
import React from "react";
import firebase from "firebase";

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
	database
		.collection("PeriodicTableOfElements")
		.get()
		.then(snapshot => {
			snapshot.docs.forEach(doc => {
				console.log(doc.data());
			});
		});

	return (
		<div className="App">
			<nav class="light-blue lighten-1" role="navigation">
				<div class="nav-wrapper container">
					<a id="logo-container" href="#" class="brand-logo">
						Logo
					</a>
					<ul class="right hide-on-med-and-down">
						<li>
							<a href="#">Navbar Link</a>
						</li>
					</ul>

					<ul id="nav-mobile" class="sidenav">
						<li>
							<a href="#">Navbar Link</a>
						</li>
					</ul>
					<a href="#" data-target="nav-mobile" class="sidenav-trigger">
						<i class="material-icons">menu</i>
					</a>
				</div>
			</nav>
			<div class="section no-pad-bot" id="index-banner">
				<div class="container">
					<h1 class="header center orange-text">flashcard</h1>
					<div class="row center">
						<h5 class="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
					</div>
					<div class="row center">
						<a
							href="http://materializecss.com/getting-started.html"
							id="download-button"
							class="btn-large waves-effect waves-light orange"
						>
							Log In
						</a>
						<br></br>
						<br></br>
						<a
							href="http://materializecss.com/getting-started.html"
							id="download-button"
							class="btn-large waves-effect waves-light orange"
						>
							Sign up
						</a>
					</div>
				</div>
			</div>

			<div class="container">
				<div class="section">
					<div class="row">
						<div class="col s12 m4">
							<div class="icon-block">
								<h2 class="center light-blue-text">
									<i class="material-icons">flash_on</i>
								</h2>
								<h5 class="center">Speeds up development</h5>

								<p class="light">
									We did most of the heavy lifting for you to provide a default stylings that incorporate our custom
									components. Additionally, we refined animations and transitions to provide a smoother experience for
									developers.
								</p>
							</div>
						</div>

						<div class="col s12 m4">
							<div class="icon-block">
								<h2 class="center light-blue-text">
									<i class="material-icons">group</i>
								</h2>
								<h5 class="center">User Experience Focused</h5>

								<p class="light">
									By utilizing elements and principles of Material Design, we were able to create a framework that
									incorporates components and animations that provide more feedback to users. Additionally, a single
									underlying responsive system across all platforms allow for a more unified user experience.
								</p>
							</div>
						</div>

						<div class="col s12 m4">
							<div class="icon-block">
								<h2 class="center light-blue-text">
									<i class="material-icons">settings</i>
								</h2>
								<h5 class="center">Easy to work with</h5>

								<p class="light">
									We have provided detailed documentation as well as specific code examples to help new users get
									started. We are also always open to feedback and can answer any questions a user may have about
									Materialize.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer class="page-footer orange">
				<div class="container">
					<div class="row">
						<div class="col l6 s12">
							<h5 class="white-text">About Flashcard</h5>
							<p class="grey-text text-lighten-4">Dieses Projekt der Abschlussklasse der LBS 4 entsanden</p>
						</div>
						<div class="col l3 s12"></div>
						<div class="col l3 s12"></div>
					</div>
				</div>
				<div class="footer-copyright">
					<div class="container">
						Made by <a class="orange-text text-lighten-3">Simon Hagn</a>
					</div>
				</div>
			</footer>

			<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
			<script src="js/materialize.js"></script>
			<script src="js/init.js"></script>
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
