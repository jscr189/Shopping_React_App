import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDLg4UC26Lud5m8Wa-qttBu2A62cNoHkrQ",
    authDomain: "crwn-db-e45b8.firebaseapp.com",
    databaseURL: "https://crwn-db-e45b8.firebaseio.com",
    projectId: "crwn-db-e45b8",
    storageBucket: "crwn-db-e45b8.appspot.com",
    messagingSenderId: "878851162361",
    appId: "1:878851162361:web:00c4ff6f24ad4d78436228",
    measurementId: "G-5XMLN1HKH7"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;