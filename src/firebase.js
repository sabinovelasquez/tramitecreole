import firebase from 'firebase/app'
import 'firebase/firestore'
import defaultConfig from './config/defaultConfig'

export const db = firebase
  .initializeApp({
    apiKey: defaultConfig.FIREBASE_API_KEY,
    authDomain: "tramite-creole.firebaseapp.com",
    databaseURL: "https://tramite-creole.firebaseio.com",
    projectId: "tramite-creole",
    storageBucket: "tramite-creole.appspot.com",
    messagingSenderId: "197341275866",
    appId: "1:197341275866:web:2fb9797cf7288a24e7e7e3",
    measurementId: "G-3GPZTGPP9H"
}).firestore()
