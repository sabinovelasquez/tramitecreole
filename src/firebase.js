import firebase from 'firebase/app'
import 'firebase/firestore'
import defaultConfig from './config/defaultConfig'

export const db = firebase
  .initializeApp({
    apiKey: defaultConfig.FIREBASE_API_KEY,
    authDomain: "southernlands.firebaseapp.com",
    databaseURL: "https://southernlands.firebaseio.com",
    projectId: "southernlands",
    storageBucket: "southernlands.appspot.com",
    messagingSenderId: "482315407690",
    appId: "1:482315407690:web:c0c44da93e932fb4f371b3",
    measurementId: "G-X2VYBEMCN7"
}).firestore()
