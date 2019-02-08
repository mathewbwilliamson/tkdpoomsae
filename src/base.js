import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // See Readme for details
    apiKey: "AIzaSyCGJDVbEGtFQ6wub9dtVdMVlaHR1rDuUag",
    authDomain: "fir-template-mw.firebaseapp.com",
    databaseURL: "https://fir-template-mw.firebaseio.com",
    projectId: "fir-template-mw",
    storageBucket: "fir-template-mw.appspot.com",
    messagingSenderId: "314225114233"
  })

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base