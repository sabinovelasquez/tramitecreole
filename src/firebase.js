import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
  apiKey: "AIzaSyCsdAHx_iho6HCG9jojJx4wNNA9uOHMRe4",
  authDomain: "southernlands.firebaseapp.com",
  databaseURL: "https://southernlands.firebaseio.com",
  projectId: "southernlands",
  storageBucket: "southernlands.appspot.com",
  messagingSenderId: "482315407690",
  appId: "1:482315407690:web:c0c44da93e932fb4f371b3",
  measurementId: "G-X2VYBEMCN7"
}).firestore()

// const { TimeStamp, GeoPoint } = firebase.firestore
// export { TimeStamp, GeoPoint }

// db.settings({ timestampsInSnapshots: true })
