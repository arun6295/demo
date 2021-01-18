import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2p2fg9xtea7sYu5-1HaLhMMMviw9PreI",
    authDomain: "product-store-270d3.firebaseapp.com",
    databaseURL: "https://product-store-270d3-default-rtdb.firebaseio.com",
    projectId: "product-store-270d3",
    storageBucket: "product-store-270d3.appspot.com",
    messagingSenderId: "416608963132",
    appId: "1:416608963132:web:6cc7de9116c01a09845139",
    measurementId: "G-2FSFRY6GY8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;