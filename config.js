//npm install firebase@8.2.3

import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Resto do seu código...


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARcTrwNrSAx7WLAGSD-NPa6sN7YRnX_dE",
    authDomain: "bib2-6fdd3.firebaseapp.com",
    projectId: "bib2-6fdd3",
    storageBucket: "bib2-6fdd3.appspot.com",
    messagingSenderId: "694466454960",
    appId: "1:694466454960:web:daa77e301edfdbe0fc2275",
    measurementId: "G-736L03C4T5"
  };
  

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
