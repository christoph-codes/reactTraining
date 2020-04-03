
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRcU5EyxofQHRgjr7A45Otl4HC78OhMxo",
    authDomain: "burgerbuilder-ae1d1.firebaseapp.com",
    databaseURL: "https://burgerbuilder-ae1d1.firebaseio.com",
    projectId: "burgerbuilder-ae1d1",
    storageBucket: "burgerbuilder-ae1d1.appspot.com",
    messagingSenderId: "328712363904",
    appId: "1:328712363904:web:2750c5ab2c6c857058ab65",
    measurementId: "G-JLPJ32NEH5"
  };
  // Initialize Google Analytics
//   firebase.analytics();

    // Initialize Firebase
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    export default firebaseApp.firestore();