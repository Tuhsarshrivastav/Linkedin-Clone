import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHRlruATZSUJTDFzTbAv_fYaO59skmxO8",

  authDomain: "linkedin-41c87.firebaseapp.com",

  projectId: "linkedin-41c87",

  storageBucket: "linkedin-41c87.appspot.com",

  messagingSenderId: "998788372757",

  appId: "1:998788372757:web:492300c295e351350db11c",

  measurementId: "G-MDRWW8TNGX",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
