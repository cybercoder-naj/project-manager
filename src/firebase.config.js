import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDJv5MrOzOl6OVJ7Gd2sDOtY-AkR-tF_NY",
  authDomain: "project-manager-a23b7.firebaseapp.com",
  projectId: "project-manager-a23b7",
  storageBucket: "project-manager-a23b7.appspot.com",
  messagingSenderId: "401676113945",
  appId: "1:401676113945:web:0900561b4188f6cb6b3288",
  measurementId: "G-D9REVBPHCX"
}
firebase.initializeApp(firebaseConfig)
//firebase.analytics()

const db = firebase.firestore()

export default db