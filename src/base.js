import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // See Readme for details
    apiKey: "AIzaSyAi0WxYfm9Xm3hortSToKGmP-hvDYYgIGg",
    authDomain: "tkdpoomsae-cef41.firebaseapp.com",
    databaseURL: "https://tkdpoomsae-cef41.firebaseio.com",
    projectId: "tkdpoomsae-cef41",
    storageBucket: "",
    messagingSenderId: "32301455636"
  })

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base