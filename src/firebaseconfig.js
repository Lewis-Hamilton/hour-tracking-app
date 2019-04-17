import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDJ_MtPcrxpHtI8PLuXIHZLRYkzePGzqGc",
  authDomain: "hour-tracking-app.firebaseapp.com",
  databaseURL: "https://hour-tracking-app.firebaseio.com",
  projectId: "hour-tracking-app",
  storageBucket: "hour-tracking-app.appspot.com",
  messagingSenderId: "543747530191"
};
firebase.initializeApp(config);

//export default firebaseApp.firestore()