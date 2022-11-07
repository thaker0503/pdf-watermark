const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }

  firebase.initializeAoo(firebaseConfig)
  const database = firebase.firestore();
  const user = database.collection('Users')
  module.exports = Users;