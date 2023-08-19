
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBhIhU4rHeXWLXmMIcdOOMxbDJbgsFjzlE",
  authDomain: "whatsapp-clone-cfb5a.firebaseapp.com",
  projectId: "whatsapp-clone-cfb5a",
  storageBucket: "whatsapp-clone-cfb5a.appspot.com",
  messagingSenderId: "452256824963",
  appId: "1:452256824963:web:6de845b9dc2825b02525b6",
  measurementId: "G-XJ9QP265N9"
};

const app= firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db = app.firestore()

const googleProvider = new  firebase.auth.GoogleAuthProvider();

export {auth, googleProvider};

export default db;