import './App.css';
import React, { useEffect, useState } from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const firebaseConfig = require('./firebase-config.json');

// Instantiate a Firebase app.
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function App() {

  const [isSignedIn, setIsSignedIn] = useState(undefined); // Local signed-in state.

  console.log('render', isSignedIn);

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      console.log('opa, ta logado');
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div className="App">
      <h1>Bolazzo</h1>
      {
        // -------------------------------
        // Show Firebase Auth
        // -------------------------------
        isSignedIn !== undefined && !isSignedIn &&
        <div>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      }

      {
        // -------------------------------
        // User already logged in
        // -------------------------------
        isSignedIn &&
        <div>
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
        </div>
      }

    </div>

  )
}

export default App;