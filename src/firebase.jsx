import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByvYkbVmHWakKoFASeCjg7M_uR5vNIY20",
  authDomain: "film-project-9ecfa.firebaseapp.com",
  projectId: "film-project-9ecfa",
  storageBucket: "film-project-9ecfa.appspot.com",
  messagingSenderId: "934299445211",
  appId: "1:934299445211:web:2bda2a99086fc9a2ad69fe",
  measurementId: "G-0K9GSEJ5CG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
