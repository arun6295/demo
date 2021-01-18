import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBUqB_bMD9GPYc8ILhm_97nlUoHhyoTFDk",
    authDomain: "activity-3e747.firebaseapp.com",
    projectId: "activity-3e747",
    storageBucket: "activity-3e747.appspot.com",
    messagingSenderId: "407749654436",
    appId: "1:407749654436:web:427f8e5b84c6a189807331"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,storage,provider,firebase};