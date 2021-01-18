import  firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBUF5-AnkiMclm4JioDEbxVJX8BrrdaudY",
    authDomain: "activity-1bd3c.firebaseapp.com",
    projectId: "activity-1bd3c",
    storageBucket: "activity-1bd3c.appspot.com",
    messagingSenderId: "83849196303",
    appId: "1:83849196303:web:aa8455de73383df17a847a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const storage=firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
  
export {auth,storage,provider,firebase};


