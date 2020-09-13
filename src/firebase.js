import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBjCkpyRE27dZRj8GyM-BItzgVl4hs7xqk",
    authDomain: "clone-5cb0c.firebaseapp.com",
    databaseURL: "https://clone-5cb0c.firebaseio.com",
    projectId: "clone-5cb0c",
    storageBucket: "clone-5cb0c.appspot.com",
    messagingSenderId: "701956904646",
    appId: "1:701956904646:web:978ca68680ac1d21fba9c7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth}