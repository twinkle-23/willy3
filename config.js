import * as firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyC50E0wJiFfRPDESr9anq9WmwkvVWaCUqk",
    authDomain: "willy-6bfbe.firebaseapp.com",
    projectId: "willy-6bfbe",
    storageBucket: "willy-6bfbe.appspot.com",
    messagingSenderId: "333796258916",
    appId: "1:333796258916:web:f78f6e4adbe00c138d9b71"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();