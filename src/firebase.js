import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyBNsE0FI8PP5FTKAA72K1f2KMLLv1DAsC0",
  authDomain: "clone-26e4e.firebaseapp.com",
  databaseURL: "https://clone-26e4e.firebaseio.com",
  projectId: "clone-26e4e",
  storageBucket: "clone-26e4e.appspot.com",
  messagingSenderId: "331599336659",
  appId: "1:331599336659:web:72a65e92365e5d9389f026",
  measurementId: "G-8WBKZLX5YX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
