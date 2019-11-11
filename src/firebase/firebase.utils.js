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

  export const createUserProfileDocument = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;