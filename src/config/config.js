import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";  // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi78ryVirCe10Wa9INSs1WtSEDy3OS27o",
  authDomain: "codeservirreactapp.firebaseapp.com",
  projectId: "codeservirreactapp",
  storageBucket: "codeservirreactapp.appspot.com",
  messagingSenderId: "596886885380",
  appId: "1:596886885380:web:3e5cab84baf8816c5d1151",
  measurementId: "G-NHT5W6WCFD",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, firebase, storage };
