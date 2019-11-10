import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAF8_uUUZ8vdhT3CS46uRBhBzChh2CtT0E",
    authDomain: "store-db-55c7b.firebaseapp.com",
    databaseURL: "https://store-db-55c7b.firebaseio.com",
    projectId: "store-db-55c7b",
    storageBucket: "store-db-55c7b.appspot.com",
    messagingSenderId: "430411875179",
    appId: "1:430411875179:web:d2690df8edcb6f9896822e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;