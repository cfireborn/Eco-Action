/*
var firebase = require("firebase");

// Firebase src
src="https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js"
src="https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js"

// Firebase connection configuration
var firebaseConfig = {
    apiKey: "AIzaSyBz-fXKY2GLHboYvuAx_gM7zS2ZzQfzu7U",
    authDomain: "sustainup-csci201.firebaseapp.com",
    databaseURL: "https://sustainup-csci201.firebaseio.com",
    projectId: "sustainup-csci201",
    storageBucket: "sustainup-csci201.appspot.com",
    messagingSenderId: "15287537434",
    appId: "1:15287537434:web:e70b91773a82c7c334a6a3",
    measurementId: "G-5FY9EMYG64"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
*/
function register(email, username, password, firstname, lastname)
{
    var db = firebase.database();
    var ref = db.ref('users/' + username);
    if(ref.once('value').val() == null)
    {
        writeUserData(email, username, password, firstname, lastname);
        return true;
    }
    else
    {
        return false;
    }
}

function writeUserData(email, username, password, firstname, lastname)
{
    firebase.database().ref('users/' + username).set({
        email: email,
        first: firstname,
        last: lastname,
        password: password,
        completed: 0
    });
}

module.exports = {register}

