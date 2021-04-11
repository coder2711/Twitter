var firebaseConfig = {
    apiKey: "AIzaSyAfUrztVrOC5BkTOOSdGqQ2pZDcZyOEvsU",
    authDomain: "twitter-25372.firebaseapp.com",
    databaseURL: "https://twitter-25372-default-rtdb.firebaseio.com",
    projectId: "twitter-25372",
    storageBucket: "twitter-25372.appspot.com",
    messagingSenderId: "687348250179",
    appId: "1:687348250179:web:41fa888eb880d1ed5e06f6",
    measurementId: "G-LNX6TQ5GF6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("name");
document.getElementById("welcome").innerHTML= "Welcome "+username+" !!!!"