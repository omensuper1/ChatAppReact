import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDrXu8OU2UvK5lIy_k666riDR2N1jmHWfw",
    authDomain: "chatapp-3c095.firebaseapp.com",
    projectId: "chatapp-3c095",
    storageBucket: "chatapp-3c095.appspot.com",
    messagingSenderId: "78993016114",
    appId: "1:78993016114:web:2e45cd2ec0ae30c9b6c32b",
    measurementId: "G-F5JG1X70VR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
