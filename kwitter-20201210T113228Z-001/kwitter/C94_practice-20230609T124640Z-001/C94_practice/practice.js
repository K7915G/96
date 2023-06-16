const firebaseConfig = {
    apiKey: "AIzaSyAKObNYxNhleXKHelAvOxcF957rEm1XAz4",
    authDomain: "kwitter-f11cf.firebaseapp.com",
    databaseURL: "https://kwitter-f11cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-f11cf",
    storageBucket: "kwitter-f11cf.appspot.com",
    messagingSenderId: "69059248241",
    appId: "1:69059248241:web:380b2e1d1c7a5784d69bd0",
    measurementId: "G-6J9MSYDH26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}