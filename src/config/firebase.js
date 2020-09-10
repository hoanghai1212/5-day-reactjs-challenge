import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD0g9HfR_AntpWCf2njQ-pscSEq7z_iVLc",
  authDomain: "clone-b4a2c.firebaseapp.com",
  databaseURL: "https://clone-b4a2c.firebaseio.com",
  projectId: "clone-b4a2c",
  storageBucket: "clone-b4a2c.appspot.com",
  messagingSenderId: "506933348680",
  appId: "1:506933348680:web:b25c181d0e495e42c94b7d",
  measurementId: "G-HBTZTP2MS9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };