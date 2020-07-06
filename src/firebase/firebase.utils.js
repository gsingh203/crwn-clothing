import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWU_AnC2HUVEwxSakAiKHzE1L1XS9e_mM",
    authDomain: "crwn-db-2ca07.firebaseapp.com",
    databaseURL: "https://crwn-db-2ca07.firebaseio.com",
    projectId: "crwn-db-2ca07",
    storageBucket: "crwn-db-2ca07.appspot.com",
    messagingSenderId: "324135491889",
    appId: "1:324135491889:web:de6bfb6b9241dbbaa9f810"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;