import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'




var firebaseConfig = {
    apiKey: "AIzaSyB9WETRQ3Fq15ofru1ehabqXiNeojUrcgY",
    authDomain: "enersinc-9cfb7.firebaseapp.com",
    databaseURL: "https://enersinc-9cfb7.firebaseio.com",
    projectId: "enersinc-9cfb7",
    storageBucket: "",
    messagingSenderId: "110232506594",
    appId: "1:110232506594:web:fc11c2053eb523fe580ebb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;
