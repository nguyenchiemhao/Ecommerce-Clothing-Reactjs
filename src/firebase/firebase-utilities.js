import * as firebase from "firebase";
import "firebase/firestore"; // for DB
import "firebase/auth"; //for authentication

const config = {
  apiKey: "AIzaSyAQranizMriCZES_gIwdqdHicmNxIDzcBU",
  authDomain: "ecommerce-clothing-b1aca.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-b1aca.firebaseio.com",
  projectId: "ecommerce-clothing-b1aca",
  storageBucket: "ecommerce-clothing-b1aca.appspot.com",
  messagingSenderId: "627203628995",
  appId: "1:627203628995:web:8bcbdee0d3315c9a6c2776",
  measurementId: "G-8FFHHTVKBW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const signOut = auth.signOut();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
