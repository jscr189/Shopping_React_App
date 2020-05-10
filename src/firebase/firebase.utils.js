import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDLg4UC26Lud5m8Wa-qttBu2A62cNoHkrQ",
    authDomain: "crwn-db-e45b8.firebaseapp.com",
    databaseURL: "https://crwn-db-e45b8.firebaseio.com",
    projectId: "crwn-db-e45b8",
    storageBucket: "crwn-db-e45b8.appspot.com",
    messagingSenderId: "878851162361",
    appId: "1:878851162361:web:00c4ff6f24ad4d78436228",
    measurementId: "G-5XMLN1HKH7"
  };

  firebase.initializeApp(firebaseConfig);
  
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;